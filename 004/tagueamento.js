var arr = [];
var button = document.querySelectorAll('#botoes button');
for(var i = 0 ; i<button.length ; i++){
    
    button[i].addEventListener("click" , function(){
        console.log(this.innerHTML);
    });
    arr.push(button[i].innerHTML);
};

console.log(arr)

