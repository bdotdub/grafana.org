!function(){function t(t){O.set(t)}function e(t){if(!t||""==t)return"";for(;t[l](0)[h]>0&&" \n\r	"[c](t[l](0))>-1;)t=t[b](1);for(;t[l](t[h]-1)[h]>0&&" \n\r	"[c](t[l](t[h]-1))>-1;)t=t[b](0,t[h]-1);return t}var n=void 0,i=encodeURIComponent,s=String,r=Math,o="push",a="cookie",l="charAt",c="indexOf",u="getTime",d="toString",f="window",h="length",p="document",g="split",m="location",v="protocol",y="href",b="substring",_="join",x="toLowerCase",w="_gat",C="_gaq",k="4.9.4",T="_gaUserPrefs",S="ioo",E="&",F="=",D="__utma=",j="__utmb=",A="__utmc=",N="__utmk=",q="__utmv=",$="__utmz=",L="__utmx=",H="GASO=",M=function(){var t=this,e=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";t.set=function(t){e[t]=!0},t.Sc=function(){for(var t=[],i=0;i<e[h];i++)e[i]&&(t[r.floor(i/6)]^=1<<i%6);for(i=0;i<t[h];i++)t[i]=n[l](t[i]||0);return t[_]("")+"~"}},O=new M,I=function(t,e){var n=this;n.window=t,n.document=e,n.setTimeout=function(t,e){setTimeout(t,e)},n.Jb=function(t){return navigator.userAgent[c](t)>=0},n.Xc=function(){return n.Jb("Firefox")&&![].reduce},n.Vc=function(){return P[f][T]},n.Gc=function(){return P[f].external},n.Hc=function(){return P[f].performance||P[f].webkitPerformance},n.Ic=function(){return P[f].top==P[f]},n.Ya=function(t){var e=P[f]&&P[f].gaGlobal;return t&&!e&&(e={},P[f].gaGlobal=e),e},n.ec=function(t){P[p][m].href=t},n.qb=function(t){if(!t||!n.Jb("Firefox"))return t;for(var t=t.replace(/\n|\r/g," "),e=0,i=t[h];i>e;++e){var s=255&t.charCodeAt(e);(10==s||13==s)&&(t=t[b](0,e)+"?"+t[b](e+1))}return t}},P=new I(window,document),z=function(e){return function(n,i,s){return e[n]=function(){return t(i),s.apply(e,arguments)},s}},R=function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)},W=function(t){return"[object Array]"==Object.prototype[d].call(Object(t))},B=function(t){return n==t||"-"==t||""==t},X=function(t,e,n){var i,s="-";return!B(t)&&!B(e)&&!B(n)&&(i=t[c](e),i>-1&&(n=t[c](n,i),0>n&&(n=t[h]),s=t[b](i+e[c](F)+1,n))),s},U=function(t){var e,n,i=!1,s=0;if(!B(t))for(i=!0,e=0;e<t[h];e++)n=t[l](e),s+="."==n?1:0,i=i&&1>=s&&(0==e&&"-"==n||".0123456789"[c](n)>-1);return i},Q=function(e,n){var s=i;return s instanceof Function?n?encodeURI(e):s(e):(t(68),escape(e))},V=function(e,n){var i,s=decodeURIComponent,e=e[g]("+")[_](" ");if(s instanceof Function)try{i=n?decodeURI(e):s(e)}catch(r){t(17),i=unescape(e)}else t(68),i=unescape(e);return i},Z=function(t,e){return t[c](e)>-1},G=function(e,n){e[o]||t(94),e[e[h]]=n},Y=function(t){var e,n=1,i=0;if(!B(t))for(n=0,e=t[h]-1;e>=0;e--)i=t.charCodeAt(e),n=(268435455&n<<6)+i+(i<<14),i=266338304&n,n=0!=i?n^i>>21:n;return n},K=function(){return r.round(2147483647*r.random())},J=function(){},te=function(t,e){this.ib=t,this.jb=e},ee=function(){function t(t){for(var e,n=[],t=t[g](","),i=0;i<t[h];i++)e=t[i][g](":"),n[o](new te(e[0],e[1]));return n}var e=this;e.Ca="utm_campaign",e.Da="utm_content",e.Ea="utm_id",e.Fa="utm_medium",e.Ga="utm_nooverride",e.Ha="utm_source",e.Ia="utm_term",e.Ja="gclid",e.vc="dclid",e.U=0,e.w=0,e.La=15768e6,e.Ma=18e5,e.s=63072e6,e.V=[],e.W=[],e.wc="cse",e.xc="q",e.Ta=50,e.J=t("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words"),e.f="/",e.L=100,e.ga="/__utm.gif",e.la=1,e.ma=1,e.u="|",e.ka=1,e.Ka=1,e.Ua=1,e.b="auto",e.B=1,e.Wb=10,e.zc=10,e.Ac=.2,e.o=n},ne=function(e){function n(t,e,n,i){var s="",o=0,s=X(t,"2"+e,";");if(!B(s)){if(t=s[c]("^"+n+"."),0>t)return["",0];s=s[b](t+n[h]+2),s[c]("^")>0&&(s=s[g]("^")[0]),n=s[g](":"),s=n[1],o=parseInt(n[0],10),!i&&o<r.m&&(s="")}return B(s)&&(s=""),[s,o]}function i(t,e){return"^"+[[e,t[1]][_]("."),t[0]][_](":")}function s(t){var e=new Date,t=new Date(e[u]()+t);return"expires="+t.toGMTString()+"; "}var r=this,o=e;r.m=(new Date)[u]();var l=[D,j,A,$,q,L,H];r.g=function(){var t=P[p][a];return o.o?r.Nc(t,o.o):t},r.Nc=function(t,e){for(var i,s=[],r=0;r<l[h];r++)i=n(t,l[r],e)[0],B(i)||(s[s[h]]=l[r]+i+";");return s[_]("")},r.l=function(e,n,i){var l=i>0?s(i):"";o.o&&(n=r.Oc(P[p][a],e,o.o,n,i),e="2"+e,l=i>0?s(o.s):""),e+=n,e=P.qb(e),e[h]>2e3&&(t(69),e=e[b](0,2e3)),l=e+"; path="+o.f+"; "+l+r.hb(),be.pb()||(P[p].cookie=l)},r.Oc=function(t,e,s,a,l){var c="",l=l||o.s,a=i([a,r.m+1*l],s),c=X(t,"2"+e,";");return B(c)?a:(t=i(n(t,e,s,!0),s),c=c[g](t)[_](""),c=a+c)},r.hb=function(){return B(o.b)?"":"domain="+o.b+";"}},ie=function(t){function e(t){return t=W(t)?t[_]("."):"",B(t)?"-":t}function i(t,e){var n,i=[];if(!B(t)&&(i=t[g]("."),e))for(n=0;n<i[h];n++)U(i[n])||(i[n]="-");return i}function r(t,e,n){var i,s,r=m.I;for(i=0;i<r[h];i++)s=r[i][0],s+=B(e)?e:e+r[i][4],r[i][2](X(t,s,n))}var o,a,l,c,u,d,f,p,m=this,v=t;m.i=new ne(t),m.Ba=function(){return n==p||p==m.K()},m.g=function(){return m.i.g()},m.ea=function(){return u?u:"-"},m.Pa=function(t){u=t},m.fa=function(t){p=U(t)?1*t:"-"},m.da=function(){return e(d)},m.X=function(t){d=i(t)},m.yc=function(){m.i.l(q,"",-1)},m.Rb=function(){return p?p:"-"},m.hb=function(){return B(v.b)?"":"domain="+v.b+";"},m.ba=function(){return e(o)},m.Na=function(t){o=i(t,1)},m.z=function(){return e(a)},m.$=function(t){a=i(t,1)},m.ca=function(){return e(l)},m.Oa=function(t){l=i(t,1)},m.qa=function(){return e(c)},m.ra=function(t){for(c=i(t),t=0;t<c[h];t++)4>t&&!U(c[t])&&(c[t]="-")},m.Fc=function(){return f},m.Dc=function(t){f=t},m.Qb=function(){o=[],a=[],l=[],c=[],u=n,d=[],p=n},m.K=function(){for(var t="",e=0;e<m.I[h];e++)t+=m.I[e][1]();return Y(t)},m.Z=function(t){var e=m.g(),n=!1;return e&&(r(e,t,";"),m.fa(s(m.K())),n=!0),n},m.Sb=function(t){r(t,"",E),m.fa(X(t,N,E))},m.Tb=function(){var t,e=m.I,n=[];for(t=0;t<e[h];t++)G(n,e[t][0]+e[t][1]());return G(n,N+m.K()),n[_](E)},m.Ub=function(t,e){var n=m.I,i=v.f;m.Z(t),v.f=e;for(var s=0;s<n[h];s++)B(n[s][1]())||n[s][3]();v.f=i},m.Qa=function(){m.i.l(D,m.ba(),v.s)},m.aa=function(){m.i.l(j,m.z(),v.Ma)},m.Ra=function(){m.i.l(A,m.ca(),0)},m.sa=function(){m.i.l($,m.qa(),v.La)},m.Sa=function(){m.i.l(L,m.ea(),v.s)},m.Y=function(){m.i.l(q,m.da(),v.s)},m.Ec=function(){m.i.l(H,m.Fc(),0)},m.I=[[D,m.ba,m.Na,m.Qa,"."],[j,m.z,m.$,m.aa,""],[A,m.ca,m.Oa,m.Ra,""],[L,m.ea,m.Pa,m.Sa,""],[$,m.qa,m.ra,m.sa,"."],[q,m.da,m.X,m.Y,"."]]},se="https:"==P[p][m][v]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/",re=se+"p/__utm.gif",oe=function(){var t=this;t.Bb=function(e,n,i,s,r){n[h]<=2036||r?t.Aa(e+"?"+n,s):n[h]<=8192?P.Xc()?t.Aa(e+"?"+i+"&err=ff2post&len="+n[h],s):t.fd(n,s):t.Aa(e+"?"+i+"&err=len&max=8192&len="+n[h],s)},t.Aa=function(t,e){var n=new Image(1,1);n.src=t,n.onload=function(){n.onload=null,(e||J)()}},t.fd=function(e,n){t.ed(e,n)||t.Ob(e,n)},t.ed=function(t,e){var n,i=P[f].XDomainRequest;return i?(n=new i,n.open("POST",re)):(i=P[f].XMLHttpRequest)&&(i=new i,"withCredentials"in i&&(n=i,n.open("POST",re,!0),n.setRequestHeader("Content-Type","text/plain"))),n?(n.onreadystatechange=function(){4==n.readyState&&(e&&e(),n=null)},n.send(t),!0):!1},t.Ob=function(e,n){var s=P[p];if(s.body){e=i(e);try{var r=s.createElement('<iframe name="'+e+'"></iframe>')}catch(o){r=s.createElement("iframe"),r.name=e}r.height="0",r.width="0",r.style.display="none",r.style.visibility="hidden";var a=s[m],a=a[v]+"//"+a.host+"/favicon.ico",a=se+"u/post_iframe.html#"+i(a),l=function(){r.src="",r.parentNode&&r.parentNode.removeChild(r)};R(P[f],"beforeunload",l);var c=!1,u=0,d=function(){if(!c){try{if(u>9||r.contentWindow[m].host==s[m].host){c=!0,l();var t=P[f],e="beforeunload",i=l;return t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i),n&&n(),void 0}}catch(o){}u++,P.setTimeout(d,200)}};R(r,"load",d),s.body.appendChild(r),r.src=a}else P.setTimeout(function(){t.Ob(e,n)},100)}},ae=function(t){var e=this,n=t,i=new ie(n),s=null,o=!be.pb(),a=function(){};e.Uc=function(){return"https:"==P[p][m][v]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"},e.A=function(t,l,c,d,f,h){s||(s=new oe);var v=n.B,y=P[p][m];i.Z(c);var b=i.z()[g](".");if(b[1]<500||d){if(f){var x,w=(new Date)[u]();x=(w-b[3])*(n.Ac/1e3),x>=1&&(b[2]=r.min(r.floor(1*b[2]+x),n.zc),b[3]=w)}(d||!f||b[2]>=1)&&(!d&&f&&(b[2]=1*b[2]-1),d=1*b[1]+1,b[1]=d,f="utmwv="+k,w="&utms="+d,x="&utmn="+K(),d=f+"e"+w+x,t=f+w+x+(B(y.hostname)?"":"&utmhn="+Q(y.hostname))+(100==n.L?"":"&utmsp="+Q(n.L))+t,(0==v||2==v)&&(y=2==v?a:h||a,o&&s.Bb(n.ga,t,d,y,!0)),(1==v||2==v)&&(l="&utmac="+l,d+=l,t+=l+"&utmcc="+e.Tc(c),be.Ab&&(c="&aip=1",d+=c,t+=c),t+="&utmu="+O.Sc(),o&&s.Bb(e.Uc(),t,d,h)))}i.$(b[_](".")),i.aa()},e.Tc=function(t){for(var e,n=[],s=[D,$,q,L],r=i.g(),o=0;o<s[h];o++)if(e=X(r,s[o]+t,";"),!B(e)){if(s[o]==q){if(e=e[g](t+".")[1][g]("|")[0],B(e))continue;e=t+"."+e}G(n,s[o]+e+";")}return Q(n[_]("+"))}},le=function(){var t=this;t.N=[],t.Va=function(e){for(var n,i=t.N,s=0;s<i[h];s++)n=e==i[s].q?i[s]:n;return n},t.Xb=function(e,i,s,r,o,a,l,c){var u=t.Va(e);return n==u?(u=new le.Wc(e,i,s,r,o,a,l,c),G(t.N,u)):(u.tb=i,u.zb=s,u.yb=r,u.wb=o,u.ub=a,u.xb=l,u.vb=c),u}};le.Qc=function(t,e,n,i,s,r){var o=this;o.Fb=t,o.va=e,o.n=n,o.Cb=i,o.Db=s,o.Eb=r,o.ha=function(){return"&"+["utmt=item","tid="+Q(o.Fb),"ipc="+Q(o.va),"ipn="+Q(o.n),"iva="+Q(o.Cb),"ipr="+Q(o.Db),"iqt="+Q(o.Eb)][_]("&utm")}},le.Wc=function(t,e,i,s,r,o,a,l){var c=this;c.q=t,c.tb=e,c.zb=i,c.yb=s,c.wb=r,c.ub=o,c.xb=a,c.vb=l,c.M=[],c.Vb=function(t,e,i,s,r){var o=c.Rc(t),a=c.q;n==o?G(c.M,new le.Qc(a,t,e,i,s,r)):(o.Fb=a,o.va=t,o.n=e,o.Cb=i,o.Db=s,o.Eb=r)},c.Rc=function(t){for(var e,n=c.M,i=0;i<n[h];i++)e=t==n[i].va?n[i]:e;return e},c.ha=function(){return"&"+["utmt=tran","id="+Q(c.q),"st="+Q(c.tb),"to="+Q(c.zb),"tx="+Q(c.yb),"sp="+Q(c.wb),"ci="+Q(c.ub),"rg="+Q(c.xb),"co="+Q(c.vb)][_]("&utmt")}};var ce=function(t){function e(){var t,e,i;e="ShockwaveFlash";var r="$version",o=P[f].navigator;if((o=o?o.plugins:n)&&o[h]>0)for(t=0;t<o[h]&&!i;t++)e=o[t],Z(e.name,"Shockwave Flash")&&(i=e.description[g]("Shockwave Flash ")[1]);else{e=e+"."+e;try{t=new ActiveXObject(e+".7"),i=t.GetVariable(r)}catch(a){}if(!i)try{t=new ActiveXObject(e+".6"),i="WIN 6,0,21,0",t.we="always",i=t.GetVariable(r)}catch(l){}if(!i)try{t=new ActiveXObject(e),i=t.GetVariable(r)}catch(c){}i&&(i=i[g](" ")[1][g](","),i=i[0]+"."+i[1]+" r"+i[2])}return i?i:s}var i=this,s="-",r=P[f].screen,o=P[f].navigator;i.Nb=r?r.width+"x"+r.height:s,i.Mb=r?r.colorDepth+"-bit":s,i.cd=Q(P[p].characterSet?P[p].characterSet:P[p].charset?P[p].charset:s),i.Lb=(o&&o.language?o.language:o&&o.browserLanguage?o.browserLanguage:s)[x](),i.Kb=o&&o.javaEnabled()?1:0,i.dd=t?e():s,i.dc=function(){return E+"utm"+["cs="+Q(i.cd),"sr="+i.Nb,"sc="+i.Mb,"ul="+i.Lb,"je="+i.Kb,"fl="+Q(i.dd)][_]("&utm")},i.cc=function(){for(var t=P[f].navigator,e=P[f].history[h],t=t.appName+t.version+i.Lb+t.platform+t.userAgent+i.Kb+i.Nb+i.Mb+(P[p][a]?P[p][a]:"")+(P[p].referrer?P[p].referrer:""),n=t[h];e>0;)t+=e--^n++;return Y(t)}},ue=function(t,e,i,s){function r(t){var e="",e=t[g]("://")[1][x]();return Z(e,"/")&&(e=e[g]("/")[0]),e}var o=s,a=this;a.a=t,a.ob=e,a.m=i,a.mb=function(t){var e=a.ua();return new ue.v(X(t,o.Ea+F,E),X(t,o.Ha+F,E),X(t,o.Ja+F,E),a.R(t,o.Ca,"(not set)"),a.R(t,o.Fa,"(not set)"),a.R(t,o.Ia,e&&!B(e.G)?V(e.G):n),a.R(t,o.Da,n),X(t,o.vc+F,E))},a.nb=function(t){var e,n=r(t);e=t;var i="";return e=e[g]("://")[1][x](),Z(e,"/")&&(e=e[g]("/")[1],Z(e,"?")&&(i=e[g]("?")[0])),e=i,Z(n,"google")&&(t=t[g]("?")[_](E),Z(t,E+o.xc+F)&&e==o.wc)?!0:!1},a.ua=function(){var t,e,i=a.ob,s=o.J;if(!B(i)&&"0"!=i&&Z(i,"://")&&!a.nb(i)){t=r(i);for(var l=0;l<s[h];l++)if(e=s[l],Z(t,e.ib[x]())&&(i=i[g]("?")[_](E),Z(i,E+e.jb+F)))return t=i[g](E+e.jb+F)[1],Z(t,E)&&(t=t[g](E)[0]),new ue.v(n,e.ib,n,"(organic)","organic",t,n,n)}},a.R=function(t,e,n){return t=X(t,e+F,E),n=B(t)?B(n)?"-":n:V(t)},a.Bc=function(t){var e=o.V,n=!1;if(t&&"organic"==t.P)for(var t=V(t.G)[x](),i=0;i<e[h];i++)n=n||e[i][x]()==t;return n},a.lb=function(){var t="",e="",t=a.ob;return B(t)||"0"==t||!Z(t,"://")||a.nb(t)?void 0:(t=t[g]("://")[1],Z(t,"/")&&(e=t[b](t[c]("/")),e=e[g]("?")[0],t=t[g]("/")[0][x]()),0==t[c]("www.")&&(t=t[b](4)),new ue.v(n,t,n,"(referral)","referral",n,e,n))},a.kb=function(t){var e="";return o.U&&(e=t&&t.hash?t[y][b](t[y][c]("#")):"",e=""!=e?e+E:e),e+=t.search},a.ta=function(){return new ue.v(n,"(direct)",n,"(direct)","(none)",n,n,n)},a.Cc=function(t){var e=!1,n=o.W;if(t&&"referral"==t.P)for(var t=Q(t.Q)[x](),i=0;i<n[h];i++)e=e||Z(t,n[i][x]());return e},a.h=function(t){return n!=t&&t.fb()},a.te=function(t){var t=X(t,$+a.a+".",";"),e=t[g]("."),t=new ue.v;return t.gb(e.slice(4)[_](".")),a.h(t)?(e=P[p][m],e=a.kb(e),e=a.mb(e),a.h(e)||(e=a.ua(),a.h(e)||(e=a.lb())),a.h(e)&&t.H()[x]()!=e.H()[x]()):!0},a.Pb=function(t,e){if(o.Ka){var n,i,s,r="",l="-",c=0,u=a.a;if(t){if(s=t.g(),r=a.kb(P[p][m]),o.w&&t.Ba()&&(l=V(t.qa()),!B(l)&&!Z(l,";")))return t.ra(l),t.sa(),void 0;if(l=X(s,$+u+".",";"),n=a.mb(r),a.h(n)&&(r=X(r,o.Ga+F,E),"1"==r&&!B(l)))return;if(!a.h(n)){if(n=a.ua(),r=a.Bc(n),!B(l)&&r)return;r&&(n=a.ta())}if(!a.h(n)&&e){if(n=a.lb(),r=a.Cc(n),!B(l)&&r)return;r&&(n=a.ta())}a.h(n)||B(l)&&e&&(n=a.ta()),a.h(n)&&(B(l)||(c=l[g]("."),i=new ue.v,i.gb(c.slice(4)[_](".")),i=i.H()[x]()==n.H()[x](),c=1*c[3]),!i||e)&&(s=X(s,D+u+".",";"),i=s.lastIndexOf("."),s=i>9?1*s[b](i+1):0,c++,s=0==s?1:s,t.ra([u,a.m,s,c,n.H()][_](".")),t.sa())}}}};ue.v=function(t,e,n,i,s,r,o,a){var l=this;l.q=t,l.Q=e,l.ya=n,l.n=i,l.P=s,l.G=r,l.Gb=o,l.xa=a,l.H=function(){var t,e,n=[],i=[["cid",l.q],["csr",l.Q],["gclid",l.ya],["ccn",l.n],["cmd",l.P],["ctr",l.G],["cct",l.Gb],["dclid",l.xa]];if(l.fb())for(t=0;t<i[h];t++)B(i[t][1])||(e=i[t][1][g]("+")[_]("%20"),e=e[g](" ")[_]("%20"),G(n,"utm"+i[t][0]+F+e));return P.qb(n[_]("|"))},l.fb=function(){return!(B(l.q)&&B(l.Q)&&B(l.ya)&&B(l.xa))},l.gb=function(t){var e=function(e){return V(X(t,"utm"+e+F,"|"))};l.q=e("cid"),l.Q=e("csr"),l.ya=e("gclid"),l.n=e("ccn"),l.P=e("cmd"),l.G=e("ctr"),l.Gb=e("cct"),l.xa=e("dclid")}};var de=function(t,e,n,i){var s=this,r=e,o=F,a=t,l=i;s.S=n,s.wa="",s.r={},s.$b=function(){var t;if(t=X(s.S.g(),q+r+".",";")[g](r+".")[1],!B(t)){t=t[g]("|");var e,n=s.r,i=t[1];if(!B(i))for(var i=i[g](","),a=0;a<i[h];a++)e=i[a],B(e)||(e=e[g](o),4==e[h]&&(n[e[0]]=[V(e[1]),V(e[2]),1]));s.wa=V(t[0]),s.T()}},s.T=function(){s.Pc();var t,e,n=Q(s.wa),i="";for(t in s.r)(e=s.r[t])&&1===e[2]&&(i+=t+o+Q(e[0])+o+Q(e[1])+o+1+",");B(i)||(n+="|"+i),B(n)?s.S.yc():(s.S.X(r+"."+n),s.S.Y())},s.bc=function(t){s.wa=t,s.T()},s.ac=function(t,e,n,i){1!=i&&2!=i&&3!=i&&(i=3);var r=!1;if(e&&n&&t>0&&t<=a.Ta){var o=Q(e),l=Q(n);o[h]+l[h]<=64&&(s.r[t]=[e,n,i],s.T(),r=!0)}return r},s.Zb=function(t){return(t=s.r[t])&&1===t[2]?t[1]:void 0},s.Yb=function(t){var e=s.r;e[t]&&(delete e[t],s.T())},s.Pc=function(){l.t(8),l.t(9),l.t(11);var t,e,n=s.r;for(e in n)(t=n[e])&&(l.j(8,e,t[0]),l.j(9,e,t[1]),(t=t[2])&&3!=t&&l.j(11,e,""+t))}},fe=function(){function t(t,e,i,s){n==c[t]&&(c[t]={}),n==c[t][e]&&(c[t][e]=[]),c[t][e][i]=s}function e(t,e,i){return n!=c[t]&&n!=c[t][e]?c[t][e][i]:void 0}function i(t,e){if(n!=c[t]&&n!=c[t][e]){c[t][e]=n;var i,s=!0;for(i=0;i<p[h];i++)if(n!=c[t][p[i]]){s=!1;break}s&&(c[t]=n)}}function s(t){var e,i,s="",r=!1;for(e=0;e<p[h];e++)if(i=t[p[e]],n!=i){r&&(s+=p[e]);for(var r=[],o=n,a=n,a=0;a<i[h];a++)if(n!=i[a]){o="",a!=w&&n==i[a-1]&&(o+=a[d]()+y);var c;c=i[a];for(var u="",f=n,b=n,C=n,f=0;f<c[h];f++)b=c[l](f),C=x[b],u+=n!=C?C:b;c=u,o+=c,G(r,o)}i=g+r[_](v)+m,s+=i,r=!1}else r=!0;return s}var o=this,a=z(o),c={},u="k",f="v",p=[u,f],g="(",m=")",v="*",y="!",b="'",x={};x[b]="'0",x[m]="'1",x[v]="'2",x[y]="'3";var w=1;o.Yc=function(t){return n!=c[t]},o.C=function(){var t,e="";for(t in c)n!=c[t]&&(e+=t[d]()+s(c[t]));return e},o.hc=function(t){if(t==n)return o.C();var e,i=t.C();for(e in c)n!=c[e]&&!t.Yc(e)&&(i+=e[d]()+s(c[e]));return i},o.j=a("_setKey",89,function(e,n,i){return"string"!=typeof i?!1:(t(e,u,n,i),!0)}),o.ja=a("_setValue",90,function(e,i,s){return("number"==typeof s||n!=Number&&s instanceof Number)&&r.round(s)==s&&0/0!=s&&1/0!=s?(t(e,f,i,s[d]()),!0):!1}),o.fc=a("_getKey",87,function(t,n){return e(t,u,n)}),o.gc=a("_getValue",88,function(t,n){return e(t,f,n)}),o.t=a("_clearKey",85,function(t){i(t,u)}),o.ia=a("_clearValue",86,function(t){i(t,f)})},he=function(t,e){var n=this,i=z(n);n.ze=e,n.gd=t,n.Za=i("_trackEvent",91,function(t,i,s){return e.Za(n.gd,t,i,s)})},pe=function(t,e){var i=this,s=P.Gc(),o=P.Hc(),a=10;i.rb=new fe,i.Kc=function(){var t,e="timing",i="onloadT";return s&&s[i]!=n&&s.isValidLoadTime?t=s[i]:o&&o[e]&&(t=o[e].loadEventStart-o[e].fetchStart),t},i.Mc=function(){return t.D()&&t.Xa()%100<a},i.Lc=function(){var n="&utmt=event&utme="+Q(i.rb.C())+t.na();e.A(n,t.p,t.a,!1,!0)},i.Jc=function(t){return t=r.min(r.floor(t/100),5e3),t>0?t+"00":"0"},i.sb=function(){var t=i.Kc();if(t==n||isNaN(t))return!1;if(0>=t)return!0;if(t>2147483648)return!1;var e=i.rb;e.t(14),e.ia(14);var r=i.Jc(t);return e.j(14,1,r)&&e.ja(14,1,t)&&i.Lc(),s&&s.isValidLoadTime!=n&&s.setPageReadyTime(),!1},i.Wa=function(){return i.Mc()?P.Ic()?(i.sb()&&R(P[f],"load",i.sb,!1),!0):!1:!1}},ge=function(){};ge.Zc=function(t){var e="gaso=",n=P[p][m].hash;return t=n&&1==n[c](e)?X(n,e,E):(n=P[f].name)&&0<=n[c](e)?X(n,e,E):X(t.g(),H,";")},ge.ad=function(t,e){var n=(e||"www")+".google.com",n="https://"+n+"/analytics/reporting/overlay_js?gaso="+t+E+K(),i="_gasojs",s=P[p].createElement("script");s.type="text/javascript",s.src=n,i&&(s.id=i),(P[p].getElementsByTagName("head")[0]||P[p].getElementsByTagName("body")[0]).appendChild(s)},ge.load=function(t,e){if(!ge.$c){var n=ge.Zc(e),i=n&&n.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);i&&(e.Dc(n),e.Ec(),be._gasoDomain=t.b,be._gasoCPath=t.f,ge.ad(i[2],i[1])),ge.$c=!0}};var me=function(i,o,a){function d(){if("auto"==q.b){var t=P[p].domain;"www."==t[b](0,4)&&(t=t[b](4)),q.b=t}q.b=q.b[x]()}function w(){d();var t=q.b,e=t[c]("www.google.")*t[c](".google.")*t[c]("google.");return e||"/"!=q.f||t[c]("google.org")>-1}function C(t,e,n){return B(t)||B(e)||B(n)?"-":(t=X(t,D+S.a+".",e),B(t)||(t=t[g]("."),t[5]=""+(t[5]?1*t[5]+1:1),t[3]=t[4],t[4]=n,t=t[_](".")),t)}function T(){return"file:"!=P[p][m][v]&&w()}var S=this,F=z(S),N=n,q=new ee,$=!1,L=n;S.n=i,S.m=r.round((new Date)[u]()/1e3),S.p=o||"UA-XXXXX-X",S.ab=P[p].referrer,S.oa=n,S.d=n,S.F=!1,S.O=n,S.e=n,S.bb=n,S.pa=n,S.a=n,S.k=n,q.o=a?Q(a):n,S.eb=!1,S.mc=function(){return K()^2147483647&S.O.cc()},S.lc=function(){return q.b&&""!=q.b&&"none"!=q.b?(d(),q.Ua?Y(q.b):1):(q.b="",1)},S.kc=function(t,e){if(B(t))t="-";else{e+=q.f&&"/"!=q.f?q.f:"";var n=t[c](e),t=n>=0&&8>=n?"0":"["==t[l](0)&&"]"==t[l](t[h]-1)?"-":t}return t},S.na=function(t){var e="";e+=q.ka?S.O.dc():"",e+=q.la&&!B(P[p].title)?"&utmdt="+Q(P[p].title):"";var n;return n=P.Ya(!0),n.hid||(n.hid=K()),n=n.hid,e+="&utmhid="+n+"&utmr="+Q(s(S.oa))+"&utmp="+Q(S.pc(t))},S.pc=function(e){var i=P[p][m];return e&&t(13),e=n!=e&&""!=e?Q(e,!0):Q(i.pathname+i.search,!0)},S.uc=function(t){if(S.D()){var e="";S.e!=n&&S.e.C()[h]>0&&(e+="&utme="+Q(S.e.C())),e+=S.na(t),N.A(e,S.p,S.a)}},S.jc=function(){var t=new ie(q);return t.Z(S.a)?t.Tb():n},S.cb=F("_getLinkerUrl",52,function(t,e){var n=t[g]("#"),i=t,s=S.jc();return s&&(e&&1>=n[h]?i+="#"+s:(!e||1>=n[h])&&(1>=n[h]?i+=(Z(t,"?")?E:"?")+s:i=n[0]+(Z(t,"?")?E:"?")+s+"#"+n[1])),i}),S.nc=function(){var t,e,i=S.m,r=S.k,o=r.g(),a=S.a+"",l=P.Ya(),u=Z(o,D+a+"."),d=Z(o,j+a),h=Z(o,A+a),v=[],x="",w=!1,o=B(o)?"":o;if(q.w&&!S.eb){t=P[p][m]&&P[p][m].hash?P[p][m][y][b](P[p][m][y][c]("#")):"",q.U&&!B(t)&&(x=t+E),x+=P[p][m].search,!B(x)&&Z(x,D)&&(r.Sb(x),r.Ba()||r.Qb(),e=r.ba(),S.eb=!0),t=r.ea;var k=r.Pa,T=r.Sa;B(t())||(k(V(t())),Z(t(),";")||T()),t=r.da,k=r.X,T=r.Y,B(t())||(k(t()),Z(t(),";")||T())}B(e)?u?(e=!d||!h)?(e=C(o,";",s(i)),S.F=!0):(e=X(o,D+a+".",";"),v=X(o,j+a,";")[g](".")):(e=[a,S.mc(),i,i,i,1][_]("."),w=S.F=!0):B(r.z())||B(r.ca())?(e=C(x,E,s(i)),S.F=!0):(v=r.z()[g]("."),a=v[0]),e=e[g]("."),P[f]&&l&&l.dh==a&&!q.o&&(e[4]=l.sid?l.sid:e[4],w&&(e[3]=l.sid?l.sid:e[4],l.vid&&(i=l.vid[g]("."),e[1]=i[0],e[2]=i[1]))),r.Na(e[_](".")),v[0]=a,v[1]=v[1]?v[1]:0,v[2]=n!=v[2]?v[2]:q.Wb,v[3]=v[3]?v[3]:e[4],r.$(v[_](".")),r.Oa(a),B(r.Rb())||r.fa(r.K()),r.Qa(),r.aa(),r.Ra()},S.oc=function(){N=new ae(q)},S.getName=F("_getName",58,function(){return S.n}),S.c=F("_initData",2,function(){var t;$||(S.O||(S.O=new ce(q.ma)),S.a=S.lc(),S.k=new ie(q),S.e=new fe,L=new de(q,s(S.a),S.k,S.e),S.oc()),T()&&($||(S.oa=S.kc(S.ab,P[p].domain),t=new ue(s(S.a),S.oa,S.m,q)),S.nc(t),L.$b()),$||(T()&&t.Pb(S.k,S.F),S.bb=new fe,ge.load(q,S.k),$=!0)}),S.Xa=F("_visitCode",54,function(){S.c();var t=X(S.k.g(),D+S.a+".",";"),t=t[g](".");return t[h]<4?"":t[1]}),S.qd=F("_cookiePathCopy",30,function(t){S.c(),S.k&&S.k.Ub(S.a,t)}),S.D=function(){return S.Xa()%1e4<100*q.L},S.re=F("_trackPageview",1,function(t){T()&&(S.c(),S.uc(t),S.F=!1)}),S.se=F("_trackTrans",18,function(){var t,e,n,i=S.a,s=[];if(S.c(),S.d&&S.D()){for(t=0;t<S.d.N[h];t++)for(e=S.d.N[t],G(s,e.ha()),n=0;n<e.M[h];n++)G(s,e.M[n].ha());for(t=0;t<s[h];t++)N.A(s[t],S.p,i,!0)}}),S.me=F("_setTrans",20,function(){var t,i,s,r;if(t=P[p].getElementById?P[p].getElementById("utmtrans"):P[p].utmform&&P[p].utmform.utmtrans?P[p].utmform.utmtrans:n,S.c(),t&&t.value)for(S.d=new le,r=t.value[g]("UTM:"),q.u=q.u&&""!=q.u?q.u:"|",t=0;t<r[h];t++){for(r[t]=e(r[t]),i=r[t][g](q.u),s=0;s<i[h];s++)i[s]=e(i[s]);"T"==i[0]?S.$a(i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]):"I"==i[0]&&S.ic(i[1],i[2],i[3],i[4],i[5],i[6])}}),S.$a=F("_addTrans",21,function(t,e,n,i,s,r,o,a){return S.d=S.d?S.d:new le,S.d.Xb(t,e,n,i,s,r,o,a)}),S.ic=F("_addItem",19,function(t,e,n,i,s,r){var o;S.d=S.d?S.d:new le,(o=S.d.Va(t))||(o=S.$a(t,"","","","","","","")),o.Vb(e,n,i,s,r)}),S.oe=F("_setVar",22,function(t){t&&""!=t&&w()&&(S.c(),L.bc(t),S.D()&&N.A("&utmt=var",S.p,S.a))}),S.Yd=F("_setCustomVar",10,function(t,e,n,i){return S.c(),L.ac(t,e,n,i)}),S.td=F("_deleteCustomVar",35,function(t){S.c(),L.Yb(t)}),S.Cd=F("_getVisitorCustomVar",50,function(t){return S.c(),L.Zb(t)}),S.fe=F("_setMaxCustomVariables",71,function(t){q.Ta=t}),S.link=F("_link",101,function(t,e){q.w&&t&&(S.c(),P.ec(S.cb(t,e)))}),S.Fd=F("_linkByPost",102,function(t,e){q.w&&t&&t.action&&(S.c(),t.action=S.cb(t.action,e))}),S.pe=F("_setXKey",83,function(t,e,n){S.e.j(t,e,n)}),S.qe=F("_setXValue",84,function(t,e,n){S.e.ja(t,e,n)}),S.Dd=F("_getXKey",76,function(t,e){return S.e.fc(t,e)}),S.Ed=F("_getXValue",77,function(t,e){return S.e.gc(t,e)}),S.od=F("_clearXKey",72,function(t){S.e.t(t)}),S.pd=F("_clearXValue",73,function(t){S.e.ia(t)}),S.sd=F("_createXObj",75,function(){return S.c(),new fe}),S.qc=F("_sendXEvent",78,function(t){var e="";S.c(),S.D()&&(e+="&utmt=event&utme="+Q(S.e.hc(t))+S.na(),N.A(e,S.p,S.a,!1,!0))}),S.rd=F("_createEventTracker",74,function(t){return S.c(),new he(t,S)}),S.Za=F("_trackEvent",4,function(t,e,i,s){S.c();var r=S.bb;return n!=t&&n!=e&&""!=t&&""!=e?(r.t(5),r.ia(5),(t=r.j(5,1,t)&&r.j(5,2,e)&&(n==i||r.j(5,3,i))&&(n==s||r.ja(5,1,s)))&&S.qc(r)):t=!1,t}),S.Wa=F("_trackPageLoadTime",100,function(){return S.c(),S.pa||(S.pa=new pe(S,N)),S.pa.Wa()}),S.wd=function(){return q},S.ae=F("_setDomainName",6,function(t){q.b=t}),S.kd=F("_addOrganic",14,function(t,e,n){q.J.splice(n?0:q.J[h],0,new te(t,e))}),S.nd=F("_clearOrganic",70,function(){q.J=[]}),S.hd=F("_addIgnoredOrganic",15,function(t){G(q.V,t)}),S.ld=F("_clearIgnoredOrganic",97,function(){q.V=[]}),S.jd=F("_addIgnoredRef",31,function(t){G(q.W,t)}),S.md=F("_clearIgnoredRef",32,function(){q.W=[]}),S.Id=F("_setAllowHash",8,function(t){q.Ua=t?1:0}),S.Td=F("_setCampaignTrack",36,function(t){q.Ka=t?1:0}),S.Ud=F("_setClientInfo",66,function(t){q.ka=t?1:0}),S.vd=F("_getClientInfo",53,function(){return q.ka}),S.Vd=F("_setCookiePath",9,function(t){q.f=t}),S.ne=F("_setTransactionDelim",82,function(t){q.u=t}),S.Xd=F("_setCookieTimeout",25,function(t){S.rc(1e3*t)}),S.rc=F("_setCampaignCookieTimeout",29,function(t){q.La=t}),S.Zd=F("_setDetectFlash",61,function(t){q.ma=t?1:0}),S.xd=F("_getDetectFlash",65,function(){return q.ma}),S.$d=F("_setDetectTitle",62,function(t){q.la=t?1:0}),S.yd=F("_getDetectTitle",56,function(){return q.la}),S.ce=F("_setLocalGifPath",46,function(t){q.ga=t}),S.zd=F("_getLocalGifPath",57,function(){return q.ga}),S.ee=F("_setLocalServerMode",92,function(){q.B=0}),S.ie=F("_setRemoteServerMode",63,function(){q.B=1}),S.de=F("_setLocalRemoteServerMode",47,function(){q.B=2}),S.Ad=F("_getServiceMode",59,function(){return q.B}),S.je=F("_setSampleRate",45,function(t){q.L=t}),S.ke=F("_setSessionTimeout",27,function(t){S.sc(1e3*t)}),S.sc=F("_setSessionCookieTimeout",26,function(t){q.Ma=t}),S.Jd=F("_setAllowLinker",11,function(t){q.w=t?1:0}),S.Hd=F("_setAllowAnchor",7,function(t){q.U=t?1:0}),S.Qd=F("_setCampNameKey",41,function(t){q.Ca=t}),S.Md=F("_setCampContentKey",38,function(t){q.Da=t}),S.Nd=F("_setCampIdKey",39,function(t){q.Ea=t}),S.Od=F("_setCampMediumKey",40,function(t){q.Fa=t}),S.Pd=F("_setCampNOKey",42,function(t){q.Ga=t}),S.Rd=F("_setCampSourceKey",43,function(t){q.Ha=t}),S.Sd=F("_setCampTermKey",44,function(t){q.Ia=t}),S.Ld=F("_setCampCIdKey",37,function(t){q.Ja=t}),S.ud=F("_getAccount",64,function(){return S.p}),S.Gd=F("_setAccount",3,function(t){S.p=t}),S.ge=F("_setNamespace",48,function(t){q.o=t?Q(t):n}),S.Bd=F("_getVersion",60,function(){return k}),S.Kd=F("_setAutoTrackOutbound",79,J),S.le=F("_setTrackOutboundSubdomains",81,J),S.be=F("_setHrefExamineLimit",80,J),S.he=F("_setReferrerOverride",49,function(t){S.ab=t}),S.Wd=F("_setCookiePersistence",24,function(t){S.tc(t)}),S.tc=F("_setVisitorCookieTimeout",28,function(t){q.s=t})},ve=function(){var e=this,i=z(e);e.Ab=!1,e.Ib={},e.bd=0,e._gasoDomain=n,e._gasoCPath=n,e.ve=i("_getTracker",0,function(t,i){return e.za(t,n,i)}),e.za=i("_createTracker",55,function(e,i,s){return i&&t(23),s&&t(67),i==n&&(i="~"+be.bd++),be.Ib[i]=new me(i,e,s)}),e.Hb=i("_getTrackerByName",51,function(t){return t=t||"",be.Ib[t]||be.za(n,t)}),e.pb=function(){var t=P.Vc();return t&&t[S]&&t[S]()},e.ue=i("_anonymizeIp",16,function(){e.Ab=!0})},ye=function(){var e=this,n=z(e);e.xe=n("_createAsyncTracker",33,function(t,e){return be.za(t,e||"")}),e.ye=n("_getAsyncTracker",34,function(t){return be.Hb(t)}),e.push=function(){t(5);for(var e=arguments,n=0,i=0;i<e[h];i++)try{if("function"==typeof e[i])e[i]();else{var s="",r=e[i][0],o=r.lastIndexOf(".");o>0&&(s=r[b](0,o),r=r[b](o+1));var a=s==w?be:s==C?xe:be.Hb(s);a[r].apply(a,e[i].slice(1))}}catch(l){n++}return n}},be=new ve,_e=P[f][w];_e&&"function"==typeof _e._getTracker?be=_e:P[f][w]=be;var xe=new ye,we=P[f][C],Ce=!1;(!we||"function"!=typeof we[o]||(Ce=W(we)))&&(P[f][C]=xe,Ce&&xe[o].apply(xe,we))}();