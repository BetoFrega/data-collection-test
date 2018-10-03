let array = new Array;
$('#botoes > button').each(function(){
	array[array.length] = this.innerText
});
console.log(array);
$('#botoes > button').click(function(){
	console.log(this.innerText);
});