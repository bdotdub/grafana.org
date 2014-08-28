define(["./core","./var/pnum","./css/var/cssExpand","./css/var/isHidden","./css/defaultDisplay","./data/var/data_priv","./core/init","./effects/Tween","./queue","./css","./deferred","./traversing"],function(e,t,n,i,o,s){function r(){return setTimeout(function(){d=void 0}),d=e.now()}function u(e,t){var i,o=0,s={height:e};for(t=t?1:0;4>o;o+=2-t)i=n[o],s["margin"+i]=s["padding"+i]=e;return t&&(s.opacity=s.width=e),s}function a(e,t,n){for(var i,o=(w[t]||[]).concat(w["*"]),s=0,r=o.length;r>s;s++)if(i=o[s].call(n,t,e))return i}function f(t,n,r){var u,f,l,c,d,p,v,g=this,m={},w=t.style,x=t.nodeType&&i(t),y=s.get(t,"fxshow");r.queue||(d=e._queueHooks(t,"fx"),null==d.unqueued&&(d.unqueued=0,p=d.empty.fire,d.empty.fire=function(){d.unqueued||p()}),d.unqueued++,g.always(function(){g.always(function(){d.unqueued--,e.queue(t,"fx").length||d.empty.fire()})})),1===t.nodeType&&("height"in n||"width"in n)&&(r.overflow=[w.overflow,w.overflowX,w.overflowY],v=e.css(t,"display"),"none"===v&&(v=o(t.nodeName)),"inline"===v&&"none"===e.css(t,"float")&&(w.display="inline-block")),r.overflow&&(w.overflow="hidden",g.always(function(){w.overflow=r.overflow[0],w.overflowX=r.overflow[1],w.overflowY=r.overflow[2]}));for(u in n)if(f=n[u],h.exec(f)){if(delete n[u],l=l||"toggle"===f,f===(x?"hide":"show")){if("show"!==f||!y||void 0===y[u])continue;x=!0}m[u]=y&&y[u]||e.style(t,u)}if(!e.isEmptyObject(m)){y?"hidden"in y&&(x=y.hidden):y=s.access(t,"fxshow",{}),l&&(y.hidden=!x),x?e(t).show():g.done(function(){e(t).hide()}),g.done(function(){var n;s.remove(t,"fxshow");for(n in m)e.style(t,n,m[n])});for(u in m)c=a(x?y[u]:0,u,g),u in y||(y[u]=c.start,x&&(c.end=c.start,c.start="width"===u||"height"===u?1:0))}}function l(t,n){var i,o,s,r,u;for(i in t)if(o=e.camelCase(i),s=n[o],r=t[i],e.isArray(r)&&(s=r[1],r=t[i]=r[0]),i!==o&&(t[o]=r,delete t[i]),u=e.cssHooks[o],u&&"expand"in u){r=u.expand(r),delete t[o];for(i in r)i in t||(t[i]=r[i],n[i]=s)}else n[o]=s}function c(t,n,i){var o,s,u=0,f=m.length,c=e.Deferred().always(function(){delete p.elem}),p=function(){if(s)return!1;for(var e=d||r(),n=Math.max(0,h.startTime+h.duration-e),i=n/h.duration||0,o=1-i,u=0,a=h.tweens.length;a>u;u++)h.tweens[u].run(o);return c.notifyWith(t,[h,o,n]),1>o&&a?n:(c.resolveWith(t,[h]),!1)},h=c.promise({elem:t,props:e.extend({},n),opts:e.extend(!0,{specialEasing:{}},i),originalProperties:n,originalOptions:i,startTime:d||r(),duration:i.duration,tweens:[],createTween:function(n,i){var o=e.Tween(t,h.opts,n,i,h.opts.specialEasing[n]||h.opts.easing);return h.tweens.push(o),o},stop:function(e){var n=0,i=e?h.tweens.length:0;if(s)return this;for(s=!0;i>n;n++)h.tweens[n].run(1);return e?c.resolveWith(t,[h,e]):c.rejectWith(t,[h,e]),this}}),v=h.props;for(l(v,h.opts.specialEasing);f>u;u++)if(o=m[u].call(h,t,v,h.opts))return o;return e.map(v,a,h),e.isFunction(h.opts.start)&&h.opts.start.call(t,h),e.fx.timer(e.extend(p,{elem:t,anim:h,queue:h.opts.queue})),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}var d,p,h=/^(?:toggle|show|hide)$/,v=new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i"),g=/queueHooks$/,m=[f],w={"*":[function(t,n){var i=this.createTween(t,n),o=i.cur(),s=v.exec(n),r=s&&s[3]||(e.cssNumber[t]?"":"px"),u=(e.cssNumber[t]||"px"!==r&&+o)&&v.exec(e.css(i.elem,t)),a=1,f=20;if(u&&u[3]!==r){r=r||u[3],s=s||[],u=+o||1;do a=a||".5",u/=a,e.style(i.elem,t,u+r);while(a!==(a=i.cur()/o)&&1!==a&&--f)}return s&&(u=i.start=+u||+o||0,i.unit=r,i.end=s[1]?u+(s[1]+1)*s[2]:+s[2]),i}]};return e.Animation=e.extend(c,{tweener:function(t,n){e.isFunction(t)?(n=t,t=["*"]):t=t.split(" ");for(var i,o=0,s=t.length;s>o;o++)i=t[o],w[i]=w[i]||[],w[i].unshift(n)},prefilter:function(e,t){t?m.unshift(e):m.push(e)}}),e.speed=function(t,n,i){var o=t&&"object"==typeof t?e.extend({},t):{complete:i||!i&&n||e.isFunction(t)&&t,duration:t,easing:i&&n||n&&!e.isFunction(n)&&n};return o.duration=e.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in e.fx.speeds?e.fx.speeds[o.duration]:e.fx.speeds._default,(null==o.queue||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){e.isFunction(o.old)&&o.old.call(this),o.queue&&e.dequeue(this,o.queue)},o},e.fn.extend({fadeTo:function(e,t,n,o){return this.filter(i).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(t,n,i,o){var r=e.isEmptyObject(t),u=e.speed(n,i,o),a=function(){var n=c(this,e.extend({},t),u);(r||s.get(this,"finish"))&&n.stop(!0)};return a.finish=a,r||u.queue===!1?this.each(a):this.queue(u.queue,a)},stop:function(t,n,i){var o=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof t&&(i=n,n=t,t=void 0),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var n=!0,r=null!=t&&t+"queueHooks",u=e.timers,a=s.get(this);if(r)a[r]&&a[r].stop&&o(a[r]);else for(r in a)a[r]&&a[r].stop&&g.test(r)&&o(a[r]);for(r=u.length;r--;)u[r].elem!==this||null!=t&&u[r].queue!==t||(u[r].anim.stop(i),n=!1,u.splice(r,1));(n||!i)&&e.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,i=s.get(this),o=i[t+"queue"],r=i[t+"queueHooks"],u=e.timers,a=o?o.length:0;for(i.finish=!0,e.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),n=u.length;n--;)u[n].elem===this&&u[n].queue===t&&(u[n].anim.stop(!0),u.splice(n,1));for(n=0;a>n;n++)o[n]&&o[n].finish&&o[n].finish.call(this);delete i.finish})}}),e.each(["toggle","show","hide"],function(t,n){var i=e.fn[n];e.fn[n]=function(e,t,o){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(u(n,!0),e,t,o)}}),e.each({slideDown:u("show"),slideUp:u("hide"),slideToggle:u("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){e.fn[t]=function(e,t,i){return this.animate(n,e,t,i)}}),e.timers=[],e.fx.tick=function(){var t,n=0,i=e.timers;for(d=e.now();n<i.length;n++)t=i[n],t()||i[n]!==t||i.splice(n--,1);i.length||e.fx.stop(),d=void 0},e.fx.timer=function(t){e.timers.push(t),t()?e.fx.start():e.timers.pop()},e.fx.interval=13,e.fx.start=function(){p||(p=setInterval(e.fx.tick,e.fx.interval))},e.fx.stop=function(){clearInterval(p),p=null},e.fx.speeds={slow:600,fast:200,_default:400},e});