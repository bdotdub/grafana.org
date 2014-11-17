/*!
 * Modernizr v2.8.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(_.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var i=e[r];if(!s(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function u(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:o(s,"function")?s.bind(r||t):s}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+S.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),u(i,t,n))}function c(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)M[n[r]]=!!(n[r]in x);return M.list&&(M.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,s=0,a=e.length;a>s;s++)x.setAttribute("type",i=e[s]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),j[e[s]]=!!r;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.2",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",T={}.toString,_=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",S=k.split(" "),C=k.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},E={},j={},M={},A=[],q=A.slice,D=function(e,n,r,i){var o,s,a,u,l=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(r,10))for(;r--;)a=t.createElement("div"),a.id=i?i[r]:v+(r+1),l.appendChild(a);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(c?l:d).innerHTML+=o,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),s=n(l,e),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=u),!!s},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return D("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},O=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var s=e in i;return s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),s=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,s}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;f=o(z,"undefined")||o(z.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=q.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,s=t.apply(o,n.concat(q.call(arguments)));return Object(s)===s?s:o}return t.apply(e,n.concat(q.call(arguments)))};return r}),E.flexbox=function(){return l("flexWrap")},E.flexboxlegacy=function(){return l("boxDirection")},E.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},E.canvastext=function(){return!(!h.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!e.WebGLRenderingContext},E.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",_.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!e.postMessage},E.websqldatabase=function(){return!!e.openDatabase},E.indexedDB=function(){return!!l("indexedDB",e)},E.hashchange=function(){return O("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},E.history=function(){return!(!e.history||!history.pushState)},E.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},E.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},E.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},E.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},E.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},E.backgroundsize=function(){return l("backgroundSize")},E.borderimage=function(){return l("borderImage")},E.borderradius=function(){return l("borderRadius")},E.boxshadow=function(){return l("boxShadow")},E.textshadow=function(){return""===t.createElement("div").style.textShadow},E.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},E.cssanimations=function(){return l("animationName")},E.csscolumns=function(){return l("columnCount")},E.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+_.join(n+e)).slice(0,-e.length)),s(b.backgroundImage,"gradient")},E.cssreflections=function(){return l("boxReflect")},E.csstransforms=function(){return!!l("transform")},E.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},E.csstransitions=function(){return l("transition")},E.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(s)&&0===s.indexOf(r.split(" ")[0])}),e},E.generatedcontent=function(){var e;return D(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},E.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},E.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},E.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},E.webworkers=function(){return!!e.Worker},E.applicationcache=function(){return!!e.applicationCache},E.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},E.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},E.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS(N.svg,"animate")))},E.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS(N.svg,"clipPath")))};for(var F in E)f(E,F)&&(d=F.toLowerCase(),h[d]=E[F](),A.push((h[d]?"":"no-")+d));return h.input||c(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),s=0,a=r(),u=a.length;u>s;s++)o.createElement(a[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=i(e);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||a(e,r),e}var l,c,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:s};e.html5=y,u(t)}(this,t),h._version=p,h._prefixes=_,h._domPrefixes=C,h._cssomPrefixes=S,h.mq=L,h.hasEvent=O,h.testProp=function(e){return a([e])},h.testAllProps=l,h.testStyles=D,h.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),h}(this,this.document);