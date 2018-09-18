var messagem = document.getElementById("mensagem");
var botao = document.getElementById("botao");
mensagem.textContent = "";
botao.addEventListener("click", function() {
    myClock = setInterval(function(){
    	if(mensagem.textContent != "") {
    		console.log(mensagem.textContent);
    		clearInterval(myClock)
    	} 
     }, 1000);
});
