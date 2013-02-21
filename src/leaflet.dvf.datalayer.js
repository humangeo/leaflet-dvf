var L = L || {};

/*
 * 
 */
L.LocationModes = {
	LATLNG: 'latlng',
	GEOHASH: 'geohash',
	COUNTRY: 'country',
	STATE: 'state',
	GEOJSON: 'geojson',
	CUSTOM: 'custom'
};

/*
 * 
 */
L.DataLayer = L.LayerGroup.extend({
	
	initialize: function (data, options) {
		L.Util.setOptions(this, options);

		L.LayerGroup.prototype.initialize.call(this, options);
		
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
	
	_getLocationLatLng: function (record) {
		var latitude = this._getFieldValue(record, this.options.latitudeField);
		var longitude = this._getFieldValue(record, this.options.longitudeField);
		var self = this;
		
		var getLocation = function (latitudeField, longitudeField) {
			var latitude = self._getFieldValue(record, latitudeField);
			var longitude = self._getFieldValue(record, longitudeField);
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
	
	_getLocationGeohash: function (record) {
		var geohash = this._getFieldValue(record, this.options.geohashField);
		var locationInfo = decodeGeoHash(geohash);
		var bounds;
		
		if (locationInfo.latitude[2] && locationInfo.longitude[2]) {
			bounds = new L.LatLngBounds(new L.LatLng(locationInfo.latitude[0], locationInfo.longitude[0]), new L.LatLng(locationInfo.latitude[1], locationInfo.longitude[1]));
		}
		
		//return bounds;
		return {
			location: bounds,
			text: geohash,
			center: bounds.getCenter()
		};
	},
	
	_getLocationChoropleth: function (record, index) {
		var code = this.options.codeField ? this._getFieldValue(record, this.options.codeField) : index;
		var geoJSON;
		var centroid;
		var codeLookup = L.codeLookup || {};
		var alpha2Lookup = L.alpha2Lookup || {};
		var fips2Lookup = L.fips2Lookup || {};
		var countries = L.countries || {};
		var countryCentroids = L.countryCentroids || {};
		var states = L.states || {};
		var stateCentroids = L.stateCentroids || {};
		var originalCode = code.toUpperCase();
		
		code = originalCode;
		
		if (this.options.locationMode === L.LocationModes.COUNTRY) {

			if (code.length === 2) {
				// Lookup 3 digit ISO code
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
		}
		else if (this.options.locationMode === L.LocationModes.STATE) {
			geoJSON = states[code];
			centroid = stateCentroids[code];
		}
		
		var geoJSONLayer = new L.GeoJSON(geoJSON);
		
		var getName = function (geoJSON) {
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
		};
		
		return {
			location: geoJSONLayer,
			text: getName(geoJSON) || code,
			center: centroid
		};

	},
	
	_getLocationGeoJSON: function (record) {
		var self = this;
		var locationField = this.options.geoJSONField;

		var geoJSON = locationField ? this._getFieldValue(record, locationField) : record;
		
		if (geoJSON) {
			var geoJSONLayer = new L.GeoJSON(geoJSON, {
				pointToLayer: function (feature, latlng) {
					var location = {
						location: latlng,
						text: self.options.locationTextField ? self._getFieldValue(record, this.options.locationTextField) : [latlng.lat.toFixed(3),latlng.lng.toFixed(3)].join(', '),
						center: latlng
					};
					
			        return self.recordToLayer(location, record);
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
				text: this.options.locationTextField ? this._getFieldValue(record, this.options.locationTextField) : null,
				center: center
			};
		}
	},
	
	_getLocationCustom: function (record) {
		var locationField = this.options.codeField;
		var fieldValue = this._getFieldValue(record,locationField);
		var context = {};
		
		context[fieldValue] = record;
		
		if (this.options.getLocation) {
			
			var self = this;
			var callback = function (key, location) {
				self.locationToLayer(location, context[key]);
			};
			
			this.options.getLocation(context, locationField, [fieldValue], callback);
		}
	},
	
	_getLocation: function (record, index) {
		var location;
		
		switch (this.options.locationMode) {
		case L.LocationModes.LATLNG:
			location = this._getLocationLatLng(record);
			break;
		case L.LocationModes.GEOHASH:
			location = this._getLocationGeohash(record);
			break;
		case L.LocationModes.COUNTRY:
			location = this._getLocationChoropleth(record, index);
			break;
		case L.LocationModes.STATE:
			location = this._getLocationChoropleth(record, index);
			break;
		case L.LocationModes.GEOJSON:
			location = this._getLocationGeoJSON(record);
			break;
		case L.LocationModes.CUSTOM:
			if (!this.options.preload) {
				location = this._getLocationCustom(record);
			}
			break;
		}
		
		return location;
	},
	
	_processLocation: function (location) {
		var processedLocation = location;
		
		processedLocation = location.center;
		
		return processedLocation;
	},
	
	_getFieldValue: function (record, fieldName) {
		
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
				else if (valueField[part]) {
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
	},
	
	_getLayer: function (location, options, record) {
		location = this._processLocation(location);
		
		return this._getMarker(location, options, record);
	},
	
	_getMarker: function (location, options, record) {
		var marker;
		
		if (location) {
			if (options.numberOfSides >= 30) {
				marker = new L.CircleMarker(location, options);
			}
			else {
				marker = new L.RegularPolygonMarker(location, options);
			}
		}
		
		return marker;
	},
	
	_loadRecords: function (records) {
		var location;
		
		for (var recordIndex in records) {
			var record = records[recordIndex];
			
			location = this._getLocation(record, recordIndex);
			
			this.locationToLayer(location, record);
		}
	},
	
	_preloadLocations: function (records) {
		var locationField = this.options.codeField;
		var locationValues = [];
		var indexedRecords = {};
		
		for (var recordIndex in records) {
			var record = records[recordIndex];
			var fieldValue = this._getFieldValue(record,locationField);
			
			indexedRecords[fieldValue] = record;
			locationValues.push(fieldValue);
		}
		
		if (this.options.getLocation) {
			var self = this;
			var callback = function (key, location) {
				self.locationToLayer(location, indexedRecords[key]);
			};
			
			this.options.getLocation(indexedRecords, locationField, locationValues, callback);
		}
	},
	
	addData: function (data) {
		var records = this.options.recordsField !== null && this.options.recordsField.length > 0 ? this._getFieldValue(data, this.options.recordsField) : data;
		var layer;
		var location;
		
		if (this.options.locationMode === L.LocationModes.CUSTOM && this.options.preload) {
			this._preloadLocations(records);
		}
		else {
			this._loadRecords(records);
		}
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
	
	recordToLayer: function (location, record) {
		var layerOptions = L.Util.extend({},this.options.layerOptions);
		var layer;
		var displayOptions = this.options.displayOptions;
		var legendDetails = {};
		
		if (displayOptions) {
			for (var property in displayOptions) {
				
				var propertyOptions = displayOptions[property];
				var fieldValue = this._getFieldValue(record, property);
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
						
						layerOptions[layerProperty] = valueFunction.evaluate ? valueFunction.evaluate(fieldValue) : valueFunction;
					}
				}
			}
		}
		
		var includeLayer = true;
		
		if (this.options.includeLayer) {
			includeLayer = this.options.includeLayer(record);
		}
		
		if (location && layerOptions && includeLayer) {
			layerOptions.title = location.text;
			
			layer = this._getLayer(location, layerOptions, record);
			
			if (layer) {
				if (this.options.showLegendTooltips) {
					this._bindMouseEvents(layer, layerOptions, legendDetails);
				}
				
				if (this.options.onEachRecord) {
					this.options.onEachRecord(layer, record, this);
				}
			}
		}
		
		return layer;
	},
	
	setCSSProperty: function ($element, key, value) {
		var keyMap = {
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
					property: ['border'],
					valueFunction: function (value) {
						return 'solid ' + value + 'px';
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
			};
		var cssProperty = keyMap[key];
		
		if (cssProperty) {
			var propertyKey = cssProperty.property;
			for (var propertyIndex in propertyKey) {
				$element.css(propertyKey[propertyIndex], cssProperty.valueFunction(value));
			}
		}
		
		return $element;
	},	
	
	getLegend: function (legendOptions) {
		
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
			$legendElement.append('<legend>' + legendOptions.title	 + '</legend>');
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

					var $i = $('<i></i>');
					
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
								var value = valueFunction.evaluate ? valueFunction.evaluate(x) : valueFunction(x);
		
								L.StyleConverter.setCSSProperty($i, property, value);
								
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
					$scaleBars.append($i);

				}
			}

			$legendElement.append($legendItems);

		}
		
		return $legendElement.wrap('<div/>').parent().html();
	}
});

/*
 * 
 */
L.MarkerDataLayer = L.DataLayer.extend({
	initialize: function (data, options) {
		L.DataLayer.prototype.initialize.call(this, data, options);
	},
	
	options: {
		recordsField: 'features',
		locationMode: L.LocationModes.LATLNG,
		latitudeField: 'latitude',
		longitudeField: 'longitude',
		layerOptions: {
			icon: null
		}
	},

	_getMarker: function (latLng, layerOptions, record) {
		if (this.options.setIcon) {
			layerOptions.icon = this.options.setIcon(this, record, layerOptions);
		}
		
		return new L.Marker(latLng, layerOptions);
	},
	
	getLegend: function (options) {
		// TODO:  Implement this.  Get the correct icon for each marker based on iterating over a range
		// of values
	}
});

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
		latLng = this._processLocation(latLng);
		
		var chartOptions = this.options.chartOptions;
		var tooltipOptions = this.options.tooltipOptions;
		var options = {};
		
		options = layerOptions;
		options.data = {};
		options.chartOptions = chartOptions;
		
		for (var key in this.options.chartOptions) {
			options.data[key] = this._getFieldValue(record, key);			
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
	
	getLegend: function (legendOptions) {
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