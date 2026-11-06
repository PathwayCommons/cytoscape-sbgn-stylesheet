let sbgnStyleSheet = require('./sbgnStyle/');

module.exports = function(cytoscape){
  return sbgnStyleSheet(cytoscape);
};
