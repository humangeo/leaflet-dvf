L.Control.Legend = L.Control.extend({
	options: {
		position: 'bottomright'
	},
	
	onAdd: function (map) {
		var className = 'leaflet-control-legend',
		    container = L.DomUtil.create('div', className);
		
		var self = this;
		
		map.on('layeradd', function (e) {
			var layer = e.layer;
			var id = L.Util.stamp(layer);
			
			if (layer.getLegend) {				
				self.addLegend(id, layer.getLegend());
			}
		});
		
		map.on('layerremove', function (e) {
			var layer = e.layer;
			var id = L.Util.stamp(layer);
			
			if (layer.getLegend) {
				$(self._container).find('#' + id).remove();
			}
		});
		
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