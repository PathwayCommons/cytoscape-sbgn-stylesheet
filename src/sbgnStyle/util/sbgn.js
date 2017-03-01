const sbgnDataHandler = {
  isMultimer (node) {
    return node.data('class').includes('multimer');
  },
  hasClonemarker (node) {
    return node.data('clonemarker');
  },
  getStateVars (node) {
    const auxiliarys = node.data('statesandinfos');
    return auxiliarys.filter(auxItem => auxItem.clazz === 'state variable');
  },
  getUnitInfos (node) {
    const auxiliarys = node.data('statesandinfos');
    return auxiliarys.filter(auxItem => auxItem.clazz === 'unit of information');
  },
  hasAuxItems (node) {
    return (node.data('statesandinfos') && node.data('statesandinfos').length > 0);
  },
  sbgnClass (element) {
    return element.data('class');
  }
};

module.exports = sbgnDataHandler;