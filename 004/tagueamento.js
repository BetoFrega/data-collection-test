'use strict'

var main = function () {
    var buttons = document.querySelectorAll('button')
    console.log(
        Array
        .prototype
        .slice
        .call(buttons)
        .map(function (e, i, a) {
            return e.innerHTML
        }));
    buttons.forEach(function (e) {
        e.addEventListener('click', function () {
            console.log(this.innerHTML)
        })
    });
}

window.addEventListener("load", main);