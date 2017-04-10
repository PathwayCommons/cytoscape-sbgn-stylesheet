const initialize = (renderer) => {
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
};

module.exports.initialize = initialize;
