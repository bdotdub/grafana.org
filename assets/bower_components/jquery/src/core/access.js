define(["../core"],function(e){var t=e.access=function(t,n,r,i,o,s,a){var u=0,l=t.length,c=null==r;if("object"===e.type(r)){o=!0;for(u in r)e.access(t,n,u,r[u],!0,s,a)}else if(void 0!==i&&(o=!0,e.isFunction(i)||(a=!0),c&&(a?(n.call(t,i),n=null):(c=n,n=function(t,n,r){return c.call(e(t),r)})),n))for(;l>u;u++)n(t[u],r,a?i:i.call(t[u],u,n(t[u],r)));return o?t:c?n.call(t):l?n(t[0],r):s};return t});