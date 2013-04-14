var L = L || {};

/*
 * Draws a Leaflet map marker using SVG rather than an icon, allowing the marker to be dynamically styled
 */
L.MapMarker = L.Path.extend({
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);
		
		this._centerLatLng = centerLatLng;
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
		weight: 1
	},

	setLatLng: function (latlng) {
		this._centerLatLng = latlng;
		return this.redraw();
	},
	
	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._centerLatLng);
		this._points = this._getPoints();
		
		if (this.options.innerRadius) {
			this._innerPoints = this._getPoints(true).reverse();
		}
	},

	getBounds: function () {
		var map = this._map,
			height = this.options.radius * 3,
			point = map.project(this._centerLatLng),
			swPoint = new L.Point(point.x - this.options.radius, point.y),
			nePoint = new L.Point(point.x + this.options.radius, point.y - height),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._centerLatLng;
	},

	getPathString: function () {
		return new L.SVGPathBuilder(this._points, this._innerPoints).toString();
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
		
		var toRad = function (number) {
			return number * Math.PI / 180;
		};
		
		var startPoint = this._point;
		
		if (!inner) {
			points.push(startPoint);
			points.push(new L.Point(startPoint.x + Math.sqrt(0.75) * radius, startPoint.y - 1.5 * radius));
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
			points.push(new L.Point(startPoint.x - Math.sqrt(0.75) * radius, startPoint.y - 1.5 * radius));
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
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);
		
		this._centerLatLng = centerLatLng;

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
		maxDegrees: 360
	},

	setLatLng: function (latlng) {
		this._centerLatLng = latlng;
		return this.redraw();
	},
	
	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._centerLatLng);
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
			point = map.project(this._centerLatLng),
			swPoint = new L.Point(point.x - deltaX, point.y + deltaY),
			nePoint = new L.Point(point.x + deltaX, point.y - deltaY),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._centerLatLng;
	},

	getPathString: function () {
		return new L.SVGPathBuilder(this._points, this._innerPoints).toString();
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
			return number * Math.PI / 180;
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
		maxDegrees: 360
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
			return number * Math.PI / 180;
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
