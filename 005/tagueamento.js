'use strict'

var main = function () {
    var
        values = document.querySelectorAll('#valores > span'),
        buttons = document.querySelectorAll('#botoes > a');

    console.log(
        Array
        .prototype
        .slice
        .call(values)
        .map(function (e, i, a) {
            return e.innerHTML
        })
    );

    Array
        .prototype
        .slice
        .call(buttons)
        .forEach(function (e, i, a) {
            e.addEventListener('click', function () {
                console.log(values[i].innerHTML)
            })
        })
}

window.addEventListener('load', main)