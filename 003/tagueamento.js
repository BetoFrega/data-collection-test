/*É feita uma varredura de todos os botões filhos da div #botoes. O Array retornado é percorrido e 
um listener para o evento de click é inserido em cada botão para exibir o último trecho do nome do botão
quando ele for clicado.

Também foi inserida uma classe de controle em cada elemento para que o mesmo botão não entre mais de uma
vez no array que guarda a ordem de click, logo, após todos os botões serem clicados será exibida uma
string com a ordem de click dos botões.*/
(function(selector){
	var buttons = document.querySelectorAll(selector);
		clickOrder = [];

	Array.prototype.forEach.call(buttons, function(el, i){
		el.addEventListener('click',function(){
			console.log(el.innerHTML.substr(el.innerHTML.lastIndexOf('-')+1));
			if(!el.classList.contains('alreadyClicked')){
				el.classList.add('alreadyClicked');
				clickOrder.push('button ' + (i+1));
				if(clickOrder.length === buttons.length)
					console.log(clickOrder.join(' '));
			}	
		},false);
	});
})("#botoes>button");