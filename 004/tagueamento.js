window.onload = function () {
	var botoes = [];
	var wr = document.getElementById("botoes");
	childElements = wr.childNodes;
	for(var i = childElements.length-1; i>=0; i--){
		var elem = childElements[i];
		if(elem.innerHTML!=undefined) {
			if (document.addEventListener){
				elem.addEventListener('click', function(){console.log(this.innerText);}, false); 
			} else if (elem.attachEvent){
				elem.attachEvent('onclick', function(){console.log(this.innerText);});
			}
			botoes.push(elem.innerText);
		}
	}
	console.log(botoes);
}