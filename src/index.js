let Cytoscape = require('cytoscape');
let defaultsDeep = require('lodash.defaultsdeep');

let sbgnStyleSheet = require('./sbgnStyle/graph');

let defaultOptions = {
};

class SBGNRenderer extends Cytoscape {
  constructor( options ){
    options = defaultsDeep( {}, defaultOptions, options );

    if( !options.style ){
      options.style = sbgnStyleSheet(Cytoscape);
    }

    super( defaultsDeep( {}, defaultOptions, options ) );
  }
}

SBGNRenderer.stylesheet = function(){
  return sbgnStyleSheet(Cytoscape);
};



module.exports = SBGNRenderer;
