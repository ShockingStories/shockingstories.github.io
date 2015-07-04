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

  var stacked = d3.layout.stack()(remapped)

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

function updateGraph (bindTo, values) {
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

  var stacked = d3.layout.stack()(remapped)

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

function randomRGB () {
  return Math.floor(Math.random() * 256);
}