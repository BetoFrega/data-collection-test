
//criação de uma lista que recebe o valor (parte da string solicitada) quando o botão e clicada.
var ordem = new Array();

/* 
A função abaixo procura dentro do elemento que possui o ID 'botoes' e posteriormente as tags HTML 
do tipo 'button' e atribuem a ele uma função de click. Quando o evento de click é disparada a função 
busca o nome (texto) que está dentro do botão e o quebra em partes, como o valor solicitado é a tarceira
parte, selecionamos esta parte dentro do array formado pela função Split e colocamos na lista 'ordem'
para armazenar a ordem em que os botões foram clicados.
*/
$('#botoes').find('button').on('click', function(){
	var part = $(this).text().split('-');
	ordem.push(part[2]);
	console.log(ordem);

	ga('send', {
		hitType: 'event',
		eventCategory: 'Menu',
		eventAction: 'Menu Botões',
		eventLabel: ordem.push(part[2])
	});

})

/*
Obs: achei o enunciado um pouco vago, não realizei nenhuma verificação de quantidade de cliques 
ou se o botão deveria ser clicado apenas uma vez, apenas exibi a ordem em que os botões foram clicados
independente da quantidade de cliques.
*/