var sbgnShapes = {
  'source and sink': true,
  'nucleic acid feature': true,
  'complex': true,
  'dissociation': true,
  'macromolecule': true,
  'simple chemical': true,
  'unspecified entity': true,
  'necessary stimulation': true,
  'process': true,
  'uncertain process': true,
  'omitted process': true,
  'association': true
};

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