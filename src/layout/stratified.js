const ontologyOrderMap = new Map()
.set('extracellular_region', 0)
.set('plasma_membrane', 1)
.set('cytoplasm', 2)
.set('cytosol', 3)
.set('Cytosol', 3)
.set('integral_to_membrane', 4)
.set('membrane_raft', 5)
.set('endosome', 7)
.set('early_endosome_membrane', 6)
.set('late_endosome', 8)
.set('nucleus', 9)
.set('Nucleoplasm', 10)
.set('mitochondria', 11)
.set('mitochondrial_outer_membrane', 12)
.set('mitochondrial_inner_membrane', 13)
.set('mitochondrial matrix', 14)
.set('golgi_apparatus', 15)
.set('peroxisome_membrane', 16);

const ontologyLabelOrder = (ontologyLabel) => ontologyOrderMap.get(ontologyLabel);

module.exports = function (cy) {
  const bridgeEdges = cy.edges().filter((edge) => {
    return edge.source().parent() !== edge.target().parent();
  });
  bridgeEdges.remove();

  const compartments = cy.nodes('[class="compartment"]')
    .sort((a, b) => ontologyLabelOrder(a.data('id')) - ontologyLabelOrder(b.data('id')));
  const totalChildren = compartments.children().size() ? compartments.children().size() : 1;

  let compartmentRegionX = 100;
  let compartmentRegionY = 100;
  const compartmentRegionW = 1.25 * cy.width();
  const compartmentRegionH = cy.height();  // TODO: this seems buggy, lots of compartments => not enough height


  compartments.forEach(function (compartment) {
    let children = compartment.children();
    const childrenProportion = compartment.children().size() / totalChildren;
    const regionH = Math.max(childrenProportion * compartmentRegionH, 100);

    const compartmentRegion = {
      x: compartmentRegionX,
      y: compartmentRegionY,
      w: compartmentRegionW,
      h: regionH
    };
    compartmentRegionY += regionH +  200;
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
