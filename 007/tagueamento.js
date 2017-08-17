$(document).ready(function() {
	var arrSKU = [];

	$('#produtos a').on('click', function() {
		var obj = {
			'Name': $(this).find('.name').text(),
			'Price': $(this).find('.price').text(),
			'SKU': $(this).prop('data-sku')
		}
		console.log(obj);
	});

	$.each($('#produtos a'), function() {
		arrSKU.push($(this).prop('data-sku'));
	});

	console.log(arrSKU);
});