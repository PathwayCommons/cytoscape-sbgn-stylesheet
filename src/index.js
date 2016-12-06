var sbgnCytoscape = require('cytoscape-for-sbgnviz');
var augmentCytoscape = require('./augmentCytoscape');
var graphStyleSheet = require('./style/graphStyleSheet');

var SbgnRenderer = function (opts) {

  if (!(this instanceof SbgnRenderer)) {
    return new SbgnRenderer();
  }

  // we must augment cytoscape to allow us to render sbgn specific
  // graphics
  augmentCytoscape(sbgnCytoscape);

  this.opts = opts;

  this.cy = sbgnCytoscape({
    container: opts.container,
    style: graphStyleSheet(sbgnCytoscape),
    boxSelectionEnabled: opts.boxSelectionEnabled || true,
    showOverlay: opts.showOverlay || false,
    minZoom: opts.minZoom || false,
    maxZoom: opts.maxZoom || false,
    motionBlur: opts.motionBlur || false,
    wheelSensitivity: opts.wheelSensitivity || 0.1,
    ready: function () {

    }
  });
};

// Terrible,
// this should call the cytoscape add/remove functions
// perform a layout
// calculate the paddings
SbgnRenderer.prototype.renderGraph = function (cytoscapeGraphJson) {
  var cy = this.cy;

  cy.startBatch();
  cy.remove('*');
  cy.add(cytoscapeGraphJson);

  var nodePositions = {};
  for (var i = 0; i < cytoscapeGraphJson.nodes.length; i++) {
    var xPos = cytoscapeGraphJson.nodes[i].data.bbox.x;
    var yPos = cytoscapeGraphJson.nodes[i].data.bbox.y;
    nodePositions[cytoscapeGraphJson.nodes[i].data.id] = {'x': xPos, 'y': yPos};
  }

  cy.layout({
    name: 'preset',
    positions: nodePositions,
    fit: true,
    padding: 50
  });

  var nodes = cy.nodes();
  var totalPadding = 0;
  var numSimpleNodes = 0;
  for (var j = 0; j < nodes.length; j++) {
    var currNode = nodes[j];
    if (currNode.children() == null || currNode.children().length == 0) {
      totalPadding += Number(currNode.width());
      totalPadding += Number(currNode.height());
      numSimpleNodes++;
    }
  }

  var compoundPadding = this.opts.compoundPadding || 10;
  var padding = (compoundPadding / 100) * Math.floor(totalPadding / (2 * numSimpleNodes));
  if (padding < 5) {
    padding = 5;
  }

  var compounds = nodes.filter('$node > node');
  compounds.css('padding-left', padding);
  compounds.css('padding-right', padding);
  compounds.css('padding-top', padding);
  compounds.css('padding-bottom', padding);

  cy.endBatch();
  cy.style().update();
};

module.exports = SbgnRenderer;
