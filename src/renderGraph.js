const convertSbgnml = require('sbgnml-to-cytoscape');

const removeDisconnectedNodes = (cy) => {
  const compartmentChildren = cy.nodes('[class="compartment"]').children();
  compartmentChildren.filterFn((ele) => ele.neighborhood().length === 0).remove();

  const danglingNodes = cy.nodes('[class != "compartment"], [class != "complex"], [class != "complex multimer"]');
  danglingNodes.filterFn((ele) => !ele.isChild() && ele.neighborhood.length === 0).remove();
};

const expandCollapseComplexNodesBilkent = (cy) => {
  cy.expandCollapse({
    fisheye: true,
    animate: true,
    undoable: false,
    cueEnabled: false
  });

  cy.nodes().on('expandcollapse.afterexpand', function (evt) {
    const node = evt.target;
    cy.zoomingEnabled(false);
    node.children().layout({
      name:'grid',
      fit: 'false',
      avoidOverlap: true,
      condense: true,
      animate: true,
      rows: node.children().size() / 2,
      cols: node.children().size() / 2,
      boundingBox: node.boundingBox()
    }).run();
    cy.zoomingEnabled(true);
  });

  const complexes = cy.nodes('[class="complex"], [class="complex multimer"]');
  const api = cy.expandCollapse('get');

  api.collapse(complexes);

  cy.on('tap', 'node[class="complex"], node[class="complex multimer"]', (evt) => {

    const node = evt.target;
    if (api.isCollapsible(node)) {
      api.collapseRecursively(node);
    } else {
      api.expand(node);
    }
  });
};

const expandCollapseComplexNodes = (cy) => {
  const complexChildrenMap = new Map();

  const complexes = cy.nodes('[class="complex"], [class="complex multimer"]');
  complexes.forEach((ele) => {
    complexChildrenMap.set(ele.id(), ele.descendants());
  });
  complexes.descendants().remove();
  cy.on('tap', 'node[class="complex"], node[class="complex multimer"]', (evt) => {

    const node = evt.target;
    const children = complexChildrenMap.get(node.id());

    if (children) {
      if (children.removed()) {
        cy.zoomingEnabled(false);
        children.layout({
          name: 'grid',
          condense: true,
          avoidOverlap: true,
          animate: true,
          rows: children.size() / 2,
          cols: children.size() / 2,
          boundingBox: node.boundingBox()
        }).run();
        children.restore();
        cy.zoomingEnabled(true);
      } else {
        children.remove();
      }
    }
  });
};


const reduceGraphComplexity = (cy) => {
  removeDisconnectedNodes(cy);
  expandCollapseComplexNodesBilkent(cy);
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
  });

  reduceGraphComplexity(cy);
};

module.exports = renderGraph;
