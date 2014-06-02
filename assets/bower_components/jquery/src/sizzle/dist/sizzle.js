/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
!function(t){function e(t,e,n,i){var s,a,o,r,l,c,d,p,g,m;if((e?e.ownerDocument||e:z)!==$&&j(e),e=e||$,n=n||[],!t||"string"!=typeof t)return n;if(1!==(r=e.nodeType)&&9!==r)return[];if(q&&!i){if(s=_e.exec(t))if(o=s[1]){if(9===r){if(a=e.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(e.ownerDocument&&(a=e.ownerDocument.getElementById(o))&&I(e,a)&&a.id===o)return n.push(a),n}else{if(s[2])return K.apply(n,e.getElementsByTagName(t)),n;if((o=s[3])&&C.getElementsByClassName&&e.getElementsByClassName)return K.apply(n,e.getElementsByClassName(o)),n}if(C.qsa&&(!H||!H.test(t))){if(p=d=O,g=e,m=9===r&&t,1===r&&"object"!==e.nodeName.toLowerCase()){for(c=h(t),(d=e.getAttribute("id"))?p=d.replace(be,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",l=c.length;l--;)c[l]=p+f(c[l]);g=ye.test(t)&&u(e.parentNode)||e,m=c.join(",")}if(m)try{return K.apply(n,g.querySelectorAll(m)),n}catch(v){}finally{d||e.removeAttribute("id")}}}return x(t.replace(le,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>k.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[O]=!0,t}function s(t){var e=$.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function a(t,e){for(var n=t.split("|"),i=t.length;i--;)k.attrHandle[n[i]]=e}function o(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||X)-(~t.sourceIndex||X);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function r(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function c(t){return i(function(e){return e=+e,i(function(n,i){for(var s,a=t([],n.length,e),o=a.length;o--;)n[s=a[o]]&&(n[s]=!(i[s]=n[s]))})})}function u(t){return t&&typeof t.getElementsByTagName!==U&&t}function d(){}function h(t,n){var i,s,a,o,r,l,c,u=B[t+" "];if(u)return n?0:u.slice(0);for(r=t,l=[],c=k.preFilter;r;){(!i||(s=ce.exec(r)))&&(s&&(r=r.slice(s[0].length)||r),l.push(a=[])),i=!1,(s=ue.exec(r))&&(i=s.shift(),a.push({value:i,type:s[0].replace(le," ")}),r=r.slice(i.length));for(o in k.filter)!(s=pe[o].exec(r))||c[o]&&!(s=c[o](s))||(i=s.shift(),a.push({value:i,type:o,matches:s}),r=r.slice(i.length));if(!i)break}return n?r.length:r?e.error(t):B(t,l).slice(0)}function f(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function p(t,e,n){var i=e.dir,s=n&&"parentNode"===i,a=R++;return e.first?function(e,n,a){for(;e=e[i];)if(1===e.nodeType||s)return t(e,n,a)}:function(e,n,o){var r,l,c=[P,a];if(o){for(;e=e[i];)if((1===e.nodeType||s)&&t(e,n,o))return!0}else for(;e=e[i];)if(1===e.nodeType||s){if(l=e[O]||(e[O]={}),(r=l[i])&&r[0]===P&&r[1]===a)return c[2]=r[2];if(l[i]=c,c[2]=t(e,n,o))return!0}}}function g(t){return t.length>1?function(e,n,i){for(var s=t.length;s--;)if(!t[s](e,n,i))return!1;return!0}:t[0]}function m(t,e,n,i,s){for(var a,o=[],r=0,l=t.length,c=null!=e;l>r;r++)(a=t[r])&&(!n||n(a,i,s))&&(o.push(a),c&&e.push(r));return o}function v(t,e,n,s,a,o){return s&&!s[O]&&(s=v(s)),a&&!a[O]&&(a=v(a,o)),i(function(i,o,r,l){var c,u,d,h=[],f=[],p=o.length,g=i||b(e||"*",r.nodeType?[r]:r,[]),v=!t||!i&&e?g:m(g,h,t,r,l),_=n?a||(i?t:p||s)?[]:o:v;if(n&&n(v,_,r,l),s)for(c=m(_,f),s(c,[],r,l),u=c.length;u--;)(d=c[u])&&(_[f[u]]=!(v[f[u]]=d));if(i){if(a||t){if(a){for(c=[],u=_.length;u--;)(d=_[u])&&c.push(v[u]=d);a(null,_=[],c,l)}for(u=_.length;u--;)(d=_[u])&&(c=a?ee.call(i,d):h[u])>-1&&(i[c]=!(o[c]=d))}}else _=m(_===o?_.splice(p,_.length):_),a?a(null,o,_,l):K.apply(o,_)})}function _(t){for(var e,n,i,s=t.length,a=k.relative[t[0].type],o=a||k.relative[" "],r=a?1:0,l=p(function(t){return t===e},o,!0),c=p(function(t){return ee.call(e,t)>-1},o,!0),u=[function(t,n,i){return!a&&(i||n!==E)||((e=n).nodeType?l(t,n,i):c(t,n,i))}];s>r;r++)if(n=k.relative[t[r].type])u=[p(g(u),n)];else{if(n=k.filter[t[r].type].apply(null,t[r].matches),n[O]){for(i=++r;s>i&&!k.relative[t[i].type];i++);return v(r>1&&g(u),r>1&&f(t.slice(0,r-1).concat({value:" "===t[r-2].type?"*":""})).replace(le,"$1"),n,i>r&&_(t.slice(r,i)),s>i&&_(t=t.slice(i)),s>i&&f(t))}u.push(n)}return g(u)}function y(t,n){var s=n.length>0,a=t.length>0,o=function(i,o,r,l,c){var u,d,h,f=0,p="0",g=i&&[],v=[],_=E,y=i||a&&k.find.TAG("*",c),b=P+=null==_?1:Math.random()||.1,x=y.length;for(c&&(E=o!==$&&o);p!==x&&null!=(u=y[p]);p++){if(a&&u){for(d=0;h=t[d++];)if(h(u,o,r)){l.push(u);break}c&&(P=b)}s&&((u=!h&&u)&&f--,i&&g.push(u))}if(f+=p,s&&p!==f){for(d=0;h=n[d++];)h(g,v,o,r);if(i){if(f>0)for(;p--;)g[p]||v[p]||(v[p]=G.call(l));v=m(v)}K.apply(l,v),c&&!i&&v.length>0&&f+n.length>1&&e.uniqueSort(l)}return c&&(P=b,E=_),g};return s?i(o):o}function b(t,n,i){for(var s=0,a=n.length;a>s;s++)e(t,n[s],i);return i}function x(t,e,n,i){var s,a,o,r,l,c=h(t);if(!i&&1===c.length){if(a=c[0]=c[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&C.getById&&9===e.nodeType&&q&&k.relative[a[1].type]){if(e=(k.find.ID(o.matches[0].replace(xe,we),e)||[])[0],!e)return n;t=t.slice(a.shift().value.length)}for(s=pe.needsContext.test(t)?0:a.length;s--&&(o=a[s],!k.relative[r=o.type]);)if((l=k.find[r])&&(i=l(o.matches[0].replace(xe,we),ye.test(a[0].type)&&u(e.parentNode)||e))){if(a.splice(s,1),t=i.length&&f(a),!t)return K.apply(n,i),n;break}}return F(t,c)(i,e,!q,n,ye.test(t)&&u(e.parentNode)||e),n}var w,C,k,S,T,F,E,A,D,j,$,N,q,H,M,L,I,O="sizzle"+-new Date,z=t.document,P=0,R=0,W=n(),B=n(),Q=n(),Z=function(t,e){return t===e&&(D=!0),0},U="undefined",X=1<<31,V={}.hasOwnProperty,Y=[],G=Y.pop,J=Y.push,K=Y.push,te=Y.slice,ee=Y.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="[\\x20\\t\\r\\n\\f]",se="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ae=se.replace("w","w#"),oe="\\["+ie+"*("+se+")"+ie+"*(?:([*^$|!~]?=)"+ie+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ae+")|)|)"+ie+"*\\]",re=":("+se+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+oe.replace(3,8)+")*)|.*)\\)|)",le=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g"),ce=new RegExp("^"+ie+"*,"+ie+"*"),ue=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),de=new RegExp("="+ie+"*([^\\]'\"]*?)"+ie+"*\\]","g"),he=new RegExp(re),fe=new RegExp("^"+ae+"$"),pe={ID:new RegExp("^#("+se+")"),CLASS:new RegExp("^\\.("+se+")"),TAG:new RegExp("^("+se.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ie+"?|("+ie+")|.)","ig"),we=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(55296|i>>10,56320|1023&i)};try{K.apply(Y=te.call(z.childNodes),z.childNodes),Y[z.childNodes.length].nodeType}catch(Ce){K={apply:Y.length?function(t,e){J.apply(t,te.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}C=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},j=e.setDocument=function(t){var e,n=t?t.ownerDocument||t:z,i=n.defaultView;return n!==$&&9===n.nodeType&&n.documentElement?($=n,N=n.documentElement,q=!T(n),i&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",function(){j()},!1):i.attachEvent&&i.attachEvent("onunload",function(){j()})),C.attributes=s(function(t){return t.className="i",!t.getAttribute("className")}),C.getElementsByTagName=s(function(t){return t.appendChild(n.createComment("")),!t.getElementsByTagName("*").length}),C.getElementsByClassName=ve.test(n.getElementsByClassName)&&s(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length}),C.getById=s(function(t){return N.appendChild(t).id=O,!n.getElementsByName||!n.getElementsByName(O).length}),C.getById?(k.find.ID=function(t,e){if(typeof e.getElementById!==U&&q){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},k.filter.ID=function(t){var e=t.replace(xe,we);return function(t){return t.getAttribute("id")===e}}):(delete k.find.ID,k.filter.ID=function(t){var e=t.replace(xe,we);return function(t){var n=typeof t.getAttributeNode!==U&&t.getAttributeNode("id");return n&&n.value===e}}),k.find.TAG=C.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==U?e.getElementsByTagName(t):void 0}:function(t,e){var n,i=[],s=0,a=e.getElementsByTagName(t);if("*"===t){for(;n=a[s++];)1===n.nodeType&&i.push(n);return i}return a},k.find.CLASS=C.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==U&&q?e.getElementsByClassName(t):void 0},M=[],H=[],(C.qsa=ve.test(n.querySelectorAll))&&(s(function(t){t.innerHTML="<select t=''><option selected=''></option></select>",t.querySelectorAll("[t^='']").length&&H.push("[*^$]="+ie+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||H.push("\\["+ie+"*(?:value|"+ne+")"),t.querySelectorAll(":checked").length||H.push(":checked")}),s(function(t){var e=n.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&H.push("name"+ie+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),H.push(",.*:")})),(C.matchesSelector=ve.test(L=N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&s(function(t){C.disconnectedMatch=L.call(t,"div"),L.call(t,"[s!='']:x"),M.push("!=",re)}),H=H.length&&new RegExp(H.join("|")),M=M.length&&new RegExp(M.join("|")),e=ve.test(N.compareDocumentPosition),I=e||ve.test(N.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},Z=e?function(t,e){if(t===e)return D=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i?i:(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!C.sortDetached&&e.compareDocumentPosition(t)===i?t===n||t.ownerDocument===z&&I(z,t)?-1:e===n||e.ownerDocument===z&&I(z,e)?1:A?ee.call(A,t)-ee.call(A,e):0:4&i?-1:1)}:function(t,e){if(t===e)return D=!0,0;var i,s=0,a=t.parentNode,r=e.parentNode,l=[t],c=[e];if(!a||!r)return t===n?-1:e===n?1:a?-1:r?1:A?ee.call(A,t)-ee.call(A,e):0;if(a===r)return o(t,e);for(i=t;i=i.parentNode;)l.unshift(i);for(i=e;i=i.parentNode;)c.unshift(i);for(;l[s]===c[s];)s++;return s?o(l[s],c[s]):l[s]===z?-1:c[s]===z?1:0},n):$},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==$&&j(t),n=n.replace(de,"='$1']"),!(!C.matchesSelector||!q||M&&M.test(n)||H&&H.test(n)))try{var i=L.call(t,n);if(i||C.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(s){}return e(n,$,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==$&&j(t),I(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==$&&j(t);var n=k.attrHandle[e.toLowerCase()],i=n&&V.call(k.attrHandle,e.toLowerCase())?n(t,e,!q):void 0;return void 0!==i?i:C.attributes||!q?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,s=0;if(D=!C.detectDuplicates,A=!C.sortStable&&t.slice(0),t.sort(Z),D){for(;e=t[s++];)e===t[s]&&(i=n.push(s));for(;i--;)t.splice(n[i],1)}return A=null,t},S=e.getText=function(t){var e,n="",i=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=S(t)}else if(3===s||4===s)return t.nodeValue}else for(;e=t[i++];)n+=S(e);return n},k=e.selectors={cacheLength:50,createPseudo:i,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xe,we),t[3]=(t[4]||t[5]||"").replace(xe,we),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[5]&&t[2];return pe.CHILD.test(t[0])?null:(t[3]&&void 0!==t[4]?t[2]=t[4]:n&&he.test(n)&&(e=h(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(xe,we).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+ie+")"+t+"("+ie+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==U&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(s){var a=e.attr(s,t);return null==a?"!="===n:n?(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a+" ").indexOf(i)>-1:"|="===n?a===i||a.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,s){var a="nth"!==t.slice(0,3),o="last"!==t.slice(-4),r="of-type"===e;return 1===i&&0===s?function(t){return!!t.parentNode}:function(e,n,l){var c,u,d,h,f,p,g=a!==o?"nextSibling":"previousSibling",m=e.parentNode,v=r&&e.nodeName.toLowerCase(),_=!l&&!r;if(m){if(a){for(;g;){for(d=e;d=d[g];)if(r?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===t&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&_){for(u=m[O]||(m[O]={}),c=u[t]||[],f=c[0]===P&&c[1],h=c[0]===P&&c[2],d=f&&m.childNodes[f];d=++f&&d&&d[g]||(h=f=0)||p.pop();)if(1===d.nodeType&&++h&&d===e){u[t]=[P,f,h];break}}else if(_&&(c=(e[O]||(e[O]={}))[t])&&c[0]===P)h=c[1];else for(;(d=++f&&d&&d[g]||(h=f=0)||p.pop())&&((r?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++h||(_&&((d[O]||(d[O]={}))[t]=[P,h]),d!==e)););return h-=s,h===i||0===h%i&&h/i>=0}}},PSEUDO:function(t,n){var s,a=k.pseudos[t]||k.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return a[O]?a(n):a.length>1?(s=[t,t,"",n],k.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,s=a(t,n),o=s.length;o--;)i=ee.call(t,s[o]),t[i]=!(e[i]=s[o])}):function(t){return a(t,0,s)}):a}},pseudos:{not:i(function(t){var e=[],n=[],s=F(t.replace(le,"$1"));return s[O]?i(function(t,e,n,i){for(var a,o=s(t,null,i,[]),r=t.length;r--;)(a=o[r])&&(t[r]=!(e[r]=a))}):function(t,i,a){return e[0]=t,s(e,null,a,n),!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return function(e){return(e.textContent||e.innerText||S(e)).indexOf(t)>-1}}),lang:i(function(t){return fe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(xe,we).toLowerCase(),function(e){var n;do if(n=q?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===N},focus:function(t){return t===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!k.pseudos.empty(t)},header:function(t){return me.test(t.nodeName)},input:function(t){return ge.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:c(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:c(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},k.pseudos.nth=k.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[w]=r(w);for(w in{submit:!0,reset:!0})k.pseudos[w]=l(w);d.prototype=k.filters=k.pseudos,k.setFilters=new d,F=e.compile=function(t,e){var n,i=[],s=[],a=Q[t+" "];if(!a){for(e||(e=h(t)),n=e.length;n--;)a=_(e[n]),a[O]?i.push(a):s.push(a);a=Q(t,y(s,i))}return a},C.sortStable=O.split("").sort(Z).join("")===O,C.detectDuplicates=!!D,j(),C.sortDetached=s(function(t){return 1&t.compareDocumentPosition($.createElement("div"))}),s(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||a("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),C.attributes&&s(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||a("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),s(function(t){return null==t.getAttribute("disabled")})||a(ne,function(t,e,n){var i;return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:t.Sizzle=e}(window);