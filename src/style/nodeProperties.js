
// render node properties based on SBGN

var nodeProperties = {};

nodeProperties.getCloneMarkerImgPath = function () {
  return '';
};

nodeProperties.getCyShape = function(cyNode) {
  var _class = cyNode.data('class');
  if (_class.endsWith(' multimer')) {
    _class = _class.replace(' multimer', '');
  }

  if (_class == 'compartment') {
    return 'polygon';
  }

  if (_class == 'phenotype') {
    return 'hexagon';
  }
  if (_class == 'perturbing agent' || _class == 'tag' || _class == 'source and sink') {
    return 'polygon';
  }
  if (_class == 'dissociation') {
    return 'ellipse';
  }
  if ( _class == 'nucleic acid feature'
      || _class == 'macromolecule' || _class == 'simple chemical' || _class == 'complex'
      || _class == 'unspecified entity' || _class == 'process' || _class == 'omitted process'
      || _class == 'uncertain process' || _class == 'association') {
    return _class;
  }
  return 'ellipse';
};

nodeProperties.getCyArrowShape = function(cyNode) {
  var _class = cyNode.data('class');
  if (_class == 'necessary stimulation') {
    return 'necessary stimulation';
  }
  if (_class == 'inhibition') {
    return 'tee';
  }
  if (_class == 'catalysis') {
    return 'circle';
  }
  if (_class == 'stimulation' || _class == 'production') {
    return 'triangle';
  }
  if (_class == 'modulation') {
    return 'diamond';
  }
  return 'none';
};

nodeProperties.getNodeContent = function(cyNode) {
  var _class = cyNode.data('class');

  if (_class.endsWith(' multimer')) {
    _class = _class.replace(' multimer', '');
  }

  var content = '';
  if (_class == 'macromolecule' || _class == 'simple chemical'
      || _class == 'phenotype'
      || _class == 'unspecified entity' || _class == 'nucleic acid feature'
      || _class == 'perturbing agent' || _class == 'tag') {
    content = cyNode.data('label') ? cyNode.data('label') : '';
  }
  else if(_class == 'compartment'){
    content = cyNode.data('label') ? cyNode.data('label') : '';
  }
  else if(_class == 'complex'){
    if(cyNode.children().length == 0){
      if(cyNode.data('label')){
        content = cyNode.data('label');
      }
      else if(cyNode.data('infoLabel')){
        content = cyNode.data('infoLabel');
      }
      else{
        content = '';
      }
    }
    else{
      content = '';
    }
  }
  else if (_class == 'and') {
    content = 'AND';
  }
  else if (_class == 'or') {
    content = 'OR';
  }
  else if (_class == 'not') {
    content = 'NOT';
  }
  else if (_class == 'omitted process') {
    content = '\\\\';
  }
  else if (_class == 'uncertain process') {
    content = '?';
  }

  return content;
};

nodeProperties.getLabelTextSize = function (cyNode) {
  var _class = cyNode.data('class');

  // Dirty legacy hack.  These types of nodes are not supposed to have labels
  // but apparently they need to have a text size
  if (_class === 'association' || _class === 'dissociation') {
    return 20;
  }

  if (_class === 'and' || _class === 'or' || _class === 'not') {
    return nodeProperties.getDynamicLabelTextSize(cyNode, 1);
  }

  if (_class.endsWith('process')) {
    return nodeProperties.getDynamicLabelTextSize(cyNode, 1.5);
  }

  if (_class === 'complex' || _class === 'compartment') {
    return 16;
  }

  return nodeProperties.getDynamicLabelTextSize(cyNode);
};

nodeProperties.getCardinalityDistance = function (cyNode) {
  var srcPos = cyNode.source().position();
  var tgtPos = cyNode.target().position();

  var distance = Math.sqrt(Math.pow((srcPos.x - tgtPos.x), 2) + Math.pow((srcPos.y - tgtPos.y), 2));
  return distance * 0.15;
};

nodeProperties.getDynamicLabelTextSize = function (cyNode, sizeCoefficient) {
  var labelSizeCoefficient = sizeCoefficient || 1;

  var h = cyNode.height();
  var textHeight = parseInt(h / 2.45) * labelSizeCoefficient;

  return textHeight;
};

module.exports = nodeProperties;
