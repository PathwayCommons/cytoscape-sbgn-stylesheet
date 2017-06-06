const sbgnData = require('./util/sbgn.js');
var elementStyle = {};

const sbgnShapeMap = new Map()
.set('phenotype', 'hexagon')
.set('compartment', 'barrel')
.set('process', 'square')
.set('omitted process', 'square')
.set('uncertain process', 'square')
.set('perturbing agent', 'concavehexagon')
.set('tag', 'tag')
.set('source and sink', 'polygon')
.set('dissociation', 'ellipse')
.set('association', 'ellipse')
.set('simple chemical', 'ellipse')
.set('nucleic acid feature', 'bottomroundrectangle')
.set('macromolecule', 'roundrectangle')
.set('complex', 'cutrectangle');

const sbgnArrowMap = new Map()
.set('necessary stimulation', 'triangle-cross')
.set('inhibition', 'tee')
.set('catalysis', 'circle')
.set('stimulation', 'triangle')
.set('production', 'triangle')
.set('modulation', 'diamond');


elementStyle.sbgnShape = (node) => {
  const sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
  const shape = sbgnShapeMap.get(sbgnClass);
  return shape ? shape : 'ellipse';
};

elementStyle.sbgnArrowShape = (edge) => {
  const sbgnClass = sbgnData.sbgnClass(edge);
  const arrowShape = sbgnArrowMap.get(sbgnClass);
  return arrowShape ? arrowShape : 'none';
};

elementStyle.sbgnContent = (node) => {
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
