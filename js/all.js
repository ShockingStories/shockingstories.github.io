function updateCars(t){document.getElementById("carNumber").value=t,document.getElementById("carRange").value=t;var r=shockingUpdate({electric_cars:t});updateGraph("gwh-chart",r.gen_production),updateGraph("co2-chart",{Geothermal:r.gen_emissions.Geothermal,Coal:r.gen_emissions.Coal,Gas:r.gen_emissions.Gas,Road:r.fleet_emissions.Road})}function preprocessData(t,r){var n=[1],e=0;for(var a in t)t.hasOwnProperty(a)&&(e+=t[a],n.push(t[a]));r>0&&n.push(r);for(var o=1;o<n.length;o++)n[o]=Math.round(n[o]/e*100);return n}function updateTotal(t,r){var n=0;for(var e in r)r.hasOwnProperty(e)&&(n+=r[e]);return n=Math.round(n),document.getElementById(t+"-total").innerHTML=n,n}function updateGraph(t,r){for(var n=80,e=300,a=t.split("-")[0],o=parseInt(document.getElementById(a+"-total").innerHTML,10),s=updateTotal(a,r),l=o-s,i=document.getElementById(t);i.firstChild;)i.removeChild(i.firstChild);for(var d=d3.select("#"+t).append("svg:svg").attr("class","chart").attr("width",n).attr("height",e).append("svg:g").attr("transform","translate(0,"+e+")"),c=[preprocessData(r,l)],u=[],g=0;g<c[0].length-1;g++)u.push("rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")"),l>0&&(u[c[0].length-1]="white");x=d3.scale.ordinal().rangeRoundBands([0,n]),y=d3.scale.linear().range([0,e]),z=d3.scale.ordinal().range(u);for(var p=[],g=1;g<c[0].length;g++)p.push("c"+g);var h=p.map(function(t,r){return c.map(function(t,n){return{x:n,y:t[r+1]}})}),m=d3.layout.stack()(h);x.domain(m[0].map(function(t){return t.x})),y.domain([0,d3.max(m[m.length-1],function(t){return t.y0+t.y})]);{var f=d.selectAll("g.valgroup").data(m).enter().append("svg:g").attr("class","valgroup").style("fill",function(t,r){return z(r)}).style("stroke",function(t,r){return d3.rgb(z(r)).darker()});f.selectAll("rect").data(function(t){return t}).enter().append("svg:rect").attr("x",function(t){return x(t.x)}).attr("y",function(t){return-y(t.y0)-y(t.y)}).attr("height",function(t){return y(t.y)}).attr("width",Math.min.apply(null,[x.rangeBand()-2,100]))}}function randomRGB(){return Math.floor(256*Math.random())}function columnGraph(t,r){for(var n=80,e=300,a=d3.select(t).append("svg:svg").attr("class","chart").attr("width",n).attr("height",e).append("svg:g").attr("transform","translate(0,300)"),o=[r],s=[],l=0;l<o[0].length-1;l++)s.push("rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")");x=d3.scale.ordinal().rangeRoundBands([0,n]),y=d3.scale.linear().range([0,e]),z=d3.scale.ordinal().range(s);var i=["c1","c2","c3","c4","c5"].map(function(t,r){return o.map(function(t,n){return{x:n,y:t[r+1]}})}),d=d3.layout.stack()(i);x.domain(d[0].map(function(t){return t.x})),y.domain([0,d3.max(d[d.length-1],function(t){return t.y0+t.y})]);{var c=a.selectAll("g.valgroup").data(d).enter().append("svg:g").attr("class","valgroup").style("fill",function(t,r){return z(r)}).style("stroke",function(t,r){return d3.rgb(z(r)).darker()});c.selectAll("rect").data(function(t){return t}).enter().append("svg:rect").attr("x",function(t){return x(t.x)}).attr("y",function(t){return-y(t.y0)-y(t.y)}).attr("height",function(t){return y(t.y)}).attr("width",Math.min.apply(null,[x.rangeBand()-2,100]))}}function shockingUpdate(t){console.log("shockingUpdate - Inputs: "+JSON.stringify(t));var r={Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626},n={Hydro:0,Geothermal:847.32,Wind:0,Coal:1222.2,Gas:3405.51},e={Hydro:100,Geothermal:150,Wind:200,Coal:250,Gas:300},a={Road:12688},o=t.electric_cars,s=o/100;a.Road=a.Road*(1-s),ev_power_reqts=2406.4*3341013*s,ev_power_reqts/=1e6;var l=0;for(var i in r)l+=r[i];var d=1+ev_power_reqts/l;console.log("total: "+l),console.log("increase from electric vehicles: "+d),console.log("ev_power_reqts "+ev_power_reqts);for(var i in n)n[i]=n[i]*d;for(var i in r)r[i]=r[i]*d;for(var i in n)n[i]=n[i]*d;for(var i in e)e[i]=e[i]*d;var c={gen_production:r,gen_emissions:n,gen_cost:e,fleet_emissions:a};return console.log("Result: "+JSON.stringify(c)),c}function getBaseline(){var t={Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626},r={Hydro:0,Geothermal:847.32,Wind:0,Coal:1222.2,Gas:3405.51},n={Hydro:100,Geothermal:150,Wind:200,Coal:250,Gas:300},e={gen_production:t,gen_emissions:r,gen_cost:n};return e}function mockGWh(){return{Hydro:24095,Geothermal:6487,Wind:2187,Coal:1832,Gas:6626}}function mockAdjustGWh(){return{Hydro:24,Geothermal:648,Wind:1218,Coal:832,Gas:362}}function mockGenerationEmissions(){return{Hydro:0,Geothermal:847.32,Wind:0,Coal:1222.2,Gas:3405.51}}function mockFleetEmissions(){return{Road:12688}}document.addEventListener("DOMContentLoaded",function(t){updateCars(0),columnGraph("#cost-chart",[1,10,15,15,35,50]),columnGraph("#investment-chart",[1,5,10,15,45,50])});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNoYXJ0LmpzIiwiZW5naW5lLmpzIiwibW9jay5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVDYXJzIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YSIsInNob2NraW5nVXBkYXRlIiwiZWxlY3RyaWNfY2FycyIsInVwZGF0ZUdyYXBoIiwiZ2VuX3Byb2R1Y3Rpb24iLCJHZW90aGVybWFsIiwiZ2VuX2VtaXNzaW9ucyIsIkNvYWwiLCJHYXMiLCJSb2FkIiwiZmxlZXRfZW1pc3Npb25zIiwicHJlcHJvY2Vzc0RhdGEiLCJkZWx0YSIsInZhbHVlcyIsInRvdGFsIiwiayIsImhhc093blByb3BlcnR5IiwicHVzaCIsImkiLCJsZW5ndGgiLCJNYXRoIiwicm91bmQiLCJ1cGRhdGVUb3RhbCIsInByZWZpeCIsImlubmVySFRNTCIsImJpbmRUbyIsInciLCJoIiwic3BsaXQiLCJvbGRUb3RhbCIsInBhcnNlSW50IiwibmV3VG90YWwiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibWF0cml4IiwiY29sb3JzIiwicmFuZG9tUkdCIiwieCIsInNjYWxlIiwib3JkaW5hbCIsInJhbmdlUm91bmRCYW5kcyIsInkiLCJsaW5lYXIiLCJyYW5nZSIsInoiLCJhIiwicmVtYXBwZWQiLCJtYXAiLCJkYXQiLCJkIiwiaWkiLCJzdGFja2VkIiwibGF5b3V0Iiwic3RhY2siLCJkb21haW4iLCJtYXgiLCJ5MCIsInZhbGdyb3VwIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJzdHlsZSIsInJnYiIsImRhcmtlciIsIm1pbiIsImFwcGx5IiwicmFuZ2VCYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJjb2x1bW5HcmFwaCIsImlucHV0cyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiSHlkcm8iLCJXaW5kIiwiZ2VuX2Nvc3QiLCJlbGVjdHJpY19wY3QiLCJldl9wb3dlcl9yZXF0cyIsInRvdGFsX2dlbiIsImtleSIsImluY3JlYXNlX2luX3Bvd2VyX3JlcXRzIiwicmVzdWx0IiwiZ2V0QmFzZWxpbmUiLCJtb2NrR1doIiwibW9ja0FkanVzdEdXaCIsIm1vY2tHZW5lcmF0aW9uRW1pc3Npb25zIiwibW9ja0ZsZWV0RW1pc3Npb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Il0sIm1hcHBpbmdzIjoiQUFXQSxRQUFBQSxZQUFBQyxHQUNBQyxTQUFBQyxlQUFBLGFBQUFGLE1BQUFBLEVBQ0FDLFNBQUFDLGVBQUEsWUFBQUYsTUFBQUEsQ0FFQSxJQUFBRyxHQUFBQyxnQkFBQUMsY0FBQUwsR0FFQU0sYUFBQSxZQUFBSCxFQUFBSSxnQkFDQUQsWUFBQSxhQUNBRSxXQUFBTCxFQUFBTSxjQUFBLFdBQ0FDLEtBQUFQLEVBQUFNLGNBQUEsS0FDQUUsSUFBQVIsRUFBQU0sY0FBQSxJQUNBRyxLQUFBVCxFQUFBVSxnQkFBQSxPQ3RCQSxRQUFBQyxnQkFBQVgsRUFBQVksR0FFQSxHQUFBQyxJQUFBLEdBQ0FDLEVBQUEsQ0FDQSxLQUFBLEdBQUFDLEtBQUFmLEdBQ0FBLEVBQUFnQixlQUFBRCxLQUNBRCxHQUFBZCxFQUFBZSxHQUNBRixFQUFBSSxLQUFBakIsRUFBQWUsSUFLQUgsR0FBQSxHQUNBQyxFQUFBSSxLQUFBTCxFQUlBLEtBQUEsR0FBQU0sR0FBQSxFQUFBQSxFQUFBTCxFQUFBTSxPQUFBRCxJQUNBTCxFQUFBSyxHQUFBRSxLQUFBQyxNQUFBUixFQUFBSyxHQUFBSixFQUFBLElBR0EsT0FBQUQsR0FHQSxRQUFBUyxhQUFBQyxFQUFBdkIsR0FDQSxHQUFBYyxHQUFBLENBQ0EsS0FBQSxHQUFBQyxLQUFBZixHQUNBQSxFQUFBZ0IsZUFBQUQsS0FDQUQsR0FBQWQsRUFBQWUsR0FNQSxPQUhBRCxHQUFBTSxLQUFBQyxNQUFBUCxHQUNBaEIsU0FBQUMsZUFBQXdCLEVBQUEsVUFBQUMsVUFBQVYsRUFFQUEsRUFHQSxRQUFBWCxhQUFBc0IsRUFBQXpCLEdBWUEs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QUEsRUFDQXhFLGdCQUFBQSxFQUtBLE9BRkFrRSxTQUFBQyxJQUFBLFdBQUFDLEtBQUFDLFVBQUFTLElBRUFBLEVBSUEsUUFBQUMsZUFPQSxHQUFBckYsSUFDQTRFLE1BQUEsTUFDQTNFLFdBQUEsS0FDQTRFLEtBQUEsS0FDQTFFLEtBQUEsS0FDQUMsSUFBQSxNQUlBRixHQUNBMEUsTUFBQSxFQUNBM0UsV0FBQSxPQUNBNEUsS0FBQSxFQUNBMUUsS0FBQSxPQUNBQyxJQUFBLFNBS0EwRSxHQUNBRixNQUFBLElBQ0EzRSxXQUFBLElBQ0E0RSxLQUFBLElBQ0ExRSxLQUFBLElBQ0FDLElBQUEsS0FHQWdGLEdBQ0FwRixlQUFBQSxFQUNBRSxjQUFBQSxFQUNBNEUsU0FBQUEsRUFHQSxPQUFBTSxHQ3ZKQSxRQUFBRSxXQUNBLE9BQ0FWLE1BQUEsTUFDQTNFLFdBQUEsS0FDQTRFLEtBQUEsS0FDQTFFLEtBQUEsS0FDQUMsSUFBQSxNQUlBLFFBQUFtRixpQkFDQSxPQUNBWCxNQUFBLEdBQ0EzRSxXQUFBLElBQ0E0RSxLQUFBLEtBQ0ExRSxLQUFBLElBQ0FDLElBQUEsS0FJQSxRQUFBb0YsMkJBQ0EsT0FDQVosTUFBQSxFQUNBM0UsV0FBQSxPQUNBNEUsS0FBQSxFQUNBMUUsS0FBQSxPQUNBQyxJQUFBLFNBSUEsUUFBQXFGLHNCQUNBLE9BQ0FwRixLQUFBLE9IaENBWCxTQUFBZ0csaUJBQUEsbUJBQUEsU0FBQUMsR0FDQW5HLFdBQUEsR0FDQThFLFlBQUEsZUFDQSxFQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEsS0FFQUEsWUFBQSxxQkFDQSxFQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEiLCJmaWxlIjoianMvYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgdXBkYXRlQ2FycygwKTtcbiAgY29sdW1uR3JhcGgoXCIjY29zdC1jaGFydFwiLCBbXG4gICAgMSwgMTAsIDE1LCAxNSwgMzUsIDUwXG4gIF0pO1xuICBjb2x1bW5HcmFwaChcIiNpbnZlc3RtZW50LWNoYXJ0XCIsIFtcbiAgICAxLCA1LCAxMCwgMTUsIDQ1LCA1MFxuICBdKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcnMgKHZhbHVlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJOdW1iZXInKS52YWx1ZSA9IHZhbHVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyUmFuZ2UnKS52YWx1ZSA9IHZhbHVlO1xuXG4gIHZhciBkYXRhID0gc2hvY2tpbmdVcGRhdGUoeydlbGVjdHJpY19jYXJzJzogdmFsdWV9KTtcblxuICB1cGRhdGVHcmFwaCgnZ3doLWNoYXJ0JywgZGF0YS5nZW5fcHJvZHVjdGlvbik7XG4gIHVwZGF0ZUdyYXBoKCdjbzItY2hhcnQnLCB7XG4gICAgJ0dlb3RoZXJtYWwnOiBkYXRhLmdlbl9lbWlzc2lvbnNbJ0dlb3RoZXJtYWwnXSxcbiAgICAnQ29hbCc6IGRhdGEuZ2VuX2VtaXNzaW9uc1snQ29hbCddLFxuICAgICdHYXMnOiBkYXRhLmdlbl9lbWlzc2lvbnNbJ0dhcyddLFxuICAgICdSb2FkJzogZGF0YS5mbGVldF9lbWlzc2lvbnNbJ1JvYWQnXVxuICB9KTtcbn1cblxuIiwiZnVuY3Rpb24gcHJlcHJvY2Vzc0RhdGEgKGRhdGEsIGRlbHRhKSB7XG4gIC8vIEhvcnJpYmxlIGtsdWRnZSB0byBnZXQgdGhpbmdzIHdvcmtpbmcgZm9yIHByb29mIG9mIGNvbmNlcHQuLi5cbiAgdmFyIHZhbHVlcyA9IFsxXTtcbiAgdmFyIHRvdGFsID0gMDtcbiAgZm9yICh2YXIgayBpbiBkYXRhKSB7XG4gICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSl7XG4gICAgICB0b3RhbCArPSBkYXRhW2tdO1xuICAgICAgdmFsdWVzLnB1c2goZGF0YVtrXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsdGEgcmVwcmVzZW50cyBjaGFuZ2UgaW4gdG90YWwgdmFsdWVcbiAgaWYgKGRlbHRhID4gMCkge1xuICAgIHZhbHVlcy5wdXNoKGRlbHRhKTtcbiAgfVxuXG4gIC8vIE5lZWQgcGVyY2VudCB2YWx1ZXMgZm9yIGNoYXJ0XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzW2ldID0gTWF0aC5yb3VuZCgodmFsdWVzW2ldIC8gdG90YWwpICogMTAwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvdGFsKHByZWZpeCwgZGF0YSkge1xuICB2YXIgdG90YWwgPSAwO1xuICBmb3IgKHZhciBrIGluIGRhdGEpIHtcbiAgICBpZihkYXRhLmhhc093blByb3BlcnR5KGspKXtcbiAgICAgIHRvdGFsICs9IGRhdGFba107XG4gICAgfVxuICB9XG4gIHRvdGFsID0gTWF0aC5yb3VuZCh0b3RhbCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctdG90YWwnKS5pbm5lckhUTUwgPSB0b3RhbDtcblxuICByZXR1cm4gdG90YWw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyYXBoIChiaW5kVG8sIGRhdGEpIHtcbiAgdmFyIHcgPSA4MDtcbiAgdmFyIGggPSAzMDA7XG5cbiAgdmFyIHByZWZpeCA9IGJpbmRUby5zcGxpdCgnLScpWzBdO1xuICB2YXIgb2xkVG90YWwgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyAnLXRvdGFsJykuaW5uZXJIVE1MLCAxMCk7XG4gIHZhciBuZXdUb3RhbCA9IHVwZGF0ZVRvdGFsKHByZWZpeCwgZGF0YSk7XG4gIHZhciBkZWx0YSA9IG9sZFRvdGFsIC0gbmV3VG90YWw7XG5cbiAgLy8gSGFja3k6IHJlbW92ZSBjaGFydCBpZiBpdCBleGlzdHNcbiAgLy8gVE9ETzogdHJhbnNpdGlvbiFcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiaW5kVG8pO1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgdmFyIHN2ZyA9IGQzLnNlbGVjdCgnIycgKyBiaW5kVG8pLmFwcGVuZChcInN2ZzpzdmdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHcpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaCApXG4gICAgLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGggKyBcIilcIik7XG5cbiAgLy8gSWYgZGlmZmVyZW5jZSBiZXR3ZWVuIHRvdGFscyBpcyBwb3NpdGl2ZSwgYW4gYWRkaXRpb25hbCBhcnJheSBlbGVtZW50XG4gIC8vIHdpbGwgYmUgYWRkZWQgdG8gcGFkIHRoZSBjaGFydCBhcyB0aGUgdG90YWwgc2hyaW5rc1xuICB2YXIgbWF0cml4ID0gW3ByZXByb2Nlc3NEYXRhKGRhdGEsIGRlbHRhKV07XG5cbiAgLy8gUmFuZG9tIGZvciBub3dcbiAgdmFyIGNvbG9ycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeFswXS5sZW5ndGggLTE7IGkrKykge1xuICAgIGNvbG9ycy5wdXNoKCdyZ2IoJyArIHJhbmRvbVJHQigpICsgJywnICsgcmFuZG9tUkdCKCkgKyAnLCcgKyByYW5kb21SR0IoKSArICcpJyk7XG5cbiAgICAvLyBQYWRkaW5nIGNvbG91clxuICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgIGNvbG9yc1ttYXRyaXhbMF0ubGVuZ3RoLTFdID0gXCJ3aGl0ZVwiO1xuICAgIH1cbiAgfVxuXG4gIHggPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2VSb3VuZEJhbmRzKFswLCB3XSk7XG4gIHkgPSBkMy5zY2FsZS5saW5lYXIoKS5yYW5nZShbMCwgaF0pO1xuICB6ID0gZDMuc2NhbGUub3JkaW5hbCgpLnJhbmdlKGNvbG9ycyk7XG5cbiAgLy8gQ29wZSB3aXRoIHZhcmlhYmxlIG51bWJlciBvZiBwcm9wZXJ0aWVzLCBmb3Igbm93XG4gIHZhciBhID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbWF0cml4WzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgYS5wdXNoKFwiY1wiICsgaSk7XG4gIH1cbiAgLy92YXIgcmVtYXBwZWQgPSBbXCJjMVwiLFwiYzJcIixcImMzXCIsXCJjNFwiLFwiYzVcIl0ubWFwKGZ1bmN0aW9uKGRhdCxpKXtcbiAgdmFyIHJlbWFwcGVkID0gYS5tYXAoZnVuY3Rpb24oZGF0LGkpe1xuICAgIHJldHVybiBtYXRyaXgubWFwKGZ1bmN0aW9uKGQsaWkpe1xuICAgICAgcmV0dXJuIHt4OiBpaSwgeTogZFtpKzFdIH07XG4gICAgfSlcbiAgfSk7XG5cbiAgdmFyIHN0YWNrZWQgPSBkMy5sYXlvdXQuc3RhY2soKShyZW1hcHBlZClcblxuICB4LmRvbWFpbihzdGFja2VkWzBdLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pKTtcbiAgeS5kb21haW4oWzAsIGQzLm1heChzdGFja2VkW3N0YWNrZWQubGVuZ3RoIC0gMV0sIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTAgKyBkLnk7IH0pXSk7XG5cbiAgdmFyIHZhbGdyb3VwID0gc3ZnLnNlbGVjdEFsbChcImcudmFsZ3JvdXBcIilcbiAgICAuZGF0YShzdGFja2VkKVxuICAgIC5lbnRlcigpLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbGdyb3VwXCIpXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB6KGkpOyB9KVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBkMy5yZ2IoeihpKSkuZGFya2VyKCk7IH0pO1xuXG4gIHZhciByZWN0ID0gdmFsZ3JvdXAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC5kYXRhKGZ1bmN0aW9uKGQpe3JldHVybiBkO30pXG4gICAgLmVudGVyKCkuYXBwZW5kKFwic3ZnOnJlY3RcIilcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkLngpOyB9KVxuICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiAteShkLnkwKSAtIHkoZC55KTsgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQueSk7IH0pXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBNYXRoLm1pbi5hcHBseShudWxsLCBbeC5yYW5nZUJhbmQoKS0yLCAxMDBdKSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVJHQiAoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xufVxuXG5mdW5jdGlvbiBjb2x1bW5HcmFwaCAoYmluZFRvLCB2YWx1ZXMpIHtcbiAgdmFyIHcgPSA4MDtcbiAgdmFyIGggPSAzMDA7XG5cbiAgdmFyIHN2ZyA9IGQzLnNlbGVjdChiaW5kVG8pLmFwcGVuZChcInN2ZzpzdmdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHcpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaCApXG4gICAgLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwzMDApXCIpO1xuXG4gIHZhciBtYXRyaXggPSBbdmFsdWVzXTtcblxuICAvLyBSYW5kb20gZm9yIG5vd1xuICB2YXIgY29sb3JzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4WzBdLmxlbmd0aCAtMTsgaSsrKSB7XG4gICAgY29sb3JzLnB1c2goJ3JnYignICsgcmFuZG9tUkdCKCkgKyAnLCcgKyByYW5kb21SR0IoKSArICcsJyArIHJhbmRvbVJHQigpICsgJyknKTtcbiAgfVxuXG4gIHggPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2VSb3VuZEJhbmRzKFswLCB3XSk7XG4gIHkgPSBkMy5zY2FsZS5saW5lYXIoKS5yYW5nZShbMCwgaF0pO1xuICB6ID0gZDMuc2NhbGUub3JkaW5hbCgpLnJhbmdlKGNvbG9ycyk7XG5cbiAgdmFyIHJlbWFwcGVkID1bXCJjMVwiLFwiYzJcIixcImMzXCIsXCJjNFwiLFwiYzVcIl0ubWFwKGZ1bmN0aW9uKGRhdCxpKXtcbiAgICByZXR1cm4gbWF0cml4Lm1hcChmdW5jdGlvbihkLGlpKXtcbiAgICAgIHJldHVybiB7eDogaWksIHk6IGRbaSsxXSB9O1xuICAgIH0pXG4gIH0pO1xuXG4gIHZhciBzdGFja2VkID0gZDMubGF5b3V0LnN0YWNrKCkocmVtYXBwZWQpO1xuXG4gIHguZG9tYWluKHN0YWNrZWRbMF0ubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkpO1xuICB5LmRvbWFpbihbMCwgZDMubWF4KHN0YWNrZWRbc3RhY2tlZC5sZW5ndGggLSAxXSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55MCArIGQueTsgfSldKTtcblxuICB2YXIgdmFsZ3JvdXAgPSBzdmcuc2VsZWN0QWxsKFwiZy52YWxncm91cFwiKVxuICAgIC5kYXRhKHN0YWNrZWQpXG4gICAgLmVudGVyKCkuYXBwZW5kKFwic3ZnOmdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsZ3JvdXBcIilcbiAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHooaSk7IH0pXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGQzLnJnYih6KGkpKS5kYXJrZXIoKTsgfSk7XG5cbiAgdmFyIHJlY3QgPSB2YWxncm91cC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgLmRhdGEoZnVuY3Rpb24oZCl7cmV0dXJuIGQ7fSlcbiAgICAuZW50ZXIoKS5hcHBlbmQoXCJzdmc6cmVjdFwiKVxuICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4KGQueCk7IH0pXG4gICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIC15KGQueTApIC0geShkLnkpOyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC55KTsgfSlcbiAgICAuYXR0cihcIndpZHRoXCIsIE1hdGgubWluLmFwcGx5KG51bGwsIFt4LnJhbmdlQmFuZCgpLTIsIDEwMF0pKTtcbn1cblxuIiwiLy8gcmVmZXJlbmNlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xcmpaWmcxOWdINFNUM1hGZlBhVW12Z0M5MEFDS2dSdzh4LU1nb296a0xmSS9lZGl0I2dpZD0wXG5cblxuZnVuY3Rpb24gc2hvY2tpbmdVcGRhdGUoaW5wdXRzKSB7XG5cblx0Y29uc29sZS5sb2coXCJzaG9ja2luZ1VwZGF0ZSAtIElucHV0czogXCIgKyBKU09OLnN0cmluZ2lmeShpbnB1dHMpKTtcblxuXHQvL3ZhciBiYXNlbGluZSA9IGdldEJhc2VsaW5lKCk7XG5cblx0Ly8gYW5udWFsIGdlbmVyYXRpb24gaW4gR2lnYXdhdHQgSG91cnNcblx0dmFyIGdlbl9wcm9kdWN0aW9uID0ge1xuXHRcdCdIeWRybyc6IDI0MDk1LFxuXHRcdCdHZW90aGVybWFsJzogNjQ4Nyxcblx0XHQnV2luZCc6IDIxODcsXG5cdFx0J0NvYWwnOiAxODMyLFxuXHRcdCdHYXMnOiA2NjI2XG5cdH1cblxuXHQvLyBhbm51YWwgZ2VuZXJhdGlvbiBlbWlzc2lvbnMgaW4gS2lsb3RvbnMgb2YgQ08yIEVxdWl2YWxlbnRcblx0dmFyIGdlbl9lbWlzc2lvbnMgPSB7XG5cdFx0J0h5ZHJvJzogMCxcblx0XHQnR2VvdGhlcm1hbCc6IDg0Ny4zMixcblx0XHQnV2luZCc6IDAsXG5cdFx0J0NvYWwnOiAxMjIyLjIsXG5cdFx0J0dhcyc6IDM0MDUuNTFcblx0fVxuXG5cdC8vIGFubnVhbCBnZW5lcmF0aW9uIGNvc3RzIGluIC4uLj9cblx0Ly8gVE9ETzogd2FpdGluZyBmb3IgdGhlIGFjdHVhbCBudW1iZXJzXG5cdHZhciBnZW5fY29zdCA9IHtcblx0XHQnSHlkcm8nOiAxMDAsXG5cdFx0J0dlb3RoZXJtYWwnOiAxNTAsXG5cdFx0J1dpbmQnOiAyMDAsXG5cdFx0J0NvYWwnOiAyNTAsXG5cdFx0J0dhcyc6IDMwMFxuXHR9XG5cblxuXHQvLyBhbm51YWwgdmVoaWNsZSBmbGVldCBlbWlzc2lvbnMgaW4gS2lsb3RvbnMgb2YgQ08yIEVxdWl2YWxlbnRcblx0dmFyIGZsZWV0X2VtaXNzaW9ucyA9IHtcblx0XHQnUm9hZCc6IDEyNjg4XG5cdH1cbiBcblx0Ly8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0Ly8gQnVzaW5lc3MgbG9naWNcblx0Ly8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XG5cdC8vIFsxXSBFbGVjdHJpYyBjYXJzXG5cdC8vIEFTU1VNUFRJT046IHRoZXJlIGFyZSBlc3NlbnRpYWxseSAwIGVsZWN0cmljIGNhcnMgaW4gdGhlIGN1cnJlbnQgZmxlZXRcblx0dmFyIGVsZWN0cmljX2NhcnMgPSBpbnB1dHNbJ2VsZWN0cmljX2NhcnMnXTtcblx0dmFyIGVsZWN0cmljX3BjdCA9IGVsZWN0cmljX2NhcnMvMTAwO1xuXG5cdGZsZWV0X2VtaXNzaW9uc1snUm9hZCddID0gZmxlZXRfZW1pc3Npb25zWydSb2FkJ10gKiAoMS1lbGVjdHJpY19wY3QpO1xuXG5cdC8vIEFTU1VNUFRJT046IGFueSB1cHRpY2sgaW4gcG93ZXIgZ2VuZXJhdGlvbiByZXF1aXJlZCB0byBtZWV0XG5cdC8vIGVsZWN0cmljIGNhciBkZW1hbmQsIHdpbGwgYmUgbWV0IHByb3BvcnRpb25hbGx5IGJ5IGFsbCBnZW5lcmF0aW9uIHNvdXJjZXNcblx0Ly8gQVNTVU1QVElPTjogdHlwaWNhbCBFViB3aWxsIHVzZSAwLjIga1doIGZvciAxIGttIHRyYXZlbGxlZFxuXHQvLyBhdmVyYWdlIHRyYXZlbCBpcyAxMjAzMiBrbSBwZXIgeWVhclxuXHQvLyBmbGVldCBzaXplIGlzIDMzNDEwMTNcblx0ZXZfcG93ZXJfcmVxdHMgPSAxMjAzMiAqIDAuMiAqIDMzNDEwMTMgKiBlbGVjdHJpY19wY3Q7XG5cdFxuXHQvLyBjb252ZXJ0IGt3aCB0byBnd2hcblx0ZXZfcG93ZXJfcmVxdHMgPSBldl9wb3dlcl9yZXF0cyAvIDEwMDAwMDA7XG5cblx0Ly8gd29yayBvdXQgdG90YWwgY3VycmVudCBnZW5lcmF0aW9uXG5cdHZhciB0b3RhbF9nZW4gPSAwO1xuXHRmb3IgKHZhciBrZXkgaW4gZ2VuX3Byb2R1Y3Rpb24pIHtcblx0XHR0b3RhbF9nZW4gKz0gZ2VuX3Byb2R1Y3Rpb25ba2V5XTtcblx0fVxuXG5cdHZhciBpbmNyZWFzZV9pbl9wb3dlcl9yZXF0cyA9IDEgKyAoZXZfcG93ZXJfcmVxdHMgLyB0b3RhbF9nZW4pO1xuXHRjb25zb2xlLmxvZygndG90YWw6ICcgKyB0b3RhbF9nZW4pO1xuXHRjb25zb2xlLmxvZygnaW5jcmVhc2UgZnJvbSBlbGVjdHJpYyB2ZWhpY2xlczogJyArIGluY3JlYXNlX2luX3Bvd2VyX3JlcXRzKTtcblxuXHRjb25zb2xlLmxvZygnZXZfcG93ZXJfcmVxdHMgJyArIGV2X3Bvd2VyX3JlcXRzKTtcblxuXHRmb3IgKHZhciBrZXkgaW4gZ2VuX2VtaXNzaW9ucykge1xuXHRcdGdlbl9lbWlzc2lvbnNba2V5XSA9IGdlbl9lbWlzc2lvbnNba2V5XSAqIGluY3JlYXNlX2luX3Bvd2VyX3JlcXRzO1xuXHR9XG5cblx0Ly8gYXBwbHkgdGhlIGZhY3RvciB0byB0aGUgcHJvZHVjdGlvblxuXHRmb3IgKHZhciBrZXkgaW4gZ2VuX3Byb2R1Y3Rpb24pIHtcblx0XHRnZW5fcHJvZHVjdGlvbltrZXldID0gZ2VuX3Byb2R1Y3Rpb25ba2V5XSAqIGluY3JlYXNlX2luX3Bvd2VyX3JlcXRzO1xuXHR9XG5cblx0Ly8gbm93IGFwcGx5IHRoYXQgZmFjdG9yIHRvIHRoZSBlbWlzc2lvbnMgLSBlbWlzc2lvbnMgZnJvbSBFViBwb3dlciByZXF1aXJlbWVudHNcblx0Zm9yICh2YXIga2V5IGluIGdlbl9lbWlzc2lvbnMpIHtcblx0XHRnZW5fZW1pc3Npb25zW2tleV0gPSBnZW5fZW1pc3Npb25zW2tleV0gKiBpbmNyZWFzZV9pbl9wb3dlcl9yZXF0cztcblx0fVxuXG5cdC8vIGFsc28gYXBwbHkgdGhlIHNhbWUgZmFjdG9yIHRvIHRoZSBnZW5lcmF0aW9uIGNvc3Rcblx0Zm9yICh2YXIga2V5IGluIGdlbl9jb3N0KSB7XG5cdFx0Z2VuX2Nvc3Rba2V5XSA9IGdlbl9jb3N0W2tleV0gKiBpbmNyZWFzZV9pbl9wb3dlcl9yZXF0cztcblx0fVxuXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdC8vIE91dHB1dFxuXHQvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHR2YXIgcmVzdWx0ID0ge1xuXHRcdCdnZW5fcHJvZHVjdGlvbic6IGdlbl9wcm9kdWN0aW9uLFxuXHRcdCdnZW5fZW1pc3Npb25zJzogZ2VuX2VtaXNzaW9ucyxcblx0XHQnZ2VuX2Nvc3QnOiBnZW5fY29zdCxcblx0XHQnZmxlZXRfZW1pc3Npb25zJzogZmxlZXRfZW1pc3Npb25zXG5cdH1cblxuXHRjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGdldEJhc2VsaW5lKCkge1xuXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdC8vIEJhc2VsaW5lIGRhdGEgOiAyMDEzLzIwMTRcblx0Ly8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXHQvLyBhbm51YWwgZ2VuZXJhdGlvbiBpbiBHaWdhd2F0dCBIb3Vyc1xuXHR2YXIgZ2VuX3Byb2R1Y3Rpb24gPSB7XG5cdFx0J0h5ZHJvJzogMjQwOTUsXG5cdFx0J0dlb3RoZXJtYWwnOiA2NDg3LFxuXHRcdCdXaW5kJzogMjE4Nyxcblx0XHQnQ29hbCc6IDE4MzIsXG5cdFx0J0dhcyc6IDY2MjZcblx0fVxuXG5cdC8vIGFubnVhbCBnZW5lcmF0aW9uIGVtaXNzaW9ucyBpbiBLaWxvdG9ucyBvZiBDTzIgRXF1aXZhbGVudFxuXHR2YXIgZ2VuX2VtaXNzaW9ucyA9IHtcblx0XHQnSHlkcm8nOiAwLFxuXHRcdCdHZW90aGVybWFsJzogODQ3LjMyLFxuXHRcdCdXaW5kJzogMCxcblx0XHQnQ29hbCc6IDEyMjIuMixcblx0XHQnR2FzJzogMzQwNS41MVxuXHR9XG5cblx0Ly8gYW5udWFsIGdlbmVyYXRpb24gY29zdHMgaW4gLi4uP1xuXHQvLyBUT0RPOiB3YWl0aW5nIGZvciB0aGUgYWN0dWFsIG51bWJlcnNcblx0dmFyIGdlbl9jb3N0ID0ge1xuXHRcdCdIeWRybyc6IDEwMCxcblx0XHQnR2VvdGhlcm1hbCc6IDE1MCxcblx0XHQnV2luZCc6IDIwMCxcblx0XHQnQ29hbCc6IDI1MCxcblx0XHQnR2FzJzogMzAwXG5cdH1cblxuXHR2YXIgcmVzdWx0ID0ge1xuXHRcdCdnZW5fcHJvZHVjdGlvbic6IGdlbl9wcm9kdWN0aW9uLFxuXHRcdCdnZW5fZW1pc3Npb25zJzogZ2VuX2VtaXNzaW9ucyxcblx0XHQnZ2VuX2Nvc3QnOiBnZW5fY29zdCxcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG4iLCJmdW5jdGlvbiBtb2NrR1doICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnSHlkcm8nOiAyNDA5NSxcblx0XHQnR2VvdGhlcm1hbCc6IDY0ODcsXG5cdFx0J1dpbmQnOiAyMTg3LFxuXHRcdCdDb2FsJzogMTgzMixcblx0XHQnR2FzJzogNjYyNlxuXHR9O1xufVxuXG5mdW5jdGlvbiBtb2NrQWRqdXN0R1doICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnSHlkcm8nOiAyNCxcblx0XHQnR2VvdGhlcm1hbCc6IDY0OCxcblx0XHQnV2luZCc6IDEyMTgsXG5cdFx0J0NvYWwnOiA4MzIsXG5cdFx0J0dhcyc6IDM2MlxuXHR9O1xufVxuXG5mdW5jdGlvbiBtb2NrR2VuZXJhdGlvbkVtaXNzaW9ucyAoKSB7XG4gIHJldHVybiB7XG5cdFx0J0h5ZHJvJzogMCxcblx0XHQnR2VvdGhlcm1hbCc6IDg0Ny4zMixcblx0XHQnV2luZCc6IDAsXG5cdFx0J0NvYWwnOiAxMjIyLjIsXG5cdFx0J0dhcyc6IDM0MDUuNTFcblx0fTtcbn1cblxuZnVuY3Rpb24gbW9ja0ZsZWV0RW1pc3Npb25zICgpIHtcbiAgcmV0dXJuIHtcblx0XHQnUm9hZCc6IDEyNjg4XG5cdH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=