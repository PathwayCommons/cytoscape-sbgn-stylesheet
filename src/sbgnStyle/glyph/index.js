const containerNodes = require('./containerNodes.js');
const entityPoolNodes = require('./entityPoolNodes.js');
const processNodes = require('./processNodes.js');

const sbgnData = require('../util/sbgn.js');

const sbgnNodeShapeMap = new Map()
// process nodes
.set('process', processNodes.process)
.set('omitted process', processNodes.process)
.set('uncertain process', processNodes.process)
.set('association', processNodes.association)
.set('dissociation', processNodes.dissociation)
.set('phenotype', processNodes.phenotype)

// entity pool nodes
.set('source and sink', entityPoolNodes.sourceAndSink)
.set('unspecified entity', entityPoolNodes.unspecifiedEntity)
.set('simple chemical', entityPoolNodes.simpleChemical)
.set('simple chemical multimer', entityPoolNodes.simpleChemical)
.set('macromolecule', entityPoolNodes.macromolecule)
.set('macromolecule multimer', entityPoolNodes.macromolecule)
.set('nucleic acid feature', entityPoolNodes.nucleicAcidFeature)
.set('nucleic acid feature multimer', entityPoolNodes.nucleicAcidFeature)
.set('complex', entityPoolNodes.complex)
.set('complex multimer', entityPoolNodes.complex)
.set('perturbing agent', entityPoolNodes.perturbingAgent)

// container nodes
.set('compartment', containerNodes.compartment);


const draw = (node) => {
  const sbgnClass = sbgnData.sbgnClass(node);
  let shapeFn = sbgnNodeShapeMap.get(sbgnClass);
  if (shapeFn === undefined) {
    throw new TypeError(`${sbgnClass} does not have a shape implementation`);
  }
  return shapeFn(node);
};

module.exports = {
  draw: draw
};
