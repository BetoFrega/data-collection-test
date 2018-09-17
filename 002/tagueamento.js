var arr = []
$('#valores').find('span').map(function(){
        if($(this).css('background-color') == 'rgb(173, 255, 47)'){ 
            arr.push($(this).text());
        }
});

console.log(arr);

$('#botoes').find('a').on('click' , function(){
    const valores = $('#valores').find('span');
    const pos = parseInt($(this).text())-1
    console.log($(valores[pos]).text());
});


