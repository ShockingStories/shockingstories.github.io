// reference: https://docs.google.com/spreadsheets/d/1rjZZg19gH4ST3XFfPaUmvgC90ACKgRw8x-MgoozkLfI/edit#gid=0


function shockingUpdate(inputs) {

	console.log("shockingUpdate - Inputs: " + JSON.stringify(inputs));

	//var baseline = getBaseline();

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

	// annual generation costs in ...?
	// TODO: waiting for the actual numbers
	var gen_cost = {
		'Hydro': 100,
		'Geothermal': 150,
		'Wind': 200,
		'Coal': 250,
		'Gas': 300
	}


	// annual vehicle fleet emissions in Kilotons of CO2 Equivalent
	var fleet_emissions = {
		'Road': 12688
	}
 
	// ********************************************
	// Business logic
	// ********************************************
	
	// [1] Electric cars
	// ASSUMPTION: there are essentially 0 electric cars in the current fleet
	var electric_cars = inputs['electric_cars'];
	var electric_pct = electric_cars/100;

	fleet_emissions['Road'] = fleet_emissions['Road'] * (1-electric_pct);

	// ASSUMPTION: any uptick in power generation required to meet
	// electric car demand, will be met proportionally by all generation sources
	// ASSUMPTION: typical EV will use 0.2 kWh for 1 km travelled
	// average travel is 12032 km per year
	// fleet size is 3341013
	ev_power_reqts = 12032 * 0.2 * 3341013 * electric_pct;
	
	// convert kwh to gwh
	ev_power_reqts = ev_power_reqts / 1000000;

	// work out total current generation
	var total_gen = 0;
	for (var key in gen_production) {
		total_gen += gen_production[key];
	}

	var increase_in_power_reqts = 1 + (ev_power_reqts / total_gen);
	console.log('total: ' + total_gen);
	console.log('increase from electric vehicles: ' + increase_in_power_reqts);

	console.log('ev_power_reqts ' + ev_power_reqts);

	for (var key in gen_emissions) {
		gen_emissions[key] = gen_emissions[key] * increase_in_power_reqts;
	}

	// apply the factor to the production
	for (var key in gen_production) {
		gen_production[key] = gen_production[key] * increase_in_power_reqts;
	}

	// now apply that factor to the emissions - emissions from EV power requirements
	for (var key in gen_emissions) {
		gen_emissions[key] = gen_emissions[key] * increase_in_power_reqts;
	}

	// also apply the same factor to the generation cost
	for (var key in gen_cost) {
		gen_cost[key] = gen_cost[key] * increase_in_power_reqts;
	}

	// ********************************************
	// Output
	// ********************************************
	var result = {
		'gen_production': gen_production,
		'gen_emissions': gen_emissions,
		'gen_cost': gen_cost,
		'fleet_emissions': fleet_emissions
	}

	console.log("Result: " + JSON.stringify(result));

	return result;
}


function getBaseline() {

	// ********************************************
	// Baseline data : 2013/2014
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

	// annual generation costs in ...?
	// TODO: waiting for the actual numbers
	var gen_cost = {
		'Hydro': 100,
		'Geothermal': 150,
		'Wind': 200,
		'Coal': 250,
		'Gas': 300
	}

	var result = {
		'gen_production': gen_production,
		'gen_emissions': gen_emissions,
		'gen_cost': gen_cost,
	}

	return result;
}
