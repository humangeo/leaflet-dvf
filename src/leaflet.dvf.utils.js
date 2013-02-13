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

var L = L || {};

L.LinearLegend = L.Class.extend({
	initialize: function (categoryFunction, options) {
		L.Util.setOptions(this, options);
		
		this._categoryFunction = categoryFunction;
	},
	
	generate: function () {
		
	}
});

L.CategoryLegend = L.Class.extend({
	initialize: function (options) {
		L.Util.setOptions(this, options);
	},
	
	generate: function (options) {
		options = options || {};
		
		var legend = '<div class="legend"></div>';
		var $legend = $(legend);
		var className = options.className;
		var legendOptions = this.options;
		
		if (className) {
			$legend.addClass(className);
		}
		
		if (options.title) {
			$legend.append('<div class="legend-title">' + options.title + '</div>');
		}
		
		for (var key in legendOptions) {
			categoryOptions = legendOptions[key];
			
			var displayName = categoryOptions.displayName || key;
			
			var $legendElement = $('<div class="data-layer-legend"><div class="legend-box"></div><div class="key">' + displayName + '</div></div>')
			
			var $legendBox = $legendElement.find('.legend-box');
			
			L.StyleConverter.applySVGStyle($legendBox, categoryOptions);
			
			$legend.append($legendElement);
		}
		
		return $legend.wrap('<div/>').parent().html();
	}
});

/*
 * Uses Leaflet's DivIcon class for adding a legend popup to data markers
 */
L.LegendIcon = L.DivIcon.extend({
	initialize: function (fields, layerOptions, options) {
		
		var html = '<div class="legend-content"><div class="title"></div><div class="legend-box"></div><div class="legend-values"></div></div>';
		var $html = $(html);
		var $legendBox = $html.find('.legend-box');
		var $legendValues = $html.find('.legend-values');
		var field;
		var title = layerOptions.title || layerOptions.name;
		
		if (title) {
			$html.find('.title').text(title);
		}
		
		for (var key in fields) {
			field = fields[key];
			
			var displayName = field.name || key;
			var displayText = field.value;
			
			$legendValues.append('<div class="key">' + displayName + '</div><div class="value">' + displayText + '</div>');
		}
		
		L.StyleConverter.applySVGStyle($legendBox, layerOptions);
		
		$legendBox.height(5);
		
		html = $html.wrap('<div>').parent().html();

		options.html = html;
		options.className = options.className || 'legend-icon';
		
		L.DivIcon.prototype.initialize.call(this, options);
	}
});

L.legendIcon = function (fields, layerOptions, options) {
	return new L.LegendIcon(fields, layerOptions, options);
};

L.GeometryUtils = {
	arrayToMap: function (array, fromKey, toKey) {
		var map = {}; 
		var item;
		var from;
		var to;
		
		for (var index = 0; index < array.length; ++index) {
			item = array[index];
			
			from = item[fromKey];
			to = item[toKey];
			
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
				to = item[toKey];
				
				map[from] = to;
			}
		}
		
		return maps;
	},
	
	loadCentroid:  function (feature) {
		var parser = new jsts.io.GeoJSONParser();
		var jstsFeature = parser.read(feature);
		var centroid;
		var x,y;
		
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
		
		return new L.LatLng(y,x);
	},
	
	loadCentroids:  function (dictionary) {
		var centroids = {};
		var feature;
		var parser = new jsts.io.GeoJSONParser();
		var jstsFeature;
		var centroid;
		var x,y;
		
		for (var key in dictionary) {
			feature = dictionary[key];
			centroids[key] = L.GeometryUtils.loadCentroid(feature);
		}
		
		return centroids;
	}	
};

/*
 * 
 */
L.BoundaryService = L.Class.extend({
	initialize: function (url) {
		this._url = url;
	},
	
	loadCentroids: function (data) {
		var centroids = {};
		var feature;
		var parser = new jsts.io.GeoJSONParser();
		var jstsFeature;
		var centroid;
		var x,y;
		
		for (var key in data) {
			feature = data[key];
			
			if (feature.properties && feature.properties['CENTERLAT'] && feature.properties['CENTERLON']) {
				y = feature.properties['CENTERLAT'];
				x = feature.properties['CENTERLON'];
			}
			else {
				jstsFeature = parser.read(feature);
				
				if (jstsFeature.getCentroid) {
					centroid = jstsFeature.getCentroid();
					x = centroid.coordinate.x;
					y = centroid.coordinate.y;
				}
				else if (jstsFeature.geometry && jstsFeature.geometry.getCentroid) {
					centroid = jstsFeature.geometry.getCentroid();
					x = centroid.coordinate.x;
					y = centroid.coordinate.y;
				}
				else {
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
			}
			
			centroids[key] = new L.LatLng(y,x);
		}
		
		return centroids;
	},
	
	fuse: function (type, dataField, boundaryField, dataToFuse, success, error) {
		var data = {
			dataField: dataField,
			boundaryField: boundaryField,
			fuse: 'true',
			data: dataToFuse
		};
		
		var self = this;

		$.ajax({
			url: this._url + '/' + type, 
			cache: true,
			data: data, 
			dataType: 'json',
			type: 'POST',
			success: function (data) {
				if (Object.keys(data).length > 0) {
					var centroids = self.loadCentroids(data);
					
					success(data, centroids);
				}
			},
			error: error
		});
	},
	
	getBoundaries: function (type, context, keyField, fieldValues, success, error) {
		var data = {};
		var self = this;
		
		data[keyField] = fieldValues.join(',');
		
		$.ajax({
			url: this._url + '/' + type,
			cache: true,
			data: data,
			type: 'GET',
			dataType: 'jsonp',
			context: context,
			success: function (data) {
				if (Object.keys(data).length > 0) {
					var centroids = self.loadCentroids(data);
					
					success(context, keyField, data, centroids);
				}
			},
			error: error
		});
	}
});

L.BoundaryServiceRequester = L.Class.extend({
	initialize: function (boundaryService, boundaryType, records, codeField, fieldValues, textField) {
		this._boundaryService = boundaryService;
		this._boundaryType = boundaryType;
		this._records = records;
		this._codeField = codeField;
		this._fieldValues = fieldValues;
		this._textField = textField;
	},
	
	request: function (success, error) {
		var self = this;
		
		var successCallback = function (context, keyField, data, centroids) {
			var fieldValues = self._fieldValues;
			for (var key in fieldValues) {
				var fieldValue = fieldValues[key];
				
				success(fieldValue, {
					centroid: centroids[fieldValue],
					location: new L.GeoJSON(data[fieldValue]),
					text: context[fieldValue][this._textField]
				});
			}
		};
		
		boundaryService.getBoundaries(this._boundaryType, this._records, this._codeField, this._fieldValues, successCallback, error);
	}
});

L.SVGPathBuilder = L.Class.extend({
	initialize: function (points, innerPoints) {
		this._points = points || [];
		this._innerPoints = innerPoints || [];
	},
	
	_getPathString: function (points, digits) {
		var pathString = '';
		
		if (points.length > 0) {
			
			var point = points[0];
			var digits = digits || 2;
			
			pathString = 'M' + point.x.toFixed(digits) + ',' + point.y.toFixed(digits);
			
			for (var index = 1;index < points.length;index++) {
				point = points[index];
				pathString += 'L' + point.x.toFixed(digits) + ',' + point.y.toFixed(digits);
			}
			
			pathString += 'Z';

		}
		
		return pathString;
	},
	
	addPoint: function (point, inner) {
		inner ? this._innerPoints.push(point) : this._points.push(point);
	},

	toString: function () {
		var pathString = this._getPathString(this._points);
		
		if (this._innerPoints) {
			pathString += this._getPathString(this._innerPoints);
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
			property: ['border-color'], //border
			valueFunction: function (value) {
				return value;  //solid 1px
			}
		},
		weight: {
			property: ['border-width'],
			valueFunction: function (value) {
				return value + 'px'; //'solid ' + value + 'px';
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
		//TODO: Figure out how to handle this
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
	
	applySVGStyle: function ($element, svgStyle, additionalKeys) {
		var keyMap = L.StyleConverter.keyMap;
		
		if (additionalKeys) {
			keyMap = L.Util.extend(keyMap, additionalKeys);
		}
		
		$element.css('border-style','solid');
		
		for (var property in svgStyle) {
			$element = L.StyleConverter.setCSSProperty($element, property, svgStyle[property], keyMap);
		}
		
		return $element;
	},
	
	setCSSProperty: function ($element, key, value, keyMap) {
		var keyMap = keyMap || L.StyleConverter.keyMap;
		var cssProperty = keyMap[key];
		
		if (cssProperty) {
			var propertyKey = cssProperty.property;
			for (var propertyIndex = 0; propertyIndex < propertyKey.length; ++propertyIndex) {
				$element.css(propertyKey[propertyIndex], cssProperty.valueFunction(value));
				//console.log(propertyKey[propertyIndex] + ':' + cssProperty.valueFunction(value));
			}
		}
		
		return $element;
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
		
		var $paletteElement = $('<div class="palette"></div>');
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
			$paletteElement.addClass(options.className);
		}
		
		for (var styleKey in styles) {
			var $i = $('<i class="palette-element"></i>');
			var style = styles[styleKey];
			
			L.StyleConverter.applySVGStyle($i, style);
			
			$paletteElement.append($i);
		}
		
		return $paletteElement.wrap('<div/>').parent().html();
		
	}
});

L.HTMLUtils = {
	buildTable: function (obj, className, ignoreFields) {
		
		className = className || 'table table-condensed table-striped table-bordered';
		
		var html = '<table class="' + className + '"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody></tbody></table>';
		var $html = $(html);
		var $tbody = $html.find('tbody');
		
		ignoreFields = ignoreFields || [];
		
		for (var property in obj) {
			if (obj.hasOwnProperty(property) && $.inArray(ignoreFields, property) === -1) {
				if ($.isPlainObject(obj[property]) || obj[property] instanceof Array) {
					$tbody.append('<tr><td>' + property + '</td><td>' + L.HTMLUtils.buildTable(obj[property], ignoreFields).wrap('<div/>').parent().html() + '</td></tr>');
				}
				else {
					$tbody.append('<tr><td>' + property + '</td><td>' + obj[property] + '</td></tr>');
				}
			}
		}
		
		return $html;
	}	
};