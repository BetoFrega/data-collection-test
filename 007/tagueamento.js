var arr = []
$('#produtos').find('a').map(function(){
    arr.push($(this).attr('data-sku'))
})
console.log(arr);


$('#produtos').find('a').on('click' , function(){
    const obj = {
        "name"  : $(this).find('.name').text(),
        "price" : $(this).find('.price').text(),
        "sku"   : $(this).attr('data-sku')
    }
    console.log(obj);
})