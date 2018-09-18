var spanGreen = document.querySelectorAll("span");
var botoes = document.querySelectorAll("a");
var count = 0;
for(var i = 0; i < botoes.length; i++) {
	botoes[i].addEventListener("click", function(){
		var position = this.textContent;
		console.log([spanGreen[position-1].textContent]);
	});
	console.log([spanGreen[i].textContent]);
}
