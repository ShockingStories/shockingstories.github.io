document.addEventListener("DOMContentLoaded", function(event) {
  updateCars(0);
  columnGraph("#cost-chart", [
    1, 10, 15, 15, 35, 50
  ]);
  columnGraph("#investment-chart", [
    1, 5, 10, 15, 45, 50
  ]);
});


function updateCars (value) {
  document.getElementById('carNumber').value = value;
  document.getElementById('carRange').value = value;

  var data = shockingUpdate({'electric_cars': value});

  updateGraph('gwh-chart', data.gen_production);
  updateGraph('co2-chart', {
    'Geothermal': data.gen_emissions['Geothermal'],
    'Coal': data.gen_emissions['Coal'],
    'Gas': data.gen_emissions['Gas'],
    'Road': data.fleet_emissions['Road']
  });
}
