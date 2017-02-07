/* global $ */

import SBGNRenderer from '../src/index';

var convertSbgnml = require('sbgnml-to-cytoscape');
var saveAs = require('file-saver').saveAs;

var defaultData = require('./test-data');

var loadFileText = function (absFilePath) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else {
    xhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhttp.open('GET', absFilePath, false);
  xhttp.send();
  return xhttp.responseText;
};

var readFile = function (renderer, file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var graph = convertSbgnml(e.target.result);
    renderGraph(renderer, graph);

  };

  reader.readAsText(file);
};

var renderGraph = function (cy, cyGraph) {
  cy.startBatch();
  cy.remove('*');
  cy.add(cyGraph);

  var nodePositions = {};
  for (var i = 0; i < cyGraph.nodes.length; i++) {
    var xPos = cyGraph.nodes[i].data.bbox.x;
    var yPos = cyGraph.nodes[i].data.bbox.y;
    nodePositions[cyGraph.nodes[i].data.id] = {'x': xPos, 'y': yPos};
  }

  cy.layout({
    name: 'preset',
    positions: nodePositions,
    fit: true,
    padding: 50
  });

  // var compounds = cy.nodes().filter('$node > node');
  // compounds.css('padding-left', 5);
  // compounds.css('padding-right', 5);
  // compounds.css('padding-top', 5);
  // compounds.css('padding-bottom', 5);

  cy.endBatch();
  cy.style().update();
};

var b64toBlob = function (b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
};

var save = function (renderer, filename) {
  var graphFileString = renderer.png({scale: 3, full: true});

  var b64Data = graphFileString.substr(graphFileString.indexOf(',') + 1);
  saveAs(b64toBlob(b64Data, 'image/png'), filename);
};

$(document).ready(function () {

  var container = $('#sbgn-network-container');

  var renderer = new SBGNRenderer({
    container: container,
    textureOnViewport: false
  });

  window.renderer = renderer;
  renderGraph(renderer, defaultData);

  $('#graph-load').click(function () {
    $('#graph-input').trigger('click');
  });

  $('#graph-input').change(function () {
    if ($(this).val() != '') {
      var file = this.files[0];

      readFile(renderer, file);
    }
  });

  $('#graph-save').click(function () {
    save(renderer, 'graph');
  });

  $('.sample-file').click(function () {
    var fileText = loadFileText('samples/' + $(this)[0].innerText + '.xml');
    var graphJson = convertSbgnml(fileText);
    renderGraph(renderer, graphJson);
  });

});
