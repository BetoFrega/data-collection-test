window.addEventListener('load', function() {

    var vals = document.querySelectorAll('#valores span'),
        btns = document.querySelectorAll('#botoes a'),
        valoresArray = [];

    btns.forEach(function(val, index, array) {
        valoresArray.push(vals[index].innerText)
        btns[index].addEventListener('click', function() {
            console.log(array[index].parentElement.previousElementSibling.children[index].innerText);
        });
    });

    console.log(valoresArray);

});