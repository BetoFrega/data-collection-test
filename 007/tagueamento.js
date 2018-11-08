if (typeof $ === "function") {
    var btns = document.querySelectorAll('#produtos a'),
        produtoArray = [];
    skuArray = [];
    btns.forEach(function(val, index, array) {
        skuArray.push(array[index].dataset.sku);
        btns[index].addEventListener('click', function() {
            produtoArray.push({
                "Nome": array[index].innerText.match(/[ a-zA-Z ]+/g).toString(),
                "Preço": array[index].innerText.match(/\d.{1,}/g).toString(),
                "SKU": array[index].dataset.sku
            });
            console.log(produtoArray);
            produtoArray = [];
        });
    });
    console.log(skuArray);
}