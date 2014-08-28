
$(document).ready(function() {
	var map;
	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});

	var baseMaps = {
	    "Stamen Toner": baseLayer
	};

	map = L.map('map', {
		layers: [baseLayer]
	}).setView([0.0, 0.0], 2);

	var incomeLevelTypes = ['OEC', 'NOC', 'UMC', 'MIC', 'LMC', 'LIC', 'HPC'];
	var valueArray = [{"id":"HIC","value":"High income"},{"id":"HPC","value":"Heavily indebted poor countries (HIPC)"},{"id":"INX","value":"Not classified"},{"id":"LIC","value":"Low income"},{"id":"LMC","value":"Lower middle income"},{"id":"LMY","value":"Low & middle income"},{"id":"MIC","value":"Middle income"},{"id":"NOC","value":"High income: nonOECD"},{"id":"OEC","value":"High income: OECD"},{"id":"UMC","value":"Upper middle income"}];
	var getMap = function (valueArray) {
		var map = {};
		for (var index = 0; index < valueArray.length; ++index) {
			var value = valueArray[index];

			map[value['id']] = value['value'];
		}
		return map;
	};

	var valueMap = getMap(valueArray);

	var incomeLevelToText = function (value) {
		return valueMap[incomeLevelTypes[value]];
	};

	var colorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.2), new L.Point(incomeLevelTypes.length - 1, 0.75), {outputHue: 0, outputLuminosity: '100%'});
	var fillColorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 1), {outputHue: 0, outputLuminosity: '100%'});

	var colorFunction1 = new L.HSLHueFunction(new L.Point(0, 240), new L.Point(incomeLevelTypes.length - 1, 0), {outputSaturation: '100%', outputLuminosity: '25%'});
	var fillColorFunction1 = new L.HSLHueFunction(new L.Point(0, 240), new L.Point(incomeLevelTypes.length - 1, 0), {outputSaturation: '100%', outputLuminosity: '50%'});

	var colorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 0.1), {outputHue: 27, outputLuminosity: '100%'});
	var fillColorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 0.2), {outputHue: 27, outputLuminosity: '100%'});

	var styles = new L.StylesBuilder(incomeLevelTypes, {
		displayName: incomeLevelToText,
		color: colorFunction1,
		fillColor: fillColorFunction1
	});

	var options = {
		recordsField: '1',
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'id',
		displayOptions: {
			'incomeLevel.id': {
				displayName: 'Income Level',
				styles: styles.getStyles()
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(100,65),
			iconAnchor: new L.Point(-5,65)
		},

		onEachRecord: function (layer, record) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(), {
				maxWidth: 400,
				minWidth: 400
			});
		}
	};

	var incomeLayer = new L.ChoroplethDataLayer(incomeLevels, options);

	map.addLayer(incomeLayer);

	$('#legend').append(incomeLayer.getLegend({
		className: 'well'
	}));

	var colorFunction = new L.HSLHueFunction(new L.Point(0,90), new L.Point(300000000,0), {outputSaturation: '100%', outputLuminosity: '30%'});
	var fillColorFunction = new L.HSLHueFunction(new L.Point(0,90), new L.Point(300000000,0));

	options = {
		recordsField: null,
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'CountryCode',
		displayOptions: {
			'2010': {
				displayName: 'Telephone Lines',
				color: colorFunction,
				fillColor: fillColorFunction
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(100,65),
			iconAnchor: new L.Point(-5,65)
		},

		onEachRecord: function (layer, record) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(), {
				maxWidth: 400,
				minWidth: 400
			});
		}
	};
	var telephoneLinesLayer = new L.ChoroplethDataLayer(telephoneLines, options);

	$('#legend').append(telephoneLinesLayer.getLegend({
		className: 'well'
	}));

	var categories = ['1995','2000','2005','2010'];
	var fillColorFunctionBars = new L.HSLLuminosityFunction(new L.Point(0,0.5), new L.Point(categories.length - 1,1), {outputHue: 0, outputSaturation: '100%'});
	var styleFunction = new L.StylesBuilder(categories,{
		displayName: function (index) {
			return categories[index];
		},
		color: 'hsl(0,100%,20%)',
		fillColor: fillColorFunctionBars,
		minValue: 0,
		maxValue: 20000000//300000000
	});

	options = {
		recordsField: null,
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'CountryCode',
		chartOptions: styleFunction.getStyles(),
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1,
			width: 6
		},
		tooltipOptions: {
			iconSize: new L.Point(100,65),
			iconAnchor: new L.Point(-5,65)
		},

		onEachRecord: function (layer, record) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(), {
				maxWidth: 400,
				minWidth: 400
			});
		}
	};

	var telephoneLinesBarChart = new L.BarChartDataLayer(telephoneLines, options);

	$('#legend').append(telephoneLinesBarChart.getLegend({
		className: 'well',
		title: 'Telephone Lines'
	}));

	var sfFillColorFunction = new L.HSLSaturationFunction(new L.Point(0,0.1), new L.Point(100,1), {outputHue: 220, outputLuminosity: '50%'});
	var radiusFunction = new L.LinearFunction(new L.Point(0,2), new L.Point(100,10));

	options = {
		recordsField: null,
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'CountryCode',
		displayOptions: {
			'2010': {
				displayName: 'Solid Fuel Use (%)',
				fillColor: sfFillColorFunction,
				radius: radiusFunction
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1,
			color: 'hsl(220,100%,25%)',
			numberOfSides: 40,
			dropShadow: true,
			gradient: true
		},
		tooltipOptions: {
			iconSize: new L.Point(100,65),
			iconAnchor: new L.Point(-5,65)
		},

		onEachRecord: function (layer, record) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(), {
				maxWidth: 400,
				minWidth: 400
			});
		}
	};
	var solidFuelLayer = new L.DataLayer(solidFuels, options);

	$('#legend').append(solidFuelLayer.getLegend({
		className: 'well'
	}));

	var overlays = {
		"Income Levels": incomeLayer,
		"Telephone Lines": telephoneLinesLayer,
		"Telephone Lines by Year": telephoneLinesBarChart,
		"Solid Fuel Use": solidFuelLayer
	};

	L.control.layers(baseMaps, overlays).addTo(map);
});
