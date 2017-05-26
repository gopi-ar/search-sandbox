
function query() {
  // update URL to contain the new params
  var urlParams = buildQueryURIParams();

  if (!urlParams || urlParams.length === 0) {
    console.error('No query parameters have been specified!');
    document.getElementById('results-container').style.display = 'none';
    return;
  }

  window.history.replaceState(null, null, '?' + urlParams);

  document.getElementById('results-container').style.display = 'inline';

  var results = executeQuery();

  console.log(results);

  var resultsEl = document.getElementById('results-raw');
  resultsEl.innerHTML = JSON.stringify(results, null, 2);
  hljs.highlightBlock(resultsEl);

  populateList(results);
  populateMap(results);

  return results;
}

function buildQueryURIParams() {
  switch (currentEndpoint) {
    case 'search':              return buildSearchQueryURIParams();
    case 'search/structured':   return buildStructuredQueryURIParams();
    case 'reverse':             return buildReverseQueryURIParams();
    case 'autocomplete':        return buildAutocompleteQueryURIParams();
    case 'place':               return buildPlaceQueryURIParams();
  }
  console.error('unknown endpoint:', currentEndpoint);
}

function executeQuery() {
  switch (currentEndpoint) {
    case 'search':              return executeSearchQuery();
    case 'search/structured':   return executeStructuredQuery();
    case 'reverse':             return executeReverseQuery();
    case 'autocomplete':        return executeAutocompleteQuery();
    case 'place':               return executePlaceQuery();
  }
  console.error('unknown endpoint:', currentEndpoint);
}