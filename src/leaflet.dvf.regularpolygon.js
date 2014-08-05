/*
 * Draws a regular polygon on the map given a radius in meters
 */
L.RegularPolygon = L.Polygon.extend({
	statics: {
		R: 6378.137,
		M_PER_KM: 1000
	},
	
	initialize: function (centerLatLng, options) {
		this._centerLatLng = centerLatLng;

		L.Util.setOptions(this, options);
		L.Polygon.prototype.initialize.call(this, this._getLatLngs(), options);
	},
	
	options: {
		fill: true,
		radius: 1000.0,
		numberOfSides: 4,
		rotation: 0.0,
		maxDegrees: 360
	},
	
	getLatLng: function () {
		return this._centerLatLng;
	},
	
	setRadius: function (radius) {
		this.options.radius = radius;
		this._latlngs = this._getLatLngs();
		this.redraw();
	},
	
	_getLatLngs: function () {

		var maxDegrees = this.options.maxDegrees || 360;
		var angleSize = maxDegrees / Math.max(this.options.numberOfSides, 3);
		var degrees = maxDegrees + this.options.rotation;
		var angle = this.options.rotation;
		var latlngs = [];
		var newLatLng;
		
		while (angle < degrees) {
			// Calculate the point the radius meters away from the center point at the
			// given angle;
			newLatLng = this._getPoint(angle);
			
			// Add the point to the latlngs array
			latlngs.push(newLatLng);
			
			// Increment the angle
			angle += angleSize;
		}
		
		return latlngs;
	},
	
	// Get an end point that is the specified radius (in m) from the center point at the specified
	// angle
	_getPoint: function (angle) {
		
		var toRad = function (number) {
			return number * L.LatLng.DEG_TO_RAD;
		};
		
		var toDeg = function (number) {
			return number * L.LatLng.RAD_TO_DEG;
		};
		
		var angleRadians = toRad(angle);
		var angularDistance = this.options.radius / L.RegularPolygon.M_PER_KM / L.RegularPolygon.R;
		var lat1 = toRad(this._centerLatLng.lat);
		var lon1 = toRad(this._centerLatLng.lng);
		var lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) + Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(angleRadians));
		var lon2 = lon1 + Math.atan2(Math.sin(angleRadians) * Math.sin(angularDistance) * Math.cos(lat1), Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));
		
		lat2 = toDeg(lat2);
		lon2 = toDeg(lon2);
		
		return new L.LatLng(lat2, lon2);
	},
	
	toGeoJSON: function () {
		var feature = {
			type: 'Feature',
			geometry: {
				type: 'Polygon',
				coordinates: [[],[]]
			},
			properties: this.options
		};
		
		for (var i = 0; i < this._latlngs.length; ++i) {
			var latlng = this._latlngs[i];
			
			feature.coordinates[0].push([latlng[1], latlng[0]]);
		}
		
		return feature;
	}
});

L.regularPolygon = function (centerLatLng, options) {
	return new L.RegularPolygon(centerLatLng, options);
};