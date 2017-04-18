const elementStyle = require('./element.js');

const sbgnShapes = require('./glyph');
const sbgnDimensions = require('./dimensions');

const isMultimer = require('./util/sbgn.js').isMultimer;
const hasAuxItems = require('./util/sbgn.js').hasAuxItems;

var sbgnStyleSheet = function (cytoscape) {

  return cytoscape.stylesheet()
        // general node style
        .selector('node')
        .css({
          'shape': (node) => elementStyle.sbgnShape(node),
          'content': (node) => elementStyle.sbgnContent(node),
          'font-size': (node) => elementStyle.labelTextSize(node),
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'background-opacity': 0.5,
          'text-opacity': 1,
          'opacity': 1
        })
        .selector('node:selected')
        .css({
          'background-color': '#d67614',
          'target-arrow-color': '#000',
          'text-outline-color': '#000'
        })
        .selector('node:active')
        .css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '14'
        })


        // every process/entity pool node needs these properties
        .selector(`
          node[class="process"], node[class="uncertain process"], node[class="omitted process"],
          node[class="association"], node[class="dissociation"],
          node[class="phenotype"],
          node[class="source and sink"],
          node[class="perturbing agent"],
          node[class="unspecified entity"],
          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],
          node[class="macromolecule"], node[class="macromolecule multimer"],
          node[class="simple chemical"], node[class="simple chemical multimer"]
        `)
        .css({
          'background-image': (node) => sbgnShapes.draw(node),
          'width': (node) => sbgnDimensions.width(node),
          'height': (node) => sbgnDimensions.height(node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
        })


        // process node specific style
        .selector('node[class="association"], node[class="dissociation"]')
        .css({
          'background-opacity': 1
        })
        .selector('node[class="association"]')
        .css({
          'background-color': '#6B6B6B'
        })


        // entity pool node specific styles
        .selector('node[class="source and sink"]')
        .css({
          'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0',
        })
        .selector('node[class="tag"]')
        .css({
          'width': (node) => sbgnDimensions.width(node),
          'height': (node) => sbgnDimensions.height(node),
          'shape-polygon-points': '-1, -1,   0.25, -1,   1, 0,    0.25, 1,    -1, 1'
        })
        .selector('node[class="perturbing agent"]')
        .css({
          'shape-polygon-points': '-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95',
        })


        // entity pool nodes that have one or more of (units of information, state variables, multimer)
        .selector(`
          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],
          node[class="macromolecule"], node[class="macromolecule multimer"],
          node[class="simple chemical"], node[class="simple chemical multimer"],
          node[class="perturbing agent"]
        `)
        .css({
          'padding': (node) =>  (isMultimer(node) || hasAuxItems(node)) ? 5 : 0,
          'background-width': (node) =>  (isMultimer(node) || hasAuxItems(node)) ? '120%' : '100%',
          'background-height': (node) =>  (isMultimer(node) || hasAuxItems(node)) ? '120%' : '100%',
        })


        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]')
        .css({
          'border-width': 4,
          'compound-sizing-wrt-labels': 'exclude',
          'background-opacity': .2,
          'text-valign': 'bottom',
          'text-halign': 'center',
          // 'min-width': (node) => sbgnDimensions.width(node),
          'min-height': 200,
          'min-height-bias-bottom': '0%',
          'min-height-bias-top': '100%',
        })

        .selector('node[class="complex"], node[class="complex multimer"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node), // cache this
          'background-width': ['100%'],
          // 'background-height': ['15%', '15%'],
          'background-position-x': ['20%', '10%', '80%'],
          'background-position-y': ['100%', '100%', '100%'],
          'background-fit': ['contain', 'none', 'none'],
          'background-clip': ['none'],
          'padding': 0
        })

        .selector('node[class="compartment"]')
        .css({
          'padding': '5%',
          'padding-relative-to': 'average',
        })

        // edge styling
        .selector('edge')
        .css({
          'curve-style': 'bezier',
          'line-color': '#555',
          'target-arrow-fill': 'hollow',
          'source-arrow-fill': 'hollow',
          'width': 1.5,
          'target-arrow-color': '#555',
          'source-arrow-color': '#555',
          'text-border-color': '#555',
          'color': '#555'
        })
        .selector('edge:selected')
        .css({
          'color': '#d67614',
          'line-color': '#d67614',
          'text-border-color': '#d67614',
          'source-arrow-color': '#d67614',
          'target-arrow-color': '#d67614'
        })
        .selector('edge:active')
        .css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '8'
        })
        .selector('edge[cardinality > 0]')
        .css({
          'text-rotation': 'autorotate',
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        })
        .selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]')
        .css({
          'source-label': (edge) => '' + edge.data('cardinality'),
          'source-text-margin-y': '-10',
          'source-text-offset': (edge) => elementStyle.cardinalityDistance(edge)
        })
        .selector('edge[class]')
        .css({
          'target-arrow-shape': (edge) => elementStyle.sbgnArrowShape(edge),
          'source-arrow-shape': 'none'
        })
        .selector('edge[class="inhibition"]')
        .css({
          'target-arrow-fill': 'filled'
        })
        .selector('edge[class="production"]')
        .css({
          'target-arrow-fill': 'filled'
        })


        // core
        .selector('core')
        .css({
          'selection-box-color': '#d67614',
          'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
        });
};

module.exports = sbgnStyleSheet;
