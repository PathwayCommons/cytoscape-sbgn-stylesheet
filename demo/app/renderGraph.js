const convertSbgnml = require('sbgnml-to-cytoscape');

const removeDisconnectedNodes = (cy) => {
  const compartmentChildren = cy.nodes('[class="compartment"]').children();
  compartmentChildren.filterFn((ele) => ele.neighborhood().length === 0).remove();
};

const expandCollapseComplexNodes = (cy) => {
  const complexChildrenMap = new Map();

  const complexes = cy.nodes('[class="complex"], [class="complex multimer"]');
  complexes.forEach((ele) => {
    complexChildrenMap.set(ele.id(), ele.descendants());
  });
  complexes.descendants().remove();

  cy.on('tap', 'node[class="complex"], node[class="complex multimer"]', {}, (evt) => {

    const node = evt.target;
    const children = complexChildrenMap.get(node.id());
    if (children.removed()) {
      children.restore();
    } else {
      children.remove();
    }
  });
};

const reduceGraphComplexity = (cy) => {

  removeDisconnectedNodes(cy);
  expandCollapseComplexNodes(cy);
};

const renderGraph = (cy, sbgnmlText) => {
  const graphJSON = convertSbgnml(sbgnmlText);
  const trimmedGraph = graphJSON;

  cy.batch(function(){
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
      padding: 50
    }).run();
  });

  reduceGraphComplexity(cy);
};

module.exports = renderGraph;
