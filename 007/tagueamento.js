'use strict'

var main = function () {
    var
        products = $('[data-sku]'),
        productSKUs = products.map(function (i, e, a) {
            $(e).click(function () {
                console.log({
                    'name': $(e).find('.name').text(),
                    'price': $(e).find('.price').text(),
                    'sku': $(e).attr('data-sku')
                })
            })
            return $(e).attr('data-sku')
        });
    console.log(productSKUs);
}

$(document).ready(main);