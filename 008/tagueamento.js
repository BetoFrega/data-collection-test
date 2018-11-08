var botao = document.getElementsByTagName('button')[0];
botao.addEventListener('click', function(event) {
    validaMsg(0);
});
function validaMsg(it) {
    if (it > 100) return;
    setTimeout(function() {
        var msg = document.getElementById('mensagem');
        if (msg.innerText === "" || msg.innerText === null || msg.innerText === undefined) {
            validaMsg(++it);
        } else {
            console.log(msg.innerText);
        }
    }, 100);
}