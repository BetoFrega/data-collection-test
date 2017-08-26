$(document).ready(function() {
	btn = $('#botoes button');
        
	$(btn).on('click', function() {
    var text = this.innerText.split('-')[2];
		console.log(text);
	});
});
