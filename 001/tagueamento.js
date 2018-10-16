var lista = new Array(); 
$('#botoes').find('button').each(function(){
	lista.push($(this).text());
})
console.log(lista);

$('#botoes').find('button').on('click', function(){
	console.log('botao clicado: ' + $(this).text());
})