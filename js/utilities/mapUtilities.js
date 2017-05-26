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
var bboxes = [];

function populateMap(results) {
  // this is needed to avoid errors in zooming to bbox
  map.invalidateSize();

  dropMarkers(results);

  if (results.bbox) {
    if (results.bbox[1] === results.bbox[3]) {
      results.bbox[1] -= 1;
      results.bbox[3] += 1;
    }
    if (results.bbox[0] === results.bbox[2]) {
      results.bbox[0] -= 1;
      results.bbox[2] += 1;
    }

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

  if (bboxes.length > 0) {
    bboxes.forEach(function (bbox) {
      map.removeLayer(bbox);
    });
    bboxes = [];
  }

  markers = L.geoJson(results, {
    onEachFeature: function (feature, layer) {
      // show label when marker is clicked
      layer.bindPopup(feature.properties.label);

      if (feature.bbox) {
        const bounds = L.latLngBounds(
          L.latLng(feature.bbox[1], feature.bbox[0]),
          L.latLng(feature.bbox[3], feature.bbox[2])
        );

        var boundingBox = L.rectangle(bounds, {color: "green", weight: 1, opacity: 0.3, fillOpacity: 0.1, dashArray: "5,2"});
        bboxes.push(boundingBox);
        map.addLayer(boundingBox);
      }
    }
  }).addTo(map);
}
