window.onload = function() {
	pageButtons = document.querySelectorAll('#botoes button');
	arrButtons = [];

	for (var i = 0; i < pageButtons.length; i++) {
		arrButtons.push(pageButtons[i].innerText);

		pageButtons[i].addEventListener('click', function() {
			console.log(this.innerText);
		});
	}

	console.log(arrButtons);
}