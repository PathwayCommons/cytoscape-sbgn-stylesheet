var sbgnShapes = [
  'source and sink',
  'nucleic acid feature',
  'complex',
  'dissociation',
  'macromolecule',
  'simple chemical',
  'unspecified entity',
  'necessary stimulation',
  'process',
  'uncertain process',
  'omitted process',
  'association'
];

var totallyOverridenNodeShapes = {
  'macromolecule': true,
  'nucleic acid feature': true,
  'simple chemical': true,
  'complex': true,
  'unspecified entity': true,
  'process': true,
  'uncertain process': true,
  'omitted process': true,
  'dissociation': true,
  'association': true
};

module.exports = {
  sbgnShapes: sbgnShapes,
  totallyOverridenNodeShapes: totallyOverridenNodeShapes
};