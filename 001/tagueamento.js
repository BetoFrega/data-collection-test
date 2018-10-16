var lista = new Array(); 
$('#botoes').find('button').each(function(){
	lista.push($(this).text());
})
console.log(lista);

$('#botoes').find('button').on('click', function(){
	console.log($(this).text());

	ga('send', {
		hitType: 'event',
		eventCategory: 'Menu',
		eventAction: 'Menu Botões',
		eventLabel: $(this).text()
	});
})