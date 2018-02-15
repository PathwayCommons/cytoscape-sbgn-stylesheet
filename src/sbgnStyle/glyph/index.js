const memoize = require('lodash.memoize');

const containerNodes = require('./containerNodes.js');
const entityPoolNodes = require('./entityPoolNodes.js');
const processNodes = require('./processNodes.js');

const sbgnData = require('../util/sbgn.js');

const cacheKeyFn = (node) => '' + JSON.stringify(node.id());

const sbgnNodeShapeMap = new Map()
// process nodes
.set('dissociation', memoize(processNodes.dissociation, cacheKeyFn))
.set('phenotype', memoize(processNodes.phenotype, cacheKeyFn))

// entity pool nodes
.set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn))
.set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn))
.set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn))
.set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn))
.set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn))
.set('complex', memoize(entityPoolNodes.complex, cacheKeyFn))
.set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn))

// container nodes
.set('compartment', memoize(containerNodes.compartment, cacheKeyFn));


const draw = (node) => {
  const sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
  let shapeFn = sbgnNodeShapeMap.get(sbgnClass);
  if (shapeFn == null) {
    throw new TypeError(`${sbgnClass} does not have a shape implementation`);
  }
  return shapeFn(node);
};

module.exports = {
  draw: draw
};
