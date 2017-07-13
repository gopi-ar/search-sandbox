function renderReverseParams() {
  var paramContainerEl = document.getElementById('params-form');
  paramContainerEl.appendChild(createParam('point.lat', 7, 4));
  paramContainerEl.appendChild(createParam('point.lon', 7, 4));

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
   * BOUNDARIES
   */
  var boundaryCountry = createExpandableGroup('boundary.country', true);
  boundaryCountry.children[1].appendChild(createParam('boundary.country'));

  var boundaryCircle = createExpandableGroup('boundary.circle', true);
  boundaryCircle.children[1].appendChild(createParam('boundary.circle.radius'));

  var boundaries = createExpandableGroup('boundary', false);
  boundaries.appendChild(boundaryCountry);
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

  setFocus('point.lat');
}

function loadReverseParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'point.lat');
  setInputFieldIfSpecified(params, 'point.lon');
  setInputFieldIfSpecified(params, 'sources');
  setInputFieldIfSpecified(params, 'layers');
  setInputFieldIfSpecified(params, 'size');
  setInputFieldIfSpecified(params, 'boundary.country');
}
