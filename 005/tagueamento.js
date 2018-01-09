

function getEachGreenValue(){

	var arrayBotoes = [];

	Array.prototype.forEach.call(document.querySelectorAll('span'), (el) => {
		var spanText = el.innerHTML;
		arrayBotoes.push(spanText);
	});
	console.log(arrayBotoes)
}

function getTextAndLogEachValueOnClick(){

	Array.prototype.forEach.call(document.querySelectorAll('a'), (el) => {
		el.addEventListener('click', thisName);	
	});

	function thisName(el){
		Array.prototype.indexOf.call(document.querySelectorAll('a'), el.currentTarget);
	}
	
}



if (document.readyState === 'complete' || document.readyState !== 'loading') {
	getEachGreenValue();
	getTextAndLogEachValueOnClick();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}