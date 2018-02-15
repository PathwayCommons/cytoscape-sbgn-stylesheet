let sbgnStyleSheet = require('./sbgnStyle/');

let defaultOptions = {
};

module.exports = function(cytoscape){
  return sbgnStyleSheet(cytoscape);
};
