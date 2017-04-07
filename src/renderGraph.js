const convertSbgnml = require('sbgnml-to-cytoscape');

const removeDisconnectedNodes = (cy) => {
  const compartmentChildren = cy.nodes('[class="compartment"]').children();
  compartmentChildren.filterFn((ele) => ele.neighborhood().length === 0).remove();

  const danglingNodes = cy.nodes('[class != "compartment"], [class != "complex"], [class != "complex multimer"]');
  danglingNodes.filterFn((ele) => !ele.isChild() && ele.neighborhood.length === 0).remove();
};

const expandCollapseComplexNodesBilkent = (cy) => {
  const opts = {
    fisheye: true,
    animate: true,
    undoable: false,
    cueEnabled: false
  };
  cy.expandCollapse(opts);

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
    evt.preventDefault();
    const node = evt.target;
    if (api.isCollapsible(node, opts)) {
      api.collapse(node);
    } else {
      api.expand(node, opts);
    }
  });
};

const expandCollapseComplexNodes = (cy) => {
  const complexChildrenMap = new Map();

  const complexes = cy.nodes('[class="complex"], [class="complex multimer"]');
  complexes.forEach((ele) => {
    complexChildrenMap.set(ele.id(), {nodes: ele.descendants(), edges: ele.descendants().connectedEdges()});
  });
  complexes.descendants().remove();
  cy.on('tap', 'node[class="complex"], node[class="complex multimer"]', (evt) => {

    const node = evt.target;
    const children = complexChildrenMap.get(node.id());

    if (children) {
      if (children.nodes.removed()) {
        cy.zoomingEnabled(false);
        children.nodes.layout({
          name: 'grid',
          condense: true,
          avoidOverlap: true,
          animate: true,
          rows: 4,
          cols: 4,
          boundingBox: node.boundingBox()
        }).run();
        children.nodes.restore();
        children.edges.restore();
        cy.zoomingEnabled(true);
      } else {
        children.nodes.remove();
        children.edges.remove();
      }
    }
  });
};


const reduceGraphComplexity = (cy) => {
  removeDisconnectedNodes(cy);
  expandCollapseComplexNodes(cy);
  // expandCollapseComplexNodesBilkent(cy);
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
