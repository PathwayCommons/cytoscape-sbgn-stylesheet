const convertSbgnml = require('sbgnml-to-cytoscape');

const trimGraph = (graphJSON) => {
  // get all complex ids into a set
  // for each node, if it's parent is in this set, remove it
  const complexes = graphJSON.nodes.filter((node) => {
    return node.data.class.includes('complex');
  });
  const complexSet = new Set(complexes);

  const filteredChildren = graphJSON.nodes.filter((node) => {
    return !complexSet.has(node.data.parent);
  });
  const childrenSet = new Set(filteredChildren);

  const filteredEdges = graphJSON.edges.filter((edge) => {
    return !childrenSet.has(edge.source) || !childrenSet.has(edge.target);
  });

  return {
    nodes: filteredChildren,
    edges: filteredEdges
  };
  // return graphJSON;
};

const renderGraph = (cy, fileText) => {
  const graphJSON = convertSbgnml(fileText);
  const trimmedGraph = trimGraph(graphJSON);

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

  cy.endBatch();
  cy.style().update();

  // const ecAPI = cy.expandCollapse();
  // ecAPI.collapseRecursively(cy.nodes('[class="complex"]'));
  // ecAPI.collapseRecursively(cy.nodes('[class="complex multimer"]'));
};

module.exports = renderGraph;
