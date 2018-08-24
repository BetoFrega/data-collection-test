window.onload = function() {
	var arraybt = [];
  	var bts = document.querySelectorAll('#botoes button');
  	
  	for(var i = 0; i< bts.length; i++){
  		arraybt.push(bts[i].innerText);
  		bts[i].addEventListener('click',acaobt);
  		bts[i].texto = bts[i].innerText;
  			
  	}

  	console.log(arraybt);


}

function acaobt (evt){
	var textobt = evt.target.texto;
	console.log(textobt);
}
