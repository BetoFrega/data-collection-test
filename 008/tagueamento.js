'use strict';

(function() {
    var watchedElement = document.querySelector('#mensagem');

    watchedElement.addEventListener('DOMNodeInserted', function(event) {
        if (this.querySelector('div')) {
            console.log(this.querySelector('div').innerText);
        }
    })
})();