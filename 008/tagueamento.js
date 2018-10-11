$(document).ready(function(){
	var target = document.querySelector( '#mensagem');
	var observer = new MutationObserver( handleMutationObserver );
	var config = { childList: true, attributes: true };
	  
	function handleMutationObserver( mutations ) {
		mutations.forEach(function(mutation) {
			if ($('#mensagem > div')[0] !== undefined) {
				console.log($('#mensagem > div')[0].innerText);
			}
		});
	}
observer.observe( target, config );
});