# Leaflet Data Visualization Framework (DVF)

## Overview

The Leaflet DVF is an extension to [CloudMade][]'s [Leaflet][] JavaScript mapping library.
The primary goal of the framework is to simplify data visualization and thematic mapping.

![Markers](http://humangeo.github.com/leaflet-dvf/images/markers.png "Markers")
![Election Mapping](http://humangeo.github.com/leaflet-dvf/images/electionmapping.png "Election Mapping")
![Country Data](http://humangeo.github.com/leaflet-dvf/images/countrydata.png "Country Data")

It includes:

New marker types (see the markers example below):

* MapMarker - create an SVG-based map marker similar to Leaflet's image-based marker, but fully customizable via L.Path style properties
* RegularPolygonMarker - create N-sided shapes like triangles, squares, hexagons, etc.
* StarMarker - create stars with N points
* ChartMarkers - useful for displaying multiple data properties at each location:
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

*NOTE:  The dist folder includes a minified version of the full framework as well as a minified version of the code required to use the new markers*
*Use leaflet-dvf.markers.min.js if you want to use the new markers without the rest of the framework*

## Examples

*NOTE:  Most of these examples have multiple layers; use the layers control to see all of the layers*

New Marker Types:
* [Markers](http://humangeo.github.com/leaflet-dvf/examples/html/markers.html)

Proportional Symbol:
* [USGS Earthquakes](http://humangeo.github.com/leaflet-dvf/examples/html/earthquakes.html)
* [Meetup Finder](http://humangeo.github.com/leaflet-dvf/examples/html/meetups.html) - zoom to an area of interest, put in a Meetup topic, and click the search button
* [Weather](http://humangeo.github.com/leaflet-dvf/examples/html/weather.html)

Choropleth Mapping:
* [Color Functions](http://humangeo.github.com/leaflet-dvf/examples/html/colors.html)
* [Geohashes](http://humangeo.github.com/leaflet-dvf/examples/html/geohashes.html)

Mix:
* [WorldBank and UN Data](http://humangeo.github.com/leaflet-dvf/examples/html/incomelevels.html)
* [Election 2012 Polling](http://humangeo.github.com/leaflet-dvf/examples/html/election2012.html)
* [2008 vs 2012 Election Results](http://humangeo.github.com/leaflet-dvf/examples/html/election2012results.html)
* [2008 Election Results](http://humangeo.github.com/leaflet-dvf/examples/html/uselectiondata.html)
* [Netherlands Population by ZIP 2](http://humangeo.github.com/leaflet-dvf/examples/html/nlzip.html) ** Thanks to Steven De Schrijver of [Conundra](http://www.conundra.eu) for providing the example use case **

Tutorials coming soon to [HumanGeo](http://www.thehumangeo.com/)'s [blog](http://blog.thehumangeo.com)

# Documentation

> A work in progress ...

## Markers

> The framework adds several new marker types geared towards dynamic data visualization.  See the [Markers](http://humangeo.github.com/leaflet-dvf/examples/html/markers.html) example for an illustration of each of these markers.

### L.MapMarker

> Creates an SVG-based map marker, similar to the default Leaflet image-based marker but fully customizable using the basic L.Path properties

#### Usage
`L.MapMarker(<LatLng> LatLng, <Marker options> options?);`

```javascript
var marker = new L.MapMarker(new L.LatLng(0, 0), {
	radius: 10,
	// L.Path style options
	...
});

map.addLayer(marker);
```

#### Options
Option | Type | Default | Description
--- | --- | --- | ---
numberOfSides | Number | 3 | If an inner radius is specified, then the marker will have a hole in center.  This property determines the shape of the hole.
rotation | Number | 0 | If an inner radius is specified, this controls the rotation of the hole in the center.
radius OR radiusX, radiusY | Number | 10 | The radius of the circular part of the marker, also adjusts the height of the marker
innerRadius OR innerRadiusX, innerRadiusY | Number | null | The inner radius of the marker hole in pixels.

### L.RegularPolygonMarker

<img alt="Bar Chart Marker" src="http://humangeo.github.com/leaflet-dvf/images/regularpolygonmarkers.png" width="290" height="72" style="width: 290px; height: 72px;"/>

> Creates an N-sided marker

#### Usage
`L.RegularPolygonMarker(<LatLng> LatLng, <Marker options> options?);`

```javascript
var marker = new L.RegularPolygonMarker(new L.LatLng(0, 0), {
	numberOfSides: 3,
	rotation: 60.0,
	radius: 10,
	// L.Path style options
	...
});

map.addLayer(marker);
```

#### Options
Option | Type | Default | Description
--- | --- | --- | ---
numberOfSides | Number | 3 | The number of sides the marker should have
rotation | Number | 0.0 | The angle in degrees that the marker should be rotated
radius OR radiusX, radiusY | Number | 10 | The radius of the marker in pixels 
innerRadius OR innerRadiusX, innerRadiusY | Number | null | The inner radius of the marker in pixels.  Specifying an innerRadius will produce a regular polygon with a hole in the middle.

### L.StarMarker

<img alt="Star Marker" src="http://humangeo.github.com/leaflet-dvf/images/stars.png" width="83" height="87" style="width: 83px; height: 87px;"/>

> Creates a star-shaped marker with N-points

#### Usage
`L.StarMarker(<LatLng> LatLng, <StarMarker options> options?);`

#### Options (in addition to the L.RegularPolygonMarker options defined above)
Option | Type | Default | Description
--- | --- | --- | ---
numberOfPoints | Number | 5 | The number of points the star should have

### ChartMarkers

<img alt="Bar Chart Marker" src="http://humangeo.github.com/leaflet-dvf/images/barchartmarker.png" width="83" height="87" style="width: 83px; height: 87px;"/><img alt="Radial Bar Chart Marker" src="http://humangeo.github.com/leaflet-dvf/images/radialbarchartmarker.png" width="83" height="87" style="width: 83px; height: 87px;"/><img alt="Pie Chart Marker" src="http://humangeo.github.com/leaflet-dvf/images/piechartmarker.png" width="83" height="87" style="width: 83px; height: 87px;"/><img alt="Coxcomb Chart Marker" src="http://humangeo.github.com/leaflet-dvf/images/coxcombchartmarker.png" width="83" height="87" style="width: 83px; height: 87px;"/><img alt="Stacked Regular Polygon Marker" src="http://humangeo.github.com/leaflet-dvf/images/stackedregularpolygon.png" width="83" height="87" style="width: 83px; height: 87px;"/><img alt="Radial Meter Marker" src="http://humangeo.github.com/leaflet-dvf/images/radialmetermarker.png" width="83" height="87" style="width: 83px; height: 87px;"/>

> Display dynamic charts (bar chart, radial bar chart, pie chart, coxcomb chart, etc.) as markers

#### Usage
`L.BarChartMarker(<LatLng> LatLng, <Chart options> options?);`
`L.RadialBarChartMarker(<LatLng> LatLng, <Chart options> options?);`
`L.PieChartMarker(<LatLng> LatLng, <Chart options> options?);`
`L.CoxcombChartMarker(<LatLng> LatLng, <Chart options> options?);`
`L.StackedRegularPolygonMarker(<LatLng> LatLng, <Chart options> options?);`
`L.RadialMeterMarker(<LatLng> LatLng, <Chart options> options?);`

```javascript
var options = {
	data: {
		'dataPoint1': Math.random() * 20,
		'dataPoint2': Math.random() * 20,
		'dataPoint3': Math.random() * 20,
		'dataPoint4': Math.random() * 20
	},
	chartOptions: {
		'dataPoint1': {
			fillColor: '#FEE5D9',
			minValue: 0,
			maxValue: 20,
			maxHeight: 20,
			displayText: function (value) {
				return value.toFixed(2);
			}
		},
		'dataPoint2': {
			fillColor: '#FCAE91',
			minValue: 0,
			maxValue: 20,
			maxHeight: 20,
			displayText: function (value) {
				return value.toFixed(2);
			}
		},
		'dataPoint3': {
			fillColor: '#FB6A4A',
			minValue: 0,
			maxValue: 20,
			maxHeight: 20,
			displayText: function (value) {
				return value.toFixed(2);
			}
		},
		'dataPoint4': {
			fillColor: '#CB181D',
			minValue: 0,
			maxValue: 20,
			maxHeight: 20,
			displayText: function (value) {
				return value.toFixed(2);
			}
		}
	},
	weight: 1,
	color: '#000000',
	... // Other L.Path style options
}

var barChartMarker = new L.BarChartMarker(new L.LatLng(0, 0), options);
```

#### Options (in addition to the *L.Path* style options)

Option | Type | Default | Description
--- | --- | --- | ---
data | Object | null | A set of key/value pairs that provides a data value for each property displayed by the marker 
chartOptions | Object | null | A set of key/value pairs that defines the options associated with each data property displayed by the marker.

## Utility Functions

> Classes for mapping data properties to Leaflet style values

### L.LinearFunction

> Used to map a data property from one scale to another

#### Usage
`L.LinearFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <LinearFunction options> options?);`

```javascript
// Map a data property that ranges from 0 to 100 to a value between 5 and 20 (e.g. marker radius)
var linearFunction = new L.LinearFunction(new L.Point(0, 5), new L.Point(100, 20));

// OR - In addition to L.Point objects, you can also use arrays
var linearFunction = new L.LinearFunction([0, 5], [100, 20]);

console.log(linearFunction.evaluate(10));  // prints 6.5
```

#### Options
Option | Type | Default | Description
--- | --- | --- | ---
preProcess | Function | null | A function for pre-processing an input value 
postProcess | Function | null | A function for post-processing an output value

#### Key Methods
Method | Usage | Description
--- | --- | ---
evaluate | `linearFunction.evaluate(<value>);` | Interpolates an output value based on the passed in input value

### Color Functions 

> Used to map a data property to a color.  The framework includes tools for mapping color using Hue, Saturation, and Lightness/Luminosity (HSL) or Red, Green, Blue (RGB) color.  See the [Colors](http://humangeo.github.com/leaflet-dvf/examples/html/colors.html) example.

#### Usage

> Change the output hue dynamically based on the input data property  
> *Useful for producing colors along a rainbow scale (or subset)*
`L.HSLHueFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <HSL options> options?);`

> Change the output saturation dynamically based on the input data property  
> *Useful for varying between a color and gray*
`L.HSLSaturationFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <HSL options> options?);`

> Change the output luminosity dynamically based on the input data property  
> *Useful for varying between a color and white*
`L.HSLLuminosityFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <HSL options> options?);`

> Change the output red value dynamically based on the input data property
`L.RGBRedFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <RGB options> options?);`

> Change the output blue value dynamically based on the input data property
`L.RGBBlueFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <RGB options> options?);`

> Change the output green value dynamically based on the input data property
`L.RGBGreenFunction(<Number[]|Point> minPoint, <Number[]|Point> maxPoint, <RGB options> options?);`

> Vary the output color dynamically between two RGB colors
`L.RGBColorBlendFunction(<Number> minX, <Number>> maxX, <RGB array> minColor, <RGB array> maxColor);`

```javascript
// Map a data property that ranges from 0 to 100 to a color between green (hue of 120) and red (hue of 0)
var colorFunction = new L.HSLHueFunction(new L.Point(0, 120), new L.Point(100, 20));

colorFunction.evaluate(10); // prints 'hsl(110.00, 100%, 50%)'
```

#### Options

##### HSL Options
Option | Type | Default | Description
--- | --- | --- | ---
outputHue | Number | 0 | The desired output hue *NOTE: use with L.HSLSaturationFunction and L.HSLLuminosityFunction*
outputSaturation | String | '100%' | The desired output saturation *NOTE: use with L.HSLHueFunction and L.HSLLuminosityFunction*
outputLuminosity | String | '50%' | The desired width of the legend element *NOTE: use with L.HSLHueFunction and L.HSLSaturationFunction*

##### RGB Options
Option | Type | Default | Description
--- | --- | --- | ---
outputRed | Number (0..255) | null | The desired output red value *NOTE: use with L.RGBGreenFunction and L.RGBBlueFunction*
outputGreen | Number | (0..255) | The desired output green value *NOTE: use with L.RGBRedFunction and L.RGBBlueFunction*
outputBlue | Number | (0..255) | The desired output blue value *NOTE: use with L.RGBRedFunction and L.RGBGreenFunction*

### L.PiecewiseFunction

> Used to combine L.LinearFunction instances for cases where one instance won't suffice

#### Usage
`L.PiecewiseFunction(<LinearFunction[]> functions, <LinearFunction options> options?);`

```javascript
// Map a data property that ranges from 0 to 100 to a color that ranges from white to yellow, yellow to red
// To vary a color between white and that color, use an HSLLuminosityFunction.  In this case we'll vary
// the color from white to yellow until the value reaches 50
var whiteToYellow = new L.HSLLuminosityFunction(new L.Point(0, 1), new L.Point(50, 0.5), {
	outputHue: 60
});

// We'll then vary the color from yellow to red from 50 to 100
var yellowToRed = new L.HSLHueFunction(new L.Point(50, 60), new L.Point(100, 0));

// Create a new PiecewiseFunction and use this as you would any other LinearFunction
var colorFunction = new L.PiecewiseFunction([whiteToYellow, yellowToRed]);

...
```

## DataLayer Classes

> Support loading and displaying data from any JSON-based object/collection

### L.DataLayer

> Display data values using L.RegularPolygonMarker instances.  In thematic mapping, this class displays data using proportional symbols.  
>
> *NOTE:  If the location features are lines/polygons (e.g. GeoJSON), this class will use the centroid of each line/polygon to place each marker.  When dealing with line/polygon features, you must include a reference to the [JavaScript Topology Suite (JSTS) JS files](https://github.com/bjornharrtell/jsts/tree/master/lib).  These files are used to calculate centroids.  If these files are not included, the DataLayer class will fallback to using the center of the bounds of the layer's geometry.*

#### Usage
`L.DataLayer(<Object> data, <DataLayer options> options?);`

#### Options
Option | Type | Default | Description
--- | --- | --- | ---
recordsField | String | 'features' | A pointer to the field in the input data that contains the records to be visualized.  Use null when the data being passed in is the set of records to be visualized.  Use dot notation to specify child properties (e.g. data.election.resultsByState), see note below.
locationMode | String | 'latlng' OR L.LocationModes.LATLNG | The mode used to determine a location for each record.  Use a string or the *L.LocationModes* constant values 
latitudeField | String | 'coordinates.1' | The property of each record that contains the latitude *NOTE: Use with 'latlng' locationMode*
longitudeField | String | 'coordinates.0' | The property of each record that contains the longitude *NOTE: Use with 'latlng' locationMode*
codeField | String | null | The property of each record that contains the code used to lookup a location *NOTE: Use with 'state', 'country', or 'lookup' locationMode values*
geohashField | String | null | The property of each record that contains the geohash used to determine a location *NOTE: Use with 'geohash' locationMode values*
layerOptions | Object | null | Default style - An object containing Leaflet L.Path style properties that will be used as the default style for DataLayer markers/polygons.  These properties will be overridden by the displayOptions.
displayOptions | Object | null | Dynamic styles - An object containing pointers to one or property values of each record with associated L.Path style properties and LinearFunction objects
tooltipOptions | Object | null | Options used to configure the tooltips that are displayed on mouseover (iconSize and iconAnchor)
onEachRecord | Function | null | A function that performs additional operations (e.g. binding a popup) on a created layer based on the record associated with that layer (similar to the L.GeoJSON onEachFeature method
includeLayer | Function | null | A function for determining whether or not the layer for a given record should be added to the map.
getLocation | Function | null | A function for getting a custom location from a record (e.g. looking up an address) *NOTE: Use with 'custom' locationMode value*
locationLookup | Object (GeoJSON FeatureCollection) | null | A GeoJSON FeatureCollection that will be used to lookup the location associated with a given record. This is useful when you have some data that maps to political/statistical boundaries other than US states or countries.  *NOTE: Use with 'lookup locationMode*
includeBoundary | Boolean | null | true/false - whether or not the boundary polygon should be displayed when displaying proportional symbols.  This is useful for identifying the boundary associated with each symbol.

#### Referencing Data Properties

Use dot notation to reference items in the passed in data object.  This applies to all field options (e.g. recordsField) as well as displayOptions.

Given an object like:

```javascript
{
	data: {
		values: [
			{
				property1: 1,
				property2: 'akdfljlkfds',
				property3: 234,
				location: [-1.234324, 13.123213],
				additional: {
					property1: 2,
					property2: 56
				}
			},
			...
			{
				property1: 34,
				property2: 'werewrwer',
				property3: 56,
				location: [5.435444, 8.999345],
				additional: {
					property1: 88,
					property2: 3
				}
			}
		]
	}
}
```

You might specify the following options:

```javascript
{
	recordsField: 'data.values',
	locationMode: L.LocationModes.LATLNG,
	latitudeField: 'location.1'  // Points to the second item in the location array
	longitudeField: 'location.0' // Points to the first item in the location array,
	displayOptions: {
		'additional.property1': {
			... // See displayOptions below
		}
	}
}
```

#### displayOptions

> The *displayOptions* option is used to define how data properties are dynamically mapped to display styles. It's a JavaScript object of key/value pairs that follows the pattern:

```javascript
{
	<reference to data property 1>: {
		displayName: <Human-readable text describing this property>,
		displayText: <Function for converting the value of this property to a human-readable value>,
		// Leaflet L.Path style properties with static values or L.LinearFunction instances
		// or just functions for dynamic mapping
		color:  <Color function or basic function (e.g. L.HSLHueFunction)>,
		fillColor:  <Color function or basic function (e.g. L.HSLHueFunction)>,
		...
	},
	<reference to data property 2>: {
		displayName: ...,
		displayText: ...,
		...
	},
	...
	<reference to data property X>: {
		displayName: ...,
		displayText: ...,
		...
	}
}
```

### ChartDataLayers

> Display data values using ChartMarker instances (inherits from L.DataLayer)

#### Usage
`L.BarChartDataLayer(<Object> data, <ChartDataLayer options> options?);`
`L.RadialBarChartDataLayer(<Object> data, <ChartDataLayer options> options?);`
`L.PieChartDataLayer(<Object> data, <ChartDataLayer options> options?);`
`L.CoxcombChartDataLayer(<Object> data, <ChartDataLayer options> options?);`
`L.StackedRegularPolygonDataLayer(<Object> data, <ChartDataLayer options> options?);`

#### Options
Option | Type | Default | Description
--- | --- | --- | ---

### L.ChoroplethDataLayer

> Display data values using dynamically styled points, lines, and polygons (inherits from L.DataLayer)

#### Usage
`L.ChoroplethDataLayer(<Object> data, <DataLayer options> options?);`

#### Options
Option | Type | Default | Description
--- | --- | --- | ---

### L.MarkerDataLayer

> Display data values using markers based on L.Icon or L.DivIcon icons (inherits from L.DataLayer)

#### Usage
`L.MarkerDataLayer(<Object> data, <MarkerDataLayer options> options?);`

#### Options
Option | Type | Default | Description
--- | --- | --- | ---

## Legends

> Useful for visually informing users about the dynamic styles associated with your L.DataLayer instances

### L.Control.Legend

> Add this control to your map to automatically display a dynamic legend for any L.DataLayer based instance that you add to your map

```javascript
var legendControl = new L.Control.Legend();

legendControl.addTo(map);
```

### L.DataLayer - *getLegend()*

> Call *getLegend* on any L.DataLayer instance to get an HTML element that can be added to your page

#### Usage

`layer.getLegend(<Legend options> options?);`

```javascript
var layer = new L.DataLayer(data, {...});

layer.getLegend(); // Returns HTML
```

#### Options

Option | Type | Default | Description
--- | --- | --- | ---
className | String | null | A class name that will be added to the legend element, useful for adding custom CSS styles
numSegments | Number | 10 | The number of segments/bars to include in the legend element
width | Number | 100 | The desired width of the legend element

[CloudMade]: http://www.cloudmade.com
[Leaflet]: http://leafletjs.com