map = null;
var lastLayer;
var legendControl;

// JSONP callback function for displaying the latest earthquake data
var eqfeed_callback = function (data) {

	// Initialize framework linear functions for mapping earthquake data properties to Leaflet style properties
	// Color scale - green to red using the basic HSLHueFunction
	var magnitudeColorFunction = new L.HSLHueFunction(new L.Point(0,90), new L.Point(10,0), {outputSaturation: '100%', outputLuminosity: '25%'});
	var magnitudeFillColorFunction = new L.HSLHueFunction(new L.Point(0,90), new L.Point(10,0), {outputSaturation: '100%', outputLuminosity: '50%'});
	var magnitudeRadiusFunction = new L.LinearFunction(new L.Point(0,10), new L.Point(10,30));

	// Color scale - white to orange to red using a PiecewiseFunction
	// NOTE:  Uncomment these lines to see the difference
	/*
	var magnitudeColorFunction = new L.PiecewiseFunction([
		new L.HSLLuminosityFunction(new L.Point(0,0.8), new L.Point(4,0.3), {outputSaturation: '100%', outputHue: 30}),
		new L.HSLHueFunction(new L.Point(4,30), new L.Point(10,0), {outputLuminosity: '30%'})
	]);

	var magnitudeFillColorFunction = new L.PiecewiseFunction([
		new L.HSLLuminosityFunction(new L.Point(0,1), new L.Point(4,0.5), {outputSaturation: '100%', outputHue: 30}),
		new L.HSLHueFunction(new L.Point(4,30), new L.Point(10,0))
	]);
	*/

	var now = Math.round((new Date()).getTime());
	var start = now - 86400000;

	// Initialize a linear function to map earthquake time to opacity
	var timeOpacityFunction = new L.LinearFunction(new L.Point(start,0.3), new L.Point(now,1));
	var fontSizeFunction = new L.LinearFunction(new L.Point(0,8), new L.Point(10,24));

	var textFunction = function (value) {
		return {
			text: value,
			style: {
				'font-size': fontSizeFunction.evaluate(value)
			}
		};
	};

	// Setup a new data layer
	var dataLayer = new L.DataLayer(data,{
		recordsField: 'features',
		latitudeField: 'geometry.coordinates.1',
		longitudeField: 'geometry.coordinates.0',
		locationMode: L.LocationModes.LATLNG,
		displayOptions: {
			'properties.mag': {
				displayName: 'Magnitude',
				color: magnitudeColorFunction,
				fillColor: magnitudeFillColorFunction,
				radius: magnitudeRadiusFunction,
				text: textFunction
			},
			'properties.time': {
				displayName: 'Time',
				opacity: timeOpacityFunction,
				fillOpacity: timeOpacityFunction,
				displayText: function (value) {
					return moment.unix(value/1000).format('MM/DD/YY HH:mm');
				}
			}
		},
		layerOptions: {
			numberOfSides: 4,
			radius: 10,
			weight: 1,
			color: '#000',
			opacity: 0.2,
			stroke: true,
			fillOpacity: 0.7,
			dropShadow: true,
			gradient: true
		},
		tooltipOptions: {
			iconSize: new L.Point(90,76),
			iconAnchor: new L.Point(-4,76)
		},
		onEachRecord: function (layer, record, location) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(),{
				minWidth: 400,
				maxWidth: 400
			});
		}
	});

	// Add the data layer to the map
	map.addLayer(dataLayer);

	lastLayer = dataLayer;
};

$(document).ready(function() {

	// Function for resizing the map to fill the available space on the screen
	var resize = function () {
		var $map = $('#map');

		$map.height($(window).height() - $('div.navbar').outerHeight());

		if (map) {
			map.invalidateSize();
		}
	};

	// Resize the map element on window resize
	$(window).on('resize', function () {
		resize();
	});

	// Resize the map element
	resize();

	// Initialize the map
	map = L.map('map').setView([0.0, 0.0], 2);
	
	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});
	
	baseLayer.addTo(map);

	var prccEarthquakesLayer = L.tileLayer('http://{s}.tiles.mapbox.com/v3/bclc-apec.map-rslgvy56/{z}/{x}/{y}.png', {
		attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	});

	// Initialize the legend control and add it to the map
	var legendControl = new L.Control.Legend();

	legendControl.addTo(map);

	var layerControl = new L.Control.Layers({
		'Stamen Toner': baseLayer,
		'PRCC Earthquake Risk Zones': prccEarthquakesLayer
	});

	layerControl.addTo(map);

	// Function for requesting the latest earthquakes from USGS
	var getData = function () {

		if (lastLayer) {
			map.removeLayer(lastLayer);
		}

		$.ajax({
			url: 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/all/day',
			type: 'GET',
			dataType: 'jsonp'
		});
	};

	// Get the latest earthquake data
	getData();

	// Periodically request the latest data
	setInterval(getData,300000);
});
