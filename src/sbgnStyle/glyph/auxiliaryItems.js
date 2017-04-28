const textWidth = require('text-width');

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

  compoundCloneMarker (x, y, width, height) {

    const cloneStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1')
    .set('fill', '#D2D2D2');

    return baseShapes.rectangle(x, y, width, height, cloneStyle);
  },


  compoundUnitOfInformation (x, y, width, height, uInfo) {
    const fontSize = 14;
    const text = uInfo.label.text;
    const uinfoRectStyle = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '4')
    .set('fill', '#FDFDFD');


    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize}) + 5;

    const unitOfInformationSvg =
    `
      ${baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle)}
      ${baseShapes.text(text, x + (uInfoWidth / 2), y + ( height / 2),  textStyle)}
    `;

    return unitOfInformationSvg;
  },

  compoundStateVar (x, y, width, height, stateVar) {
    const fontSize = 14;

    const stateVarStyle = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '4')
    .set('fill', 'none');


    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const tw = textWidth(stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize}) + 10;
    const w = Math.max(tw, 30);
    const statevariableSvg =
    `
      ${baseShapes.stadium(x, y, w, height, stateVarStyle)}
      ${baseShapes.text(stateVarLabel(stateVar), x + ( w / 2 ), y + height / 2, textStyle)}
    `;

    return statevariableSvg;
  },


  stateVariable (x, y, radius, stateVar) {

    const fontSize = 12;

    const stateVarStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const tw = textWidth(stateVarLabel(stateVar, { family: textStyle.get('font-family'), size: fontSize}), 20);
    const stateVarWidth = Math.max(tw * .5, 20);

    const statevariableSvg =
    `
      ${baseShapes.ellipse(x, y, stateVarWidth, radius, stateVarStyle)}
      ${baseShapes.text(stateVarLabel(stateVar), x, y, textStyle)}
    `;

    return statevariableSvg;
  },

  unitOfInformation (x, y, width, height, unitInfo) {

    const fontSize = 12;
    const text = unitInfo.label.text;

    const uinfoRectStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1.5')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle')
    .set('stroke', 'black');

    const uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize}) + 5;

    const unitOfInformationSvg =
    `
      ${baseShapes.roundRectangle(x - (uInfoWidth / 2), y, uInfoWidth, height, uinfoRectStyle)}
      ${baseShapes.text(text, x, y + ( height / 2),  textStyle)}
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
