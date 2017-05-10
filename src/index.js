let sbgnStyleSheet = require('./sbgnStyle/graph');

let defaultOptions = {
};

module.exports = function(cytoscape){
  return sbgnStyleSheet(cytoscape);
};
