'use strict'

var FATHER_ELEMENTS_ID = 'produtos';
var PRODUCTS_ELEMENTS_SELECTOR = '#produtos a';
var TARGET_NODE_NAME = 'A';

function init () {
  console.log(getProductSkus());

  document.getElementById(FATHER_ELEMENTS_ID)
    .addEventListener('click', logButtonNameOnClick, false);
}

function getProductSkus () {
  var productElements = document.querySelectorAll(PRODUCTS_ELEMENTS_SELECTOR);

  return Array.prototype.map.call(productElements, getProductSku);
}

function getProductSku(element) {
  return element.getAttribute('data-sku');
}

function logButtonNameOnClick ($event) {
  if ($event.target && $event.target.nodeName === TARGET_NODE_NAME) {
    console.log({
      sku: $event.target.getAttribute('data-sku'),
      name: $event.target.querySelector('.name').innerText,
      price: $event.target.querySelector('.price').innerText
    });
  }
}

init();
