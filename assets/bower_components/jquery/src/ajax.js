define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,n,r){function i(n){return function(r,i){"string"!=typeof r&&(i=r,r="*");var o,a=0,s=r.toLowerCase().match(t)||[];if(e.isFunction(i))for(;o=s[a++];)"+"===o[0]?(o=o.slice(1)||"*",(n[o]=n[o]||[]).unshift(i)):(n[o]=n[o]||[]).push(i)}}function o(t,n,r,i){function o(u){var l;return a[u]=!0,e.each(t[u]||[],function(e,t){var u=t(n,r,i);return"string"!=typeof u||s||a[u]?s?!(l=u):void 0:(n.dataTypes.unshift(u),o(u),!1)}),l}var a={},s=t===b;return o(n.dataTypes[0])||!a["*"]&&o("*")}function a(t,n){var r,i,o=e.ajaxSettings.flatOptions||{};for(r in n)void 0!==n[r]&&((o[r]?t:i||(i={}))[r]=n[r]);return i&&e.extend(!0,t,i),t}function s(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function u(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(d){return{state:"parsererror",error:a?d:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var l,c,d=/#.*$/,f=/([?&])_=[^&]*/,p=/^(.*?):[ \t]*([^\r\n]*)$/gm,h=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,m=/^(?:GET|HEAD)$/,g=/^\/\//,v=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,y={},b={},x="*/".concat("*");try{c=location.href}catch(w){c=document.createElement("a"),c.href="",c=c.href}return l=v.exec(c.toLowerCase())||[],e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:c,type:"GET",isLocal:h.test(l[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":x,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?a(a(t,e.ajaxSettings),n):a(e.ajaxSettings,t)},ajaxPrefilter:i(y),ajaxTransport:i(b),ajax:function(i,a){function h(t,n,r,i){var o,a,l,c,d,f=n;2!==F&&(F=2,A&&clearTimeout(A),w=void 0,E=i||"",H.readyState=t>0?4:0,o=t>=200&&300>t||304===t,r&&(c=s(_,H,r)),c=u(_,c,H,o),o?(_.ifModified&&(d=H.getResponseHeader("Last-Modified"),d&&(e.lastModified[T]=d),d=H.getResponseHeader("etag"),d&&(e.etag[T]=d)),204===t||"HEAD"===_.type?f="nocontent":304===t?f="notmodified":(f=c.state,a=c.data,l=c.error,o=!l)):(l=f,(t||!f)&&(f="error",0>t&&(t=0))),H.status=t,H.statusText=(n||f)+"",o?z.resolveWith(N,[a,f,H]):z.rejectWith(N,[H,f,l]),H.statusCode(D),D=void 0,S&&j.trigger(o?"ajaxSuccess":"ajaxError",[H,_,o?a:l]),q.fireWith(N,[H,f]),S&&(j.trigger("ajaxComplete",[H,_]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof i&&(a=i,i=void 0),a=a||{};var w,T,E,k,A,C,S,M,_=e.ajaxSetup({},a),N=_.context||_,j=_.context&&(N.nodeType||N.jquery)?e(N):e.event,z=e.Deferred(),q=e.Callbacks("once memory"),D=_.statusCode||{},L={},O={},F=0,B="canceled",H={readyState:0,getResponseHeader:function(e){var t;if(2===F){if(!k)for(k={};t=p.exec(E);)k[t[1].toLowerCase()]=t[2];t=k[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===F?E:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return F||(e=O[n]=O[n]||e,L[e]=t),this},overrideMimeType:function(e){return F||(_.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>F)for(t in e)D[t]=[D[t],e[t]];else H.always(e[H.status]);return this},abort:function(e){var t=e||B;return w&&w.abort(t),h(0,t),this}};if(z.promise(H).complete=q.add,H.success=H.done,H.error=H.fail,_.url=((i||_.url||c)+"").replace(d,"").replace(g,l[1]+"//"),_.type=a.method||a.type||_.method||_.type,_.dataTypes=e.trim(_.dataType||"*").toLowerCase().match(t)||[""],null==_.crossDomain&&(C=v.exec(_.url.toLowerCase()),_.crossDomain=!(!C||C[1]===l[1]&&C[2]===l[2]&&(C[3]||("http:"===C[1]?"80":"443"))===(l[3]||("http:"===l[1]?"80":"443")))),_.data&&_.processData&&"string"!=typeof _.data&&(_.data=e.param(_.data,_.traditional)),o(y,_,a,H),2===F)return H;S=_.global,S&&0===e.active++&&e.event.trigger("ajaxStart"),_.type=_.type.toUpperCase(),_.hasContent=!m.test(_.type),T=_.url,_.hasContent||(_.data&&(T=_.url+=(r.test(T)?"&":"?")+_.data,delete _.data),_.cache===!1&&(_.url=f.test(T)?T.replace(f,"$1_="+n++):T+(r.test(T)?"&":"?")+"_="+n++)),_.ifModified&&(e.lastModified[T]&&H.setRequestHeader("If-Modified-Since",e.lastModified[T]),e.etag[T]&&H.setRequestHeader("If-None-Match",e.etag[T])),(_.data&&_.hasContent&&_.contentType!==!1||a.contentType)&&H.setRequestHeader("Content-Type",_.contentType),H.setRequestHeader("Accept",_.dataTypes[0]&&_.accepts[_.dataTypes[0]]?_.accepts[_.dataTypes[0]]+("*"!==_.dataTypes[0]?", "+x+"; q=0.01":""):_.accepts["*"]);for(M in _.headers)H.setRequestHeader(M,_.headers[M]);if(_.beforeSend&&(_.beforeSend.call(N,H,_)===!1||2===F))return H.abort();B="abort";for(M in{success:1,error:1,complete:1})H[M](_[M]);if(w=o(b,_,a,H)){H.readyState=1,S&&j.trigger("ajaxSend",[H,_]),_.async&&_.timeout>0&&(A=setTimeout(function(){H.abort("timeout")},_.timeout));try{F=1,w.send(L,h)}catch($){if(!(2>F))throw $;h(-1,$)}}else h(-1,"No Transport");return H},getJSON:function(t,n,r){return e.get(t,n,r,"json")},getScript:function(t,n){return e.get(t,void 0,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,r,i,o){return e.isFunction(r)&&(o=o||i,i=r,r=void 0),e.ajax({url:t,type:n,dataType:o,data:r,success:i})}}),e.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,n){e.fn[n]=function(e){return this.on(n,e)}}),e});