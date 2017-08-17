$(document).ready(function() {
	var greenBoxes = $('#valores span');
	var numberBoxes = $('#botoes a');
	var grnValues = [];

	$.each(numberBoxes, function(key, value) {
		$(numberBoxes[key]).on('click', function() {
			console.log($(greenBoxes[key]).text());
		});
	});

	$.each(greenBoxes, function(key, value) {
		grnValues.push($(value).text());
	});

	console.log(grnValues);
});