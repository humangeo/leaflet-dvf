$(document).ready(function() {
	var map;

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

	map = L.map('map').setView([-4.0, 13.0], 6);

	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});

	baseLayer.addTo(map);

	var layerControl = L.control.layers({
		'Stamen Toner': baseLayer
	}).addTo(map);

	var marker;
	var layer;

	var createLayerGroup = function (name) {
		var layerGroup = new L.LayerGroup();

		map.addLayer(layerGroup);
		layerControl.addOverlay(layerGroup, name);

		return layerGroup;
	};

	var addMarkers = function (layerGroupName, lat, lng, deltaLng, count, markerFunction, text) {

		var layerGroup = createLayerGroup(layerGroupName);

		var callout = new L.Callout(new L.LatLng(lat, lng), {
			direction: L.CalloutLine.DIRECTION.NW,
			lineStyle: L.CalloutLine.LINESTYLE.STRAIGHT,
			numberOfSides: 3,
			arrow: true,
			color: '#C0C0C0',
			fillColor: '#C0C0C0',
			position: new L.Point(-60, 0),
			size: new L.Point(40, 0),
			icon: new L.DivIcon({
				iconSize: new L.Point(80, 50),
				html: '<div>' + layerGroupName + '</div>',
				className: 'callout-text'
			})
		});

		layerGroup.addLayer(callout);

		for (var i = 0; i < count; ++i) {
			layerGroup.addLayer(markerFunction(new L.LatLng(lat, lng + i * deltaLng), i));
		}
	};

	// Create some sample basic shape markers.  NOTE:  There are built-in classes for constructing the common shapes:
	// triangles, squares, pentagons, hexagons, and octagons that can be used instead of the L.RegularPolygonMarker class.
	addMarkers('Regular Polygons', 0.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = index * 20;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 30,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: index + 3
		};

		options.rotation = (options.numberOfSides % 2 === 0 ? 180 : 90)/options.numberOfSides;

		options.imageCircleUrl = "http://upload.wikimedia.org/wikipedia/commons/6/68/Ambulance_font_awesome.svg";

		var marker = new L.RegularPolygonMarker(latlng, options);

		marker.on('mousedown', function (e) {
			var mouseMoveFunction = function (e) {
				marker.setLatLng(e.latlng);//.redraw();
			};

			map.on('mousemove', mouseMoveFunction);

			map.on('mouseup', function (e) {
				map.off('mousemove', mouseMoveFunction);
			});

			marker.on('mouseup', function (e) {
				map.off('mousemove', mouseMoveFunction);
			});
		});

		// Test code for animating the rotation of markers
		/*
		var angle = 0;
		var updateFunction = function () {
			angle = angle + 30 % 360;
			marker.setStyle({
				rotation: angle
			});

			marker.redraw();
		};

		setInterval(updateFunction, 1000);
		*/

		return marker;
	});

	// Create versions of the basic regular polygons with holes
	addMarkers('Regular Polygons (Hollow)', -2.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: Math.random() * 40 + 10,
			fillOpacity: 0.7,
			rotation: Math.random() * 360,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: index + 3
		};

		options.innerRadius = options.radius/2;

		return new L.RegularPolygonMarker(latlng, options);
	});

	addMarkers('Stars', -4.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: Math.random() * 40 + 10,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			rotation: Math.random() * 360,
			numberOfPoints: index + 5
		};

		options.innerRadius = options.radius/2;

		var marker = new L.StarMarker(latlng, options);

		return marker;
	});

	addMarkers('Custom SVG', -10.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: Math.random() * 40 + 10,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			rotation: Math.random() * 360,
			numberOfPoints: index + 5,
			clickable: true
		};

		options.innerRadius = options.radius/2;

		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/8/8b/Globe_font_awesome.svg';
		options.svg = 'http://upload.wikimedia.org/wikipedia/commons/8/8b/Green_Arrow_Up_Darker.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/4/43/Feed-icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/4/48/Location_indicator_icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/0/05/Robot_icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg';

		//options.svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M75,0 V75 H0 V125 H75 V200 H125 V125 H200 V75 H125 V0 H75 z" fill="#000" /></svg>';

		var width = Math.max(40, Math.random() * 100);
		options.size = new L.Point(width, width);

		var colorFunction = new L.HSLHueFunction([0, 0], [5, 330]);

		var color = colorFunction.random();

		options.setStyle = function (svg) {
			//$svg.find('#Blue_1_').css('fill', color);
			$(svg).find('path').css('fill', color);
		};

		var marker = new L.SVGMarker(latlng, options); //new L.StarMarker(latlng, options);

		var angle = 0;
		var updateFunction = function (time) {
			L.Util.requestAnimFrame(updateFunction);
			angle = angle + 2 % 360;

			marker.setStyle({
				rotation: angle
			});

			marker.redraw();
		};

		setTimeout(updateFunction, 1000/60);
		//setInterval(updateFunction, 1000);

		marker.bindPopup('Test');
		return marker;
	});

	addMarkers('Custom SVG', -12.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: Math.random() * 40 + 10,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			//rotation: Math.random() * 360,
			numberOfPoints: index + 5,
			clickable: true
		};

		options.innerRadius = options.radius/2;

		// Remove/add comments to see different SVG icons
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/8/8b/Globe_font_awesome.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/8/8b/Green_Arrow_Up_Darker.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/4/43/Feed-icon.svg';
		//options.svg = 'http://upload.wikimedia.org/wikipedia/commons/4/48/Location_indicator_icon.svg';
		options.svg = 'http://upload.wikimedia.org/wikipedia/commons/0/05/Robot_icon.svg';

		var width = Math.max(40, Math.random() * 100);
		options.size = new L.Point(width, width);

		var colorFunction = new L.HSLHueFunction([0, 0], [5, 330]);

		var color = colorFunction.random();

		// Specifying this option allows you to customize the SVG elements to your liking or style
		// items in the SVG image dynamically
		var styleFunction = function (color) {
			return function (svg) {
				//$svg.find('#Blue_1_').css('fill', color);
				//$svg.find('path, circle').css('fill', color);
				//$svg.find('#path4941').css('fill', color);
				//$svg.find('path').css('stroke', color);
				$(svg).find('rect').css('fill', color);
				
			};
		};
		
		options.setStyle = styleFunction(color);

		var marker = new L.SVGMarker(latlng, options); //new L.StarMarker(latlng, options);

		marker.on('click', function () {
			if (marker.options.oldStyle) {
				marker.options.setStyle = marker.options.oldStyle;
				marker.redraw();
				marker.options.oldStyle = null;
			}
			else {
				marker.options.oldStyle = marker.options.setStyle;
				marker.options.setStyle = function (svg) {
					var $eye1 = $(svg).find('path:first');
					
					$eye1.attr('transform', $eye1.attr('transform') + ' scale(1.2,1.2)');			
				};
				
				marker.redraw();
			}
		});
		
		return marker;
	});

	addMarkers('Map Markers', -6.0, 0.0, 2.0, 5, function (latlng, index) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			radius: (Math.random() * 30) + 5,
			innerRadius: 0
		};

		//options.innerRadius = options.radius/ ((Math.random() * 3) + 2);

		/*
		options.fillPattern = {
				url: 'http://upload.wikimedia.org/wikipedia/commons/3/31/Green_Canada_Flag.png',
				pattern: {
					width: 20,
					height: 10,
					patternUnits: 'userSpaceOnUse'
				},
				image: {
					width: 20,
					height: 10

				}
			};
		*/

		var imageOptions = [
			'http://upload.wikimedia.org/wikipedia/commons/6/62/Food_font_awesome.svg',
			'http://upload.wikimedia.org/wikipedia/commons/5/57/Light_bulb_font_awesome.svg',
			'http://upload.wikimedia.org/wikipedia/commons/4/48/Flag_font_awesome.svg',
			'http://upload.wikimedia.org/wikipedia/commons/6/64/Plane_font_awesome.svg',
			'http://upload.wikimedia.org/wikipedia/commons/1/15/Leaf_font_awesome.svg'
		];

		options.imageCircleUrl = imageOptions[index];

		/*
		options.shapeImage = {
			shape: {
				ellipse: {
					rx: 12,
					ry: 30,
					'fill-opacity': 1.0,
					stroke: 'green',
					width: 24,
					height: 24,
					'stroke-width': 8.0,
					'stroke-opacity': 0.5
				}
			},
			image: {
				url: "http://upload.wikimedia.org/wikipedia/commons/a/a7/Emblem-fun.svg",
				width: 24,
				height: 60,
				x: 0,
				y: 0
			},
			pattern: {
				width: 24,
				height: 24,
				x: 0,
				y: 0
			}
		};
		*/

		return new L.MapMarker(latlng, options);
	});

	addMarkers('Radial Meter Markers', -8.0, 0.0, 2.0, 5, function (latlng, index) {
		var minHue = 120;
		var maxHue = 0;
		var meterMarkerOptions = {
			data: {
				'Speed': Math.random() * 200
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

		return new L.RadialMeterMarker(latlng, meterMarkerOptions);
	});

	addMarkers('Bar Charts', 0.0, 14.0, 2.0, 5, function (latlng) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 20,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			width: 8
		};

		options.data = {
			'dataPoint1': Math.random() * 20,
			'dataPoint2': Math.random() * 20,
			'dataPoint3': Math.random() * 20,
			'dataPoint4': Math.random() * 20
		};

		options.chartOptions = {
			'dataPoint1': {
				fillColor: '#F2F0F7',
				minValue: 0,
				maxValue: 20,
				maxHeight: 30,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint2': {
				fillColor: '#CBC9E2',
				minValue: 0,
				maxValue: 20,
				maxHeight: 30,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint3': {
				fillColor: '#9E9AC8',
				minValue: 0,
				maxValue: 20,
				maxHeight: 30,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint4': {
				fillColor: '#6A51A3',
				minValue: 0,
				maxValue: 20,
				maxHeight: 30,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		};

		var barChart = new L.BarChartMarker(latlng, options);

		var updateFunction = function () {
			barChart.options.data = {
					'dataPoint1': Math.random() * 20,
					'dataPoint2': Math.random() * 20,
					'dataPoint3': Math.random() * 20,
					'dataPoint4': Math.random() * 20
			};

			barChart.redraw();
		};

		//setInterval(updateFunction, 1000);

		return barChart;
	});

	addMarkers('Pie Charts', -2.0, 14.0, 2.0, 5, function (latlng) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 20,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: 50,
			barThickness: 10
		};

		options.data = {
			'dataPoint1': Math.random() * 20,
			'dataPoint2': Math.random() * 20,
			'dataPoint3': Math.random() * 20,
			'dataPoint4': Math.random() * 20
		};

		options.chartOptions = {
			'dataPoint1': {
				fillColor: '#F1EEF6',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint2': {
				fillColor: '#BDC9E1',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint3': {
				fillColor: '#74A9CF',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint4': {
				fillColor: '#0570B0',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		};

		return new L.PieChartMarker(latlng, options);
	});

	addMarkers('Coxcomb Charts', -4.0, 14.0, 2.0, 5, function (latlng) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 30,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: 50,
			width: 10
		};

		options.data = {
			'dataPoint1': Math.random() * 20,
			'dataPoint2': Math.random() * 20,
			'dataPoint3': Math.random() * 20,
			'dataPoint4': Math.random() * 20
		};

		options.chartOptions = {
			'dataPoint1': {
				fillColor: '#EDF8FB',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint2': {
				fillColor: '#B2E2E2',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint3': {
				fillColor: '#66C2A4',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dataPoint4': {
				fillColor: '#238B45',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		};

		return new L.CoxcombChartMarker(latlng, options);
	});

	addMarkers('Radial Bar Charts', -6.0, 14.0, 2.0, 5, function (latlng) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 20,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: 50,
			width: 10
		};

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

		return new L.RadialBarChartMarker(latlng, options);
	});

	addMarkers('Stacked Regular Polygons', -8.0, 14.0, 2.0, 5, function (latlng, index) {
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

		stackedOptions.data = {};

		for (var i = 1; i <= 4; ++i) {
			stackedOptions.data['dataPoint' + i] = Math.random() * 20;
		};

		return new L.StackedRegularPolygonMarker(latlng, stackedOptions);
	});

	addMarkers('Stacked Pie Charts', -10.0, 14.0, 2.0, 5, function (latlng) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 0.5,
			stroke: true,
			fillColor: 'white',//'hsl(' + colorValue + ',100%,50%)',
			fillColors: ['#00FF00','#FFFF00','#FF0000','transparent'],
			values: [2,4,3,5],
			//radius: 30,
			barThickness: 40,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: 50
		};

		options.data = {
			'dp1': [ 5, 5, 5.1, 10 ],
			'dp2': [ Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20 ],
			'dp3': [ Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20 ],
			'dp4': [ Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20 ]
		};

		options.chartOptions = {
			'dp1': {
				fillColor: '#F1EEF6',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dp2': {
				fillColor: '#BDC9E1',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dp3': {
				fillColor: '#74A9CF',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'dp4': {
				fillColor: '#0570B0',
				minValue: 0,
				maxValue: 20,
				maxHeight: 20,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		};

		return new L.StackedPieChartMarker(latlng, options);
	});

	var directions = Object.keys(L.CalloutLine.DIRECTION);

	console.log(directions);

	var styles = Object.keys(L.CalloutLine.LINESTYLE);
	var xOffsets = [5, -5, 5, -5];
	var yOffsets = [-5, -5, 5, 5];

	var calloutGenerator = function (style) {
		return function (latlng, index) {
			var direction = directions[index % directions.length];

			return new L.Callout(latlng, {
				direction: L.CalloutLine.DIRECTION[direction],
				lineStyle: L.CalloutLine.LINESTYLE[style],
				numberOfSides: 3,
				arrow: true,
				color: '#C0C0C0',
				fillColor: '#C0C0C0',
				position: new L.Point(xOffsets[index], yOffsets[index]),
				size: new L.Point(40, 40),
				icon: new L.DivIcon({
					iconSize: new L.Point(28, 14),
					html: direction.toUpperCase(),
					className: 'callout-text'
				}),
				dropShadow: false
			});
		}
	};

	addMarkers('Callouts (Arced)', -1.0, 28.0, 0.0, 4, calloutGenerator(styles[0]));
	addMarkers('Callouts (Angled)', -4.0, 28.0, 0.0, 4, calloutGenerator(styles[1]));
	addMarkers('Callouts (Straight)', -7.0, 28.0, 0.0, 4, calloutGenerator(styles[2]));

});
