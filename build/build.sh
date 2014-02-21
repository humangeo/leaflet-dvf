cd ..

# Build leaflet-dvf.min.js
uglifyjs src/copyright.js src/leaflet.dvf.linearfunctions.js src/leaflet.dvf.utils.js src/leaflet.dvf.palettes.js src/leaflet.dvf.regularpolygon.js src/leaflet.dvf.markers.js src/leaflet.dvf.chartmarkers.js src/leaflet.dvf.datalayer.js src/leaflet.dvf.lines.js src/leaflet.dvf.controls.js -o dist/leaflet-dvf.min.js -c -m --comments

# Build leaflet-dvf.js
uglifyjs src/copyright.js src/leaflet.dvf.linearfunctions.js src/leaflet.dvf.utils.js src/leaflet.dvf.palettes.js src/leaflet.dvf.regularpolygon.js src/leaflet.dvf.markers.js src/leaflet.dvf.chartmarkers.js src/leaflet.dvf.datalayer.js src/leaflet.dvf.lines.js src/leaflet.dvf.controls.js -o dist/leaflet-dvf.js -b --comments

# Build leaflet-dvf.markers.min.js
uglifyjs src/copyright.js src/leaflet.dvf.linearfunctions.js src/leaflet.dvf.utils.js src/leaflet.dvf.palettes.js src/leaflet.dvf.markers.js src/leaflet.dvf.chartmarkers.js -o dist/leaflet-dvf.markers.min.js -c -m --comments

# Build leaflet-dvf.markers.min.js
uglifyjs src/copyright.js src/leaflet.dvf.linearfunctions.js src/leaflet.dvf.utils.js src/leaflet.dvf.palettes.js src/leaflet.dvf.markers.js src/leaflet.dvf.chartmarkers.js -o dist/leaflet-dvf.markers.js -b --comments

# Build data files
uglifyjs src/data/countryData.js -o dist/data/countryData.min.js -c --comments
uglifyjs src/data/stateData.js -o dist/data/stateData.min.js -c --comments