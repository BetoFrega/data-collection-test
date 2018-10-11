$(document).ready(function(){
	var array = new Array;
	$('#valores > span').each(function(){
		array[array.length] = this.innerText;
	});
	console.log(array);
	$('#botoes > a').click(function(){
		console.log(array[this.innerText - 1]);
	});
});