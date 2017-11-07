'use strict'

var main = function () {
    var
        values = $('#valores > span'),
        buttons = $('#botoes > a');
    console.log(values.map(function (i, e, a) {
        return e.innerHTML;
    }));
    buttons.each(function (i, e, a) {
        $(e).click(function () {
            console.log(values[i].innerHTML);
        });
    });
}

$(document).ready(main);