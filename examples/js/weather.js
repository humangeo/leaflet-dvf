map = null;
var lastWeatherLayer;

/*
 * JSONP callback function for displaying weather data
 */
var weatherfeed_callback = function (data) {
	var tempColorFunction = new L.PiecewiseFunction([new L.HSLHueFunction(new L.Point(100,270), new L.Point(210,270), {outputLuminosity: '25%'}), new L.HSLHueFunction(new L.Point(210,270), new L.Point(320,0), {outputLuminosity: '25%'})]);
	var tempFillColorFunction = new L.PiecewiseFunction([new L.HSLHueFunction(new L.Point(100,270), new L.Point(210,270), {outputLuminosity: '50%'}), new L.HSLHueFunction(new L.Point(210,270), new L.Point(320,0), {outputLuminosity: '50%'})]);
	var radiusFunction = new L.LinearFunction(new L.Point(272,5), new L.Point(320,15));
	var K_TO_C = 273.15;
	var convert = function (value) {
		var celsius = value - K_TO_C;
		var farenheit = (9/5) * celsius + 32;
		
		return {
			c: celsius,
			f: farenheit
		};
	};
	
	var options = {
		recordsField: 'list',
		latitudeField: 'coord.lat',
		longitudeField: 'coord.lon',
		displayOptions: {
			'main.temp': {
				displayName: 'Temperature',
				color: tempColorFunction,
				fillColor: tempFillColorFunction,
				radius: radiusFunction,
				displayText: function (value) {
					var values = convert(value);
					
					return values.f.toFixed(0) + '&deg;F / ' + values.c.toFixed(0) + '&deg;C';
				}
			}
		},
		layerOptions: {
			width: 5,
			weight: 1,
			iconSize: new L.Point(60,40),
			fillOpacity: 0.8,
			opacity: 1.0,
			radius: 6
		},
		tooltipOptions: {
			iconSize: new L.Point(100,55),
			iconAnchor: new L.Point(-5,55)
		},
		onEachRecord: function (layer,record) {
			var html = '<table class="table table-condensed table-striped table-bordered"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody></tbody></table>';
			var $html = $(html);
			var $tbody = $html.find('tbody');
			
			for (var property in record.main) {
				$tbody.append('<tr><td>' + property + '</td><td>' + record.main[property] + '</td></tr>');
			}
			layer.bindPopup($html.wrap('<div/>').parent().html(),{
				minWidth: 400,
				maxWidth: 400
			});
		}
	};
	
	var weatherLayer = new L.MapMarkerDataLayer(data, options);

	map.addLayer(weatherLayer);
	
	if (!lastWeatherLayer) {		
		var legend = weatherLayer.getLegend({
			numSegments: 20,
			width: 80,
			className: 'well'
		});
		
		$('#legend').append(legend);
	}
	
	lastWeatherLayer = weatherLayer;
	
};

$(document).ready(function() {
	// create a map in the "map" div, set the view to a given place and zoom
	map = L.map('map').setView([0.0, 0.0], 2);
	
	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});
	
	baseLayer.addTo(map);
	
	var getWeatherData = function (bbox,cluster,callback) {
			
		var data = {
			bbox: bbox,
			cluster: cluster ? 'yes' : 'no',
			callback: callback || 'weatherfeed_callback'
		};
		
		if (lastWeatherLayer) {
			map.removeLayer(lastWeatherLayer);
		}
		
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/box/city',
			data: data,
			type: 'GET',
			dataType: 'jsonp'
		});
	};
		
	var $getWeatherButton = $('#get-weather');
		
	$getWeatherButton.on('click', function (e) {
		e.preventDefault();
	
		getWeatherData(map.getBounds().toBBoxString(),true);
	});
});