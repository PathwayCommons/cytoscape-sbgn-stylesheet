const convertSbgnml = require('sbgnml-to-cytoscape');

const biologyLayouts = require('./layout');

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

const renderGraph = (cy, sbgnmlText, layout='default') => {
  const graphJSON = convertSbgnml(sbgnmlText);

  cy.batch(function(){
    cy.remove('*');
    cy.add(graphJSON);

    reduceGraphComplexity(cy);
    biologyLayouts.get(layout)(cy, graphJSON);

  });

};

module.exports = renderGraph;
