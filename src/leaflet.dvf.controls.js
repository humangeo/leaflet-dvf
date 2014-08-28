L.Control.Legend = L.Control.extend({
	options: {
		position: 'bottomright',
		autoAdd: true
	},

	onAdd: function (map) {
		var className = 'leaflet-control-legend',
		    container = L.DomUtil.create('div', className);

		var self = this;

		if (this.options.autoAdd) {
			map.on('layeradd', function (e) {
				var layer = e.layer;

				self.addLayer(layer);
			});

			map.on('layerremove', function (e) {
				var layer = e.layer;

				self.removeLayer(layer);
			});
		}

		this.toggleSize = L.bind(this.toggleSize, this);

		L.DomEvent
		.addListener(container, 'mouseover', this.toggleSize)
		.addListener(container, 'mouseout', this.toggleSize)
		.addListener(container, 'touchstart', this.toggleSize)
		.addListener(container, 'touchend', this.toggleSize)
		.addListener(container, 'click', L.DomEvent.stopPropagation)
		.addListener(container, 'click', L.DomEvent.preventDefault);

		return container;
	},

	clear: function () {
		this._container.innerHTML = '';
	},

	toggleSize: function () {
		if (L.DomUtil.hasClass(this._container, 'larger')) {
			L.DomUtil.removeClass(this._container, 'larger');
		}
		else {
			L.DomUtil.addClass(this._container, 'larger');
		}
	},

	redrawLayer: function (layer) {
		this.removeLayer(layer);
		this.addLayer(layer);
	},

	addLayer: function (layer) {
		var id = L.Util.stamp(layer);
		var me = this;

		if (layer.getLegend) {
			this.addLegend(id, layer.getLegend());

			layer.on('legendChanged', function () {
				me.redrawLayer(layer);
			});
		}
	},

	removeLayer: function (layer) {
		var id = L.Util.stamp(layer);

		if (layer.getLegend) {
			var element = document.getElementById(id);
			element.parentNode.removeChild(element);

			layer.off('legendChanged');
		}
	},

	addLegend: function (id, html) {
		var container = this._container,
		    legend = document.getElementById(id);

		if (!legend) {
			legend = L.DomUtil.create('div', '', container);
			legend.id = id;
		}
		legend.innerHTML = html;
	}
});

L.control.legend = function (options) {
	return new L.Control.Legend(options);
};
