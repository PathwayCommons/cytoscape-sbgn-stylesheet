module.exports = (cy) => {
  // TODO fold compartments as necessary 

  cy.layout({
    name: 'cose-bilkent',
    nodeRepulsion: 4500,
    idealEdgeLength: 50,
    edgeElasticity: 0.45,
    nestingFactor: 0.1,
    gravity: 0.25,
    numIter: 2500,
    tile: false,
    animationEasing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    animate: 'end',
    animationDuration: 1000,
    randomize: true,
    tilingPaddingVertical: 20,
    tilingPaddingHorizontal: 20,
    gravityRangeCompound: 1.5,
    gravityCompound: 1.0,
    gravityRange: 3.8,
  }).run();
};
