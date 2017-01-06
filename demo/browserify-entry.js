/* global $ */

import SBGNViz from '../src/index';

var convertSbgnml = require('sbgnml-to-cytoscape');
var defaultData = require('./test-data');

var readFile = function (file, renderer) {
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

  var compounds = cy.nodes().filter('$node > node');
  compounds.css('padding-left', 5);
  compounds.css('padding-right', 5);
  compounds.css('padding-top', 5);
  compounds.css('padding-bottom', 5);

  cy.endBatch();
  cy.style().update();
};

$(document).ready(function () {

  var container = $('#sbgn-network-container');

  var renderer = new SBGNViz({
    container: container
  });

  renderGraph(renderer, defaultData);

  $('#graph-load').click(function () {
    $('#graph-input').trigger('click');
  });

  $('#graph-input').change(function () {
    if ($(this).val() != '') {
      var file = this.files[0];

      readFile(file, renderer);
    }
  });

});
