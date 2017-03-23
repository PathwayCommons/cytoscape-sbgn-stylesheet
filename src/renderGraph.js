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
  const graphJSON = convertSbgnml(sbgnmlText)

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
  });

  reduceGraphComplexity(cy);
};

module.exports = renderGraph;
