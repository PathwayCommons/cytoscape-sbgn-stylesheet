const convertSbgnml = require('sbgnml-to-cytoscape');

module.exports = (cy, sbgnmlText) => {
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
  });

};
