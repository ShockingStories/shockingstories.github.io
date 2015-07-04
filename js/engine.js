//
var input_test = {
	// % of electric cars
	'electric_cars': 1
}


function shockingUpdate(inputs) {

	// ********************************************
	// Baseline data 
	// ********************************************

	// annual generation in Gigawatt Hours
	var gen_production = {
		'Hydro': 24095,
		'Geothermal': 6487,
		'Wind': 2187,
		'Coal': 1832,
		'Gas': 6626
	}

	// annual generation emissions in Kilotons of CO2 Equivalent
	var gen_emissions = {
		'Hydro': 0,
		'Geothermal': 847.32,
		'Wind': 0,
		'Coal': 1222.2,
		'Gas': 3405.51
	}

	// annual vehicle fleet emissions in Kilotons of CO2 Equivalent
	var fleet_emissions = {
		'Road': 12688
	}
 
	// ********************************************
	// Business logic
	// ********************************************

	// TODO

	var result = {
		'gen_production': gen_production,
		'gen_emissions': gen_emissions,
		'fleet_emissions': fleet_emissions
	}

	console.log("Result: " + JSON.stringify(result));

	return result;
}
