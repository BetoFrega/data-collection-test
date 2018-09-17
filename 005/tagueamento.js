var valores = document.querySelectorAll('#valores span')
var arr = [];
for(var i = 0 ; i<valores.length ; i++){
    if(window.getComputedStyle(valores[i] , null).getPropertyValue('background-color') == 'rgb(173, 255, 47)' ){
        arr.push(valores[i].innerHTML);
    }
};

console.log(arr);

var botoes = document.querySelectorAll('#botoes a')

for(var i = 0 ; i<botoes.length ; i++){
    
    botoes[i].addEventListener("click" , function(){
        const pos = parseInt(this.innerHTML)-1
        console.log(valores[pos].innerHTML);
    });
};


