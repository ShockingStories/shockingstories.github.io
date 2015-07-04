// Get things working for proof of concept:
// convert data object to array
function preprocessData (data, delta) {
  var values = [1];
  var total = 0;
  for (var k in data) {
    if(data.hasOwnProperty(k)){
      total += data[k];
      values.push(data[k]);
    }
  }

  // delta represents difference from original total value
  if (delta > 0) {
    values.push(delta);
  }

  // Need percent values for chart
  for (var i = 1; i < values.length; i++) {
    values[i] = Math.round((values[i] / total) * 100);
  }

  return values;
}

function updateTotal(totalId, data) {
  var total = 0;
  for (var k in data) {
    if(data.hasOwnProperty(k)){
      total += data[k];
    }
  }
  total = Math.round(total);
  document.getElementById(totalId).innerHTML = total;

  return total;
}

function assignColors(prefix, delta) {
  var colors = [];

  switch (prefix) {
    case 'co2':
      // Order matters, sadly
      colors.push('#ff9900'); // Geothermal
      colors.push('#999999'); // Coal
      colors.push('#f3f3f3'); // Gas
      colors.push('#34495e'); // Road
      break;

    case 'gwh':
      colors.push('#6d9eeb'); // Hydro
      colors.push('#ff9900'); // Geothermal
      colors.push('#c9daf8'); // Wind
      colors.push('#999999'); // Coal
      colors.push('#f3f3f3'); // Gas
      colors.push('#ffd966'); // Solar
      break;

    case 'cost':
      colors.push('#6d9eeb'); // Hydro
      colors.push('#ff9900'); // Geothermal
      colors.push('#c9daf8'); // Wind
      colors.push('#999999'); // Coal
      colors.push('#f3f3f3'); // Gas
      break;

    case 'investment':
      break;
  }

  // Padding colour
  if (delta > 0) {
    colors.push('none');
  }

  return colors;
}

function updateGraph (bindTo, data) {
  var w = 80;
  var h = 300;

  var prefix = bindTo.split('-')[0];
  var totalId = prefix + '-total';
  var newTotal = updateTotal(totalId, data);

  // Store as global for the life of the document
  if (!totals[totalId]) {
    totals[totalId] = parseInt(document.getElementById(totalId).innerHTML, 10);
  }
  var delta = totals[totalId] - newTotal;

  // Hacky: remove chart if it exists
  // TODO: transition!
  var element = document.getElementById(bindTo);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  var svg = d3.select('#' + bindTo).append("svg:svg")
    .attr("class", "chart")
    .attr("width", w)
    .attr("height", h )
    .append("svg:g")
    .attr("transform", "translate(0," + h + ")");

  // If difference between totals is positive, an additional array element
  // will be added to pad the chart as the total shrinks
  var matrix = [preprocessData(data, delta)];
  var colors = assignColors(prefix, delta);

  x = d3.scale.ordinal().rangeRoundBands([0, w]);
  y = d3.scale.linear().range([0, h]);
  z = d3.scale.ordinal().range(colors);

  // Cope with variable number of properties, for now
  var a = [];
  for (var i = 1; i < matrix[0].length; i++) {
    a.push("c" + i);
  }
  //var remapped = ["c1","c2","c3","c4","c5"].map(function(dat,i){
  var remapped = a.map(function(dat,i){
    return matrix.map(function(d,ii){
      return {x: ii, y: d[i+1] };
    })
  });

  var stacked = d3.layout.stack()(remapped)

  x.domain(stacked[0].map(function(d) { return d.x; }));
  y.domain([0, d3.max(stacked[stacked.length - 1], function(d) { return d.y0 + d.y; })]);

  var valgroup = svg.selectAll("g.valgroup")
    .data(stacked)
    .enter().append("svg:g")
    .attr("class", "valgroup")
    .style("fill", function(d, i) { return z(i); })
    .style("stroke", function(d, i) { 
      if (z(i) !== 'none') {
        return d3.rgb(z(i)).darker();
      }
      return 'none';
    });

  var rect = valgroup.selectAll("rect")
    .data(function(d){return d;})
    .enter().append("svg:rect")
    .attr("x", function(d) { return x(d.x); })
    .attr("y", function(d) { return -y(d.y0) - y(d.y); })
    .attr("height", function(d) { return y(d.y); })
    .attr("width", Math.min.apply(null, [x.rangeBand()-2, 100]));
}

function randomRGB () {
  return Math.floor(Math.random() * 256);
}

function columnGraph (bindTo, values) {
  var w = 80;
  var h = 300;

  var svg = d3.select(bindTo).append("svg:svg")
    .attr("class", "chart")
    .attr("width", w)
    .attr("height", h )
    .append("svg:g")
    .attr("transform", "translate(0,300)");

  var matrix = [values];

  // Random for now
  var colors = [];
  for (var i = 0; i < matrix[0].length -1; i++) {
    colors.push('rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')');
  }

  x = d3.scale.ordinal().rangeRoundBands([0, w]);
  y = d3.scale.linear().range([0, h]);
  z = d3.scale.ordinal().range(colors);

  var remapped =["c1","c2","c3","c4","c5"].map(function(dat,i){
    return matrix.map(function(d,ii){
      return {x: ii, y: d[i+1] };
    })
  });

  var stacked = d3.layout.stack()(remapped);

  x.domain(stacked[0].map(function(d) { return d.x; }));
  y.domain([0, d3.max(stacked[stacked.length - 1], function(d) { return d.y0 + d.y; })]);

  var valgroup = svg.selectAll("g.valgroup")
    .data(stacked)
    .enter().append("svg:g")
    .attr("class", "valgroup")
    .style("fill", function(d, i) { return z(i); })
    .style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });

  var rect = valgroup.selectAll("rect")
    .data(function(d){return d;})
    .enter().append("svg:rect")
    .attr("x", function(d) { return x(d.x); })
    .attr("y", function(d) { return -y(d.y0) - y(d.y); })
    .attr("height", function(d) { return y(d.y); })
    .attr("width", Math.min.apply(null, [x.rangeBand()-2, 100]));
}

