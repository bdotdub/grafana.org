!function(t,e){"use strict";Foundation.libs.slider={name:"slider",version:"5.4.7",settings:{start:0,end:100,step:1,initial:null,display_selector:"",vertical:!1,on_change:function(){}},cache:{},init:function(t,e,n){Foundation.inherit(this,"throttle"),this.bindings(e,n),this.reflow()},events:function(){var n=this;t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(e){n.cache.active||(e.preventDefault(),n.set_active_slider(t(e.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(i){if(n.cache.active)if(i.preventDefault(),t.data(n.cache.active[0],"settings").vertical){var r=0;i.pageY||(r=e.scrollY),n.calculate_position(n.cache.active,(i.pageY||i.originalEvent.clientY||i.originalEvent.touches[0].clientY||i.currentPoint.y)+r)}else n.calculate_position(n.cache.active,i.pageX||i.originalEvent.clientX||i.originalEvent.touches[0].clientX||i.currentPoint.x)}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(){n.remove_active_slider()}).on("change.fndtn.slider",function(){n.settings.on_change()}),n.S(e).on("resize.fndtn.slider",n.throttle(function(){n.reflow()},300))},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(e,n){var i=this,r=t.data(e[0],"settings"),o=(t.data(e[0],"handle_l"),t.data(e[0],"handle_o"),t.data(e[0],"bar_l")),s=t.data(e[0],"bar_o");requestAnimationFrame(function(){var t;t=Foundation.rtl&&!r.vertical?i.limit_to((s+o-n)/o,0,1):i.limit_to((n-s)/o,0,1),t=r.vertical?1-t:t;var a=i.normalized_value(t,r.start,r.end,r.step);i.set_ui(e,a)})},set_ui:function(e,n){var i=t.data(e[0],"settings"),r=t.data(e[0],"handle_l"),o=t.data(e[0],"bar_l"),s=this.normalized_percentage(n,i.start,i.end),a=s*(o-r)-1,l=100*s;Foundation.rtl&&!i.vertical&&(a=-a),a=i.vertical?-a+o-r+1:a,this.set_translate(e,a,i.vertical),i.vertical?e.siblings(".range-slider-active-segment").css("height",l+"%"):e.siblings(".range-slider-active-segment").css("width",l+"%"),e.parent().attr(this.attr_name(),n).trigger("change").trigger("change.fndtn.slider"),e.parent().children("input[type=hidden]").val(n),e[0].hasAttribute("aria-valuemin")||e.attr({"aria-valuemin":i.start,"aria-valuemax":i.end}),e.attr("aria-valuenow",n),""!=i.display_selector&&t(i.display_selector).each(function(){this.hasOwnProperty("value")?t(this).val(n):t(this).text(n)})},normalized_percentage:function(t,e,n){return Math.min(1,(t-e)/(n-e))},normalized_value:function(t,e,n,i){var r=n-e,o=t*r,s=(o-o%i)/i,a=o%i,l=a>=.5*i?i:0;return s*i+l+e},set_translate:function(e,n,i){i?t(e).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):t(e).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(t,e,n){return Math.min(Math.max(t,e),n)},initialize_settings:function(e){var n=t.extend({},this.settings,this.data_options(t(e).parent()));n.vertical?(t.data(e,"bar_o",t(e).parent().offset().top),t.data(e,"bar_l",t(e).parent().outerHeight()),t.data(e,"handle_o",t(e).offset().top),t.data(e,"handle_l",t(e).outerHeight())):(t.data(e,"bar_o",t(e).parent().offset().left),t.data(e,"bar_l",t(e).parent().outerWidth()),t.data(e,"handle_o",t(e).offset().left),t.data(e,"handle_l",t(e).outerWidth())),t.data(e,"bar",t(e).parent()),t.data(e,"settings",n)},set_initial_position:function(e){var n=t.data(e.children(".range-slider-handle")[0],"settings"),i=n.initial?n.initial:Math.floor(.5*(n.end-n.start)/n.step)*n.step+n.start,r=e.children(".range-slider-handle");this.set_ui(r,i)},set_value:function(e){var n=this;t("["+n.attr_name()+"]",this.scope).each(function(){t(this).attr(n.attr_name(),e)}),t(this.scope).attr(n.attr_name())&&t(this.scope).attr(n.attr_name(),e),n.reflow()},reflow:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var n=t(this).children(".range-slider-handle")[0],i=t(this).attr(e.attr_name());e.initialize_settings(n),i?e.set_ui(t(n),parseFloat(i)):e.set_initial_position(t(this))})}}}(jQuery,window,window.document);