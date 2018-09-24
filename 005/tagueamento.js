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
      console.log(this.textContent);
      var element       = document.createElement('span');
      element.style     = 'position:absolute;top:100px;margin-left:1em';
      element.innerText = this.textContent;
      this.parentNode.insertBefore(element, this);
    };
  }

})(window, document);