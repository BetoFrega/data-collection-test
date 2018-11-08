var btns = document.getElementsByTagName('button');
var clicks = 0;
var step = btns.length;
window.btnsArray = window.btnsArray || [];

function minhaFuncao(el) {
    btnsArray.push(el.getAttribute('class'));
    console.log(el.id);
    el.disabled = true;
    clicks += 1;
    if (clicks % step === 0) {
        // Put the object into storage
        localStorage.setItem('btnsArray', JSON.stringify(btnsArray));

        // Retrieve the object from storage
        var botoesClicados = localStorage.getItem('btnsArray');

        console.log('Os botões foram clicados na seguinte ordem: ', botoesClicados);

        var btnEnable = document.getElementsByTagName('button');
        for (var i = 0; i < step; i++) {
            btnEnable[i].disabled = false;
        }

        btnsArray.splice(0, step);
    }
};

window.addEventListener("load", function() {

    for (var i = 0; i < btns.length; i++) {
        var separacao = btns[i].innerText.split('-')[2];
        var click1 = btns[i].setAttribute('id', separacao);
        var btnClass = btns[i].setAttribute('class', i + 1);
        var codigo = btns[i].setAttribute('onclick', "minhaFuncao(this)");
    };
});