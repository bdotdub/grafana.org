define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(t,e,n,i){function s(n){return function(i,s){"string"!=typeof i&&(s=i,i="*");var r,o=0,a=i.toLowerCase().match(e)||[];if(t.isFunction(s))for(;r=a[o++];)"+"===r[0]?(r=r.slice(1)||"*",(n[r]=n[r]||[]).unshift(s)):(n[r]=n[r]||[]).push(s)}}function r(e,n,i,s){function r(l){var c;return o[l]=!0,t.each(e[l]||[],function(t,e){var l=e(n,i,s);return"string"!=typeof l||a||o[l]?a?!(c=l):void 0:(n.dataTypes.unshift(l),r(l),!1)}),c}var o={},a=e===b;return r(n.dataTypes[0])||!o["*"]&&r("*")}function o(e,n){var i,s,r=t.ajaxSettings.flatOptions||{};for(i in n)void 0!==n[i]&&((r[i]?e:s||(s={}))[i]=n[i]);return s&&t.extend(!0,e,s),e}function a(t,e,n){for(var i,s,r,o,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){l.unshift(s);break}if(l[0]in n)r=l[0];else{for(s in n){if(!l[0]||t.converters[s+" "+l[0]]){r=s;break}o||(o=s)}r=r||o}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function l(t,e,n,i){var s,r,o,a,l,c={},u=t.dataTypes.slice();if(u[1])for(o in t.converters)c[o.toLowerCase()]=t.converters[o];for(r=u.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=u.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(o=c[l+" "+r]||c["* "+r],!o)for(s in c)if(a=s.split(" "),a[1]===r&&(o=c[l+" "+a[0]]||c["* "+a[0]])){o===!0?o=c[s]:c[s]!==!0&&(r=a[0],u.unshift(a[1]));break}if(o!==!0)if(o&&t["throws"])e=o(e);else try{e=o(e)}catch(d){return{state:"parsererror",error:o?d:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}var c,u,d=/#.*$/,f=/([?&])_=[^&]*/,h=/^(.*?):[ \t]*([^\r\n]*)$/gm,p=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,g=/^(?:GET|HEAD)$/,m=/^\/\//,v=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,y={},b={},_="*/".concat("*");try{u=location.href}catch(x){u=document.createElement("a"),u.href="",u=u.href}return c=v.exec(u.toLowerCase())||[],t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:u,type:"GET",isLocal:p.test(c[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":t.parseJSON,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?o(o(e,t.ajaxSettings),n):o(t.ajaxSettings,e)},ajaxPrefilter:s(y),ajaxTransport:s(b),ajax:function(s,o){function p(e,n,i,s){var r,o,c,u,d,f=n;2!==M&&(M=2,T&&clearTimeout(T),x=void 0,C=s||"",I.readyState=e>0?4:0,r=e>=200&&300>e||304===e,i&&(u=a(j,I,i)),u=l(j,u,I,r),r?(j.ifModified&&(d=I.getResponseHeader("Last-Modified"),d&&(t.lastModified[w]=d),d=I.getResponseHeader("etag"),d&&(t.etag[w]=d)),204===e||"HEAD"===j.type?f="nocontent":304===e?f="notmodified":(f=u.state,o=u.data,c=u.error,r=!c)):(c=f,(e||!f)&&(f="error",0>e&&(e=0))),I.status=e,I.statusText=(n||f)+"",r?A.resolveWith(D,[o,f,I]):A.rejectWith(D,[I,f,c]),I.statusCode($),$=void 0,E&&N.trigger(r?"ajaxSuccess":"ajaxError",[I,j,r?o:c]),q.fireWith(D,[I,f]),E&&(N.trigger("ajaxComplete",[I,j]),--t.active||t.event.trigger("ajaxStop")))}"object"==typeof s&&(o=s,s=void 0),o=o||{};var x,w,C,k,T,S,E,F,j=t.ajaxSetup({},o),D=j.context||j,N=j.context&&(D.nodeType||D.jquery)?t(D):t.event,A=t.Deferred(),q=t.Callbacks("once memory"),$=j.statusCode||{},L={},H={},M=0,O="canceled",I={readyState:0,getResponseHeader:function(t){var e;if(2===M){if(!k)for(k={};e=h.exec(C);)k[e[1].toLowerCase()]=e[2];e=k[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===M?C:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return M||(t=H[n]=H[n]||t,L[t]=e),this},overrideMimeType:function(t){return M||(j.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>M)for(e in t)$[e]=[$[e],t[e]];else I.always(t[I.status]);return this},abort:function(t){var e=t||O;return x&&x.abort(e),p(0,e),this}};if(A.promise(I).complete=q.add,I.success=I.done,I.error=I.fail,j.url=((s||j.url||u)+"").replace(d,"").replace(m,c[1]+"//"),j.type=o.method||o.type||j.method||j.type,j.dataTypes=t.trim(j.dataType||"*").toLowerCase().match(e)||[""],null==j.crossDomain&&(S=v.exec(j.url.toLowerCase()),j.crossDomain=!(!S||S[1]===c[1]&&S[2]===c[2]&&(S[3]||("http:"===S[1]?"80":"443"))===(c[3]||("http:"===c[1]?"80":"443")))),j.data&&j.processData&&"string"!=typeof j.data&&(j.data=t.param(j.data,j.traditional)),r(y,j,o,I),2===M)return I;E=j.global,E&&0===t.active++&&t.event.trigger("ajaxStart"),j.type=j.type.toUpperCase(),j.hasContent=!g.test(j.type),w=j.url,j.hasContent||(j.data&&(w=j.url+=(i.test(w)?"&":"?")+j.data,delete j.data),j.cache===!1&&(j.url=f.test(w)?w.replace(f,"$1_="+n++):w+(i.test(w)?"&":"?")+"_="+n++)),j.ifModified&&(t.lastModified[w]&&I.setRequestHeader("If-Modified-Since",t.lastModified[w]),t.etag[w]&&I.setRequestHeader("If-None-Match",t.etag[w])),(j.data&&j.hasContent&&j.contentType!==!1||o.contentType)&&I.setRequestHeader("Content-Type",j.contentType),I.setRequestHeader("Accept",j.dataTypes[0]&&j.accepts[j.dataTypes[0]]?j.accepts[j.dataTypes[0]]+("*"!==j.dataTypes[0]?", "+_+"; q=0.01":""):j.accepts["*"]);for(F in j.headers)I.setRequestHeader(F,j.headers[F]);if(j.beforeSend&&(j.beforeSend.call(D,I,j)===!1||2===M))return I.abort();O="abort";for(F in{success:1,error:1,complete:1})I[F](j[F]);if(x=r(b,j,o,I)){I.readyState=1,E&&N.trigger("ajaxSend",[I,j]),j.async&&j.timeout>0&&(T=setTimeout(function(){I.abort("timeout")},j.timeout));try{M=1,x.send(L,p)}catch(P){if(!(2>M))throw P;p(-1,P)}}else p(-1,"No Transport");return I},getJSON:function(e,n,i){return t.get(e,n,i,"json")},getScript:function(e,n){return t.get(e,void 0,n,"script")}}),t.each(["get","post"],function(e,n){t[n]=function(e,i,s,r){return t.isFunction(i)&&(r=r||s,s=i,i=void 0),t.ajax({url:e,type:n,dataType:r,data:i,success:s})}}),t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){t.fn[n]=function(t){return this.on(n,t)}}),t});