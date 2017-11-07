'use strict'

var main = function () {
    var
        buttons = $('#botoes > button'),
        uniqueButtonsClicked = [],
        clickedButtons = [];

    buttons.each(function (i, e) {
        $(e).click(function () {

            // The conditional for the exercise is the pressing of
            // all the buttons, but the result requested is the
            // order of pressed buttons. Since there was no
            // speciication of wether the order should be of
            // unique pressed buttons, this script will store all button
            // labels with no regard as to being repeated or not.
            // At the end, they will be printed with their
            // respectful index to show the pressing order.

            // This, however, is a conscious decision made because this is
            // what I felt the exercise was asking, in-between the lines
            // On a real-life business occasion, more feedback would be
            // requested in order to avoid comunication breakdowns that
            // could potentially harm the business in any way.

            if (uniqueButtonsClicked.indexOf(e.innerHTML) == -1)
                uniqueButtonsClicked.push(e.innerHTML);
            clickedButtons.push(e.innerHTML);
            console.log(this.innerHTML.split('-').pop());
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