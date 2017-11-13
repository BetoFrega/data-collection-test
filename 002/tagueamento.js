'use strict';

(function() {
    var listButton = document.querySelectorAll('#botoes a');
    var listButtonArray = Array.prototype.slice.call(listButton); 
    var listValues = document.querySelectorAll('#valores span');
    var listValueNames = [];
    
    for (var x = 0; x < listButton.length; x++) {
    
        listButton[x].addEventListener('click', function(event) {
            console.log(listValues[listButtonArray.indexOf(this)].innerText);
        })
    
        listValueNames.push(listValues[x].innerText);
    }
    
    console.log(listValueNames);
})();