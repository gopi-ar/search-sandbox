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

  addErrors(containerEl, results);
  addWarnings(containerEl, results);

  if (results.features && results.features.length > 0) {
    var listEl = document.createElement('ol');
    listEl.id = 'results-list';
    results.features.forEach(function (record) {
      var label = document.createElement('li');

      var icon = selectIcon(record);
      var linkPath = buildPlaceLink(record);

      label.innerHTML = icon + '    ' +
          //'<i>(' + record.properties.source + ')</i>     ' +
        '<a href="' + linkPath + '">' + record.properties.label + "</a>";
      listEl.appendChild(label);
    });
    containerEl.appendChild(listEl);
  }
}

function selectIcon(record) {
  switch (record.properties.layer) {
    case 'venue':   return '<i class="fa fa-building" aria-hidden="true"></i>';
    case 'address': return '<i class="fa fa-home" aria-hidden="true"></i>';
    case 'street':  return '<i class="fa fa-road" aria-hidden="true"></i>';
    default:        return '<i class="fa fa-globe" aria-hidden="true"></i>';
  }
}

function buildPlaceLink(record) {
  return window.location.origin + window.location.pathname + '?' +
    buildPlaceQueryURIParams({ids: record.properties.gid});
}

function addErrors(containerEl, results) {
  if (results.geocoding.errors && results.geocoding.errors.length > 0) {
    results.geocoding.errors.forEach(function (error) {
      var label = document.createElement('div');
      label.className = "alert alert-danger";
      label.role = "alert";
      label.innerHTML = '[ERROR] ' + error;
      containerEl.appendChild(label);
    });
  }
}

function addWarnings(containerEl, results) {

  if (results.geocoding.warnings && results.geocoding.warnings.length > 0) {
    results.geocoding.warnings.forEach(function (error) {
      var label = document.createElement('div');
      label.className = "alert alert-warning";
      label.role = "alert";
      label.innerHTML = '[WARNING] ' + error;
      containerEl.appendChild(label);
    });
  }
}