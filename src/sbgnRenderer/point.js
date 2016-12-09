var calculateDistance = function (point1, point2) {
  var distance = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
  return Math.sqrt(distance);
};

module.exports = {
  calculateDistance: calculateDistance
};
