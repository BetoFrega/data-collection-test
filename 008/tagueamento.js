'use strict'

// Was not able to take this one through, because it's very late, I wasn't able
// to get IE9 in my computer to check compability and I will not be able to
// continue the test some other time, so I guess this is as far as I can go now
// Cheers

var main = function () {
    var message = ''
    $('#mensagem').bind('DOMSubtreeModified', function () {
        message = $(this).children().text()
        if (message) console.log(message)
    });
}

$(document).ready(main);