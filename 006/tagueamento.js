'use strict'

var main = function () {
    var
        buttons = $('#botoes > button'),
        uniqueButtonsClicked = [],
        clickedButtons = [];

    buttons.each(function (i, e) {
        $(e).click(function () {

            // This whole exercise is almost exactly like the third one
            // except that this one asks for the first part of the clicked
            // button, instead of the last. Because of that, the only change
            // need was the replacement of the 'pop' command for the 'shift'
            // command, which do basically the same thing, but with the
            // opposite ends of the array

            if (uniqueButtonsClicked.indexOf(e.innerHTML) == -1)
                uniqueButtonsClicked.push(e.innerHTML);
            clickedButtons.push(e.innerHTML);
            console.log(this.innerHTML.split('-').shift());
            if (buttons.length == uniqueButtonsClicked.length)
                console.log(
                    clickedButtons.map(function (e, i) {
                        return i + '-' + e
                    }).join(' | ')
                );
        });
    });
}

$(document).ready(main);