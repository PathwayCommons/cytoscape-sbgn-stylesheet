
// for testing
const convertSbgnml = require('sbgnml-to-cytoscape');
const textWidth = require('text-width');
window.textWidth = textWidth;
window.convertSbgnml = convertSbgnml;

const ec = require('cytoscape-expand-collapse');
const $ = require('jquery');
const SBGNRenderer = require('../src/');
ec(SBGNRenderer.__proto__, $);


const file = require('./app/file');
const save = require('./app/save');

const renderGraph = (renderer, sbgnmlText) => {
  SBGNRenderer.renderGraph(renderer, sbgnmlText);
};

$(document).ready(function () {

  // init the renderer
  var container = $('#sbgn-network-container');
  var renderer = new SBGNRenderer({
    container: container
  });

  window.SBGNRenderer = SBGNRenderer;
  window.r = window.cy = renderer;

  renderer.on('tap', 'node', function (evt) {
    console.log(evt.target);
  });
  const opts = {
    fisheye: true,
    animate: true,
    undoable: false,
    cueEnabled: false
  };
  renderer.expandCollapse(opts);

  renderer.on('expandcollapse.afterexpand', function (evt) {
    const node = evt.target;
    renderer.zoomingEnabled(false);
    node.children().layout({
      name:'grid',
      fit: 'false',
      avoidOverlap: true,
      condense: true,
      animate: true,
      rows: node.children().size() / 2,
      cols: node.children().size() / 2,
      boundingBox: node.boundingBox()
    }).run();
    renderer.zoomingEnabled(true);
  });

  const complexes = renderer.nodes('[class="complex"], [class="complex multimer"]');
  const api = renderer.expandCollapse('get');
  api.collapse(complexes);

  renderer.on('tap', 'node[class="complex"], node[class="complex multimer"]', (evt) => {
    evt.preventDefault();
    const node = evt.target;
    if (api.isCollapsible(node, opts)) {
      api.collapse(node);
    } else {
      api.expand(node, opts);
    }
  });

  const sbgnmlText = file.loadFileText('samples/pc_signallingByBMP.sbgn.xml');
  renderGraph(renderer, sbgnmlText);


  // glue events
  $('#graph-load').click(function () {
    $('#graph-input').trigger('click');
  });

  $('#graph-input').change(function () {
    if ($(this).val() != '') {
      var f = this.files[0];

      file.readFile(renderer, f, function (ft) {
        renderGraph(renderer, ft.target.result);
      });
    }
  });

  $('#graph-save').click(function () {
    save(renderer, 'graph');
  });

  $('.sample-file').click(function () {
    var fileText = file.loadFileText('samples/' + $(this)[0].innerText + '.xml');
    renderGraph(renderer, fileText);
  });

});
