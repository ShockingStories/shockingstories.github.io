function updateCars(t){document.getElementById("carNumber").value=t,document.getElementById("carRange").value=t,updateGraph("#gwh-chart",mockAdjustGWh())}function columnGraph(t,n){for(var r=80,a=300,e=d3.select(t).append("svg:svg").attr("class","chart").attr("width",r).attr("height",a).append("svg:g").attr("transform","translate(0,300)"),o=[n],c=[],u=0;u<o[0].length-1;u++)c.push("rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")");x=d3.scale.ordinal().rangeRoundBands([0,r]),y=d3.scale.linear().range([0,a]),z=d3.scale.ordinal().range(c);var d=["c1","c2","c3","c4","c5"].map(function(t,n){return o.map(function(t,r){return{x:r,y:t[n+1]}})}),l=d3.layout.stack()(d);x.domain(l[0].map(function(t){return t.x})),y.domain([0,d3.max(l[l.length-1],function(t){return t.y0+t.y})]);{var i=e.selectAll("g.valgroup").data(l).enter().append("svg:g").attr("class","valgroup").style("fill",function(t,n){return z(n)}).style("stroke",function(t,n){return d3.rgb(z(n)).darker()});i.selectAll("rect").data(function(t){return t}).enter().append("svg:rect").attr("x",function(t){return x(t.x)}).attr("y",function(t){return-y(t.y0)-y(t.y)}).attr("height",function(t){return y(t.y)}).attr("width",Math.min.apply(null,[x.rangeBand()-2,100]))}}function updateGraph(t,n){for(var r=80,a=300,e=d3.select(t).append("svg:svg").attr("class","chart").attr("width",r).attr("height",a).append("svg:g").attr("transform","translate(0,300)"),o=[n],c=[],u=0;u<o[0].length-1;u++)c.push("rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")");x=d3.scale.ordinal().rangeRoundBands([0,r]),y=d3.scale.linear().range([0,a]),z=d3.scale.ordinal().range(c);var d=["c1","c2","c3","c4","c5"].map(function(t,n){return o.map(function(t,r){return{x:r,y:t[n+1]}})}),l=d3.layout.stack()(d);x.domain(l[0].map(function(t){return t.x})),y.domain([0,d3.max(l[l.length-1],function(t){return t.y0+t.y})]);{var i=e.selectAll("g.valgroup").data(l).enter().append("svg:g").attr("class","valgroup").style("fill",function(t,n){return z(n)}).style("stroke",function(t,n){return d3.rgb(z(n)).darker()});i.selectAll("rect").data(function(t){return t}).enter().append("svg:rect").attr("x",function(t){return x(t.x)}).attr("y",function(t){return-y(t.y0)-y(t.y)}).attr("height",function(t){return y(t.y)}).attr("width",Math.min.apply(null,[x.rangeBand()-2,100]))}}function randomRGB(){return Math.floor(256*Math.random())}function shockingUpdate(t){var n={Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626},r={Hydro:0,Geothermal:847.32,Wind:0,Coal:1222.2,Gas:3405.51},a={Road:12688},e={gen_production:n,gen_emissions:r,fleet_emissions:a};return e}function mockGWh(){return{Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626}}function mockAdjustGWh(){return{Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626}}function mockGenerationEmissions(){return{Hydro:0,Geothermal:847.32,Wind:0,Coal:1222.2,Gas:3405.51}}function mockFleetEmissions(){return{Road:12688}}document.addEventListener("DOMContentLoaded",function(t){columnGraph("#co2-chart",[1,10,20,20,25,50]),columnGraph("#gwh-chart",[1,10,15,20,30,50]),columnGraph("#cost-chart",[1,10,15,15,35,50]),columnGraph("#investment-chart",[1,5,10,15,45,50])});var input_test={electric_cars:1};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNoYXJ0LmpzIiwiZW5naW5lLmpzIiwibW9jay5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVDYXJzIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlR3JhcGgiLCJtb2NrQWRqdXN0R1doIiwiY29sdW1uR3JhcGgiLCJiaW5kVG8iLCJ2YWx1ZXMiLCJ3IiwiaCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIm1hdHJpeCIsImNvbG9ycyIsImkiLCJsZW5ndGgiLCJwdXNoIiwicmFuZG9tUkdCIiwieCIsInNjYWxlIiwib3JkaW5hbCIsInJhbmdlUm91bmRCYW5kcyIsInkiLCJsaW5lYXIiLCJyYW5nZSIsInoiLCJyZW1hcHBlZCIsIm1hcCIsImRhdCIsImQiLCJpaSIsInN0YWNrZWQiLCJsYXlvdXQiLCJzdGFjayIsImRvbWFpbiIsIm1heCIsInkwIiwidmFsZ3JvdXAiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJzdHlsZSIsInJnYiIsImRhcmtlciIsIk1hdGgiLCJtaW4iLCJhcHBseSIsInJhbmdlQmFuZCIsImZsb29yIiwicmFuZG9tIiwic2hvY2tpbmdVcGRhdGUiLCJpbnB1dHMiLCJnZW5fcHJvZHVjdGlvbiIsIkh5ZHJvIiwiR2VvdGhlcm1hbCIsIldpbmQiLCJDb2FsIiwiR2FzIiwiZ2VuX2VtaXNzaW9ucyIsImZsZWV0X2VtaXNzaW9ucyIsIlJvYWQiLCJyZXN1bHQiLCJtb2NrR1doIiwibW9ja0dlbmVyYXRpb25FbWlzc2lvbnMiLCJtb2NrRmxlZXRFbWlzc2lvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpbnB1dF90ZXN0IiwiZWxlY3RyaWNfY2FycyJdLCJtYXBwaW5ncyI6IkFBaUJBLFFBQUFBLFlBQUFDLEdBQ0FDLFNBQUFDLGVBQUEsYUFBQUYsTUFBQUEsRUFDQUMsU0FBQUMsZUFBQSxZQUFBRixNQUFBQSxFQUNBRyxZQUFBLGFBQUFDLGlCQ3BCQSxRQUFB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Q0FDLEtBQUEsS0FDQUMsSUFBQSxNQUlBLFFBQUF4RCxpQkFDQSxPQUNBb0QsTUFBQSxNQUNBQyxXQUFBLEtBQ0FDLEtBQUEsS0FDQUMsS0FBQSxLQUNBQyxJQUFBLE1BSUEsUUFBQU0sMkJBQ0EsT0FDQVYsTUFBQSxFQUNBQyxXQUFBLE9BQ0FDLEtBQUEsRUFDQUMsS0FBQSxPQUNBQyxJQUFBLFNBSUEsUUFBQU8sc0JBQ0EsT0FDQUosS0FBQSxPSGhDQTlELFNBQUFtRSxpQkFBQSxtQkFBQSxTQUFBQyxHQUNBaEUsWUFBQSxjQUNBLEVBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQSxLQUdBQSxZQUFBLGNBQ0EsRUFBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEtBRUFBLFlBQUEsZUFDQSxFQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsS0FFQUEsWUFBQSxxQkFDQSxFQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsTUVYQSxJQUFBaUUsYUFFQUMsY0FBQSIsImZpbGUiOiJqcy9hbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICBjb2x1bW5HcmFwaChcIiNjbzItY2hhcnRcIiwgW1xuICAgIDEsIDEwLCAyMCwgMjAsIDI1LCA1MFxuICBdKTtcbiAgLy91cGRhdGVHcmFwaCgnI2d3aC1jaGFydCcsIG1vY2tHV2goKSk7XG4gIGNvbHVtbkdyYXBoKFwiI2d3aC1jaGFydFwiLCBbXG4gICAgMSwgMTAsIDE1LCAyMCwgMzAsIDUwXG4gIF0pO1xuICBjb2x1bW5HcmFwaChcIiNjb3N0LWNoYXJ0XCIsIFtcbiAgICAxLCAxMCwgMTUsIDE1LCAzNSwgNTBcbiAgXSk7XG4gIGNvbHVtbkdyYXBoKFwiI2ludmVzdG1lbnQtY2hhcnRcIiwgW1xuICAgIDEsIDUsIDEwLCAxNSwgNDUsIDUwXG4gIF0pO1xufSk7XG5cblxuZnVuY3Rpb24gdXBkYXRlQ2FycyAodmFsdWUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhck51bWJlcicpLnZhbHVlID0gdmFsdWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJSYW5nZScpLnZhbHVlID0gdmFsdWU7XG4gIHVwZGF0ZUdyYXBoKCcjZ3doLWNoYXJ0JywgbW9ja0FkanVzdEdXaCgpKTsgXG59XG5cbiIsImZ1bmN0aW9uIGNvbHVtbkdyYXBoIChiaW5kVG8sIHZhbHVlcykge1xuICB2YXIgdyA9IDgwO1xuICB2YXIgaCA9IDMwMDtcblxuICB2YXIgc3ZnID0gZDMuc2VsZWN0KGJpbmRUbykuYXBwZW5kKFwic3ZnOnN2Z1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgdylcbiAgICAuYXR0cihcImhlaWdodFwiLCBoIClcbiAgICAuYXBwZW5kKFwic3ZnOmdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDMwMClcIik7XG5cbiAgdmFyIG1hdHJpeCA9IFt2YWx1ZXNdO1xuXG4gIC8vIFJhbmRvbSBmb3Igbm93XG4gIHZhciBjb2xvcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXhbMF0ubGVuZ3RoIC0xOyBpKyspIHtcbiAgICBjb2xvcnMucHVzaCgncmdiKCcgKyByYW5kb21SR0IoKSArICcsJyArIHJhbmRvbVJHQigpICsgJywnICsgcmFuZG9tUkdCKCkgKyAnKScpO1xuICB9XG5cbiAgeCA9IGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZVJvdW5kQmFuZHMoWzAsIHddKTtcbiAgeSA9IGQzLnNjYWxlLmxpbmVhcigpLnJhbmdlKFswLCBoXSk7XG4gIHogPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoY29sb3JzKTtcblxuICB2YXIgcmVtYXBwZWQgPVtcImMxXCIsXCJjMlwiLFwiYzNcIixcImM0XCIsXCJjNVwiXS5tYXAoZnVuY3Rpb24oZGF0LGkpe1xuICAgIHJldHVybiBtYXRyaXgubWFwKGZ1bmN0aW9uKGQsaWkpe1xuICAgICAgcmV0dXJuIHt4OiBpaSwgeTogZFtpKzFdIH07XG4gICAgfSlcbiAgfSk7XG5cbiAgdmFyIHN0YWNrZWQgPSBkMy5sYXlvdXQuc3RhY2soKShyZW1hcHBlZClcblxuICB4LmRvbWFpbihzdGFja2VkWzBdLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pKTtcbiAgeS5kb21haW4oWzAsIGQzLm1heChzdGFja2VkW3N0YWNrZWQubGVuZ3RoIC0gMV0sIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTAgKyBkLnk7IH0pXSk7XG5cbiAgdmFyIHZhbGdyb3VwID0gc3ZnLnNlbGVjdEFsbChcImcudmFsZ3JvdXBcIilcbiAgICAuZGF0YShzdGFja2VkKVxuICAgIC5lbnRlcigpLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbGdyb3VwXCIpXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB6KGkpOyB9KVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBkMy5yZ2IoeihpKSkuZGFya2VyKCk7IH0pO1xuXG4gIHZhciByZWN0ID0gdmFsZ3JvdXAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC5kYXRhKGZ1bmN0aW9uKGQpe3JldHVybiBkO30pXG4gICAgLmVudGVyKCkuYXBwZW5kKFwic3ZnOnJlY3RcIilcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkLngpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiAteShkLnkwKSAtIHkoZC55KTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQueSk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBNYXRoLm1pbi5hcHBseShudWxsLCBbeC5yYW5nZUJhbmQoKS0yLCAxMDBdKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyYXBoIChiaW5kVG8sIHZhbHVlcykge1xuICB2YXIgdyA9IDgwO1xuICB2YXIgaCA9IDMwMDtcblxuICB2YXIgc3ZnID0gZDMuc2VsZWN0KGJpbmRUbykuYXBwZW5kKFwic3ZnOnN2Z1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgdylcbiAgICAuYXR0cihcImhlaWdodFwiLCBoIClcbiAgICAuYXBwZW5kKFwic3ZnOmdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDMwMClcIik7XG5cbiAgdmFyIG1hdHJpeCA9IFt2YWx1ZXNdO1xuXG4gIC8vIFJhbmRvbSBmb3Igbm93XG4gIHZhciBjb2xvcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXhbMF0ubGVuZ3RoIC0xOyBpKyspIHtcbiAgICBjb2xvcnMucHVzaCgncmdiKCcgKyByYW5kb21SR0IoKSArICcsJyArIHJhbmRvbVJHQigpICsgJywnICsgcmFuZG9tUkdCKCkgKyAnKScpO1xuICB9XG5cbiAgeCA9IGQzLnNjYWxlLm9yZGluYWwoKS5yYW5nZVJvdW5kQmFuZHMoWzAsIHddKTtcbiAgeSA9IGQzLnNjYWxlLmxpbmVhcigpLnJhbmdlKFswLCBoXSk7XG4gIHogPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2UoY29sb3JzKTtcblxuICB2YXIgcmVtYXBwZWQgPVtcImMxXCIsXCJjMlwiLFwiYzNcIixcImM0XCIsXCJjNVwiXS5tYXAoZnVuY3Rpb24oZGF0LGkpe1xuICAgIHJldHVybiBtYXRyaXgubWFwKGZ1bmN0aW9uKGQsaWkpe1xuICAgICAgcmV0dXJuIHt4OiBpaSwgeTogZFtpKzFdIH07XG4gICAgfSlcbiAgfSk7XG5cbiAgdmFyIHN0YWNrZWQgPSBkMy5sYXlvdXQuc3RhY2soKShyZW1hcHBlZClcblxuICB4LmRvbWFpbihzdGFja2VkWzBdLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pKTtcbiAgeS5kb21haW4oWzAsIGQzLm1heChzdGFja2VkW3N0YWNrZWQubGVuZ3RoIC0gMV0sIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTAgKyBkLnk7IH0pXSk7XG5cbiAgdmFyIHZhbGdyb3VwID0gc3ZnLnNlbGVjdEFsbChcImcudmFsZ3JvdXBcIilcbiAgICAuZGF0YShzdGFja2VkKVxuICAgIC5lbnRlcigpLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbGdyb3VwXCIpXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB6KGkpOyB9KVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBkMy5yZ2IoeihpKSkuZGFya2VyKCk7IH0pO1xuXG4gIHZhciByZWN0ID0gdmFsZ3JvdXAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC5kYXRhKGZ1bmN0aW9uKGQpe3JldHVybiBkO30pXG4gICAgLmVudGVyKCkuYXBwZW5kKFwic3ZnOnJlY3RcIilcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkLngpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiAteShkLnkwKSAtIHkoZC55KTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQueSk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBNYXRoLm1pbi5hcHBseShudWxsLCBbeC5yYW5nZUJhbmQoKS0yLCAxMDBdKSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVJHQiAoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xufVxuIiwiLy9cbnZhciBpbnB1dF90ZXN0ID0ge1xuXHQvLyAlIG9mIGVsZWN0cmljIGNhcnNcblx0J2VsZWN0cmljX2NhcnMnOiAxXG59XG5cblxuZnVuY3Rpb24gc2hvY2tpbmdVcGRhdGUoaW5wdXRzKSB7XG5cblx0Ly8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0Ly8gQmFzZWxpbmUgZGF0YSBcblx0Ly8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXHQvLyBhbm51YWwgZ2VuZXJhdGlvbiBpbiBHaWdhd2F0dCBIb3Vyc1xuXHR2YXIgZ2VuX3Byb2R1Y3Rpb24gPSB7XG5cdFx0J0h5ZHJvJzogMjQwOTUsXG5cdFx0J0dlb3RoZXJtYWwnOiA2NDg3LFxuXHRcdCdXaW5kJzogMjE4Nyxcblx0XHQnQ29hbCc6IDE4MzIsXG5cdFx0J0dhcyc6IDY2MjZcblx0fVxuXG5cdC8vIGFubnVhbCBnZW5lcmF0aW9uIGVtaXNzaW9ucyBpbiBLaWxvdG9ucyBvZiBDTzIgRXF1aXZhbGVudFxuXHR2YXIgZ2VuX2VtaXNzaW9ucyA9IHtcblx0XHQnSHlkcm8nOiAwLFxuXHRcdCdHZW90aGVybWFsJzogODQ3LjMyLFxuXHRcdCdXaW5kJzogMCxcblx0XHQnQ29hbCc6IDEyMjIuMixcblx0XHQnR2FzJzogMzQwNS41MVxuXHR9XG5cblx0Ly8gYW5udWFsIHZlaGljbGUgZmxlZXQgZW1pc3Npb25zIGluIEtpbG90b25zIG9mIENPMiBFcXVpdmFsZW50XG5cdHZhciBmbGVldF9lbWlzc2lvbnMgPSB7XG5cdFx0J1JvYWQnOiAxMjY4OFxuXHR9XG4gXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdC8vIEJ1c2luZXNzIGxvZ2ljXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblx0Ly8gVE9ET1xuXG5cdHZhciByZXN1bHQgPSB7XG5cdFx0J2dlbl9wcm9kdWN0aW9uJzogZ2VuX3Byb2R1Y3Rpb24sXG5cdFx0J2dlbl9lbWlzc2lvbnMnOiBnZW5fZW1pc3Npb25zLFxuXHRcdCdmbGVldF9lbWlzc2lvbnMnOiBmbGVldF9lbWlzc2lvbnNcblx0fVxuXG5cdGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG4iLCJmdW5jdGlvbiBtb2NrR1doICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnSHlkcm8nOiAyNDA5NSxcblx0XHQnR2VvdGhlcm1hbCc6IDY0ODcsXG5cdFx0J1dpbmQnOiAyMTg3LFxuXHRcdCdDb2FsJzogMTgzMixcblx0XHQnR2FzJzogNjYyNlxuXHR9O1xufVxuXG5mdW5jdGlvbiBtb2NrQWRqdXN0R1doICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnSHlkcm8nOiAyNDA5NSxcblx0XHQnR2VvdGhlcm1hbCc6IDY0ODcsXG5cdFx0J1dpbmQnOiAyMTg3LFxuXHRcdCdDb2FsJzogMTgzMixcblx0XHQnR2FzJzogNjYyNlxuXHR9O1xufVxuXG5mdW5jdGlvbiBtb2NrR2VuZXJhdGlvbkVtaXNzaW9ucyAoKSB7XG4gIHJldHVybiB7XG5cdFx0J0h5ZHJvJzogMCxcblx0XHQnR2VvdGhlcm1hbCc6IDg0Ny4zMixcblx0XHQnV2luZCc6IDAsXG5cdFx0J0NvYWwnOiAxMjIyLjIsXG5cdFx0J0dhcyc6IDM0MDUuNTFcblx0fTtcbn1cblxuZnVuY3Rpb24gbW9ja0ZsZWV0RW1pc3Npb25zICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnUm9hZCc6IDEyNjg4XG5cdH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=