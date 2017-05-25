// Set the global API key
L.Mapzen.apiKey = "mapzen-xDZ1vYz";

var mapOptions = {
  touchZoom: false,
  scrollWheelZoom: false,
  tap: true,
  zoomControl: true,
  center: [0,0],
  zoom: 1
};

var map = L.Mapzen.map("map", mapOptions);

var markers = null;

function populateMap(results) {
  // this is needed to avoid errors in zooming to bbox
  map.invalidateSize();

  dropMarkers(results);

  if (results.bbox) {
    const bounds = L.latLngBounds(
      L.latLng(results.bbox[1] || -1, results.bbox[0] || -1),
      L.latLng(results.bbox[3] || 1, results.bbox[2] || 1)
    );
    map.fitBounds(bounds, {padding: [50, 50]});
  }
}


// Draw the POI marker (just geojson with points, no polygons)
function dropMarkers(results) {
  if (markers) {
    map.removeLayer(markers);
  }

  markers = L.geoJson(results, {
    onEachFeature: function (feature, layer) {
      // show label when marker is clicked
      layer.bindPopup(feature.properties.label);
    }
  }).addTo(map);
}
