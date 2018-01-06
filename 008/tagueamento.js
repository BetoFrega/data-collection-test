'use strict'

var messageFatherElement = document.getElementById('mensagem');
var TARGET_NODE_NAME = 'DIV';

messageFatherElement.addEventListener('DOMNodeInserted', logMessageOnInsertMessage, false);

function logMessageOnInsertMessage ($event) {
  $event.target.nodeName === TARGET_NODE_NAME && console.log($event.target.innerText);
}
