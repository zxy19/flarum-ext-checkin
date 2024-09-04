/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",m=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new Y(n||[]);return c(a,"_invoke",{value:S(t,r,i)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",k="completed",g={};function b(){}function x(){}function w(){}var N={};h(N,u,(function(){return this}));var _=Object.getPrototypeOf,C=_&&_(_(D([])));C&&C!==a&&i.call(C,u)&&(N=C);var L=w.prototype=b.prototype=Object.create(N);function M(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,c,s){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==n(m)&&i.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(m).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function S(t,r,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===k){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=k,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=p(t,r,n);if("normal"===u.type){if(o=n.done?k:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=k,n.method="throw",n.arg=u.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=w,c(L,"constructor",{value:w,configurable:!0}),c(w,"constructor",{value:x,configurable:!0}),x.displayName=h(w,m,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,m,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},M(j.prototype),h(j.prototype,l,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new j(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},M(L),h(L,m,"Generator"),h(L,u,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>X});const t=flarum.core.compat["forum/app"];var e=r.n(t);flarum.core.compat.extend,flarum.core.compat["components/Button"],flarum.core.compat["common/components/Alert"];const o=flarum.core.compat.Model;var a=r.n(o);const i=flarum.core.compat["models/User"];var c=r.n(i);const s=flarum.core.compat["common/extend"],u=flarum.core.compat["forum/components/IndexPage"];var l=r.n(u);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}const p=flarum.core.compat["common/Component"];var d=r.n(p);const y=flarum.core.compat["common/components/Button"];var v=r.n(y),k=function(t){function r(){return t.apply(this,arguments)||this}f(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state},n.view=function(){var t;return t="enabled"===this.state?[v().component({icon:"far fa-check-circle",className:"Button CheckinButton CheckinButton--active",id:"checkinButton",onclick:e().checkinClick},e().translator.trans("gtdxyz-checkin.forum.common-checkin",{amount:e().forum.attribute("checkinReward")})),v().component({icon:"fas fa-random",className:"Button CheckinButton CheckinButton--checked",id:"randomcheckinButton",onclick:e().randomcheckinClick},e().translator.trans("gtdxyz-checkin.forum.lucky-checkin"))]:[v().component({icon:"fas fa-check-square",className:"Button CheckedButton CheckinButton--checked",disabled:!0},e().translator.trans("gtdxyz-checkin.forum.checked-days",{count:e().session.user.attribute("checkin_days_count")}))],m("div",t)},r}(d());const g=flarum.core.compat["forum/components/HeaderSecondary"];var b=r.n(g);const x=flarum.core.compat["forum/components/NotificationsDropdown"];var w=r.n(x);function N(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var _=r(183),C=r.n(_);const L=flarum.core.compat["common/components/LoadingIndicator"];var M=r.n(L);const j=flarum.core.compat["common/helpers/icon"];var S=r.n(j),O=function(t){function r(){for(var r,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).sitekey=e().forum.attribute("fof-recaptcha.credentials.site"),r.theme=e().forum.attribute("theme_dark_mode"),r.type=e().forum.attribute("fof-recaptcha.type"),r.size=e().forum.attribute("fof-recaptcha.type"),r}f(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state},n.oncreate=function(e){var r=this;if(t.prototype.oncreate.call(this,e),this.addResources().then((function(){var t=setInterval((function(){if(window.grecaptcha){clearInterval(t);var n=e.dom.querySelector(".g-recaptcha");n&&window.grecaptcha.render(n,{sitekey:r.sitekey,theme:r.theme,type:r.type,size:r.size,callback:r.callback})}}),250)})),"invisible"===this.attrs.state.type){var n=e.dom.querySelector("iframe");n&&(n.tabIndex=-1)}},n.addResources=function(){var t,e=(t=C().mark((function t(){var e=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){var r=document.createElement("script");r.src="https://www.recaptcha.net/recaptcha/api.js?render="+e.sitekey,r.onload=function(){return t()},document.head.appendChild(r)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){N(a,n,o,i,c,"next",t)}function c(t){N(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),n.getWeekdays=function(){var t,e=dayjs().day();0===e&&(e=7),t=dayjs().subtract(e-1,"day");var r=[];r.push(t.format("YYYY-MM-DD"));for(var n=1;n<=7;)r.push(t.add(n,"day").format("YYYY-MM-DD")),n++;return r},n.view=function(){var t=this.state.cache||[],r=e().session.user.attribute("allowCheckin"),n=this.getWeekdays();return m("div",{className:"NotificationList CheckinList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},e().translator.trans("gtdxyz-checkin.forum.reward-text"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length>0?t.map((function(e,r){var o=e.id()>0?"checked":"uncheck";return m("li",{className:o+" count-"+t.length,title:o},e.id()>0?m("view",null,m("div",{className:"Notification-content"},m("span",null,dayjs(e.checkin_time()).format("MM/DD")),m("span",null,dayjs(e.checkin_time()).format("ddd"))),m("div",{className:"Notification-excerpt"},S()("fas fa-star",{className:"Notification-icon"}))):m("view",null,m("div",{className:"Notification-content"},m("span",null,dayjs(n[r]).format("MM/DD")),m("span",null,dayjs(n[r]).format("ddd"))),m("div",{className:"Notification-excerpt"},dayjs().isAfter(n[r],"day")?S()("fas fa-minus",{className:"Notification-icon"}):S()("far fa-star",{className:"Notification-icon"}))))})):this.state.loading?m(M(),{className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},e().translator.trans("gtdxyz-checkin.forum.empty-text"))),m("div",{className:"subtitle"},e().translator.trans("gtdxyz-checkin.forum.count-text",{count:e().session.user.attribute("checkin_days_count")})," ",m("br",null),1===e().forum.attribute("checkinConstantForce")&&e().translator.trans("gtdxyz-checkin.forum.constant-recent-count-text",{count:e().session.user.attribute("checkin_constant_count")})),m("div",{className:"Form-group"},m("div",{className:"g-recaptcha"})),m("div",{className:"Form-group"},r?m(k,{state:"enabled"}):m(k,{state:"disabled"}))))},r}(d()),z=function(t){function r(){return t.apply(this,arguments)||this}f(r,t),r.initAttrs=function(r){r.label=r.label||e().translator.trans("gtdxyz-checkin.forum.checkin"),r.icon=r.icon||"fas fa-calendar-alt",r.menuClassName="forum-checkin",t.initAttrs.call(this,r)};var n=r.prototype;return n.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing&&m(O,{state:this.attrs.state}))},n.goToRoute=function(){m.route.set(e().route("UserCheckinRoute",{username:e().session.user.username()}))},n.getUnreadCount=function(){return e().session.user.attribute("allowCheckin")?1:0},n.getNewCount=function(){return e().session.user.attribute("allowCheckin")?1:0},r}(w());const T=flarum.core.compat["components/Page"];var Y=r.n(T);const D=flarum.core.compat.Component;var E=r.n(D);const A=flarum.core.compat.app;var R=r.n(A);const P=flarum.core.compat["components/LoadingIndicator"];var G=r.n(P),B=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state},r.getWeekdays=function(){var t,e=dayjs().day();0===e&&(e=7),t=dayjs().subtract(e-1,"day");var r=[];r.push(t.format("YYYY-MM-DD"));for(var n=1;n<=7;)r.push(t.add(n,"day").format("YYYY-MM-DD")),n++;return r},r.view=function(){var t=this.state.cache||[];if(R().session.user){var e=R().session.user.attribute("allowCheckin"),r=this.getWeekdays();return m("div",{className:"Checkin-page NotificationList CheckinList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},R().translator.trans("gtdxyz-checkin.forum.checkin"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length>0?t.map((function(e,n){var o=e.id()>0?"checked":"uncheck";return m("li",{className:o+" count-"+t.length,title:o},e.id()>0?m("view",null,m("div",{className:"Notification-content"},m("span",null,dayjs(e.checkin_time()).format("MM/DD")),m("span",null,dayjs(e.checkin_time()).format("ddd"))),m("div",{className:"Notification-excerpt"},S()("fas fa-star",{className:"Notification-icon"}))):m("view",null,m("div",{className:"Notification-content"},m("span",null,dayjs(r[n]).format("MM/DD")),m("span",null,dayjs(r[n]).format("ddd"))),m("div",{className:"Notification-excerpt"},dayjs().isAfter(r[n],"day")?S()("fas fa-minus",{className:"Notification-icon"}):S()("far fa-star",{className:"Notification-icon"}))))})):this.loading?m(G(),{className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},R().translator.trans("gtdxyz-checkin.forum.empty-text"))),m("div",{className:"subtitle"},R().translator.trans("gtdxyz-checkin.forum.count-text",{count:R().session.user.attribute("checkin_days_count")})," ",m("br",null),1===R().forum.attribute("checkinConstantForce")&&R().translator.trans("gtdxyz-checkin.forum.constant-recent-count-text",{count:R().session.user.attribute("checkin_constant_count")})),m("div",{className:"Form-group"},e?m(k,{state:"enabled"}):m(k,{state:"disabled"}))))}},e}(E()),I=function(t){function r(){return t.apply(this,arguments)||this}f(r,t);var n=r.prototype;return n.oninit=function(r){t.prototype.oninit.call(this,r),e().history.push("UserCheckinRoute"),e().checkins.load()},n.oncreate=function(r){t.prototype.oncreate.call(this,r),e().setTitle(e().translator.trans("gtdxyz-checkin.forum.checkin"))},n.view=function(){return m("div",null,m(B,{state:e().checkins}))},r}(Y());const F=flarum.core.compat["components/Modal"];var U=r.n(F);flarum.core.compat["utils/Stream"];var J=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.className=function(){return"CheckinModal Modal--small"},r.title=function(){return m("div",{className:"successTitle"},app.translator.trans("gtdxyz-checkin.forum.success"))},r.content=function(){var t=app.session.user.attribute("checkin_days_count"),e=app.session.user.attribute("lastCheckinMoney"),r=app.forum.attribute("checkinSuccessText"),n=app.forum.attribute("checkinSuccessRewardText"),o="",a="CheckinModal hideText",i="CheckinModal hideText";""!==r&&(a="CheckinModal successText");var c={1:["唉~~~~~"],2:["时运不济"],3:["时运不济"],4:["平淡无奇"],5:["平淡无奇"],6:["寻常如故"],7:["寻常如故"],8:["转运亨通"],9:["转运亨通"],10:["幸运降临"],11:["幸运降临"],12:["顺风顺水"],13:["顺风顺水"],14:["福气绵绵"],15:["福气绵绵"],16:["鸿运当头"],17:["鸿运当头"],18:["天时地利人和"]},s=[],u=0;return!0==(void 0!==app.forum.attribute("antoinefr-money.moneyname"))&&""!==n&&(o=(app.forum.attribute("antoinefr-money.moneyname")||"[money]").replace("[money]",e),i="checkInResultModal rewardText",e>100?(o+=" , 其中连续签到 7 天额外奖励 100能量  ",u=e-100):u=e,c[u]&&(s=c[u])),m("div",{className:"Modal-body"},m("div",{className:a},r.replace("[days]",t+1)),m("div",{className:i},"您今天",s.join(", "),"，",n.replace("[reward]",o)))},e}(U()),K=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.className=function(){return"CheckinModal Modal--small"},r.title=function(){return m("div",{className:"failedTitle"},app.translator.trans("gtdxyz-checkin.forum.failed"))},r.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"modalText"},app.translator.trans("gtdxyz-checkin.forum.try-again-later")))},e}(U());const V=flarum.core.compat["common/Model"];var W=r.n(V),q=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e}(W());Object.assign(q.prototype,{user_id:W().attribute("user_id"),type:W().attribute("type"),event_id:W().attribute("event_id"),checkin_time:W().attribute("checkin_time"),reward_money:W().attribute("reward_money"),constant:W().attribute("constant"),remark:W().attribute("remark"),user:W().hasOne("user")});var H=function(){function t(t){this.app=t,this.loading=!1}return t.prototype.load=function(){var t=this;this.cache&&this.app.session.user.attribute("checkin_sync")&&dayjs(this.app.session.user.attribute("checkin_sync")).isSame(dayjs().format("YYYY-MM-DD"),"day")||(this.loading=!0,m.redraw(),this.app.store.find("checkin/history").then((function(e){t.app.session.user.pushAttributes({checkin_sync:dayjs().format("YYYY-MM-DD")}),t.cache=e})).catch((function(){})).then((function(){t.loading=!1,m.redraw()})))},t}();const Q=flarum.core.compat["common/extenders"],X=[(new(r.n(Q)().Store)).add("checkins",q)];e().initializers.add("gtdxyz-checkin",(function(){e().store.models.UserCheckinHistory=q,e().routes.UserCheckinRoute={path:"/u/:username/checkin/history",component:I},e().checkins=new H(e()),c().prototype.canCheckin=a().attribute("allowCheckin"),e().checkinClick=function(){grecaptcha.ready((function(){grecaptcha.execute("6LdGGOIpAAAAACV5Va6DYtL8xkUvJl78yexKGKBx",{action:"checkin"}).then((function(t){!function(t){var r=e().session.user.attribute("checkin_days_count"),n=e().forum.attribute("checkinReward"),o=e().forum.attribute("checkinSuccessType"),a=e().forum.attribute("checkinSuccessText"),i=e().forum.attribute("checkinSuccessRewardText"),c=void 0!==e().forum.attribute("gtdxyz-money-plus.moneyname"),s="";!0===c&&(s=e().forum.attribute("gtdxyz-money-plus.moneyname")||"MO");var u=e().translator.trans("gtdxyz-checkin.forum.failed")+" "+e().translator.trans("gtdxyz-checkin.forum.try-again-later");e().session.user.save({allowCheckin:!1,checkin_days_count:r+1,checkin_type:"N",recaptchaToken:t}).then((function(){if(1===o){var t="";if(""!==a){var u=a.replace("[days]",r+1);e().alerts.show({type:"success"},u)}if(!0===c&&""!==i){t=n+s;var l=i.replace("[reward]",t);e().alerts.show({type:"success"},l)}}else 2===o&&e().modal.show(J)})).catch((function(t){var r,n=JSON.parse(t.xhr.response).errors;n.length>0&&(u=null==(r=n[0])?void 0:r.detail),1===o&&e().alerts.show({type:"error"},u),2===o&&e().modal.show(K)}))}(t)}))}))},e().randomcheckinClick=function(){grecaptcha.ready((function(){grecaptcha.execute("6LdGGOIpAAAAACV5Va6DYtL8xkUvJl78yexKGKBx",{action:"checkin"}).then((function(t){!function(t){var r=e().session.user.attribute("checkin_days_count"),n=e().forum.attribute("checkinReward"),o=e().forum.attribute("checkinSuccessType"),a=e().forum.attribute("checkinSuccessText"),i=e().forum.attribute("checkinSuccessRewardText"),c=void 0!==e().forum.attribute("gtdxyz-money-plus.moneyname"),s="";!0===c&&(s=e().forum.attribute("gtdxyz-money-plus.moneyname")||"MO");var u=e().translator.trans("gtdxyz-checkin.forum.failed")+" "+e().translator.trans("gtdxyz-checkin.forum.try-again-later");e().session.user.save({allowCheckin:!1,checkin_days_count:r+1,checkin_type:"R",recaptchaToken:t}).then((function(){if(1===o){var t="";if(""!==a){var u=a.replace("[days]",r+1);e().alerts.show({type:"success"},u)}if(!0===c&&""!==i){t=n+s;var l=i.replace("[reward]",t);e().alerts.show({type:"success"},l)}}else 2===o&&e().modal.show(J)})).catch((function(t){var r,n=JSON.parse(t.xhr.response).errors;n.length>0&&(u=null==(r=n[0])?void 0:r.detail),1===o&&e().alerts.show({type:"error"},u),2===o&&e().modal.show(K)}))}(t)}))}))},e().checkinClickOld=function(){var t=e().session.user.attribute("checkin_days_count"),r=e().forum.attribute("checkinReward"),n=e().forum.attribute("checkinSuccessType"),o=e().forum.attribute("checkinSuccessText"),a=e().forum.attribute("checkinSuccessRewardText"),i=void 0!==e().forum.attribute("gtdxyz-money-plus.moneyname"),c="";!0===i&&(c=e().forum.attribute("gtdxyz-money-plus.moneyname")||"MO");var s=e().translator.trans("gtdxyz-checkin.forum.failed")+" "+e().translator.trans("gtdxyz-checkin.forum.try-again-later");e().session.user.save({allowCheckin:!1,checkin_days_count:t+1,checkin_type:"N"}).then((function(){if(1===n){var s="";if(""!==o){var u=o.replace("[days]",t+1);e().alerts.show({type:"success"},u)}if(!0===i&&""!==a){s=r+c;var l=a.replace("[reward]",s);e().alerts.show({type:"success"},l)}}else 2===n&&e().modal.show(J)})).catch((function(t){var r,o=JSON.parse(t.xhr.response).errors;o.length>0&&(s=null==(r=o[0])?void 0:r.detail),1===n&&e().alerts.show({type:"error"},s),2===n&&e().modal.show(K)}))},e().randomcheckinClickOld=function(){var t=e().session.user.attribute("checkin_days_count"),r=e().forum.attribute("checkinReward"),n=e().forum.attribute("checkinSuccessType"),o=e().forum.attribute("checkinSuccessText"),a=e().forum.attribute("checkinSuccessRewardText"),i=void 0!==e().forum.attribute("gtdxyz-money-plus.moneyname"),c="";!0===i&&(c=e().forum.attribute("gtdxyz-money-plus.moneyname")||"MO");var s=e().translator.trans("gtdxyz-checkin.forum.failed")+" "+e().translator.trans("gtdxyz-checkin.forum.try-again-later");e().session.user.save({allowCheckin:!1,checkin_days_count:t+1,checkin_type:"R"}).then((function(){if(1===n){var s="";if(""!==o){var u=o.replace("[days]",t+1);e().alerts.show({type:"success"},u)}if(!0===i&&""!==a){s=r+c;var l=a.replace("[reward]",s);e().alerts.show({type:"success"},l)}}else 2===n&&e().modal.show(J)})).catch((function(t){var r,o=JSON.parse(t.xhr.response).errors;o.length>0&&(s=null==(r=o[0])?void 0:r.detail),1===n&&e().alerts.show({type:"error"},s),2===n&&e().modal.show(K)}))},(0,s.extend)(l().prototype,"sidebarItems",(function(t){var e="forum-checkin";1!==app.forum.attribute("checkinPosition")&&null!==app.session.user&&!0===app.forum.attribute("allowCheckin")&&(!0===app.session.user.attribute("allowCheckin")?t.add(e,m(k,{state:"enabled"}),50):t.add(e,m(k,{state:"disabled"}),50))})),(0,s.extend)(b().prototype,"items",(function(t){1===e().forum.attribute("checkinPosition")&&null!==e().session.user&&!0===e().forum.attribute("allowCheckin")&&t.add("checkin",m(z,{state:e().checkins}),20)}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map