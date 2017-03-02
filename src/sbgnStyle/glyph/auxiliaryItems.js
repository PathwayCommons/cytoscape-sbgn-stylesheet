const baseShapes = require('./baseShapes.js');

const stateVarLabel = (stateVar) => {
  const variable = stateVar.state.variable;
  const value = stateVar.state.value;
  if (value && variable) {
    return `${value}@${variable}`;
  }
  if (value) {
    return value;
  }

  if (variable) {
    return variable;
  }
  return '';
};

const auxiliaryItems = {

  stateVariable (x, y, radius, stateVar) {
    const stateVarStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const stateVarTextStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const statevariableSvg =
    `
      ${baseShapes.ellipse(x, y, 3*radius, radius, stateVarStyle)}
      ${baseShapes.text(stateVarLabel(stateVar), x, y, stateVarTextStyle)}
    `;

    return statevariableSvg;
  },

  unitOfInformation (x, y, width, height, unitInfo) {
    const uinfoRectStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const uinfoTextStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const unitOfInformationSvg =
    `
      ${baseShapes.roundRectangle(x, y, width, height, uinfoRectStyle)}
      ${baseShapes.text(unitInfo.label.text, x + (width / 2), y + (3 *  height / 4),  uinfoTextStyle)}
    `;

    return unitOfInformationSvg;
  },

  cloneMarker (nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
    const clipId = 'clonemarker';

    const cloneMarkerStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('clip-path', `url(#${clipId})`)
    .set('fill', '#D2D2D2');

    const cloneMarkerSvg =
    `
      ${baseShapes.clipPath(clipId, baseShapes.rectangle,  [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()])}
      ${shapeFn(...shapeFnArgs, cloneMarkerStyle)}
    `;

    return cloneMarkerSvg;
  },

  multimer (shapeFn, shapeFnArgs) {
    const clipId = 'multimer';

    const multimerStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('fill', 'none')
    .set('stroke-width', '3')
    .set('clip-path', `url(#${clipId})`);

    const multimerSvg =
    `
      ${baseShapes.clipPath(clipId, shapeFn, shapeFnArgs, new Map())}
      ${shapeFn(...shapeFnArgs, multimerStyle)}
    `;
    return multimerSvg;
  }
};

module.exports = auxiliaryItems;