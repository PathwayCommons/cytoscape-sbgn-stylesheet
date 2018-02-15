const sbgnDataHandler = {
  isMultimer (node) {
    return node.data('class').includes('multimer');
  },
  hasClonemarker (node) {
    return node.data('clonemarker');
  },
  getStateVars (node) {
    return node.data('stateVariables');
  },
  getUnitInfos (node) {
    return node.data('unitsOfInformation');
  },
  hasAuxItems (node) {
    return (node.data('stateVariables').length + node.data('unitsOfInformation').length > 0);
  },
  sbgnClass (element) {
    return element.data('class');
  },
  sbgnLabel (element) {
    return element.data('label');
  },
  stateVarLabel (stateVar) {
    const variable = stateVar.state.variable;
    const value = stateVar.state.value;
    if (value && variable) {
      return `${value}@${variable}`;
    }
    if (value) {
      return value;
    }

    if (variable) {
      return variable;
    }
    return '';
  }
};

module.exports = sbgnDataHandler;
