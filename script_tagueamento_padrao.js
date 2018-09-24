//envio dos eventos
function evalField(elem){
    var ctg, act, lbl;
    //if (elem.id == 'menu-boleto'){
        console.log('■ ENVIAR EVENTO ■');
        ctg = document.location.href;
        act = 'clique';
        lbl = elem.innerText || elem.innerHTML;
    //}
    console.log( ctg, act, lbl );
}
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
//click nos elementos
function onEventFired(evt){
    var target = getEventTarget(evt);
    
    if(target.nodeName == 'DIV' || target.nodeName == 'A' || target.nodeName == 'LI' || target.nodeName == 'BUTTON' || target.nodeName == 'P'){
        console.log('► elemento clicado');
        evalField(target);
    }
}
function prepareToAddFormEvents(){
    console.log('prepareToAddFormEvents()');
    
    var b = window.document.body;
    if (b.addEventListener)
        b.addEventListener('mousedown', onEventFired);
    else if (b.attachEvent)
        b.attachEvent('mousedown', onEventFired);
}
prepareToAddFormEvents();