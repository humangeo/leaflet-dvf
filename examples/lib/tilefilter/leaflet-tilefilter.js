/*
 @preserve Leaflet Tile Filters, a JavaScript plugin for applying image filters to tile images
 (c) 2014, Scott Fairgrieve, HumanGeo
*/;L.Browser.littleEndian = (function() {
	var buffer = new ArrayBuffer(2);
	new DataView(buffer).setInt16(0, 256, true);
	return new Int16Array(buffer)[0] === 256;
})();

L.Color = L.Class.extend({
    statics: {
        ONE_SIXTH: 1/6,
        ONE_THIRD: 1/3,
        TWO_THIRDS: 2/3,
        HALF: 1/2
    },
    initialize: function(colorDef) {
        this._rgb = [ 0, 0, 0 ];
        this._hsl = [ 0, 1, 0.5 ];
        this._a = 1;
        if (colorDef) {
            this.parseColorDef(colorDef);
        }
    },
    parseColorDef: function(colorDef) {},
    rgbToHSL: function(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;

              case g:
                h = (b - r) / d + 2;
                break;

              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
        }
        return [ h, s, l ];
    },
    hue2rgb: function (p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < L.Color.ONE_SIXTH) return p + (q - p) * 6 * t;
        if (t < L.Color.HALF) return q;
        if (t < L.Color.TWO_THIRDS) return p + (q - p) * (L.Color.TWO_THIRDS - t) * 6;
        return p;
    },
    hslToRGB: function(h, s, l) {
        var r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = this.hue2rgb(p, q, h + L.Color.ONE_THIRD);
            g = this.hue2rgb(p, q, h);
            b = this.hue2rgb(p, q, h - L.Color.ONE_THIRD);
        }
        return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255) ];
    },
    setRGB: function(r, g, b) {
        this._rgb = [ r, g, b ];
        this._hsl = this.rgbToHSL(r, g, b);
        return this;
    },
    setHSL: function(h, s, l) {
        this._hsl = [ h, s, l ];
        this._rgb = this.hslToRGB(h, s, l);
        return this;
    },
    toHSL: function() {
        return this._hsl;
    },
    toHSLString: function() {
        var prefix = "hsl";
        if (this._a < 1) {
            prefix += "a";
        }
        return prefix + "(" + (this._hsl[0] * 360).toFixed(1) + "," + (this._hsl[1] * 100).toFixed(0) + "%," + (this._hsl[2] * 100).toFixed(0) + "%)";
    },
    toRGB: function() {
        return this._rgb;
    },
    toRGBString: function() {
        var rgbString;
        if (this._a < 1) {
            rgbString = "rgba(" + this._rgb[0].toFixed(0) + "," + this._rgb[1].toFixed(0) + "," + this._rgb[2].toFixed(0) + "," + this._a.toFixed(1) + ")";
        } else {
            var parts = [ this._rgb[0].toString(16), this._rgb[1].toString(16), this._rgb[2].toString(16) ];
            for (var i = 0, len = parts.length; i < len; ++i) {
                if (parts[i].length === 1) {
                    parts[i] = "0" + parts[i];
                }
            }
            rgbString = "#" + parts.join("");
        }
        return rgbString;
    },
    toInt: function () {
    	var value;
    	
    	if (L.Browser.littleEndian) {
    		value = (this._a << 24) | (this._rgb[2] << 16) | (this._rgb[1] << 8) | (this._rgb[0]);
    	}
    	else {
    		value = (this._rgb[0] << 24) | (this._rgb[1] << 16) | (this._rgb[2] << 8) | (this._a);
    	}
    	
    	return value;
    },
    r: function(newR) {
        if (!arguments.length) return this._rgb[0];
        return this.setRGB(newR, this._rgb[1], this._rgb[2]);
    },
    g: function(newG) {
        if (!arguments.length) return this._rgb[1];
        return this.setRGB(this._rgb[0], newG, this._rgb[2]);
    },
    b: function(newB) {
        if (!arguments.length) return this._rgb[2];
        return this.setRGB(this._rgb[0], this._rgb[1], newB);
    },
    h: function(newH) {
        if (!arguments.length) return this._hsl[0];
        return this.setHSL(newH, this._hsl[1], this._hsl[2]);
    },
    s: function(newS) {
        if (!arguments.length) return this._hsl[1];
        return this.setHSL(this._hsl[0], newS, this._hsl[2]);
    },
    l: function(newL) {
        if (!arguments.length) return this._hsl[2];
        return this.setHSL(this._hsl[0], this._hsl[1], newL);
    },
    a: function(newA) {
        if (!arguments.length) return this._a;
        this._a = newA;
        return this;
    }
});

L.Color32 = L.Class.extend({
    statics: {
        ONE_SIXTH: 1/6,
        ONE_THIRD: 1/3,
        TWO_THIRDS: 2/3,
        HALF: 1/2
    },
	initialize: function (color) {
		if (L.Browser.littleEndian) {
	    	this._r = (color >> 0) & 0xff;
	    	this._g = (color >> 8) & 0xff;
	    	this._b = (color >> 16) & 0xff;
	    	this._a = (color >> 24) & 0xff;
		}
		else {
			this._r = (color >> 24) & 0xff;
			this._g = (color >> 16) & 0xff;
			this._b = (color >> 8) & 0xff;
			this._a = (color >> 0) & 0xff;
		}
        this.rgb2hsl();
	},
	r: function (r) {
		if (!arguments.length) return this._r;
		this._r = Math.min(r, 255);
        this.rgb2hsl();
        return this;
	},
	g: function (g) {
		if (!arguments.length) return this._g;
		this._g = Math.min(g, 255);
        this.rgb2hsl();
        return this;
	},
	b: function (b) {
		if (!arguments.length) return this._b;
		this._b = Math.min(b, 255);
        this.rgb2hsl();
        return this;
	},
	a: function (a) {
		if (!arguments.length) return this._a;
		this._a = Math.min(a, 255);
        return this;
	},
    h: function(newH) {
        if (!arguments.length) return this._h;
        this._h = newH;
        this.hsl2rgb();
        return this;
    },
    s: function(newS) {
        if (!arguments.length) return this._s;
        this._s = newS;
        this.hsl2rgb();
        return this;
    },
    l: function(newL) {
        if (!arguments.length) return this._l;
        this._l = newL;
        this.hsl2rgb();
        return this;
    },
    hue2rgb: function (p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < L.Color32.ONE_SIXTH) return p + (q - p) * 6 * t;
        if (t < L.Color32.HALF) return q;
        if (t < L.Color32.TWO_THIRDS) return p + (q - p) * (L.Color32.TWO_THIRDS - t) * 6;
        return p;
    },
    rgb2hsl: function () {
        var r = this._r,
            g = this._g,
            b = this._b;

        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;

                case g:
                    h = (b - r) / d + 2;
                    break;

                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        this._h = h;
        this._s = s;
        this._l = l;
    },
    hsl2rgb: function () {
        var r, g, b;
        if (this._s === 0) {
            r = g = b = this._l;
        } else {
            var q = this._l < 0.5 ? this._l * (1 + this._s) : this._l + this._s - this._l * this._s;
            var p = 2 * this._l - q;
            r = this.hue2rgb(p, q, this._h + L.Color32.ONE_THIRD);
            g = this.hue2rgb(p, q, this._h);
            b = this.hue2rgb(p, q, this._h - L.Color32.ONE_THIRD);
        }
        this._r = Math.floor(r * 255);
        this._g = Math.floor(g * 255);
        this._b = Math.floor(b * 255);
    },
	toInt: function () {
    	var value;
    	
    	if (L.Browser.littleEndian) {
    		value = (this._a << 24) | (this._b << 16) | (this._g << 8) | (this._r);
    	}
    	else {
    		value = (this._r << 24) | (this._g << 16) | (this._b << 8) | (this._a);
    	}
    	
    	return value;
    },
    toColor: function () {
    	return new L.RGBColor([this._r, this._g, this._b, this._a]);
    }
});

L.RGBColor = L.Color.extend({
    initialize: function(colorDef) {
        L.Color.prototype.initialize.call(this, colorDef);
    },
    parseColorDef: function(colorDef) {
    	var isInt = typeof(colorDef) === 'number';
        var isArray = colorDef instanceof Array;
        var isHex = !isInt && !isArray ? colorDef.indexOf("#") === 0 : false;
        var parts = [];
        var r, g, b, a;
        if (isInt) {
        	
        } else if (isArray) {
            r = Math.floor(colorDef[0]);
            g = Math.floor(colorDef[1]);
            b = Math.floor(colorDef[2]);
            a = colorDef.length === 4 ? colorDef[3] : 1;
        } else if (isHex) {
            colorDef = colorDef.replace("#", "");
            r = parseInt(colorDef.substring(0, 2), 16);
            g = parseInt(colorDef.substring(2, 4), 16);
            b = parseInt(colorDef.substring(4, 6), 16);
            a = colorDef.length === 8 ? parseInt(colorDef.substring(6, 8), 16) : 1;
        } else {
            parts = colorDef.replace("rgb", "").replace("a", "").replace(/\s+/g, "").replace("(", "").replace(")", "").split(",");
            r = parseInt(parts[0]);
            g = parseInt(parts[1]);
            b = parseInt(parts[2]);
            a = parts.length === 4 ? parseInt(parts[3]) : 1;
        }
        this.setRGB(r, g, b);
        this._a = a;
    }
});

L.rgbColor = function(colorDef) {
    return new L.RGBColor(colorDef);
};

L.ImageFilter = L.Class.extend({
    initialize: function(options) {
        L.Util.setOptions(this, options);
    },
    render: function(element, image, ctx) {
        return this;
    }
});

L.CanvasFilter = L.ImageFilter.extend({	
    render: function(element, image, ctx) {
    	// image is either a canvas or an image
    	// if it's a canvas, then load the image and put it in the canvas
    	// if it's an image, then the image is already loaded, so just stick in the canvas
    	// manipulate by applying filters
        var canvas;
        var m = L.Browser.retina ? 2 : 1;
        var size = image.options.tileSize * m; //Math.min(image._layer.options.tileSize * m, 256);
        var hasContext = true;
        
        if (!ctx) {//image.canvasContext) {
        	hasContext = false;
            canvas = document.createElement("canvas");
            canvas.width = canvas.height = size;
            ctx = canvas.getContext("2d");//image.canvasContext = canvas.getContext("2d");
        }

        //var ctx = image.canvasContext;
        if (ctx) {
            var filter = this.options.channelFilter || function(imageData) {
                return imageData;
            };
            ctx.drawImage(image, 0, 0);
            var imgd = ctx.getImageData(0, 0, size, size);
            imgd = filter.call(image, imgd, ctx);
            ctx.putImageData(imgd, 0, 0);
            
            if (!hasContext) {
	            image.onload = null;
	            image.removeAttribute("crossorigin");
	            if (image.options.canvasFilter) {
	                image.options.canvasFilter.call(this, image, ctx);
	            } else {
	                image.src = canvas.toDataURL();
	            }
            }
        }
        return this;
    }
});

L.ChannelFilters = {};

L.ConvolveFilter = L.Class.extend({
	options: {
        weights: [0,-1, 0,
                  -1,5,-1,
                  0,-1, 0],
        opaque: false
    },
    initialize: function(options) {
        L.Util.setOptions(this, options);
    },
    render: function(imageData, ctx) {
        var pixels = imageData.data;
        var weights = this.options.weights;
        var side = Math.round(Math.sqrt(weights.length));
        var halfSide = Math.floor(side/2);
        var alphaFac = this.options.opaque ? 1 : 0;
        var sh = imageData.height;
        var sw = imageData.width;
        var w = sw;
        var h = sh;
        var output = ctx.createImageData(w, h);
        var dst = output.data;
        for (var y=0; y<h; y++) {
          for (var x=0; x<w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y*w+x)*4;
            var r=0, g=0, b=0, a=0;
            for (var cy=0; cy<side; cy++) {
              for (var cx=0; cx<side; cx++) {
                var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
                var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
                var srcOff = (scy*sw+scx)*4;
                var wt = weights[cy*side+cx];
                r += pixels[srcOff] * wt;
                g += pixels[srcOff+1] * wt;
                b += pixels[srcOff+2] * wt;
                a += pixels[srcOff+3] * wt;
              }
            }
            dst[dstOff] = r;
            dst[dstOff+1] = g;
            dst[dstOff+2] = b;
            dst[dstOff+3] = a + alphaFac*(255-a);
          }
        }

        return output;
        
    }
});

L.AlphaChannelFilter = L.Class.extend({
    statics: {
        RENDER_MODE_CHANNELS: function(imageData) {
            var pixels = imageData.data;
            for (var i = 0, n = pixels.length; i < n; i += 4) {
                var channels = this.updateChannels([pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]]);
                for (var j = 0; j < 4; ++j) {
                    pixels[i + j] = channels[j];
                }
            }
            return imageData;
        },
        RENDER_MODE_PIXEL: function (imageData) {
            var pixels = new Uint32Array(imageData.data.buffer);
            for (var i = 0, n = pixels.length; i < n; ++i) {
                pixels[i] = this.updatePixel(pixels[i]);
            }
            return imageData;
        }
    }
});

L.AlphaChannelFilter = L.AlphaChannelFilter.extend({
    options: {
        opacity: 255,
        renderMode: L.AlphaChannelFilter.RENDER_MODE_PIXEL
    },
    initialize: function(options) {
        L.Util.setOptions(this, options);
    },
    setOpacity: function(opacity) {
        this.options.opacity = opacity;
    },
    updateChannels: function (channels) {
        channels[3] = this.options.opacity;
        return channels;
    },
    updatePixel: function (pixel) {
    	var color = new L.Color32(pixel);
    	
    	color.a(this.options.opacity);
    	
    	return color.toInt();
    },
    render: function (imageData) {
        return this.options.renderMode.call(this, imageData);
    }
});

L.CanvasChannelFilter = L.AlphaChannelFilter.extend({
    options: {
        filters: []
    },
    setFilters: function(filters) {
        this.options.filters = filters;
        return this;
    },
    clearFilters: function() {
        this.options.filters = [];
        return this;
    },
    updateChannels: function(channels) {
    	channels = L.AlphaChannelFilter.prototype.updateChannels.call(this, channels);
        var filters = this.options.filters;
        for (var i = 0, len = filters.length; i < len; ++i) {
            channels = filters[i].updateChannels(channels);
        }
        return channels;
    },
    updatePixel: function (pixel) {
    	var filters = this.options.filters;
        for (var i = 0, len = filters.length; i < len; ++i) {
            pixel = filters[i].updatePixel(pixel);
        }
        return pixel;
    }
});

L.ChannelFilter = L.Class.extend({
	initialize: function (options) {
		L.Util.setOptions(this, options);
        this._keys = ['r', 'g', 'b', 'a'];
	},
	
	updateChannels: function (channels) {
		return channels;
	},
	
	updatePixel: function (pixel) {
		return pixel;
	}
});

L.ChannelFilters.Grayscale = L.ChannelFilter.extend({
    options: {
        channelWeights: [ 3, 4, 1 ]
    },
    initialize: function(options) {
        L.ChannelFilter.prototype.initialize.call(this, options);
        this.sumWeights();
    },
    sumWeights: function() {
        var sum = 0;
        for (var i = 0; i < 3; ++i) {
            sum += this.options.channelWeights[i];
        }
        this._summedWeight = sum;
    },
    updateChannels: function(channels) {
        var channelWeights = this.options.channelWeights;
        channels[0] = channels[1] = channels[2] = (channelWeights[0] * channels[0] + channelWeights[1] * channels[1] + channelWeights[2] * channels[2]) / this._summedWeight;
        return channels;
    },
    updatePixel: function (pixel) {
    	var color = new L.Color32(pixel);
    	var channelWeights = this.options.channelWeights;
    	var avg = (channelWeights[0] * color.r() + channelWeights[1] * color.g() + channelWeights[2] * color.b()) / this._summedWeight;
    	
    	color.r(avg).g(avg).b(avg);

        return color.toInt();
    }
});

L.ChannelFilters.Threshold = L.ChannelFilters.Grayscale.extend({
    options: {
        channelWeights: [ 3, 4, 1 ],
        thresholds: [ 128, 128, 128, 128 ],
        trueValues: [ 255, 255, 255, 255 ],
        falseValues: [ 0, 0, 0, 255 ]
    },
    updateChannels: function(channels) {
    	channels = L.ChannelFilters.Grayscale.prototype.updateChannels.call(this, channels);
        for (var i = 0; i < 4; ++i) {
            channels[i] = channels[i] >= this.options.thresholds[i] ? this.options.trueValues[i] : this.options.falseValues[i];
        }
        return channels;
    },
    updatePixel: function (pixel) {
    	var color = new L.Color32(pixel);

        for (var i = 0, len = this._keys.length; i < len; ++i) {
            color[this._keys[i]](color[this._keys[i]]() >= this.options.thresholds[i] ? this.options.trueValues[i] : this.options.falseValues[i]);
        }

    	return color.toInt();
    }
});

L.ChannelFilters.Contrast = L.ChannelFilter.extend({
    options: {
        contrast: 0,
        factor: function(contrast) {
            return 255 * (255 + contrast) / (255 * (255 - contrast));
        }
    },
    initialize: function(imageData, options) {
        L.ChannelFilter.prototype.initialize.call(this, options);
        this._factor = this.options.factor.call(this, this.options.contrast);
    },
    updateChannels: function(channels) {
        for (var i = 0; i < 3; ++i) {
            channels[i] = this._factor * (channels[i] - 128) + 128;
        }
        return channels;
    },
    updatePixel: function (pixel) {
    	var color = new L.Color32(pixel);

        for (var i = 0; i < 3; ++i) {
            color[this._keys[i]](this._factor * (color[this._keys[i]]() - 128) + 128);
        }
    	
    	return color.toInt();
    }
});

L.ChannelFilters.Invert = L.ChannelFilter.extend({
    updateChannels: function(channels) {
        for (var i = 0; i < 3; ++i) {
            channels[i] = 255 - channels[i];
        }
        return channels;
    },
    updatePixel: function (pixel) {
    	var color = new L.Color32(pixel);

        for (var i = 0; i < 3; ++i) {
            color[this._keys[i]](255 - color[this._keys[i]]());
        }

    	return color.toInt();
    }
});

L.ChannelFilters.ChannelSwap = L.ChannelFilter.extend({
    options: {
        positions: [ 0, 1 ]
    },
    updateChannels: function(channels) {
        var tmp = channels[this.options.positions[0]];
        channels[this.options.positions[0]] = channels[this.options.positions[1]];
        channels[this.options.positions[1]] = tmp;
        return channels;
    },
    updatePixel: function (pixel) {
        var color = new L.Color32(pixel);
        var tmp = color[this._keys[this.options.positions[0]]]();
        color[this._keys[this.options.positions[0]]](color[this._keys[this.options.positions[1]]]());
        color[this._keys[this.options.positions[1]]](tmp);
        return color.toInt();
    }
});

L.ChannelFilters.Matrix = L.ChannelFilter.extend({
    options: {
        matrix: [ 0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131 ]
    },
    initialize: function (options) {
        L.ChannelFilter.prototype.initialize.call(this, options);
    },
    updateChannels: function(channels) {
        var matrix = this.options.matrix;
        var r = channels[0];
        var g = channels[1];
        var b = channels[2];
        for (var i = 0; i < 3; ++i) {
            channels[i] = r * matrix[3 * i] + g * matrix[3 * i + 1] + b * matrix[3 * i + 2];
        }
        return channels;
    },
    updatePixel: function (pixel) {
        var matrix = this.options.matrix;
        var color = new L.Color32(pixel);
        var r = color.r();
        var g = color.g();
        var b = color.b();

        for (var i = 0; i < 3; ++i) {
            color[this._keys[i]](Math.floor(r * matrix[3 * i] + g * matrix[3 * i + 1] + b * matrix[3 * i + 2]));
        }

        return color.toInt();
    }
});

L.ChannelFilters.Sepia = L.ChannelFilters.Matrix.extend({
    options: {
        matrix: [ 0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131 ]
    }
});

L.ChannelFilters.Adjust = L.ChannelFilter.extend({
    options: {
        adjustments: [ 20, 20, 20 ]
    },
    updateChannels: function(channels) {
        for (var i = 0; i < 3; ++i) {
            channels[i] = Math.min(Math.max(channels[i] + this.options.adjustments[i], 0), 255);
        }
        return channels;
    },
    updatePixel: function (pixel) {
        var color = new L.Color32(pixel);
        for (var i = 0, len = this._keys.length; i < len; ++i) {
            color[this._keys[i]](Math.min(Math.max(color[this._keys[i]]() + this.options.adjustments[i], 0), 255));
        }
        return color.toInt();
    }
});

L.ChannelFilters.HSLAdjust = L.ChannelFilter.extend({
    options: {
        adjustments: [ 30, 0, 0 ]
    },
    updateChannels: function(channels) {
        var color = new L.RGBColor([ channels[0], channels[1], channels[2], channels[3] ]);
        color.setHSL((color._hsl[0] * 360 + this.options.adjustments[0]) / 360, color._hsl[1] + this.options.adjustments[1], color._hsl[2] + this.options.adjustments[2]);
        for (var i = 0; i < 3; ++i) {
            channels[i] = color._rgb[i];
        }
        if (this.options.adjustments.length > 3) {
            channels[3] += this.options.adjustments[3];
        }
        color = null;
        return channels;
    },
    updatePixel: function (pixel) {
        var color = new L.Color32(pixel);

        color.h((color.h() * 360 + this.options.adjustments[0]) / 360);
        color.s(color.s() + this.options.adjustments[1]);
        color.l(color.l() + this.options.adjustments[2]);

        if (this.options.adjustments.length > 3) {
            color.a(color.a() + this.options.adjustments[3]);
        }

        return color.toInt();
    }
});

L.ChannelFilters.Colorize = L.ChannelFilter.extend({
    options: {
        channel: 0,
        values: [ 0, 0 ]
    },
    updateChannels: function(channels) {
        var channelIndices = [ 0, 1, 2 ];
        channelIndices.splice(this.options.channel, 1);
        var r = channels[0];
        var g = channels[1];
        var b = channels[2];
        channels[this.options.channel] = (r + g + b) / 3;
        channels[channelIndices[0]] = this.options.values[0];
        channels[channelIndices[1]] = this.options.values[1];
        return channels;
    },
    updatePixel: function(pixel) {
        var channelIndices = [ 0, 1, 2 ];
        channelIndices.splice(this.options.channel, 1);
        var color = new L.Color32(pixel);

        color[this._keys[this.options.channel]]((color.r() + color.g() + color.b())/3);
        color[this._keys[channelIndices[0]]](this.options.values[0]);
        color[this._keys[channelIndices[1]]](this.options.values[1]);
        return color.toInt();
    }
});

L.ChannelFilters.MatchAndTransform = L.ChannelFilter.extend({
	options: {
		match: function (color) {
			return true;
		},
		matching: function (color) {
			return color;
		},
		nomatching: function (color) {
			return color; //e.g. color.s(0); will make everything that doesn't match gray
		}
	},
	updateChannels: function(channels) {
		var color = new L.RGBColor([ channels[0], channels[1], channels[2], channels[3] ]);

		var isMatch = this.options.match.call(this, color);
		
		if (isMatch) {
			if (this.options.matching) {
				color = this.options.matching.call(this, color);
			}
		}
		else {
			if (this.options.nonmatching) {
				color = this.options.nonmatching.call(this, color);
			}
		}
        
        for (var i = 0; i < 3; ++i) {
            channels[i] = color._rgb[i];
        }
        
        channels[3] = color._a * 255;
        
        color = null;
        return channels;
	},
    updatePixel: function (pixel) {
        var color = new L.Color32(pixel);
        var rgbColor = color.toColor();

        var isMatch = this.options.match.call(this, rgbColor);

        if (isMatch) {
            if (this.options.matching) {
                rgbColor = this.options.matching.call(this, rgbColor);
            }
        }
        else {
            if (this.options.nonmatching) {
                rgbColor = this.options.nonmatching.call(this, rgbColor);
            }
        }

        for (var i = 0; i < 3; ++i) {
            color[this._keys[i]](rgbColor._rgb[i]);
        }

        color.a(rgbColor._a * 255);

        return color.toInt();
    }
});

L.ChannelFilters.ColorSwap = L.ChannelFilters.MatchAndTransform.extend({
	options: {
		input: {
			h: [150, 200],
			s: [0, 1],
			l: [0, 1]
		},
		output: {
			h: 0
		},
		match: function (color) {
			var matches = false;
			
			for (var key in this.options.input) {
				var range = this.options.input[key];
				var value = color[key].call(color);
				
				if (key === 'h') {
					value = value * 360;
				}
				
				matches = (value >= range[0]) && (value <= range[1]);
				
				if (!matches) {
					break;
				}
			}
			
			return matches;
		},
		matching: function (color) {
			for (var key in this.options.output) {
				var value = this.options.output[key];
				
				if (key === 'h') {
					value = value/360;
				}
				
				color[key].call(color, value);
			}
			
			return color;
		},
		nonmatching: function (color) {
			return color; //e.g. color.s(0); will make everything that doesn't match gray
		}
	}
});

L.CSSFilter = L.ImageFilter.extend({
    statics: {
        prefixes: [ "-webkit-", "-moz-", "-ms-", "-o-", "" ]
    },
    render: function(element, image, ctx) {
        for (var i = 0, len = L.CSSFilter.prefixes.length; i < len; ++i) {
            element.style.cssText += " " + L.CSSFilter.prefixes[i] + "filter: " + this.options.filters.join(" ") + ";";
        }
    }
});

L.CombinedFilter = L.ImageFilter.extend({
    setCanvasFilter: function(filter) {
        this.options.canvasFilter = filter;
        return this;
    },
    setCSSFilter: function(filter) {
        this.options.cssFilter = filter;
        return this;
    },
    renderCanvas: function (element, image, ctx) {
    	if (this.options.canvasFilter) {
    		this.options.canvasFilter.call(element, element, image, ctx);
    	}
    	return this;
    },
    renderCSS: function (element, image, ctx) {
    	if (this.options.cssFilter) {
            this.options.cssFilter.call(element, element, image, ctx);
        }
    	return this;
    },
    render: function(element, image, ctx) {
		this.renderCanvas(element, image, ctx);
		this.renderCSS(element, image, ctx);
		return this;
    }
});

L.ImageFilters = {};

L.ImageFilters.GenerateCSSFilter = function(filters) {
    return function(element, image, ctx) {
        return new L.CSSFilter({
            filters: filters
        }).render(element, image, ctx);
    };
};

L.ImageFilters.GenerateChannelFilter = function (filters) {
	return function (imageData) {
		return new L.CanvasChannelFilter({
			filters: filters
		}).render(imageData);
	};
};

L.ImageFilters.GenerateCanvasFilter = function (filters) {
	return function (element, image, ctx) {
		return new L.CanvasFilter({
			channelFilter: L.ImageFilters.GenerateChannelFilter(filters)
		}).render(element, image, ctx);
	};
};

L.ImageFilters.Presets = {
    CSS: {
        None: L.ImageFilters.GenerateCSSFilter([ "none" ]),
        Brightness200: L.ImageFilters.GenerateCSSFilter([ "brightness(200%)" ]),
        Brightness180: L.ImageFilters.GenerateCSSFilter([ "brightness(180%)" ]),
        Brightness160: L.ImageFilters.GenerateCSSFilter([ "brightness(160%)" ]),
        Brightness140: L.ImageFilters.GenerateCSSFilter([ "brightness(140%)" ]),
        Brightness120: L.ImageFilters.GenerateCSSFilter([ "brightness(120%)" ]),
        Brightness100: L.ImageFilters.GenerateCSSFilter([ "brightness(100%)" ]),
        Brightness80: L.ImageFilters.GenerateCSSFilter([ "brightness(80%)" ]),
        Brightness60: L.ImageFilters.GenerateCSSFilter([ "brightness(60%)" ]),
        Brightness40: L.ImageFilters.GenerateCSSFilter([ "brightness(40%)" ]),
        Brightness20: L.ImageFilters.GenerateCSSFilter([ "brightness(20%)" ]),
        Contrast200: L.ImageFilters.GenerateCSSFilter([ "contrast(200%)" ]),
        Contrast180: L.ImageFilters.GenerateCSSFilter([ "contrast(180%)" ]),
        Contrast160: L.ImageFilters.GenerateCSSFilter([ "contrast(160%)" ]),
        Contrast140: L.ImageFilters.GenerateCSSFilter([ "contrast(140%)" ]),
        Contrast120: L.ImageFilters.GenerateCSSFilter([ "contrast(120%)" ]),
        Contrast100: L.ImageFilters.GenerateCSSFilter([ "contrast(100%)" ]),
        Contrast80: L.ImageFilters.GenerateCSSFilter([ "contrast(80%)" ]),
        Contrast60: L.ImageFilters.GenerateCSSFilter([ "contrast(60%)" ]),
        Contrast40: L.ImageFilters.GenerateCSSFilter([ "contrast(40%)" ]),
        Contrast20: L.ImageFilters.GenerateCSSFilter([ "contrast(20%)" ]),
        Sepia100: L.ImageFilters.GenerateCSSFilter([ "sepia(100%)" ]),
        Sepia80: L.ImageFilters.GenerateCSSFilter([ "sepia(80%)" ]),
        Sepia60: L.ImageFilters.GenerateCSSFilter([ "sepia(60%)" ]),
        Sepia40: L.ImageFilters.GenerateCSSFilter([ "sepia(40%)" ]),
        Sepia20: L.ImageFilters.GenerateCSSFilter([ "sepia(20%)" ]),
        Grayscale: L.ImageFilters.GenerateCSSFilter([ "saturate(0%)" ]),
        Saturate200: L.ImageFilters.GenerateCSSFilter([ "saturate(200%)" ]),
        Saturate300: L.ImageFilters.GenerateCSSFilter([ "saturate(300%)" ]),
        Saturate400: L.ImageFilters.GenerateCSSFilter([ "saturate(400%)" ]),
        Saturate500: L.ImageFilters.GenerateCSSFilter([ "saturate(500%)" ]),
        Saturate600: L.ImageFilters.GenerateCSSFilter([ "saturate(600%)" ]),
        Saturate700: L.ImageFilters.GenerateCSSFilter([ "saturate(700%)" ]),
        Invert100: L.ImageFilters.GenerateCSSFilter([ "invert(100%)" ]),
        Invert80: L.ImageFilters.GenerateCSSFilter([ "invert(80%)" ]),
        Invert60: L.ImageFilters.GenerateCSSFilter([ "invert(60%)" ]),
        Invert40: L.ImageFilters.GenerateCSSFilter([ "invert(40%)" ]),
        Invert20: L.ImageFilters.GenerateCSSFilter([ "invert(20%)" ]),
        HueRotate30: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(30deg)" ]),
        HueRotate60: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(60deg)" ]),
        HueRotate90: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(90deg)" ]),
        HueRotate120: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(120deg)" ]),
        HueRotate150: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(150deg)" ]),
        HueRotate180: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(180deg)" ]),
        HueRotate210: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(210deg)" ]),
        HueRotate240: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(240deg)" ]),
        HueRotate270: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(270deg)" ]),
        HueRotate300: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(300deg)" ]),
        HueRotate330: L.ImageFilters.GenerateCSSFilter([ "hue-rotate(330deg)" ])
    },
    CanvasChannel: {
        None: L.ImageFilters.GenerateCanvasFilter([]),
        Grayscale1: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Grayscale()]),
        Grayscale2: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Grayscale({
        	weights: [1, 1, 1]
        })]),
        Grayscale3: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Grayscale({
        	weights: [1, 2, 3]
        })]),
        Luminance: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Grayscale({
        	weights: [0.2126, 0.7152, 0.0722]
        })]),
        HueRotate30: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [30, 0, 0]
		})]),
        HueRotate60: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [60, 0, 0]
		})]),
        HueRotate90: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [90, 0, 0]
		})]),
        HueRotate120: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [120, 0, 0]
		})]),
        HueRotate150: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [150, 0, 0]
		})]),
        HueRotate180: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [180, 0, 0]
		})]),
        HueRotate210: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [210, 0, 0]
		})]),
        HueRotate240: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [240, 0, 0]
		})]),
        HueRotate270: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [270, 0, 0]
		})]),
        HueRotate300: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [300, 0, 0]
		})]),
        HueRotate330: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.HSLAdjust({
			adjustments: [330, 0, 0]
		})]),
        Sepia1: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Sepia()]),
        Invert: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Invert()]),
        ColorizeRed: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Colorize({
			channel: 0,
			values: [0, 0]
		})]),
        ColorizeGreen: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Colorize({
			channel: 1,
			values: [0, 0]
		})]),
        ColorizeBlue: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Colorize({
			channel: 2,
			values: [0, 0]
		})]),
		Convolve: function (image, ctx) { 
			return new L.CanvasFilter({
				channelFilter: function (imageData, ctx) {
					return new L.ConvolveFilter({}).render(imageData, ctx);
				}
			}).render(this, image, ctx);
		},
		Threshold: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.Threshold()]),
		WaterTransparent: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.ColorSwap({
			input: {
				h: [150, 210]
			},
			output: {
				h: 270,
				a: 0.5
			},
			nonmatching: function (color) {
				color.s(0);
				return color;
			}
		})]),
		WhiteToNeonBlue: L.ImageFilters.GenerateCanvasFilter([new L.ChannelFilters.ColorSwap({
			input: {
				l: [1, 1]
			},
			output: {
				r: 0,
				g: 255,
				b: 255
			}
		})])
    }
};

L.ImageFilterFunctions = {
    __loadTile: L.TileLayer.prototype._loadTile,
    __tileOnLoad: L.TileLayer.prototype._tileOnLoad,
    __update: L.TileLayer.prototype._update,
    setFilter: function(filter) {
        this.options.filter = filter;
        this.redraw();
        return this;
    },
    setCSSFilter: function (filter) {
        this._cssChanged = true;
        this.options.cssFilter = filter;
        this._applyCSSFilter();
        return this;
    },
    _applyCSSFilter: function () {
        if (this._container && this._cssChanged) {
            this._container.cssText = "";

            if (this.options.cssFilter) {
                this.options.cssFilter.call(this, this._container);
            }

            this._cssChanged = false;
        }
    },
    _update: function () {
        this.__update.call(this);

        this._applyCSSFilter();
    },
    clearFilter: function() {
        this.options.filter = null;
        return this.redraw();
    },
    clearCSSFilter: function () {
        this.setCSSFilter(null);
    },
    clearAllFilters: function () {
        this.options.filter = null;
        this.options.cssFilter = null;
        this._cssChanged = true;
        this.redraw();
    },
    _tileOnLoad: function(done, tile) {
        var filter = this.options.filter;
        tile.options = this.options;
        if (filter) {
            filter.call(this, tile, tile);
        }
        this.__tileOnLoad.call(this, done, tile);
    }
};

L.TileLayer.include(L.ImageFilterFunctions);
L.TileLayer.addInitHook(function () {
    this.options.crossOrigin = true;
});

/**
 * Displays TMS tile images using canvas rather than image elements
 */
L.TileLayer.CanvasTMS = L.TileLayer.extend({
	options: {
		tileSize: 256,
        reuseTiles: true
	},
	initialize: function (url, options) {
		L.TileLayer.prototype.initialize.call(this, url, options);
	},
    _applyFilter: function (tile, img, ctx, done) {
        setTimeout(this._async(tile, img, ctx, done), 0);
    },
    _async: function (tile, img, ctx, done) {
        var me = this;
        return function () {
            try {
                var filter = tile.options.filter || L.ImageFilters.Presets.CanvasChannel.None;

                img._layer = tile;
                filter.call(tile, tile, img, ctx);
            }
            finally {
                done();
            }
        };
    },
    createTile: function (coords, done) {
        var tile = L.DomUtil.create('canvas', 'leaflet-tile');
        tile.width = tile.height = this.options.tileSize;
        tile.onselectstart = tile.onmousemove = L.Util.falseFn;

        var me = this;

        tile.options = this.options;
        tile._layer  = this;

        //this._adjustTilePoint(tilePoint);

        var ctx = tile.getContext('2d');
        var scale = 1;

        if (L.Browser.retina && this.options.detectRetina) {
            scale = 2;
            tile.width = tile.height = tile.options.tileSize * scale;
            tile.style.width = tile.style.height = tile.options.tileSize + 'px';
        }

        if (!tile._img) {
            var img = new Image();

            img.onload = function () {
                tile._img = img;
                tile._img.options = me.options;
                me._applyFilter(tile, img, ctx, done);
            };

            img.crossOrigin = 'anonymous';
            img.src = me.getTileUrl(coords);
        }
        else {
            tile._img.options = me.options;
            me._applyFilter(tile, tile._img, ctx, done);
        }

        return tile;
    }
});