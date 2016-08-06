(function (window, document, undefined) {

    L.Path.XLINK_NS = 'http://www.w3.org/1999/xlink';

    var DomUtilFunctions = DomUtilFunctions || {
        setStyle: function(element, style) {
            var styleString = '';

            for (var key in style) {
                styleString += key + ': ' + style[key] + ';';
            }

            element.setAttribute('style', styleString);

            return element;
        },
        setAttr: function (element, attr) {
            for (var key in attr) {
                element.setAttribute(key, attr[key]);
            }

            return element;
        }
    };

    L.extend(L.DomUtil, DomUtilFunctions);

    /*
     * Functions that support displaying text on an SVG path
     */
    L.TextFunctions = L.TextFunctions || {
        __addPath: L.SVG.prototype._addPath,
        _addPath: function (layer) {
            L.TextFunctions.__addPath.call(this, layer);
            if (layer.options.text) {
                this._createText(layer);
            }
        },

        __removePath: L.SVG.prototype._removePath,
        _removePath: function (layer) {
            this.__removePath.call(this, layer);
            if (layer._text) {
                L.DomUtil.remove(layer._text);
            }
            if (layer._pathDef) {
                L.DomUtil.remove(layer._pathDef);
            }
        },

        __updatePath: L.SVG.prototype._updatePath,
        _updatePath: function (layer) {
            this.__updatePath.call(this, layer);

            if (layer.options.text) {
                this._createText(layer);
            }
        },

        __setPath: L.SVG.prototype._setPath,
        _setPath: function (layer, path) {
            this.__setPath.call(this, layer, path);

            if (layer.options.text) {
                this._createText(layer);
            }
        },

        _initText: function (layer) {
            if (layer.options.text) {
                this._createText(layer);
            }
        },

        getTextAnchor: function (layer) {
            if (layer._point) {
                return layer._point;
            }
        },

        setTextAnchor: function (layer, anchorPoint) {
            if (layer._text) {
                layer._text.setAttribute('x', anchorPoint.x);
                layer._text.setAttribute('y', anchorPoint.y);
            }
        },

        _createText: function (layer) {
            var options = layer.options.text || {};

            if (layer._text) {
                L.DomUtil.remove(layer._text);
                layer.text = null;
            }

            if (layer._pathDef) {
                L.DomUtil.remove(layer._pathDef);
                layer._pathDef = null;
            }

            layer._text = L.SVG.create('text');
            layer._text.setAttribute('id', L.stamp(layer._text));

            var textNode = document.createTextNode(options.text);

            // If path is true, then create a textPath element and append it
            // to the text element; otherwise, populate the text element with a text node
            if (options.path && layer._path) {

                var pathOptions = options.path;

                var clonedPath = L.SVG.create('path');
                var existingDef = layer._path.getAttribute('d');

                clonedPath.setAttribute('id', L.stamp(clonedPath));
                if (existingDef) {
                    clonedPath.setAttribute('d', existingDef);
                }

                this._createDefs();

                this._defs.appendChild(clonedPath);
                layer._pathDef = clonedPath;

                // Create the textPath element and add attributes to reference this path
                var textPath = L.SVG.create('textPath');

                if (pathOptions.startOffset) {
                    textPath.setAttribute('startOffset', pathOptions.startOffset);
                }

                if (pathOptions.attr) {
                    L.DomUtil.setAttr(textPath, pathOptions.attr);
                }

                if (pathOptions.style) {
                    L.DomUtil.setStyle(textPath, pathOptions.style);
                }

                textPath.setAttributeNS(L.Path.XLINK_NS, 'xlink:href', '#' + L.stamp(clonedPath));
                textPath.appendChild(textNode);

                // Add the textPath element to the text element
                layer._text.appendChild(textPath);
            }
            else {
                layer._text.appendChild(textNode);
                layer._project();
                var anchorPoint = layer.getTextAnchor ? layer.getTextAnchor() : this.getTextAnchor(layer);
                this.setTextAnchor(layer, anchorPoint);
            }

            //className
            if (options.className) {
                layer._text.setAttribute('class', options.className);
            }
            else {
                layer._text.setAttribute('class', 'leaflet-svg-text');
            }

            //attributes
            if (options.attr) {
                L.DomUtil.setAttr(layer._text, options.attr);
            }

            //style
            if (options.style) {
                L.DomUtil.setStyle(layer._text, options.style);
            }

            if (layer._path) {
                var referencedNode = layer._path.nextSibling;

                this._container.firstChild.insertBefore(layer._text, referencedNode);
            }
        }
    };

    /*
     * Functions that support additions to the basic SVG Path features provided by Leaflet
     */
    var PathFunctions = PathFunctions || {
        __updateStyle: L.SVG.prototype._updateStyle,
        _finishPathAnimation: function (layer, animationEnd) {
            return function () {
                var dashArray = layer.options.dashArray || [0, 0];
                layer._path.style.strokeDasharray = dashArray.join(' ');
                layer._path.style.strokeDashoffset = 0;

                if (animationEnd) {
                    animationEnd(layer);
                }
            };
        },
        animatePath: function (layer) {
            var path = layer._path;
            var length = path.getTotalLength();
            var animationOptions = layer.options.animatePath !== true ? L.extend({}, layer.options.animatePath) : {};
            var property = animationOptions.property || 'stroke-dashoffset';
            var duration = animationOptions.duration || '2s';
            var timingFunction = animationOptions.timingFunction || 'ease-in-out';
            var transition = [property, duration, timingFunction].join(' ');

            path.style.transition = path.style.MozTransition = 'none';
            path.style.transition = path.style.WebkitTransition = 'none';
            path.style.transition = path.style.MsTransition = 'none';
            // Set up the starting positions
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.MozTransition = transition;
            path.style.transition = path.style.WebkitTransition = transition;
            path.style.transition = path.style.MsTransition = transition;
            // Go!
            path.style.strokeDashoffset = '0';

            L.DomEvent.on(path, {
                transitionEnd: this._finishPathAnimation(layer, animationOptions.animationEnd),
                mozTransitionEnd: this._finishPathAnimation(layer, animationOptions.animationEnd),
                msTransitionEnd: this._finishPathAnimation(layer, animationOptions.animationEnd),
                webkitTransitionEnd: this._finishPathAnimation(layer, animationOptions.animationEnd),
                oTransitionEnd: this._finishPathAnimation(layer, animationOptions.animationEnd)
            });
        },

        _createDefs: function () {
            if (!this._defs) {
                this._defs = L.SVG.create('defs');
                this._container.appendChild(this._defs);
            }
        },

        _addPath: function (layer) {

            L.TextFunctions._addPath.call(this, layer);

            if (layer._gradient) {
                this._defs.appendChild(layer._gradient);
            }
            if (layer._dropShadow) {
                this._defs.appendChild(layer._dropShadow);
            }
            if (layer._fillPattern) {
                this._defs.appendChild(layer._fillPattern);
            }
            if (layer._shapePattern) {
                this._defs.appendChild(layer._shapePattern);
            }
            if (layer._shape && layer._path) {
                this._container.firstChild.insertBefore(layer._shape, layer._path.nextSibling);
            }
            if (layer._pathDef) {
                this._defs.appendChild(layer._pathDef);
            }

            if (layer.options.animatePath) {
                this.animatePath(layer);
            }
        },

        _updatePath: function (layer) {
            L.TextFunctions._updatePath.call(this, layer);

            var me = this;
            if (layer.options.wordCloud) {
                var options = layer.options.wordCloud;

                if (options.words.length > 0) {
                    setTimeout(function () {
                        me._createWordCloudPattern(layer);
                    }, 0);
                }
            }
        },

        _removePath: function (layer) {

            L.TextFunctions._removePath.call(this, layer);

            if (layer._gradient) {
                L.DomUtil.remove(layer._gradient);
            }
            if (layer._dropShadow) {
                L.DomUtil.remove(layer._dropShadow);
            }
            if (layer._fillPattern) {
                L.DomUtil.remove(layer._fillPattern);
            }
            if (layer._shapePattern) {
                L.DomUtil.remove(layer._shapePattern);
            }
            if (layer._shape) {
                L.DomUtil.remove(layer._shape);
            }

            if (layer._g) {
                L.DomUtil.remove(layer._g);
            }
        },

        _createMarker: function (layer, type, options) {
            if (!this._defs) {
                this._createDefs();
            }

            layer._markers = layer._markers || {};
            layer._markerPath = layer._markerPath || {};

            if (!layer._markers[type]) {
                layer._markers[type] = L.SVG.create('marker');
                this._defs.appendChild(layer._markers[type]);
            }

            var markerGuid = L.Util.guid();

            var exaggeration = options.exaggeration || 2;
            var size = options.size || 2 * exaggeration;
            var halfSize = size/2;
            var style = L.extend({
                fill: layer.options.color,
                opacity: layer.options.opacity,
                radius: halfSize,
                numberOfSides: 3,
                rotation: 0,
                position: new L.Point(halfSize, halfSize)
            }, options.style);

            layer._markers[type].setAttribute('id', markerGuid);
            layer._markers[type].setAttribute('markerWidth', size);
            layer._markers[type].setAttribute('markerHeight', size);
            layer._markers[type].setAttribute('refX', halfSize);
            layer._markers[type].setAttribute('refY', halfSize);
            layer._markers[type].setAttribute('orient', options.orient || 'auto');
            layer._markers[type].setAttribute('markerUnits', options.markerUnits || 'strokeWidth');

            if (!layer._markerPath[type]) {
                layer._markerPath[type] = L.SVG.create('path');
                layer._markers[type].appendChild(layer._markerPath[type]);
            }

            var points = new L.RegularPolygonMarker(new L.LatLng(0,0),{})._getPoints(new L.Point(0,0), false, style);
            var d = new L.SVGPathBuilder(points, [], {
                closePath: true
            }).build(6);

            /*
             if (options.reverse) {
             layer._markerPath[type].setAttribute('d', 'M0,' + halfSize + ' L' + size + ',' + size + ' L' + size + ',0 L0,' + halfSize);
             }
             else {
             layer._markerPath[type].setAttribute('d', 'M' + size + ',' + halfSize + ' L0,' + size + ' L0,0 L' + size + ',' + halfSize);
             }
             */
            layer._markerPath[type].setAttribute('d', d);

            layer._markerPath[type].setAttribute('style', 'fill: ' + style.fill + '; opacity: ' + style.opacity);
        },
        _createGradient: function (layer) {
            if (!this._defs) {
                this._createDefs();
            }

            var options = layer.options.gradient !== true ? L.extend({}, layer.options.gradient) : {};
            var gradient;
            var gradientOptions;
            var gradientType = options.gradientType || 'linear';

            gradient = layer._gradient || L.SVG.create(gradientType + 'Gradient');

            if (gradientType === "radial") {
                gradientOptions = options.radial || {cx: '50%', cy: '50%', r: '50%', fx: '50%', fy: '50%'};
            } else {
                var vector = options.vector || [["0%", "0%"], ["100%", "100%"]];
                gradientOptions = {
                    x1: vector[0][0],
                    x2: vector[1][0],
                    y1: vector[0][1],
                    y2: vector[1][1]
                };
            }

            gradientOptions.id = gradient.id || L.stamp(gradient);

            if (options.gradientUnits) {
                gradient.setAttribute('gradientUnits', options.gradientUnits);
            }

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
                            color: layer.options.fillColor || layer.options.color,
                            opacity: 1
                        }
                    }
                ];

            var key;

            for (key in gradientOptions) {
                gradient.setAttribute(key, gradientOptions[key]);
            }

            var children = gradient.childNodes;
            var childLength = children ? children.length : 0;

            for (var i = 0, len = stops.length; i < len; ++i) {
                var stop = stops[i];
                var stopElement = childLength > i ? children[i] : L.SVG.create('stop');

                stop.style = stop.style || {};

                for (key in stop) {
                    var stopProperty = stop[key];

                    if (key === 'style') {
                        var styleProperty = '';

                        stopProperty.color = stopProperty.color || (layer.options.fillColor || layer.options.color);
                        stopProperty.opacity = typeof stopProperty.opacity === 'undefined' ? 1 : stopProperty.opacity;

                        for (var propKey in stopProperty) {
                            styleProperty += 'stop-' + propKey + ':' + stopProperty[propKey] + ';';
                        }

                        stopProperty = styleProperty;
                    }

                    stopElement.setAttribute(key, stopProperty);
                }

                if (childLength <= i) {
                    gradient.appendChild(stopElement);
                }
            }

            layer._gradient = gradient;
            return gradientOptions.id;
        },

        _createDropShadow: function (layer) {

            this._createDefs();

            var filter = layer._dropShadow || L.SVG.create('filter');
            var feOffset = filter.querySelector('feOffset') || L.SVG.create('feOffset');
            var feGaussianBlur = filter.querySelector('feGaussianBlur') || L.SVG.create('feGaussianBlur');
            var feBlend = filter.querySelector('feBlend') || L.SVG.create('feBlend');

            var options = layer.options.dropShadow && typeof(layer.options.dropShadow) === 'object' && Object.keys(layer.options.dropShadow).length > 0 ? layer.options.dropShadow : {
                width: '200%',
                height: '200%'
            };

            options.id = L.stamp(filter);

            for (var key in options) {
                filter.setAttribute(key, options[key]);
            }

            var offsetOptions = {
                result: 'offOut',
                'in': 'SourceAlpha',
                dx: '2',
                dy: '2'
            };

            var blurOptions = {
                result: 'blurOut',
                'in': 'offOut',
                stdDeviation: '2'
            };

            var blendOptions = {
                'in': 'SourceGraphic',
                in2: 'blurOut',
                mode: 'lighten'
            };

            for (key in offsetOptions) {
                feOffset.setAttribute(key, offsetOptions[key]);
            }

            for (key in blurOptions) {
                feGaussianBlur.setAttribute(key, blurOptions[key]);
            }

            for (key in blendOptions) {
                feBlend.setAttribute(key, blendOptions[key]);
            }

            filter.id = options.id;

            if (!layer._dropShadow) {
                filter.appendChild(feOffset);
                filter.appendChild(feGaussianBlur);
                filter.appendChild(feBlend);
            }

            layer._dropShadow = filter;

            return L.stamp(filter);
        },

        _createCustomElement: function (tag, attributes) {
            var element = L.SVG.create(tag);
            element.setAttribute('id', L.stamp(element));

            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    element.setAttribute(key, attributes[key]);
                }
            }

            return element;
        },

        _createImage: function (imageOptions) {
            var image = L.SVG.create('image');
            image.setAttribute('id', L.stamp(image));
            image.setAttribute('width', imageOptions.width);
            image.setAttribute('height', imageOptions.height);
            image.setAttribute('x', imageOptions.x || 0);
            image.setAttribute('y', imageOptions.y || 0);
            image.setAttribute('preserveAspectRatio', imageOptions.preserveAspectRatio || 'xMidYMid meet');
            image.setAttributeNS(L.Path.XLINK_NS, 'xlink:href', imageOptions.url);

            return image;
        },

        _createPattern: function (patternOptions) {
            var pattern = L.SVG.create('pattern');
            pattern.setAttribute('id', L.stamp(pattern));
            pattern.setAttribute('width', patternOptions.width);
            pattern.setAttribute('height', patternOptions.height);
            pattern.setAttribute('x', patternOptions.x || 0);
            pattern.setAttribute('y', patternOptions.y || 0);
            pattern.setAttribute('patternUnits', patternOptions.patternUnits || 'objectBoundingBox');
            return pattern;
        },

        _createShape: function (type, shapeOptions) {
            var shape = this._createCustomElement(type, shapeOptions);
            return shape;
        },

        _createFillPattern: function (layer) {
            this._createDefs();

            var patternOptions = L.extend({}, layer.options.fillPattern);
            var pattern = this._createPattern(patternOptions.pattern);

            var imageOptions = L.extend({
                url: patternOptions.url
            }, patternOptions.image);
            var image = this._createImage(imageOptions);

            pattern.appendChild(image);

            if (layer._fillPattern) {
                L.DomUtil.remove(layer._fillPattern);
            }
            layer._fillPattern = pattern;

            return L.stamp(pattern);
        },

        _getDefaultDiameter: function (radius) {
            return 1.75 * radius;
        },

        // Added for image circle
        _createShapeImage: function (layer) {
            this._createDefs();

            var imageOptions = layer.options.shapeImage || {};

            var radius = layer.options.radius || Math.max(layer.options.radiusX, layer.options.radiusY);
            var diameter = layer._getDefaultDiameter ? layer._getDefaultDiameter(radius) : this._getDefaultDiameter(radius);
            var imageSize = imageOptions.imageSize || new L.Point(diameter, diameter);

            var circleSize = imageOptions.radius || diameter / 2;

            var shapeOptions = imageOptions.shape || {
                circle: {
                    r: circleSize,
                    cx: 0,
                    cy: 0
                }
            };

            var patternOptions = imageOptions.pattern || {
                width: imageSize.x,
                height: imageSize.y,
                x: 0,
                y: 0
            };

            patternOptions.patternUnits = patternOptions.patternUnits || 'objectBoundingBox';

            var pattern = this._createPattern(patternOptions);
            L.stamp(pattern);

            var shapeKeys = Object.keys(shapeOptions);
            var shapeType = shapeKeys.length > 0 ? shapeKeys[0] : 'circle';

            shapeOptions[shapeType].fill = 'url(#' + L.stamp(pattern) + ')';

            var shape = this._createShape(shapeType, shapeOptions[shapeType]);

            if (layer.options.interactive) {
                shape.setAttribute('class', 'leaflet-interactive');
            }

            imageOptions = imageOptions.image || {
                width: imageSize.x,
                height: imageSize.y,
                x: 0,
                y: 0,
                url: layer.options.imageCircleUrl
            };

            var image = this._createImage(imageOptions);
            image.setAttributeNS(L.Path.XLINK_NS, 'xlink:href', imageOptions.url);

            pattern.appendChild(image);

            if (layer._shapePattern) {
                L.DomUtil.remove(layer._shapePattern);
            }
            if (layer._shape) {
                L.DomUtil.remove(layer._shape);
            }

            layer._shapePattern = pattern;
            layer._shape = shape;

            return L.stamp(pattern);
        },

        _updateStyle: function (layer) {
            this.__updateStyle.call(this, layer);

            var guid;

            if (layer._path) {
                if (layer.options.text) {
                    layer._renderer._createText(layer);
                }

                if (layer.options.markers) {
                    for (var key in layer.options.markers) {
                        if (layer.options.markers.hasOwnProperty(key)) {
                            this._createMarker(layer, key, layer.options.markers[key]);
                            layer._path.setAttribute('marker-' + key, 'url(#' + layer._markers[key].getAttribute('id') + ')');
                        }
                    }
                }

                if (layer.options.gradient) {
                    guid = this._createGradient(layer);

                    if (layer.options.stroke && !layer.options.fill) {
                        layer._path.setAttribute('stroke', 'url(#' + guid + ')');
                    }
                    else {
                        layer._path.setAttribute('fill', 'url(#' + guid + ')');
                    }
                }
                else if (!layer.options.fill) {
                    layer._path.setAttribute('fill', 'none');
                }

                if (layer.options.dropShadow) {
                    guid = this._createDropShadow(layer);

                    layer._path.setAttribute('filter', 'url(#' + guid + ')');
                }
                else {
                    layer._path.removeAttribute('filter');
                }

                if (layer.options.fillPattern) {
                    guid = this._createFillPattern(layer);
                    layer._path.setAttribute('fill', 'url(#' + guid + ')');
                }
            }

            if (layer._applyCustomStyles) {
                layer._applyCustomStyles();
            }

            if (layer._gradient) {
                this._defs.appendChild(layer._gradient);
            }
            if (layer._dropShadow) {
                this._defs.appendChild(layer._dropShadow);
            }
            if (layer._fillPattern) {
                this._defs.appendChild(layer._fillPattern);
            }
            if (layer._shapePattern) {
                this._defs.appendChild(layer._shapePattern);
            }
            if (layer._shape && layer._path) {
                this._container.firstChild.insertBefore(layer._shape, layer._path.nextSibling);
            }

            if (layer.options.wordCloud) {
                var options = layer.options.wordCloud;
                var me = this;

                if (options.words.length > 0) {
                    setTimeout(function () {
                        me._createWordCloudPattern(layer);
                    }, 0);
                }
            }
        },

        _createWordCloudPattern: function (layer) {
            var wordCloudOptions = layer.options.wordCloud || {};
            var patternGuid = '';
            var patternOptions = wordCloudOptions.patternOptions || {};

            if (!this._defs) {
                this._createDefs();
            }

            wordCloudOptions.textField = wordCloudOptions.textField || 'key';
            wordCloudOptions.countField = wordCloudOptions.countField || 'doc_count';

            for (var i = 0, len = wordCloudOptions.words.length; i < len; ++i) {
                var word = wordCloudOptions.words[i];

                patternGuid += word[wordCloudOptions.textField] + "_" + word[wordCloudOptions.countField];
            }

            if (patternGuid !== layer._wordCloudGuid && layer._path) {
                layer._wordCloudGuid = patternGuid;

                // Hash words to see if we need to create a new word cloud pattern or use the existing one
                var clonedPath = L.SVG.create('path');
                clonedPath.setAttribute('d', layer._path.getAttribute('d'));
                clonedPath.setAttribute('id', patternGuid);

                patternOptions.id = patternGuid;
                patternOptions.patternUnits = patternOptions.patternUnits || 'userSpaceOnUse';

                var bbox = layer.getBounds();

                var bounds = new L.Bounds(this._map.project(bbox.getNorthWest()), this._map.project(bbox.getSouthEast()));
                var ratio = bounds.getSize().x / bounds.getSize().y;

                patternOptions.width = patternOptions.width || 500;
                patternOptions.height = patternOptions.height || (500 * ratio) || 500;

                patternOptions.width = Math.min(patternOptions.width, patternOptions.height);
                patternOptions.height = patternOptions.width;

                layer._wordCloud = L.SVG.create('g');
                layer._wordPattern = this._createPattern(patternOptions);
                layer._wordPattern.id = patternGuid;
                layer._wordPattern.appendChild(layer._wordCloud);

                this._defs.appendChild(layer._wordPattern);

                this._createWordCloud(layer, layer._wordCloud, wordCloudOptions);
            }

            if (layer._path) {
                var existingFill = layer._path.getAttribute('fill');

                if (existingFill.indexOf(layer._wordCloudGuid) === -1) {
                    layer._path.setAttribute('fill', 'url(#' + layer._wordCloudGuid + ')');
                }
            }

        },

        _createWordCloud: function (layer, element, wordCloudOptions) {
            var width = wordCloudOptions.patternOptions.width;
            var height = wordCloudOptions.patternOptions.height;
            var words = wordCloudOptions.words;
            var anchor = this.getTextAnchor(layer);
            var rect = L.SVG.create('rect');
            var countField = wordCloudOptions.countField;
            var textField = wordCloudOptions.textField;
            var rotation = wordCloudOptions.rotation || function (d) {
                return 0;
            };
            rect.setAttribute('width', width);
            rect.setAttribute('height', height);
            rect.style.fill = layer.options.fillColor || '#000';
            rect.setAttribute('transform', "translate(" + -width / 2 + ',' + -height / 2 + ")");
            element.appendChild(rect);

            var draw = function (words, element) {
                return function (words) {
                    var id = "svg" + L.Util.guid();
                    d3.select(element)
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
                        .selectAll("text")
                        .data(words)
                        .enter().append("text")
                        .style("font-size", function (d) {
                            return d.size + "px";
                        })
                        .style("font-family", wordCloudOptions.fontFamily || 'Impact')
                        .style("fill", function (d, i) {
                            return fill(i);
                        })
                        .attr("text-anchor", "middle")
                        .attr("transform", function (d) {
                            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                        })
                        .text(function (d) {
                            return d[textField];
                        });
                };
            };

            var fill = wordCloudOptions.textFillColor || d3.scale.category20();
            var scale = d3.scale.linear();

            var max = words[0][countField];
            var min = words[words.length - 1][countField];

            var fontSize = wordCloudOptions.fontSize || d3.scale.log().domain([min, max]).range([10, 40]);

            scale.domain([0, 10]).range([-60, 60]);

            d3.layout.cloud().size([width, height])
                .spiral('rectangular')
                .timeInterval(Infinity)
                .words(words)
                .padding(5)
                .rotate(rotation)
                .font(wordCloudOptions.fontFamily || 'Impact')
                .fontSize(function (d) {
                    return fontSize(d[countField]);
                })
                .on("end", draw(words, element))
                .start();

            return element;

        }
    };

    /**
     * Extend L.Polyline with an alternative getCenter method.  The current getCenter method
     * doesn't account for the case where you have a line with the same starting/ending point
     */
    L.PolylineFunctions = {
        _getCenter: L.Polyline.prototype.getCenter,
        getCenter: function () {
            var centerPoint = this._getCenter.call(this);

            if (!centerPoint) {
                centerPoint = this._latlngs[0];
            }

            return centerPoint;
        },
        _buildDistanceIndex: function () {
            if (!this._index) {
                var latlngs = this._latlngs;
                var total = 0.0;

                this._index = [0.0];

                for (var i = 0, len = latlngs.length; i < len - 1; ++i) {
                    total += latlngs[i].distanceTo(latlngs[i + 1]);
                    this._index.push(total);
                }

                this._totalDistance = total;
            }
            return this;
        },
        _clearDistanceIndex: function () {
            this._totalDistance = 0.0;
            this._index = null;
            return this;
        },
        _distanceToPoints: function (latlngs, distance) {
            var points = null;

            if (distance >= this._totalDistance) {
                points = [latlngs[latlngs.length - 1], latlngs[latlngs.length - 1]];
            }
            else {
                for (var i = 0, len = this._index.length; i < len - 1; ++i) {
                    if (distance >= this._index[i] && distance < this._index[i + 1]) {
                        points = [latlngs[i], latlngs[i + 1]];
                        break;
                    }
                }
            }

            return points;
        },
        _getInterpolator: function (points) {
            return new L.LinearFunction([points[0].lng, points[0].lat], [points[1].lng, points[1].lat]);
        },
        animateLine: function (options) {
            var updater = function (latlngs) {
                return function (layer, points, interpolatedPoint) {
                    var index = latlngs.indexOf(points[0]);
                    layer.setLatLngs(latlngs.slice(0, index + 1).concat(new L.LatLng(interpolatedPoint.y, interpolatedPoint.x)));
                };
            };

            L.AnimationUtils.animateLine(this, L.extend({}, {
                update: updater(this._latlngs.slice())
            }, options));
        }
    };

    L.extend(L.Polyline.prototype, L.PolylineFunctions);

    L.Polyline.prototype.getTextAnchor = function () {
        var center = this.getCenter();

        return this._map.latLngToLayerPoint(center);
    };

    L.extend(L.SVG.prototype, L.TextFunctions, PathFunctions);

    /*
     * Rotates a point the provided number of degrees about another point.  Code inspired/borrowed from OpenLayers
     */
    L.Point.prototype.rotate = function (angle, point) {
        var radius = this.distanceTo(point);
        var theta = (angle * L.LatLng.DEG_TO_RAD) + Math.atan2(this.y - point.y, this.x - point.x);
        this.x = point.x + (radius * Math.cos(theta));
        this.y = point.y + (radius * Math.sin(theta));
    };

    /*
     * Let's override the default behavior of L.GeoJSON.asFeature, since it doesn't handle nested FeatureCollections
     */
    L.extend(L.GeoJSON, {
        asFeature: function (geoJSON) {
            if (geoJSON.type === 'Feature' || geoJSON.type === 'FeatureCollection') {
                return geoJSON;
            }

            return {
                type: 'Feature',
                properties: {},
                geometry: geoJSON
            };
        }
    });

    // Extend the L.TextFunctions above and change the __updatePath reference, since
    // _updatePath for a line/polygon is different than for a regular path
    L.LineTextFunctions = L.extend({}, L.TextFunctions);

    // Pulled from the Leaflet discussion here:  https://github.com/Leaflet/Leaflet/pull/1586
    // This is useful for getting a centroid/anchor point for centering text or other SVG markup
    L.LineTextFunctions.getCenter = function () {
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

    L.extend(L.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
    });

    /*
     * Rotates a point the provided number of degrees about another point.  Code inspired/borrowed from OpenLayers
     */
    L.Point.prototype.rotate = function (angle, point) {
        var radius = this.distanceTo(point);
        var theta = (angle * L.LatLng.DEG_TO_RAD) + Math.atan2(this.y - point.y, this.x - point.x);
        this.x = point.x + (radius * Math.cos(theta));
        this.y = point.y + (radius * Math.sin(theta));
    };

    /*
     * Draws a Leaflet map marker using SVG rather than an icon, allowing the marker to be dynamically styled
     */
    L.RegularPolygonMarker = L.Path.extend({
        initialize: function (centerLatLng, options) {
            L.setOptions(this, options);

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
            dropShadow: false,
            interactive: true
        },

        setLatLng: function (latlng) {
            this._latlng = latlng;
            return this.redraw();
        },

        projectLatLngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._points = this._getPoints(this._point, false, this.options);

            if (this.options.innerRadius || (this.options.innerRadiusX && this.options.innerRadiusY)) {
                this._innerPoints = this._getPoints(this._point, true, this.options).reverse();
            }
        },

        _project: function () {
            this.projectLatLngs();
            this._updateBounds();
        },

        _updateBounds: function () {
            var map = this._map,
                radiusX = this.options.radius || this.options.radiusX,
                radiusY = this.options.radius || this.options.radiusY,
                deltaX = radiusX * Math.cos(Math.PI / 4),
                deltaY = radiusY * Math.sin(Math.PI / 4),
                point = map.project(this._latlng),
                swPoint = new L.Point(point.x - deltaX, point.y + deltaY),
                nePoint = new L.Point(point.x + deltaX, point.y - deltaY);
            this._pxBounds = new L.Bounds(swPoint, nePoint);
        },

        _update: function () {
            if (this._map) {
                this._renderer._setPath(this, this.getPathString());
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

        setRadius: function (radius) {
            this.options.radius = radius;
            return this.redraw();
        },

        setRadiusXY: function (radiusX, radiusY) {
            this.options.radius = null;
            this.options.radiusX = radiusX;
            this.options.radiusY = radiusY;
            return this.redraw();
        },

        setInnerRadius: function (innerRadius) {
            this.options.innerRadius = innerRadius;
            return this.redraw();
        },

        setInnerRadiusXY: function (innerRadiusX, innerRadiusY) {
            this.options.innerRadius = null;
            this.options.innerRadiusX = innerRadiusX;
            this.options.innerRadiusY = innerRadiusY;
            return this.redraw();
        },

        setRotation: function (rotation) {
            this.options.rotation = rotation;
            return this.redraw();
        },

        setNumberOfSides: function (numberOfSides) {
            this.options.numberOfSides = numberOfSides;
            return this.redraw();
        },

        getLatLng: function () {
            return this._latlng;
        },

        getPathString: function () {
            var anchorPoint = this.getTextAnchor();

            if (this._shape) {
                if (this._shape.tagName === 'circle' || this._shape.tagName === 'ellipse') {
                    this._shape.setAttribute('cx', anchorPoint.x);
                    this._shape.setAttribute('cy', anchorPoint.y);
                }
                else {
                    var width = this._shape.getAttribute('width');
                    var height = this._shape.getAttribute('height');
                    this._shape.setAttribute('x', anchorPoint.x - Number(width) / 2);
                    this._shape.setAttribute('y', anchorPoint.y - Number(height) / 2);
                }
            }

            if (this._path) {
                this._path.setAttribute('shape-rendering', 'geometricPrecision');
            }
            return new L.SVGPathBuilder(this._points, this._innerPoints).build(6);
        },

        getTextAnchor: function () {
            return this._point;
        },

        _getPoints: function (point, inner, options) {
            var maxDegrees = options.maxDegrees || 360;
            var angleSize = maxDegrees / Math.max(options.numberOfSides, 3);
            var degrees = maxDegrees;
            var angle = 0;
            var points = [];
            var newPoint;
            var angleRadians;
            var radiusX = !inner ? options.radius || options.radiusX : options.innerRadius || options.innerRadiusX;
            var radiusY = !inner ? options.radius || options.radiusY : options.innerRadius || options.innerRadiusY;

            var toRad = function (number) {
                return number * L.LatLng.DEG_TO_RAD;
            };

            while (angle < degrees) {

                angleRadians = toRad(angle);

                // Calculate the point the radius pixels away from the center point at the
                // given angle;
                newPoint = this._getPoint(point, angleRadians, radiusX, radiusY, options);

                // Add the point to the latlngs array
                points.push(newPoint);

                // Increment the angle
                angle += angleSize;
            }

            return points;
        },

        _getPoint: function (point, angle, radiusX, radiusY, options) {
            var startPoint = options.position ? point.add(new L.Point(options.position.x, options.position.y)) : point;
            var newPoint = new L.Point(startPoint.x + radiusX * Math.cos(angle), startPoint.y + radiusY * Math.sin(angle));

            newPoint.rotate(options.rotation, startPoint);

            return newPoint;
        },

        _getDefaultDiameter: function (radius) {
            var angle = Math.PI / this.options.numberOfSides;
            var minLength = radius * Math.cos(angle);

            return 1.75 * minLength;
        },

        _applyCustomStyles: function () {
            // Added for image circle
            if (this.options.shapeImage || this.options.imageCircleUrl) {
                this._renderer._createShapeImage(this);
            }
        },

        toGeoJSON: function () {
            var geoJSON = L.Marker.prototype.toGeoJSON.call(this);

            geoJSON.properties = this.options;

            return geoJSON;
        }
    });

    // Displays a star on the map
    L.StarMarker = L.RegularPolygonMarker.extend({
        options: {
            numberOfPoints: 5,
            rotation: -15.0,
            maxDegrees: 360,
            gradient: true,
            dropShadow: true
        },

        setNumberOfPoints: function (numberOfPoints) {
            this.options.numberOfPoints = numberOfPoints;
            return this.redraw();
        },

        _getPoints: function (point, inner, options) {
            var maxDegrees = options.maxDegrees || 360;
            var angleSize = maxDegrees / options.numberOfPoints;
            var degrees = maxDegrees;
            var angle = 0;
            var points = [];
            var newPoint, newPointInner;
            var angleRadians;
            var radiusX = !inner ? options.radius || options.radiusX : options.innerRadius || options.innerRadiusX;
            var radiusY = !inner ? options.radius || options.radiusY : options.innerRadius || options.innerRadiusY;

            var toRad = function (number) {
                return number * L.LatLng.DEG_TO_RAD;
            };

            while (angle < degrees) {

                angleRadians = toRad(angle);

                // Calculate the point the radius meters away from the center point at the
                // given angle;
                newPoint = this._getPoint(point, angleRadians, radiusX, radiusY, options);
                newPointInner = this._getPoint(point, angleRadians + toRad(angleSize) / 2, radiusX / 2, radiusY / 2, options);

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

    /*
     * Draws a Leaflet map marker using SVG rather than an icon, allowing the marker to be dynamically styled
     */
    L.MapMarker = L.Path.extend({

        // includes: L.TextFunctions,

        initialize: function (centerLatLng, options) {
            L.setOptions(this, options);
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
            dropShadow: true,
            interactive: true
        },

        setLatLng: function (latlng) {
            this._latlng = latlng;
            return this.redraw();
        },

        projectLatLngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._points = this._getPoints(this._point, false, this.options);

            if (this.options.innerRadius > 0) {
                this._innerPoints = this._getPoints(this._point, true, this.options).reverse();
            }
        },

        _project: function () {
            this.projectLatLngs();
            this._updateBounds();
        },

        _updateBounds: function () {
            var map = this._map,
                height = this.options.radius * 3,
                point = map.project(this._latlng),
                swPoint = new L.Point(point.x - this.options.radius, point.y),
                nePoint = new L.Point(point.x + this.options.radius, point.y - height);
            this._pxBounds = new L.Bounds(swPoint, nePoint);
        },

        _update: function () {
            if (this._map) {
                this._renderer._setPath(this, this.getPathString());
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

        setRadius: function (radius) {
            this.options.radius = radius;
            return this.redraw();
        },

        setInnerRadius: function (innerRadius) {
            this.options.innerRadius = innerRadius;
            return this.redraw();
        },

        setRotation: function (rotation) {
            this.options.rotation = rotation;
            return this.redraw();
        },

        setNumberOfSides: function (numberOfSides) {
            this.options.numberOfSides = numberOfSides;
            return this.redraw();
        },

        getPathString: function () {
            var anchorPoint = this.getTextAnchor();

            if (this._shape) {
                if (this._shape.tagName === 'circle' || this._shape.tagName === 'ellipse') {
                    this._shape.setAttribute('cx', anchorPoint.x);
                    this._shape.setAttribute('cy', anchorPoint.y);
                }
                else {
                    var width = this._shape.getAttribute('width');
                    var height = this._shape.getAttribute('height');
                    this._shape.setAttribute('x', anchorPoint.x - Number(width) / 2);
                    this._shape.setAttribute('y', anchorPoint.y - Number(height) / 2);
                }
            }

            if (this._path) {
                this._path.setAttribute('shape-rendering', 'geometricPrecision');
            }

            return new L.SVGPathBuilder(this._points, this._innerPoints).build(6);
        },

        getTextAnchor: function () {
            var anchorPoint = this.options.position ? this._point.add(new L.Point(this.options.position.x, this.options.position.y)) : this._point;
            return new L.Point(anchorPoint.x, anchorPoint.y - 2 * this.options.radius);
        },

        _getPoints: function (point, inner, options) {
            var maxDegrees = !inner ? 210 : 360;
            var angleSize = !inner ? maxDegrees / 50 : maxDegrees / Math.max(options.numberOfSides, 3);
            var degrees = !inner ? maxDegrees : maxDegrees + options.rotation;
            var angle = !inner ? -30 : options.rotation;
            var points = [];
            var newPoint;
            var angleRadians;
            var radius = options.radius;
            var multiplier = Math.sqrt(0.75);

            var toRad = function (number) {
                return number * L.LatLng.DEG_TO_RAD;
            };

            var startPoint = options.position ? point.add(new L.Point(options.position.x, options.position.y)) : point;

            if (!inner) {
                points.push(startPoint);
                points.push(new L.Point(startPoint.x + multiplier * radius, startPoint.y - 1.5 * radius));
            }

            while (angle < degrees) {

                angleRadians = toRad(angle);

                // Calculate the point the radius pixels away from the center point at the
                // given angle;
                newPoint = this._getPoint(startPoint, angleRadians, radius, inner, options);

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

        _getPoint: function (point, angle, radius, inner, options) {
            var markerRadius = radius;

            radius = !inner ? radius : options.innerRadius;

            return new L.Point(point.x + radius * Math.cos(angle), point.y - 2 * markerRadius - radius * Math.sin(angle));
        },

        _applyCustomStyles: function () {
            // Added for image circle
            if (this.options.shapeImage || this.options.imageCircleUrl) {
                this._renderer._createShapeImage(this);
            }
        }
    });

    L.mapMarker = function () {
        return new L.MapMarker(latlng, options);
    };

    /*
     * Class for putting custom SVG on the map.  This is experimental and a little bit of a hack
     */
    L.SVGMarker = L.Path.extend({

        initialize: function (latlng, options) {
            L.setOptions(this, options);

            this._svg = options.svg || '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>';
            if (this._svg.indexOf("<") === 0) {
                this._data = (new DOMParser()).parseFromString(this._svg, 'text/xml');
            }

            this._latlng = latlng;
        },

        projectLatLngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
        },

        _project: function () {
            this.projectLatLngs();
            this._updateBounds();
        },

        _updateBounds: function () {
            var map = this._map,
                radiusX = 200,
                radiusY = 200,
                deltaX = radiusX * Math.cos(Math.PI / 4),
                deltaY = radiusY * Math.sin(Math.PI / 4),
                point = map.project(this._latlng),
                swPoint = new L.Point(point.x - deltaX, point.y + deltaY),
                nePoint = new L.Point(point.x + deltaX, point.y - deltaY);
            this._pxBounds = new L.Bounds(swPoint, nePoint);
        },

        _update: function () {
            if (this._map && this._path) {
                this.updateSVG();
            }
        },

        setLatLng: function (latlng) {
            this._latlng = latlng;
            this.redraw();
        },

        getLatLng: function () {
            return this._latlng;
        },

        onAdd: function () {
            var me = this;
            this._renderer = this._map.getRenderer(this);
            if (!this._data) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        me._data = this.responseXML;
                        me._reset();
                        me.addSVG();
                        me.updateSVG();
                    }
                };
                xhr.open('GET', this._svg, true);
                xhr.send(null);
            }
            else {
                me._reset();
                me.addSVG();
                me.updateSVG();
            }


        },

        addSVG: function () {
            var me = this;
            var data = me._data;
            me._svgEl = data.nodeName.toLowerCase() === 'svg' ? data.cloneNode(true) : data.querySelector('svg').cloneNode(true);

            if (!me._g) {
                var g = L.SVG.create('g');
                me._g = g;
                me._g.id = L.stamp(me._g);
                me._svgEl.id = L.stamp(me._svgEl);
                me._g.appendChild(me._svgEl);

                me._path = me._g;

                me._renderer._rootGroup.appendChild(me._path);
                me.addInteractiveTarget(me._path);

                if (me.options.interactive) {
                    L.DomUtil.addClass(me._g, 'leaflet-interactive');

                    var interact = function (node) {
                        var children = node.childNodes;

                        if (node.id) {
                            node.id = L.stamp(node);
                        }

                        if (children) {
                            for (var i = 0, len = children.length; i < len; ++i) {
                                interact(children[i]);
                            }
                        }
                    };

                    interact(me._svgEl);

                }
            }
        },

        updateSVG: function () {
            var me = this;

            var options = me.options || {};
            me._g.setAttribute('pointer-events', options.pointerEvents || (options.interactive ? 'visiblePainted' : 'none'));

            if (options.setStyle) {
                options.setStyle.call(me, me._svgEl);
            }

            var elementWidth = me._svgEl.getAttribute('width');
            var elementHeight = me._svgEl.getAttribute('height');

            var width = elementWidth ? elementWidth.replace('px', '') : '100%';
            var height = elementHeight ? elementHeight.replace('px', '') : '100%';

            // If the width is 100% (meaning that no width is provided), then set the width and height to the size specified in the options
            if (width === '100%') {
                width = options.size.x;
                height = options.size.y;

                me._svgEl.setAttribute('width', width + (String(width).indexOf('%') !== -1 ? '' : 'px'));
                me._svgEl.setAttribute('height', height + (String(height).indexOf('%') !== -1 ? '' : 'px'));
            }

            var size = options.size || new L.Point(width, height);

            var scaleSize = new L.Point(size.x / width, size.y / height);
            var transforms = [];
            var anchor = options.anchor || new L.Point(-size.x / 2, -size.y / 2);
            var x = me._point.x + anchor.x;
            var y = me._point.y + anchor.y;

            transforms.push('translate(' + x + ' ' + y + ')');
            transforms.push('scale(' + scaleSize.x + ' ' + scaleSize.y + ')');

            if (me.options.rotation) {
                transforms.push('rotate(' + options.rotation + ' ' + (width / 2) + ' ' + (height / 2) + ')');
            }

            me._g.setAttribute('transform', transforms.join(' '));
        },

        getElement: function () {
            return me._g;
        },

        redraw: function () {
            if (this._map && this._path) {
                this._renderer._updatePath(this);
            }
            return this;
        },

        toGeoJSON: function () {
            return L.Util.pointToGeoJSON.call(this);
        }

    });

    L.svgMarker = function (latlng, options) {
        return new L.SVGMarker(latlng, options);
    };

    /*
     * A FeatureGroup with setLatLng and getLatLng methods
     */
    L.MarkerGroup = L.FeatureGroup.extend({
        initialize: function (latlng, markers) {
            L.FeatureGroup.prototype.initialize.call(this, markers);

            this.setLatLng(latlng);
        },

        setStyle: function (style) {
            return this;
        },

        setLatLng: function (latlng) {
            this._latlng = latlng;
            this.eachLayer(function (layer) {
                if (layer.setLatLng) {
                    layer.setLatLng(latlng);
                }
            });

            return this;
        },

        getLatLng: function (latlng) {
            return this._latlng;
        },

        toGeoJSON: function () {
            var featureCollection = {
                type: 'FeatureCollection',
                features: []
            };

            var eachLayerFunction = function (featureCollection) {
                return function (layer) {
                    featureCollection.features.push(L.Util.pointToGeoJSON.call(layer));
                };
            };

            this.eachLayer(eachLayerFunction(featureCollection));

            return featureCollection;
        }
    });

    L.markerGroup = function (latlng, markers) {
        return new L.MarkerGroup(latlng, markers);
    };
    
}(window, document));