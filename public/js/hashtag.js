(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[6881],{42613:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var e=a(19755);function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,s){if(!t)return;if("string"==typeof t)return n(t,s);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,s)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,s){(null==s||s>t.length)&&(s=t.length);for(var a=0,e=new Array(s);a<s;a++)e[a]=t[a];return e}const o={props:["hashtag","hashtagCount"],data:function(){return{loaded:!1,page:1,authenticated:!1,following:!1,tags:[],top:[],forceNsfw:!1}},beforeMount:function(){this.authenticated=e("body").hasClass("loggedIn"),this.getResults(),this.hashtagCount=window.App.util.format.count(this.hashtagCount)},methods:{getResults:function(){var t=this;this.authenticated&&axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(t){window._sharedData.curUser=t.data,window.App.util.navatar()})),axios.get("/api/v2/discover/tag",{params:{hashtag:this.hashtag,page:this.page}}).then((function(s){var a=s.data,e=a.tags.filter((function(t){return!(!t||0==t.length||null==t.status)}));t.tags=e,t.loaded=!0,t.following=a.follows,t.page++}))},infiniteLoader:function(t){var s=this;this.page>(this.authenticated?29:10)?t.complete():axios.get("/api/v2/discover/tag",{params:{hashtag:this.hashtag,page:this.page}}).then((function(a){var e=a.data;if(e.tags.length){var n,o=e.tags.filter((function(t){return!(!t||0==t.length||null==t.status)}));if((n=s.tags).push.apply(n,i(o)),o.length>9)return void t.complete();s.page++,t.loaded()}else t.complete()}))},followHashtag:function(){var t=this;axios.post("/api/local/discover/tag/subscribe",{name:this.hashtag}).then((function(s){t.following=!0}))},unfollowHashtag:function(){var t=this;axios.post("/api/local/discover/tag/subscribe",{name:this.hashtag}).then((function(s){t.following=!1}))}}}},63869:(t,s,a)=>{"use strict";a.r(s),a.d(s,{render:()=>e,staticRenderFns:()=>i});var e=function(){var t=this,s=t._self._c;return s("div",[t.loaded?s("div",{staticClass:"container"},[s("div",{staticClass:"profile-header row my-5"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-md-9 d-flex align-items-center"},[s("div",{staticClass:"profile-details"},[s("div",{staticClass:"username-bar pb-2"},[s("p",{staticClass:"tag-header mb-0"},[t._v("#"+t._s(t.hashtag))]),t._v(" "),s("p",{staticClass:"lead"},[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.tags.length?t.hashtagCount:"0"))]),t._v(" posts")]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[t.authenticated&&t.tags.length?s("p",{staticClass:"pt-3 mr-4"},[t.following?s("button",{staticClass:"btn btn-outline-secondary font-weight-bold py-1 px-5",attrs:{type:"button"},on:{click:t.unfollowHashtag}},[t._v("\n\t\t\t\t\t\t\t\t\tUnfollow\n\t\t\t\t\t\t\t\t")]):s("button",{staticClass:"btn btn-primary font-weight-bold py-1 px-5",attrs:{type:"button"},on:{click:t.followHashtag}},[t._v("\n\t\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),s("div",{staticClass:"custom-control custom-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.forceNsfw,expression:"forceNsfw"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"nsfwSwitch"},domProps:{checked:Array.isArray(t.forceNsfw)?t._i(t.forceNsfw,null)>-1:t.forceNsfw},on:{change:function(s){var a=t.forceNsfw,e=s.target,i=!!e.checked;if(Array.isArray(a)){var n=t._i(a,null);e.checked?n<0&&(t.forceNsfw=a.concat([null])):n>-1&&(t.forceNsfw=a.slice(0,n).concat(a.slice(n+1)))}else t.forceNsfw=i}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold text-muted",attrs:{for:"nsfwSwitch"}},[t._v("Show NSFW Content")])])])])])])]),t._v(" "),t.tags.length?s("div",{staticClass:"tag-timeline"},[t.top.length?s("p",{staticClass:"font-weight-bold text-muted mb-0"},[t._v("Top Posts")]):t._e(),t._v(" "),s("div",{staticClass:"row pb-5"},t._l(t.top,(function(a,e){return s("div",{staticClass:"col-3 p-0 p-sm-2 p-md-3 hashtag-post-square"},[s("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:a.status.url}},[s("div",{class:[a.status.filter?"square "+a.status.filter:"square"]},[a.status.sensitive&&0==t.forceNsfw?s("div",{staticClass:"square-content"},[t.s.sensitive?s("blur-hash-image",{attrs:{width:"32",height:"32",punch:"1",hash:a.status.media_attachments[0].blurhash}}):t._e()],1):s("div",{staticClass:"square-content",style:"background-image: url("+a.status.media_attachments[0].preview_url+")"}),t._v(" "),s("div",{staticClass:"info-overlay-text"},[s("h5",{staticClass:"text-white m-auto font-weight-bold"},[s("span",[s("span",{staticClass:"fas fa-retweet fa-lg pr-1"}),t._v(" "+t._s(a.status.share_count)+"\n\t\t\t\t\t\t\t\t\t")])])])])])])})),0),t._v(" "),s("p",{staticClass:"font-weight-bold text-muted mb-0"},[t._v("Most Recent")]),t._v(" "),s("div",{staticClass:"row"},[t._l(t.tags,(function(a,e){return s("div",{staticClass:"col-3 p-1 hashtag-post-square"},[s("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:a.status.url}},[s("div",{class:[a.status.filter?"square "+a.status.filter:"square"]},[a.status.sensitive&&0==t.forceNsfw?s("div",{staticClass:"square-content"},[t._m(1,!0),t._v(" "),s("blur-hash-canvas",{attrs:{width:"32",height:"32",hash:a.status.media_attachments[0].blurhash}})],1):s("div",{staticClass:"square-content"},[s("blur-hash-image",{attrs:{width:"32",height:"32",hash:a.status.media_attachments[0].blurhash,src:a.status.media_attachments[0].preview_url}})],1),t._v(" "),"photo:album"==a.status.pf_type?s("span",{staticClass:"float-right mr-3 post-icon"},[s("i",{staticClass:"fas fa-images fa-2x"})]):t._e(),t._v(" "),"video"==a.status.pf_type?s("span",{staticClass:"float-right mr-3 post-icon"},[s("i",{staticClass:"fas fa-video fa-2x"})]):t._e(),t._v(" "),"video:album"==a.status.pf_type?s("span",{staticClass:"float-right mr-3 post-icon"},[s("i",{staticClass:"fas fa-film fa-2x"})]):t._e(),t._v(" "),s("div",{staticClass:"info-overlay-text"},[s("h5",{staticClass:"text-white m-auto font-weight-bold"},[s("span",[s("span",{staticClass:"far fa-comment fa-lg pr-1"}),t._v(" "+t._s(a.status.reply_count)+"\n\t\t\t\t\t\t\t\t\t")])])])])])])})),t._v(" "),t.tags.length&&t.loaded?s("div",{staticClass:"col-12 text-center mt-4"},[s("infinite-loading",{on:{infinite:t.infiniteLoader}},[s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"}),t._v(" "),s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"})])],1):t._e()],2)]):s("div",[s("p",{staticClass:"text-center lead font-weight-bold"},[t._v("No public posts found.")])])]):s("div",{staticClass:"mt-5 text-center"},[t._m(2)])])},i=[function(){var t=this._self._c;return t("div",{staticClass:"col-12 col-md-3"},[t("div",{staticClass:"profile-avatar"},[t("div",{staticClass:"bg-primary mb-3 d-flex align-items-center justify-content-center display-4 font-weight-bold text-white",staticStyle:{width:"172px",height:"172px","border-radius":"100%"}},[this._v("#")])])])},function(){var t=this._self._c;return t("div",{staticClass:"info-overlay-text-label"},[t("h5",{staticClass:"text-white m-auto font-weight-bold"},[t("span",[t("span",{staticClass:"far fa-eye-slash fa-lg p-2 d-flex-inline"})])])])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}]},15871:(t,s,a)=>{Vue.component("hashtag-component",a(18820).default)},80531:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var e=a(1519),i=a.n(e)()((function(t){return t[1]}));i.push([t.id,".tag-header[data-v-2eea2c2e]{font-size:28px;font-weight:300}",""]);const n=i},24171:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var e=a(93379),i=a.n(e),n=a(80531),o={insert:"head",singleton:!1};i()(n.default,o);const r=n.default.locals||{}},18820:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var e=a(81061),i=a(29350),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);a.d(s,n);a(84948);const o=(0,a(51900).default)(i.default,e.render,e.staticRenderFns,!1,null,"2eea2c2e",null).exports},29350:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var e=a(42613),i={};for(const t in e)"default"!==t&&(i[t]=()=>e[t]);a.d(s,i);const n=e.default},81061:(t,s,a)=>{"use strict";a.r(s);var e=a(63869),i={};for(const t in e)"default"!==t&&(i[t]=()=>e[t]);a.d(s,i)},84948:(t,s,a)=>{"use strict";a.r(s);var e=a(24171),i={};for(const t in e)"default"!==t&&(i[t]=()=>e[t]);a.d(s,i)}},t=>{t.O(0,[8898],(()=>{return s=15871,t(t.s=s);var s}));t.O()}]);