'use strict';

var listProductNode = document.querySelectorAll('#produtos a');
var listProductNodeArray = Array.prototype.slice.call(listProductNode);
var listProduct = [];
var listProductSkus = [];

for (var x = 0; x < listProductNode.length; x++) {
    var product = listProductNode[x];

    listProductSkus.push(product.getAttribute('data-sku'))

    listProduct.push({
        name: product.querySelector('.name').innerText,
        price: product.querySelector('.price').innerText,
        sku: product.getAttribute('data-sku')
    });
    
    product.addEventListener('click', function(event) {
        console.log(listProduct[listProductNodeArray.indexOf(this)]);
    })
}

console.log(listProductSkus)

