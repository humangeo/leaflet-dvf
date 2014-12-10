/*
 *
 */
L.CalloutLine = L.Path.extend({
	statics: {
		LINESTYLE: {
			ARC: 'arc',
			ANGLE: 'angle',
			STRAIGHT: 'straight'
		},
		DIRECTION: {
			NE: 'ne',
			NW: 'nw',
			SE: 'se',
			SW: 'sw'
		}
	}
});

L.CalloutLine = L.CalloutLine.extend({
	initialize: function (latlng, options) {
		L.Util.setOptions(this, options);
		L.Path.prototype.initialize.call(this, options);
		this._latlng = latlng;
	},
	
	options: {
		size: new L.Point(60, 30),
		position: new L.Point(0, 0),
		color: '#FFFFFF',
		opacity: 1,
		weight: 2,
		fillColor: '#000000',
		fill: false,
		gradient: false,
		dropShadow: false,
		direction: L.CalloutLine.DIRECTION.NE,
		lineStyle: L.CalloutLine.LINESTYLE.ANGLE,
		lineCap: 'butt',
		lineJoin: 'miter',
		arrow: false
	},
	
	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._points = this._getPoints();
	},

	getEndPoint: function () {
		this.projectLatlngs();
		
		return this._points[this._points.length - 1];
	},
	
	_getPathAngle: function () {
		return new L.SVGPathBuilder(this._points, [], {
			closePath: false
		}).build(6);
	},
	
	_getPathArc: function () {
		var direction = (this.options.direction || L.CalloutLine.DIRECTION.NE).toLowerCase();
		var yDirection = direction[0];
		var yMultiplier = yDirection === 'n' ? -1 : 1;
		var point1 = this._points[0];
		var point2 = this._points[this._points.length - 1];
		
		var parts = ['M', point1.x, ',', point1.y, ' Q', point1.x, ',', point1.y + yMultiplier * this.options.size.y, ' ', point2.x, ',', point2.y];
	
		return parts.join(' ');
	},
	
	_getPoints: function () {
		var x = this._point.x + this.options.position.x;
		var y = this._point.y + this.options.position.y;
		var width = this.options.size.x;
		var height = this.options.size.y;
		var direction = (this.options.direction || L.CalloutLine.DIRECTION.NE).toLowerCase();
		
		var points = [];
		var xDirection = direction[1];
		var yDirection = direction[0];
		
		var xMultiplier = xDirection === 'w' ? -1 : 1;
		var yMultiplier = yDirection === 'n' ? -1 : 1;
		
		points.push(new L.Point(x, y));
		
		var yEnd = y + yMultiplier * height;
		var halfWidth = width / 2;
		
		var angle = Math.atan(height / halfWidth);
		
		if (this.options.lineStyle === L.CalloutLine.LINESTYLE.ARC) {
			angle = Math.atan(Math.pow(height, 2) / halfWidth);
		}
		else if (this.options.lineStyle === L.CalloutLine.LINESTYLE.STRAIGHT) {
			angle = Math.atan(height/ width);
		}
		
		this._angle = angle;
		
		if (this.options.lineStyle !== L.CalloutLine.LINESTYLE.STRAIGHT) {
			var elbowPoint = new L.Point(x + xMultiplier * halfWidth, yEnd);
		
			points.push(elbowPoint);
		}
		
		var endPoint = new L.Point(x + xMultiplier * width, yEnd);
		
		points.push(endPoint);
		
		return points;
	},
	
	getBounds: function () {
		var map = this._map,
			point = map.project(this._latlng),
			swPoint = new L.Point(point.x + this.options.position.x, point.y + this.options.position.y),
			nePoint = new L.Point(swPoint.x + this.options.size.x, swPoint.y - this.options.size.y),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	setLatLng: function (latlng) {
		this._latlng = latlng;
		this.redraw();
	},
	
	getLatLng: function () {
		return this._latlng;
	},

	getPathString: function () {
		this._path.setAttribute('shape-rendering', 'geometricPrecision');
		
		var lineStyle = this.options.lineStyle || L.CalloutLine.LINESTYLE.ANGLE;
		var path = '';
		
		if (lineStyle === L.CalloutLine.LINESTYLE.ANGLE || lineStyle === L.CalloutLine.LINESTYLE.STRAIGHT) {
			path += this._getPathAngle();
		}
		else {
			path += this._getPathArc();
		}
		
		return path;
	}
});

L.calloutLine = function (latlng, options) {
	return new L.CalloutLine(latlng, options);
};

/*
 *
 */
L.Callout = L.LayerGroup.extend({
	options: {
		color: '#FFFFFF',
		fillColor: '#FFFFFF'
	},
	
	initialize: function (latlng, options) {
		L.Util.setOptions(this, options);
		
		L.LayerGroup.prototype.initialize.call(this, options);
		
		this._latlng = latlng;
	},
	
	onAdd: function (map) {
		L.LayerGroup.prototype.onAdd.call(this, map);
		
		this.addLayers();
	},
	
	onRemove: function (map) {
		L.LayerGroup.prototype.onRemove.call(this, map);
		
		this.clearLayers();
	},
	
	addArrow: function (angle, direction, position) {
		if (this.options.arrow) {
			var angle = L.LatLng.RAD_TO_DEG * angle;
			var numberOfSides = this.options.numberOfSides || 3;
			var radius = this.options.radius || 6;
			
			var startRotation = 180 / numberOfSides;
			
			var offsets = {
				se: startRotation + angle,
				sw: 180 + startRotation - angle,
				nw: 180 + startRotation + angle,
				ne: startRotation - angle
			};
			
			var rotation = offsets[direction];
			
			var arrow = new L.RegularPolygonMarker(this._latlng, {
				position: position,
				numberOfSides: numberOfSides,
				rotation: rotation,
				fillColor: this.options.fillColor,
				color: this.options.color,
				gradient: this.options.gradient,
				weight: this.options.weight,
				opacity: this.options.opacity,
				fillOpacity: this.options.fillOpacity,
				radius: radius,
				lineCap: 'butt',
				lineJoin: 'miter'
			});
			
			this.addLayer(arrow);
		}
	},
	
	addLine: function () {
		var lineOptions = {};
		
		for (var key in this.options) {
			if (key !== 'icon') {
				lineOptions[key] = this.options[key];
			}
		}
		
		var calloutLine = new L.CalloutLine(this._latlng, lineOptions);
		
		this.addLayer(calloutLine);
		
		return calloutLine;
	},
	
	addIcon: function (direction, position) {
		var size = this.options.size;
		var icon = this.options.icon;
		var iconSize = icon.options.iconSize;
		
		var yDirection = direction[0];
		var xDirection = direction[1];
		
		var xAnchor = xDirection === 'w' ? iconSize.x + size.x - position.x : -1 * (size.x + position.x);
		var yAnchor = yDirection === 'n' ? iconSize.y/2 + size.y - position.y : -1 * (-iconSize.y/2 + size.y + position.y);
		
		icon.options.iconAnchor = new L.Point(xAnchor, yAnchor);
		
		var iconMarker = new L.Marker(this._latlng, {
			icon: icon
		});
		
		this.addLayer(iconMarker);
	},
	
	addLayers: function () {
		var direction = (this.options.direction || 'ne').toLowerCase();
		var position = this.options.position || new L.Point(0, 0);
		var calloutLine;
		
		calloutLine = this.addLine();
		
		this.addIcon(direction, position);
		
		this.addArrow(calloutLine._angle, direction, position);
	}
});

L.callout = function (latlng, options) {
	return new L.Callout(latlng, options);
};


L.FlowLine = L.DataLayer.extend({
	statics: {
		LINE_FUNCTION: function (latlng1, latlng2, options) {
			return new L.Polyline([latlng1, latlng2], options);
		},
		LINE_FUNCTION_INTERPOLATED: function (latlng1, latlng2, options) {
			var point1 = this._map.latlngToLayerPoint(latlng1);
			var point2 = this._map.latlngToLayerPoint(latlng2);
			var lineFunction = new L.LinearFunction(point1, point2);
			
			var numPoints = Math.ceil(point1.distanceTo(point2)/options.interpolationOptions.segmentLength);
			var points = lineFunction.samplePoints(numPoints);
			
			// Need the passed in records in order to interpolate record field values
			// TODO:  Implement this
		}
	}
});

/*
 *
 */
L.FlowLine = L.FlowLine.extend({
	initialize: function (data, options) {
		L.Util.setOptions(this, options);
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	options: {
		getLine: L.FlowLine.LINE_FUNCTION,
		showLegendTooltips: true,
		setHighlight: function (layerStyle) {
			layerStyle.opacity = layerStyle.opacity || 1.0;
			layerStyle.opacity /= 1.5;

			return layerStyle;
		},
		unsetHighlight: function (layerStyle) {
			layerStyle.opacity = layerStyle.opacity || 0.66;
			layerStyle.opacity *= 1.5;

			return layerStyle;
		}
	},
	
	onEachSegment: function (record1, record2, line) {
		var deltas = {};
		
		if (this.options.timeField) {
			var timeValue1 = L.Util.getFieldValue(record1, this.options.timeField);
			var timeValue2 = L.Util.getFieldValue(record2, this.options.timeField);
			var format = this.options.timeFormat;
			
			var moment1 = format ? moment(timeValue1, format) : moment(timeValue1);
			var moment2 = format ? moment(timeValue2, format) : moment(timeValue2);
			var deltaTime = moment2.valueOf() - moment1.valueOf(); // in milliseconds
			
			deltas.time = deltaTime;
		}
			
		for (var key in this.options.displayOptions) {
			var value1 = L.Util.getFieldValue(record1, key);
			var value2 = L.Util.getFieldValue(record2, key);
			var change = value2 - value1;
			var percentChange = (change / value1) * 100;
			
			deltas[key] = {
				from: value1,
				to: value2,
				change: change,
				percentChange: percentChange
			};
			
			if (deltas.time) {
				deltas[key].changeOverTime = change/deltas.time;
			}
		}
		
		var latlngs = line.getLatLngs();
		var distance = latlngs[0].distanceTo(latlngs[1]);
		var velocity;
		
		if (deltas.time) {
			velocity = distance/(deltas.time * 1000);	
		}
		
		if (this.options.onEachSegment) {
			this.options.onEachSegment.call(this, record1, record2, line, deltas, distance, velocity);
		}
	},
	
	_loadRecords: function (records) {
		var markers = [];
		
		this._lastRecord = null;
		
		for (var recordIndex in records) {
			if (records.hasOwnProperty(recordIndex)) {
				var record = records[recordIndex];
			
				record = this.options.deriveProperties ? this.options.deriveProperties(record) : record;
				
				markers = this._addRecord(record, recordIndex, markers);
			}
		}
		
		while (markers.length > 0) {
			this.addLayer(markers.pop());
		}
	},
	
	addRecord: function (record) {
		this._addRecord(record);
		
		return this;
	},
	
	_addRecord: function (record, recordIndex, markers) {
		var location = this._getLocation(record, recordIndex);
		var options = this.options.layerOptions;
		
		if (location) {
			var marker = this._getLayer(location, options, record);
			var line;
			
			var includeLayer = true;

			if (this.options.includeLayer) {
				includeLayer = this.options.includeLayer(record);
			}
			
			if (this._lastRecord && includeLayer) {
				
				var options = this._getDynamicOptions(this._lastRecord);
				
				line = this.options.getLine.call(this, this._lastMarker.getLatLng(), marker.getLatLng(), options.layerOptions);
			
				this.addLayer(line);
				
				if (this.options.showLegendTooltips) {
					this._bindMouseEvents(line, options.layerOptions, options.legendDetails);
				}
				
				this.onEachSegment(this._lastRecord, record, line);
				
			};
			
			if (includeLayer) {
				this._lastRecord = record;
				this._lastMarker = marker;
			}
		}
		
		return markers;
	}	
});

L.flowLine = function (data, options) {
	return new L.FlowLine(data, options);
};

/*
 *
 */
L.ArcedFlowLine = L.FlowLine.extend({
	options: {
		getLine: function (latlng1, latlng2, options) {
			return new L.ArcedPolyline([latlng1, latlng2], options);
		}
	},
	
	initialize: function (data, options) {
		L.FlowLine.prototype.initialize.call(this, data, options);
	}
});

L.arcedFlowLine = function (data, options) {
	return new L.ArcedFlowLine(data, options);
};

/*
 * Custom arced polyline implementation.  Draws segments as arcs rather than straight lines.
 */
L.ArcedPolyline = L.Path.extend({
	includes: TextFunctions,
	
	initialize: function (latlngs, options) {
		L.Path.prototype.initialize.call(this, options);
		this._latlngs = latlngs;
	},
	
	options: {
		distanceToHeight: new L.LinearFunction([0, 5], [1000, 200]),
		color: '#FFFFFF',
		opacity: 1,
		weight: 1,
		fillColor: '#000000',
		fill: false,
		gradient: false,
		dropShadow: false,
		optimizeSpeed: false
	},
	
	projectLatlngs: function () {
		this._points = [];
		
		for (var i = 0; i < this._latlngs.length; ++i) {
			this._points.push(this._map.latLngToLayerPoint(this._latlngs[i]));
		}
	},
	
	getBounds: function () {
		var bounds = new L.LatLngBounds();
		
		for (var i = 0; i < this._latlngs.length; ++i) {
			bounds.extend(this._latlngs[i]);
		}
		
		return bounds;
	},

	setLatLngs: function (latlngs) {
		this._latlngs = latlngs;
		this.redraw();
	},
	
	getLatLngs: function () {
		return this._latlngs;
	},

	drawSegment: function (point1, point2) {
		var distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
		var heightOffset = this.options.distanceToHeight.evaluate(distance);

		var parts = ['M', point1.x, ',', point1.y, ' C', point1.x, ',', point1.y - heightOffset, ' ', point2.x, ',', point2.y - heightOffset, ' ', point2.x, ',', point2.y ];
		
		return parts.join(' ');
	},
	
	getPathString: function () {
		if (this.options.optimizeSpeed) {
			this._path.setAttribute('shape-rendering', 'optimizeSpeed');
		}
		
		var parts = [];
		
		for (var i = 0; i < this._points.length - 1; ++i) {
			parts.push(this.drawSegment(this._points[i], this._points[i + 1]));
		}
		
		return parts.join('') ;
	}
});

L.arcedPolyline = function (latlngs, options) {
	return new L.ArcedPolyline(latlngs, options);
};