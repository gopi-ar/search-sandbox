// Move all of this in mapzen.js

var wof_data_url = 'https://whosonfirst.mapzen.com/data/';
var mapzen_search_url = 'https://search.mapzen.com/v1/';
var search_api_key = 'mapzen-xDZ1vYz';

function buildUrlParamsForTracking(query, params) {
  params = params || {};

  var paramsStr = Object
    .keys(params)
    .map(function (key) {
      return key + '=' + encodeURIComponent(params[key]);
    })
    .join('&');

  if (paramsStr.length > 0) {
    return 'query=' + query + '&' + paramsStr;
  }
  return '';
}

function buildUrl(query, params, display) {
  params = params || {};

  if (display) {
    params.api_key = 'your-mapzen-api-key';
  }
  else {
    params.api_key = search_api_key;
  }

  var paramsStr = Object
    .keys(params)
    .map(function (key) {
      return key + '=' + (display ? params[key] : encodeURIComponent(params[key]));
    })
    .join('&');

  console.log(mapzen_search_url + query + '?' + paramsStr);

  return mapzen_search_url + query + '?' + paramsStr;
}

//Reverse geocode to lookup the address or venue at a given point.
function geocode(query, params) {
  return httpGetSync(buildUrl(query, params, false));
}

/* Lookup place details given a Mapzen Search gid string.
 * Important to note that these gids should be coming directly from
 * Mapzen Search results, and should never be constructed manually.
 */
function getPlaceDetails(gid) {
  var url = mapzen_search_url + 'place?ids=' + gid + search_api_key;
  return httpGetSync(url).features[0];
}

//Retrieve full WOF record given the WOF id.
function getWOFRecord(wofId) {
  var url = wof_data_url + wofId.substr(0, 3) + '/' +
    wofId.substr(3, 3) + '/' + wofId.substr(6) + '/' + wofId + '.geojson';
  return httpGetSync(url);
}

//Perform a GET request to given url and return the results as a JSON object.
function httpGetSync(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  return JSON.parse(xhttp.responseText);
}
