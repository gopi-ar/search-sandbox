function buildPlaceQueryParams() {
  var params = {};

  setParamIfSpecified(params, 'ids');
  setParamIfSpecified(params, 'lang');

  return params;
}

function executePlaceQuery() {
  var params = buildPlaceQueryParams();
  console.log(params);
  return geocode('place', params);
}

function buildPlaceQueryPreview() {
  var params = buildPlaceQueryParams();
  return buildUrl('place', params, true);
}

function buildPlaceQueryURIParams(params) {
  params = params || buildPlaceQueryParams();
  return buildUrlParamsForTracking('place', params);
}
