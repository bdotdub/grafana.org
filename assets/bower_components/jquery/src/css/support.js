define(["../core","../var/support"],function(t,e){return function(){function n(){l.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",o.appendChild(a);var t=window.getComputedStyle(l,null);i="1%"!==t.top,s="4px"===t.width,o.removeChild(a)}var i,s,r="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",o=document.documentElement,a=document.createElement("div"),l=document.createElement("div");l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===l.style.backgroundClip,a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(l),window.getComputedStyle&&t.extend(e,{pixelPosition:function(){return n(),i},boxSizingReliable:function(){return null==s&&n(),s},reliableMarginRight:function(){var t,e=l.appendChild(document.createElement("div"));return e.style.cssText=l.style.cssText=r,e.style.marginRight=e.style.width="0",l.style.width="1px",o.appendChild(a),t=!parseFloat(window.getComputedStyle(e,null).marginRight),o.removeChild(a),l.innerHTML="",t}})}(),e});