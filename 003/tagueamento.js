'use strict';
var pgButtons = jQuery('#botoes button');
var clickedButton = 0;
var pgName = '';

//RETORNA A ÚLTIMA PARTE DO VALOR DO BOTÃO CLICADO
pgButtons.on('click', function(){
	//VERIFICA SE O BOTÃO JÁ FOI CLICADO
	if(jQuery(this).attr('class') != 'clicked'){
		var btText = jQuery(this).text().split('-')[2]
		console.log(btText);
		clickedButton = clickedButton +1
		jQuery(this).attr({
			'data-click-value': clickedButton,
			'class': 'clicked'
		});
		pgName = pgName + $(this).text() + ', '
		clickedButton == pgButtons.length ? console.log(pgName.slice(0, pgName.length -2)):'';
	}
	
})

/*
	A FUNÇÃO ACIMA RETORNA A ÚLTIMA PARTE DO TEXTO DO BOTÃO CLICADO E INSERE 2 PARAMETROS NO ELEMENTO.
	OS PARAMETROS INSERIDOS SERVEM PARA A ORDENAÇÃO DO RETORNO FINAL E TAMBÉM RESTRINGEM A INSERÇÃO DE 
	ATRIBUTOS DUPLICADOS NOS ELEMENTOS NA QUAL JÁ HOUVE INTERAÇÃO.
*/