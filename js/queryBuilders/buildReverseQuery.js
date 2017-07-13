function buildReverseQueryParams() {
  var params = {};

  setParamIfSpecified(params, 'point.lat');
  setParamIfSpecified(params, 'point.lon');
  setParamIfSpecified(params, 'size');
  setParamIfSpecified(params, 'sources');
  setParamIfSpecified(params, 'layers');
  setParamIfSpecified(params, 'boundary.country');
  setParamIfSpecified(params, 'boundary.circle.radius');
  setParamIfSpecified(params, 'lang');

  return params;
}

function executeReverseQuery() {
  var params = buildReverseQueryParams();
  return geocode('reverse', params);
}

function buildReverseQueryPreview() {
  var params = buildReverseQueryParams();
  return buildUrl('reverse', params, true);
}

function buildReverseQueryURIParams() {
  var params = buildReverseQueryParams();
  return buildUrlParamsForTracking('reverse', params);
}
