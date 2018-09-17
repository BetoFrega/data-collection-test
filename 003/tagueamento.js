var arr =[];

//Esta função captura o clique do botão 
$('#botoes').find('button').on('click' , function(){
    //Pega a parte desejada da string
    const start = $(this).text().lastIndexOf('-');
	const end   = $(this).text().length;
    const valor = $(this).text().substring(start+1,end)
    console.log(valor);
    //Verifica se o array auxiliar inclui o valor, caso não inclua, é executado o push
    if(!arr.includes(valor)){
        arr.push(valor);
    }
    //Se o array estiver com os 5 valores nele, exibe o array e a ordem em qual os botões foram clicados
    if(arr.length == 5){
        console.log(arr.join('-->'))
    }
});