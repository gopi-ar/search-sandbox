function renderPlaceParams() {
  var paramContainerEl = document.getElementById('params-form');
  paramContainerEl.appendChild(createParam('ids', 10, 1));

  setFocus('ids');
}

function loadPlaceParams(params) {
  console.log('loading params', params);

  setInputFieldIfSpecified(params, 'ids');
}