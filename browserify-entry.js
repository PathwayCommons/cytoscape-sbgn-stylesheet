
// for testing
const convertSbgnml = require('sbgnml-to-cytoscape');
const textWidth = require('text-width');
const expandCollapse = require('cytoscape-expand-collapse');
const coseBilkent = require('cytoscape-cose-bilkent');
const $ = require('jquery');

const SBGNRenderer = require('../src/');
expandCollapse(SBGNRenderer.__proto__, $);
coseBilkent(SBGNRenderer.__proto__);

window.textWidth = textWidth;
window.convertSbgnml = convertSbgnml;

const file = require('./app/file');
const save = require('./app/save');

const defaultText = file.loadFileText('samples/pc_signallingByBMP.sbgn.xml');
const loadInEach = (renderers, sbgnmlText) => {
  const layouts = ['default', 'stratified', 'stratified-bilkent'];
  let i = 0;
  for (let r of renderers) {
    SBGNRenderer.renderGraph(r, sbgnmlText, layouts[i]);
    i ++;
  }
};

$(document).ready(function () {

  const containers = ['#default-layout', '#signalling-layout','#cose-bilkent-layout'];
  const renderers = containers.map((container, index) => {
    const renderer = new SBGNRenderer({container: $(container)});

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

    window['cy' + index] = renderer;
    return renderer;
  });

  loadInEach(renderers, defaultText);

  // glue events
  $('#graph-load').click(function () {
    $('#graph-input').trigger('click');
  });

  $('#graph-input').change(function () {
    if ($(this).val() != '') {
      var f = this.files[0];

      file.readFile(f, function (ft) {
        loadInEach(renderers, ft.target.result);
      });
    }
  });

  // disabled for now
  $('#graph-save').click(function () {
    save(renderers, 'graph');
  });

  $('.sample-file').click(function () {
    var fileText = file.loadFileText('samples/' + $(this)[0].innerText + '.xml');
    loadInEach(renderers, fileText);
  });

});
