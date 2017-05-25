function renderAutocompleteParams() {
  var paramContainerEl = document.getElementById('params-form');
  paramContainerEl.appendChild(createParam('text', 10, 1));

  /**
   * SOURCES
   */
  var sources = createExpandableGroup('sources', true);
  sources.children[1].appendChild(createParam('sources', 7, 4));
  paramContainerEl.appendChild(sources);

  /**
   * LAYERS
   */
  var layers = createExpandableGroup('layers', true);
  layers.children[1].appendChild(createParam('layers', 7, 4));
  paramContainerEl.appendChild(layers);

  /**
   * FOCUS.POINT
   */
  var focusPoint = createExpandableGroup('focus.point', true);
  focusPoint.children[1].appendChild(createParam('focus.point.lat'));
  focusPoint.children[1].appendChild(createParam('focus.point.lon'));
  paramContainerEl.appendChild(focusPoint);


  /**
   * BOUNDARIES
   */
  var boundaryCountry = createExpandableGroup('boundary.country', true);
  boundaryCountry.children[1].appendChild(createParam('boundary.country'));

  var boundaryRect = createExpandableGroup('boundary.rect', true);
  boundaryRect.children[1].appendChild(createParam('boundary.rect.min_lat'));
  boundaryRect.children[1].appendChild(createParam('boundary.rect.min_lon'));
  boundaryRect.children[1].appendChild(createParam('boundary.rect.max_lat'));
  boundaryRect.children[1].appendChild(createParam('boundary.rect.max_lon'));

  var boundaries = createExpandableGroup('boundary', false);
  boundaries.appendChild(boundaryCountry);
  boundaries.appendChild(boundaryRect);
  paramContainerEl.appendChild(boundaries);

  setFocus('text');
}

function loadAutocompleteParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'text');
  setInputFieldIfSpecified(params, 'sources');
  setInputFieldIfSpecified(params, 'layers');
  setInputFieldIfSpecified(params, 'focus.point.lat');
  setInputFieldIfSpecified(params, 'focus.point.lon');
  setInputFieldIfSpecified(params, 'boundary.country');
  setInputFieldIfSpecified(params, 'boundary.rect.min_lat');
  setInputFieldIfSpecified(params, 'boundary.rect.min_lon');
  setInputFieldIfSpecified(params, 'boundary.rect.max_lat');
  setInputFieldIfSpecified(params, 'boundary.rect.max_lon');
}