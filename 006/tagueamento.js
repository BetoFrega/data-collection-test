$( document ).ready(function() {
	//Vetor de armazenamento da ordem dos cliques
	var order = [];
	//***********************************//
	//Fun��o de a��o do clique nos elementos 'button' na div '#botoes' 
	$("#botoes button").click(function(){
		//Convers�o da string no bot�o em vetor usando o separador "-" e j� selecionando o primeiro valor
		btval = $(this).html().split("-")[0];
		//Exibi��o do primeiro valor antes do �fen
		console.log(btval);
		//Ao clicar o bot�o � desabilitado por seguran�a para manter a ordem dos cliques.
		$(this).attr("disabled","disabled");
		//Todo clique insere o valor daquele bot�o no vetor que armazena a ordem dos cliques
		order.push(btval)
		//Verifica se todos os bot�es est�o no vetor e caso sim exibe a ordem
		if(order.length == 5){
			console.log(order);
		}
	});
});