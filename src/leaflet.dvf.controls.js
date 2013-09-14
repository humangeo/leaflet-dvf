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
		
		$(container).on('mouseover mouseout', function (e) {
			$(this).toggleClass('larger');
		});
		
		L.DomEvent
		.addListener(container, 'click', L.DomEvent.stopPropagation)
		.addListener(container, 'click', L.DomEvent.preventDefault);
		
		return container;
	},
	
	clear: function () {
		$(this._container).empty();
	},
	
	toggleSize: function () {
		$(this._container).toggleClass('larger', 'slow');
	},
	
	addLayer: function (layer) {
		var id = L.Util.stamp(layer);
			
		if (layer.getLegend) {				
			this.addLegend(id, layer.getLegend());
		}
	},
	
	removeLayer: function (layer) {
		var id = L.Util.stamp(layer);
			
		if (layer.getLegend) {
			$(this._container).find('#' + id).remove();
		}
	},
	
	addLegend: function (id, html) {
		var $container = $(this._container);
		var $html = $(html);
		var $existingLegend = $container.find('#' + id);
		
		if ($existingLegend.size() === 0) {
			$container.append('<div id="' + id + '">' + html + '</div>');
		}
		else {
			$existingLegend.find('div.legend').replaceWith($html);
		}
	}
});

L.control.legend = function (options) {
	return new L.Control.Legend(options);
};