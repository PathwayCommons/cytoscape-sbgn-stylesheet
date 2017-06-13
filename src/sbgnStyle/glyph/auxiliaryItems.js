const textWidth = require('text-width');

const baseShapes = require('./baseShapes.js');
const sbgnData = require('../util/sbgn');

const auxiliaryItems = {

  multiImgCloneMarker (x, y, width, height) {

    const cloneStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1')
    .set('fill', '#D2D2D2');

    return baseShapes.rectangle(x, y, width, height, cloneStyle);
  },

  multiImgUnitOfInformation (x, y, width, height, uInfo, borderWidth=3, fontSize=14) {
    const text = uInfo.label.text;
    const uinfoRectStyle = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', `${borderWidth}`)
    .set('fill', 'white')
    .set('fill-opacity', 1);


    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}px`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle');

    const uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize}) + 5;

    const unitOfInformationSvg =
    `
      ${baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle)}
      ${baseShapes.text(text, x + (uInfoWidth / 2), y + ( height / 2),  textStyle)}
    `;

    return unitOfInformationSvg;
  },

  multiImgStateVar (x, y, width, height, stateVar, borderWidth=3, fontSize=14) {

    const stateVarStyle = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', `${borderWidth}`)
    .set('fill', 'white')
    .set('fill-opacity', 1);

    const textStyle = new Map()
    .set('alignment-baseline', 'middle')
    .set('font-size', `${fontSize}px`)
    .set('font-family', 'Helvetica Neue, Helvetica, sans-serif')
    .set('text-anchor', 'middle');

    const tw = textWidth(sbgnData.stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize}) + 10;
    const w = Math.max(tw, 30);
    const statevariableSvg =
    `
      ${baseShapes.stadium(x, y, w, height, stateVarStyle)}
      ${baseShapes.text(sbgnData.stateVarLabel(stateVar), x + ( w / 2 ), y + height / 2, textStyle)}
    `;

    return statevariableSvg;
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
  }
};

module.exports = auxiliaryItems;
