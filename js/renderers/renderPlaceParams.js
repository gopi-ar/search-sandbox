function renderPlaceParams() {
  var paramContainerEl = document.getElementById('params-form');
  paramContainerEl.appendChild(createParam('ids', 10, 1));

  /**
   * LANGUAGE
   */
  var language = createExpandableGroup('language', true);
  language.children[1].appendChild(createParam('lang', 7, 4));
  paramContainerEl.appendChild(language);

  setFocus('ids');
}

function loadPlaceParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'ids');
}
