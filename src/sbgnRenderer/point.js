var cyShapes = require('./cyShapes');
var cyMath = require('./cyMath');
var calculateDistance = function (point1, point2) {
  var distance = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
  return Math.sqrt(distance);
};

//this function is created to have same corner length when
//complex's width or height is changed
var generateComplexShapePoints = function (cornerLength, width, height) {
  //cp stands for corner proportion
  var cpX = cornerLength / width;
  var cpY = cornerLength / height;

  var complexPoints = [-1 + cpX, -1, -1, -1 + cpY, -1, 1 - cpY, -1 + cpX,
    1, 1 - cpX, 1, 1, 1 - cpY, 1, -1 + cpY, 1 - cpX, -1];

  return complexPoints;
};

var checkPointStateAndInfoBoxes = function (x, y, node, threshold) {
  var centerX = node._private.position.x;
  var centerY = node._private.position.y;
  var padding = parseInt(node.css('border-width')) / 2;
  var stateAndInfos = node._private.data.statesandinfos;

  var stateCount = 0, infoCount = 0;

  for (var i = 0; i < stateAndInfos.length; i++) {
    var state = stateAndInfos[i];
    var stateWidth = parseFloat(state.bbox.w) + threshold;
    var stateHeight = parseFloat(state.bbox.h) + threshold;
    var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
    var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

    if (state.clazz == 'state variable' && stateCount < 2) {//draw ellipse
      var stateCheckPoint = cyShapes['ellipse'].checkPoint(
              x, y, padding, stateWidth, stateHeight, stateCenterX, stateCenterY);

      if (stateCheckPoint == true)
        return true;

      stateCount++;
    } else if (state.clazz == 'unit of information' && infoCount < 2) {//draw rectangle
      var infoCheckPoint = cyShapes['roundrectangle'].checkPoint(
              x, y, padding, stateWidth, stateHeight, stateCenterX, stateCenterY);

      if (infoCheckPoint == true)
        return true;

      infoCount++;
    }

  }
  return false;
};

var nucleicAcidCheckPoint = function (x, y, centerX, centerY, node, threshold, points, cornerRadius) {
  var width = node.width();
  var height = node.height();
  var padding = parseInt(node.css('border-width')) / 2;

  //check rectangle at top
  if (cyMath.pointInsidePolygon(x, y, points,
          centerX, centerY - cornerRadius / 2, width, height - cornerRadius / 3, [0, -1],
          padding)) {
    return true;
  }

  //check rectangle at bottom
  if (cyMath.pointInsidePolygon(x, y, points,
          centerX, centerY + height / 2 - cornerRadius / 2, width - 2 * cornerRadius, cornerRadius, [0, -1],
          padding)) {
    return true;
  }

  //check ellipses
  var checkInEllipse = function (x, y, centerX, centerY, width, height, padding) {
    x -= centerX;
    y -= centerY;

    x /= (width / 2 + padding);
    y /= (height / 2 + padding);

    return (Math.pow(x, 2) + Math.pow(y, 2) <= 1);
  };

  // Check bottom right quarter circle
  if (checkInEllipse(x, y,
          centerX + width / 2 - cornerRadius,
          centerY + height / 2 - cornerRadius,
          cornerRadius * 2, cornerRadius * 2, padding)) {

    return true;
  }

  // Check bottom left quarter circle
  if (checkInEllipse(x, y,
          centerX - width / 2 + cornerRadius,
          centerY + height / 2 - cornerRadius,
          cornerRadius * 2, cornerRadius * 2, padding)) {

    return true;
  }

  return false;
};

module.exports = {
  calculateDistance: calculateDistance,
  generateComplexShapePoints: generateComplexShapePoints,
  checkPointStateAndInfoBoxes: checkPointStateAndInfoBoxes,
  nucleicAcidCheckPoint: nucleicAcidCheckPoint
};
