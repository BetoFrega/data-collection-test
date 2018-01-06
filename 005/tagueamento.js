'use strict';

(function () {
  var GREEN_ELEMENTS_SELECTOR = '#valores span';
  var FATHER_ELEMENTS_ID = 'valores';
  var TARGET_NODE_NAME = 'SPAN';

  function init () {
    console.log(getGreenElementsText());

    document.getElementById(FATHER_ELEMENTS_ID)
      .addEventListener('click', logPreviousSiblingElementTextOnClick, false);
  }

  function getGreenElementsText () {
    var greenElements = document.querySelectorAll(GREEN_ELEMENTS_SELECTOR);

    return Array.prototype.map.call(greenElements, getElementText);
  }

  function getElementText (element) {
    return element.innerText;
  }

  function logPreviousSiblingElementTextOnClick ($event) {
    if ($event.target && $event.target.nodeName === TARGET_NODE_NAME) {
      console.log($event.target.previousSibling.innerText);
    }
  }

  init();
})();
