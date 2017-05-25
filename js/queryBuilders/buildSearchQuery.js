function buildSearchQueryParams() {
  var params = {};

  setParamIfSpecified(params, 'text');
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

  return params;
}

function executeSearchQuery() {
  var params = buildSearchQueryParams();
  return geocode('search', params);
}

function buildSearchQueryPreview() {
  var params = buildSearchQueryParams();
  return buildUrl('search', params, true);
}

function buildSearchQueryURIParams() {
  var params = buildSearchQueryParams();
  return buildUrlParamsForTracking('search', params);
}
