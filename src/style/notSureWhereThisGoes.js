var getInfoLabel = function(cyNode) {
  /* Info label of a collapsed cyNode cannot be changed if
  * the cyNode is collapsed return the already existing info label of it
  */
  if (cyNode._private.data.collapsedChildren != null) {
    return cyNode._private.data.infoLabel;
  }

  /*
   * If the cyNode is simple then it's infolabel is equal to it's label
   */
  if (cyNode.children() == null || cyNode.children().length == 0) {
    return cyNode._private.data.label;
  }

  var children = cyNode.children();
  var infoLabel = '';
  /*
   * Get the info label of the given cyNode by it's children info recursively
   */
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var childInfo = getInfoLabel(child);
    if (childInfo == null || childInfo == '') {
      continue;
    }

    if (infoLabel != '') {
      infoLabel += ':';
    }
    infoLabel += childInfo;
  }

  //return info label
  return infoLabel;
};



var getQtipContent = function(cyNode) {
  /* Check the label of the node if it is not valid
  * then check the infolabel if it is also not valid do not show qtip
  */
  var label = cyNode.data('label');
  if (label == null || label == '') {
    label = getInfoLabel(cyNode);
  }
  if (label == null || label == '') {
    return;
  }
  
  var contentHtml = '<b style="text-align:center;font-size:16px;">' + label + '</b>';
  var statesandinfos = cyNode._private.data.statesandinfos;
  for (var i = 0; i < statesandinfos.length; i++) {
    var stateLabel;
    var sbgnstateandinfo = statesandinfos[i];
    if (sbgnstateandinfo.clazz == 'state variable') {
      var value = sbgnstateandinfo.state.value;
      var variable = sbgnstateandinfo.state.variable;
      stateLabel = (variable == null /*|| typeof stateVariable === undefined */) ? value :
              value + '@' + variable;
      if (stateLabel == null) {
        stateLabel = '';
      }
      contentHtml += '<div style="text-align:center;font-size:14px;">' + stateLabel + '</div>';
    }
    else if (sbgnstateandinfo.clazz == 'unit of information') {
      stateLabel = sbgnstateandinfo.label.text;
      if (stateLabel == null) {
        stateLabel = '';
      }
      contentHtml += '<div style="text-align:center;font-size:14px;">' + stateLabel + '</div>';
    }
  }
  return contentHtml;
};

module.exports = {
  getInfoLabel: getInfoLabel,
  getQtipContent: getQtipContent
};
