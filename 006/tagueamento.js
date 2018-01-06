'use strict'

var FATHER_ELEMENTS_ID = 'botoes';
var BUTTONS_SELECTOR = '#botoes button'
var TARGET_NODE_NAME = 'BUTTON';
var BUTTONS_TOTAL = document.querySelectorAll(BUTTONS_SELECTOR).length;
var clickedButtons = []

function init () {
  document.getElementById(FATHER_ELEMENTS_ID)
    .addEventListener('click', logButtonNamePartAndAllClickedButtonsText, false);
}

function logButtonNamePartAndAllClickedButtonsText ($event) {
  if ($event.target && $event.target.nodeName === TARGET_NODE_NAME) {
    console.log($event.target.innerText.split('-').pop());

    buttonIsNotAdded($event) && clickedButtons.push($event.target);

    allButtonsIsClicked() && console.log(getAllClickedButtonsText());
  }
}

function buttonIsNotAdded ($event) {
  return clickedButtons.indexOf($event.target) === -1;
}

function allButtonsIsClicked () {
  return clickedButtons.length === BUTTONS_TOTAL;
}

function getAllClickedButtonsText () {
  var clickedButtonsText = Array.prototype.map.call(clickedButtons, getButtonName)

  return Array.prototype.join.call(clickedButtonsText, ' ');
}

function getButtonName (element) {
  return element.innerText;
}

init();
