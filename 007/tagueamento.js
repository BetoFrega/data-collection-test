$(document).ready(function() {
	var pdtSku = $('#produtos a');

//RETORNA O ARRAY COM OS SKUS DOS PRODUTOS NO CARREGAMENTO DA PÁGINA:
function skuArray (arg) {
	var skus = [];
	for(var i = 0; i < pdtSku.length; i++){
		skus.push(arg.eq(i).attr('data-sku'))
	}
	return skus;
}
/*
COMO OS RETORNOS SÃO CONSOLE.LOGS, EU EFETUO A CHAMADA DA FUNÇÃO APÓS A FUNÇÃO SER MONTADA.
NORMALMENTE EU USARIA UMA SELF-EXECUTING FUNCTION:
http://markdalgleish.com/2011/03/self-executing-anonymous-functions/
*/
console.log(skuArray(pdtSku));


/*
RETORNA O ARRAY COM O NOME, PREÇO E SKU DO PRODUTO NO CLIQUE.
INSERI UMA TRATATIVA DE ERRO, CASO ALGUM PRODUTO NÃO ESTIVER COM O ATRIBUTO PREENCHIDO.
*/
pdtSku.on('click', function(){
	var pdtInfo = [];
	pdtInfo.price = $(this).children('.price').text() || 'nao-setado';
	pdtInfo.name = $(this).children('.name').text() || 'nao-setado';
	pdtInfo.sku = $(this).attr('data-sku') || 'nao-setado';
	console.log(pdtInfo);
})
});