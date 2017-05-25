function redirectToQuery(e) {
  if (e.keyCode == 13) {

    onSend();

    event.preventDefault();
    return false;
  }
  else {
    document.getElementById('query-preview').innerHTML = '<h4>' + buildSearchQueryPreview() + '</h4>';
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
  window.location.href = window.location.origin + window.location.pathname + '?query=search';
}

function onLoad() {
  renderParams('search');
  loadURIParams('search');
  document.getElementById('query-preview').innerHTML = '<h4>' + buildSearchQueryPreview() + '</h4>';
  query();
}

function renderParams(endpoint) {

  switch (endpoint) {
    case 'search':
      renderSearchParams();
      break;
  }

}

function loadURIParams(endpoint) {

  switch (endpoint) {
    case 'search':
      loadSearchParams(getAllUrlParams());
      break;
  }
}