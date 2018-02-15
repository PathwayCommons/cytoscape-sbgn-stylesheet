var sbgnStylesheet = require('./build/bundle.js');
var cytoscape = window.cytoscape;

var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  elements: fetch('./demo.json').then( res => res.json() ),
  layout: { name: 'preset' },
  style: sbgnStylesheet(cytoscape)
});