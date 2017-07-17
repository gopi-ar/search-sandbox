function renderStructuredParams() {
  var paramContainerEl = document.getElementById('params-form');
  paramContainerEl.innerHTML = '';

  paramContainerEl.appendChild(createParam('address', 7, 4));
  paramContainerEl.appendChild(createParam('venue', 7, 4));
  paramContainerEl.appendChild(createParam('neighbourhood', 7, 4));
  paramContainerEl.appendChild(createParam('borough', 7, 4));
  paramContainerEl.appendChild(createParam('locality', 7, 4));
  paramContainerEl.appendChild(createParam('county', 7, 4));
  paramContainerEl.appendChild(createParam('region', 7, 4));
  paramContainerEl.appendChild(createParam('postalcode', 7, 4));
  paramContainerEl.appendChild(createParam('country', 7, 4));

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


  var boundaryCircle = createExpandableGroup('boundary.circle', true);
  boundaryCircle.children[1].appendChild(createParam('boundary.circle.lat'));
  boundaryCircle.children[1].appendChild(createParam('boundary.circle.lon'));
  boundaryCircle.children[1].appendChild(createParam('boundary.circle.radius'));

  var boundaries = createExpandableGroup('boundary', false);
  boundaries.appendChild(boundaryCountry);
  boundaries.appendChild(boundaryRect);
  boundaries.appendChild(boundaryCircle);
  paramContainerEl.appendChild(boundaries);

  /**
   * SIZE
   */
  var size = createExpandableGroup('size', true);
  size.children[1].appendChild(createParam('size', 7, 4));
  paramContainerEl.appendChild(size);

  /**
   * LANGUAGE
   */
  var language = createExpandableGroup('language', true);
  language.children[1].appendChild(createParam('lang', 7, 4));
  paramContainerEl.appendChild(language);

  setFocus('address');
}

function loadStructuredParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'address');
  setInputFieldIfSpecified(params, 'venue');
  setInputFieldIfSpecified(params, 'neighbourhood');
  setInputFieldIfSpecified(params, 'borough');
  setInputFieldIfSpecified(params, 'locality');
  setInputFieldIfSpecified(params, 'county');
  setInputFieldIfSpecified(params, 'region');
  setInputFieldIfSpecified(params, 'postalcode');
  setInputFieldIfSpecified(params, 'country');

  setInputFieldIfSpecified(params, 'sources');
  setInputFieldIfSpecified(params, 'layers');
  setInputFieldIfSpecified(params, 'size');
  setInputFieldIfSpecified(params, 'focus.point.lat');
  setInputFieldIfSpecified(params, 'focus.point.lon');
  setInputFieldIfSpecified(params, 'boundary.country');
  setInputFieldIfSpecified(params, 'boundary.rect.min_lat');
  setInputFieldIfSpecified(params, 'boundary.rect.min_lon');
  setInputFieldIfSpecified(params, 'boundary.rect.max_lat');
  setInputFieldIfSpecified(params, 'boundary.rect.max_lon');
  setInputFieldIfSpecified(params, 'boundary.circle.lat');
  setInputFieldIfSpecified(params, 'boundary.circle.lon');
  setInputFieldIfSpecified(params, 'boundary.circle.radius');
}
