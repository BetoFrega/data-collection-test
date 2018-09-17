//Captura o array de elementos
const botoes = document.querySelectorAll('#botoes button');
var arr =[];
for(var i = 0 ; i< botoes.length ; i++){
    botoes[i].addEventListener("click" , function(){
        //Pega a parte desejada da string
        const start = this.innerHTML.lastIndexOf('-');
	    const end   = this.innerHTML.length;
        const valor = this.innerHTML.substring(start+1,end)
        console.log(valor);
        //Verifica se o array auxiliar inclui o valor, caso não inclua, é executado o push
        if(!arr.includes(valor)){
            arr.push(valor);
        }
        //Se o array estiver com os 5 valores nele, exibe o array e a ordem em qual os botões foram clicados
        if(arr.length == 5){
            console.log(arr.join('-->'))
        }
    })
    
};