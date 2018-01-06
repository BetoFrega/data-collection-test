'use strict';

(function()  {
  var FATHER_ELEMENTS_ID = 'botoes';
  var BUTTON_ELEMENTS_SELECTOR = '#botoes button';
  var TARGET_NODE_NAME = 'BUTTON';

  function init () {
    console.log(getButtonNames());

    document.getElementById(FATHER_ELEMENTS_ID)
      .addEventListener('click', logButtonNameOnClick, false);
  }

  function getButtonNames () {
    var buttonElements = document.querySelectorAll(BUTTON_ELEMENTS_SELECTOR);

    return Array.prototype.map.call(buttonElements, getButtonName);
  }

  function getButtonName (element) {
    return element.innerText;
  }

  function logButtonNameOnClick ($event) {
    $event.target && $event.target.nodeName === TARGET_NODE_NAME && console.log($event.target.innerText);
  }

  init();
})();
