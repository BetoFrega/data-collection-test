botoes = document.querySelectorAll('#botoes button');

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        console.log(this.innerText.split('-')[0]);	
    });
}
