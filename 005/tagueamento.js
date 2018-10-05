var spanGreen = document.querySelectorAll("span");
var botoes = document.querySelectorAll("a");
var ArrayBotao = [];
var count = 0;
for(var i = 0; i < botoes.length; i++) {
	
	botoes[i].addEventListener("click", function(){
		var position = this.textContent;
		console.log(spanGreen[position-1].textContent);
	});

	ArrayBotao.push(spanGreen[i].textContent);

}
console.log(ArrayBotao);
