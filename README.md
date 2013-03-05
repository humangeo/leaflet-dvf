leaflet-dvf
===========

Leaflet Data Visualization Framework (DVF)

The Leaflet DVF is an extension to [CloudMade][]'s [Leaflet][] JavaScript mapping library.
The primary goal of the framework is to simplify data visualization and thematic mapping.

It includes:

New marker types (see the markers example below):

* RegularPolygonMarker - create N-sided shapes like triangles, squares, hexagons, etc.
* StarMarker - create stars with N points
* ChartMarkers - useful for analyzing multiple data properties at each location:
	* BarChartMarker
	* PieChartMarker
	* RadialBarChartMarker
	* CoxcombChartMarker
	* RadialMeterMarker
	* StackedRegularPolygonMarker - a variation on the bar chart

Functions for easily mapping data properties to Leaflet style values:

* LinearFunction
* Color functions:
	* HSLHueFunction - vary the output hue based on a data property
	* HSLSaturationFunction - vary the output saturation based on a data property
	* HSLLuminosityFunction - vary the output lightness/luminosity based on a data property
	* Various RGB functions
* PiecewiseFunction - use multiple LinearFunction classes in sequence (e.g. vary a color from white to yellow, yellow to red)

New layer types that simplify reading and visualizing any JSON-based data structure:

* DataLayer
* ChartDataLayer
* ChoroplethDataLayer
* Others

GeoJSON polygons for countries and US states to support Choropleth mapping.  Countries are generated from:  https://github.com/johan/world.geo.json.
Just include these JavaScript files if you plan to build a country or US state choropleth.  
Polygons are indexed via a state or country code and lookups are created to map various state/country code formats to the default index format.

Automatic legend generation and a simple legend control.
To generate a legend, just call getLegend on any DataLayer, or use the provided legend control and the legend will be displayed automatically.

Check out the examples:

New Marker Types:
* [Markers](http://humangeo.github.com/leaflet-dvf/examples/html/markers.html)

Proportional Symbol:
* [USGS Earthquakes](http://humangeo.github.com/leaflet-dvf/examples/html/earthquakes.html)
* [Meetup Finder](http://humangeo.github.com/leaflet-dvf/examples/html/meetups.html)
* [Weather](http://humangeo.github.com/leaflet-dvf/examples/html/weather.html)

Choropleth Mapping:
* [WorldBank and UN Data](http://humangeo.github.com/leaflet-dvf/examples/html/incomelevels.html)
* [Election 2012 Polling](http://humangeo.github.com/leaflet-dvf/examples/html/election2012.html)
* [2008 vs 2012 Election Results](http://humangeo.github.com/leaflet-dvf/examples/html/election2012results.html)
* [2008 Election Results](http://humangeo.github.com/leaflet-dvf/examples/html/uselectiondata.html)
* [Geohashes](http://humangeo.github.com/leaflet-dvf/examples/html/geohashes.html)

Tutorials coming soon to [HumanGeo](http://www.thehumangeo.com/)'s [blog](http://blog.thehumangeo.com)

[CloudMade]: http://www.cloudmade.com
[Leaflet]: http://leafletjs.com