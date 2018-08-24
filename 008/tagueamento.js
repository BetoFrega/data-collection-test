$('#botao button').on("click", function(){

	retorna_msg();
});

function retorna_msg(){

	if(document.querySelector('#mensagem div')!== null ){

		console.log(document.querySelector('#mensagem div').innerText);

	} else {
		setTimeout(function(){  
			retorna_msg();

		}, 100);
	}
}
