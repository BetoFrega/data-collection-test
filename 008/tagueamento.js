$('#mensagem').on('DOMNodeInserted', function(){ 
	if($(this).children().is('div') && !$(this).children().is('img')){
        console.log($(this).text());
    }
})