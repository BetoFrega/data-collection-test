'use strict'
// From what I've read, this approach doesn't work on IE9
// Was not able to make this one, because it's 4 AM, I gotta
// work tomorrow and I won't be able to continue with the test
// any other time, so, yeah, sorry
var main = function () {
    var message = ''
    $('#mensagem').bind('DOMSubtreeModified', function () {
        message = $(this).children().text()
        if (message) console.log(message)
    });
}

$(document).ready(main);