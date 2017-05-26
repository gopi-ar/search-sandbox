var currentEndpoint = 'search';

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  alert("Error occured: " + errorMsg, url, lineNumber);
  return false;
};

function redirectToQuery(e) {
  if (e.keyCode === 13) {

    event.preventDefault();

    onSend();

    return false;
  }
  else {
    document.getElementById('query-preview').innerHTML = '<h4>' + buildQueryPreview() + '</h4>';
  }
}

function onSend() {
  query();
  document.getElementById("divider").scrollIntoView({
      behavior: "smooth",
      block: "start"
    }
  );
}

function resetParams() {
  window.location.href = window.location.origin + window.location.pathname + '?query=' + currentEndpoint;
}

function onLoad() {

  var params = getAllUrlParams();
  currentEndpoint = params.query || currentEndpoint;

  renderParams();
  loadURIParams(params);

  document.getElementById('endpoint-' + currentEndpoint).classList.add('active');

  document.getElementById('query-preview').innerHTML = '<h4>' + buildQueryPreview() + '</h4>';
  query();
}

var endpoints = [
  'search',
  'search/structured',
  'reverse',
  'autocomplete',
  'place'
];

function nextEndpoint() {
  var next = (endpoints.indexOf(currentEndpoint) + 1) % endpoints.length;
  selectEndpoint(endpoints[next]);
}

function previousEndpoint() {
  var next = endpoints.indexOf(currentEndpoint) - 1;
  if (next < 0) {
    next = endpoints.length-1;
  }
  selectEndpoint(endpoints[next]);
}

function selectEndpoint(endpoint) {
  if (currentEndpoint === endpoint) {
    return;
  }

  document.getElementById('endpoint-' + currentEndpoint).classList.remove('active');

  currentEndpoint = endpoint;

  document.getElementById('endpoint-' + currentEndpoint).classList.add('active');

  resetParams();
}

function renderParams() {
  switch (currentEndpoint) {
    case 'search':            return renderSearchParams();
    case 'search/structured': return renderStructuredParams();
    case 'reverse':           return renderReverseParams();
    case 'autocomplete':      return renderAutocompleteParams();
    case 'place':             return renderPlaceParams();
  }
  console.error('unknown endpoint:', currentEndpoint);
}

function loadURIParams(params) {
  switch (currentEndpoint) {
    case 'search':            return loadSearchParams(params);
    case 'search/structured': return loadStructuredParams(params);
    case 'reverse':           return loadReverseParams(params);
    case 'autocomplete':      return loadAutocompleteParams(params);
    case 'place':             return loadPlaceParams(params);
  }
  console.error('unknown endpoint:', currentEndpoint);
}

function buildQueryPreview() {
  switch (currentEndpoint) {
    case 'search':              return buildSearchQueryPreview();
    case 'search/structured':   return buildStructuredQueryPreview();
    case 'reverse':             return buildReverseQueryPreview();
    case 'autocomplete':        return buildAutocompleteQueryPreview();
    case 'place':               return buildPlaceQueryPreview();
  }
  console.error('unknown endpoint:', currentEndpoint);
}