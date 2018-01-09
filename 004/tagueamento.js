

function returnArrayName(){

	var arrayBotoes = [];

	Array.prototype.forEach.call(document.querySelectorAll('button'), (el) => {
		var buttonText = el.innerHTML;
		arrayBotoes.push(buttonText);
	});
	console.log(arrayBotoes)
}

function getNameButton(){

	Array.prototype.forEach.call(document.querySelectorAll('button'), (el) => {
		el.addEventListener('click', thisName);	
	});

	function thisName(el){
		console.log(el.srcElement.innerHTML);
	}
	
}


if (document.readyState === 'complete' || document.readyState !== 'loading') {
	returnArrayName();
	getNameButton();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}