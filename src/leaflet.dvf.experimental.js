/*
 *
 */
L.SeriesMarker = L.Path.extend({
	initialize: function (centerLatLng, options) {
		L.Path.prototype.initialize.call(this, options);
		
		L.Util.setOptions(this, options);
		
		this._latlng = centerLatLng;
	},

	options: {
		fill: false,
		size: new L.Point(80, 80),
		position: {
			x: 0,
			y: 0
		},
		weight: 1,
		color: '#000',
		opacity: 1.0,
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
			swPoint = new L.Point(point.x, point.y),
			nePoint = new L.Point(point.x + this.options.size.x, point.y - this.options.size.y),
			sw = map.unproject(swPoint),
			ne = map.unproject(nePoint);

		return new L.LatLngBounds(sw, ne);
	},

	getLatLng: function () {
		return this._latlng;
	},

	getPathString: function () {
		return new L.SVGPathBuilder(this._points, null, {
			closePath: this.options.fill
		}).build(6);
	},
	
	getDataPoint: function (x) {
		return _.find(this._seriesPoints, function (value) {
			return value.x === x;
		});
	},
	
	getClosestPathPoint: function (x) {
		var points = this._points;
		var closestPoint;
		var upperIndex = -1;
		
		var upperPoint = _.find(points, function (value, index) {
			var match = value.x >= x;
			
			if (match) {
				upperIndex = index;
			}
			
			return match;
		});
		
		if (upperPoint) {
			if (upperPoint.x === x) {
				closestPoint = upperPoint;
			}
			else if (upperIndex > 0) {
				// Compare the upper point distance to x with the previous point's distance to x
				var lowerPoint = points[upperIndex - 1];
				var upperDelta = Math.abs(upperPoint.x - x);
				var lowerDelta = Math.abs(lowerPoint.x - x);
				
				if (upperDelta < lowerDelta) {
					closestPoint = upperPoint;
				}
				else {
					closestPoint = lowerPoint;
				}
			}
		}
		
		return closestPoint;
	},
	
	getClosestPoint: function (x) {
		var points = this._seriesPoints;
		var closestPoint;
		var upperIndex = -1;
		
		x = this._reverseXTransform.evaluate(x);
		
		var upperPoint = _.find(points, function (value, index) {
			var match = value.x >= x;
			
			if (match) {
				upperIndex = index;
			}
			
			return match;
		});
		
		if (upperPoint) {
			if (upperPoint.x === x) {
				closestPoint = upperPoint;
			}
			else if (upperIndex > 0) {
				// Compare the upper point distance to x with the previous point's distance to x
				var lowerPoint = points[upperIndex - 1];
				var upperDelta = Math.abs(upperPoint.x - x);
				var lowerDelta = Math.abs(lowerPoint.x - x);
				
				if (upperDelta < lowerDelta) {
					closestPoint = upperPoint;
				}
				else {
					closestPoint = lowerPoint;
				}
			}
		}
		
		return closestPoint;
	},
	
	_getPoints: function () {

		var options = this.options;
		
		var size = options.size;
		var minX = options.xRange ? options.xRange[0] : options.minX;
		var maxX = options.xRange ? options.xRange[1] : options.maxX;
		var minY = options.yRange ? options.yRange[0] : options.minY;
		var maxY = options.yRange ? options.yRange[1] : options.maxY;
		
		var xTransform = new L.LinearFunction([minX, 0], [maxX, size.x]);
		var yTransform = new L.LinearFunction([minY, 0], [maxY, size.y]);
		
		this._reverseXTransform = new L.LinearFunction([0, minX], [size.x, maxX]);
		this._reverseYTransform = new L.LinearFunction([0, minY], [size.y, maxY]);
		
		var seriesPoint;
		var x, y;
		var xField = options.xField || 'x';
		var yField = options.yField || 'y';
		
		var points = [];
		
		var series = options.value;
		
// 		if (_.isObject(series)) {
// 			series = _.pairs(series);
// 		}
		
		this._seriesPoints = [];
		
		// Need to sort x's numerically before plotting
		for (var index in series) {
			if (series.hasOwnProperty(index)) {
				seriesPoint = series[index];
			
				x = L.Util.getFieldValue(seriesPoint, xField);
				y = L.Util.getFieldValue(seriesPoint, yField);
			
				// If x is a date string, then parse it
				if (isNaN(x)) {
					x = moment(x).unix();
				}
				else {
					x = Number(x);
				}
			
				this._seriesPoints.push(new L.Point(x, y));
				
				x = xTransform.evaluate(x);
				y = yTransform.evaluate(y);
			
				points.push(new L.Point(this._point.x + options.position.x + x - size.x/2, this._point.y + options.position.y - y));
			}
		}		
	
		this._seriesPoints = _.sortBy(this._seriesPoints, function (point) {
			return point.x;
		});
		
		points = _.sortBy(points, function (point) {
			return point.x;
		});
		
		if (options.fill) {
			var minYCoord = yTransform.evaluate(minY);
			points.unshift(new L.Point(this._point.x + options.position.x + xTransform.evaluate(minX) - size.x/2, this._point.y + options.position.y - minYCoord));
			points.push(new L.Point(this._point.x + options.position.x + xTransform.evaluate(maxX) - size.x/2, this._point.y + options.position.y - minYCoord));
		}
		
		return points;
	}
});

L.Line = L.Path.extend({
	initialize: function (points, options) {
		L.Path.prototype.initialize.call(this, options);
		this._points = points;
	},
	
	getPathString: function () {
		var path = new L.SVGPathBuilder(this._points, null, {
			closePath: false
		}).build(6);
		
		console.log(path);
		
		return path;
	}
});

/*
 *
 */
L.SparklineMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},
	
	options: {
		weight:	1,
		opacity: 1,
		dataPointHighlightStyle: {
			weight: 1.0,
			opacity: 1.0,
			color: '#1E90FF',
			lineCap: 'square',
			dropShadow: true,
			dashArray: [5, 2]
		}
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
	
		chartElement.on('mousemove', function (e) {
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
			
			if (currentOptions.marker) {
				self.removeLayer(currentOptions.marker);
			}
			
			if (currentOptions.lines) {
				_.each(currentOptions.lines, function (line) {
					self.removeLayer(line);
				});
			}
			
			var closestPoint = chartElement.getClosestPoint(x + currentOptions.position.x + self.options.size.x / 2);
			var closestPathPoint = chartElement.getClosestPathPoint(layerPoint.x);
			var bounds = chartElement.getBounds();
			
			if (closestPoint) {
				value = {
					x: closestPoint.x,
					y: closestPoint.y
				}

				newPoint = new L.Point(-offset, iconSize.y + offset);
			
				var legendOptions = {};
				var defaultDisplayText = function (value) {
					return '<div><div><span class="xvalue">' + value.x + '</span><span class="separator">:</span><span class="yvalue">' + value.y + '</span></div></div>';
				};
			
				var displayText = currentOptions.displayText ? currentOptions.displayText(value) : defaultDisplayText(value);
			
				legendOptions[key] = {
					name: currentOptions.displayName,
					value: displayText
				};
			
				var icon = new L.LegendIcon(legendOptions, currentOptions, {
					className: 'leaflet-div-icon',
					iconSize: tooltipOptions ? tooltipOptions.iconSize : iconSize,
					iconAnchor: newPoint
				});
			
				var latlng = self._map.layerPointToLatLng(closestPathPoint);
				
				currentOptions.marker = new L.Marker(latlng, {
					icon: icon
				});
			
				currentOptions.lines = [
					new L.Line([new L.Point(closestPathPoint.x, chartElement._point.y), new L.Point(closestPathPoint.x, closestPathPoint.y)], self.options.dataPointHighlightStyle),
					new L.Line([new L.Point(closestPathPoint.x, closestPathPoint.y), new L.Point(chartElement._point.x + currentOptions.position.x - self.options.size.x / 2, closestPathPoint.y)], self.options.dataPointHighlightStyle)
				];
				
				self.addLayer(currentOptions.marker);
				
				_.each(currentOptions.lines, function (line) {
					self.addLayer(line);
				});
			}
		});
		
		chartElement.on('mouseover', function (e) {
			var currentOptions = this.options;
			
			currentOptions = self._highlight(currentOptions);
			
			this.initialize(self._latlng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
		});
		
		chartElement.on('mouseout', function (e) {
			var currentOptions = this.options;
			
			currentOptions = self._unhighlight(currentOptions);
			
			this.initialize(self._latlng, currentOptions);
			this.redraw();
			this.setStyle(currentOptions);
			
			if (currentOptions.lines) {
				_.each(currentOptions.lines, function (line) {
					self.removeLayer(line);
				});
			}
			
			self.removeLayer(currentOptions.marker);
		});
	},
	
	_loadComponents: function () {
		var chartOptions = this.options.chartOptions;
		var data = this.options.data;
		var series;
		var size = this.options.size;
		var chartOption;

		// Series is an array or object of arrays of points
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				series = data[key];
				chartOption = chartOptions[key];		
				
				chartOption = L.Util.extend({}, this.options, chartOption);
				
				chartOption.key = key;
				chartOption.value = series;
				
				var seriesLayer = new L.SeriesMarker(this._latlng, chartOption);

				this._bindMouseEvents(seriesLayer);
				
				this.addLayer(seriesLayer);
			}
		}
	}
});

/*
 * 
 */
L.SparklineDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_preProcessRecords: function (records) {
		var record;
		var series;
		var xRange = [Number.MAX_VALUE, Number.MIN_VALUE];
		var yRange = [Number.MAX_VALUE, Number.MIN_VALUE];
		var xValues = {};
		var seriesObjects = [];
		var xField = this.options.xField || 'x';
		var yField = this.options.yField || 'y';
		
		for (var index in records) {
			if (records.hasOwnProperty(index)) {
				record = records[index];
				
				for (var key in this.options.chartOptions) {
					series = L.Util.getFieldValue(record, key);
					
					if (_.isObject(series)) {
						series = _.pairs(series);
					}
					
					var seriesPoint;
					var points = {};
					
					// Need to sort x's numerically before plotting
					for (var pointIndex in series) {
						if (series.hasOwnProperty(pointIndex)) {
							seriesPoint = series[pointIndex];
			
							x = L.Util.getFieldValue(seriesPoint, xField);
							y = L.Util.getFieldValue(seriesPoint, yField);
				
							if (seriesPoint.x) {
								x = seriesPoint.x;
								y = seriesPoint.y;		
							}	
							else if (_.isArray(seriesPoint)) {
								x = seriesPoint[0];
								y = seriesPoint[1];
							}
							else {
								x = index;
								y = seriesPoint;
							}
			
							// If x is a date string, then parse it
							if (isNaN(x)) {
								x = moment(x).unix();
							}
							
							x = Number(x);
							
							xValues[x] = x;
							xRange[0] = Math.min(xRange[0], x);
							xRange[1] = Math.max(xRange[1], x);
							yRange[0] = Math.min(yRange[0], y);
							yRange[1] = Math.max(yRange[1], y);
							
							points[x] = y;
						}
					}		

					seriesObjects[index] = seriesObjects[index] || {};
					
					seriesObjects[index][key] = points;
				}
			}
		}
		
		xValues = _.sortBy(_.keys(xValues), function (value) {
			return value;
		});
		
		for (var index in seriesObjects) {
			var seriesObject = seriesObjects[index];
			
			for (var key in seriesObject) {
				if (seriesObject.hasOwnProperty(key)) {
					var seriesData = seriesObject[key];
			
					for (var j = 0; j < xValues.length; ++j) {
						var x = xValues[j];
				
						if (!(x in seriesData)) {
							seriesData[x] = 0;
						}
					}
			
					seriesObject[key] = _.chain(seriesData).pairs().sortBy(function(value) { 
						return value 
					}).value();
				}
			}
		}
		
		this.options.layerOptions.minX = xRange[0];
		this.options.layerOptions.maxX = xRange[1];
		this.options.layerOptions.minY = Math.min(0, yRange[0]);
		this.options.layerOptions.maxY = yRange[1];
		this.options.xField = "0";
		this.options.yField = "1";
		
		return seriesObjects;
	},
	
	_getMarker: function (latLng, options) {
		return new L.SparklineMarker(latLng, options);
	}
});

L.sparklineDataLayer = function (data, options) {
	return new L.SparklineDataLayer(data, options);
};

/*
 *
 */
L.WordCloudMarker = L.ChartMarker.extend({
	initialize: function (centerLatLng, options) {
		L.Util.setOptions(this, options);
		
		L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
	},
	
	options: {

	},
	
	_loadComponents: function () {
		// Add an L.DivIcon for each term, sized by count, and colored by count or by word
	}
});

L.wordCloudMarker = function (centerLatLng, options) {
	return new L.WordCloudMarker(centerLatLng, options);
};

/*
 *
 */
L.WordCloudDataLayer = L.ChartDataLayer.extend({
	initialize: function (data, options) {
		L.ChartDataLayer.prototype.initialize.call(this, data, options);
	},
	
	_preProcessRecords: function (records) {
		// If coloring by word, grab the set of all unique words and map colors to those words
		return records;
	},
	
	_getMarker: function (latLng, options) {
		return new L.WordCloudMarker(latLng, options);
	}
});

L.wordCloudDataLayer = function (data, options) {
	return new L.WordCloudDataDataLayer(data, options);
};

/*
 * A DataLayer for visualizing data as a graph of edges, where the vertices are locations
 */
L.Graph = L.DataLayer.extend({
	statics: {
		EDGESTYLE: {
			STRAIGHT: function (latlng1, latlng2) {
				return new L.Polyline([latlng1, latlng2]);
			},
			ARC: function (latlng1, latlng2) {
				return new L.ArcedPolyline([latlng1, latlng2]);
			}
		}
	}
});

L.Graph = L.Graph.extend({
	options: {
		getEdge: L.Graph.EDGESTYLE.STRAIGHT
	},
	_getLayer: function (location, layerOptions, record) {
		location.location.setStyle(layerOptions);
		return location.location;
	},
	_getLocation: function (record, index) {
		var fromField = this.options.fromField;
		var toField = this.options.toField;
		var location;
		
		var fromValue = L.Util.getFieldValue(record, fromField);
		var toValue = L.Util.getFieldValue(record, toField);
		
		var fromLocation = this.options.locationMode.call(this, fromValue, fromValue);
		var toLocation = this.options.locationMode.call(this, toValue, toValue);
		
		// Get from location
		// Get to location
		// Create a line (arced or straight) connecting the two locations
		if (fromLocation && toLocation) {
			var latlng1 = fromLocation.center;
			var latlng2 = toLocation.center;
			
			if (latlng1 && latlng2) {
				var line = this.options.getEdge.call(this, latlng1, latlng2);
				var bounds = new L.LatLngBounds(new L.LatLng(Math.min(latlng1.lat, latlng2.lat), Math.min(latlng1.lng, latlng2.lng)), new L.LatLng(Math.max(latlng1.lat, latlng2.lat), Math.max(latlng1.lng, latlng2.lng)));
			
				location = {
					center: bounds.getCenter(),
					location: line,
					text: fromValue + ' - ' + toValue
				};
			}
		}
		
		return location;
	}
});