(function(window, document) {
  'use strict';

  var greenBox      = document.querySelectorAll('#valores span'),
      greenBoxValue = [],
      btn           = document.querySelectorAll('#botoes a');

  for(var i = 0, max = greenBox.length ; i < max ; i += 1) {
    greenBoxValue.push(greenBox[i].textContent);
  }
  console.log(greenBoxValue);

  for(var j = 0, maxBtn = btn.length ; j < maxBtn ; j += 1) {
    btn[j].onclick = function() {      
      console.log(greenBoxValue[this.textContent-1]);
    };
  }

})(window, document);
