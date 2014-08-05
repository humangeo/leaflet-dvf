/*
 * Class for a drawing a bar marker on the map.  This is the basis for the BarChartMarker
 */
L.BarMarker = L.Path.extend({
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);

		this._latlng = centerLatLng;
	},

	options: {
		fill: true,
		width: 2,
		maxHeight: 10,
		position: {
			x: 0,
			y: 0
		},
		weight: 1,
		color: '#000',
		opacity: 1.0,
		gradient: true,
		dropShadow: false,
		lineCap: 'square',
		lineJoin: 'miter'
	},

	setLatLng: function (latlng) {
		this._latlng = latlng;
		return this.redraw();
	},

	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._points = this._getPoints();
	},

	getBounds: function () {
		var map = this._map,
			point = map.project(this._latlng),
			halfWidth = this.options.width/2,
			swPoint = new L.Point(point.x - halfWidth, point.y),
			nePoint = new L.Point(point.x + halfWidth, point.y - this.options.maxHeight),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._latlng;
	},

	getPathString: function () {
		this._path.setAttribute('shape-rendering', 'crispEdges');
		return new L.SVGPathBuilder(this._points).build();
	},

	_getPoints: function () {

		var points = [];
		var startX = this._point.x + this.options.position.x;
		var startY = this._point.y + this.options.position.y;
		var halfWidth = this.options.width / 2;
		var sePoint, nePoint, nwPoint, swPoint;
		var height = this.options.value / this.options.maxValue * this.options.maxHeight;
		
		sePoint = new L.Point(startX + halfWidth, startY);
		nePoint = new L.Point(startX + halfWidth, startY - height);
		nwPoint = new L.Point(startX - halfWidth, startY - height);
		swPoint = new L.Point(startX - halfWidth, startY);
		
		points = [sePoint, nePoint, nwPoint, swPoint];
		
		return points;
	}

});

L.barMarker = function (centerLatLng, options) {
	return new L.BarMarker(centerLatLng, options);
};

/*
 * Base class for all chart markers.  This class should be extended by any chart marker class (e.g. BarChartMarker, PieChartMarker, etc.)
 */
L.ChartMarker = L.FeatureGroup.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);

		this._layers = {};
		this._latlng = centerLatLng;
		
		this._loadComponents();
	},
	
	setLatLng: function (latlng) {
		this._latlng = latlng;
		return this.redraw();
	},

	getLatLng: function () {
		return this._latlng;
	},

	_loadComponents: function () {
		// TODO: Override this in subclasses
	},
	
	_highlight: function (options) {
		if (options.weight) {
			options.weight *= 2;
		}
		
		return options;
	},
	
	_unhighlight: function (options) {
		if (options.weight) {
			options.weight /= 2;
		}
		
		return options;
	},
	
	_bindMouseEvents: function (chartElement) {
		var self = this;
		var tooltipOptions = this.options.tooltipOptions;
	
		chartElement.on('mouseover', function (e) {
			var currentOptions = this.options;
			var key = currentOptions.key;
			var value = currentOptions.value;
			var layerPoint = e.layerPoint;
			var x = layerPoint.x - this._point.x;
			var y = layerPoint.y - this._point.y;
			var iconSize = currentOptions.iconSize;
			var newX = x; 
			var newY = y;
			var newPoint;
			var offset = 5;
			
			newX = x < 0 ? iconSize.x - x + offset: -x - offset;
			newY = y < 0 ? iconSize.y - y + offset: -y - offset;
			
			newPoint = new L.Point(newX, newY);
			
			var legendOptions = {};
			var displayText = currentOptions.displayText ? currentOptions.displayText(value) : value;
			
			legendOptions[key] = {
				name: currentOptions.displayName,
				value: displayText
			};
			
			var icon = new L.LegendIcon(legendOptions, currentOptions, {
				className: 'leaflet-div-icon',
				iconSize: tooltipOptions ? tooltipOptions.iconSize : iconSize,
				iconAnchor: newPoint
			});
			
			currentOptions.marker = new L.Marker(self._latlng, {
				icon: icon
			});
			
			currentOptions = self._highlight(currentOptions);
			
			this.initialize(self._latlng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
			
			self.addLayer(currentOptions.marker);
		});
		
		chartElement.on('mouseout', function (e) {
			var currentOptions = this.options;
			
			currentOptions = self._unhighlight(currentOptions);
			
			this.initialize(self._latlng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
			
			self.removeLayer(currentOptions.marker);
		});
	},
	
	bindPopup: function (content, options) {
		this.eachLayer(function (layer) {
			layer.bindPopup(content, options);
		});
	},
	
	openPopup: function (latlng) {
		for (var i in this._layers) {
			var layer = this._layers[i];
			latlng = latlng || this._latlng;
			layer.openPopup(latlng);
			break;
		}
	},
	
	closePopup: function () {
		for (var i in this._layers) {
			var layer = this._layers[i];
			latlng = latlng || this._latlng;
			layer.closePopup();
			break;
		}
	},
	
	redraw: function () {
		this.clearLayers();
		this._loadComponents();
	},
	
	toGeoJSON: function () {
		return L.Util.pointToGeoJSON.call(this);
	}
});

/*
 * 
 */
L.BarChartMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);

		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},

	options: {
		weight:	1,
		opacity: 1,
		color: '#000',
		fill: true,
		position: {
			x: 0,
			y: 0
		},
		width: 10,
		offset: 0,
		iconSize: new L.Point(50, 40)
	},

	_loadComponents: function () {
		var value, minValue, maxValue;
		var bar;
		var options = this.options;
		var x;
		var y;
		var keys = Object.keys(this.options.data);
		var count = keys.length;
		var width = this.options.width;
		var offset = this.options.offset || 0;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		
		x = -((width * count) + (offset * (count - 1))) / 2 + width / 2;
		y = 0;
		
		// Iterate through the data values
		for (var key in data) {
			value = data[key];
			chartOption = chartOptions[key];

			minValue = chartOption.minValue || 0;
			maxValue = chartOption.maxValue || 100;
			
			options.fillColor = chartOption.fillColor || this.options.fillColor;
			options.value = value;
			options.minValue = minValue;
			options.maxValue = maxValue;
			options.position = {
				x: x,
				y: y
			};
			options.width = width;
			options.maxHeight = chartOption.maxHeight || 10;
			options.key = key;
			options.value = value;
			options.displayName = chartOption.displayName;
			options.opacity = this.options.opacity || 1.0;
			options.fillOpacity = this.options.fillOpacity || 0.7;
			options.weight = this.options.weight || 1;
			options.color = chartOption.color || this.options.color;
			options.displayText = chartOption.displayText;
			
			bar = new L.BarMarker(this._latlng, options);
			
			this._bindMouseEvents(bar);
			
			this.addLayer(bar);
			
			x += width + offset;
		}
	}
});

/*
 * Draws a radial bar on the map.  Used by the RadialBarChartMarker, PieChartMarker, and CoxcombChartMarker
 * to draw pie slices/radial bars
 */
L.RadialBarMarker = L.Path.extend({
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);

		this._latlng = centerLatLng;	
	},
	
	options: {
		fill: true,
		radius: 10,
		rotation: 0,
		numberOfSides: 30,
		position: {
			x: 0,
			y: 0
		},
		gradient: true,
		dropShadow: false
	},

	setLatLng: function (latlng) {
		this._latlng = latlng;
		return this.redraw();
	},

	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);	
		this._points = this._getPoints();
	},

	getBounds: function () {
		var map = this._map,
			radiusX = this.options.radiusX || this.options.radius,
			radiusY = this.options.radiusY || this.options.radius,
			deltaX = radiusX * Math.cos(Math.PI / 4),
			deltaY = radiusY * Math.sin(Math.PI / 4),
			point = map.project(this._latlng),
			swPoint = new L.Point(point.x - deltaX, point.y + deltaY),
			nePoint = new L.Point(point.x + deltaX, point.y - deltaY),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);
	
		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._latlng;
	},
	
	getPathString: function () {
	
		var angle = this.options.endAngle - this.options.startAngle;
		var largeArc = angle >= 180 ? '1' : '0';
		var radiusX = this.options.radiusX || this.options.radius;
		var radiusY = this.options.radiusY || this.options.radius;
		var path = 'M' + this._points[0].x.toFixed(2) + ',' + this._points[0].y.toFixed(2) + 'A' + radiusX.toFixed(2) + ',' + radiusY.toFixed(2) + ' 0 ' + largeArc + ',1 ' + this._points[1].x.toFixed(2) + ',' + this._points[1].y.toFixed(2) + 'L'; 
		
		if (this._innerPoints) {
			path = path + this._innerPoints[0].x.toFixed(2) + ',' + this._innerPoints[0].y.toFixed(2);
			path = path + 'A' + (radiusX - this.options.barThickness).toFixed(2) + ',' + (radiusY - this.options.barThickness).toFixed(2) + ' 0 ' + largeArc + ',0 ' + this._innerPoints[1].x.toFixed(2) + ',' + this._innerPoints[1].y.toFixed(2) + 'z';;
		}
		else {
			path = path + this._point.x.toFixed(2) + ',' + this._point.y.toFixed(2) + 'z';
		}
		
		if (L.Browser.vml) {
			path = Core.SVG.path(path);
		}
		
		this._path.setAttribute('shape-rendering', 'geometricPrecision');
		
		return path;

	},

	_getPoints: function () {

		var angleDelta = this.options.endAngle - this.options.startAngle;
		var degrees = this.options.endAngle + this.options.rotation;
		var angle = this.options.startAngle + this.options.rotation;
		var points = [];
		var radiusX = 'radiusX' in this.options ? this.options.radiusX : this.options.radius; 
		var radiusY = 'radiusY' in this.options ? this.options.radiusY : this.options.radius;
		var toRad = function (number) {
			return number * L.LatLng.DEG_TO_RAD;
		};

		if (angleDelta === 360.0) {
			degrees = degrees - 0.1;
		}
		
		var startRadians = toRad(angle);
		var endRadians = toRad(degrees);
		
		points.push(this._getPoint(startRadians, radiusX, radiusY));
		points.push(this._getPoint(endRadians, radiusX, radiusY));
		
		if (this.options.barThickness) {
			this._innerPoints = [];
			this._innerPoints.push(this._getPoint(endRadians, radiusX - this.options.barThickness, radiusY - this.options.barThickness));
			this._innerPoints.push(this._getPoint(startRadians, radiusX - this.options.barThickness, radiusY - this.options.barThickness));
		}
		
		return points;
	},
	
	_getPoint: function (angle, radiusX, radiusY) {
		return new L.Point(this._point.x + this.options.position.x + radiusX * Math.cos(angle), this._point.y + this.options.position.y + radiusY * Math.sin(angle));
	}
});

L.radialBarMarker = function (centerLatLng, options) {
	return new L.RadialBarMarker(centerLatLng, options);
};

/*
 * Class for drawing a pie chart marker on the map
 */
L.PieChartMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},

	options: {
		weight:	1,
		opacity: 1,
		color: '#000',
		fill: true,
		radius: 10,
		rotation: 0,
		numberOfSides: 50,
		mouseOverExaggeration: 1.2,
		maxDegrees: 360.0,
		iconSize: new L.Point(50, 40)
	},

	_highlight: function (options) {
		var oldRadiusX = options.radiusX;
        var oldRadiusY = options.radiusY;
		var oldBarThickness = options.barThickness;
		options.oldBarThickness = oldBarThickness;
		options.oldRadiusX = oldRadiusX;
		options.oldRadiusY = oldRadiusY;
		options.radiusX *= options.mouseOverExaggeration;
		options.radiusY *= options.mouseOverExaggeration;
		options.barThickness = options.radiusX - oldRadiusX + oldBarThickness;
		return options;
	},
	
	_unhighlight: function (options) {
		options.radiusX = options.oldRadiusX;
		options.radiusY = options.oldRadiusY;
		options.barThickness = options.oldBarThickness;
		return options;
	},
	
	_loadComponents: function () {
		var value;
		var sum = 0;
		var angle = 0;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var lastAngle = this.options.rotation;
		var bar;
		var options = this.options;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var key;
		
		var getValue = function (data, key) {
			var value = 0.0;
			if (data[key]) {
				value = parseFloat(data[key]);
			}
			return value;
		};
		
		// Calculate the sum of the data values
		for (key in data) {
			value = getValue(data, key);
			sum += value;
		}
		
		// Iterate through the data values
		if (sum > 0) {
			for (key in data) {		
				value = parseFloat(data[key]);
				chartOption = chartOptions[key];
				percentage = value / sum;
			
				angle = percentage * maxDegrees;
			
				options.startAngle = lastAngle;
				options.endAngle = lastAngle + angle;
				options.fillColor = chartOption.fillColor;
				options.color = chartOption.color || '#000';
				options.radiusX = this.options.radiusX || this.options.radius;
				options.radiusY = this.options.radiusY || this.options.radius;
				options.rotation = 0;

				// Set the key and value for use later
				options.key = key;
				options.value = value;
				options.displayName = chartOption.displayName;
				options.displayText = chartOption.displayText;
			
				bar = new L.RadialBarMarker(this._latlng, options);
			
				this._bindMouseEvents(bar);
			
				lastAngle = options.endAngle;
			
				this.addLayer(bar);
			}
		}
	}
});

L.pieChartMarker = function (centerLatLng, options) {
	return new L.PieChartMarker(centerLatLng, options);
};

/*
 * 
 */
L.CoxcombChartMarker = L.PieChartMarker.extend({
	statics: {
		SIZE_MODE_RADIUS: 'radius',
		SIZE_MODE_AREA: 'area'
	}
});

L.CoxcombChartMarker = L.CoxcombChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);

		L.PieChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},

	options: {
		weight:	1,
		opacity: 1,
		color: '#000',
		fill: true,
		radius: 10,
		rotation: 0,
		numberOfSides: 50,
		mouseOverExaggeration: 1.2,
		maxDegrees: 360.0,
		iconSize: new L.Point(50, 40),
		sizeMode: L.CoxcombChartMarker.SIZE_MODE_AREA
	},

	_loadComponents: function () {
		var value, minValue, maxValue;
		var angle = 0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var lastAngle = this.options.rotation;
		var bar;
		var options = this.options;
		var radiusX = 'radiusX' in this.options ? this.options.radiusX : this.options.radius;
		var radiusY = 'radiusY' in this.options ? this.options.radiusY : this.options.radius;
		var keys = Object.keys(this.options.data);
		var count = keys.length;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		
		angle = maxDegrees / count;
		
		// Iterate through the data values
		for (var key in data) {
			value = parseFloat(data[key]);
			chartOption = chartOptions[key];
			
			var minValue = chartOption.minValue || 0;
			var maxValue = chartOption.maxValue;
			
			// If the size mode is radius, then we'll just vary the radius proportionally to the value
			if (this.options.sizeMode === L.CoxcombChartMarker.SIZE_MODE_RADIUS) {
				var evalFunctionX = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, radiusX));
				var evalFunctionY = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, radiusY)); 
				options.radiusX = evalFunctionX.evaluate(value);
				options.radiusY = evalFunctionY.evaluate(value);
			}
			else {
				// Otherwise, we'll vary the area proportionally to the value and calculate the radius from the area value
				var radius = Math.max(radiusX, radiusY);
				var maxArea = (Math.PI * Math.pow(radius, 2)) / count;
				
				var evalFunctionArea = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, maxArea), {
					postProcess: function (value) {
						return Math.sqrt(count * value / Math.PI);
					}
				});
				
				options.radiusX = evalFunctionArea.evaluate(value);
				options.radiusY = options.radiusX;
			}
			
			options.startAngle = lastAngle;
			options.endAngle = lastAngle + angle;
			options.fillColor = chartOption.fillColor;
			options.color = chartOption.color || '#000';
			options.rotation = 0;
			
			// Set the key and value for use later
			options.key = key;
			options.value = value;
			options.displayName = chartOption.displayName;
			options.displayText = chartOption.displayText;
			
			bar = new L.RadialBarMarker(this._latlng, options);
			
			this._bindMouseEvents(bar);
			
			lastAngle = options.endAngle;
			
			this.addLayer(bar);
		}
	}
});

L.coxcombChartMarker = function (centerLatLng, options) {
	return new L.CoxcombChartMarker(centerLatLng, options);
};

/*
 * 
 */
L.RadialBarChartMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},

	options: {
		weight:	1,
		opacity: 1,
		color: '#000',
		fill: true,
		radius: 10,
		rotation: 0,
		numberOfSides: 30,
		offset: 2,
		barThickness: 5,
		maxDegrees: 360.0,
		iconSize: new L.Point(50, 40)
	},

	_loadComponents: function() {
		var value, minValue, maxValue;
		var angle = this.options.rotation;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var bar;
		var options = this.options;
		var lastRadiusX = this.options.radiusX || this.options.radius;
		var lastRadiusY = this.options.radiusY || this.options.radius;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var barThickness = this.options.barThickness || 4;
		var offset = this.options.offset || 2;
		
		// Iterate through the data values
		for (var key in data) {
			value = parseFloat(data[key]);
			chartOption = chartOptions[key];
			
			minValue = chartOption.minValue || 0;
			maxValue = chartOption.maxValue || 100;
			
			var angleFunction = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, maxDegrees));
			
			angle = angleFunction.evaluate(value);
			
			options.startAngle = this.options.rotation;
			options.endAngle = this.options.rotation + angle;
			options.fillColor = chartOption.fillColor;
			options.radiusX = lastRadiusX;
			options.radiusY = lastRadiusY;
			options.barThickness = barThickness;
			options.rotation = 0;
			options.key = key;
			options.value = value;
			options.displayName = chartOption.displayName;
			options.displayText = chartOption.displayText;
			options.weight = this.options.weight || 1;
			
			bar = new L.RadialBarMarker(this._latlng, options);
			
			this._bindMouseEvents(bar);
			
			this.addLayer(bar);
			
			lastRadiusX += barThickness + offset;
			lastRadiusY += barThickness + offset;
			
		}
	}
});

L.radialBarChartMarker = function (centerLatLng, options) {
	return new L.RadialBarChartMarker(centerLatLng, options);
};

L.StackedRegularPolygonMarker = L.ChartMarker.extend({
	options: {
		iconSize: new L.Point(50, 40)
	},
	
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},
	
	_loadComponents: function () {
		var value;
		var lastRadiusX = 0;
		var lastRadiusY = 0;
		var bar;
		var options = this.options;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var key;
		
		// Iterate through the data values
		var bars = [];
		
		for (key in data) {		
			value = parseFloat(data[key]);
			chartOption = chartOptions[key];
			
			minValue = chartOption.minValue || 0;
			maxValue = chartOption.maxValue || 100;
			
			// TODO:  Add support for x and y radii
			minRadius = chartOption.minRadius || 0;
			maxRadius = chartOption.maxRadius || 10;
			
			options.fillColor = chartOption.fillColor || this.options.fillColor;
			options.value = value;
			options.minValue = minValue;
			options.maxValue = maxValue;
			
			var evalFunction = new L.LinearFunction(new L.Point(minValue, minRadius), new L.Point(maxValue, maxRadius));
			
			var barThickness = evalFunction.evaluate(value);
			
			options.radiusX = lastRadiusX + barThickness;
			options.radiusY = lastRadiusY + barThickness;
			options.innerRadiusX = lastRadiusX;
			options.innerRadiusY = lastRadiusY;
			
			options.key = key;
			options.displayName = chartOption.displayName;
			options.opacity = this.options.opacity || 1.0;
			options.fillOpacity = this.options.fillOpacity || 0.7;
			options.weight = this.options.weight || 1;
			options.color = chartOption.color || this.options.color;
			options.displayText = chartOption.displayText;
			
			bar = new L.RegularPolygonMarker(this._latlng, options);
			
			this._bindMouseEvents(bar);
			
			lastRadiusX = options.radiusX;
			lastRadiusY = options.radiusY;
			
			if (this.options.drawReverse) {
				bars.push(bar);
			}
			else {
				this.addLayer(bar);
			}
		}
		
		if (this.options.drawReverse) {
			var item = bars.pop();
		
			while (item) {
				this.addLayer(item);
				item = bars.pop();
			}
		}
		
	}
});

/*
 * 
 */
L.RadialMeterMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},

	options: {
		weight:	1,
		opacity: 1,
		color: '#000',
		fill: true,
		radius: 10,
		rotation: 180.0,
		numberOfSides: 30,
		offset: 2,
		barThickness: 5,
		maxDegrees: 180.0,
		iconSize: new L.Point(50, 40),
		backgroundStyle: {
			fill: true,
			fillColor: '#707070',
			fillOpacity: 0.2,
			opacity: 0.8,
			color: '#505050'
		}
	},

	_loadComponents: function() {
		var value, minValue, maxValue;
		var startAngle = this.options.rotation;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var bar;
		var options = this.options;
		var radiusX = this.options.radiusX || this.options.radius;
		var radiusY = this.options.radiusY || this.options.radius;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var barThickness = this.options.barThickness || 4;
		var lastAngle = startAngle;
		var numSegments = this.options.numSegments || 10;
		var angleDelta = maxDegrees / numSegments;
		var displayOptions;
		
		// Iterate through the data values
		for (var key in data) {
			value = parseFloat(data[key]);
			chartOption = chartOptions[key];
			displayOptions = this.options.displayOptions ? this.options.displayOptions[key] : {};
			
			minValue = chartOption.minValue || 0;
			maxValue = chartOption.maxValue || 100;
			
			var range = maxValue - minValue;

			var angle = (maxDegrees / range) * (value - minValue);
			
			var endAngle = startAngle + angle;
			var maxAngle = startAngle + maxDegrees;
			
			var evalFunction = new L.LinearFunction(new L.Point(startAngle, minValue), new L.Point(maxAngle, maxValue));
			
			while (lastAngle < endAngle) {
				options.startAngle = lastAngle;
				
				var delta = Math.min(angleDelta, endAngle - lastAngle);
				
				options.endAngle = lastAngle + delta;
				options.fillColor = chartOption.fillColor;
				options.radiusX = radiusX;
				options.radiusY = radiusY;
				options.barThickness = barThickness;
				options.rotation = 0;
				options.key = key;
				options.value = value;
				options.displayName = chartOption.displayName;
				options.displayText = chartOption.displayText;
				
				var evalValue = evalFunction.evaluate(lastAngle + delta);
				
				for (var displayKey in displayOptions) {
					options[displayKey] = displayOptions[displayKey].evaluate ? displayOptions[displayKey].evaluate(evalValue) : displayOptions[displayKey];
				}
				
				bar = new L.RadialBarMarker(this._latlng, options);
				
				this._bindMouseEvents(bar);
				
				this.addLayer(bar);
				
				lastAngle += delta;
			}
			
			// Add a background
			if (this.options.backgroundStyle) {
				if (lastAngle < maxAngle) {
					var delta = maxAngle - lastAngle;
				
					options.endAngle = lastAngle + delta;
					options.radiusX = radiusX;
					options.radiusY = radiusY;
					options.barThickness = barThickness;
					options.rotation = 0;
					options.key = key;
					options.value = value;
					options.displayName = chartOption.displayName;
					options.displayText = chartOption.displayText;
					
					options.fillColor = null;
					options.fill = false;
					options.gradient = false;
					
					for (var property in this.options.backgroundStyle) {
						options[property] = this.options.backgroundStyle[property];
					}
					
					var evalValue = evalFunction.evaluate(lastAngle + delta);
				
					bar = new L.RadialBarMarker(this._latlng, options);

					this.addLayer(bar);
				}
			}
		}
	}
});