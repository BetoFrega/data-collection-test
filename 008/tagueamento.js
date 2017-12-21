(function(window, document) {
  'use strict';

  var observedElement = document.getElementById('mensagem');
  if ("MutationObserver" in window) {
        var callback        = function(mutationsList) {
          for(var i = 0, max = mutationsList.length ; i < max ; i += 1) {
            if(mutationsList[i].type === 'childList') {
              var msg = mutationsList[i].addedNodes[0].innerText;
              if(msg != '') {
                console.log(msg);
              }
            }
          }
        },
        config = {childList: true},
        observer = new MutationObserver(callback);

    observer.observe(observedElement, config);
  }  else {
    observedElement.addEventListener('DOMSubtreeModified', function() {
      var msg = this.innerText.trim();
      if(msg != '') {
        console.log(msg);
      }
    });
  }

})(window, document);
