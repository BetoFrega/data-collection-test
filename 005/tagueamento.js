window.onload = function () {
	var valores = [];
	var vl = document.getElementById("valores");
	var vlchildElements = vl.childNodes;
	for(var i = vlchildElements.length-1; i>=0; i--){
		var elem = vlchildElements[i];
		if(elem.innerHTML!=undefined) {
			valores.push(elem.innerText);
		}
	}
	console.log(valores);
	
	var bt = document.getElementById("botoes");
	childElements = bt.childNodes;
	for(var i = childElements.length-1; i>=0; i--){
		var elem = childElements[i];
		if(elem.innerHTML!=undefined) {
			if (document.addEventListener){
				elem.addEventListener('click', function(){console.log(vlchildElements[this.innerText].innerText);}, false); 
			} else if (elem.attachEvent){
				elem.attachEvent('onclick', function(){console.log(vlchildElements[this.innerText].innerText);});
			}
		}
	}
}