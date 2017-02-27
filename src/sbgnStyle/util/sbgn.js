module.exports.isMultimer = (node) => node.data('class').includes('multimer');


module.exports.hasClonemarker = (node) => node.data('clonemarker');


module.exports.hasStateAndInfos = (node) => (node.data('statesandinfos') && node.data('statesandinfos').length > 0);
