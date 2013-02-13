var L = L || {};

/*

 * Class for interpolating values along a line using a linear equation
 */
L.LinearFunction = L.Class.extend({
	initialize: function (minPoint, maxPoint, options) {

		L.Util.setOptions(this, options);
		
		this.setRange(minPoint, maxPoint);
		
		this._preProcess = this.options.preProcess;
		this._postProcess = this.options.postProcess;
	},
	
	_calculateParameters: function (minPoint, maxPoint) {
		this._slope = (maxPoint.y - minPoint.y) / (maxPoint.x - minPoint.x);
		this._b = minPoint.y - this._slope * minPoint.x;
	},
	
	getBounds: function () {
		var minX = Math.min(this._minPoint.x, this._maxPoint.x);
		var maxX = Math.max(this._minPoint.x, this._maxPoint.x);
		var minY = Math.min(this._minPoint.y, this._maxPoint.y);
		var maxY = Math.max(this._minPoint.y, this._maxPoint.y);
		
		return [new L.Point(minX, minY), new L.Point(maxX, maxY)];
	},
	
	setRange: function (minPoint, maxPoint) {
		this._minPoint = minPoint;
		this._maxPoint = maxPoint;
		
		if (maxPoint.x === minPoint.x) {
			maxPoint.x = maxPoint.x + 0.0000001;
		}
		
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
	}
});

L.RGBRedFunction = L.LinearFunction.extend({
	
	options: {
		outputGreen: 0,
		outputBlue: 0
	},
	
	initialize: function (minPoint, maxPoint, options) {

		L.Util.setOptions(this, options);
		
		var outputGreen = this.options.outputGreen;
		var outputBlue = this.options.outputBlue;
		
		var postProcess = function (y) {
			y = y.toFixed(0);
			
			var parts = [y, outputGreen, outputBlue];
			
			return 'rgb(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
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

		L.Util.setOptions(this, options);
		
		var outputRed = this.options.outputRed;
		var outputGreen = this.options.outputGreen;
		
		var postProcess = function (y) {
			y = y.toFixed(0);
			
			var parts = [outputRed, outputGreen, y];
			
			return 'rgb(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
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
		
		L.Util.setOptions(this, options);
		
		var outputRed = this.options.outputRed;
		var outputBlue = this.options.outputBlue;
		
		var postProcess = function (y) {
			y = y.toFixed(0);
			
			var parts = [outputRed, y, outputBlue];
			
			return 'rgb(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
	}
});

/*
 * 
 */
L.RGBColorBlendFunction = L.LinearFunction.extend({
	initialize: function (minX, maxX, rgbMinColor, rgbMaxColor) {
		var red1 = rgbMinColor[0];
		var red2 = rgbMaxColor[0];
		var green1 = rgbMinColor[1];
		var green2 = rgbMaxColor[1];
		var blue1 = rgbMinColor[2];
		var blue2 = rgbMaxColor[2];
		
		var postProcess = function (y) {
			return y.toFixed(0);
		}
		
		this._minX = minX;
		this._maxX = maxX;
		this._redFunction = new L.LinearFunction(new L.Point(minX, red1), new L.Point(maxX, red2), {
			postProcess: postProcess
		});
		this._greenFunction = new L.LinearFunction(new L.Point(minX, green1), new L.Point(maxX, green2),{
			postProcess: postProcess
		});
		this._blueFunction = new L.LinearFunction(new L.Point(minX, blue1), new L.Point(maxX, blue2), {
			postProcess: postProcess
		});
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
		return 'rgb(' + [this._redFunction.evaluate(x), this._greenFunction.evaluate(x), this._blueFunction.evaluate(x)].join(',') + ')';
	}
});

/*
 * Class for varying the hue linearly and producing an HSL color value
 */
L.HSLHueFunction = L.LinearFunction.extend({
	
	options: {
		outputSaturation: '100%',
		outputLuminosity: '50%'
	},
	
	initialize: function (minPoint, maxPoint, options) {
		
		L.Util.setOptions(this, options);
		
		var outputSaturation = this.options.outputSaturation;
		var outputLuminosity = this.options.outputLuminosity;
		
		var postProcess = function (y) {
			var parts = [y, outputSaturation, outputLuminosity];
			
			return 'hsl(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
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
		
		L.Util.setOptions(this, options);
		
		var outputHue = this.options.outputHue;
		var outputLuminosity = this.options.outputLuminosity;
		
		var postProcess = function (y) {
			var parts = [outputHue, (y * 100).toFixed(2) + '%', outputLuminosity];
			
			return 'hsl(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
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
		
		L.Util.setOptions(this, options);
		
		var outputHue = this.options.outputHue;
		var outputSaturation = this.options.outputSaturation;
		
		var postProcess = function (y) {
			var parts = [outputHue, outputSaturation, (y * 100).toFixed(2) + '%'];
			
			return 'hsl(' + parts.join(',') + ')'; 
		};
		
		L.LinearFunction.prototype.initialize.call(this, minPoint, maxPoint, {
			preProcess: this.options.preProcess,
			postProcess: postProcess
		});
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
		
		for (var index in this._functions) {
			currentFunction = this._functions[index];
			bounds = currentFunction.getBounds();
			
			startPoint = bounds[0];
			endPoint = bounds[1];
			
			if (x >= startPoint.x && x < endPoint.x) {
				found = true;
				break;
			}
		}
		
		return found ? currentFunction : null;
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