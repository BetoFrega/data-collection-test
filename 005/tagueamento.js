var greenBoxes = document.querySelectorAll('#valores span');
var numberBoxes = document.querySelectorAll('#botoes a');
var grnValues = [];

for (var i = 0; i < numberBoxes.length; i++) {
	numberBoxes[i].addEventListener('click', function() {
		var index = this.innerText;
		console.log(greenBoxes[index-1].innerText);
	});
}

function getValue(item,index) {
	grnValues.push(item.innerText);
}

greenBoxes.forEach(getValue);
console.log(grnValues);