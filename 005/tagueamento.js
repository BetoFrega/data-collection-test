window.onload = function() {

	var arrayb = [];

	var bts = document.querySelectorAll('#valores span');
  	
  	for(var i = 0; i< bts.length; i++){
  		var textobt = bts[i].innerText;
		arrayb.push(textobt);

  	}

	console.log(arrayb);
	
	for (var i = 0; i < document.querySelectorAll('#botoes a').length ; i++){
		var bt = document.querySelectorAll('#botoes a')[i];
		bt.addEventListener("click", retornat);
		bt.index = i;
    }
         

}

function retornat (evt){
	var i = evt.target.index;
	console.log(document.querySelectorAll('#valores span')[i].innerText);
}
