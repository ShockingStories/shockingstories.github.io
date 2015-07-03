document.addEventListener("DOMContentLoaded", function(event) {
  var circleRadii = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  var svgContainer = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var circles = svgContainer.selectAll("circle")
    .data(circleRadii)
    .enter()
    .append("circle");
  var circleAttributes = circles
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", function (d) { return d; })
    .style("fill", function (d) {
      return "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
    });

  d3.select("#slider").call(
    d3.slider()
      .value( [ 100, 90, 80, 70, 60, 50, 40, 30, 20, 10 ])
      .orientation('vertical')
  );
});

function randomRGB () {
  return Math.floor(Math.random() * 256);
}
