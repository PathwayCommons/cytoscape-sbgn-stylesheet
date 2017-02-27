const sbgnDataHandler = {
  isMultimer (node) {
    return node.data('class').includes('multimer');
  },
  hasClonemarker (node) {
    return node.data('clonemarker');
  },
  hasStateAndInfos (node) {
    return (node.data('statesandinfos') && node.data('statesandinfos').length > 0);
  },
  sbgnClass (node) {
    return node.data('class');
  }
};

module.exports = sbgnDataHandler;