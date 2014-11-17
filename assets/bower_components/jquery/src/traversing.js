define(["./core","./var/indexOf","./traversing/var/rneedsContext","./core/init","./traversing/findFilter","./selector"],function(e,t,n){function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}var r=/^(?:parents|prev(?:Until|All))/,s={children:!0,contents:!0,next:!0,prev:!0};return e.extend({dir:function(t,n,i){for(var r=[],s=void 0!==i;(t=t[n])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&e(t).is(i))break;r.push(t)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),e.fn.extend({has:function(t){var n=e(t,this),i=n.length;return this.filter(function(){for(var t=0;i>t;t++)if(e.contains(this,n[t]))return!0})},closest:function(t,i){for(var r,s=0,o=this.length,c=[],u=n.test(t)||"string"!=typeof t?e(t,i||this.context):0;o>s;s++)for(r=this[s];r&&r!==i;r=r.parentNode)if(r.nodeType<11&&(u?u.index(r)>-1:1===r.nodeType&&e.find.matchesSelector(r,t))){c.push(r);break}return this.pushStack(c.length>1?e.unique(c):c)},index:function(n){return n?"string"==typeof n?t.call(e(n),this[0]):t.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,n){return this.pushStack(e.unique(e.merge(this.get(),e(t,n))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),e.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(t){return e.dir(t,"parentNode")},parentsUntil:function(t,n,i){return e.dir(t,"parentNode",i)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(t){return e.dir(t,"nextSibling")},prevAll:function(t){return e.dir(t,"previousSibling")},nextUntil:function(t,n,i){return e.dir(t,"nextSibling",i)},prevUntil:function(t,n,i){return e.dir(t,"previousSibling",i)},siblings:function(t){return e.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return e.sibling(t.firstChild)},contents:function(t){return t.contentDocument||e.merge([],t.childNodes)}},function(t,n){e.fn[t]=function(i,o){var c=e.map(this,n,i);return"Until"!==t.slice(-5)&&(o=i),o&&"string"==typeof o&&(c=e.filter(o,c)),this.length>1&&(s[t]||e.unique(c),r.test(t)&&c.reverse()),this.pushStack(c)}}),e});