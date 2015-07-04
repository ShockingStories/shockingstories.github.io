document.addEventListener("DOMContentLoaded", function(event) {
  columnGraph("#co2-chart", [
    1, 10, 20, 20, 25, 50
  ]);
  updateGraph('#gwh-chart', mockGWh());
  //columnGraph("#gwh-chart", [
    //1, 10, 15, 20, 30, 50
  //]);
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
  updateGraph('#gwh-chart', mockAdjustGWh()); 
}

