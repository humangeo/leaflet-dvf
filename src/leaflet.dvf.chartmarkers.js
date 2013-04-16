var L = L || {};

/*
 * Class for a drawing a bar marker on the map.  This is the basis for the BarChartMarker
 */
L.BarMarker = L.Path.extend({
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);

		this._centerLatLng = centerLatLng;
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
		opacity: 1.0
	},

	setLatLng: function (latlng) {
		this._centerLatLng = latlng;
		return this.redraw();
	},

	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._centerLatLng);
		this._points = this._getPoints();
	},

	getBounds: function () {
		var map = this._map,
			point = map.project(this._centerLatLng),
			halfWidth = this.options.width/2,
			swPoint = new L.Point(point.x - halfWidth, point.y),
			nePoint = new L.Point(point.x + halfWidth, point.y - this.options.maxHeight),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._centerLatlng;
	},

	getPathString: function () {
		return new L.SVGPathBuilder(this._points).toString();
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
	},

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
		this._centerLatLng = centerLatLng;
		
		this._loadBars();
	},
	
	setLatLng: function (latlng) {
		this._centerLatLng = latlng;
		return this.redraw();
	},

	getLatLng: function () {
		return this._centerLatlng;
	},

	_loadBars: function () {
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
			
			currentOptions.marker = new L.Marker(self._centerLatLng, {
				icon: icon
			});
			
			currentOptions = self._highlight(currentOptions);
			
			this.initialize(self._centerLatLng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
			
			self.addLayer(currentOptions.marker);
		});
		
		chartElement.on('mouseout', function (e) {
			var currentOptions = this.options;
			
			currentOptions = self._unhighlight(currentOptions);
			
			this.initialize(self._centerLatLng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
			
			self.removeLayer(currentOptions.marker);
		});
	},
	
	bindPopup: function (content, options) {
		this.eachLayer(function (layer) {
			layer.bindPopup(content, options);
		});
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

	_loadBars: function () {
		var value, minValue, maxValue;
		var angle = this.options.rotation;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var bar;
		var options = this.options;
		var dataPoint;
		var lastRadiusX = this.options.radiusX || this.options.radius;
		var lastRadiusY = this.options.radiusY || this.options.radius;
		
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
			
			var range = maxValue - minValue;
			
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
			
			bar = new L.BarMarker(this._centerLatLng, options);
			
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

		this._centerLatLng = centerLatLng;		
	},

	options: {
		fill: true,
		radius: 10,
		rotation: 0,
		numberOfSides: 30,
		position: {
			x: 0,
			y: 0
		}
	},

	setLatLng: function (latlng) {
		this._centerLatLng = latlng;
		return this.redraw();
	},

	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._centerLatLng);	
		this._points = this._getPoints();
	},

	getBounds: function () {
		var map = this._map,
			radiusX = this.options.radiusX || this.options.radius,
			radiusY = this.options.radiusY || this.options.radius,
			deltaX = radiusX * Math.cos(Math.PI / 4),
			deltaY = radiusY * Math.sin(Math.PI / 4),
			point = map.project(this._centerLatLng),
			swPoint = new L.Point(point.x - deltaX, point.y + deltaY),
			nePoint = new L.Point(point.x + deltaX, point.y - deltaY),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);
	
		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._centerLatlng;
	},

	getPathString: function () {
		return new L.SVGPathBuilder(this._points).toString();
	},

	_getPoints: function () {

		var angleDelta = this.options.endAngle - this.options.startAngle;
		var angleSize = angleDelta / this.options.numberOfSides;
		var degrees = this.options.endAngle + this.options.rotation;
		var angle = this.options.startAngle + this.options.rotation;
		var points = [];
		var innerPoints = [];
		var newPoint, innerPoint;
		var angleRadians;
		var radiusX = 'radiusX' in this.options ? this.options.radiusX : this.options.radius; 
		var radiusY = 'radiusY' in this.options ? this.options.radiusY : this.options.radius;
		var toRad = function (number) {
			return number * Math.PI / 180;
		};

		if (angleSize > 0) {
			if (!this.options.barThickness) {
				points.push(this._point);
			}
		
			while (angle <= degrees + 1) {
			
				angleRadians = toRad(angle);
			
				// Calculate the point the radius meters away from the center point at the
				// given angle;
				newPoint = this._getPoint(angleRadians, radiusX, radiusY);
			
				// Add the point to the latlngs array
				points.push(newPoint);
			
				// If a barThickness is specified, then compute the inner points of the bar polygon
				if (this.options.barThickness) {
					innerPoint = this._getPoint(angleRadians, radiusX - this.options.barThickness, radiusY - this.options.barThickness);
					innerPoints.push(innerPoint);
				}
			
				// Increment the angle
				angle += angleSize;
			}
		
			// Reverse the inner points and add them to the bar polygon points
			if (this.options.barThickness) {
				innerPoints.reverse();
			
				for (var index = 0; index < innerPoints.length; ++index) {
					points.push(innerPoints[index]);
				}
			}
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
		var oldBarThickness = options.barThickness;
		options.oldBarThickness = oldBarThickness;
		options.radiusX *= options.mouseOverExaggeration;
		options.radiusY *= options.mouseOverExaggeration;
		options.barThickness = options.radiusX - oldRadiusX + oldBarThickness;
		return options;
	},
	
	_unhighlight: function (options) {
		options.radiusX /= options.mouseOverExaggeration;
		options.radiusY /= options.mouseOverExaggeration;
		options.barThickness = options.oldBarThickness;
		return options;
	},
	
	_loadBars: function () {
		var value;
		var sum = 0;
		var angle = 0;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var lastAngle = this.options.rotation;
		var bar;
		var options = this.options;
		var dataPoint;
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
			
				bar = new L.RadialBarMarker(this._centerLatLng, options);
			
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
		iconSize: new L.Point(50, 40)
	},

	_loadBars: function () {
		var value, minValue, maxValue;
		var sum = 0;
		var angle = 0;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var lastAngle = this.options.rotation;
		var bar;
		var options = this.options;
		var dataPoint;
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
			
			var evalFunctionX = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, radiusX));
			var evalFunctionY = new L.LinearFunction(new L.Point(minValue, 0), new L.Point(maxValue, radiusY)); 

			options.startAngle = lastAngle;
			options.endAngle = lastAngle + angle;
			options.fillColor = chartOption.fillColor;
			options.color = chartOption.color || '#000';
			options.radiusX = evalFunctionX.evaluate(value);
			options.radiusY = evalFunctionY.evaluate(value);
			options.rotation = 0;
			
			// Set the key and value for use later
			options.key = key;
			options.value = value;
			options.displayName = chartOption.displayName;
			options.displayText = chartOption.displayText;
			
			bar = new L.RadialBarMarker(this._centerLatLng, options);
			
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

	_loadBars: function() {
		var value, minValue, maxValue;
		var angle = this.options.rotation;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var bar;
		var options = this.options;
		var dataPoint;
		var count = 0;
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
			
			bar = new L.RadialBarMarker(this._centerLatLng, options);
			
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
	
	_loadBars: function () {
		var value;
		var sum = 0;
		var angle = 0;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var lastRadiusX = 0;
		var lastRadiusY = 0;
		var bar;
		var options = this.options;
		var dataPoint;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var key;
		
		// Iterate through the data values
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
			
			bar = new L.RegularPolygonMarker(this._centerLatLng, options);
			
			this._bindMouseEvents(bar);
			
			lastRadiusX = options.radiusX;
			lastRadiusY = options.radiusY;
			
			this.addLayer(bar);
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
		iconSize: new L.Point(50, 40)
	},

	_loadBars: function() {
		var value, minValue, maxValue;
		var startAngle = this.options.rotation;
		var percentage = 0.0;
		var maxDegrees = this.options.maxDegrees || 360.0;
		var bar;
		var options = this.options;
		var dataPoint;
		var count = 0;
		var radiusX = this.options.radiusX || this.options.radius;
		var radiusY = this.options.radiusY || this.options.radius;
		var data = this.options.data;
		var chartOptions = this.options.chartOptions;
		var chartOption;
		var barThickness = this.options.barThickness || 4;
		var offset = this.options.offset || 2;
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
			
			var evalFunction = new L.LinearFunction(new L.Point(startAngle, minValue), new L.Point(startAngle + maxDegrees, maxValue));
			
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
				
				bar = new L.RadialBarMarker(this._centerLatLng, options);
				
				this._bindMouseEvents(bar);
				
				this.addLayer(bar);
				
				lastAngle += delta;
			}
			
			
		}
	}
});