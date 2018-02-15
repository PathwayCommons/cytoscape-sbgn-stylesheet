var util = require('util');
var extend = require('xtend');

var supported = function() {
	if(typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

	var canvas = document.createElement('canvas');
	if(typeof canvas.getContext !== 'function') return false;

	var context = canvas.getContext('2d');
	return !!context && (typeof context.measureText === 'function');
};

var initialize = function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	var width = function(str, options) {
		options = extend({
			style: 'normal',
			variant: 'normal',
			weight: 'normal',
			size: 'medium',
			family: 'sans-serif',
			align: 'start',
			baseline: 'alphabetic'
		}, options);

		var size = options.size;
		if(typeof size === 'number') size = size + 'px';

		context.font = util.format('%s %s %s %s %s',
			options.style,
			options.variant,
			options.weight,
			size,
			options.family);
		context.textAlign = options.align;
		context.textBaseline = options.baseline;

		return context.measureText(str).width;
	};

	width.supported = true;
	return width;
};

module.exports = supported() ? initialize() : (function() {
	var width = function() {
		return 0;
	};

	width.supported = false;
	return width;
}());
