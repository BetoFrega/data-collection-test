$(document).ready(function() {
    var SKU = [];
    
    $.each($('#produtos a'), function() {
        SKU.push($(this).attr('data-sku'));
    });
    console.log(SKU);

    $('#produtos a').on('click', function() {
        var objeto = {
            'Nome': $('.name',$(this)).text(), 
            'Preço': $('.price',$(this)).text(), 
            'SKU': $(this).attr('data-sku')
        };
    console.log(objeto);
    });
});
