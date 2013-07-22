var map;

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

});