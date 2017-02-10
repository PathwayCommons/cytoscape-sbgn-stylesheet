let Cytoscape = require('cytoscape');
let defaultsDeep = require('lodash.defaultsdeep');

let graphStyleSheet = require('./style/graphStyleSheet');

let defaultOptions = {
  style: graphStyleSheet(Cytoscape),
  boxSelectionEnabled: true,
  showOverlay: false,
  minZoom: false,
  maxZoom: false,
  motionBlur: false,
  wheelSensitivity: 0.1
};

class SBGNRenderer extends Cytoscape {
  constructor( options ){
    super( defaultsDeep( {}, defaultOptions, options ) );
  }
//   TODO: Initial sbgn-renderer api
//   sbgn (kdfkd) { // the function that can possibly turned into an extension
//   ...; // style sheet can be set in here
//   ...; // accept sbngml file or string, promise to resolve to string (fetch support), possibly always treat it as a promise
//   ...; // export  to sbgnml file or picture
//  }
}

module.exports = SBGNRenderer;
