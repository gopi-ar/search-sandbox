function createParam(name, inputWidth, labelWidth) {
  var paramEl = document.createElement('div');

  paramEl.className = "no-margin form-group row";
  paramEl.id = "param-" + name;

  paramEl.innerHTML =
    '<input class="col-xs-' + inputWidth + ' param-input" type="text" ' +
    'id="input-' + name + '" onkeyup="return redirectToQuery(event)">' +
    '<label class="col-xs-' + labelWidth + ' param-label">=' + name + '</label>';

  return paramEl;
}

function createExpandableGroup(name, innerBorder) {
  var expandEl = document.createElement('details');
  expandEl.className = 'no-margin form-group row';

  var summaryEl = document.createElement('summary');
  summaryEl.innerHTML = '<label>' + name + '</label>';

  expandEl.appendChild(summaryEl);

  if (innerBorder) {
    var innerBorderEl = document.createElement('div');
    innerBorderEl.className = 'thin-border inner-summary';
    expandEl.appendChild(innerBorderEl);
  }

  return expandEl;
}

function setFocus(paramName) {
  document.getElementById('input-' + paramName).focus();
}
