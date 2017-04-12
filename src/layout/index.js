const ontologyOrderMap = new Map()
.set('extracellular_region', 0)
.set('plasma_membrane', 1)
.set('Cytosol', 2)
.set('early_endosome_membrane', 3)
.set('Nucleoplasm', 4);

const ontologyLabelOrder = (ontologyLabel) => ontologyOrderMap.get(ontologyLabel);

const generateCompartmentRegions = (cy) => {
  const compartments = cy.nodes('[class="compartment"]');
  const totalChildren = compartments.children().size() ? compartments.children().size() : 1;

  let compartmentRegionX = 100;
  let compartmentRegionY = 100;
  const compartmentRegionW = 1.25 * cy.width();
  const compartmentRegionH = cy.height();

  return compartments
  .sort((a, b) => ontologyLabelOrder(a.data('id')) - ontologyLabelOrder(b.data('id')))
  .map((compartment) => {
    const childrenProportion = compartment.children().size() / totalChildren;
    const regionH = childrenProportion * compartmentRegionH;
    const region = {
      x: compartmentRegionX,
      y: compartmentRegionY,
      w: compartmentRegionW,
      h: regionH
    };
    compartmentRegionY += regionH +  200;
    return region;
  });
};

module.exports = function (cy) {
  const bridgeEdges = cy.edges().filter((edge) => {
    return edge.source().parent() !== edge.target().parent();
  });
  bridgeEdges.remove();

  const compartmentRegions = generateCompartmentRegions(cy);

  const compartments = cy.nodes('[class="compartment"]')
    .sort((a, b) => ontologyLabelOrder(a.data('id')) - ontologyLabelOrder(b.data('id')));

  compartments.forEach(function (compartment) {
    let children = compartment.children();
    const compartmentId = compartment.data('id');
    const compartmentRegion = compartmentRegions[ontologyLabelOrder(compartmentId)];
    children = children.move({parent: null});

    children.positions(function (i, ele) {
      const position = {x: compartmentRegion.x + 10, y: compartmentRegion.y + 10};
      return position;
    });
    children.layout({
      name: 'cose',
      boundingBox: {
        x1: compartmentRegion.x,
        y1: compartmentRegion.y,
        w: compartmentRegion.w,
        h: compartmentRegion.h
      },
      stop: function () {
        const childPosMap = new Map();
        children.nodes().forEach(function (child) {
          childPosMap.set(child.data('id'), child.position());
        });

        children = children.move({parent: compartment.data('id')});
        children.positions(function (child) {
          return childPosMap.get(child.data('id'));
        });
        cy.fit();
      }
    }).run();
  });

  bridgeEdges.restore();

};
