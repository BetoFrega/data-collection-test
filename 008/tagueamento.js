/*
document.getElementById('botao').addEventListener("click", function(event) {
	if (event.target.nodeName == "BUTTON"){
		setTimeout(function(){
		    console.log(document.getElementById('mensagem').textContent);
		}, 5000);
	}
});
*/

let target = document.getElementById('mensagem');

let observer = new MutationObserver(mutation => {
    var texto = document.getElementById('mensagem').textContent;
    if(texto != null && texto != ''){
    	console.log(texto);

    	ga('send', {
			hitType: 'event',
			eventCategory: 'Menu',
			eventAction: 'Click Me <3',
			eventLabel: texto
		});
    }
});

observer.observe(target, {childList: true});