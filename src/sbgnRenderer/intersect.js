var cyMath = require('./cyMath');

var points = require('./point');

var intersectLineEllipse = function (x1, y1, x2, y2, centerX, centerY, width, height, padding) {

  var w = width / 2 + padding;
  var h = height / 2 + padding;
  var an = centerX;
  var bn = centerY;

  var d = [x2 - x1, y2 - y1];

  var m = d[1] / d[0];
  var n = -1 * m * x2 + y2;
  var a = h * h + w * w * m * m;
  var b = -2 * an * h * h + 2 * m * n * w * w - 2 * bn * m * w * w;
  var c = an * an * h * h + n * n * w * w - 2 * bn * w * w * n +
          bn * bn * w * w - h * h * w * w;

  var discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  var t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  var t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  var xMin = Math.min(t1, t2);
  var xMax = Math.max(t1, t2);

  var yMin = m * xMin - m * x2 + y2;
  var yMax = m * xMax - m * x2 + y2;

  return [xMin, yMin, xMax, yMax];
};

var intersectLinePorts = function (node, x, y, portId) {
  var ports = node._private.data.ports;
  if (ports.length < 0)
    return [];

  var nodeX = node._private.position.x;
  var nodeY = node._private.position.y;
  var width = node.width();
  var height = node.height();

  for (var i = 0; i < node._private.data.ports.length; i++) {
    var port = node._private.data.ports[i];
    if (portId == port.id) {
      return cyMath.intersectLineEllipse(
              x, y, port.x * width / 100 + nodeX, port.y * height / 100 + nodeY, 1, 1);
    }
  }
  return [];
};

var intersectRoundRectangleLine = function (
          x1, y1, x2, y2, nodeX, nodeY, width, height, cornerRadius, padding) {

  var halfWidth = width / 2;
  var halfHeight = height / 2;

  // Check intersections with straight line segments
  var straightLineIntersections = [];
  var intersection;

  // Top segment, left to right
  {
    var topStartX = nodeX - halfWidth + cornerRadius - padding;
    var topStartY = nodeY - halfHeight - padding;
    var topEndX = nodeX + halfWidth - cornerRadius + padding;
    var topEndY = topStartY;

    intersection = cyMath.finiteLinesIntersect(
            x1, y1, x2, y2, topStartX, topStartY, topEndX, topEndY, false);

    if (intersection.length > 0) {
      straightLineIntersections = straightLineIntersections.concat(intersection);
    }
  }

  // Right segment, top to bottom
  {
    var rightStartX = nodeX + halfWidth + padding;
    var rightStartY = nodeY - halfHeight + cornerRadius - padding;
    var rightEndX = rightStartX;
    var rightEndY = nodeY + halfHeight - cornerRadius + padding;

    intersection = cyMath.finiteLinesIntersect(
            x1, y1, x2, y2, rightStartX, rightStartY, rightEndX, rightEndY, false);

    if (intersection.length > 0) {
      straightLineIntersections = straightLineIntersections.concat(intersection);
    }
  }

  // Bottom segment, left to right
  {
    var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
    var bottomStartY = nodeY + halfHeight + padding;
    var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
    var bottomEndY = bottomStartY;

    intersection = cyMath.finiteLinesIntersect(
            x1, y1, x2, y2, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false);

    if (intersection.length > 0) {
      straightLineIntersections = straightLineIntersections.concat(intersection);
    }
  }

  // Left segment, top to bottom
  {
    var leftStartX = nodeX - halfWidth - padding;
    var leftStartY = nodeY - halfHeight + cornerRadius - padding;
    var leftEndX = leftStartX;
    var leftEndY = nodeY + halfHeight - cornerRadius + padding;

    intersection = cyMath.finiteLinesIntersect(
            x1, y1, x2, y2, leftStartX, leftStartY, leftEndX, leftEndY, false);

    if (intersection.length > 0) {
      straightLineIntersections = straightLineIntersections.concat(intersection);
    }
  }

  // Check intersections with arc segments
  var arcIntersections;

  // Top Left
  {
    var topLeftCenterX = nodeX - halfWidth + cornerRadius;
    var topLeftCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x1, y1, x2, y2,
            topLeftCenterX, topLeftCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] <= topLeftCenterX
            && arcIntersections[1] <= topLeftCenterY) {
      straightLineIntersections = straightLineIntersections.concat(arcIntersections);
    }
  }

  // Top Right
  {
    var topRightCenterX = nodeX + halfWidth - cornerRadius;
    var topRightCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x1, y1, x2, y2,
            topRightCenterX, topRightCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] >= topRightCenterX
            && arcIntersections[1] <= topRightCenterY) {
      straightLineIntersections = straightLineIntersections.concat(arcIntersections);
    }
  }

  // Bottom Right
  {
    var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
    var bottomRightCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x1, y1, x2, y2,
            bottomRightCenterX, bottomRightCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] >= bottomRightCenterX
            && arcIntersections[1] >= bottomRightCenterY) {
      straightLineIntersections = straightLineIntersections.concat(arcIntersections);
    }
  }

  // Bottom Left
  {
    var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
    var bottomLeftCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x1, y1, x2, y2,
            bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] <= bottomLeftCenterX
            && arcIntersections[1] >= bottomLeftCenterY) {
      straightLineIntersections = straightLineIntersections.concat(arcIntersections);
    }
  }

  if (straightLineIntersections.length > 0)
    return straightLineIntersections;
  return []; // if nothing
};

var intersectLineStateAndInfoBoxes = function (node, x, y) {
  var centerX = node._private.position.x;
  var centerY = node._private.position.y;
  var padding = parseInt(node.css('border-width')) / 2;

  var stateAndInfos = node._private.data.statesandinfos;

  var stateCount = 0, infoCount = 0;

  var intersections = [];

  for (var i = 0; i < stateAndInfos.length; i++) {
    var state = stateAndInfos[i];
    var stateWidth = state.bbox.w;
    var stateHeight = state.bbox.h;
    var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
    var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

    if (state.clazz == 'state variable' && stateCount < 2) {//draw ellipse
      var stateIntersectLines = intersectLineEllipse(x, y, centerX, centerY,
              stateCenterX, stateCenterY, stateWidth, stateHeight, padding);

      if (stateIntersectLines.length > 0)
        intersections = intersections.concat(stateIntersectLines);

      stateCount++;
    } else if (state.clazz == 'unit of information' && infoCount < 2) {//draw rectangle
      var infoIntersectLines = intersectRoundRectangleLine(x, y, centerX, centerY,
              stateCenterX, stateCenterY, stateWidth, stateHeight, 5, padding);

      if (infoIntersectLines.length > 0)
        intersections = intersections.concat(infoIntersectLines);

      infoCount++;
    }

  }
  if (intersections.length > 0)
    return intersections;
  return [];
};

var intersectNucleicAcidLine = function (node, x, y, nodeX, nodeY, cornerRadius) {
  var nodeX = node._private.position.x;
  var nodeY = node._private.position.y;
  var width = node.width();
  var height = node.height();
  var padding = parseInt(node.css('border-width')) / 2;

  var halfWidth = width / 2;
  var halfHeight = height / 2;

  var straightLineIntersections;

  // Top segment, left to right
  {
    var topStartX = nodeX - halfWidth - padding;
    var topStartY = nodeY - halfHeight - padding;
    var topEndX = nodeX + halfWidth + padding;
    var topEndY = topStartY;

    straightLineIntersections = cyMath.finiteLinesIntersect(
            x, y, nodeX, nodeY, topStartX, topStartY, topEndX, topEndY, false);

    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }

  // Right segment, top to bottom
  {
    var rightStartX = nodeX + halfWidth + padding;
    var rightStartY = nodeY - halfHeight - padding;
    var rightEndX = rightStartX;
    var rightEndY = nodeY + halfHeight - cornerRadius + padding;

    straightLineIntersections = cyMath.finiteLinesIntersect(
            x, y, nodeX, nodeY, rightStartX, rightStartY, rightEndX, rightEndY, false);

    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }

  // Bottom segment, left to right
  {
    var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
    var bottomStartY = nodeY + halfHeight + padding;
    var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
    var bottomEndY = bottomStartY;

    straightLineIntersections = cyMath.finiteLinesIntersect(
            x, y, nodeX, nodeY, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false);

    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }

  // Left segment, top to bottom
  {
    var leftStartX = nodeX - halfWidth - padding;
    var leftStartY = nodeY - halfHeight - padding;
    var leftEndX = leftStartX;
    var leftEndY = nodeY + halfHeight - cornerRadius + padding;

    straightLineIntersections = cyMath.finiteLinesIntersect(
            x, y, nodeX, nodeY, leftStartX, leftStartY, leftEndX, leftEndY, false);

    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }

  // Check intersections with arc segments, we have only two arcs for
  //nucleic acid features
  var arcIntersections;

  // Bottom Right
  {
    var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
    var bottomRightCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x, y, nodeX, nodeY,
            bottomRightCenterX, bottomRightCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] >= bottomRightCenterX
            && arcIntersections[1] >= bottomRightCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }

  // Bottom Left
  {
    var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
    var bottomLeftCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = cyMath.intersectLineCircle(
            x, y, nodeX, nodeY,
            bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding);

    // Ensure the intersection is on the desired quarter of the circle
    if (arcIntersections.length > 0
            && arcIntersections[0] <= bottomLeftCenterX
            && arcIntersections[1] >= bottomLeftCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }
  return []; // if nothing
};

var intersectClosestPoint = function (point, intersections) {
  if (intersections.length <= 0)
    return [];

  var closestIntersection = [];
  var minDistance = Number.MAX_VALUE;

  for (var i = 0; i < intersections.length; i = i + 2) {
    var checkPoint = [intersections[i], intersections[i + 1]];
    var distance = points.calculateDistance(point, checkPoint);

    if (distance < minDistance) {
      minDistance = distance;
      closestIntersection = checkPoint;
    }
  }

  return closestIntersection;
};

module.exports = {
  intersectLineEllipse: intersectLineEllipse,
  intersectLinePorts: intersectLinePorts,
  intersectLineStateAndInfoBoxes: intersectLineStateAndInfoBoxes,
  intersectNucleicAcidLine: intersectNucleicAcidLine,
  intersectRoundRectangleLine: intersectRoundRectangleLine,
  intersectClosestPoint: intersectClosestPoint
};
