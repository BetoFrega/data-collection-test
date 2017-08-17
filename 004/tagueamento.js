pageButtons = document.querySelectorAll('#botoes button');
arrButtons = [];

for (var i = 0; i < pageButtons.length; i++) {
	pageButtons[i].addEventListener('click', function() {
		console.log(this.innerText);
	});
}

function getValue(item,index) {
	arrButtons.push(item.innerText);
}

pageButtons.forEach(getValue);
console.log(arrButtons);