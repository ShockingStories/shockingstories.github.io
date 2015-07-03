function randomRGB(){return Math.floor(256*Math.random())}document.addEventListener("DOMContentLoaded",function(t){{var e=[100,90,80,70,60,50,40,30,20,10],n=d3.select("body").append("svg").attr("width",500).attr("height",500),r=n.selectAll("circle").data(e).enter().append("circle");r.attr("cx",150).attr("cy",150).attr("r",function(t){return t}).style("fill",function(t){return"rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")"})}}),function(t,e){"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?(process.browser&&require("./d3.slider.css"),module.exports=e(require("d3"))):t.d3.slider=e(t.d3)}(this,function(t){return function(){"use strict";function e(e){e.each(function(){function e(e){"boolean"==typeof p&&(p=t.svg.axis().ticks(Math.round(u/100)).tickFormat(w).orient("horizontal"===v?"bottom":"right")),s=l.ticks?l.copy().range([0,u]):l.copy().rangePoints([0,u],.5),p.scale(s);var n=e.append("svg").classed("d3-slider-axis d3-slider-axis-"+p.orient(),!0).on("click",F),r=n.append("g");"horizontal"===v?(n.style("margin-left",-y+"px"),n.attr({width:u+2*y,height:y}),"top"===p.orient()?(n.style("top",-y+"px"),r.attr("transform","translate("+y+","+y+")")):r.attr("transform","translate("+y+",0)")):(n.style("top",-y+"px"),n.attr({width:y,height:u+2*y}),"left"===p.orient()?(n.style("left",-y+"px"),r.attr("transform","translate("+y+","+y+")")):r.attr("transform","translate(0,"+y+")")),r.call(p)}function g(){if("array"!=i(o)){var e=Math.max(0,Math.min(u,t.event.offsetX||t.event.layerX));n(l.invert?r(l.invert(e/u)):a(e/u))}}function m(){if("array"!=i(o)){var e=u-Math.max(0,Math.min(u,t.event.offsetY||t.event.layerY));n(l.invert?r(l.invert(e/u)):a(e/u))}}function b(){"handle-one"===t.event.sourceEvent.target.id?x=1:"handle-two"==t.event.sourceEvent.target.id&&(x=2);var e=Math.max(0,Math.min(u,t.event.x));n(l.invert?r(l.invert(e/u)):a(e/u))}function z(){"handle-one"===t.event.sourceEvent.target.id?x=1:"handle-two"==t.event.sourceEvent.target.id&&(x=2);var e=u-Math.max(0,Math.min(u,t.event.y));n(l.invert?r(l.invert(e/u)):a(e/u))}function F(){t.event.stopPropagation()}l||(l=t.scale.linear().domain([f,h])),o=o||l.domain()[0];var B=t.select(this).classed("d3-slider d3-slider-"+v,!0),G=t.behavior.drag();if(G.on("dragend",function(){k.slideend(t.event,o)}),"array"==i(o)&&2==o.length?(d=B.append("a").classed("d3-slider-handle",!0).attr("xlink:href","#").attr("id","handle-one").on("click",F).call(G),E=B.append("a").classed("d3-slider-handle",!0).attr("id","handle-two").attr("xlink:href","#").on("click",F).call(G)):d=B.append("a").classed("d3-slider-handle",!0).attr("xlink:href","#").attr("id","handle-one").on("click",F).call(G),"horizontal"===v){if(B.on("click",g),"array"==i(o)&&2==o.length){c=t.select(this).append("div").classed("d3-slider-range",!0),d.style("left",M(l(o[0]))),c.style("left",M(l(o[0]))),G.on("drag",b);var R=100-parseFloat(M(l(o[1])));E.style("left",M(l(o[1]))),c.style("right",R+"%"),G.on("drag",b)}else d.style("left",M(l(o))),G.on("drag",b);u=parseInt(B.style("width"),10)}else{if(B.on("click",m),G.on("drag",z),"array"==i(o)&&2==o.length){c=t.select(this).append("div").classed("d3-slider-range-vertical",!0),d.style("bottom",M(l(o[0]))),c.style("bottom",M(l(o[0]))),G.on("drag",z);var L=100-parseFloat(M(l(o[1])));E.style("bottom",M(l(o[1]))),c.style("top",L+"%"),G.on("drag",z)}else d.style("bottom",M(l(o))),G.on("drag",z);u=parseInt(B.style("height"),10)}p&&e(B)})}function n(e){var n="array"==i(o)&&2==o.length?o[x-1]:o,a=M(l(r(n))),s=M(l(r(e))),u="horizontal"===v?"left":"bottom";if(a!==s){if("array"==i(o)&&2==o.length?(o[x-1]=e,t.event&&k.slide(t.event,o)):t.event&&k.slide(t.event.sourceEvent||t.event,o=e),o[0]>=o[1])return;if(1===x)"array"==i(o)&&2==o.length&&("left"===u?c.style("left",s):c.style("bottom",s)),m?d.transition().styleTween(u,function(){return t.interpolate(a,s)}).duration("number"==typeof m?m:250):d.style(u,s);else{var f=100-parseFloat(s),h=100-parseFloat(s);"left"===u?c.style("right",f+"%"):c.style("top",h+"%"),m?E.transition().styleTween(u,function(){return t.interpolate(a,s)}).duration("number"==typeof m?m:250):E.style(u,s)}}}function r(t){if(t===l.domain()[0]||t===l.domain()[1])return t;var e=t;if(b)e=a(l(t));else{var n=(t-l.domain()[0])%g;e=t-n,2*Math.abs(n)>=g&&(e+=n>0?g:-g)}return e}function a(t){var e=l.ticks?l.ticks():l.domain(),n=e.map(function(e){return t-l(e)}),r=-1,a=0,i=l.ticks?l.range()[1]:l.rangeExtent()[1];do r++,Math.abs(n[r])<i&&(i=Math.abs(n[r]),a=r);while(n[r]>0&&r<n.length-1);return e[a]}function i(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}var o,l,s,d,c,u,f=0,h=100,g=.01,m=!0,v="horizontal",p=!1,y=50,x=1,b=!1,k=t.dispatch("slide","slideend"),M=t.format(".2%"),w=t.format(".0"),E=null;return e.min=function(t){return arguments.length?(f=t,e):f},e.max=function(t){return arguments.length?(h=t,e):h},e.step=function(t){return arguments.length?(g=t,e):g},e.animate=function(t){return arguments.length?(m=t,e):m},e.orientation=function(t){return arguments.length?(v=t,e):v},e.axis=function(t){return arguments.length?(p=t,e):p},e.margin=function(t){return arguments.length?(y=t,e):y},e.value=function(t){return arguments.length?(o&&n(r(t)),o=t,e):o},e.snap=function(t){return arguments.length?(b=t,e):b},e.scale=function(t){return arguments.length?(l=t,e):l},t.rebind(e,k,"on"),e}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImxpYi9kMy5zbGlkZXIuanMiXSwibmFtZXMiOlsicmFuZG9tUkdCIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjaXJjbGVSYWRpaSIsInN2Z0NvbnRhaW5lciIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImNpcmNsZXMiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJkIiwic3R5bGUiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJwcm9jZXNzIiwiYnJvd3NlciIsInJlcXVpcmUiLCJtb2R1bGUiLCJzbGlkZXIiLCJ0aGlzIiwic2VsZWN0aW9uIiwiZWFjaCIsImNyZWF0ZUF4aXMiLCJkb20iLCJheGlzIiwic3ZnIiwidGlja3MiLCJyb3VuZCIsInNsaWRlckxlbmd0aCIsInRpY2tGb3JtYXQiLCJvcmllbnQiLCJvcmllbnRhdGlvbiIsImF4aXNTY2FsZSIsInNjYWxlIiwiY29weSIsInJhbmdlIiwicmFuZ2VQb2ludHMiLCJjbGFzc2VkIiwib24iLCJzdG9wUHJvcGFnYXRpb24iLCJnIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJjYWxsIiwib25DbGlja0hvcml6b250YWwiLCJ0b1R5cGUiLCJ2YWx1ZSIsInBvcyIsIm1heCIsIm1pbiIsIm9mZnNldFgiLCJsYXllclgiLCJtb3ZlSGFuZGxlIiwiaW52ZXJ0Iiwic3RlcFZhbHVlIiwibmVhcmVzdFRpY2siLCJvbkNsaWNrVmVydGljYWwiLCJvZmZzZXRZIiwibGF5ZXJZIiwib25EcmFnSG9yaXpvbnRhbCIsInNvdXJjZUV2ZW50IiwidGFyZ2V0IiwiaWQiLCJhY3RpdmUiLCJ4Iiwib25EcmFnVmVydGljYWwiLCJ5IiwibGluZWFyIiwiZG9tYWluIiwiZGl2IiwiZHJhZyIsImJlaGF2aW9yIiwiZGlzcGF0Y2giLCJzbGlkZWVuZCIsImxlbmd0aCIsImhhbmRsZTEiLCJoYW5kbGUyIiwiZGl2UmFuZ2UiLCJmb3JtYXRQZXJjZW50IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwidG9wIiwibmV3VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJvbGRQb3MiLCJuZXdQb3MiLCJwb3NpdGlvbiIsInNsaWRlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdHlsZVR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJkdXJhdGlvbiIsInZhbCIsImFsaWduVmFsdWUiLCJzbmFwIiwidmFsTW9kU3RlcCIsInN0ZXAiLCJhYnMiLCJkaXN0IiwibWFwIiwiaSIsImluZGV4IiwiciIsInJhbmdlRXh0ZW50IiwidiIsInRvU3RyaW5nIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImZvcm1hdCIsIl8iLCJhcmd1bWVudHMiLCJyZWJpbmQiXSwibWFwcGluZ3MiOiJBQW1CQSxRQUFBQSxhQUNBLE1BQUFDLE1BQUFDLE1BQUEsSUFBQUQsS0FBQUUsVUFwQkFDLFNBQUFDLGlCQUFBLG1CQUFBLFNBQUFDLEdBQ0EsQ0FBQSxHQUFBQyxJQUFBLElBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLElBQ0FDLEVBQUFDLEdBQUFDLE9BQUEsUUFBQUMsT0FBQSxPQUNBQyxLQUFBLFFBQUEsS0FDQUEsS0FBQSxTQUFBLEtBRUFDLEVBQUFMLEVBQUFNLFVBQUEsVUFDQUMsS0FBQVIsR0FDQVMsUUFDQUwsT0FBQSxTQUNBRSxHQUNBRCxLQUFBLEtBQUEsS0FDQUEsS0FBQSxLQUFBLEtBQ0FBLEtBQUEsSUFBQSxTQUFBSyxHQUFBLE1BQUFBLEtBQ0FDLE1BQUEsT0FBQSxTQUFBRCxHQUNBLE1BQUEsT0FBQWpCLFlBQUEsSUFBQUEsWUFBQSxJQUFBQSxZQUFBLFNDVEEsU0FBQW1CLEVBQUFDLEdBQ0Esa0JBQUFDLFNBQUFBLE9BQUFDLElBRUFELFFBQUEsTUFBQUQsR0FDQSxnQkFBQUcsVUFDQUMsUUFBQUMsU0FFQUMsUUFBQSxtQkFLQUMsT0FBQUosUUFBQUgsRUFBQU0sUUFBQSxRQUdBUCxF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RUFBQStCLElBQUEsU0FBQThELEdBQ0EsTUFBQUMsV0FBQXJDLFFBQ0ExQixFQUFBOEQsRUFDQTdGLEdBRkErQixHQUtBL0IsRUFBQWdGLEtBQUEsU0FBQWEsR0FDQSxNQUFBQyxXQUFBckMsUUFDQXVCLEVBQUFhLEVBQ0E3RixHQUZBZ0YsR0FLQWhGLEVBQUF1RSxRQUFBLFNBQUFzQixHQUNBLE1BQUFDLFdBQUFyQyxRQUNBYyxFQUFBc0IsRUFDQTdGLEdBRkF1RSxHQUtBdkUsRUFBQWEsWUFBQSxTQUFBZ0YsR0FDQSxNQUFBQyxXQUFBckMsUUFDQTVDLEVBQUFnRixFQUNBN0YsR0FGQWEsR0FLQWIsRUFBQU0sS0FBQSxTQUFBdUYsR0FDQSxNQUFBQyxXQUFBckMsUUFDQW5ELEVBQUF1RixFQUNBN0YsR0FGQU0sR0FLQU4sRUFBQXVCLE9BQUEsU0FBQXNFLEdBQ0EsTUFBQUMsV0FBQXJDLFFBQ0FsQyxFQUFBc0UsRUFDQTdGLEdBRkF1QixHQUtBdkIsRUFBQTZCLE1BQUEsU0FBQWdFLEdBQ0EsTUFBQUMsV0FBQXJDLFFBQ0E1QixHQUNBTSxFQUFBRSxFQUFBd0QsSUFFQWhFLEVBQUFnRSxFQUNBN0YsR0FMQTZCLEdBUUE3QixFQUFBOEUsS0FBQSxTQUFBZSxHQUNBLE1BQUFDLFdBQUFyQyxRQUNBcUIsRUFBQWUsRUFDQTdGLEdBRkE4RSxHQUtBOUUsRUFBQWUsTUFBQSxTQUFBOEUsR0FDQSxNQUFBQyxXQUFBckMsUUFDQTFDLEVBQUE4RSxFQUNBN0YsR0FGQWUsR0FLQWxDLEVBQUFrSCxPQUFBL0YsRUFBQXVELEVBQUEsTUFFQXZEIiwiZmlsZSI6ImpzL2FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBjaXJjbGVSYWRpaSA9IFsxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTBdO1xuICB2YXIgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIDUwMClcbiAgICAuYXR0cihcImhlaWdodFwiLCA1MDApO1xuXG4gIHZhciBjaXJjbGVzID0gc3ZnQ29udGFpbmVyLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgIC5kYXRhKGNpcmNsZVJhZGlpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImNpcmNsZVwiKTtcbiAgdmFyIGNpcmNsZUF0dHJpYnV0ZXMgPSBjaXJjbGVzXG4gICAgLmF0dHIoXCJjeFwiLCAxNTApXG4gICAgLmF0dHIoXCJjeVwiLCAxNTApXG4gICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBcInJnYihcIiArIHJhbmRvbVJHQigpICsgXCIsXCIgKyByYW5kb21SR0IoKSArIFwiLFwiICsgcmFuZG9tUkdCKCkgKyBcIilcIjtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiByYW5kb21SR0IgKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbn1cbiIsIi8qXG4gICAgRDMuanMgU2xpZGVyXG4gICAgSW5zcGlyZWQgYnkgalF1ZXJ5IFVJIFNsaWRlclxuICAgIENvcHlyaWdodCAoYykgMjAxMywgQmpvcm4gU2FuZHZpayAtIGh0dHA6Ly9ibG9nLnRoZW1hdGljbWFwcGluZy5vcmdcbiAgICBCU0QgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbJ2QzJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8vIEJyb3dzZXJpZnkuIEltcG9ydCBjc3MgdG9vIHVzaW5nIGNzc2lmeS5cbiAgICAgIHJlcXVpcmUoJy4vZDMuc2xpZGVyLmNzcycpO1xuICAgIH1cbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2QzJykpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgcm9vdC5kMy5zbGlkZXIgPSBmYWN0b3J5KHJvb3QuZDMpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uIChkMykge1xucmV0dXJuIGZ1bmN0aW9uIG1vZHVsZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gUHVibGljIHZhcmlhYmxlcyB3aWR0aCBkZWZhdWx0IHNldHRpbmdzXG4gIHZhciBtaW4gPSAwLFxuICAgICAgbWF4ID0gMTAwLFxuICAgICAgc3RlcCA9IDAuMDEsXG4gICAgICBhbmltYXRlID0gdHJ1ZSxcbiAgICAgIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIsXG4gICAgICBheGlzID0gZmFsc2UsXG4gICAgICBtYXJnaW4gPSA1MCxcbiAgICAgIHZhbHVlLFxuICAgICAgYWN0aXZlID0gMSxcbiAgICAgIHNuYXAgPSBmYWxzZSxcbiAgICAgIHNjYWxlO1xuXG4gIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gIHZhciBheGlzU2NhbGUsXG4gICAgICBkaXNwYXRjaCA9IGQzLmRpc3BhdGNoKFwic2xpZGVcIiwgXCJzbGlkZWVuZFwiKSxcbiAgICAgIGZvcm1hdFBlcmNlbnQgPSBkMy5mb3JtYXQoXCIuMiVcIiksXG4gICAgICB0aWNrRm9ybWF0ID0gZDMuZm9ybWF0KFwiLjBcIiksXG4gICAgICBoYW5kbGUxLFxuICAgICAgaGFuZGxlMiA9IG51bGwsXG4gICAgICBkaXZSYW5nZSxcbiAgICAgIHNsaWRlckxlbmd0aDtcblxuICBmdW5jdGlvbiBzbGlkZXIoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIENyZWF0ZSBzY2FsZSBpZiBub3QgZGVmaW5lZCBieSB1c2VyXG4gICAgICBpZiAoIXNjYWxlKSB7XG4gICAgICAgIHNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFttaW4sIG1heF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGFydCB2YWx1ZVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCBzY2FsZS5kb21haW4oKVswXTtcblxuICAgICAgLy8gRElWIGNvbnRhaW5lclxuICAgICAgdmFyIGRpdiA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZDMtc2xpZGVyIGQzLXNsaWRlci1cIiArIG9yaWVudGF0aW9uLCB0cnVlKTtcbiAgICAgIFxuICAgICAgdmFyIGRyYWcgPSBkMy5iZWhhdmlvci5kcmFnKCk7XG4gICAgICBkcmFnLm9uKCdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwYXRjaC5zbGlkZWVuZChkMy5ldmVudCwgdmFsdWUpO1xuICAgICAgfSlcblxuICAgICAgLy8gU2xpZGVyIGhhbmRsZVxuICAgICAgLy9pZiByYW5nZSBzbGlkZXIsIGNyZWF0ZSB0d29cbiAgICAgIC8vIHZhciBkaXZSYW5nZTtcblxuICAgICAgaWYgKHRvVHlwZSh2YWx1ZSkgPT0gXCJhcnJheVwiICYmIHZhbHVlLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIGhhbmRsZTEgPSBkaXYuYXBwZW5kKFwiYVwiKVxuICAgICAgICAgIC5jbGFzc2VkKFwiZDMtc2xpZGVyLWhhbmRsZVwiLCB0cnVlKVxuICAgICAgICAgIC5hdHRyKFwieGxpbms6aHJlZlwiLCBcIiNcIilcbiAgICAgICAgICAuYXR0cignaWQnLCBcImhhbmRsZS1vbmVcIilcbiAgICAgICAgICAub24oXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pXG4gICAgICAgICAgLmNhbGwoZHJhZyk7XG4gICAgICAgIGhhbmRsZTIgPSBkaXYuYXBwZW5kKFwiYVwiKVxuICAgICAgICAgIC5jbGFzc2VkKFwiZDMtc2xpZGVyLWhhbmRsZVwiLCB0cnVlKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIFwiaGFuZGxlLXR3b1wiKVxuICAgICAgICAgIC5hdHRyKFwieGxpbms6aHJlZlwiLCBcIiNcIilcbiAgICAgICAgICAub24oXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pXG4gICAgICAgICAgLmNhbGwoZHJhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGUxID0gZGl2LmFwcGVuZChcImFcIilcbiAgICAgICAgICAuY2xhc3NlZChcImQzLXNsaWRlci1oYW5kbGVcIiwgdHJ1ZSlcbiAgICAgICAgICAuYXR0cihcInhsaW5rOmhyZWZcIiwgXCIjXCIpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgXCJoYW5kbGUtb25lXCIpXG4gICAgICAgICAgLm9uKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKVxuICAgICAgICAgIC5jYWxsKGRyYWcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBIb3Jpem9udGFsIHNsaWRlclxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuXG4gICAgICAgIGRpdi5vbihcImNsaWNrXCIsIG9uQ2xpY2tIb3Jpem9udGFsKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0b1R5cGUodmFsdWUpID09IFwiYXJyYXlcIiAmJiB2YWx1ZS5sZW5ndGggPT0gMikge1xuICAgICAgICAgIGRpdlJhbmdlID0gZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgnZGl2JykuY2xhc3NlZChcImQzLXNsaWRlci1yYW5nZVwiLCB0cnVlKTtcblxuICAgICAgICAgIGhhbmRsZTEuc3R5bGUoXCJsZWZ0XCIsIGZvcm1hdFBlcmNlbnQoc2NhbGUodmFsdWVbIDAgXSkpKTtcbiAgICAgICAgICBkaXZSYW5nZS5zdHlsZShcImxlZnRcIiwgZm9ybWF0UGVyY2VudChzY2FsZSh2YWx1ZVsgMCBdKSkpO1xuICAgICAgICAgIGRyYWcub24oXCJkcmFnXCIsIG9uRHJhZ0hvcml6b250YWwpO1xuXG4gICAgICAgICAgdmFyIHdpZHRoID0gMTAwIC0gcGFyc2VGbG9hdChmb3JtYXRQZXJjZW50KHNjYWxlKHZhbHVlWyAxIF0pKSk7XG4gICAgICAgICAgaGFuZGxlMi5zdHlsZShcImxlZnRcIiwgZm9ybWF0UGVyY2VudChzY2FsZSh2YWx1ZVsgMSBdKSkpO1xuICAgICAgICAgIGRpdlJhbmdlLnN0eWxlKFwicmlnaHRcIiwgd2lkdGgrXCIlXCIpO1xuICAgICAgICAgIGRyYWcub24oXCJkcmFnXCIsIG9uRHJhZ0hvcml6b250YWwpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlMS5zdHlsZShcImxlZnRcIiwgZm9ybWF0UGVyY2VudChzY2FsZSh2YWx1ZSkpKTtcbiAgICAgICAgICBkcmFnLm9uKFwiZHJhZ1wiLCBvbkRyYWdIb3Jpem9udGFsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2xpZGVyTGVuZ3RoID0gcGFyc2VJbnQoZGl2LnN0eWxlKFwid2lkdGhcIiksIDEwKTtcblxuICAgICAgfSBlbHNlIHsgLy8gVmVydGljYWxcblxuICAgICAgICBkaXYub24oXCJjbGlja1wiLCBvbkNsaWNrVmVydGljYWwpO1xuICAgICAgICBkcmFnLm9uKFwiZHJhZ1wiLCBvbkRyYWdWZXJ0aWNhbCk7XG4gICAgICAgIGlmICh0b1R5cGUodmFsdWUpID09IFwiYXJyYXlcIiAmJiB2YWx1ZS5sZW5ndGggPT0gMikge1xuICAgICAgICAgIGRpdlJhbmdlID0gZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgnZGl2JykuY2xhc3NlZChcImQzLXNsaWRlci1yYW5nZS12ZXJ0aWNhbFwiLCB0cnVlKTtcblxuICAgICAgICAgIGhhbmRsZTEuc3R5bGUoXCJib3R0b21cIiwgZm9ybWF0UGVyY2VudChzY2FsZSh2YWx1ZVsgMCBdKSkpO1xuICAgICAgICAgIGRpdlJhbmdlLnN0eWxlKFwiYm90dG9tXCIsIGZvcm1hdFBlcmNlbnQoc2NhbGUodmFsdWVbIDAgXSkpKTtcbiAgICAgICAgICBkcmFnLm9uKFwiZHJhZ1wiLCBvbkRyYWdWZXJ0aWNhbCk7XG5cbiAgICAgICAgICB2YXIgdG9wID0gMTAwIC0gcGFyc2VGbG9hdChmb3JtYXRQZXJjZW50KHNjYWxlKHZhbHVlWyAxIF0pKSk7XG4gICAgICAgICAgaGFuZGxlMi5zdHlsZShcImJvdHRvbVwiLCBmb3JtYXRQZXJjZW50KHNjYWxlKHZhbHVlWyAxIF0pKSk7XG4gICAgICAgICAgZGl2UmFuZ2Uuc3R5bGUoXCJ0b3BcIiwgdG9wK1wiJVwiKTtcbiAgICAgICAgICBkcmFnLm9uKFwiZHJhZ1wiLCBvbkRyYWdWZXJ0aWNhbCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUxLnN0eWxlKFwiYm90dG9tXCIsIGZvcm1hdFBlcmNlbnQoc2NhbGUodmFsdWUpKSk7XG4gICAgICAgICAgZHJhZy5vbihcImRyYWdcIiwgb25EcmFnVmVydGljYWwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzbGlkZXJMZW5ndGggPSBwYXJzZUludChkaXYuc3R5bGUoXCJoZWlnaHRcIiksIDEwKTtcblxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoYXhpcykge1xuICAgICAgICBjcmVhdGVBeGlzKGRpdik7XG4gICAgICB9XG5cblxuICAgICAgZnVuY3Rpb24gY3JlYXRlQXhpcyhkb20pIHtcblxuICAgICAgICAvLyBDcmVhdGUgYXhpcyBpZiBub3QgZGVmaW5lZCBieSB1c2VyXG4gICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gXCJib29sZWFuXCIpIHtcblxuICAgICAgICAgIGF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgICAgICAgICAgIC50aWNrcyhNYXRoLnJvdW5kKHNsaWRlckxlbmd0aCAvIDEwMCkpXG4gICAgICAgICAgICAgIC50aWNrRm9ybWF0KHRpY2tGb3JtYXQpXG4gICAgICAgICAgICAgIC5vcmllbnQoKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikgPyBcImJvdHRvbVwiIDogIFwicmlnaHRcIik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgc2xpZGVyIHNjYWxlIHRvIG1vdmUgZnJvbSBwZXJjZW50YWdlcyB0byBwaXhlbHNcbiAgICAgICAgYXhpc1NjYWxlID0gc2NhbGUudGlja3MgPyBzY2FsZS5jb3B5KCkucmFuZ2UoWzAsIHNsaWRlckxlbmd0aF0pIDogc2NhbGUuY29weSgpLnJhbmdlUG9pbnRzKFswLCBzbGlkZXJMZW5ndGhdLCAwLjUpO1xuICAgICAgICAgIGF4aXMuc2NhbGUoYXhpc1NjYWxlKTtcblxuICAgICAgICAgIC8vIENyZWF0ZSBTVkcgYXhpcyBjb250YWluZXJcbiAgICAgICAgdmFyIHN2ZyA9IGRvbS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiZDMtc2xpZGVyLWF4aXMgZDMtc2xpZGVyLWF4aXMtXCIgKyBheGlzLm9yaWVudCgpLCB0cnVlKVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcblxuICAgICAgICB2YXIgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgIC8vIEhvcml6b250YWwgYXhpc1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG5cbiAgICAgICAgICBzdmcuc3R5bGUoXCJtYXJnaW4tbGVmdFwiLCAtbWFyZ2luICsgXCJweFwiKTtcblxuICAgICAgICAgIHN2Zy5hdHRyKHtcbiAgICAgICAgICAgIHdpZHRoOiBzbGlkZXJMZW5ndGggKyBtYXJnaW4gKiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXJnaW5cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChheGlzLm9yaWVudCgpID09PSBcInRvcFwiKSB7XG4gICAgICAgICAgICBzdmcuc3R5bGUoXCJ0b3BcIiwgLW1hcmdpbiArIFwicHhcIik7XG4gICAgICAgICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4gKyBcIixcIiArIG1hcmdpbiArIFwiKVwiKTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBib3R0b21cbiAgICAgICAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbiArIFwiLDApXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgeyAvLyBWZXJ0aWNhbFxuXG4gICAgICAgICAgc3ZnLnN0eWxlKFwidG9wXCIsIC1tYXJnaW4gKyBcInB4XCIpO1xuXG4gICAgICAgICAgc3ZnLmF0dHIoe1xuICAgICAgICAgICAgd2lkdGg6IG1hcmdpbixcbiAgICAgICAgICAgIGhlaWdodDogc2xpZGVyTGVuZ3RoICsgbWFyZ2luICogMlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGF4aXMub3JpZW50KCkgPT09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICBzdmcuc3R5bGUoXCJsZWZ0XCIsIC1tYXJnaW4gKyBcInB4XCIpO1xuICAgICAgICAgICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luICsgXCIsXCIgKyBtYXJnaW4gKyBcIilcIik7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gcmlnaHQgICAgICAgICAgXG4gICAgICAgICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAwICsgXCIsXCIgKyBtYXJnaW4gKyBcIilcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBnLmNhbGwoYXhpcyk7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25DbGlja0hvcml6b250YWwoKSB7XG4gICAgICAgIGlmICh0b1R5cGUodmFsdWUpICE9IFwiYXJyYXlcIikge1xuICAgICAgICAgIHZhciBwb3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzbGlkZXJMZW5ndGgsIGQzLmV2ZW50Lm9mZnNldFggfHwgZDMuZXZlbnQubGF5ZXJYKSk7XG4gICAgICAgICAgbW92ZUhhbmRsZShzY2FsZS5pbnZlcnQgPyBcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwVmFsdWUoc2NhbGUuaW52ZXJ0KHBvcyAvIHNsaWRlckxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgIDogbmVhcmVzdFRpY2socG9zIC8gc2xpZGVyTGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25DbGlja1ZlcnRpY2FsKCkge1xuICAgICAgICBpZiAodG9UeXBlKHZhbHVlKSAhPSBcImFycmF5XCIpIHtcbiAgICAgICAgICB2YXIgcG9zID0gc2xpZGVyTGVuZ3RoIC0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2xpZGVyTGVuZ3RoLCBkMy5ldmVudC5vZmZzZXRZIHx8IGQzLmV2ZW50LmxheWVyWSkpO1xuICAgICAgICAgIG1vdmVIYW5kbGUoc2NhbGUuaW52ZXJ0ID8gXG4gICAgICAgICAgICAgICAgICAgICAgc3RlcFZhbHVlKHNjYWxlLmludmVydChwb3MgLyBzbGlkZXJMZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICA6IG5lYXJlc3RUaWNrKHBvcyAvIHNsaWRlckxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uRHJhZ0hvcml6b250YWwoKSB7XG4gICAgICAgIGlmICggZDMuZXZlbnQuc291cmNlRXZlbnQudGFyZ2V0LmlkID09PSBcImhhbmRsZS1vbmVcIikge1xuICAgICAgICAgIGFjdGl2ZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoIGQzLmV2ZW50LnNvdXJjZUV2ZW50LnRhcmdldC5pZCA9PSBcImhhbmRsZS10d29cIiApIHtcbiAgICAgICAgICBhY3RpdmUgPSAyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzbGlkZXJMZW5ndGgsIGQzLmV2ZW50LngpKTtcbiAgICAgICAgbW92ZUhhbmRsZShzY2FsZS5pbnZlcnQgPyBcbiAgICAgICAgICAgICAgICAgICAgc3RlcFZhbHVlKHNjYWxlLmludmVydChwb3MgLyBzbGlkZXJMZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgOiBuZWFyZXN0VGljayhwb3MgLyBzbGlkZXJMZW5ndGgpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25EcmFnVmVydGljYWwoKSB7XG4gICAgICAgIGlmICggZDMuZXZlbnQuc291cmNlRXZlbnQudGFyZ2V0LmlkID09PSBcImhhbmRsZS1vbmVcIikge1xuICAgICAgICAgIGFjdGl2ZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoIGQzLmV2ZW50LnNvdXJjZUV2ZW50LnRhcmdldC5pZCA9PSBcImhhbmRsZS10d29cIiApIHtcbiAgICAgICAgICBhY3RpdmUgPSAyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3MgPSBzbGlkZXJMZW5ndGggLSBNYXRoLm1heCgwLCBNYXRoLm1pbihzbGlkZXJMZW5ndGgsIGQzLmV2ZW50LnkpKVxuICAgICAgICBtb3ZlSGFuZGxlKHNjYWxlLmludmVydCA/IFxuICAgICAgICAgICAgICAgICAgICBzdGVwVmFsdWUoc2NhbGUuaW52ZXJ0KHBvcyAvIHNsaWRlckxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICA6IG5lYXJlc3RUaWNrKHBvcyAvIHNsaWRlckxlbmd0aCkpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIE1vdmUgc2xpZGVyIGhhbmRsZSBvbiBjbGljay9kcmFnXG4gIGZ1bmN0aW9uIG1vdmVIYW5kbGUobmV3VmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdG9UeXBlKHZhbHVlKSA9PSBcImFycmF5XCIgICYmIHZhbHVlLmxlbmd0aCA9PSAyID8gdmFsdWVbYWN0aXZlIC0gMV06IHZhbHVlLFxuICAgICAgICBvbGRQb3MgPSBmb3JtYXRQZXJjZW50KHNjYWxlKHN0ZXBWYWx1ZShjdXJyZW50VmFsdWUpKSksXG4gICAgICAgIG5ld1BvcyA9IGZvcm1hdFBlcmNlbnQoc2NhbGUoc3RlcFZhbHVlKG5ld1ZhbHVlKSkpLFxuICAgICAgICBwb3NpdGlvbiA9IChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpID8gXCJsZWZ0XCIgOiBcImJvdHRvbVwiO1xuICAgIGlmIChvbGRQb3MgIT09IG5ld1Bvcykge1xuXG4gICAgICBpZiAodG9UeXBlKHZhbHVlKSA9PSBcImFycmF5XCIgJiYgdmFsdWUubGVuZ3RoID09IDIpIHtcbiAgICAgICAgdmFsdWVbIGFjdGl2ZSAtIDEgXSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAoZDMuZXZlbnQpIHtcbiAgICAgICAgICBkaXNwYXRjaC5zbGlkZShkMy5ldmVudCwgdmFsdWUgKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkMy5ldmVudCkge1xuICAgICAgICAgIGRpc3BhdGNoLnNsaWRlKGQzLmV2ZW50LnNvdXJjZUV2ZW50IHx8IGQzLmV2ZW50LCB2YWx1ZSA9IG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCB2YWx1ZVsgMCBdID49IHZhbHVlWyAxIF0gKSByZXR1cm47XG4gICAgICBpZiAoIGFjdGl2ZSA9PT0gMSApIHtcbiAgICAgICAgaWYgKHRvVHlwZSh2YWx1ZSkgPT0gXCJhcnJheVwiICYmIHZhbHVlLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgKHBvc2l0aW9uID09PSBcImxlZnRcIikgPyBkaXZSYW5nZS5zdHlsZShcImxlZnRcIiwgbmV3UG9zKSA6IGRpdlJhbmdlLnN0eWxlKFwiYm90dG9tXCIsIG5ld1Bvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgIGhhbmRsZTEudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgIC5zdHlsZVR3ZWVuKHBvc2l0aW9uLCBmdW5jdGlvbigpIHsgcmV0dXJuIGQzLmludGVycG9sYXRlKG9sZFBvcywgbmV3UG9zKTsgfSlcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCh0eXBlb2YgYW5pbWF0ZSA9PT0gXCJudW1iZXJcIikgPyBhbmltYXRlIDogMjUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUxLnN0eWxlKHBvc2l0aW9uLCBuZXdQb3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBcbiAgICAgICAgdmFyIHdpZHRoID0gMTAwIC0gcGFyc2VGbG9hdChuZXdQb3MpO1xuICAgICAgICB2YXIgdG9wID0gMTAwIC0gcGFyc2VGbG9hdChuZXdQb3MpO1xuXG4gICAgICAgIChwb3NpdGlvbiA9PT0gXCJsZWZ0XCIpID8gZGl2UmFuZ2Uuc3R5bGUoXCJyaWdodFwiLCB3aWR0aCArIFwiJVwiKSA6IGRpdlJhbmdlLnN0eWxlKFwidG9wXCIsIHRvcCArIFwiJVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgaGFuZGxlMi50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLnN0eWxlVHdlZW4ocG9zaXRpb24sIGZ1bmN0aW9uKCkgeyByZXR1cm4gZDMuaW50ZXJwb2xhdGUob2xkUG9zLCBuZXdQb3MpOyB9KVxuICAgICAgICAgICAgICAuZHVyYXRpb24oKHR5cGVvZiBhbmltYXRlID09PSBcIm51bWJlclwiKSA/IGFuaW1hdGUgOiAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZTIuc3R5bGUocG9zaXRpb24sIG5ld1Bvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgbmVhcmVzdCBzdGVwIHZhbHVlXG4gIGZ1bmN0aW9uIHN0ZXBWYWx1ZSh2YWwpIHtcblxuICAgIGlmICh2YWwgPT09IHNjYWxlLmRvbWFpbigpWzBdIHx8IHZhbCA9PT0gc2NhbGUuZG9tYWluKClbMV0pIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIGFsaWduVmFsdWUgPSB2YWw7XG4gICAgaWYgKHNuYXApIHtcbiAgICAgIGFsaWduVmFsdWUgPSBuZWFyZXN0VGljayhzY2FsZSh2YWwpKTtcbiAgICB9IGVsc2V7XG4gICAgICB2YXIgdmFsTW9kU3RlcCA9ICh2YWwgLSBzY2FsZS5kb21haW4oKVswXSkgJSBzdGVwO1xuICAgICAgYWxpZ25WYWx1ZSA9IHZhbCAtIHZhbE1vZFN0ZXA7XG5cbiAgICAgIGlmIChNYXRoLmFicyh2YWxNb2RTdGVwKSAqIDIgPj0gc3RlcCkge1xuICAgICAgICBhbGlnblZhbHVlICs9ICh2YWxNb2RTdGVwID4gMCkgPyBzdGVwIDogLXN0ZXA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhbGlnblZhbHVlO1xuXG4gIH1cblxuICAvLyBGaW5kIHRoZSBuZWFyZXN0IHRpY2tcbiAgZnVuY3Rpb24gbmVhcmVzdFRpY2socG9zKSB7XG4gICAgdmFyIHRpY2tzID0gc2NhbGUudGlja3MgPyBzY2FsZS50aWNrcygpIDogc2NhbGUuZG9tYWluKCk7XG4gICAgdmFyIGRpc3QgPSB0aWNrcy5tYXAoZnVuY3Rpb24oZCkge3JldHVybiBwb3MgLSBzY2FsZShkKTt9KTtcbiAgICB2YXIgaSA9IC0xLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIHIgPSBzY2FsZS50aWNrcyA/IHNjYWxlLnJhbmdlKClbMV0gOiBzY2FsZS5yYW5nZUV4dGVudCgpWzFdO1xuICAgIGRvIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdFtpXSkgPCByKSB7XG4gICAgICAgICAgciA9IE1hdGguYWJzKGRpc3RbaV0pO1xuICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfTtcbiAgICB9IHdoaWxlIChkaXN0W2ldID4gMCAmJiBpIDwgZGlzdC5sZW5ndGggLSAxKTtcblxuICAgIHJldHVybiB0aWNrc1tpbmRleF07XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSB0eXBlIG9mIGFuIG9iamVjdFxuICBmdW5jdGlvbiB0b1R5cGUodikge1xuICAgIHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwodikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvLyBHZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uc1xuICBzbGlkZXIubWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG1pbjtcbiAgICBtaW4gPSBfO1xuICAgIHJldHVybiBzbGlkZXI7XG4gIH07XG5cbiAgc2xpZGVyLm1heCA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBtYXg7XG4gICAgbWF4ID0gXztcbiAgICByZXR1cm4gc2xpZGVyO1xuICB9O1xuXG4gIHNsaWRlci5zdGVwID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHN0ZXA7XG4gICAgc3RlcCA9IF87XG4gICAgcmV0dXJuIHNsaWRlcjtcbiAgfTtcblxuICBzbGlkZXIuYW5pbWF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBhbmltYXRlO1xuICAgIGFuaW1hdGUgPSBfO1xuICAgIHJldHVybiBzbGlkZXI7XG4gIH07XG5cbiAgc2xpZGVyLm9yaWVudGF0aW9uID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgIG9yaWVudGF0aW9uID0gXztcbiAgICByZXR1cm4gc2xpZGVyO1xuICB9O1xuXG4gIHNsaWRlci5heGlzID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGF4aXM7XG4gICAgYXhpcyA9IF87XG4gICAgcmV0dXJuIHNsaWRlcjtcbiAgfTtcblxuICBzbGlkZXIubWFyZ2luID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIG1hcmdpbjtcbiAgICBtYXJnaW4gPSBfO1xuICAgIHJldHVybiBzbGlkZXI7XG4gIH07XG5cbiAgc2xpZGVyLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbW92ZUhhbmRsZShzdGVwVmFsdWUoXykpO1xuICAgIH07XG4gICAgdmFsdWUgPSBfO1xuICAgIHJldHVybiBzbGlkZXI7XG4gIH07XG5cbiAgc2xpZGVyLnNuYXAgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc25hcDtcbiAgICBzbmFwID0gXztcbiAgICByZXR1cm4gc2xpZGVyO1xuICB9O1xuXG4gIHNsaWRlci5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBzY2FsZTtcbiAgICBzY2FsZSA9IF87XG4gICAgcmV0dXJuIHNsaWRlcjtcbiAgfTtcblxuICBkMy5yZWJpbmQoc2xpZGVyLCBkaXNwYXRjaCwgXCJvblwiKTtcblxuICByZXR1cm4gc2xpZGVyO1xuXG59XG59KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=