const sbgnData = require('./util/sbgn.js');

const sbgnNodeDimensions = new Map()
.set('unspecified entity', {w: 40, h: 40})
.set('simple chemical', {w: 60, h: 60})
.set('simple chemical multimer', {w: 60, h: 60})
.set('macromolecule', {w: 100, h: 60})
.set('macromolecule multimer', {w: 100, h: 60})
.set('nucleic acid feature', {w: 100, h: 60})
.set('nucleic acid feature multimer', {w: 100, h: 60})
.set('complex', {w: 100, h: 50})
.set('complex multimer', {w: 275, h: 500})
.set('source and sink', {w: 100, h: 50})
.set('perturbing agent', {w: 140, h: 60})

.set('phenotype', {w: 140, h: 60})
.set('process', {w:30, h: 30})

.set('compartment', {w: 180, h: 100});


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