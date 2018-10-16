var lista = new Array(); 
$('#valores').find('span').each(function(){
	lista.push($(this).text());
})

$('#botoes').find('a').on('click', function(){
	console.log(lista[parseInt($(this).text())-1]);

	ga('send', {
		hitType: 'event',
		eventCategory: 'Menu',
		eventAction: 'Menu Botões',
		eventLabel: $(this).text()
	});
})