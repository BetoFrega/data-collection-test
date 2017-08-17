window.onload = function() {
	var greenBoxes = document.querySelectorAll('#valores span');
	var numberBoxes = document.querySelectorAll('#botoes a');
	var grnValues = [];

	for (var i = 0; i < numberBoxes.length; i++) {
		grnValues.push(greenBoxes[i].innerText);

		numberBoxes[i].addEventListener('click', function() {
			var index = this.innerText;
			console.log(greenBoxes[index-1].innerText);
		});
	}

	console.log(grnValues);
}