(function(selector){
	try{
		var elements = document.querySelectorAll(selector),
  	    	elementsNames = [];

		if(elements.length>0){
			Array.prototype.forEach.call(elements, function(el, i){
				elementsNames.push(el.innerHTML);
				el.addEventListener('click', function(){
					console.log(el.innerHTML);
					//ie9
				},false);
			});

			window.onload = function(){
				console.log(elementsNames);
				//ie9
			};
		}
	}catch(e){
		console.log('Error handling elements ' + selector + ": " + e);
	}
})("#botoes button");