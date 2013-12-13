var TextFunctions = TextFunctions || {
	__updatePath: L.Path.prototype._updatePath,
	
	_updatePath: function () {
		this.__updatePath.call(this);
		
		if (this.options.text) {
			this._createText(this.options.text);
		}
	},
	
	_initText: function () {
		if (this.options.text) {
			this._createText(this.options.text);
		}
	},
	
	getTextAnchor: function () {
		if (this._point) {
			return this._point;
		}
	},
	
	setTextAnchor: function (anchorPoint) {
		if (this._text) {
			this._text.setAttribute('x', anchorPoint.x);
			this._text.setAttribute('y', anchorPoint.y);
		}
	},
	
	_createText: function (options) {
		if (this._text) {
			this._container.removeChild(this._text);
		}
		
		if (this._pathDef) {
			this._defs.removeChild(this._pathDef);
		}
		
		// Set element style
		var setStyle = function (element, style) {
			var styleString = '';
			
			for (var key in style) {
				styleString += key + ': ' + style[key] + ';';
			}
			
			element.setAttribute('style', styleString);
			
			return element;
		};
		
		// Set attributes for an element
		var setAttr = function (element, attr) {
			for (var key in attr) {
				element.setAttribute(key, attr[key]);
			}
			
			return element;
		};
		
		this._text = this._createElement('text');
		
		var textNode = document.createTextNode(options.text);
		
		// If path is true, then create a textPath element and append it
		// to the text element; otherwise, populate the text element with a text node
		if (options.path) {
			
			var pathOptions = options.path;
			
			// Generate and set an id for the path - the textPath element will reference this id
			var pathID = L.Util.guid();

			var clonedPath = this._createElement('path');
			clonedPath.setAttribute('d', this._path.getAttribute('d'));
			clonedPath.setAttribute('id', pathID);
			
			if (!this._defs) {
				this._defs = this._createElement('defs');
				this._container.appendChild(this._defs);
			}
			
			this._defs.appendChild(clonedPath);
			this._pathDef = clonedPath;
			
			// Create the textPath element and add attributes to reference this path
			var textPath = this._createElement('textPath');
			
			if (pathOptions.startOffset) {
				textPath.setAttribute('startOffset', pathOptions.startOffset);
			}
			
			if (pathOptions.attr) {
				setAttr(textPath, pathOptions.attr);
			}
			
			if (pathOptions.style) {
				setStyle(textPath, pathOptions.style);
			}
			
			textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + pathID);
			textPath.appendChild(textNode);
			
			// Add the textPath element to the text element
			this._text.appendChild(textPath); 
		}
		else {
			this._text.appendChild(textNode);
			var anchorPoint = this.getTextAnchor();
			this.setTextAnchor(anchorPoint);
		}
		
		//className
		if (options.className) {
			this._text.setAttribute('class', options.className);
		}
		else {
			this._text.setAttribute('class', 'leaflet-svg-text');
		}
		
		//attributes		
		if (options.attr) {
			setAttr(this._text, options.attr);
		}
		
		//style
		if (options.style) {
			setStyle(this._text, options.style);
		}
		
		this._container.appendChild(this._text);
	}
};

var PathFunctions = PathFunctions || {
	__updateStyle: L.Path.prototype._updateStyle,
	
	_createDefs: function () {
		this._defs = this._createElement('defs');
		this._container.appendChild(this._defs);
	},
	
	_createGradient: function (options) {
	
		if (!this._defs) {
			this._createDefs();
		};
		
		if (this._gradient) {
			this._defs.removeChild(this._gradient);
		}
		
		var gradient = this._createElement('linearGradient');
		var gradientGuid = L.Util.guid();
		
		options = options !== true ? $.extend(true, {}, options) : {};
		
		var vector = options.vector || [['0%','0%'], ['100%','100%']];
		var vectorOptions = {
			x1: vector[0][0],
			x2: vector[1][0],
			y1: vector[0][1],
			y2: vector[1][1]
		};
		
		vectorOptions.id = 'grad' + gradientGuid;
		
		var stops = options.stops || [
			{
				offset: '0%',
				style: {
					color: 'rgb(255, 255, 255)',
					opacity: 1
				}
			},
			{
				offset: '60%',
				style: {
					color: this.options.fillColor || this.options.color,
					opacity: 1
				}
			}
		];
		
		for (var key in vectorOptions) {
			gradient.setAttribute(key, vectorOptions[key]);
		}
		
		for (var i = 0; i < stops.length; ++i) {
			var stop = stops[i];
			var stopElement = this._createElement('stop');
			
			stop.style = stop.style || {};
			
			for (var key in stop) {
				var stopProperty = stop[key];
				
				if (key === 'style') {
					var styleProperty = '';

					stopProperty.color = stopProperty.color || (this.options.fillColor || this.options.color);
					stopProperty.opacity = typeof stopProperty.opacity === 'undefined' ? 1 : stopProperty.opacity;
					
					for (var propKey in stopProperty) {
						styleProperty += 'stop-' + propKey + ':' + stopProperty[propKey] + ';';
					}
		
					stopProperty = styleProperty;
				}
				
				stopElement.setAttribute(key, stopProperty);
			}
			
			gradient.appendChild(stopElement);
		}
		
		this._gradient = gradient;
		this._defs.appendChild(gradient);
	},
	
	_createDropShadow: function (options) {
	
		if (!this._defs) {
			this._createDefs();
		};
		
		if (this._dropShadow) {
			this._defs.removeChild(this._dropShadow);
		}
		
		var filterGuid = L.Util.guid();
		var filter = this._createElement('filter');
		var feOffset = this._createElement('feOffset');
		var feGaussianBlur = this._createElement('feGaussianBlur');
		var feBlend = this._createElement('feBlend');
		
		options = options || {
			width: '200%',
			height: '200%'
		};
		
		options.id = 'filter' + filterGuid;
		
		for (var key in options) {
			filter.setAttribute(key, options[key]);
		}
		
		var offsetOptions = {
			result: 'offOut',
			in: 'SourceAlpha',
			dx: '2',
			dy: '2'
		};
		
		var blurOptions = {
			result: 'blurOut',
			in: 'offOut',
			stdDeviation: '2'
		};

		var blendOptions = {
			in: 'SourceGraphic',
			in2: 'blurOut',
			mode: 'lighten'
		};

		for (var key in offsetOptions) {
			feOffset.setAttribute(key, offsetOptions[key]);
		}
		
		for (var key in blurOptions) {
			feGaussianBlur.setAttribute(key, blurOptions[key]);
		}
		
		for (var key in blendOptions) {
			feBlend.setAttribute(key, blendOptions[key]);
		}
		
		filter.appendChild(feOffset);
		filter.appendChild(feGaussianBlur);
		filter.appendChild(feBlend);
		
		this._dropShadow = filter;
		this._defs.appendChild(filter);
	},
	
	_updateStyle: function () {
		this.__updateStyle.call(this);
		
		if (this.options.stroke) {
			if (this.options.lineCap) {
				this._path.setAttribute('stroke-linecap', this.options.lineCap);
			}
		
			if (this.options.lineJoin) {
				this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
			}
		}
		
		if (this.options.gradient) {
			this._createGradient(this.options.gradient);
			
			this._path.setAttribute('fill', 'url(#' + this._gradient.getAttribute('id') + ')');
		}
		else if (!this.options.fill) {
			this._path.setAttribute('fill', 'none');
		}
		
		if (this.options.dropShadow) {
			this._createDropShadow();

			this._path.setAttribute('filter', 'url(#' + this._dropShadow.getAttribute('id') + ')');
		}
		else {
			this._path.removeAttribute('filter');
		}
		
		if (this.options.transform) {
			this._path.setAttribute('transform', this.options.transform);
		}
	}

};

// Extend the TextFunctions above and change the __updatePath reference, since
// _updatePath for a line/polygon is different than for a regular path
var LineTextFunctions = $.extend(true, {}, TextFunctions);
LineTextFunctions.__updatePath = L.Polyline.prototype._updatePath;

// Pulled from the Leaflet discussion here:  https://github.com/Leaflet/Leaflet/pull/1586
LineTextFunctions.getCenter = function () {
		var latlngs = this._latlngs,
				len = latlngs.length,
				i, j, p1, p2, f, center;

		for (i = 0, j = len - 1, area = 0, lat = 0, lng = 0; i < len; j = i++) {
				p1 = latlngs[i];
				p2 = latlngs[j];
				f = p1.lat * p2.lng - p2.lat * p1.lng;
				lat += (p1.lat + p2.lat) * f;
				lng += (p1.lng + p2.lng) * f;
				area += f / 2;
		}

		center = area ? new L.LatLng(lat / (6 * area), lng / (6 * area)) : latlngs[0];
		center.area = area;

		return center;
};

// Sets the text anchor to the centroid of a line/polygon
LineTextFunctions.getTextAnchor = function () {
	var center = this.getCenter();
	
	return this._map.latLngToLayerPoint(center);
};

L.Polyline.include(LineTextFunctions);
L.CircleMarker.include(TextFunctions);

L.Path.include(PathFunctions);
L.Polygon.include(PathFunctions);
L.Polyline.include(PathFunctions);
L.CircleMarker.include(PathFunctions);

/*
 * Draws a Leaflet map marker using SVG rather than an icon, allowing the marker to be dynamically styled
 */
L.MapMarker = L.Path.extend({
	
	includes: TextFunctions,
	
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);
		
		this._latlng = centerLatLng;
	},

	options: {
		fill: true,
		fillOpacity: 1,
		opacity: 1,
		radius: 15,
		innerRadius: 5,
		position: {
			x: 0,
			y: 0
		},
		rotation: 0,
		numberOfSides: 50,
		color: '#000000',
		fillColor: '#0000FF',
		weight: 1,
		gradient: true,
		dropShadow: true
	},

	setLatLng: function (latlng) {
		this._latlng = latlng;
		return this.redraw();
	},
	
	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._points = this._getPoints();
		
		if (this.options.innerRadius) {
			this._innerPoints = this._getPoints(true).reverse();
		}
	},

	getBounds: function () {
		var map = this._map,
			height = this.options.radius * 3,
			point = map.project(this._latlng),
			swPoint = new L.Point(point.x - this.options.radius, point.y),
			nePoint = new L.Point(point.x + this.options.radius, point.y - height),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._latlng;
	},

	getPathString: function () {
		this._path.setAttribute('shape-rendering', 'geometricPrecision');
		return new L.SVGPathBuilder(this._points, this._innerPoints).build(6);
	},

	getTextAnchor: function () {
		return new L.Point(this._point.x, this._point.y - 2 * this.options.radius);
	},
	
	_getPoints: function (inner) {
		var maxDegrees = !inner ? 210 : 360;
		var angleSize = !inner ? maxDegrees / 50 : maxDegrees / Math.max(this.options.numberOfSides, 3);
		var degrees = !inner ? maxDegrees : maxDegrees + this.options.rotation;
		var angle = !inner ? -30 : this.options.rotation;
		var points = [];
		var newPoint;
		var angleRadians;
		var radius = this.options.radius;
		var multiplier = Math.sqrt(0.75);
		
		var toRad = function (number) {
			return number * L.LatLng.DEG_TO_RAD;
		};
		
		var startPoint = this._point;
		
		if (!inner) {
			points.push(startPoint);
			points.push(new L.Point(startPoint.x + multiplier * radius, startPoint.y - 1.5 * radius));
		}
		
		while (angle < degrees) {
			
			angleRadians = toRad(angle);
			
			// Calculate the point the radius pixels away from the center point at the
			// given angle;
			newPoint = this._getPoint(angleRadians, radius, inner);
			
			// Add the point to the latlngs array
			points.push(newPoint);
			
			// Increment the angle
			angle += angleSize;
		}
		
		if (!inner) {
			points.push(new L.Point(startPoint.x - multiplier * radius, startPoint.y - 1.5 * radius));
		}
		
		return points;
	},
	
	_getPoint: function (angle, radius, inner) {
		var markerRadius = radius;
		
		radius = !inner ? radius : this.options.innerRadius;
		
		return new L.Point(this._point.x + this.options.position.x + radius * Math.cos(angle), this._point.y - 2 * markerRadius + this.options.position.y - radius * Math.sin(angle));
	}
});

L.mapMarker = function (centerLatLng, options) {
	return new L.MapMarker(centerLatLng, options);
};

/*
 * Draws a regular polygon marker on the map given a radius (or x and y radii) in pixels
 */
L.RegularPolygonMarker = L.Path.extend({
	includes: TextFunctions,
	
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);
		
		this._latlng = centerLatLng;

		this.options.numberOfSides = Math.max(this.options.numberOfSides, 3);
	},

	options: {
		fill: true,
		radiusX: 10,
		radiusY: 10,
		rotation: 0,
		numberOfSides: 3,
		position: {
			x: 0,
			y: 0
		},
		maxDegrees: 360,
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
		
		if (this.options.innerRadius || (this.options.innerRadiusX && this.options.innerRadiusY)) {
			this._innerPoints = this._getPoints(true).reverse();
		}
	},

	getBounds: function () {
		var map = this._map,
			radiusX = this.options.radius || this.options.radiusX,
			radiusY = this.options.radius || this.options.radiusY,
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
		this._path.setAttribute('shape-rendering', 'geometricPrecision');
		
		//this._initText();
		
		//this.setTextAnchor(this._point);
		
		return new L.SVGPathBuilder(this._points, this._innerPoints).build(6);
	},

	_getPoints: function (inner) {
		var maxDegrees = this.options.maxDegrees || 360;
		var angleSize = maxDegrees / Math.max(this.options.numberOfSides, 3);
		var degrees = maxDegrees + this.options.rotation;
		var angle = this.options.rotation;
		var points = [];
		var newPoint;
		var angleRadians;
		var radiusX = !inner ? this.options.radius || this.options.radiusX : this.options.innerRadius || this.options.innerRadiusX;
		var radiusY = !inner ? this.options.radius || this.options.radiusY : this.options.innerRadius || this.options.innerRadiusY;
		
		var toRad = function (number) {
			return number * L.LatLng.DEG_TO_RAD;
		};
		
		while (angle < degrees) {
			
			angleRadians = toRad(angle);
			
			// Calculate the point the radius pixels away from the center point at the
			// given angle;
			newPoint = this._getPoint(angleRadians, radiusX, radiusY);
			
			// Add the point to the latlngs array
			points.push(newPoint);
			
			// Increment the angle
			angle += angleSize;
		}
		
		return points;
	},
	
	_getPoint: function (angle, radiusX, radiusY) {
		return new L.Point(this._point.x + this.options.position.x + radiusX * Math.cos(angle), this._point.y + this.options.position.y + radiusY * Math.sin(angle));
	}
});

L.regularPolygonMarker = function (centerLatLng, options) {
	return new L.RegularPolygonMarker(centerLatLng, options);
};

// Displays a star on the map
L.StarMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfPoints: 5,
		rotation: -15.0,
		maxDegrees: 360,
		gradient: true,
		dropShadow: true
	},
	
	_getPoints: function (inner) {
		var maxDegrees = this.options.maxDegrees || 360;
		var angleSize = maxDegrees / this.options.numberOfPoints;
		var degrees = maxDegrees + this.options.rotation;
		var angle = this.options.rotation;
		var points = [];
		var newPoint, newPointInner;
		var angleRadians;
		var radiusX = !inner ? this.options.radius || this.options.radiusX : this.options.innerRadius || this.options.innerRadiusX;
		var radiusY = !inner ? this.options.radius || this.options.radiusY : this.options.innerRadius || this.options.innerRadiusY;
		
		var toRad = function (number) {
			return number * L.LatLng.DEG_TO_RAD;
		};

		while (angle < degrees) {
			
			angleRadians = toRad(angle);
			
			// Calculate the point the radius meters away from the center point at the
			// given angle;
			newPoint = this._getPoint(angleRadians, radiusX, radiusY);
			newPointInner = this._getPoint(angleRadians + toRad(angleSize) / 2, radiusX / 2, radiusY / 2);
			
			// Add the point to the latlngs array
			points.push(newPoint);
			points.push(newPointInner);
			
			// Increment the angle
			angle += angleSize;
		}
		
		return points;
	}
});

L.starMarker = function (centerLatLng, options) {
	return new L.StarMarker(centerLatLng, options);
};

L.TriangleMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 3,
		rotation: 30.0,
		radius: 5
	}
});

L.triangleMarker = function (centerLatLng, options) {
	return new L.TriangleMarker(centerLatLng, options);
};

L.DiamondMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 4,
		radiusX: 5,
		radiusY: 10
	}
});

L.diamondMarker = function (centerLatLng, options) {
	return new L.DiamondMarker(centerLatLng, options);
};

L.SquareMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 4,
		rotation: 45.0,
		radius: 5
	}
});

L.squareMarker = function (centerLatLng, options) {
	return new L.SquareMarker(centerLatLng, options);
};

L.PentagonMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 5,
		rotation: -18.0,
		radius: 5
	}
});

L.pentagonMarker = function (centerLatLng, options) {
	return new L.PentagonMarker(centerLatLng, options);
};

L.HexagonMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 6,
		rotation: 30.0,
		radius: 5
	}
});

L.hexagonMarker = function (centerLatLng, options) {
	return new L.HexagonMarker(centerLatLng, options);
};

L.OctagonMarker = L.RegularPolygonMarker.extend({
	options: {
		numberOfSides: 8,
		rotation: 22.5,
		radius: 5
	}
});

L.octagonMarker = function (centerLatLng, options) {
	return new L.OctagonMarker(centerLatLng, options);
};
