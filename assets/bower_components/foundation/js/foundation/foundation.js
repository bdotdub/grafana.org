/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,n,i){"use strict";function s(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var r=function(e){for(var n=e.length;n--;)0===t("head").has("."+e[n]).length&&t("head").append('<meta class="'+e[n]+'">')};r(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var o=function(e,i){if("string"==typeof e){if(i){var s;return s=i.jquery?i[0]:i,t(s.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},a=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},r=function(e){for(var n=e.length;n--;)0===t("head").has("."+e[n]).length&&t("head").append('<meta class="'+e[n]+'">')},c=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},l=function(e,n){var i=this,s=!o(this).data(this.attr_name(!0));return"string"==typeof e?this[e].call(this,n):(o(this.scope).is("["+this.attr_name()+"]")?(o(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,n||e,this.data_options(o(this.scope)))),s&&this.events(this.scope)):o("["+this.attr_name()+"]",this.scope).each(function(){var s=!o(this).data(i.attr_name(!0)+"-init");o(this).data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(o(this)))),s&&i.events(this)}),void 0)},u=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?(t[0].complete||4===t[0].readyState?n():i.call(t),void 0):(n(),void 0)};e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,s=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,i),e=42===r.offsetWidth,n.removeChild(s),{matches:e,media:t}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(){function t(){n&&(r(t),jQuery.fx.tick())}for(var n,i=0,s=["webkit","moz"],r=e.requestAnimationFrame,o=e.cancelAnimationFrame;i<s.length&&!r;i++)r=e[s[i]+"RequestAnimationFrame"],o=o||e[s[i]+"CancelAnimationFrame"]||e[s[i]+"CancelRequestAnimationFrame"];r?(e.requestAnimationFrame=r,e.cancelAnimationFrame=o,jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,t())},jQuery.fx.stop=function(){n=!1}):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),s=Math.max(0,16-(n-i)),r=e.setTimeout(function(){t(n+s)},s);return i=n+s,r},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"5.1.1",media_queries:{small:o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:""},init:function(t,e,n,i,s){var r=[t,n,i,s],a=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),e&&"string"==typeof e&&!/reflow/i.test(e))this.libs.hasOwnProperty(e)&&a.push(this.init_lib(e,r));else for(var c in this.libs)a.push(this.init_lib(c,e));return t},init_lib:function(t,e){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),e&&e.hasOwnProperty(t)?this.libs[t].init.apply(this.libs[t],[this.scope,e[t]]):(e=e instanceof Array?e:Array(e),this.libs[t].init.apply(this.libs[t],e))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=a,t.add_namespace=c,t.bindings=l,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=t(".foundation-data-attribute-namespace").css("font-family");/false/i.test(e)||(this.global.namespace=e)},libs:{},utils:{S:o,throttle:function(t,e){var n=null;return function(){var i=this,s=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,s)},e)}},debounce:function(t,e,n){var i,s;return function(){var r=this,o=arguments,a=function(){i=null,n||(s=t.apply(r,o))},c=n&&!i;return clearTimeout(i),i=setTimeout(a,e),c&&(s=t.apply(r,o)),s}},data_options:function(e){function n(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function i(e){return"string"==typeof e?t.trim(e):e}var s,r,o,a={},c=function(t){var e=Foundation.global.namespace;return e.length>0?t.data(e+"-options"):t.data("options")},l=c(e);if("object"==typeof l)return l;for(o=(l||":").split(";"),s=o.length;s--;)r=o[s].split(":"),/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),n(r[1])&&(r[1]=parseInt(r[1],10)),2===r.length&&r[0].length>0&&(a[i(r[0])]=i(r[1]));return a},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'">'),Foundation.media_queries[e]=s(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;t.each(function(){u(n.S(this),function(){i-=1,0==i&&e(t)})})},random_str:function(t){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*e.length));for(var n="";t--;)n+=e[Math.floor(Math.random()*e.length)];return n}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,this,this.document);