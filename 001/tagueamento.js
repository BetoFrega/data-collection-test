var botoes = document.querySelectorAll("button");
for(var i = 0; i < botoes.length; i++) {

	botoes[i].addEventListener("click", function(){
	 console.log([this.textContent])
	});
	console.log([botoes[i].textContent])
}
