/*
 * 
 */
L.LocationModes = {
	LATLNG: function (record, index) {
		var latitude = L.Util.getFieldValue(record, this.options.latitudeField);
		var longitude = L.Util.getFieldValue(record, this.options.longitudeField);
		var self = this;
		
		var getLocation = function (latitudeField, longitudeField) {
			var latitude = L.Util.getFieldValue(record, latitudeField);
			var longitude = L.Util.getFieldValue(record, longitudeField);
			var location = null;
			
			if (latitude && longitude) {
				var latlng = new L.LatLng(latitude, longitude);
				location = {
					location: latlng,
					text: [latlng.lat.toFixed(3),latlng.lng.toFixed(3)].join(', '),
					center: latlng
				};
			}
			
			return location;
		};
		
		var location = getLocation(this.options.latitudeField, this.options.longitudeField);

		if (!location && this.options.fallbackLocationFields) {
			var index = 0;
			var fallbackLocationFields;
			while (!location && index < this.options.fallbackLocationFields.length) {
				fallbackLocationFields = this.options.fallbackLocationFields[index];
				location = getLocation(fallbackLocationFields.latitudeField, fallbackLocationFields.longitudeField);
				index++;
			}
		}

		return location;
	},
	GEOHASH: function (record, index) {
		var geohash = this.options.geohashField ? L.Util.getFieldValue(record, this.options.geohashField) : index;
		var locationInfo = decodeGeoHash(geohash);
		var bounds;
		
		if (locationInfo.latitude[2] && locationInfo.longitude[2]) {
			bounds = new L.LatLngBounds(new L.LatLng(locationInfo.latitude[0], locationInfo.longitude[0]), new L.LatLng(locationInfo.latitude[1], locationInfo.longitude[1]));
		}

		return {
			location: bounds,
			text: geohash,
			center: bounds.getCenter()
		};
	},
	COUNTRY: function (record, index) {
		var code = this.options.codeField ? L.Util.getFieldValue(record, this.options.codeField) : index;
		var geoJSON;
		var centroid;
		var codeLookup = L.codeLookup || {};
		var alpha2Lookup = L.alpha2Lookup || {};
		var fips2Lookup = L.fips2Lookup || {};
		var gwNoLookup = L.gwNoLookup || {};
		var countries = L.countries || {};
		var countryCentroids = L.countryCentroids || {};
		var originalCode = code.toUpperCase();
		
		code = originalCode;
		
		code = gwNoLookup[originalCode] || code;
		
		// Lookup 3 digit ISO code
		if (code.length === 2) {
			code = alpha2Lookup[originalCode] || fips2Lookup[originalCode];
		}
		else if (code.length === 3) {
			code = codeLookup[originalCode] || code;
		}
		
		if (code) {
			geoJSON = countries[code];
			centroid = countryCentroids[code];
		}
		else {
			console.log('Code not found: ' + originalCode);
		}
		
		var geoJSONLayer = new L.GeoJSON(geoJSON);
		
		return {
			location: geoJSONLayer,
			text: L.GeometryUtils.getName(geoJSON) || code,
			center: centroid
		};

	},
	STATE: function (record, index) {
		var code = this.options.codeField ? L.Util.getFieldValue(record, this.options.codeField) : index;
		var geoJSON;
		var centroid;
		var states = L.states || {};
		var stateCentroids = L.stateCentroids || {};
		var originalCode = code.toUpperCase();
		
		code = originalCode;
		
		geoJSON = states[code];
		centroid = stateCentroids[code];
		
		var geoJSONLayer = new L.GeoJSON(geoJSON);
		
		return {
			location: geoJSONLayer,
			text: L.GeometryUtils.getName(geoJSON) || code,
			center: centroid
		};
	},
	GEOJSON: function (record, index) {
		var locationField = this.options.geoJSONField;

		var geoJSON = locationField ? L.Util.getFieldValue(record, locationField) : record;
		var location = null;
		
		if (geoJSON) {
			var me = this;
			var recordToLayer = function (location, record) {
				return me.recordToLayer(location, record);
			};
			
			location = L.GeometryUtils.getGeoJSONLocation(geoJSON, record, this.options.locationTextField, recordToLayer);	
		}
		
		return location;
	},
	LOOKUP: function (record, index) {
		var code = this.options.codeField ? L.Util.getFieldValue(record, this.options.codeField) : index;

		this._lookupIndex = this._lookupIndex || L.GeometryUtils.indexFeatureCollection(this.options.locationLookup, this.options.codeField);
		
		var geoJSON = this._lookupIndex[code];
		var location = null;
		
		if (geoJSON) {
			var me = this;
			var recordToLayer = function (location, record) {
				return me.recordToLayer(location, record);
			};
			
			location = L.GeometryUtils.getGeoJSONLocation(geoJSON, record, this.options.locationTextField, recordToLayer);
		}	
		
		return location;
	},
	CUSTOM: function (record, index) {
		var locationField = this.options.codeField;
		var fieldValue = L.Util.getFieldValue(record, locationField);
		var context = {};
		var location;
		
		context[fieldValue] = record;
		
		if (this.options.getLocation) {
			
			var self = this;
			var callback = function (key, location) {
				self.locationToLayer(location, context[key]);
			};
			
			location = this.options.getLocation(context, locationField, [fieldValue], callback);
		}
		
		return location;
	}
};

/*
 * 
 */
L.DataLayer = L.LayerGroup.extend({
	
	initialize: function (data, options) {
		L.Util.setOptions(this, options);

		L.LayerGroup.prototype.initialize.call(this, options);
		
		data = data || {};
		
		this.addData(data);
	},
	
	_zoomFunction: function (e) {
		var map = this._map;
		var self = this;
		var zoom = map.getZoom();
		
		if (this.options.maxZoom && zoom > this.options.maxZoom) {
			this.hiddenLayers = [];
			
			this.eachLayer(function (layer) {
				self.hiddenLayers.push(layer);
				
				map.removeLayer(layer);
			});
		}
		else if (this.hiddenLayers) {
			while (this.hiddenLayers.length > 0) {
				var layer = this.hiddenLayers.pop();
				
				map.addLayer(layer);
				
				if (this.options.backgroundLayer && layer.bringToBack) {
					layer.bringToBack();
				}
			}
			
			this.hiddenLayers = null;
		}
	},
	
	onAdd: function (map) {
		L.LayerGroup.prototype.onAdd.call(this, map);
		
		map.on('zoomend', this._zoomFunction, this);
	},
	
	onRemove: function (map) {
		L.LayerGroup.prototype.onRemove.call(this, map);
		
		map.off('zoomend', this._zoomFunction, this);
	},
	
	getBounds: function () {
		var bounds;
		
		this.eachLayer(function (layer) {
			if (layer.getBounds) {
				if (!bounds) {
					bounds = layer.getBounds();
				}
				else {
					bounds.extend(layer.getBounds());
				}
			}
		});
		
		return bounds;
	},
	
	options: {
		recordsField: 'features',
		locationMode: L.LocationModes.LATLNG,
		latitudeField: 'geometry.coordinates.1',       
		longitudeField: 'geometry.coordinates.0',      
		displayField: null,  
		displayOptions: null,
		layerOptions: {
			numberOfSides: 4,
			radius: 10,
			weight: 1,
			color: '#000'
		},
		showLegendTooltips: true,
		tooltipOptions: {
			iconSize: new L.Point(60, 50),
			iconAnchor: new L.Point(-5, 50),
			mouseOverExaggeration: 2
		},
		setHighlight: function (layerStyle) {
			layerStyle.weight = layerStyle.weight || 1;
			layerStyle.fillOpacity = layerStyle.fillOpacity || 0.5;
			layerStyle.weight *= 2;
			layerStyle.fillOpacity /= 1.5;
			
			return layerStyle;
		},
		unsetHighlight: function (layerStyle) {
			layerStyle.weight = layerStyle.weight || 1;
			layerStyle.fillOpacity = layerStyle.fillOpacity || 0.25;
			layerStyle.weight /= 2;
			layerStyle.fillOpacity *= 1.5;
			
			return layerStyle;
		}
	},
	
	_getLocation: function (record, index) {
		var location;
		
		return this.options.locationMode.call(this, record, index);
	},
	
	_processLocation: function (location) {
		var processedLocation = location.center;
		
		return processedLocation;
	},
	
	_addBoundary: function (location, options) {
		var layer = location.location;
		
		if (this.options.includeBoundary) {
			if (layer instanceof L.LatLngBounds) {
				layer = new L.Rectangle(layer);
			}
			
			if (layer.setStyle) {
				var style = this.options.boundaryStyle || $.extend(true, {}, options, {
					fillOpacity: 0.2,
					clickable: false
				});
			
				layer.setStyle(style);
			}
		
			this.addLayer(layer);
		}
	},
	
	_getLayer: function (location, options, record) {
		this._addBoundary(location, options);
				
		location = this._processLocation(location);
		
		return this._getMarker(location, options, record);
	},
	
	_getMarker: function (location, options, record) {
		var marker;
		
		if (location) {
			if (options.numberOfSides >= 30 && !(options.innerRadius || (options.innerRadiusX && options.innerRadiusY))) {
				marker = new L.CircleMarker(location, options);
			}
			else {
				marker = new L.RegularPolygonMarker(location, options);
			}
		}
		
		return marker;
	},
	
	_preProcessRecords: function (records) {
		// Implement any necessary preprocessing in inheriting classes
		return records;
	},
	
	_loadRecords: function (records) {
		var location;
		
		records = this._preProcessRecords(records);
		
		for (var recordIndex in records) {
			if (records.hasOwnProperty(recordIndex)) {
				var record = records[recordIndex];
				
				location = this._getLocation(record, recordIndex);
			
				this.locationToLayer(location, record);
			}
		}
	},
	
	_preloadLocations: function (records) {
		var locationField = this.options.codeField;
		var locationValues = [];
		var indexedRecords = {};
		
		for (var recordIndex in records) {
			if (records.hasOwnProperty(recordIndex)) {
				var record = records[recordIndex];
				var fieldValue = L.Util.getFieldValue(record, locationField);
			
				indexedRecords[fieldValue] = record;
				locationValues.push(fieldValue);
			}
		}
		
		if (this.options.getLocation) {
			var self = this;
			var callback = function (key, location) {
				self.locationToLayer(location, indexedRecords[key]);
			};
			
			this.options.getLocation(indexedRecords, locationField, locationValues, callback);
		}
	},
	
	setDisplayOptions: function (displayOptions) {
		this.options.displayOptions = displayOptions;
		
		// Re-load data
		this.reloadData();
		
		return this;
	},
	
	setDisplayOption: function (key, options) {
		this.options.displayOptions = this.options.displayOptions || {};
		
		if (key in this.options.displayOptions) {
			var existingOption = this.options.displayOptions[key];
			this.options.displayOptions[key] = $.extend({}, existingOption, options);
		}
		else {
			this.options.displayOptions[key] = options;
		}
		
		// Re-load data	
		this.reloadData();
		
		return this;
	},
	
	setFilter: function (filterFunction) {
		this.options.filter = filterFunction;
		
		// Re-load data
		this.reloadData()
		
		return this;
	},
	
	setData: function (data) {
		this._data = data;
		this.reloadData();
	},
	
	reloadData: function () {
		this.clearLayers();
		
		if (this._data) {
			this.addData(this._data);
		}
		
		return this;
	},
	
	addData: function (data) {
		var records = this.options.recordsField !== null && this.options.recordsField.length > 0 ? L.Util.getFieldValue(data, this.options.recordsField) : data;
		var layer;
		var location;
		
		if (this.options.locationMode === L.LocationModes.CUSTOM && this.options.preload) {
			this._preloadLocations(records);
		}
		else {
			this._loadRecords(records);
		}
		
		this._data = data;
	},
	
	locationToLayer: function (location, record) {
		var layer;
		
		layer = this.recordToLayer(location, record);
		
		if (layer) {
			this.addLayer(layer);
		}
	},
	
	_bindMouseEvents: function (layer, layerOptions, legendDetails) {
		var self = this;
		var options = this.options;
		var setHighlight = options.setHighlight;
		var unsetHighlight = options.unsetHighlight;
		var tooltipOptions = options.tooltipOptions;
		
		var highlight = function (e) {
			
			var target = e.target;
			var layerOptions = this.options || target.options;
			var icon = new L.LegendIcon(legendDetails, layerOptions, {
				className: tooltipOptions.className || 'leaflet-div-icon',
				iconSize: tooltipOptions.iconSize,
				iconAnchor: tooltipOptions.iconAnchor
			});
			
			var latlng = e.latlng || e.target._latlng;
			
			var tooltip = new L.Marker(latlng, {
				icon: icon
			});
			
			self.addLayer(tooltip);
			
			if (self.tooltip) {
				self.removeLayer(self.tooltip);
				self.tooltip = null;
			}
			
			self.tooltip = tooltip;
			
			if (setHighlight) {
				layerOptions = setHighlight(layerOptions);
			}
			
			if (target.setStyle) {
				target.setStyle(layerOptions);
			}
		};
		
		var move = function (e) {
			if (self.tooltip) {
				self.tooltip.setLatLng(e.latlng);
			}
		};
		
		var unhighlight = function (e) {

			if (self.tooltip) {
				self.removeLayer(self.tooltip);
				self.tooltip = null;
			}
			
			var target = e.target;
			var layerOptions = this.options || target.options;
			
			if (unsetHighlight) {
				layerOptions = unsetHighlight(layerOptions);
			}
			
			if (target.setStyle) {
				target.setStyle(layerOptions);
			}
		};
		
		var bindLayerEvents = function (layer) {
			layer.on({
				mouseover: highlight,
				mouseout: unhighlight,
				mousemove: move
			});
		};
		
		var bindEvents = function (layer) {
			if (layer.eachLayer) {
				layer.eachLayer(function (subLayer) {
					bindEvents(subLayer);
				});
			}
			else {
				bindLayerEvents(layer);
			}
		};
		
		bindEvents(layer);
		
	},
	
	_getDynamicOptions: function (record) {
		var layerOptions = L.Util.extend({},this.options.layerOptions);
		var displayOptions = this.options.displayOptions;
		var legendDetails = {};
		
		if (displayOptions) {
			for (var property in displayOptions) {
				
				var propertyOptions = displayOptions[property];
				var fieldValue = L.Util.getFieldValue(record, property);
				var valueFunction;
				var displayText = propertyOptions.displayText ? propertyOptions.displayText(fieldValue) : fieldValue;
				
				legendDetails[property] = {
					name: propertyOptions.displayName,
					value: displayText
				};
				
				if (propertyOptions.styles) {
					layerOptions = L.Util.extend(layerOptions, propertyOptions.styles[fieldValue]);
					propertyOptions.styles[fieldValue] = layerOptions;
				}
				else {
					for (var layerProperty in propertyOptions) {
						valueFunction = propertyOptions[layerProperty];
						
						layerOptions[layerProperty] = valueFunction.evaluate ? valueFunction.evaluate(fieldValue) : (valueFunction.call ? valueFunction.call(fieldValue) : valueFunction);
					}
				}
			}
		}
		
		return {
			layerOptions: layerOptions,
			legendDetails: legendDetails
		};
	},
	
	recordToLayer: function (location, record) {
		var layerOptions = L.Util.extend({},this.options.layerOptions);
		var layer;
		var displayOptions = this.options.displayOptions;
		var legendDetails = {};
		var includeLayer = true;
		var includeFunction = this.options.filter || this.options.includeLayer;
		
		if (includeFunction) {
			includeLayer = includeFunction.call(this, record);
		}
		
		if (includeLayer) {
			var dynamicOptions = this._getDynamicOptions(record);
			
			layerOptions = dynamicOptions.layerOptions;
			legendDetails = dynamicOptions.legendDetails;
			
			if (location && layerOptions) {
				layerOptions.title = location.text;
			
				layer = this._getLayer(location, layerOptions, record);
			
				if (layer) {
					if (this.options.showLegendTooltips) {
						this._bindMouseEvents(layer, layerOptions, legendDetails);
					}
				
					if (this.options.onEachRecord) {
						this.options.onEachRecord.call(this, layer, record, this);
					}
				}
			}
		}
		
		return layer;
	},
	
	getLegend: function (legendOptions) {
		return this.options.getLegend ? this.options.getLegend.call(this, legendOptions) : this._getLegend(legendOptions);
	},
	
	_getLegendElement: function (params) {
		var displayMin;
		var displayMax;
		var $i = $('<i></i>');
		
		var displayProperties = params.displayProperties;
		var layerOptions = params.layerOptions; 
		var ignoreProperties = params.ignoreProperties;
		var displayTextFunction = params.displayTextFunction;
		var index = params.index;
		var numSegments = params.numSegments;
		var segmentWidth = params.segmentWidth;
		var $minValue = params.$minValue;
		var $maxValue = params.$maxValue;
				
		L.StyleConverter.applySVGStyle($i, layerOptions);
		
		for (var property in displayProperties) {

			if (ignoreProperties.indexOf(property) === -1) {
				
				valueFunction = displayProperties[property];
				
				if (valueFunction && (valueFunction.getBounds || (displayProperties.minValue && displayProperties.maxValue))) {
					var bounds = valueFunction.getBounds ? valueFunction.getBounds() : null;
					var minX = bounds ? bounds[0].x : displayProperties.minValue;
					var maxX = bounds ? bounds[1].x : displayProperties.maxValue;

					var binFunction = new L.LinearFunction(new L.Point(0, minX), new L.Point(numSegments, maxX));
					
					displayMin = minX;
					displayMax = maxX;
					
					if (displayTextFunction) {
						displayMin = displayTextFunction(minX);
						displayMax = displayTextFunction(maxX);
					}
					
					if (index === 0) {
						$minValue.html(displayMin);
						$maxValue.html(displayMax);
					}
					
					var segmentSize = (maxX - minX) / numSegments;
					var x = binFunction.evaluate(index);
					var nextX = binFunction.evaluate(index + 1);
					var value = valueFunction.evaluate ? valueFunction.evaluate(x) : valueFunction(x);
					var nextValue = valueFunction.evaluate ? valueFunction.evaluate(nextX) : valueFunction(nextX);
					
					L.StyleConverter.setCSSProperty($i, property, value);
					
					// If this is the fillColor property then setup the legend so that the background is a left-right gradient
					// moving from the lowest value of the range to the highest value of the range
					if (property === 'fillColor') {
						$i.css('background-image', 'linear-gradient(left , ' + value + ' 0%, ' + nextValue + ' 100%)');
						$i.css('background-image', '-ms-linear-gradient(left , ' + value + ' 0%, ' + nextValue + ' 100%)');
						$i.css('background-image', '-moz-linear-gradient(left , ' + value + ' 0%, ' + nextValue + ' 100%)');
						$i.css('background-image', '-webkit-linear-gradient(left , ' + value + ' 0%, ' + nextValue + ' 100%)');
					}
					
					if (property === 'color') {
						$i.css('border-top-color', value);
						$i.css('border-bottom-color', nextValue);
						$i.css('border-left-color', value);
						$i.css('border-right-color', nextValue);
					}
					
					if (property === 'weight') {
						$i.css('border-top-width', value);
						$i.css('border-bottom-width', nextValue);
						$i.css('border-left-width', value);
						$i.css('border-right-width', nextValue);
					}
					
					var min = (segmentSize * index) + minX;
					var max = min + segmentSize;
					
					if (displayTextFunction && valueFunction) {
						min = displayTextFunction(min);
						max = displayTextFunction(max);
					}
					
					$i.attr('title', min + ' - ' + max);
				}
			
			}
			
		}

		$i.width(segmentWidth);
		
		return $i;
	},
	
	_getLegend: function (legendOptions) {
		
		legendOptions = legendOptions || this.options.legendOptions || {};
		
		var className = legendOptions.className;
		var legendElement = '<div class="legend"></div>';
		var $legendElement = $(legendElement);
		var displayOption;
		var valueFunction;
		var numSegments = legendOptions.numSegments || 10;
		var legendWidth = legendOptions.width || 100;
		var fieldBounds = {};
		var weight = this.options.layerOptions.weight || 0;
		var segmentWidth = (legendWidth / numSegments) - 2 * weight;
		var fieldElements = {};
		var layerOptions = this.options.layerOptions;
		var propertiesByField = {};
		var displayText;
		var displayOptions = this.options.displayOptions;
		var displayMin, displayMax;
		var radiusOptions = {
			property: ['height'],
			valueFunction: function (value) {
				return (2 * value).toFixed(0) + 'px';
			}
		};
		
		if (className) {
			$legendElement.addClass(className);
		}
		
		if (legendOptions.title) {
			$legendElement.append('<legend>' + legendOptions.title + '</legend>');
		}
		
		var defaultFunction = function (value) {
			return value;
		};
		
		for (var field in displayOptions) {
			
			var displayProperties = displayOptions[field];
			var displayName = displayProperties.displayName || field;
			
			displayText = displayProperties.displayText;
			
			var displayTextFunction = displayText ? displayText : defaultFunction;
			
			var styles = displayProperties.styles;
			
			$legendElement.append('<div class="legend-title">' + displayName + '</div>');
			
			if (styles) {
				// Generate category legend
				var legend = new L.CategoryLegend(styles);
				
				$legendElement.append(legend.generate());
			}
			else {
				// Generate numeric legend
				var $legendItems = $('<div class="data-layer-legend"><div class="min-value"></div><div class="scale-bars"></div><div class="max-value"></div></div>');
				
				var $minValue = $legendItems.find('.min-value');
				var $maxValue = $legendItems.find('.max-value');
				var $scaleBars = $legendItems.find('.scale-bars');
				var ignoreProperties = ['displayName', 'displayText', 'minValue', 'maxValue'];

				for (var index = 0; index < numSegments; ++index) {
					var legendParams = {
						displayProperties: displayProperties,
						layerOptions: layerOptions, 
						ignoreProperties: ignoreProperties, 
						displayTextFunction: displayTextFunction, 
						index: index, 
						numSegments: numSegments, 
						segmentWidth: segmentWidth, 
						$minValue: $minValue,
						$maxValue: $maxValue
					};
					
					var $element = this._getLegendElement(legendParams);
					
					$scaleBars.append($element);

				}
			}

			$legendElement.append($legendItems);

		}
		
		return $legendElement.wrap('<div/>').parent().html();
	}
});

L.dataLayer = function (data, options) {
	return new L.DataLayer(data, options);
};

/*
 *
 */
L.MapMarkerDataLayer = L.DataLayer.extend({	
	_getMarker: function (latLng, layerOptions, record) {
		return new L.MapMarker(latLng, layerOptions);
	}
});

L.mapMarkerDataLayer = function (data, options) {
	return new L.MapMarkerDataLayer(data, options);
};

/*
 * 
 */
L.MarkerDataLayer = L.DataLayer.extend({
	initialize: function (data, options) {
		this._markerMap = {};
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	options: {
		recordsField: 'features',
		locationMode: L.LocationModes.LATLNG,
		latitudeField: 'latitude',
		longitudeField: 'longitude',
		layerOptions: {
			icon: null
		},
		showLegendTooltips: false
	},

	_getMarker: function (latLng, layerOptions, record) {
		if (this.options.setIcon) {
			layerOptions.icon = this.options.setIcon.call(this, record, layerOptions);
		}
		
		return new L.Marker(latLng, layerOptions);
	},
	
	_getLegendElement: function (params) {
		// Call setIcon
		// var icon = this.options.setIcon.call(this, record);
		// Get the icon's html
		// var html = icon.options.iconUrl ? '<img src="' + icon.options.iconUrl + '"/>' : icon.options.html;
		// return $(html);
	},
	
	_getLegend: function (options) {
		// TODO:  Implement this.  Get the correct icon for each marker based on iterating over a range
		// of values.  Remove this and override the _getLegendElement method
		return '<span>No legend available</span>';
	}
});

L.markerDataLayer = function (data, options) {
	return new L.MarkerDataLayer(data, options);
};

/*
 *
 */

L.PanoramioLayer = L.MarkerDataLayer.extend({
	statics: {
		UPLOAD_DATE_FORMAT: 'DD MMM YYYY',
		SIZE_BY_DATE: 'date',
		SIZE_BY_POPULARITY: 'popularity',
		SIZE_BY_NONE: 'none',
		SIZES: {
			'square': [60, 60],
			'mini_square': [32, 32]
		},
		NUM_PHOTOS: 50
	}
});

L.PanoramioLayer = L.PanoramioLayer.extend({	
	initialize: function (options) {
		L.MarkerDataLayer.prototype.initialize.call(this, {}, options);
		
		this._from = 0;
		this._to = L.PanoramioLayer.NUM_PHOTOS;
		this._calls = [];
	},
	
	options: {
		recordsField: 'photos',
		latitudeField: 'latitude',
		longitudeField: 'longitude',
		locationMode: L.LocationModes.LATLNG,
		showLegendTooltips: false,
		sizeBy: L.PanoramioLayer.SIZE_BY_DATE,
		layerOptions: {
			opacity: 1.0
		},
		onEachRecord: function (layer, record) {
			var $html = L.HTMLUtils.buildTable(record);
			var photoUrl = record['photo_file_url'];
			var title = record['photo_title'];
			var me = this;
			var width = record['width'];
			var height = record['height'];
			var offset = 20000;

			layer.on('click', function (e) {
				var $html = $('<div><img class="photo" onload="this.style.opacity=1" src="' + photoUrl + '"/><div class="photo-info"><span>' + title + '</span><a class="photo-link" target="_blank" href="' + record['photo_url'] + '"><img src="http://www.panoramio.com/img/glass/components/logo_bar/panoramio.png" style="height: 14px;"/></a></div><a class="author-link" target="_blank" href="' + record['owner_url'] +'">by ' + record['owner_name'] + '</a></div>');

				$html.find('.photo').width(width);
				$html.find('.photo-info').width(width - 20);
				
				var icon = new L.DivIcon({
					className: 'photo-details',
					html: $html.wrap('<div/>').parent().html(),
					iconAnchor: [width/2, height/2]
				});

				var marker = new L.Marker(e.target._latlng, {
					icon: icon,
					zIndexOffset: offset
				});

				marker.on('click', function (e) {
					me.removeLayer(e.target);
				});
				
				layer.viewedImage = marker;
				me.viewedImage = marker;
				
				me.addLayer(marker);
			});
			
			if (this.options.onEachPhoto) {
				this.options.onEachPhoto.call(this, layer, record);
			}

		},
		setIcon: function (record, options) {
			var title = L.Util.getFieldValue(record, 'photo_title');
			
			var size = null;
			
			if (this._sizeFunction) {
				size = this._sizeFunction.evaluate(record.index);	
			}
			
			var iconSize = size ? new L.Point(size, size) : L.PanoramioLayer.SIZES[this.options.size];
			var url = record['photo_file_url'].replace('/medium/', '/' + this.options.size + '/');
			var icon = new L.DivIcon({
				iconSize: iconSize,
				className: '',
				html: '<img class="photo" onload="this.style.opacity=1" title="' + title + '" src="' + url + '"/>'
			});
			
			return icon;
		},
		updateInterval: 300000,
		size: 'square',
		attributionText: 'Photos provided by <a href="http://www.panoramio.com"><img src="http://www.panoramio.com/img/glass/components/logo_bar/panoramio.png" style="height: 10px;"/></a>.  Photos provided by <a href="http://www.panoramio.com"><img src="http://www.panoramio.com/img/glass/components/logo_bar/panoramio.png" style="height: 10px;"/></a> are under the copyright of their owners',
		refreshEvents: 'moveend',
		photoSet: 'public'
	},
	
	includes: L.Mixin.Events,
	
	onAdd: function (map) {
		L.DataLayer.prototype.onAdd.call(this, map);
		
		if (map.attributionControl) {
			map.attributionControl.addAttribution(this.options.attributionText);
		}
		
		var me = this;
		var resetFunction = function (e) {
			
			me._from = 0;
			me._to = L.PanoramioLayer.NUM_PHOTOS;
			
			me.fire('requestingPhotos');
			
			if (me._call) {
				clearTimeout(me._call);
			}
			
			var request = function () {
				me.requestPhotos();
			}
			
			me._call = setTimeout(request, 1000);
		};
		
		this.requestPhotos();
		
		this._interval = setInterval(resetFunction, this.options.updateInterval);
		
		this._resetFunction = resetFunction;
		
		map.on(this.options.refreshEvents, resetFunction);
	},
	
	onRemove: function (map) {
		L.DataLayer.prototype.onRemove.call(this, map);
		
		if (map.attributionControl) {
			map.attributionControl.removeAttribution(this.options.attributionText);
		}
		
		if (this._interval) {
			clearInterval(this._interval);
			this._interval = null;
		}
		
		map.off(this.options.refreshEvents, this._resetFunction);
	},
	
	calculateSizeByDate: function (data) {
		var photos = data.photos;
		var timestamps = [];
		
		// Iterate through the photos and calculate the timestamp of the upload date using
		// moment js
		for (var i = 0; i < photos.length; ++i) {
			var photo = photos[i];
			var timestamp = moment(photo['upload_date'], L.PanoramioLayer.UPLOAD_DATE_FORMAT);
			
			timestamps.push(timestamp);
			
			photos[i].index = timestamp;
		}
		
		timestamps.sort(function (t1, t2) {
			return t1 - t2;
		});
		
		var size = L.PanoramioLayer.SIZES[this.options.size][0];
		
		this._sizeFunction = new L.LinearFunction([timestamps[0], size/2], [timestamps[timestamps.length - 1], size]);
		
		return data;
	},
	
	calculateSizeByPopularity: function (data) {
		var photos = data.photos;
		
		for (var i = 0; i < photos.length; ++i) {
			photos[i].index = i;	
		}
		
		var size = L.PanoramioLayer.SIZES[this.options.size][0];
		
		this._sizeFunction = new L.LinearFunction([0, size/2], [photos.length, size]);
		
		return data;
	},
	
	next: function () {
		this._from = this._to;
		this._to = this._from + L.PanoramioLayer.NUM_PHOTOS;
		this.requestPhotos();
	},
	
	previous: function () {
		this._to = this._from;
		this._from = this._from - L.PanoramioLayer.NUM_PHOTOS;
		this.requestPhotos();
	},
	
	requestPhotos: function () {
		
		var me = this;
		var bounds = this._map.getBounds();
		var southWest = bounds.getSouthWest();
		var northEast = bounds.getNorthEast();
		
		while (me._calls.length > 0) {
			me._calls.pop().abort();
		}
		
		var request = $.ajax({
			url: 'http://www.panoramio.com/map/get_panoramas.php',
			data: {
				set: this.options.photoSet,
				from: me._from,
				to: me._to,
				minx: southWest.lng,
				miny: southWest.lat,
				maxx: northEast.lng,
				maxy: northEast.lat,
				size: 'medium',
				mapfilter: 'true'
			},
			type: 'GET',
			dataType: 'jsonp',
			success: function (data) {
				
				me._count = data.count;
				
				if (moment && me.options.sizeBy === L.PanoramioLayer.SIZE_BY_DATE) {
					data = me.calculateSizeByDate(data);
				}
				else if (me.options.sizeBy === L.PanoramioLayer.SIZE_BY_POPULARITY) {
					data = me.calculateSizeByPopularity(data);
				}
				
				me.fire('photosAvailable', data);
				me.clearLayers();
				me.addData(data);
			}
		});
		
		me._calls.push(request);
	}
});

L.panoramioLayer = function (options) {
	return new L.PanoramioLayer(options);
};

/**
 * 
 */
L.GeohashDataLayer = L.DataLayer.extend({
	initialize: function (data, options) {
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	options: {
		recordsField: 'features',
		locationMode: L.LocationModes.GEOHASH,
		geohashField: 'geohash',    
		displayField: null,  
		displayOptions: null,
		layerOptions: {
			weight: 1,
			color: '#000'
		}
	},
	
	_getLayer: function (geohash, layerOptions, record) {
		return new L.Rectangle(geohash.location, layerOptions);
	}
});

L.geohashDataLayer = function (data, options) {
	return new L.GeohashDataLayer(data, options);
};

/*
 * 
 */
L.ChoroplethDataLayer = L.DataLayer.extend({
	initialize: function (data, options) {
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	options: {
		recordsField: 'features',
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'ISO',
		displayField: null,  
		displayOptions: null,
		layerOptions: {
			weight: 1,
			color: '#000'
		},
		maxZoom: 12,
		backgroundLayer: true
	},
	
	_getLayer: function (location, layerOptions, record) {
	
		if (location.location instanceof L.LatLng) {
			location.location = this._getMarker(location.location, layerOptions, record);
		}
		
		if (location.location.setStyle) {
			location.location.setStyle(layerOptions);
		}
		
		return location.location;

	}
});

L.choroplethDataLayer = function (data, options) {
	return new L.ChoroplethDataLayer(data, options);
};

/*
 * 
 */
L.ChartDataLayer = L.DataLayer.extend({
	options: {
		showLegendTooltips: false
	},
	
	initialize: function (data, options) {
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getLayer: function (latLng, layerOptions, record) {
		this._addBoundary(latLng, layerOptions);
		
		latLng = this._processLocation(latLng);
		
		var chartOptions = this.options.chartOptions;
		var tooltipOptions = this.options.tooltipOptions;
		var options = {};
		
		options = layerOptions;
		options.data = {};
		options.chartOptions = chartOptions;
		
		// Set data property value to the associated value from the record
		for (var key in this.options.chartOptions) {
			options.data[key] = L.Util.getFieldValue(record, key);			
		} 
		
		for (var key in this.options.tooltipOptions) {
			options[key] = this.options.tooltipOptions[key];
		}
		
		var marker;
		
		if (latLng) {
			marker = this._getMarker(latLng, options);
		}
		
		return marker;
	},

	_getMarker: function (latLng, options) {
		// Override this in inheriting classes
	},
	
	_getLegend: function (legendOptions) {
		var legend = new L.CategoryLegend(this.options.chartOptions);
		
		legendOptions = legendOptions || this.options.legendOptions;
		
		return legend.generate(legendOptions);
	}
});

/*
 * 
 */
L.BarChartDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getMarker: function (latLng, options) {
		return new L.BarChartMarker(latLng, options);
	}
});

L.barChartDataLayer = function (data, options) {
	return new L.BarChartDataLayer(data, options);
};

/*
 * 
 */
L.RadialBarChartDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getMarker: function (latLng, options) {
		return new L.RadialBarChartMarker(latLng, options);
	}
});

L.radialBarChartDataLayer = function (data, options) {
	return new L.RadialBarChartDataLayer(data, options);
};

/*
 * 
 */
L.PieChartDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getMarker: function (latLng, options) {
		return new L.PieChartMarker(latLng, options);
	}
});

L.pieChartDataLayer = function (data, options) {
	return new L.PieChartDataLayer(data, options);
};

/*
 * 
 */
L.CoxcombChartDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getMarker: function (latLng, options) {
		return new L.CoxcombChartMarker(latLng, options);
	}
});

L.coxcombChartDataLayer = function (data, options) {
	return new L.CoxcombChartDataLayer(data, options);
};

/*
 *
 */
L.StackedRegularPolygonDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getMarker: function (latLng, options) {
		return new L.StackedRegularPolygonMarker(latLng, options);
	}
});

L.stackedRegularPolygonDataLayer = function (data, options) {
	return new L.StackedRegularPolygonDataLayer(data, options);
};

/*
 *
 */
L.RadialMeterMarkerDataLayer = L.DataLayer.extend({
	options: {
		showLegendTooltips: false
	},
	
	initialize: function (data, options) {
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	_getLayer: function (latLng, layerOptions, record) {
		this._addBoundary(latLng, layerOptions);
		
		latLng = this._processLocation(latLng);
		
		var chartOptions = this.options.chartOptions;
		var tooltipOptions = this.options.tooltipOptions;
		var displayOptions = this.options.displayOptions;
		var options = {};
		
		options = layerOptions;
		options.data = {};
		options.chartOptions = chartOptions;
		options.displayOptions = displayOptions;
		
		// Set data property value to the associated value from the record
		for (var key in this.options.chartOptions) {
			options.data[key] = L.Util.getFieldValue(record, key);	
		} 
		
		for (var key in this.options.tooltipOptions) {
			options[key] = this.options.tooltipOptions[key];
		}

		var marker;
		
		if (latLng) {
			marker = this._getMarker(latLng, options);
		}
		
		return marker;
	},

	_getMarker: function (latLng, options) {
		return new L.RadialMeterMarker(latLng, options);
	},
});

L.radialMeterMarkerDataLayer = function (data, options) {
	return new L.RadialMeterMarkerDataLayer(data, options);
};