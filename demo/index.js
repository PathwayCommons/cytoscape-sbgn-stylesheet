var Renderer = require('../src/index');
var convertSbgnml = require('sbgnml-to-cytoscape');
var defaultData = require('./test-data');

var readFile = function (file, renderer) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var graph = convertSbgnml(e.target.result);
    renderer.renderGraph(graph);

  };

  reader.readAsText(file);
};

$(document).ready(function () {

    var container = $('#sbgn-network-container');

    // var libs = {};
    // libs.jquery = $;

    var renderer = new Renderer({
        container: container
    });

    renderer.renderGraph(defaultData);


    $('#graph-load').click(function () {
      $('#graph-input').trigger('click');
    });

    $('#graph-input').change(function () {
      if ($(this).val() != '') {
        var file = this.files[0];

        readFile(file, renderer);
      };
    })

});
