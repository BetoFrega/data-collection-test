(function() {
	var TESTE_08 = {
		id    : "#mensagem",
		init   : function() {		
			$(TESTE_08.id).bind('DOMSubtreeModified', function() {
				console.log($(this).text());
			});	
		}
	}

	TESTE_08.init();
})();