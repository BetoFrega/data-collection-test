'use strict';

(function() {
    var listButton = document.querySelectorAll('button');
    var listButtonNames = [];
    
    for (var x = 0; x < listButton.length; x++) {
        var button = listButton[x];
    
        button.addEventListener('click', function(event) {
            console.log(this.innerText);
        })
        listButtonNames.push(button.innerText);
    }
    
    console.log(listButtonNames);
})();