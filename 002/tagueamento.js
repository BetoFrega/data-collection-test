function getEachGreenValue(){

	var arrayValues = [];

	$('#valores').find('span').each(function(index, el) {
		arrayValues.push($(this).text())	
	});
	console.log(arrayValues);
}

function getTextAndLogEachValueOnClick(){
	$('#botoes').find('a').click(function(event) {
		var thisIndex = $(this).index();
		buttonText = $( "#valores").find('span:eq(' + thisIndex + ')').text();
		console.log(buttonText);
	});
}


$(document).ready(function() {
	getEachGreenValue();
	getTextAndLogEachValueOnClick();
});