const sbgnData = require('./util/sbgn.js');

const sbgnNodeDimensions = new Map()
.set('unspecified entity', {w: 40, h: 40})
.set('simple chemical', {w: 60, h: 60})
.set('simple chemical multimer', {w: 60, h: 60})
.set('macromolecule', {w: 100, h: 60})
.set('macromolecule multimer', {w: 100, h: 60})
.set('nucleic acid feature', {w: 100, h: 60})
.set('nucleic acid feature multimer', {w: 100, h: 60})
.set('complex', {w: 45, h: 45})
.set('complex multimer', {w: 225, h: 225})
.set('source and sink', {w: 60, h: 60})
.set('perturbing agent', {w: 140, h: 60})

.set('phenotype', {w: 140, h: 60})
.set('process', {w:25, h: 25})
.set('uncertain process', {w:25, h: 25})
.set('omitted process', {w:25, h: 25})
.set('association', {w:25, h: 25})
.set('dissociation', {w:25, h: 25})

.set('compartment', {w: 180, h: 100})

.set('tag', {w: 100, h: 65})
.set('and', {w: 40, h: 40})
.set('or', {w: 40, h: 40})
.set('not', {w: 40, h: 40});



const dimensions = (node) => {
  const sbgnClass = sbgnData.sbgnClass(node);
  const dim = sbgnNodeDimensions.get(sbgnClass);
  if (dim === undefined) {
    throw new TypeError(`${sbgnClass} does not have a default width / height`);
  }
  return dim;
};

const width = (node) => {
  return dimensions(node).w;
};

const height = (node) => {
  return dimensions(node).h;
};

module.exports = {
  height: height,
  width: width
};