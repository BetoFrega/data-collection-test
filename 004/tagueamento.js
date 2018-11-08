window.addEventListener("load", function() {

    var btns = document.getElementsByTagName('button');
    var btnsArray = [];

    for (var i = 0; i < btns.length; i++) {
        btnsArray.push(btns[i].innerText);
        btns[i].addEventListener('click', function() {
            console.log(this.innerText);
        });
    };
    console.log(btnsArray);
});