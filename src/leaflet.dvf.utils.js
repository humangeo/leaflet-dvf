// indexOf doesn't work in IE 8 and below, so add this method if it doesn't exist
// Copied from:  http://stackoverflow.com/questions/1744310/how-to-fix-array-indexof-in-javascript-for-ie-browsers
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
		 for (var i = (start || 0), j = this.length; i < j; i++) {
			 if (this[i] === obj) { return i; }
		 }
		 return -1;
	}
}

// Add the keys method to the Object class if it doesn't exist
// Object.keys is supported in newer browsers IE9+, etc.
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
			dontEnums = ['toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'],
	        dontEnumsLength = dontEnums.length;

		return function (obj) {
			var result, prop, i;

			if ((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
				throw new TypeError('Object.keys called on non-object');
			}

			result = [];

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
	    };
	})();
}

L.Util.guid = function () {
	var s4 = function() {
	  return Math.floor((1 + Math.random()) * 0x10000)
				 .toString(16)
				 .substring(1);
	};

	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

L.Util.getProperty = function (obj, property, defaultValue) {
	return (property in obj) ? obj[property] : defaultValue;
};

L.Util.setFieldValue = function (record, fieldName, value) {
	var keyParts = fieldName.split('.');
	var pointer = record;
	var part;

	for (var i = 0; i < keyParts.length - 1; ++i) {
		part = keyParts[i];
		pointer[part] = pointer[part] || {};
		pointer = pointer[part];
	}

	pointer[keyParts[keyParts.length - 1]] = value;
};

L.Util.getFieldValue = function (record, fieldName) {

	var value = null;

	if (fieldName) {
		var parts = fieldName.split('.');
		var valueField = record;
		var part;
		var searchParts;
		var searchKey;
		var searchValue;
		var testObject;
		var searchPart;
		var bracketIndex = -1;
		var testValue;

		for (var partIndex = 0; partIndex < parts.length; ++partIndex) {
			part = parts[partIndex];

			bracketIndex = part.indexOf('[');

			if (bracketIndex > -1) {

				searchPart = part.substring(bracketIndex);
				part = part.substring(0, bracketIndex);

				searchPart = searchPart.replace('[', '').replace(']', '');

				searchParts = searchPart.split('=');
				searchKey = searchParts[0];
				searchValue = searchParts[1];

				valueField = valueField[part];

				for (var valueIndex = 0; valueIndex < valueField.length; ++valueIndex) {
					testObject = valueField[valueIndex];

					testValue = testObject[searchKey];

					if (testValue && testValue === searchValue) {
						valueField = testObject;
					}
				}
			}
			else if (valueField && valueField.hasOwnProperty(part)) {
				valueField = valueField[part];
			}
			else {
				valueField = null;
				break;
			}
		}

		value = valueField;
	}
	else {
		value = record;
	}

	return value;
};

L.Util.getNumericRange = function (records, fieldName) {
	var min = Number.MAX_VALUE;
	var max = Number.MIN_VALUE;

	for (var index in records) {
		if (records.hasOwnProperty(index)) {
			var record = records[index];
			var value = L.Util.getFieldValue(record, fieldName);
			min = Math.min(min, value);
			max = Math.max(max, value);
		}
	}

	return [min, max];
};

L.Util.pointToGeoJSON = function () {
	var feature = {
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [this._latlng[1], this._latlng[0]]
		},
		properties: {}
	}
	
	for (var key in this.options) {
		if (this.options.hasOwnProperty(key)) {
			var value = this.options[key];
			
			if (typeof(value) !== 'function') {
				feature.properties[key] = value;
			}
		}
	}
	
	return feature;
};

L.Util.updateLayer = function (layer, updateFunction) {
	if (layer.eachLayer && !layer instanceof L.FeatureGroup) {
		layer.eachLayer(function (layer) {
			L.Util.updateLayer(layer, updateFunction);
		});
	}
	else {
		updateFunction.call(this, layer);
	}
};

L.CategoryLegend = L.Class.extend({
	initialize: function (options) {
		L.Util.setOptions(this, options);
	},

	generate: function (options) {
		options = options || {};

		var container = document.createElement('div');
		var legend = L.DomUtil.create('div', 'legend', container);
		var className = options.className;
		var legendOptions = this.options;

		if (className) {
			L.DomUtil.addClass(legend, className);
		}

		if (options.title) {
			L.DomUtil.create('div', 'legend-title', legend).innerHTML = options.title;
		}

		for (var key in legendOptions) {
			categoryOptions = legendOptions[key];

			var displayName = categoryOptions.displayName || key;

			var legendElement = L.DomUtil.create('div', 'data-layer-legend', legend);
			var legendBox = L.DomUtil.create('div', 'legend-box', legendElement);

			L.DomUtil.create('div', 'key', legendElement).innerHTML = displayName;
			L.StyleConverter.applySVGStyle(legendBox, categoryOptions);
		}

		return container.innerHTML;
	}
});

/*
 * Uses Leaflet's DivIcon class for adding a legend popup to data markers
 */
L.LegendIcon = L.DivIcon.extend({
	initialize: function (fields, layerOptions, options) {
		var container = document.createElement('div');
		var legendContent = L.DomUtil.create('div', 'legend', container);
		var legendTitle = L.DomUtil.create('div', 'title', legendContent);
		var legendBox = L.DomUtil.create('div', 'legend-box', legendContent);
		var legendValues = L.DomUtil.create('div', 'legend-values', legendContent);
		var field;
		var title = layerOptions.title || layerOptions.name;

		if (title) {
			legendTitle.innerHTML = title;
		}

		for (var key in fields) {
			field = fields[key];
			L.DomUtil.create('div', 'key', legendValues).innerHTML = field.name || key;
			L.DomUtil.create('div', 'value', legendValues).innerHTML = field.value;
		}

		L.StyleConverter.applySVGStyle(legendBox, layerOptions);

		legendBox.style.height = '5px';

		options.html = container.innerHTML;
		options.className = options.className || 'legend-icon';

		L.DivIcon.prototype.initialize.call(this, options);
	}
});

L.legendIcon = function (fields, layerOptions, options) {
	return new L.LegendIcon(fields, layerOptions, options);
};

L.GeometryUtils = {

	getName: function (geoJSON) {
		var name = null;

		if (geoJSON && geoJSON.features) {
			for (var index = 0; index < geoJSON.features.length; ++index) {
				var feature = geoJSON.features[index];
				if (feature.properties && feature.properties.name) {
					name = feature.properties.name;
					break;
				}
			}
		}

		return name;
	},

	getGeoJSONLocation: function (geoJSON, record, locationTextField, recordToLayer) {
		var geoJSONLayer = new L.GeoJSON(geoJSON, {
			pointToLayer: function (feature, latlng) {
				var location = {
					location: latlng,
					text: locationTextField ? L.Util.getFieldValue(record, locationTextField) : [latlng.lat.toFixed(3),latlng.lng.toFixed(3)].join(', '),
					center: latlng
				};

				return recordToLayer(location, record);
			}
		});

		var center = null;

		try {
			center = L.GeometryUtils.loadCentroid(geoJSON);
		}
		catch (ex) {
			console.log('Error loading centroid for ' + JSON.stringify(geoJSON));
		}

		return {
			location: geoJSONLayer,
			text: locationTextField ? L.Util.getFieldValue(record, locationTextField) : null,
			center: center
		};
	},

	// Merges a set of properties into the properties of each feature of a GeoJSON FeatureCollection
	mergeProperties: function (properties, featureCollection, mergeKey) {
		var features = featureCollection['features'];
		var featureIndex = L.GeometryUtils.indexFeatureCollection(features, mergeKey);
		var property;
		var mergeValue;
		var newFeatureCollection = {
			type: 'FeatureCollection',
			features: []
		};

		for (var key in properties) {
			if (properties.hasOwnProperty(key)) {
				property = properties[key];

				mergeValue = property[mergeKey];

				if (mergeValue) {
					var feature = featureIndex[mergeValue];

					for (var prop in property) {
						feature.properties[prop] = property[prop];
					}

					newFeatureCollection.features.push(feature);
				}
			}
		}

		return newFeatureCollection;
	},

	// Indexes a GeoJSON FeatureCollection using the provided key
	indexFeatureCollection: function (featureCollection, indexKey) {
		var features = featureCollection.features;
		var feature;
		var properties;
		var featureIndex = {};
		var value;

		for (var index = 0; index < features.length; ++index) {
			feature = features[index];

			properties = feature.properties;

			value = properties[indexKey];

			// If the value already exists in the index, then either create a GeometryCollection or append the
			// feature's geometry to the existing GeometryCollection
			if (value in featureIndex) {
				var existingFeature = featureIndex[value];

				if (existingFeature.geometry.type !== 'GeometryCollection') {
					featureIndex[value] = {
						type: 'Feature',
						geometry: {
							type: 'GeometryCollection',
							geometries: [feature.geometry, existingFeature.geometry]
						}
					}
				}
				else {
					existingFeature.geometry.geometries.push(feature.geometry);
				}
			}
			else {
				featureIndex[value] = feature;
			}
		}

		return featureIndex;
	},

	arrayToMap: function (array, fromKey, toKey) {
		var map = {};
		var item;
		var from;
		var to;

		for (var index = 0; index < array.length; ++index) {
			item = array[index];

			from = item[fromKey];

			to = toKey ? item[toKey] : item;

			map[from] = to;

		}

		return map;
	},

	arrayToMaps: function (array, mapLinks) {
		var map;
		var item;
		var from;
		var to;
		var maps = [];
		var mapLink;
		var fromKey;
		var toKey;

		for (var i = 0; i < mapLinks.length; ++i) {
			maps.push({});
		}

		for (var index = 0; index < array.length; ++index) {
			item = array[index];

			for (var keyIndex = 0; keyIndex < mapLinks.length; ++keyIndex) {
				map = maps[keyIndex];
				mapLink = mapLinks[keyIndex];

				fromKey = mapLink.from;
				toKey = mapLink.to;

				from = item[fromKey];
				to = toKey ? item[toKey] : item;

				map[from] = to;
			}
		}

		return maps;
	},

	loadCentroid:  function (feature) {
		var centroidLatLng = null;
		var centroid;
		var x,y;

		if (feature.geometry && feature.geometry.type === 'Point') {
			centroidLatLng = new L.LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
		}
		else if (typeof jsts !== 'undefined') {

			var parser = new jsts.io.GeoJSONParser();
			var jstsFeature = parser.read(feature);

			if (jstsFeature.getCentroid) {
				centroid = jstsFeature.getCentroid();
				x = centroid.coordinate.x;
				y = centroid.coordinate.y;
			}
			else if (jstsFeature.features) {
				var totalCentroidX = 0;
				var totalCentroidY = 0;

				for (var i=0;i < jstsFeature.features.length;++i) {
					centroid = jstsFeature.features[i].geometry.getCentroid();

					totalCentroidX += centroid.coordinate.x;
					totalCentroidY += centroid.coordinate.y;
				}

				x = totalCentroidX/jstsFeature.features.length;
				y = totalCentroidY/jstsFeature.features.length;
			}
			else {
				centroid = jstsFeature.geometry.getCentroid();
				x = centroid.coordinate.x;
				y = centroid.coordinate.y;
			}

			centroidLatLng = new L.LatLng(y, x);

		}

		return centroidLatLng;
	},

	loadCentroids:  function (dictionary) {
		var centroids = {};
		var feature;

		for (var key in dictionary) {
			feature = dictionary[key];
			centroids[key] = L.GeometryUtils.loadCentroid(feature);
		}

		return centroids;
	}
};

L.SVGPathBuilder = L.Class.extend({
	initialize: function (points, innerPoints, options) {
		this._points = points || [];
		this._innerPoints = innerPoints || [];

		L.Util.setOptions(this, options);
	},

	options: {
		closePath: true
	},

	_getPathString: function (points, digits) {
		var pathString = '';

		if (points.length > 0) {

			var point = points[0];
			var digits = digits !== null ? digits : 2;
			var startChar = 'M';
			var lineToChar = 'L';
			var closePath = 'Z';

			if (L.Browser.vml) {
				digits = 0;
				startChar = 'm';
				lineToChar = 'l';
				closePath = 'xe';
			}

			pathString = startChar + point.x.toFixed(digits) + ',' + point.y.toFixed(digits);

			for (var index = 1;index < points.length;index++) {
				point = points[index];
				pathString += lineToChar + point.x.toFixed(digits) + ',' + point.y.toFixed(digits);
			}

			if (this.options.closePath) {
				pathString += closePath;
			}

		}

		return pathString;
	},

	addPoint: function (point, inner) {
		inner ? this._innerPoints.push(point) : this._points.push(point);
	},

	build: function (digits) {
		digits = digits || this.options.digits;

		var pathString = this._getPathString(this._points, digits);

		if (this._innerPoints) {
			pathString += this._getPathString(this._innerPoints, digits);
		}

		return pathString;
	}
});

L.StyleConverter = {
	keyMap: {
		fillColor: {
			property: ['background-color'],
			valueFunction: function (value) {
				return value;
			}
		},
		color: {
			property: ['color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'], //border
			valueFunction: function (value) {
				return value;
			}
		},
		weight: {
			property: ['border-width'],
			valueFunction: function (value) {
				return Math.ceil(value) + 'px';
			}
		},
		stroke: {
			property: ['border-style'],
			valueFunction: function (value) {
				return value === true ? 'solid' : 'none';
			}
		},
		dashArray: {
			property: ['border-style'],
			valueFunction: function (value) {
				var style = 'solid';

				if (value) {
					style = 'dashed';
				}

				return style;
			}
		},
		barThickness: {
			property: ['height'],
			valueFunction: function (value) {
				return value + 'px';
			}
		},
		radius: {
			property: ['height'],
			valueFunction: function (value) {
				return 2 * value + 'px';
			}
		},
		fillOpacity: {
			property: ['opacity'],
			valueFunction: function (value) {
				return value;
			}
		}
	},

	applySVGStyle: function (element, svgStyle, additionalKeys) {
		var keyMap = L.StyleConverter.keyMap;

		if (additionalKeys) {
			keyMap = L.Util.extend(keyMap, additionalKeys);
		}

		element.style.borderStyle = 'solid';

		for (var property in svgStyle) {
			L.StyleConverter.setCSSProperty(element, property, svgStyle[property], keyMap);
		}

		return element;
	},

	setCSSProperty: function (element, key, value, keyMap) {
		var keyMap = keyMap || L.StyleConverter.keyMap;
		var cssProperty = keyMap[key];
		var cssText = '';

		if (cssProperty) {
			var propertyKey = cssProperty.property;
			for (var propertyIndex = 0, propertyLength = propertyKey.length; propertyIndex < propertyLength; ++propertyIndex) {
				cssText += propertyKey[propertyIndex] + ':' + cssProperty.valueFunction(value) + ';';
			}
		}
		element.style.cssText += cssText;

		return element;
	}
};

L.StylesBuilder = L.Class.extend({
	initialize: function (categories, styleFunctionMap) {
		this._categories = categories;
		this._styleFunctionMap = styleFunctionMap;

		this._buildStyles();
	},

	_buildStyles: function () {
		var map = {};
		var category;
		var styleFunction;
		var styleValue;

		for (var index = 0; index < this._categories.length; ++index) {
			category = this._categories[index];

			map[category] = {};

			for (var property in this._styleFunctionMap) {
				styleFunction = this._styleFunctionMap[property];

				styleValue = styleFunction.evaluate ? styleFunction.evaluate(index) : (typeof styleFunction === 'function' ? styleFunction(index) : styleFunction);

				map[category][property] = styleValue;
			}
		}

		this._styleMap = map;
	},

	getStyles: function () {
		return this._styleMap;
	}


});

L.PaletteBuilder = L.Class.extend({
	initialize: function (styleFunctionMap) {
		this._styleFunctionMap = styleFunctionMap;
	},

	generate: function (options) {
		options = options || {};

		var container = document.createElement('div');
		var paletteElement = L.DomUtil.create('div', 'palette', container);
		var count = options.count || 10;
		var categories = (function (count) {
			var categoryArray = [];

			for (var i = 0; i < count; ++i) {
				categoryArray.push(i);
			}

			return categoryArray;
		})(count);

		var styleBuilder = new L.StylesBuilder(categories, this._styleFunctionMap);
		var styles = styleBuilder.getStyles();

		if (options.className) {
			L.DomUtil.addClass(paletteElement, options.className);
		}

		for (var styleKey in styles) {
			var i = L.DomUtil.create('i', 'palette-element', paletteElement);
			var style = styles[styleKey];

			L.StyleConverter.applySVGStyle(i, style);
		}

		return container.innerHTML;

	}
});

L.HTMLUtils = {
	buildTable: function (obj, className, ignoreFields) {
		className = className || 'table table-condensed table-striped table-bordered';

		var table = L.DomUtil.create('table', className);
		var thead = L.DomUtil.create('thead', '', table);
		var tbody = L.DomUtil.create('tbody', '', table);
		thead.innerHTML = '<tr><th>Name</th><th>Value</th></tr>';

		ignoreFields = ignoreFields || [];

		function inArray(arrayObj, value) {
			for (var i = 0, l = arrayObj.length; i < l; i++) {
				if (arrayObj[i] === value) {
					return true;
				}
			}
			return false;
		}

		for (var property in obj) {
			if (obj.hasOwnProperty(property) && !inArray(ignoreFields, property)) {
				var value = obj[property];
				if (typeof value === 'object') {
					var container = document.createElement('div');
					container.appendChild(L.HTMLUtils.buildTable(value, ignoreFields));
					value = container.innerHTML;
				}
				tbody.innerHTML += '<tr><td>' + property + '</td><td>' + value + '</td></tr>';
			}
		}

		return table;
	}
};

/*
 * Provides basic animation of numeric properties.  TODO:  Change this to use L.Util.requestAnimFrame
 */
L.AnimationUtils = {
	animate: function (layer, from, to, options) {
		var delay = options.delay || 0;
		var frames = options.frames || 30;
		var duration = options.duration || 500;
		var linearFunctions = {};
		var easeFunction = options.easeFunction || function (step) { return step };
		var complete = options.complete;
		var step = duration / frames;

		for (var key in from) {
			if (key != 'color' && key != 'fillColor' && to[key]) {
				linearFunctions[key] = new L.LinearFunction([0, from[key]], [frames - 1, to[key]]);
			}
			else if (key == 'color' || key == 'fillColor') {
				linearFunctions[key] = new L.RGBColorBlendFunction(0, frames - 1, from[key], to[key]);
			}
		}

		var layerOptions = {};

		var frame = 0;

		var updateLayer = function () {
			for (var key in linearFunctions) {
				layerOptions[key] = linearFunctions[key].evaluate(frame);
			}

			layer.options = L.extend({}, layer.options, layerOptions);
			layer.setStyle(layer.options).redraw();

			frame++;

			step = easeFunction(step);

			if (frame < frames) {
				setTimeout(updateLayer, step);
			}
			else {
				complete();
			}
		};

		setTimeout(updateLayer, delay);
	}
};

/**
 * Adapted from:  http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
 * These functions will be used to provide backwards compatibility with browsers that don't support hsl
 */
L.Color = L.Class.extend({
	initialize: function (colorDef) {
		this._rgb = [0, 0, 0];
		this._hsl = [0, 1, 0.5];
		this._a = 1.0;

		if (colorDef) {
			this.parseColorDef(colorDef);
		}
	},

	parseColorDef: function (colorDef) {
		// Override in inheriting classes
	},

	/**
	 * Converts an RGB color value to HSL. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes r, g, and b are contained in the set [0, 255] and
	 * returns h, s, and l in the set [0, 1].
	 *
	 * @param   Number  r       The red color value
	 * @param   Number  g       The green color value
	 * @param   Number  b       The blue color value
	 * @return  Array           The HSL representation
	 */
	rgbToHSL: function(r, g, b){
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0; // achromatic
	    }else{
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }

	    return [h, s, l];
	},

	/**
	 * Converts an HSL color value to RGB. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes h, s, and l are contained in the set [0, 1] and
	 * returns r, g, and b in the set [0, 255].
	 *
	 * @param   Number  h       The hue
	 * @param   Number  s       The saturation
	 * @param   Number  l       The lightness
	 * @return  Array           The RGB representation
	 */
	hslToRGB: function(h, s, l){
	    var r, g, b;

	    if(s == 0){
	        r = g = b = l; // achromatic
	    }else{
	        function hue2rgb(p, q, t){
	            if(t < 0) t += 1;
	            if(t > 1) t -= 1;
	            if(t < 1/6) return p + (q - p) * 6 * t;
	            if(t < 1/2) return q;
	            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	            return p;
	        }

	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }

	    return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
	},

	setRGB: function (r, g, b) {
		this._rgb = [r, g, b];

		this._hsl = this.rgbToHSL(r, g, b);

		return this;
	},

	setHSL: function (h, s, l) {
		this._hsl = [h, s, l];

		this._rgb = this.hslToRGB(h, s, l);

		return this;
	},

	toHSL: function () {
		// Return HSL components
		return this._hsl;
	},

	toHSLString: function () {
		// Return HSL string
		var prefix = 'hsl';

		if (this._a < 1.0) {
			prefix += 'a';
		}

		return prefix + '(' + (this._hsl[0] * 360).toFixed(1) + ',' + (this._hsl[1] * 100).toFixed(0) + '%,' + (this._hsl[2] * 100).toFixed(0) + '%)';
	},

	toRGB: function () {
		// Return RGB components
		return this._rgb;
	},

	toRGBString: function () {
		// Return RGB string
		var rgbString;

		if (this._a < 1.0) {
			rgbString = 'rgba(' + this._rgb[0].toFixed(0) + ',' + this._rgb[1].toFixed(0) + ',' + this._rgb[2].toFixed(0) + ',' + this._a.toFixed(1) + ')';
		}
		else {
			var parts = [this._rgb[0].toString(16), this._rgb[1].toString(16), this._rgb[2].toString(16)];

			for (var i = 0; i < parts.length; ++i) {
				if (parts[i].length === 1) {
					parts[i] = '0' + parts[i];
				}
			}

			rgbString = '#' +  parts.join('');
		}

		return rgbString;
	},

	r: function (newR) {
		if (!arguments.length) return this._rgb[0];
    	return this.setRGB(newR, this._rgb[1], this._rgb[2]);
	},

	g: function (newG) {
		if (!arguments.length) return this._rgb[1];
    	return this.setRGB(this._rgb[0], newG, this._rgb[2]);
	},

	b: function (newB) {
		if (!arguments.length) return this._rgb[2];
    	return this.setRGB(this._rgb[0], this._rgb[1], newB);
	},

	h: function (newH) {
		if (!arguments.length) return this._hsl[0];
    	return this.setHSL(newH, this._hsl[1], this._hsl[2]);
	},

	s: function (newS) {
		if (!arguments.length) return this._hsl[1];
    	return this.setHSL(this._hsl[0], newS, this._hsl[2]);
	},

	l: function (newL) {
		if (!arguments.length) return this._hsl[2];
    	return this.setHSL(this._hsl[0], this._hsl[1], newL);
	},

	a: function (newA) {
		if (!arguments.length) return this._a;
    	this._a = newA;
    	return this;
	}
});

/*
 * A class representing an RGB color - extends L.Color
 */
L.RGBColor = L.Color.extend({
	initialize: function (colorDef) {
		L.Color.prototype.initialize.call(this, colorDef);
	},

	parseColorDef: function (colorDef) {
		var isArray = colorDef instanceof Array;
		var isHex = colorDef.indexOf('#') === 0;
		var parts = [];
		var r, g, b, a;

		if (isArray) {
			r = Math.floor(colorDef[0]);
			g = Math.floor(colorDef[1]);
			b = Math.floor(colorDef[2]);

			a = colorDef.length === 4 ? colorDef[3] : 1.0;
		}
		else if (isHex) {
			colorDef = colorDef.replace('#','');

			r = parseInt(colorDef.substring(0, 2), 16);
			g = parseInt(colorDef.substring(2, 4), 16);
			b = parseInt(colorDef.substring(4, 6), 16);

			a = colorDef.length === 8 ? parseInt(colorDef.substring(6, 8), 16) : 1.0;
		}
		else {
			parts = colorDef.replace('rgb','').replace('a','').replace(/\s+/g,'').replace('(','').replace(')','').split(',');

			r = parseInt(parts[0]);
			g = parseInt(parts[1]);
			b = parseInt(parts[2]);

			a = parts.length === 4 ? parseInt(parts[3]) : 1.0;
		}

		this.setRGB(r, g, b);
		this._a = a;
	}
});

L.rgbColor = function (colorDef) {
	return new L.RGBColor(colorDef);
};

L.HSLColor = L.Color.extend({
	initialize: function (colorDef) {
		L.Color.prototype.initialize.call(this, colorDef);
	},

	parseColorDef: function (colorDef) {
		// Could be a string or an array
		var isArray = colorDef instanceof Array;
		var h, s, l, a;

		if (isArray) {
			h = colorDef[0];
			s = colorDef[1];
			l = colorDef[2];

			a = colorDef.length === 4 ? colorDef[3] : 1.0;
		}
		else {
			var parts = colorDef.replace('hsl','').replace('a','').replace('(','').replace(/\s+/g,'').replace(/%/g,'').replace(')','').split(',');

			h = Number(parts[0])/360;
			s = Number(parts[1])/100;
			l = Number(parts[2])/100;

			a = parts.length === 4 ? parseInt(parts[3]) : 1.0;
		}

		this.setHSL(h, s, l);
		this._a = a;
	}
});

L.hslColor = function (colorDef) {
	return new L.HSLColor(colorDef);
};

/*
 * A generic animation class based on the L.PosAnimation code from Leaflet
 */
L.Animation = L.Class.extend({

	initialize: function (easeFunction, animateFrame) {
		this._easeFunction = easeFunction; // Function that takes time as an input parameter
		this._animateFrame = animateFrame;
	},
	
	run: function (el, options) { // (HTMLElement, Point[, Number, Number])
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = options.duration || 0.25;
		
		this._animationOptions = options;
		this._startTime = +new Date();

		this.fire('start');

		this._animate();
	},

	stop: function () {
		if (!this._inProgress) { return; }

		this._step();
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = L.Util.requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function () {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeFunction(elapsed / duration));
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress) {
		this._animateFrame(progress);

		this.fire('step');
	},

	_complete: function () {
		L.Util.cancelAnimFrame(this._animId);

		this._inProgress = false;
		this.fire('end');
	}
});