(function(selectorButtons, selectorValues, color){
	try{
		var buttons = document.querySelectorAll(selectorButtons),
		    values = document.querySelectorAll(selectorValues),
  	    	highlightedValues = [];

  	    Array.prototype.forEach.call(buttons, function(el,i){ 
  	    	el.addEventListener('click', function(){
  	    		console.log(values[i].innerHTML);
  	    	},false);
  	    });

  	    window.onload = function(){
  	    	Array.prototype.forEach.call(values, function(el,i){ 
  	    		if(window.getComputedStyle(el,null).backgroundColor === color){
  	    			highlightedValues.push(el.innerHTML);
  	    		}
  	    	});
  	    	console.log(highlightedValues);
  	    };

	}catch(e){
		console.log('Error handling elements ' + selector + ": " + e);
	}
})("#botoes>a", "#valores>span", "rgb(173, 255, 47)");