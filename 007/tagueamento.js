
const prods = document.querySelectorAll('#produtos a')
const arr = Array.from(prods)
const result = arr.map(res => res.dataset.sku)
console.log(result)

$('#produtos a').on('click', function(e){
  const objProd = {
    nome: $('#produtos .name').text(),
    preco: $('#produtos .price').text()
  }
  console.log(objProd)
})






