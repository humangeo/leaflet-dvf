/*
 * Class for interpolating values along a line using a linear equation
 */
L.LinearFunction = L.Class.extend({
	initialize: function (minPoint, maxPoint, options) {
		this.setOptions(options);
		this.setRange(minPoint, maxPoint);
	},
	
	_calculateParameters: function (minPoint, maxPoint) {
		if (this._xRange === 0) {
			this._slope = 0;
			this._b = minPoint.y;
		}
		else {
			this._slope = (maxPoint.y - minPoint.y) / this._xRange;
			this._b = minPoint.y - this._slope * minPoint.x;
		}
	},
	
	_arrayToPoint: function (array) {
		return {
			x: array[0],
			y: array[1]
		}
	},
	
	setOptions: function (options) {
		L.Util.setOptions(this, options);
		
		this._preProcess = this.options.preProcess;
		this._postProcess = this.options.postProcess;
	},
	
	getBounds: function () {
		var minX = Math.min(this._minPoint.x, this._maxPoint.x);
		var maxX = Math.max(this._minPoint.x, this._maxPoint.x);
		var minY = Math.min(this._minPoint.y, this._maxPoint.y);
		var maxY = Math.max(this._minPoint.y, this._maxPoint.y);
		
		return [new L.Point(minX, minY), new L.Point(maxX, maxY)];
	},
	
	setRange: function (minPoint, maxPoint) {
		minPoint = minPoint instanceof Array ? this._arrayToPoint(minPoint) : minPoint;
		maxPoint = maxPoint instanceof Array ? this._arrayToPoint(maxPoint) : maxPoint;
		
		this._minPoint = minPoint;
		this._maxPoint = maxPoint;
		this._xRange = maxPoint.x - minPoint.x;
		
		this._calculateParameters(minPoint, maxPoint);
		
		return this;
	},
	
	setMin: function (point) {
		this.setRange(point, this._maxPoint);
		
		return this;
	},
	
	setMax: function (point) {
		this.setRange(this._minPoint, point);
		
		return this;
	},
	
	setPreProcess: function (preProcess) {
		this._preProcess = preProcess;
		
		return this;
	},
	
	setPostProcess: function (postProcess) {
		this._postProcess = postProcess;
		
		return this;
	},
	
	evaluate: function (x) {
		var y;
		
		if (this._preProcess) {
			x = this._preProcess(x);
		}
		
		// Call toFixed to ensure that both numbers being added are using the same precision
		y = Number((this._slope * x).toFixed(6)) + Number(this._b.toFixed(6));
		
		if (this._postProcess) {
			y = this._postProcess(y);
		}
		
		return y;
	},
	
	random: function () {
		var randomX = Math.random() * this._xRange + this._minPoint.x;
		
		return this.evaluate(randomX);
	},
	
	sample: function (count) {
		count = Math.max(count, 2);
		
		var segmentCount = count - 1;
		var segmentSize = this._xRange / segmentCount;
		var x = this._minPoint.x;
		var yValues = [];
		
		while (x <= this._maxPoint.x) {
			yValues.push(this.evaluate(x));
			
			x += segmentSize;	
		}
		
		return yValues;
	},
	
	samplePoints: function (count) {
		count = Math.max(count, 2);
		
		var segmentCount = count - 1;
		var segmentSize = this._xRange / segmentCount;
		var x = this._minPoint.x;
		var points = []
		
		while (x <= this._maxPoint.x) {
			points.push(new L.Point(x, this.evaluate(x)));
			
			x += segmentSize;	
		}
		
		return points;
	},
	
	getIntersectionPoint: function (otherFunction) {
		var point = null;
		
		if (this._slope !== otherFunction._slope) {
			var x = (this._b - otherFunction._b)/(otherFunction._slope - this._slope)
			var y = this.evaluate(x);
			
			point = new L.Point(x, y);
		}
		
		return point;
	}
	
});

/*
 * A linear function that outputs a color value - used to vary color proportionally to some data property value
 */
L.ColorFunction = L.LinearFunction.extend({
	options: {
		alpha: 1.0,
		includeAlpha: false
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.Util.setOptions(this, options);
		
		// Order of output parts (e.g., ['r','g','b'])
		this._parts = [];
	
		// Part of the output that's dynamic (e.g. 'r')
		this._dynamicPart = null;
		this._outputPrecision = 0;
	
		// Output prefix (e.g. rgb, hsl, etc.)
		this._prefix = null;
	
		// Override this as necessary
		this._formatOutput = function (y) {
			return y.toFixed(this._outputPrecision);
		},
	
		this._mapOutput = function (parts) {
			var outputParts = [];
		
			for (var i = 0; i < this._parts.length; ++i) {
				var part = this._parts[i];
				outputParts.push(parts[part]);
			}
		
			if (this.options.includeAlpha) {
				outputParts.push(this.options.alpha);
			}
		
			return outputParts;
		};
	
		this._getColorString = function (y) {		
			y = this._formatOutput(y);
		
			this.options[this._dynamicPart] = y;
		
			var parts = this._mapOutput(this.options);
		
			return this._writeColor(this._prefix, parts);
		};
	
		this._writeColor = function (prefix, parts) {
			if (this.options.includeAlpha) {
				prefix += 'a';
			}
		
			return prefix + '(' + parts.join(',') + ')';
		};
		
		options = this.options;

		var postProcess = function (y) {
			if (options && options.postProcess) {
				y = options.postProcess.call(this, y);
			}
			
			var colorString = this._getColorString(y);
			
			if (((L.Browser.ie) && colorString.indexOf('hsl') > -1) || options.rgb) {
				colorString = L.hslColor(colorString).toRGBString();
			}
			
			return colorString;
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
	}
});

L.HSLColorFunction = L.ColorFunction.extend({
	initialize: function (minPoint, maxPoint, options) {
		L.ColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);

		this._parts = ['outputHue', 'outputSaturation', 'outputLuminosity'];
		this._prefix = 'hsl';
		this._outputPrecision = 2;
	}
});

L.RGBColorFunction = L.ColorFunction.extend({
	initialize: function (minPoint, maxPoint, options) {
		L.ColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._parts = ['outputRed', 'outputBlue', 'outputGreen'];
		this._prefix = 'rgb';
		this._outputPrecision = 0;
	}
});

L.RGBRedFunction = L.LinearFunction.extend({
	
	options: {
		outputGreen: 0,
		outputBlue: 0
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.RGBColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._dynamicPart = 'outputRed';
	}
});

/*
 * 
 */
L.RGBBlueFunction = L.LinearFunction.extend({
	
	options: {
		outputRed: 0,
		outputGreen: 0
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.RGBColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._dynamicPart = 'outputBlue';
	}
});

/*
 * 
 */
L.RGBGreenFunction = L.LinearFunction.extend({
	
	options: {
		outputRed: 0,
		outputBlue: 0
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.RGBColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._dynamicPart = 'outputGreen';
	}
});

/*
 * Produces a gradient between two RGB colors.  The colors are specified as rgb arrays (e.g. [255, 0, 255]) or rgb strings
 */
L.RGBColorBlendFunction = L.LinearFunction.extend({
	initialize: function (minX, maxX, rgbMinColor, rgbMaxColor) {
		rgbMinColor = new L.RGBColor(rgbMinColor);
		rgbMaxColor = new L.RGBColor(rgbMaxColor);
		var red1 = rgbMinColor.r();
		var red2 = rgbMaxColor.r();
		var green1 = rgbMinColor.g();
		var green2 = rgbMaxColor.g();
		var blue1 = rgbMinColor.b();
		var blue2 = rgbMaxColor.b();
		
		this._minX = minX;
		this._maxX = maxX;
		
		this._redFunction = new L.LinearFunction(new L.Point(minX, red1), new L.Point(maxX, red2));
		this._greenFunction = new L.LinearFunction(new L.Point(minX, green1), new L.Point(maxX, green2));
		this._blueFunction = new L.LinearFunction(new L.Point(minX, blue1), new L.Point(maxX, blue2));
	},
	
	getBounds: function () {
		var redBounds = this._redFunction.getBounds();
		var greenBounds = this._greenFunction.getBounds();
		var blueBounds = this._blueFunction.getBounds();
		
		var minY = Math.min(redBounds[0].y, greenBounds[0].y, blueBounds[0].y);
		var maxY = Math.max(redBounds[0].y, greenBounds[0].y, blueBounds[0].y);
		
		return [new L.Point(redBounds[0].x, minY), new L.Point(redBounds[1].x, maxY)];
	},
	
	evaluate: function (x) {
		return new L.RGBColor([this._redFunction.evaluate(x), this._greenFunction.evaluate(x), this._blueFunction.evaluate(x)]).toRGBString();
	}
});



/*
 * Class for varying the hue linearly and producing an HSL color value
 */
L.HSLHueFunction = L.HSLColorFunction.extend({
	
	options: {
		outputSaturation: '100%',
		outputLuminosity: '50%'
	},

	initialize: function (minPoint, maxPoint, options) {
		L.HSLColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._dynamicPart = 'outputHue';
	}
});

/*
 * Class for varying the saturation linearly and producing an HSL color value
 */
L.HSLSaturationFunction = L.LinearFunction.extend({
	
	options: {
		outputHue: 0,
		outputLuminosity: '50%'
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.HSLColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._formatOutput = function (y) {
			return (y * 100).toFixed(this._outputPrecision) + '%';
		};
		
		this._dynamicPart = 'outputSaturation';
	}
});

/*
 * Class for varying the luminosity linearly and producing an HSL color value
 */
L.HSLLuminosityFunction = L.LinearFunction.extend({
	
	options: {
		outputHue: 0,
		outputSaturation: '100%'
	},
	
	initialize: function (minPoint, maxPoint, options) {
		L.HSLColorFunction.prototype.initialize.call(this, minPoint, maxPoint, options);
		
		this._formatOutput = function (y) {
			return (y * 100).toFixed(this._outputPrecision) + '%';
		};
		
		this._dynamicPart = 'outputLuminosity';
	}
});

/*
 * Produces a gradient between two HSL colors
 */
L.HSLColorBlendFunction = L.LinearFunction.extend({
	initialize: function (minX, maxX, hslMinColor, hslMaxColor) {
		hslMinColor = new L.HSLColor(hslMinColor);
		hslMaxColor = new L.HSLColor(hslMaxColor);
		var h1 = hslMinColor.h();
		var h2 = hslMaxColor.h();
		var s1 = hslMinColor.s();
		var s2 = hslMaxColor.s();
		var l1 = hslMinColor.l();
		var l2 = hslMaxColor.l();
		
		this._minX = minX;
		this._maxX = maxX;
		
		this._hueFunction = new L.LinearFunction(new L.Point(minX, h1), new L.Point(maxX, h2));
		this._saturationFunction = new L.LinearFunction(new L.Point(minX, s1), new L.Point(maxX, s2));
		this._luminosityFunction = new L.LinearFunction(new L.Point(minX, l1), new L.Point(maxX, l2));
	},
	
	getBounds: function () {
		var hBounds = this._hueFunction.getBounds();
		var sBounds = this._saturationFunction.getBounds();
		var lBounds = this._luminosityFunction.getBounds();
		
		var minY = Math.min(hBounds[0].y, sBounds[0].y, lBounds[0].y);
		var maxY = Math.max(hBounds[0].y, sBounds[0].y, lBounds[0].y);
		
		return [new L.Point(hBounds[0].x, minY), new L.Point(hBounds[1].x, maxY)];
	},
	
	evaluate: function (x) {
		return new L.HSLColor([this._hueFunction.evaluate(x), this._saturationFunction.evaluate(x), this._luminosityFunction.evaluate(x)]).toHSLString();
	}
});

/*
 * Allows you to combine multiple linear functions into a single linear function
 */
L.PiecewiseFunction = L.LinearFunction.extend({
	initialize: function (functions, options) {
		
		L.Util.setOptions(this, options);
		
		this._functions = functions;
		
		var startPoint;
		var endPoint;
		
		startPoint = functions[0].getBounds()[0];
		endPoint = functions[functions.length - 1].getBounds()[1];
		
		L.LinearFunction.prototype.initialize.call(this, startPoint, endPoint, {
			preProcess: this.options.preProcess,
			postProcess: this.options.postProcess
		});
	},
	
	_getFunction: function (x) {
		var bounds;
		var startPoint;
		var endPoint;
		var found = false;
		var currentFunction;
		
		for (var index = 0; index < this._functions.length; ++index) {
			currentFunction = this._functions[index];
			bounds = currentFunction.getBounds();
			
			startPoint = bounds[0];
			endPoint = bounds[1];
			
			if (x >= startPoint.x && x < endPoint.x) {
				found = true;
				break;
			}
		}
		
		// If found return the found function; otherwise return the last function
		return found ? currentFunction : this._functions[this._functions.length - 1];
	},
	
	evaluate: function (x) {
		var currentFunction;
		var y = null;
		
		if (this._preProcess) {
			x = this._preProcess(x);
		}
		
		currentFunction = this._getFunction(x);
		
		if (currentFunction) {
			y = currentFunction.evaluate(x);
			
			if (this._postProcess) {
				y = this._postProcess(y);
			}
		}
		
		return y;
	}
});

L.CustomColorFunction = L.PiecewiseFunction.extend({
	options: {
		interpolate: true
	},
	
	initialize: function (minX, maxX, colors, options) {
		var range = maxX - minX;
		var xRange = range/(colors.length - 1);
		var functions = [];
		var colorFunction;
		
		L.Util.setOptions(this, options);
		
		for (var i = 0; i < colors.length; ++i) {
			var next = Math.min(i + 1, colors.length - 1);
			colorFunction = this.options.interpolate ? new L.RGBColorBlendFunction(minX + xRange * i, minX + xRange * next, colors[i], colors[next]) : new L.RGBColorBlendFunction(minX + xRange * i, minX + xRange * next, colors[i], colors[i]);
			
			functions.push(colorFunction);	
		}
		
		L.PiecewiseFunction.prototype.initialize.call(this, functions);
	}
});


L.CategoryFunction = L.Class.extend({
	initialize: function (categoryMap, options) {
		
		L.Util.setOptions(this, options);
		
		this._categoryKeys = Object.keys(categoryMap);
		this._categoryMap = categoryMap;
		
		this._preProcess = this.options.preProcess;
		this._postProcess = this.options.postProcess;
	},
	
	evaluate: function (x) {
		var y;
		
		if (this._preProcess) {
			x = this._preProcess(x);
		}
		
		y = this._categoryMap[x];
		
		if (this._postProcess) {
			y = this._postProcess(y);
		}
		
		return y;
	},
	
	getCategories: function () {
		return this._categoryKeys;
	}
});