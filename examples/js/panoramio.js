var map;
var lastLayer;
var legendControl;

// JSONP callback function for displaying the latest earthquake data
var panoramio_callback = function (data) {

	if (lastLayer) {
		map.removeLayer(lastLayer);
	}
	
	// Setup a new data layer
	var dataLayer = new L.MarkerDataLayer(data,{
		recordsField: 'photos',
		latitudeField: 'latitude',
		longitudeField: 'longitude',
		locationMode: L.LocationModes.LATLNG,
		showLegendTooltips: false,
		layerOptions: {
			opacity: 1.0
		},
		onEachRecord: function (layer,record) {
			var $html = L.HTMLUtils.buildTable(record);
			
			layer.bindPopup($html.wrap('<div/>').parent().html(),{
				minWidth: 400,
				maxWidth: 400
			});
		},
		setIcon: function (context, record, options) {			
			var icon = new L.DivIcon({
				iconSize: new L.Point(L.Util.getFieldValue(record, 'width'), L.Util.getFieldValue(record, 'height')),
				className: 'photo',
				html: '<img src="' + L.Util.getFieldValue(record, 'photo_file_url') + '"/>'
			});
			
			return icon;
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
	
	// Add a CloudMade tile layer with style #999
	var baseLayer = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
	    attribution: 'Tiles Courtesy of MapQuest <img width="10" height="10" alt="" style="margin-top: -6px;" src="http://developer.mapquest.com/content/osm/mq_logo.png">'
	});
	
	baseLayer.addTo(map);
	
	var layerControl = new L.Control.Layers({
		'Map Quest': baseLayer
	});
	
	var panoramioLayer = new L.PanoramioLayer();
	
	map.addLayer(panoramioLayer);
	// Function for requesting the latest photos from Panoramio
	// var getData = function () {
// 		
// 		var bounds = map.getBounds();
// 		var southWest = bounds.getSouthWest();
// 		var northEast = bounds.getNorthEast();
// 		
// 		$.ajax({
// 			url: 'http://www.panoramio.com/map/get_panoramas.php',
// 			data: {
// 				set: 'public',
// 				from: 0,
// 				to: 49,
// 				minx: southWest.lng,
// 				miny: southWest.lat,
// 				maxx: northEast.lng,
// 				maxy: northEast.lat,
// 				size: 'square',
// 				mapfilter: 'true'
// 			},
// 			type: 'GET',
// 			dataType: 'jsonp',
// 			success: function (data) {
// 				panoramio_callback(data);
// 			}
// 		});
// 	};
// 	
// 	// Get the latest earthquake data
// 	getData();
// 	
// 	// Periodically request the latest data
// 	setInterval(getData,300000);
// 	map.on('viewreset', getData);
});