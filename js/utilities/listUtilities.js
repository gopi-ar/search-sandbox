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

      var linkText = document.createElement('a');
      linkText.textContent = '    ' + record.properties.label;
      linkText.setAttribute('href', linkPath);


      label.appendChild(icon);
      label.appendChild(linkText);

      listEl.appendChild(label);
    });
    containerEl.appendChild(listEl);
  }
}

function selectIcon(record) {
  var i = document.createElement('i');
  i.setAttribute('aria-hidden', true);
  i.classList.add('fa');

  switch (record.properties.layer) {
    case 'venue':   i.classList.add('fa-building'); break;
    case 'address': i.classList.add('fa-home'); break;
    case 'street':  i.classList.add('fa-road'); break;
    default:        i.classList.add('fa-globe');
  }
  return i;
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