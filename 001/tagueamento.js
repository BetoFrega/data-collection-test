var arr = []
$('#botoes').find('button').map(function(){
	arr.push($(this).text());
});

console.log(arr);

$('#botoes').find('button').on('click' , function(){
    console.log($(this).text());
});

