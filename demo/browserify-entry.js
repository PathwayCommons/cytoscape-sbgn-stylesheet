
// for testing
const convertSbgnml = require('sbgnml-to-cytoscape');
const textWidth = require('text-width');
window.textWidth = textWidth;
window.convertSbgnml = convertSbgnml;

const $ = require('jquery');

const SBGNRenderer = require('../src/');

window.textWidth = textWidth;
window.convertSbgnml = convertSbgnml;

const file = require('./app/file');
const renderGraph = require('./app/renderGraph');

const defaultText = file.loadFileText('samples/sbgn-pd.xml');

$(document).ready(function () {

  // init the renderer
  var container = $('#sbgn-network-container');
  var renderer = new SBGNRenderer({
    container: container
  });
  window.r = window.cy = renderer;
  renderGraph(renderer, defaultText);

  renderer.on('tap', 'node', function (evt) {
    console.log(evt.target);
  });

  // glue events
  $('#graph-load').click(function () {
    $('#graph-input').trigger('click');
  });

  $('#graph-input').change(function () {
    if ($(this).val() != '') {
      var f = this.files[0];

      file.readFile(f, function (ft) {
        renderGraph(renderer, ft.target.result);
      });
    }
  });

  $('.sample-file').click(function () {
    var fileText = file.loadFileText('samples/' + $(this)[0].innerText + '.xml');
    renderGraph(renderer, fileText);
  });

});
