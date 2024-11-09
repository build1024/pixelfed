<?php

namespace App\Util\Lexer;

class RestrictedNames
{
    public static $additional = [
        'autoconfig',
        'blog',
        'broadcasthost',
        'copyright',
        'download',
        'domainadmin',
        'domainadministrator',
        'errors',
        'events',
        'example',
        'faq',
        'faqs',
        'features',
        'ftp',
        'guest',
        'guests',
        'hostmaster',
        'hostmaster',
        'imap',
        'info',
        'information',
        'is',
        'isatap',
        'it',
        'localdomain',
        'localhost',
        'mail',
        'mailer-daemon',
        'mailerdaemon',
        'marketing',
        'me',
        'mis',
        'mx',
        'no-reply',
        'nobody',
        'noc',
        'noreply',
        'ns0',
        'ns1',
        'ns2',
        'ns3',
        'ns4',
        'ns5',
        'ns6',
        'ns7',
        'ns8',
        'ns9',
        'owner',
        'pop',
        'pop3',
        'postmaster',
        'pricing',
        'root',
        'sales',
        'security',
        'signin',
        'signout',
        'smtp',
        'src',
        'ssladmin',
        'ssladministrator',
        'sslwebmaster',
        'sys',
        'sysadmin',
        'system',
        'tutorial',
        'tutorials',
        'usenet',
        'uucp',
        'webmaster',
        'wpad',
    ];

    public static $reserved = [
        // Reserved for instance admin
        'admin',
        'administrator',

        // Federation
        'authorize_interaction',

        // Static Assets
        'assets',
        'public',
        'storage',
        'htaccess',
        '.htaccess',
        'favicon.ico',
        'embed.js',
        'index.php',
        'manifest.json',
        'mix-manifest.json',
        'robots.txt',

        // Laravel Horizon
        'horizon',

        // Reserved routes
        'a',
        'app',
        'about',
        'aboutus',
        'about-us',
        'abuse',
        'actor',
        'actors',
        'account',
        'admins',
        'api',
        'audio',
        'auth',
        'avatar',
        'avatars',
        'b',
        'bartender',
        'broadcast',
        'broadcaster',
        'booth',
        'bouncer',
        'browse',
        'c',
        'cdn',
        'circle',
        'circles',
        'checkpoint',
        'collection',
        'collections',
        'community',
        'communities',
        'contact',
        'contact-us',
        'contact_us',
        'costar',
        'costars',
        'css',
        'd',
        'dashboard',
        'delete',
        'deleted',
        'deleting',
        'dmca',
        'db',
        'deck',
        'dev',
        'developer',
        'developers',
        'discover',
        'discovers',
        'dj',
        'doc',
        'docs',
        'docs',
        'drive',
        'drives',
        'driver',
        'e',
        'embed',
        'email',
        'emails',
        'emoji',
        'emojis',
        'error',
        'explore',
        'export',
        'exports',
        'external',
        'f',
        'fedi',
        'fediverse',
        'feed',
        'featured',
        'font',
        'fonts',
        'follow',
        'follows',
        'followme',
        'follow-me',
        'follow_me',
        'g',
        'go',
        'gdpr',
        'graph',
        'ghost',
        'ghosts',
        'global',
        'group',
        'groups',
        'h',
        'header',
        'headers',
        'home',
        'help',
        'help.center',
        'helpcenter',
        'help-center',
        'help_center',
        'help_center_',
        'help-center-',
        'help-center_',
        'help_center-',
        'i',
        'instance',
        'inbox',
        'img',
        'imgs',
        'image',
        'images',
        'invite',
        'invites',
        'import',
        'imports',
        'intent',
        'j',
        'join',
        'js',
        'k',
        'key',
        'l',
        'lang',
        'language',
        '_lang',
        '_language',
        'lab',
        'labs',
        'legal',
        'link',
        'live',
        'look',
        'look-back',
        'loop',
        'loops',
        'location',
        'locations',
        'login',
        'logout',
        'm',
        'media',
        'mini',
        'micro',
        'menu',
        'music',
        'my2020',
        'my2021',
        'my2022',
        'my2023',
        'my2024',
        'my2025',
        'my2026',
        'my2027',
        'my2028',
        'my2029',
        'my2030',
        'my',
        'n',
        'news',
        'new',
        'news',
        'news',
        'newsfeed',
        'newsroom',
        'newsrooms',
        'news-room',
        'news-rooms',
        'network',
        'networks',
        'o',
        'oauth',
        'official',
        'p',
        'page',
        'pages',
        'pin',
        'pins',
        'photo',
        'photos',
        'password',
        'portfolio',
        'portfolios',
        'pre',
        'post',
        'privacy',
        'private',
        'q',
        'quote',
        'query',
        'r',
        'redirect',
        'redirects',
        'register',
        'registers',
        'review',
        'reviews',
        'reset',
        'report',
        'results',
        'reports',
        'robot',
        'robots',
        's',
        'sc',
        'search',
        'sell',
        'send',
        'settings',
        'short',
        'shortcode',
        'status',
        'statuses',
        'site',
        'sites',
        'stage',
        'static',
        'story',
        'stories',
        'support',
        'svg',
        'svgs',
        't',
        'terms',
        'telescope',
        'timeline',
        'timelines',
        'tour',
        'tv',
        'u',
        'user',
        'users',
        'username',
        'usernames',
        'v',
        'valet',
        'video',
        'videos',
        'vendor',
        'w',
        'waiter',
        'wall',
        'whats-new',
        'whatsnew',
        'whatnew',
        'whats-news',
        'web',
        'ws',
        'wss',
        'www',
        'x',
        'y',
        'year',
        'year-in-review',
        'z',
        '400',
        '401',
        '403',
        '404',
        '500',
        '503',
        '504',
    ];

    public static function get()
    {
        $banned = [];

        if (config('instance.username.banned')) {
            $banned = array_map('trim', explode(',', config('instance.username.banned')));
        }

        $additional = self::$additional;
        $reserved = self::$reserved;

        $res = array_merge($additional, $reserved, $banned);
        $res = array_unique($res);
        sort($res);

        return $res;
    }
}
