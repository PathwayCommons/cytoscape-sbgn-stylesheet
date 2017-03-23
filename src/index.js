let Cytoscape = require('cytoscape');
let defaultsDeep = require('lodash.defaultsdeep');

let sbgnStyleSheet = require('./sbgnStyle/graph');
let renderGraph = require('./renderGraph');

let defaultOptions = {
  boxSelectionEnabled: true,
  showOverlay: false,
  minZoom: false,
  maxZoom: false,
  motionBlur: false,
  wheelSensitivity: 0.1
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

SBGNRenderer.renderGraph = renderGraph;


module.exports = SBGNRenderer;
