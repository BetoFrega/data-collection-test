var botoes = document.querySelectorAll("button");
var ArrayBotao = [];
for(var i = 0; i < botoes.length; i++) {

	ArrayBotao.push(botoes[i].textContent);

	botoes[i].addEventListener("click", function(){
	 console.log(this.textContent)
	});
}
console.log(ArrayBotao);
