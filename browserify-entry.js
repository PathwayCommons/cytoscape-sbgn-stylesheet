/* global $ */
// for testing
const convertSbgnml = require('sbgnml-to-cytoscape');
const textWidth = require('text-width');
window.textWidth = textWidth;
window.convertSbgnml = convertSbgnml;


const SBGNRenderer = require('../src/');

const file = require('./app/file');
const save = require('./app/save');
const renderGraph = require('./app/renderGraph');

$(document).ready(function () {

  // init the renderer
  var container = $('#sbgn-network-container');
  var renderer = new SBGNRenderer({
    container: container
  });
  window.r = window.cy = renderer;
  renderGraph(renderer, file.loadFileText('samples/pc_signallingByBMP.sbgn.xml'));


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
