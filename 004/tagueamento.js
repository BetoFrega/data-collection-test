(function(window, document) {
  'use strict';

  var btn = document.querySelectorAll('#botoes button'),
      btnValues = [];
      
  for(var i = 0, max = btn.length ; i < max ; i += 1) {
    btnValues.push(btn[i].textContent);
    btn[i].onclick = function() {
      console.log(this.textContent)
    };
  }
  console.log(btnValues);
})(window, document);
