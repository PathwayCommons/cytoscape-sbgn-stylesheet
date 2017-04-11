const convertSbgnml = require('sbgnml-to-cytoscape');

const biologyLayout = require('./layout');

const removeDisconnectedNodes = (cy) => {
  const compartmentChildren = cy.nodes('[class="compartment"]').children();
  compartmentChildren.filterFn((ele) => ele.neighborhood().length === 0).remove();

  const danglingNodes = cy.nodes('[class != "compartment"], [class != "complex"], [class != "complex multimer"]');
  danglingNodes.filterFn((ele) => !ele.isChild() && ele.neighborhood.length === 0).remove();
};

const collapseComplexNodes = (cy) => {
  const api = cy.expandCollapse('get');
  const complexes = cy.nodes('[class="complex"], [class="complex multimer"]');
  api.collapseRecursively(complexes);
};

const reduceGraphComplexity = (cy) => {
  removeDisconnectedNodes(cy);
  collapseComplexNodes(cy);
};

const renderGraph = (cy, sbgnmlText) => {
  const graphJSON = convertSbgnml(sbgnmlText);

  cy.batch(function(){
    cy.remove('*');
    cy.add(graphJSON);

    var nodePositions = {};
    for (var i = 0; i < graphJSON.nodes.length; i++) {
      var xPos = graphJSON.nodes[i].data.bbox.x;
      var yPos = graphJSON.nodes[i].data.bbox.y;
      nodePositions[graphJSON.nodes[i].data.id] = {'x': xPos, 'y': yPos};
    }

    cy.layout({
      name: 'preset',
      positions: nodePositions,
      fit: true,
      padding: 50
    }).run();

    reduceGraphComplexity(cy);
    biologyLayout(cy);

  });

};

module.exports = renderGraph;
