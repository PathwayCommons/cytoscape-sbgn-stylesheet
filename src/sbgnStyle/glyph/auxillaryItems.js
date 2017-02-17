const baseShapes = require('./baseShapes.js');

const auxillaryItems = {

  unitOfInformation (node) {
  },

  stateVariable (node) {
  },

  cloneMarker (node, shapeFn, shapeFnArgs) {
    const nh = node.height();
    const nw = node.width();

    const clipId = 'clonemarker';

    const cloneMarkerStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('clip-path', `url(#${clipId})`)
    .set('fill', '#D2D2D2');

    const cloneMarkerSvg =
    `
      ${baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nh / 4, nw, nh, new Map()])}
      ${shapeFn(...shapeFnArgs, cloneMarkerStyle)}
    `;

    return cloneMarkerSvg;
  },

  multimer (node, shapeFn, shapeFnArgs) {
    const nw = node.width();
    const nh = node.height();

    const clipId = 'multimer';

    const multimerStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('fill', 'none')
    .set('stroke-width', '2')
    .set('clip-path', `url(#${clipId})`);

    // const transform = `translate(${nw*0.1}, ${nh*0.05})`;
    const transform = '';


    const multimerSvg =
    `
      ${baseShapes.clipPath(clipId, shapeFn, shapeFnArgs, new Map())}
      ${shapeFn(...shapeFnArgs, multimerStyle, transform)}
    `;
    console.log(multimerSvg);
    return multimerSvg;
  }
};

module.exports = auxillaryItems;