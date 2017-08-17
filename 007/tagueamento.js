$(document).ready(function() {
	var arrSKU = [];

	$('#produtos a').on('click', function() {
		var obj = {
			'Name': $(this).children('.name').text(),
			'Price': $(this).children('.price').text(),
			'SKU': $(this).attr('data-sku')
		}
		console.log(obj);
	});

	$.each($('#produtos a'), function() {
		arrSKU.push($(this).attr('data-sku'));
	});

	console.log(arrSKU);
});