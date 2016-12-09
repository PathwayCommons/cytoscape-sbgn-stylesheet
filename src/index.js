let Cytoscape = require('cytoscape-for-sbgnviz');
let defaultsDeep = require('lodash.defaultsdeep');

let augment = require('./sbgnRenderer/augmentCytoscape');
let graphStyleSheet = require('./style/graphStyleSheet');

augment( Cytoscape ); // TODO should be removed eventually (just use vanilla cy)

console.log(JSON.stringify(Cytoscape.sbgn, null, 4));
console.log(Cytoscape.sbgn);
let defaultOptions = {
  style: graphStyleSheet(Cytoscape),
  boxSelectionEnabled: true,
  showOverlay: false,
  minZoom: false,
  maxZoom: false,
  motionBlur: false,
  wheelSensitivity: 0.1
};

class SBGNViz extends Cytoscape {
  constructor( options ){
    super( defaultsDeep( {}, defaultOptions, options ) );
  }
}

export default SBGNViz;
