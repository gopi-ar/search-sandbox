function buildAutocompleteQueryParams() {
  var params = {};

  setParamIfSpecified(params, 'text');
  setParamIfSpecified(params, 'sources');
  setParamIfSpecified(params, 'layers');
  setParamIfSpecified(params, 'boundary.country');
  setParamIfSpecified(params, 'boundary.rect.min_lat');
  setParamIfSpecified(params, 'boundary.rect.min_lon');
  setParamIfSpecified(params, 'boundary.rect.max_lat');
  setParamIfSpecified(params, 'boundary.rect.max_lon');
  setParamIfSpecified(params, 'focus.point.lat');
  setParamIfSpecified(params, 'focus.point.lon');
  setParamIfSpecified(params, 'lang');

  return params;
}

function executeAutocompleteQuery() {
  var params = buildAutocompleteQueryParams();
  return geocode('autocomplete', params);
}

function buildAutocompleteQueryPreview() {
  var params = buildAutocompleteQueryParams();
  return buildUrl('autocomplete', params, true);
}

function buildAutocompleteQueryURIParams() {
  var params = buildAutocompleteQueryParams();
  return buildUrlParamsForTracking('autocomplete', params);
}
