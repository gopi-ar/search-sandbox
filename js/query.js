
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

/**
 * Populate the results list
 *
 * @param {object} results
 * @param {object} results.geocoding
 * @param {object} results.features
 */
function populateList(results) {
  var containerEl = document.getElementById('results-list-container');
  containerEl.innerHTML = '';

  if (results.geocoding.errors && results.geocoding.errors.length > 0) {
    results.geocoding.errors.forEach(function (error) {
      var label = document.createElement('div');
      label.className = "alert alert-danger";
      label.role = "alert";
      label.innerHTML = '[ERROR] ' + error;
      containerEl.appendChild(label);
    });
  }

  if (results.geocoding.warnings && results.geocoding.warnings.length > 0) {
    results.geocoding.warnings.forEach(function (error) {
      var label = document.createElement('div');
      label.className = "alert alert-warning";
      label.role = "alert";
      label.innerHTML = '[WARNING] ' + error;
      containerEl.appendChild(label);
    });
  }

  if (results.features && results.features.length > 0) {
    var listEl = document.createElement('ol');
    listEl.id = 'results-list';
    results.features.forEach(function (record) {
      var label = document.createElement('li');
      label.innerHTML = record.properties.label;
      listEl.appendChild(label);
    });
    containerEl.appendChild(listEl);
  }
}

function buildQueryURIParams() {
  switch (currentEndpoint) {
    case 'search':              return buildSearchQueryURIParams();
    case 'search/structured':   return buildStructuredQueryURIParams();
    case 'reverse':             return buildReverseQueryURIParams();
    case 'autocomplete':        return buildAutocompleteQueryURIParams();
  }
}

function executeQuery() {
  switch (currentEndpoint) {
    case 'search':              return executeSearchQuery();
    case 'search/structured':   return executeStructuredQuery();
    case 'reverse':             return executeReverseQuery();
    case 'autocomplete':        return executeAutocompleteQuery();
  }
}