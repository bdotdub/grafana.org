define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(e,t,n,i,r,o,a){function s(t){return e.isWindow(t)?t:9===t.nodeType&&t.defaultView}var l=window.document.documentElement;return e.offset={setOffset:function(t,n,i){var r,o,a,s,l,c,u,p=e.css(t,"position"),d=e(t),f={};"static"===p&&(t.style.position="relative"),l=d.offset(),a=e.css(t,"top"),c=e.css(t,"left"),u=("absolute"===p||"fixed"===p)&&(a+c).indexOf("auto")>-1,u?(r=d.position(),s=r.top,o=r.left):(s=parseFloat(a)||0,o=parseFloat(c)||0),e.isFunction(n)&&(n=n.call(t,i,l)),null!=n.top&&(f.top=n.top-l.top+s),null!=n.left&&(f.left=n.left-l.left+o),"using"in n?n.using.call(t,f):d.css(f)}},e.fn.extend({offset:function(n){if(arguments.length)return void 0===n?this:this.each(function(t){e.offset.setOffset(this,n,t)});var i,r,o=this[0],a={top:0,left:0},l=o&&o.ownerDocument;if(l)return i=l.documentElement,e.contains(i,o)?(typeof o.getBoundingClientRect!==t&&(a=o.getBoundingClientRect()),r=s(l),{top:a.top+r.pageYOffset-i.clientTop,left:a.left+r.pageXOffset-i.clientLeft}):a},position:function(){if(this[0]){var t,n,i=this[0],r={top:0,left:0};return"fixed"===e.css(i,"position")?n=i.getBoundingClientRect():(t=this.offsetParent(),n=this.offset(),e.nodeName(t[0],"html")||(r=t.offset()),r.top+=e.css(t[0],"borderTopWidth",!0),r.left+=e.css(t[0],"borderLeftWidth",!0)),{top:n.top-r.top-e.css(i,"marginTop",!0),left:n.left-r.left-e.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||l;t&&!e.nodeName(t,"html")&&"static"===e.css(t,"position");)t=t.offsetParent;return t||l})}}),e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var r="pageYOffset"===i;e.fn[t]=function(e){return n(this,function(e,t,n){var o=s(e);return void 0===n?o?o[i]:e[t]:(o?o.scrollTo(r?window.pageXOffset:n,r?n:window.pageYOffset):e[t]=n,void 0)},t,e,arguments.length,null)}}),e.each(["top","left"],function(t,n){e.cssHooks[n]=o(a.pixelPosition,function(t,o){return o?(o=r(t,n),i.test(o)?e(t).position()[n]+"px":o):void 0})}),e});