const elementStyle = require('./element');
const sbgnsvg = require('./glyph');

const sbgnStyleSheet = function (cytoscape) {

  return cytoscape.stylesheet()
        // general node style
        .selector('node')
        .css({
          'shape': (node) => elementStyle.sbgnShape(node),
          'content': (node) => elementStyle.sbgnContent(node),
          'font-size': (node) => elementStyle.labelTextSize(node),
          'width': (node) => elementStyle.width(node),
          'height': (node) => elementStyle.height(node),
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'background-opacity': 0.5,
          'text-opacity': 1,
          'opacity': 1,
          'text-outline-color': 'white',
          'text-outline-opacity': 1,
          'text-outline-width': 0.75
        })
        .selector('node:selected')
        .css({
          'background-color': '#d67614',
          'target-arrow-color': '#000',
          'text-outline-color': '#000'
        })
        .selector('node:active')
        .css({
          'background-opacity': 0.7,
          'overlay-color': '#d67614',
          'overlay-padding': '14'
        })

        .selector(`
          node[class="unspecified entity"],
          node[class="phenotype"],
          node[class="perturbing agent"],
          node[class="macromolecule"], node[class="macromolecule multimer"],
          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],
          node[class="simple chemical"], node[class="simple chemical multimer"]
        `)
        .css({
          'background-image': (node) => sbgnsvg.draw(node),
          'background-width': ['100%', '100%', '100%'],
          'background-position-x': ['0%', '0%', '0%', '5px', '70px'],          // order: line, line, clonemarker, uinfo, svar
          'background-position-y': ['100%', '8px', '100%', '0%', '0%'],
          'background-fit': ['cover', 'cover', 'none', 'none'],
          'background-clip': 'node',
          'padding': '8px',
          'border-width': 2
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
          'background-image': (node) => sbgnsvg.draw(node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0',
        })

        .selector('node[class="dissociation"]')
        .css({
          'background-image': (node) => sbgnsvg.draw(node),
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
        })

        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]')
        .css({
          'border-width': 4,
          'compound-sizing-wrt-labels': 'exclude',
          'background-opacity': .2,
          'text-valign': 'bottom',
          'text-halign': 'center',
        })

        .selector('node[class="complex"], node[class="complex multimer"]')
        .css({
          'background-image': (node) => sbgnsvg.draw(node),
          'background-width': ['100%', '100%', '100%'],
          'background-position-x': ['0%', '0%', '0%', '25%', '88%'],          // order: line, line, clonemarker, uinfo, svar
          'background-position-y': ['100%', '11px', '100%', '0%', '0%'],
          'background-fit': ['none', 'none', 'none', 'none'],
          'background-clip': 'node',
          'padding': '22px'
        })

        .selector('node[class="compartment"]')
        .css({
          'background-image': (node) => sbgnsvg.draw(node), // cache this
          'background-width': ['100%'],
          'background-position-x': ['0%', '25%'],          // order: line, uinfo
          'background-position-y': ['19px', '0%'],
          'background-fit': ['contain', 'none'],
          'background-clip': 'node',
          'padding': '38px'
        })

        // TODO: cached version of multi-img compounds
        // .selector('node[class="complex"], node[class="complex multimer"]')
        // .css({
        //   // function that generates the bg image and properties
        //   // 'background-image': (node) => sbgnsvg.draw(node).images, // generate img and img properties
        //   // 'background-width': (node) => sbgnsvg.draw(node).widths
        //   // 'background-height': (node) => sbgnsvg.draw(node).heights
        //   // 'background-position-x': (node) => sbgnsvg.draw(node).xPositions
        //   // 'background-position-y': (node) => sbgnsvg.draw(node).yPositions
        //   // 'background-fit': (node) => sbgnsvg.draw(node).imgFits
        //   // 'background-clip': (node) => sbgnsvg.draw(node).imgClips
        // })

        // edge styling
        .selector('edge')
        .css({
          'arrow-scale': 1.75,
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
