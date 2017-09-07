const elementStyle = require('./element');
const sbgnsvg = require('./glyph');

const sbgnStyleSheet = function (cytoscape) {

  return cytoscape.stylesheet()
        // general node style
        .selector('node')
        .css({
          'shape': (node) => elementStyle.sbgnShape(node),
          'content': (node) => elementStyle.sbgnContent(node),
          'font-size': 20,
          'width': (node) => elementStyle.width(node),
          'height': (node) => elementStyle.height(node),
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
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
          'overlay-color': '#d67614',
          'overlay-padding': '14'
        })

        // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
        .selector(`
          node[class="unspecified entity"],
          node[class="simple chemical"], node[class="simple chemical multimer"],
          node[class="macromolecule"], node[class="macromolecule multimer"],
          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],
          node[class="perturbing agent"],
          node[class="phenotype"],
          node[class="complex"], node[class="complex multimer"], node[class="compartment"]
        `)
        .css({
          'background-image': (node) => sbgnsvg.draw(node).bgImage,
          'background-width': (node) => sbgnsvg.draw(node).bgWidth,
          'background-position-x': (node) => sbgnsvg.draw(node).bgPosX,
          'background-position-y': (node) => sbgnsvg.draw(node).bgPosY,
          'background-fit': (node) => sbgnsvg.draw(node).bgFit,
          'background-clip': (node) => sbgnsvg.draw(node).bgClip,
          'padding': (node) => sbgnsvg.draw(node).padding,
          'border-width': (node) => sbgnsvg.draw(node).borderWidth
        })

        .selector(`
          node[class="simple chemical multimer"],
          node[class="macromolecule multimer"],
          node[class="nucleic acid feature multimer"],
          node[class="complex multimer"]
        `)
        .css({
          'ghost': 'yes',
          'ghost-opacity': 1
        })

        .selector(`
          node[class="macromolecule multimer"],
          node[class="nucleic acid feature multimer"]
        `)
        .css({
          'ghost-offset-x': 12,
          'ghost-offset-y': 12
        })

        .selector(`
          node[class="simple chemical multimer"]
        `)
        .css({
          'ghost-offset-x': 5,
          'ghost-offset-y': 5
        })

        .selector(`
          node[class="complex multimer"]
        `)
        .css({
          'ghost-offset-x': 16,
          'ghost-offset-y': 16
        })

        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]')
        .css({
          'compound-sizing-wrt-labels': 'exclude',
          'text-valign': 'bottom',
          'text-halign': 'center',
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

        // source and sink and dissociation are drawn differently because
        // of their unique shape
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

        // source and sink and dissociation are drawn differently because
        // of their unique shape
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
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        })
        .selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]')
        .css({
          'source-label': (edge) => '' + edge.data('cardinality'),
          'source-text-offset': 10
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
