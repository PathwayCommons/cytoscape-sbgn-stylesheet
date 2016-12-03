var augmentCytoscape = require('./augmentCytoscape');
var graphStyle = require('./style/graphStyle');
var util = require('./util');

// SbgnRenderer needs specific libraries to work, but we dont want to
// include them in the dist script so they need to be passed in.

var SbgnRenderer = function (opts, libs) {
  if (!(this instanceof SbgnRenderer)) {
    return new SbgnRenderer();
  }
  // change this to augmentCytoscape(cytoscape, jquery, augmentedFunctions)
  augmentCytoscape(libs.cytoscape, libs.jquery);

  this.opts = opts;
  this.libs = libs;

  this.cy = libs.cytoscape({
    container: opts.container,
    style: graphStyle(libs.cytoscape),
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
SbgnRenderer.renderGraph = function (cytoscapeGraphJson) {
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

  var compoundPadding = this.opts.compoundPadding || 10;

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
};

SbgnRenderer.saveAsPng = function (filename) {
  var pngContent = this.cy.png({scale: 3, full: true});

  var b64Data = pngContent.substr(pngContent.indexOf(',') + 1);

  var fileBlob = util.b64toBlob(b64Data, 'image/png');

  this.libs.filesaverjs.saveAs(fileBlob, filename);
};

SbgnRenderer.saveAsJpg = function (filename) {
  var jpgContent = this.cy.jpg({scale: 3, full: true});

  var b64Data = jpgContent.substr(jpgContent.indexOf(',') + 1);

  var fileBlob = util.b64toBlob(b64Data, 'image/jpeg');

  this.libs.filesaverjs.saveAs(fileBlob, filename);
};

module.exports = SbgnRenderer;
