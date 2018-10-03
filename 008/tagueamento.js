$('#botao').find('button').click(function () {
	$('#mensagem').delegate('#mensagem > div', 'change', function(){
		teste = false;
		console.log($('#mensagem > div')[0].innerText);
	});
});