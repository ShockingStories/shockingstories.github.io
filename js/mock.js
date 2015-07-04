function mockGWh () {
  return {
		'Hydro': 24095,
		'Geothermal': 6487,
		'Wind': 2187,
		'Coal': 1832,
		'Gas': 6626
	};
}

function mockAdjustGWh () {
  return {
		'Hydro': 24,
		'Geothermal': 648,
		'Wind': 1218,
		'Coal': 832,
		'Gas': 362
	};
}

function mockGenerationEmissions () {
  return {
		'Hydro': 0,
		'Geothermal': 847.32,
		'Wind': 0,
		'Coal': 1222.2,
		'Gas': 3405.51
	};
}

function mockFleetEmissions () {
  return {
		'Road': 12688
	};
}
