// reference: https://docs.google.com/spreadsheets/d/1rjZZg19gH4ST3XFfPaUmvgC90ACKgRw8x-MgoozkLfI/edit#gid=0


function shockingUpdate(inputs) {

	var baseline         = getBaseline();
	var gen_production   = baseline['gen_production'];
	var gen_emissions    = baseline['gen_emissions'];
	var gen_cost         = baseline['gen_cost'];
	var gen_capital_cost = {};

	// annual vehicle fleet emissions in Kilotons of CO2 Equivalent
	var fleet_emissions = {
		'Road': 12688
	}
 
	// ********************************************
	// Business logic
	// ********************************************
	
	// -----------------
	// [1] Electric cars
	// -----------------

	// ASSUMPTION: there are essentially 0 electric cars in the current fleet
	var electric_cars = inputs['carNumber'];
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

	// -----------------
	// [2] Solar Houses
	// -----------------
	var solar_houses = inputs['solarNumber'];

	// ASSUMPTION - each household generates 5260 KWh per year
	var solar_production = solar_houses * 5260;
	// convert to Gwh
	solar_production = solar_production / 1000000;

	// reduce proportionally all the other production and emissions
	var decrease_due_to_solar = solar_production / total_gen;
	increase_in_power_reqts -= decrease_due_to_solar;

	// ----------
	// [3] Wind
	// ----------
	////var new_wind = inputs['windNumber'];
	
	// Based on: Each new wind farm is 200W; 702 GWh per annum;
	// capital cost of $521,344,918
	
	// first the capital cost, that's easy:
	////gen_capital_cost['Wind'] = new_wind * 521344918;

	// new wind capacity
	////var new_wind_capacity = new_wind * 702;
	// new wind capacity gives us associated production, emissions, and running costs

	/*if (new_wind > 0) {
		var new_wind_ratio = new_wind_capacity / gen_production['Wind'];
	}

	gen_production['Wind'] += new_wind_capacity; */

	// TODO: finally reduce the other (hopefully less polluting) generation


	// apply the factor to the production
	for (var key in gen_production) {
		gen_production[key] = gen_production[key] * increase_in_power_reqts;
	}

	// now add in the solar
	gen_production['Solar'] = solar_production;

	for (var key in gen_emissions) {
		gen_emissions[key] = gen_emissions[key] * increase_in_power_reqts;
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
		'gen_capital_cost': gen_capital_cost,
		'fleet_emissions': fleet_emissions
	}

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
		'Gas': 6626,
    'Solar': 0
	}

	// annual generation emissions in Kilotons of CO2 Equivalent
	var gen_emissions = {
		'Hydro': 0,
		'Geothermal': 847.32,
		'Wind': 0,
		'Coal': 1222.2,
		'Gas': 3405.51
	}

	// annual generation costs in $NZ per year (I think)
	var gen_cost = {
		'Hydro': 53872180,
		'Geothermal': 59535000,
		'Wind': 43484000,
		'Coal': 34177200,
		'Gas': 161044192
	}

	var result = {
		'gen_production': gen_production,
		'gen_emissions': gen_emissions,
		'gen_cost': gen_cost,
	}

	return result;
}


