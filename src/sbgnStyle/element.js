const sbgnData = require('./util/sbgn.js');
var elementStyle = {};

elementStyle.sbgnShape = (node) => {
  let sbgnClass = sbgnData.sbgnClass(node);
  if (sbgnClass.endsWith(' multimer')) {
    sbgnClass = sbgnClass.replace(' multimer', '');
  }

  if (sbgnClass == 'phenotype') {
    return 'hexagon';
  }

  if (sbgnClass == 'compartment') {
    return 'barrel';
  }

  if (sbgnClass == 'process' || sbgnClass == 'omitted process' || sbgnClass == 'uncertain process') {
    return 'square';
  }

  if (sbgnClass == 'perturbing agent' || sbgnClass == 'tag'
    || sbgnClass == 'source and sink') {
    return 'polygon';
  }

  if (sbgnClass == 'dissociation' || sbgnClass == 'association' || sbgnClass == 'simple chemical') {
    return 'ellipse';
  }

  if ( sbgnClass == 'nucleic acid feature' || sbgnClass == 'macromolecule') {
    return 'roundrectangle';
  }

  if (sbgnClass == 'complex') {
    return 'cutrectangle';
  }
  return 'ellipse';
};

elementStyle.sbgnArrowShape = (edge) => {
  let sbgnClass = sbgnData.sbgnClass(edge);
  if (sbgnClass == 'necessary stimulation') {
    return 'triangle-cross';
  }
  if (sbgnClass == 'inhibition') {
    return 'tee';
  }
  if (sbgnClass == 'catalysis') {
    return 'circle';
  }
  if (sbgnClass == 'stimulation' || sbgnClass == 'production') {
    return 'triangle';
  }
  if (sbgnClass == 'modulation') {
    return 'diamond';
  }
  return 'none';
};

elementStyle.sbgnContent = (node) => {
  let sbgnClass = sbgnData.sbgnClass(node);
  let content = '';

  if (sbgnClass.endsWith(' multimer')) {
    sbgnClass = sbgnClass.replace(' multimer', '');
  }

  if (sbgnClass === 'macromolecule' || sbgnClass === 'simple chemical'
      || sbgnClass === 'phenotype'
      || sbgnClass === 'unspecified entity' || sbgnClass === 'nucleic acid feature'
      || sbgnClass === 'perturbing agent' || sbgnClass === 'tag'
      || sbgnClass === 'compartment' || sbgnClass === 'complex') {
    content = node.data('label') ? node.data('label') : '';
  }
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
};

const scaledTextSize = (height, sizeCoefficient = 1) => {
  return (height / 2.45) * sizeCoefficient;
};

elementStyle.labelTextSize = (node) => {
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
};

elementStyle.cardinalityDistance = (edge) => {
  const srcPos = edge.source().position();
  const tgtPos = edge.target().position();

  const distance = Math.sqrt(Math.pow((srcPos.x - tgtPos.x), 2) + Math.pow((srcPos.y - tgtPos.y), 2));
  return distance * 0.15;
};

module.exports = elementStyle;
