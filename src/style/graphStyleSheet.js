var nodeProperties = require('./nodeProperties.js');

// A function that creates a cytoscape style sheet from a given
// cytoscape instance
var graphStyleSheet = function (cytoscape) {

  return cytoscape.stylesheet()
        .selector('node')
        .css({
          'content': function (cyNode) {
            return nodeProperties.getNodeContent(cyNode);
          },
          'font-size': function (cyNode) {
            return nodeProperties.getLabelTextSize(cyNode);
          },
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
        .selector('node[?clonemarker][class="perturbing agent"]')
        .css({
          'background-image': function () {
            return nodeProperties.getcloneMarkerImagePath();
          },
          'background-position-x': '50%',
          'background-position-y': '100%',
          'background-width': '100%',
          'background-height': '25%',
          'background-fit': 'none',
          'background-image-opacity': function (cyNode) {
            if (!cyNode.data('clonemarker')) {
              return 0;
            }
            return cyNode.css('background-opacity');
          }
        })
        .selector('node[class]')
        .css({
          'shape': function (cyNode) {
            return nodeProperties.getCyShape(cyNode);
          }
        })
        .selector('node[class="perturbing agent"]')
        .css({
          'shape-polygon-points': '-1, -1,   -0.5, 0,  -1, 1,   1, 1,   0.5, 0, 1, -1'
        })
        .selector('node[class="tag"]')
        .css({
          'shape-polygon-points': '-1, -1,   0.25, -1,   1, 0,    0.25, 1,    -1, 1'
        })
        .selector('node[class="association"]')
        .css({
          'background-color': '#6B6B6B'
        })
        .selector('node[class="complex"]')
        .css({
          'background-color': '#F4F3EE',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })
        .selector('node[class="compartment"]')
        .css({
          'border-width': 3.75,
          'background-opacity': 0,
          'background-color': '#FFFFFF',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })
        .selector('node[bbox][class][class!="complex"][class!="compartment"][class!="submap"]')
        .css({
          'width': 'data(bbox.w)',
          'height': 'data(bbox.h)'
        })
        .selector('node[expanded-collapsed="collapsed"]')
        .css({
          'width': 36,
          'height': 36
        })
        .selector('node:selected')
        .css({
          'border-color': '#d67614',
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
          'text-border-color': function (cyNode) {
            if (cyNode.selected()) {
              return '#d67614';
            }
            return cyNode.css('line-color');
          },
          'color': function (cyNode) {
            if (cyNode.selected()) {
              return '#d67614';
            }
            return cyNode.css('line-color');
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
          'source-label': function (cyNode) {
            return '' + cyNode.data('cardinality');
          },
          'source-text-margin-y': '-10',
          'source-text-offset': function (cyNode) {
            return nodeProperties.getCardinalityDistance(cyNode);
          }
        })
        .selector('edge[class="production"][cardinality > 0]')
        .css({
          'target-label': function (cyNode) {
            return '' + cyNode.data('cardinality');
          },
          'target-text-margin-y': '-10',
          'target-text-offset': function (cyNode) {
            return nodeProperties.getCardinalityDistance(cyNode);
          }
        })
        .selector('edge[class]')
        .css({
          'target-arrow-shape': function (cyNode) {
            return nodeProperties.getCyArrowShape(cyNode);
          },
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

module.exports = graphStyleSheet;
