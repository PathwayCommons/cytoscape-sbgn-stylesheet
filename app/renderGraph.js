const convertSbgnml = require('sbgnml-to-cytoscape');

const initGraphManager = (cy) => {
  const complexChildren = cy.nodes('[class="complex"], [class="complex multimer"]').descendants();
  // cy.remove(complexChildren);
}

const renderGraph = (cy, fileText) => {
  const graphJSON = convertSbgnml(fileText);
  const trimmedGraph = graphJSON;

  cy.startBatch();
  cy.remove('*');
  cy.add(trimmedGraph);

  var nodePositions = {};
  for (var i = 0; i < trimmedGraph.nodes.length; i++) {
    var xPos = trimmedGraph.nodes[i].data.bbox.x;
    var yPos = trimmedGraph.nodes[i].data.bbox.y;
    nodePositions[trimmedGraph.nodes[i].data.id] = {'x': xPos, 'y': yPos};
  }

  cy.layout({
    name: 'preset',
    positions: nodePositions,
    fit: true,
    padding: 100
  });


  initGraphManager(cy);

  cy.endBatch();
  cy.style().update();

};

module.exports = renderGraph;
