$( document ).ready(function() {
	//Vetor de armazenamento da ordem dos cliques
	var order = [];
	//***********************************//
	//Função de ação do clique nos elementos 'button' na div '#botoes' 
	$("#botoes button").click(function(){
		//Conversão da string no botão em vetor usando o separador "-" e já selecionando o primeiro valor
		btval = $(this).html().split("-")[0];
		//Exibição do primeiro valor antes do ífen
		console.log(btval);
		//Ao clicar o botão é desabilitado por segurança para manter a ordem dos cliques.
		$(this).attr("disabled","disabled");
		//Todo clique insere o valor daquele botão no vetor que armazena a ordem dos cliques
		order.push(btval)
		//Verifica se todos os botões estão no vetor e caso sim exibe a ordem
		if(order.length == 5){
			console.log(order);
		}
	});
});