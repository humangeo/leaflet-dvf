/*
 *
 */
(function (window, document, undefined) { 
    L.SeriesMarker = L.Path.extend({
        initialize: function (centerLatLng, options) {
            L.setOptions(this, options);

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
            opacity: 1.0
        },

        setLatLng: function (latlng) {
            this._latlng = latlng;
            return this.redraw();
        },

        _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._points = this._getPoints();
        },

        _update: function () {
            if (this._map) {
                this._renderer._setPath(this, this.getPathString());
            }
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

                    points.push(new L.Point(this._point.x + options.position.x + x - size.x / 2, this._point.y + options.position.y - y));
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
                points.unshift(new L.Point(this._point.x + options.position.x + xTransform.evaluate(minX) - size.x / 2, this._point.y + options.position.y - minYCoord));
                points.push(new L.Point(this._point.x + options.position.x + xTransform.evaluate(maxX) - size.x / 2, this._point.y + options.position.y - minYCoord));
            }

            return points;
        }
    });

    L.Line = L.Path.extend({
        initialize: function (points, options) {
            L.setOptions(this, options);
            this._points = points;
        },

        _project: function () {
            // this._points = this._getPoints();
        },

        _update: function () {
            if (this._map) {
                this._renderer._setPath(this, this.getPathString());
            }
        },

        getPathString: function () {
            var path = new L.SVGPathBuilder(this._points, null, {
                closePath: false
            }).build(6);

            return path;
        }
    });

    /*
     *
     */
    L.SparklineMarker = L.ChartMarker.extend({
        initialize: function (centerLatLng, options) {
            L.setOptions(this, options);

            L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
        },

        options: {
            weight: 1,
            opacity: 1,
            dataPointHighlightStyle: {
                weight: 1.0,
                opacity: 1.0,
                color: '#1E90FF',
                lineCap: 'square',
                dropShadow: false,
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
                    };

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

                    chartOption.xField = "0";
                    chartOption.yField = "1";
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
            var seriesField = this.options.seriesField;
            var includeFunction = this.options.filter || this.options.includeLayer;
            var key;
            var seriesPoint;
            var points = {};
            var pointIndex;
            var index;

            for (index in records) {
                if (records.hasOwnProperty(index)) {

                    record = records[index];

                    var includeLayer = includeFunction ? includeFunction.call(this, record) : true;

                    if (includeLayer) {

                        // If there's a seriesField option specified, then navigate to the property specified by the seriesField
                        if (seriesField) {

                            // Get the seriesField property
                            series = L.Util.getFieldValue(record, seriesField);

                            // If the seriesField is an object then break it into pairs
                            // [[1, 2], [2, 3], ... [9, 10]]
                            if (_.isObject(series)) {
                                series = _.pairs(series);
                            }

                            // Iterate through keys in chartOptions
                            for (key in this.options.chartOptions) {

                                points = {};
                                var chartOptions = this.options.chartOptions[key];

                                // Need to sort x's numerically before plotting
                                for (pointIndex in series) {
                                    if (series.hasOwnProperty(pointIndex)) {
                                        seriesPoint = series[pointIndex];

                                        x = L.Util.getFieldValue(seriesPoint, chartOptions.xField || xField);
                                        y = L.Util.getFieldValue(seriesPoint, chartOptions.yField || yField);

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

                                seriesObjects[index] = seriesObjects[index] || record;

                                // Add the key and points to the record.
                                // TODO:  make sure this doesn't overwrite existing record properties
                                L.Util.setFieldValue(seriesObjects[index], key, points);
                            }
                        }
                        else {
                            // Iterate through the keys in chartOptions
                            for (key in this.options.chartOptions) {

                                // Get the key property from the record
                                series = L.Util.getFieldValue(record, key);

                                if (_.isObject(series)) {
                                    series = _.pairs(series);
                                }

                                points = {};
                                var chartOption = this.options.chartOptions[key];

                                // Need to sort x's numerically before plotting
                                for (pointIndex in series) {
                                    if (series.hasOwnProperty(pointIndex)) {
                                        seriesPoint = series[pointIndex];

                                        x = L.Util.getFieldValue(seriesPoint, chartOption.xField || xField);
                                        y = L.Util.getFieldValue(seriesPoint, chartOption.yField || yField);

                                        // TODO:  This may be unnecessary, since it's handled
                                        // by the lines above
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

                                seriesObjects[index] = seriesObjects[index] || record;

                                L.Util.setFieldValue(seriesObjects[index], key, points);
                            }
                        }
                    }
                }
            }

            xValues = _.sortBy(_.keys(xValues), function (value) {
                return value;
            });

            for (index in seriesObjects) {

                var seriesObject = seriesObjects[index];

                for (key in this.options.chartOptions) {

                    var seriesData = L.Util.getFieldValue(seriesObject, key);

                    for (var j = 0; j < xValues.length; ++j) {
                        var x = xValues[j];

                        if (!(x in seriesData)) {
                            seriesData[x] = 0;
                        }
                    }

                    L.Util.setFieldValue(seriesObjects[index], key, _.chain(seriesData).pairs().sortBy(function (value) {
                        return value;
                    }).value());

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
            L.setOptions(this, options);
            L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
        },

        options: {},

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
    var getArrow = function (latlng, angle, options) {
        angle = L.LatLng.RAD_TO_DEG * angle;
        options = options || {};

        var numberOfSides = options.numberOfSides || 3;
        var radius = options.radius || 6;

        var startRotation = 180 / numberOfSides;

        var offsets = {
            se: startRotation + angle,
            sw: 180 + startRotation - angle,
            nw: 180 + startRotation + angle,
            ne: startRotation - angle
        };

        var rotation = offsets.se;

        var arrow = new L.RegularPolygonMarker(latlng, {
            numberOfSides: numberOfSides,
            rotation: rotation,
            fillColor: options.fillColor,
            color: options.color,
            gradient: options.gradient,
            weight: options.weight,
            opacity: options.opacity,
            fillOpacity: options.fillOpacity,
            radius: radius,
            lineCap: 'butt',
            lineJoin: 'miter'
        });

        return arrow;
    };

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
            getEdge: L.Graph.EDGESTYLE.STRAIGHT,
            useLocationText: true
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

            var fromText = this.options.useLocationText && fromLocation ? fromLocation.text : fromValue;
            var toText = this.options.useLocationText && toLocation ? toLocation.text : toValue;

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
                        text: this.options.getLocationText ? this.options.getLocationText.call(this, record) : fromText + ' - ' + toText
                    };
                }
            }

            return location;
        }
    });

    /*
     * Incomplete.  A WORK IN PROGRESS
     * Needs two points with associated weights and the next point with weight in order to determine the join angles.  May need to
     * include angles as well...
     */
    L.WeightedLineSegment = L.Path.extend({

        options: {
            polygon: true
        },
        initialize: function (weightedPoint1, weightedPoint2, options) {
            L.setOptions(this, options);

            this._weightedPoint1 = weightedPoint1;
            this._weightedPoint2 = weightedPoint2;
            this._latlngs = [];
        },

        _project: function () {
            var me = this;
            this._points = this._getPoints();
            if ((typeof this.options.fill !== 'undefined' && this.options.fill && this.options.gradient) || (this.options.stroke && !this.options.fill && this.options.gradient)) {
                me._setGradient();
            }
        },

        _update: function () {
            if (this._map) {
                this._renderer._setPath(this, this.getPathString());
            }
        },

        getLatLngs: function () {
            var points1 = this._weightedPointToPoint(this._weightedPoint1);
            var points2 = this._weightedPointToPoint(this._weightedPoint2);

            var midPoint1 = points1[1];
            var midPoint2 = points2[1];

            return [this._map.layerPointToLatLng(midPoint1), this._map.layerPointToLatLng(midPoint2)];
        },

        projectLatlngs: function () {
            var me = this;
            this._points = this._getPoints();

            if ((typeof this.options.fill !== 'undefined' && this.options.fill && this.options.gradient) || (this.options.stroke && !this.options.fill && this.options.gradient)) {
                me._setGradient();
            }
        },

        _setGradient: function () {
            var p1 = this._points[1];
            var p2 = this._points[4];

            var deltaX = p2.x - p1.x;
            var deltaY = p2.y - p1.y;
            var vector;

            if (this.options.gradient) {
                this.options.gradient.gradientUnits = this.options.gradient.gradientUnits || 'objectBoundingBox';

                if (deltaX !== 0 || deltaY !== 0) {
                    if (this.options.gradient.gradientUnits === 'objectBoundingBox') {
                        var angle = Math.atan(deltaY / deltaX);
                        var directionX = deltaX / Math.abs(deltaX);
                        var directionY = deltaY / Math.abs(deltaY);

                        p1 = new L.Point(50 + 50 * Math.cos(angle + Math.PI), 50 + 50 * Math.sin(angle + Math.PI));
                        p2 = new L.Point(50 + 50 * Math.cos(angle), 50 + 50 * Math.sin(angle));

                        if (directionX < 0) {
                            var temp = p1;
                            p1 = p2;
                            p2 = temp;
                        }
                        vector = [[p1.x.toFixed(2) + '%', p1.y.toFixed(2) + '%'], [p2.x.toFixed(2) + '%', p2.y.toFixed(2) + '%']];
                    }
                    else {
                        vector = [[p1.x.toFixed(2), p1.y.toFixed(2)], [p2.x.toFixed(2), p2.y.toFixed(2)]];
                    }

                    var color1 = this.options.weightToColor ? this.options.weightToColor.evaluate(this._weightedPoint1.lineWeight) : (this._weightedPoint1.fillColor || this._weightedPoint1.color);
                    var color2 = this.options.weightToColor ? this.options.weightToColor.evaluate(this._weightedPoint2.lineWeight) : (this._weightedPoint2.fillColor || this._weightedPoint2.color);
                    var opacity1 = this.options.weightToOpacity ? this.options.weightToOpacity.evaluate(this._weightedPoint1.lineWeight) : 1;
                    var opacity2 = this.options.weightToOpacity ? this.options.weightToOpacity.evaluate(this._weightedPoint2.lineWeight) : 1;

                    this.options.gradient = {
                        gradientUnits: this.options.gradient.gradientUnits,
                        vector: vector,
                        stops: [
                            {
                                offset: '0%',
                                style: {
                                    color: color1,
                                    opacity: opacity1
                                }
                            },
                            {
                                offset: '100%',
                                style: {
                                    color: color2,
                                    opacity: opacity2
                                }
                            }
                        ]
                    };

                    this._renderer._createGradient(this);
                }
            }
        },

        _weightedPointToPoint: function (weightedPoint) {
            var points = [];

            this._latlngs.push(weightedPoint.latlng);

            var point1 = this._map.latLngToLayerPoint(weightedPoint.latlng);

            var weight = weightedPoint.lineWeight / 2;
            var angle1 = weightedPoint.angle;
            var angle2 = angle1 + Math.PI;
            var coord1 = new L.Point(point1.x + Math.cos(angle1) * weight, point1.y + Math.sin(angle1) * weight);
            var coord2 = new L.Point(point1.x + Math.cos(angle2) * weight, point1.y + Math.sin(angle2) * weight);

            points = [coord1, point1, coord2];

            return points;
        },

        _getPoints: function () {
            var points = [];
            var points1 = this._weightedPointToPoint(this._weightedPoint1);
            var points2 = this._weightedPointToPoint(this._weightedPoint2);

            if (this.options.polygon) {
                var line0 = new L.LinearFunction(points1[0], points2[0]);
                var line1 = new L.LinearFunction(points1[1], points2[1]);
                var line2 = new L.LinearFunction(points1[2], points2[2]);

                // TODO:  Make this an angled or curved polygon if the angle difference is greater than some value
                // Interpolate the weight and get the mid point angle
                var intersectionPoint = line2.getIntersectionPoint(line0);
                var bounds = new L.Bounds([].concat(points1, points2));

                if (intersectionPoint) {
                    if (!bounds.contains(intersectionPoint)) {
                        points2 = points2.reverse();
                    }
                }
                else if (line0._slope === line2._slope) {
                    points2 = points2.reverse();
                }

                line0 = null;
                line1 = null;
                line2 = null;
                intersectionPoint = null;
            }

            points = points.concat(points1, points2);

            this._originalPoints = points;

            return points;
        },

        getBounds: function () {
            var bounds = new L.LatLngBounds();
            var point;

            for (var i = 0, len = this._latlngs.length; i < len; ++i) {
                bounds.extend(this._latlngs[i]);
            }

            return bounds;
        },

        getPathString: function () {
            var closePath = this.options.polygon;
            var points = this._points;

            if (!this.options.polygon) {
                points = [points[1], points[4]];
            }

            return new L.SVGPathBuilder(points, [], {
                closePath: closePath
            }).build(6);
        }
    });

    L.WeightedLineSegment.include(L.LineTextFunctions);

    /*
     * 
     */
    L.WeightedFlowLine = L.FlowLine.extend({
        initialize: function (data, options) {
            L.setOptions(this, options);
            L.FlowLine.prototype.initialize.call(this, data, options);
            this._loaded = false;
        },

        _getAngle: function (p1, p2) {
            var point1 = this._map.latLngToLayerPoint(p1);
            var point2 = this._map.latLngToLayerPoint(p2);
            var deltaX = point2.x - point1.x;
            var deltaY = point2.y - point1.y;
            var angleRadians = Math.atan(deltaY / deltaX);

            return angleRadians;
        },

        _getAngles: function (p1, p2) {
            var angleRadians = this._getAngle(p1, p2);

            if (isNaN(angleRadians)) {
                angleRadians = 0; //Math.PI/2;
            }

            var angle1 = angleRadians + Math.PI / 2;
            var angle2 = angle1 + Math.PI;

            return [angle1, angle2];
        },

        onAdd: function (map) {
            L.FlowLine.prototype.onAdd.call(this, map);

            if (this._data && !this._loaded) {
                this._loadRecords(this._data);
            }
        },

        _addLineSegment: function (p1, p2, angles, records, keys, index) {
            var angleValues = this._getAngles(p1, p2);

            var options1 = this._getDynamicOptions(records[keys[index - 1]]);
            var options2 = this._getDynamicOptions(records[keys[index]]);

            angles.push(L.extend({
                latlng: p1,
                angle: (angleValues[0] + angles[angles.length - 1].angle) / 2
            }, options2.layerOptions));

            var line = new L.WeightedLineSegment(angles[0], angles[1], options2.layerOptions);
            this.addLayer(line);

            if (this.options.showLegendTooltips) {
                this._bindMouseEvents(line, options2.layerOptions, options2.legendDetails);
            }

            this.onEachSegment(records[keys[index - 1]], records[keys[index]], line);

            return angles;
        },

        _loadRecords: function (records) {
            if (this._map) {
                var angles = [];
                var keys = Object.keys(records);

                if (keys.length > 0) {

                    keys = keys.length === 1 ? keys.push(keys[0]) : keys;

                    var p1 = this._getLocation(records[keys[0]], keys[0]).center;
                    var p2 = this._getLocation(records[keys[1]], keys[1]).center;
                    var angleValues = this._getAngles(p1, p2);
                    var options = this._getDynamicOptions(records[keys[0]]);

                    if (angleValues.length > 0) {

                        angles.push(L.extend({
                            latlng: p1,
                            angle: angleValues[0]
                        }, options.layerOptions));

                        for (var i = 1, len = keys.length - 1; i < len; ++i) {
                            p1 = p2;
                            p2 = this._getLocation(records[keys[i + 1]], keys[i + 1]).center;

                            angles = this._addLineSegment(p1, p2, angles, records, keys, i);
                            angles = angles.slice(1);
                        }

                        p1 = p2;
                        p2 = this._getLocation(records[keys[keys.length - 1]]).center;

                        this._addLineSegment(p1, p2, angles, records, keys, keys.length - 1);
                    }

                    this._loaded = true;
                }
            }
        }
    });

    /*
     * Incomplete - A WORK IN PROGRESS - NOTE:  This is now obsolete - replaced by the L.WeightedFlowLine class
     * Takes a set of weighted points as input.  Iterates through those points, creating WeightedLineSegment
     * objects.
     */
    L.WeightedPolyline = L.FeatureGroup.extend({
        initialize: function (latlngs, options) {
            L.FeatureGroup.prototype.initialize.call(this, options);
            L.setOptions(this, options);
            this._latlngs = latlngs;
        },

        onAdd: function (map) {
            L.LayerGroup.prototype.onAdd.call(this, map);
            this._loadComponents();
        },

        getBounds: function () {
            var bounds = new L.LatLngBounds();

            this.eachLayer(function (layer) {
                bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            });

            return bounds;
        },

        setLatLngs: function (latlngs) {
            this._latlngs = latlngs;
            this._loaded = true;
            this._loadComponents();
            this.redraw();
        },

        getLatLngs: function () {
            return this._latlngs;
        },

        options: {
            weightToColor: new L.HSLHueFunction([0, 120], [20, -30])
        },

        _getAngle: function (p1, p2) {
            var point1 = this._map.latLngToLayerPoint(p1);
            var point2 = this._map.latLngToLayerPoint(p2);
            var deltaX = point2.x - point1.x;
            var deltaY = point2.y - point1.y;
            var angleRadians = Math.atan(deltaY / deltaX);

            return angleRadians;
        },

        _getAngles: function (p1, p2) {
            var angleRadians = this._getAngle(p1, p2);

            if (isNaN(angleRadians)) {
                angleRadians = 0;
            }

            var angle1 = angleRadians + Math.PI / 2;
            var angle2 = angle1 + Math.PI;

            return [angle1, angle2];
        },

        // TODO:  Move some of these calculations to the WeightedLineSegment class - specifically angle calculation
        _loadComponents: function () {
            if (!this._loaded) {
                var angles = [];
                var p1 = this._latlngs[0];
                var p2 = this._latlngs[1];
                var angleValues = this._getAngles(p1, p2);

                if (angleValues.length > 0) {
                    angles.push({
                        latlng: p1,
                        angle: angleValues[0],
                        lineWeight: p1.weight
                    });

                    for (var i = 1, len = this._latlngs.length - 1; i < len; ++i) {
                        p1 = this._latlngs[i];
                        p2 = this._latlngs[i + 1];

                        // LatLngs to layer coords
                        angleValues = this._getAngles(p1, p2);

                        angles.push({
                            latlng: p1,
                            angle: angleValues[0],
                            lineWeight: p1.weight
                        });

                        this.addLayer(new L.WeightedLineSegment(angles[0], angles[1], this.options));

                        angles = angles.slice(1);
                    }

                    p1 = L.extend({}, p2);
                    p2 = this._latlngs[this._latlngs.length - 1];

                    angles.push({
                        latlng: p1,
                        angle: angles[0].angle,
                        lineWeight: p2.weight
                    });

                    this.addLayer(new L.WeightedLineSegment(angles[0], angles[1], this.options));
                }
                this._loaded = true;
            }
        }
    });

    L.weightedPolyline = function (latlngs, options) {
        return new L.WeightedPolyline(latlngs, options);
    };

    /*
     * Incomplete - A WORK IN PROGRESS
     * Takes an array of of values (degrees for each slice), an array of fillColors (color for each level of the stack), and an array for each one of the options.data (must have the same length for each)
     */
    L.StackedPieChartMarker = L.ChartMarker.extend({
        initialize: function (centerLatLng, options) {
            L.setOptions(this, options);
            L.ChartMarker.prototype.initialize.call(this, centerLatLng, options);
        },

        options: {
            weight: 1,
            opacity: 1,
            color: "#000",
            fill: true,
            radius: 10,
            rotation: 0,
            numberOfSides: 50,
            mouseOverExaggeration: 1.2,
            maxDegrees: 360,
            iconSize: new L.Point(50, 40)
        },

        _loadComponents: function () {
            var value;
            var allValueMax = 0;
            var scale = 1;
            var sum = 0;
            var angle = 0;
            var percentage = 0;
            var radius = this.options.radius;
            var barThickness = this.options.barThickness;
            var maxDegrees = this.options.maxDegrees || 360;
            var lastAngle = 0;//this.options.rotation;
            var bar;
            var options = this.options;
            var dataPoint;
            var data = this.options.data;
            var chartOptions = this.options.chartOptions;
            var chartOption;
            var key;
            var getValue = function (data, key) {
                var value = 0;
                if (data[key]) {
                    value = parseFloat(data[key]);
                }
                return value;
            };
            var i;
            var j = 0;
            var dataValueSum = [];
            var dataScale = [];
            var valueSum;

            for (key in data) {
                value = getValue(data, key);
                valueSum = 0;
                for (i = 0; i < data[key].length; ++i) {
                    value = parseFloat(data[key][i]);
                    valueSum += value;
                }
                dataValueSum.push(valueSum);
                dataScale.push(options.barThickness / valueSum);
                allValueMax = (allValueMax > valueSum) ? allValueMax : valueSum;
                sum += options.values[j];
                ++j;
            }
            scale = options.barThickness / allValueMax;
            if (sum > 0) {
                circle = new L.CircleMarker(this._latlng, {
                    color: options.color,
                    radius: barThickness,
                    fillColor: options.fillColor,
                    fill: true,
                    iconSize: new L.Point(50, 40)
                });
                this._bindMouseEvents(circle);
                this.addLayer(circle);

                j = 0;
                for (key in data) {
                    valueSum = 0.0;
                    percentage = options.values[j] / sum;
                    angle = percentage * maxDegrees;
                    options.startAngle = lastAngle;
                    options.endAngle = lastAngle + angle;

                    for (i = 0; i < data[key].length; ++i) {
                        value = parseFloat(data[key][i]);

                        valueSum += value;
                        options.radius = valueSum * dataScale[j];
                        options.barThickness = value * dataScale[j];

                        chartOption = chartOptions[key];
                        options.fillColor = this.options.fillColors[i];
                        if (options.fillColor == 'transparent')
                            options.fillOpacity = 0.0;
                        else
                            options.fillOpacity = 1.0;
                        options.color = chartOption.color || "#000";
                        options.radiusX = options.radius;
                        options.radiusY = options.radius;
                        options.rotation = 0;
                        options.key = key + ' ' + i;
                        options.value = value;
                        options.displayName = chartOption.displayName;
                        options.displayText = chartOption.displayText;
                        bar = new L.RadialBarMarker(this._latlng, options);
                        this._bindMouseEvents(bar);
                        this.addLayer(bar);
                    }
                    lastAngle = options.endAngle;
                    j++;
                }

                var displayText = function (v) {
                    return parseInt(100 * v) + "%";
                };

                for (i = 0.2; i < 1.0; i += 0.2) {
                    circle = new L.CircleMarker(this._latlng, {
                        value: i,
                        color: options.color,
                        radius: barThickness * i,
                        weight: 1,
                        dashArray: [5, 5],
                        fill: false,
                        iconSize: new L.Point(50, 40),
                        displayName: "percent",
                        displayText: displayText
                    });
                    this._bindMouseEvents(circle);
                    this.addLayer(circle);
                }
            }
        }
    });

    L.stackedPieChartMarker = function (centerLatLng, options) {
        return new L.StackedPieChartMarker(centerLatLng, options);
    };

    /**
     *
     */
    L.LayeredRegularPolygonMarker = L.MarkerGroup.extend({
        options: {
            levels: 2,
            numberOfSides: 50
        },

        setStyle: function (options) {
            options.levels = options.levels || 2;
            var markers = [];
            var radiusX = options.radiusX || options.radius;
            var radiusY = options.radiusY || options.radius;
            var radiusXOffset = radiusX / (0.75 * options.levels);
            var radiusYOffset = radiusY / (0.75 * options.levels);
            var markerOptions = L.extend({}, options);

            radiusX = radiusX + (options.levels - 1) * radiusXOffset;
            radiusY = radiusY + (options.levels - 1) * radiusYOffset;

            var fillOpacity = options.fillOpacity || 0.5;
            var fillOpacityOffset = options.fillOpacity / (1.5 * options.levels);

            fillOpacity = fillOpacity - options.levels * fillOpacityOffset;

            for (var i = 0; i < options.levels; ++i) {
                markerOptions.radius = 0;
                markerOptions.radiusX = radiusX;
                markerOptions.radiusY = radiusY;
                markerOptions.fillOpacity = fillOpacity;

                this._markers[i].setStyle(markerOptions);

                radiusX -= radiusXOffset;
                radiusY -= radiusYOffset;
                fillOpacity += fillOpacityOffset;
            }

            return this;
        },

        initialize: function (latlng, options) {
            L.Util.setOptions(this, options);

            options.levels = options.levels || 2;
            var markers = [];
            var radiusX = options.radiusX || options.radius;
            var radiusY = options.radiusY || options.radius;
            var radiusXOffset = radiusX / (0.75 * options.levels);
            var radiusYOffset = radiusY / (0.75 * options.levels);
            var markerOptions = L.extend({}, options);

            radiusX = radiusX + (options.levels - 1) * radiusXOffset;
            radiusY = radiusY + (options.levels - 1) * radiusYOffset;

            var fillOpacity = options.fillOpacity || 0.5;
            var fillOpacityOffset = options.fillOpacity / (1.5 * options.levels);

            fillOpacity = fillOpacity - options.levels * fillOpacityOffset;

            for (var i = 0; i < options.levels; ++i) {
                markerOptions.radius = 0;
                markerOptions.radiusX = radiusX;
                markerOptions.radiusY = radiusY;
                markerOptions.fillOpacity = fillOpacity;

                markers.push(new L.RegularPolygonMarker(latlng, markerOptions));

                radiusX -= radiusXOffset;
                radiusY -= radiusYOffset;
                fillOpacity += fillOpacityOffset;
            }

            this._markers = markers;

            L.MarkerGroup.prototype.initialize.call(this, latlng, markers);
        }
    });

    /*
     This is quick example for creating a layer that shows Mapillary photos (definitely a work in progress).
     PanoramioLayer and this class should both be refactored to inherit from a PhotoLayer base layer w/ common methods
     */
    L.MapillaryLayer = L.PanoramioLayer.extend({
        options: {
            recordsField: null,
            locationMode: L.LocationModes.LATLNG,
            latitudeField: 'lat',
            longitudeField: 'lon',
            onEachRecord: function (layer, record) {
                var photoUrl = record.map_image_versions[1].url;
                var title = record.location;
                var me = this;
                var width = 640;
                var height = 640;
                var offset = 20000;

                layer.on('click', function (e) {
                    var container = document.createElement('div');
                    var content = L.DomUtil.create('div', '', container);

                    L.DomUtil.addClass(content, 'panoramio-content');

                    var photo = L.DomUtil.create('img', 'photo', content);
                    photo.setAttribute('onload', 'this.style.opacity=1;');
                    photo.setAttribute('src', photoUrl);
                    photo.style.width = width + 'px';

                    var photoInfo = L.DomUtil.create('div', 'photo-info', content);
                    photoInfo.style.width = (width - 20) + 'px';
                    photoInfo.innerHTML = '<span>' + title + '</span>' +
                    '<a class="photo-link" target="_blank" href="' + photoUrl + '">' +
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Mapillary_logo.png" style="height: 14px;"/>' +
                    '</a>';


                    var icon = new L.DivIcon({
                        className: 'photo-details',
                        html: container.innerHTML,
                        iconAnchor: [width / 2, height / 2]
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
                var title = record.location;
                var iconSize = new L.Point(40, 40);
                var photoUrl = record.map_image_versions[0].url;
                var icon = new L.DivIcon({
                    iconSize: iconSize,
                    className: '',
                    html: '<img class="photo" onload="this.style.opacity=1" title="' + title + '" src="' + photoUrl + '"/>'
                });

                return icon;
            }
        },
        requestPhotos: function () {

            var me = this;
            var bounds = this._map.getBounds();
            var southWest = bounds.getSouthWest();
            var northEast = bounds.getNorthEast();

            while (me._calls.length > 0) {
                me._calls.pop().abort();
            }

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(xhr.responseText);

                    me._count = data.length;

                    me.fire('photosAvailable', data);
                    me.clearLayers();
                    me.addData(data);
                }
            };
            xhr.open('GET', 'http://api.mapillary.com/v1/im/search?min-lat=' + southWest.lat + '&max-lat=' + northEast.lat + '&min-lon=' + southWest.lng + '&max-lon=' + northEast.lng + '&max-results=50', true);
            xhr.send(null);

            me._calls.push(xhr);
        }
    });

}(window, document));