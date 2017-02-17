const elementStyle = require('./element.js');
const sbgnShapes = require('./glyph');

// A function that creates a cytoscape style sheet from a given
// cytoscape instance
var sbgnStyleSheet = function (cytoscape) {

  return cytoscape.stylesheet()
        .selector('node')
        .css({
          'content': (node) => elementStyle.sbgnContent(node),
          'font-size': (node) => elementStyle.labelTextSize(node),
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'background-opacity': 0.5,
          'text-opacity': 1,
          'opacity': 1,
          'text-wrap': 'wrap',
          'text-max-width': 100,
        })
        .selector('node[class]')
        .css({
          'shape': (node) => elementStyle.sbgnShape(node)
        })
        .selector('node[class="process"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'shape': 'square',
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
        })
        .selector('node[class="uncertain process"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'shape': 'square',
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
        })
        .selector('node[class="omitted process"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'padding': (node) => Math.max(node.width(), node.height()) * 0.1,
          'shape': 'square',
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
        })
        .selector('node[class="association"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'shape': 'ellipse',
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'background-opacity': 1
        })
        .selector('node[class="dissociation"]')
        .css({
          'shape': 'ellipse',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="phenotype"]')
        .css({
          'shape': 'hexagon',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="source and sink"]')
        .css({
          'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="nucleic acid feature"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="perturbing agent"]')
        .css({
          'shape-polygon-points': '-1, -1,   -0.5, 0,  -1, 1,   1, 1,   0.5, 0, 1, -1',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="macromolecule"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="simple chemical"]')
        .css({
          'shape': 'ellipse',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'padding': (node) => Math.min(node.height(), node.width()) * .1,
          'background-fit': 'none',
          'background-width': '120%',
          'background-height': '120%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          // 'min-height': (node) => node.height() + 50,
          // 'min-height-bias-top': '50%',
          // 'min-height-bias-bottom': '50%'
        })
        .selector('node[class="simple chemical multimer"]')
        .css({
          'padding': (node) => Math.min(node.height(), node.width()) * .055,
        })
        .selector('node[class="unspecified entity"]')
        .css({
          'shape': 'ellipse',
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })
        .selector('node[class="complex"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'padding': (node) => Math.min(node.height(), node.width()) * .055,
          'background-opacity': .2,
          'background-fit': 'none',
          'background-width': '110%',
          'background-height': '110%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'text-valign': 'bottom',
          'text-halign': 'center',
          'min-height': (node) => node.width() * .75,
          'min-height-bias-top': '90%',
          'min-height-bias-bottom': '10%'
        })
        .selector('node[class="compartment"]')
        .css({
          'background-image': (node) => sbgnShapes.draw(node.data('class'), node),
          'padding': (node) => Math.max(node.height(), node.width()) * .1,
          'background-fit': 'none',
          'background-width': '110%',
          'background-height': '110%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'background-opacity': .2,
          'text-valign': 'bottom',
          'text-halign': 'center',
          'min-height': 100,
          'min-height-bias-top': '50%',
          'min-height-bias-bottom': '50%',
          'min-width': 175,
          'min-width-bias-right': '50%',
          'min-width-bias-left': '50%'
        })
        .selector('node[class="tag"]')
        .css({
          'shape-polygon-points': '-1, -1,   0.25, -1,   1, 0,    0.25, 1,    -1, 1'
        })
        .selector('node[class="association"]')
        .css({
          'background-color': '#6B6B6B'
        })
        .selector('node[bbox][class][class!="complex"][class!="compartment"][class!="submap"]')
        .css({
          'width': 'data(bbox.w)',
          'height': 'data(bbox.h)'
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
        .selector('edge')
        .css({
          'curve-style': 'bezier',
          'line-color': '#555',
          'target-arrow-fill': 'hollow',
          'source-arrow-fill': 'hollow',
          'width': 1.5,
          'target-arrow-color': '#555',
          'source-arrow-color': '#555',
          'text-border-color': (edge) => {
            if (edge.selected()) {
              return '#d67614';
            }
            return edge.css('line-color');
          },
          'color': (edge) => {
            if (edge.selected()) {
              return '#d67614';
            }
            return edge.css('line-color');
          }
        })
        .selector('edge:selected')
        .css({
          'line-color': '#d67614',
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
        .selector('edge[class="consumption"][cardinality > 0]')
        .css({
          'source-label': (edge) => '' + edge.data('cardinality'),
          'source-text-margin-y': '-10',
          'source-text-offset': (edge) => elementStyle.cardinalityDistance(edge)
        })
        .selector('edge[class="production"][cardinality > 0]')
        .css({
          'target-label': (edge) => '' + edge.data('cardinality'),
          'target-text-margin-y': '-10',
          'target-text-offset': (edge) => elementStyle.cardinalityDistance(edge)
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
        .selector('core')
        .css({
          'selection-box-color': '#d67614',
          'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
        });
};

module.exports = sbgnStyleSheet;
