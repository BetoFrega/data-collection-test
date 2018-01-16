'use strict';

(function () {
  var GREEN_ELEMENTS_SELECTOR = '#valores span';
  var BUTTONS_SELECTOR = '#botoes a';
  var FATHER_ELEMENTS_ID = 'valores';
  var BUTTONS_ID = 'botoes';
  var TARGET_NODE_NAME = 'SPAN';
  var BUTTONS_LIST;
  var GREEN_ELEMENTS_LIST;

  function init () {
    BUTTONS_LIST = document.querySelectorAll(BUTTONS_SELECTOR);
    GREEN_ELEMENTS_LIST = document.querySelectorAll(GREEN_ELEMENTS_SELECTOR);

    console.log(getGreenElementsText());

    document.getElementById(BUTTONS_ID).addEventListener('click', logGreenElementTextAbove, false);
  }

  function getGreenElementsText () {
    return Array.prototype.map.call(GREEN_ELEMENTS_LIST, getElementText);
  }

  function getElementText (element) {
    return element.innerText;
  }

  function logGreenElementTextAbove ($event) {
    var index = Array.prototype.indexOf.call(BUTTONS_LIST, $event.target, 0);

    console.log(GREEN_ELEMENTS_LIST[index].innerText);
  }

  init();
})();
