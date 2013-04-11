var map;

$(document).ready(function() {
	var resize = function () {
		var $map = $('#map');
		
		$map.height($(window).height() - $('div.navbar').outerHeight());
		
		if (map) {
			map.invalidateSize();
		}
	};
	
	$(window).on('resize', function () {
		resize();
	});
	
	resize();
	
	map = L.map('map').setView([0.0, 0.0], 2);

	var baseLayer = L.tileLayer('http://{s}.tile.cloudmade.com/82e1a1bab27244f0ab6a3dd1770f7d11/999/256/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
	});
	
	baseLayer.addTo(map);
	
	var layerControl = L.control.layers({
		'Cloudmade (Dark)': baseLayer 
	}).addTo(map);
	
	var marker;
	var layer;
	
	var getCenterLatLng = function () {
		return new L.LatLng(Math.random() * 179 - 89,Math.random() * 359 - 179);
	};

	var createLayerGroup = function (name) {
		var layerGroup = new L.LayerGroup();
		
		map.addLayer(layerGroup);
		layerControl.addOverlay(layerGroup, name);
		
		return layerGroup;
	};
	
	// Create some sample basic shape markers.  There are built-in classes for constructing the common shapes:
	// triangles, squares, pentagons, hexagons, and octagons that can be used instead of the L.RegularPolygonMarker class.
	var triangle = new L.TriangleMarker(new L.LatLng(0,0), {
		radius: 20,
		weight: 1,
		opacity: 1,
		fillOpacity: 0.9,
		color: '#000000',
		fillColor: 'hsl(0, 100%, 50%)'
	});
	
	var square = new L.SquareMarker(new L.LatLng(0,5), {
		radius: 20,
		weight: 1,
		opacity: 1,
		fillOpacity: 0.9,
		color: '#000000',
		fillColor: 'hsl(30, 100%, 50%)'
	});
	
	var pentagon = new L.PentagonMarker(new L.LatLng(0, 10), {
		radius: 20,
		weight: 1,
		opacity: 1,
		fillOpacity: 0.9,
		color: '#000000',
		fillColor: 'hsl(60, 100%, 50%)'
	});
	
	var hexagon = new L.HexagonMarker(new L.LatLng(0,15), {
		radius: 20,
		weight: 1,
		opacity: 1,
		fillOpacity: 0.9,
		color: '#000000',
		fillColor: 'hsl(90, 100%, 50%)'
	});
	
	var octagon = new L.OctagonMarker(new L.LatLng(0,20), {
		radius: 20,
		weight: 1,
		opacity: 1,
		fillOpacity: 0.9,
		color: '#000000',
		fillColor: 'hsl(120, 100%, 50%)'
	});
	
	var regularPolygonLayer = createLayerGroup('Regular Polygons');
	
	regularPolygonLayer.addLayer(triangle);
	regularPolygonLayer.addLayer(square);
	regularPolygonLayer.addLayer(pentagon);
	regularPolygonLayer.addLayer(hexagon);
	regularPolygonLayer.addLayer(octagon);
	
	var hollowPolygonLayer = createLayerGroup('Regular Polygons (Hollow)');
	
	// Create two StackedRegularPolygonMarkers
	var stackedOptions = {
		chartOptions: {
			'dataPoint4': {
				fillColor: 'rgb(255, 255, 212)',
				minValue: 0,
				maxValue: 20,
				maxRadius: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint3': {
				fillColor: 'rgb(254, 217, 142)',
				minValue: 0,
				maxValue: 20,
				maxRadius: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint2': {
				fillColor: 'rgb(254, 153, 41)',
				minValue: 0,
				maxValue: 20,
				maxRadius: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint1': {
				fillColor: 'rgb(204, 76, 2)',
				minValue: 0,
				maxValue: 20,
				maxRadius: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		},
		data: {
			dataPoint1: 5,
			dataPoint2: 3,
			dataPoint3: 8,
			dataPoint4: 15
		},
		color: '#000000',
		weight: 1,
		numberOfSides: 6,
		rotation: 0
	};
	
	var stackedMarker = new L.StackedRegularPolygonMarker(new L.LatLng(20, 20), stackedOptions);
	
	stackedOptions.data = {
		dataPoint1: 8,
		dataPoint2: 18,
		dataPoint3: 3,
		dataPoint4: 10
	};
	
	var stackedMarker2 = new L.StackedRegularPolygonMarker(new L.LatLng(30, 20), stackedOptions);
	
	var stackedLayer = createLayerGroup('Stacked Regular Polygons');
	
	stackedLayer.addLayer(stackedMarker);
	stackedLayer.addLayer(stackedMarker2);
	
	var meterMarkerLayer = createLayerGroup('Meter Markers');
	var starLayer = createLayerGroup('Star Markers');
	
	var radialBarChartLayer = createLayerGroup('Radial Bar Charts');
	var coxcombChartLayer = createLayerGroup('Coxcomb Charts');
	var pieChartLayer = createLayerGroup('Pie Charts');
	var barChartLayer = createLayerGroup('Bar Charts');
	var mapMarkerLayer = createLayerGroup('Map Markers');
	
	// Create 20 of each of the various new markers available through the framework
	for (var index = 0;index < 20;++index) {
		var centerLatLng = getCenterLatLng();
		var numberOfSides = Math.floor((Math.random() * 5) + 3);
		var radiusX = Math.floor(Math.random() * 20) + 5;
		var radiusY = radiusX; //Math.floor(Math.random() * 20);
		var colorValue = index * 3.6;
		
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radiusX: radiusX,
			radiusY: radiusY,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0
		};
		
		// Add a RadialMeterMarker
		var minHue = 120;
		var maxHue = 0;
		var meterMarkerOptions = {
			data: {
				'Speed': 200
			},
			chartOptions: {
				'Speed': {
					displayName: 'Speed',
					displayText: function (value) {
						return value.toFixed(1);
					},
					color: 'hsl(240,100%,55%)',
					fillColor: 'hsl(240,80%,55%)',
					maxValue: 200,
					minValue: 0
				}
			},
			displayOptions: {
				'Speed': {
					color: new L.HSLHueFunction(new L.Point(0,minHue), new L.Point(200,maxHue), {outputSaturation: '100%', outputLuminosity: '25%'}),
					fillColor: new L.HSLHueFunction(new L.Point(0,minHue), new L.Point(200,maxHue), {outputSaturation: '100%', outputLuminosity: '50%'})
				}
			},
			fillOpacity: 0.8,
			opacity: 1,
			weight: 0.5,
			radius: 30,
			barThickness: 15,
			maxDegrees: 360,
			rotation: 0,
			numSegments: 10
		};
		
		meterMarkerOptions.data['Speed'] = Math.random() * 200;
		
		var meterMarker = new L.RadialMeterMarker(centerLatLng, meterMarkerOptions);
		meterMarkerLayer.addLayer(meterMarker);
		
		// Add a map marker
		centerLatLng = getCenterLatLng();
		
		options.radius = (Math.random() * 15) + 5;
		options.innerRadius = options.radius/2;
		
		var mapMarker = new L.MapMarker(centerLatLng, options);
		
		mapMarkerLayer.addLayer(mapMarker);
		
		options.numberOfSides = Math.floor((Math.random() * 5) + 3);
		
		// Add a StarMarker
		options.innerRadius = radiusX - 8;
		options.rotation = 55;
		options.numberOfPoints = Math.floor((Math.random() * 5) + 5);
		
		centerLatLng = getCenterLatLng();
		
		var starMarker = new L.StarMarker(centerLatLng,options);
		starLayer.addLayer(starMarker);
		
		// Add a RegularPolygonMarker
		centerLatLng = getCenterLatLng();

		options.rotation = Math.random() * 360;
		
		var marker = new L.RegularPolygonMarker(centerLatLng,options);

		hollowPolygonLayer.addLayer(marker);

		centerLatLng = getCenterLatLng();
		
		options.numberOfSides = 50;
		options.width = 10;
		
		options.rotation = 0;
		options.radiusX = 0;
		options.radiusY = 0;
		
		// Add a RadialBarChartMarker
		options.data = {
			'dataPoint1': Math.random() * 20,
			'dataPoint2': Math.random() * 20,
			'dataPoint3': Math.random() * 20,
			'dataPoint4': Math.random() * 20
		};
		
		options.chartOptions = {
			'dataPoint1': {
				fillColor: '#FEE5D9',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint2': {
				fillColor: '#FCAE91',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint3': {
				fillColor: '#FB6A4A',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint4': {
				fillColor: '#CB181D',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		};

		centerLatLng = getCenterLatLng();
		
		var radialBarMarker = new L.RadialBarChartMarker(centerLatLng,options);
		
		radialBarChartLayer.addLayer(radialBarMarker);
		
		options.radius = 20;
		
		// Add a CoxcombChartMarker
		centerLatLng = getCenterLatLng();
		
		options.chartOptions['dataPoint1'].fillColor = '#EDF8FB';
		options.chartOptions['dataPoint2'].fillColor = '#B2E2E2';
		options.chartOptions['dataPoint3'].fillColor = '#66C2A4';
		options.chartOptions['dataPoint4'].fillColor = '#238B45';
		
		var coxcombChartMarker = new L.CoxcombChartMarker(centerLatLng,options);
		
		coxcombChartLayer.addLayer(coxcombChartMarker);
		
		// Add a PieChartMarker
		centerLatLng = getCenterLatLng();
		
		options.barThickness = 10;

		options.chartOptions['dataPoint1'].fillColor = '#F1EEF6';
		options.chartOptions['dataPoint2'].fillColor = '#BDC9E1';
		options.chartOptions['dataPoint3'].fillColor = '#74A9CF';
		options.chartOptions['dataPoint4'].fillColor = '#0570B0';
		
		var pieChartMarker = new L.PieChartMarker(centerLatLng,options);
		
		pieChartLayer.addLayer(pieChartMarker);
		
		// Add a BarChartMarker
		centerLatLng = getCenterLatLng();
		
		options.width = 8;
		options.weight = 1;
		
		options.chartOptions['dataPoint1'].fillColor = '#F2F0F7';
		options.chartOptions['dataPoint2'].fillColor = '#CBC9E2';
		options.chartOptions['dataPoint3'].fillColor = '#9E9AC8';
		options.chartOptions['dataPoint4'].fillColor = '#6A51A3';
		
		var barChartMarker = new L.BarChartMarker(centerLatLng, options);
		
		barChartLayer.addLayer(barChartMarker);
		
	}
});