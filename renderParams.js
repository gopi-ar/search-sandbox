function renderSearchParams() {
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

  setFocus('text');
}


function setInputFieldIfSpecified(params, paramName) {
  if (params.hasOwnProperty(paramName)) {
    document.getElementById('input-' + paramName).value = decodeURIComponent(params[paramName]);

    expandParentSummary(document.getElementById('input-' + paramName));
  }
}

function expandParentSummary(el) {
  var parent = el.parentElement;

  console.log(parent, parent.tagName);

  if (parent.id === 'params-form') {
    return;
  }

  if (parent.tagName === 'DETAILS' && !parent.expanded) {
    console.log('expanding', parent.firstChild);
    parent.firstChild.click();
    parent.expanded = true;
  }

  return expandParentSummary(parent);
}

function loadSearchParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'text');
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