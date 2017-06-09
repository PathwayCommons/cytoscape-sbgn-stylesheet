const sbgnData = require('./util/sbgn.js');

const sbgnStyle = new Map()
.set('unspecified entity', {w: 32, h: 32, shape: 'ellipse'})
.set('simple chemical', {w: 48, h: 48, shape: 'ellipse'})
.set('simple chemical multimer', {w: 48, h: 48, shape: 'ellipse'})
.set('macromolecule', {w: 96, h: 48, shape: 'roundrectangle'})
.set('macromolecule multimer', {w: 96, h: 48, shape: 'roundrectangle'})
.set('nucleic acid feature', {w: 96, h: 48, shape: 'bottomroundrectangle'})
.set('nucleic acid feature multimer', {w: 96, h: 48, shape: 'bottomroundrectangle'})
.set('complex', {w: 0, h: 0, shape: 'cutrectangle'})
.set('complex multimer', {w: 0, h: 0, shape: 'cutrectangle'})
.set('source and sink', {w: 60, h: 60, shape: 'polygon'})
.set('perturbing agent', {w: 140, h: 60, shape: 'concavehexagon'})

.set('phenotype', {w: 140, h: 60, shape: 'hexagon'})
.set('process', {w:25, h: 25, shape: 'square'})
.set('uncertain process', {w:25, h: 25, shape: 'square'})
.set('omitted process', {w:25, h: 25, shape: 'square'})
.set('association', {w:25, h: 25, shape: 'ellipse'})
.set('dissociation', {w:25, h: 25, shape: 'ellipse'})

.set('compartment', {w: 200, h: 150, shape: 'barrel'})

.set('tag', {w: 100, h: 65, shape: 'tag'})
.set('and', {w: 40, h: 40, shape: 'ellipse'})
.set('or', {w: 40, h: 40, shape: 'ellipse'})
.set('not', {w: 40, h: 40, shape: 'ellipse'});

const sbgnArrowMap = new Map()
.set('necessary stimulation', 'triangle-cross')
.set('inhibition', 'tee')
.set('catalysis', 'circle')
.set('stimulation', 'triangle')
.set('production', 'triangle')
.set('modulation', 'diamond');


const scaledTextSize = (height, sizeCoefficient = 1) => {
  return (height / 2.45) * sizeCoefficient;
};

const elementStyle = {
  sbgnShape (node) {
    const sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    const style = sbgnStyle.get(sbgnClass);
    return style ? style.shape : 'ellipse';
  },

  sbgnArrowShape (edge) {
    const sbgnClass = sbgnData.sbgnClass(edge);
    const shape = sbgnArrowMap.get(sbgnClass);
    return shape ? shape : 'none';
  },

  sbgnContent (node) {
    const sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    let content = sbgnData.sbgnLabel(node);

    if (sbgnClass == 'and') {
      content = 'AND';
    }
    if (sbgnClass == 'or') {
      content = 'OR';
    }
    if (sbgnClass == 'not') {
      content = 'NOT';
    }
    if (sbgnClass == 'omitted process') {
      content = '\\\\';
    }
    if (sbgnClass == 'uncertain process') {
      content = '?';
    }

    return content;
  },

  dimensions (node) {
    const sbgnClass = sbgnData.sbgnClass(node);
    const dim = sbgnStyle.get(sbgnClass);
    if (dim == null) {
      throw new TypeError(`${sbgnClass} does not have a default width / height`);
    }
    return dim;
  },

  width (node) {
    return this.dimensions(node).w;
  },

  height (node) {
    return this.dimensions(node).h;
  },

  labelTextSize (node) {
    const sbgnClass = sbgnData.sbgnClass(node);
    const textScalingConstant = 40;

    if (sbgnClass === 'association' || sbgnClass === 'dissociation') {
      return 20;
    }
    if (sbgnClass.includes('complex')) {
      return 16;
    }

    if (sbgnClass === 'compartment') {
      return 50;
    }

    if (sbgnClass.endsWith('process')) {
      return scaledTextSize(textScalingConstant, 1.5);
    }

    return scaledTextSize(textScalingConstant);
  },

  cardinalityDistance (edge) {
    const srcPos = edge.source().position();
    const tgtPos = edge.target().position();

    const distance = Math.sqrt(Math.pow((srcPos.x - tgtPos.x), 2) + Math.pow((srcPos.y - tgtPos.y), 2));
    return distance * 0.15;
  }
};

module.exports = elementStyle;
