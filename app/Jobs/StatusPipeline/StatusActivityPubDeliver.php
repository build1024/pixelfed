<?php

namespace App\Jobs\StatusPipeline;

use App\Models\Profile;
use App\Models\Status;
use App\Services\ActivityPubDeliveryService;
use App\Services\FractalService;
use App\Transformer\ActivityPub\Verb\CreateNote;
use App\Transformer\ActivityPub\Verb\CreateQuestion;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class StatusActivityPubDeliver implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $status;

	public $tries = 50;

	/**
	 * Delete the job if its models no longer exist.
	 *
	 * @var bool
	 */
	public $deleteWhenMissingModels = true;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Status $status)
    {
        $this->status = $status;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $status = $this->status;

        // Verify status exists
        if (! $status) {
            Log::info('StatusActivityPubDeliver: Status no longer exists, skipping job');

            return;
        }

        $profile = $status->profile;

        // Verify profile exists
        if (! $profile) {
            Log::info("StatusActivityPubDeliver: Profile no longer exists for status {$status->id}, skipping job");

            return;
        }

        // Wait until all media files are uploaded to cloud
		if (config_cache('pixelfed.cloud_storage')) {
			foreach ($status->media as $m) {
				if (!$m->cdn_url) {
					Log::notice('StatusActivityPubDeliver: Media ID ' . $m->id . ' is not yet uploaded to cloud. Retry in 5 seconds.');
					return $this->release(5);
				}
			}
		}

		// ignore group posts
        // if($status->group_id != null) {
        //     return;
        // }

        if ($status->local == false || $status->url || $status->uri) {
            return;
        }

        $audience = $status->profile->getAudienceInbox();

        $parentInbox = [];

        $mentions = $status->mentions
            ->filter(function ($f) {
                return $f->domain !== null;
            })
            ->values()
            ->map(function ($m) {
                return $m->sharedInbox ?? $m->inbox_url;
            })
            ->toArray();

        if ($status->in_reply_to_profile_id) {
            $parent = Profile::find($status->in_reply_to_profile_id);
            if ($parent && $parent->domain !== null) {
                $parentInbox = [
                    $parent->sharedInbox ?? $parent->inbox_url,
                ];
            }
        }

        $audience = array_values(array_unique(array_merge($audience, $mentions, $parentInbox)));

        if (empty($audience) || ! in_array($status->scope, ['public', 'unlisted', 'private'])) {
            // Return on profiles with no remote followers
            return;
        }

        switch ($status->type) {
            case 'poll':
                $activitypubObject = new CreateQuestion;
                break;

            default:
                $activitypubObject = new CreateNote;
                break;
        }

        $activity = FractalService::item($status, $activitypubObject);

        ActivityPubDeliveryService::pool($profile, $audience, $activity);
    }
}
