var currentEndpoint = 'search';

function redirectToQuery(e) {
  if (e.keyCode == 13) {

    onSend();

    event.preventDefault();
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
  }

}

function loadURIParams(params) {
  switch (currentEndpoint) {
    case 'search':            return loadSearchParams(params);
    case 'search/structured': return loadStructuredParams(params);
    case 'reverse':           return loadReverseParams(params);
  }
}

function buildQueryPreview() {
  switch (currentEndpoint) {
    case 'search':              return buildSearchQueryPreview();
    case 'search/structured':   return buildStructuredQueryPreview();
    case 'reverse':             return buildReverseQueryPreview();
  }
}