function buildStructuredQueryParams() {
  var params = {};

  setParamIfSpecified(params, 'address');
  setParamIfSpecified(params, 'venue');
  setParamIfSpecified(params, 'neighbourhood');
  setParamIfSpecified(params, 'borough');
  setParamIfSpecified(params, 'locality');
  setParamIfSpecified(params, 'county');
  setParamIfSpecified(params, 'region');
  setParamIfSpecified(params, 'postalcode');
  setParamIfSpecified(params, 'country');

  setParamIfSpecified(params, 'size');
  setParamIfSpecified(params, 'sources');
  setParamIfSpecified(params, 'layers');
  setParamIfSpecified(params, 'boundary.country');
  setParamIfSpecified(params, 'boundary.rect.min_lat');
  setParamIfSpecified(params, 'boundary.rect.min_lon');
  setParamIfSpecified(params, 'boundary.rect.max_lat');
  setParamIfSpecified(params, 'boundary.rect.max_lon');
  setParamIfSpecified(params, 'boundary.circle.lat');
  setParamIfSpecified(params, 'boundary.circle.lon');
  setParamIfSpecified(params, 'boundary.circle.radius');
  setParamIfSpecified(params, 'focus.point.lat');
  setParamIfSpecified(params, 'focus.point.lon');
  setParamIfSpecified(params, 'lang');

  return params;
}

function executeStructuredQuery() {
  var params = buildStructuredQueryParams();
  return geocode('search/structured', params);
}

function buildStructuredQueryPreview() {
  var params = buildStructuredQueryParams();
  return buildUrl('search/structured', params, true);
}

function buildStructuredQueryURIParams() {
  var params = buildStructuredQueryParams();
  return buildUrlParamsForTracking('search/structured', params);
}
