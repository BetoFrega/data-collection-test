'use strict'

var main = function () {
	var buttons = $('button');
	console.log(buttons.map(function (i, e, a) {
		return e.innerHTML
	}));
	buttons.click(function () {
		console.log(this.innerHTML)
	});
};

$(document).ready(main);