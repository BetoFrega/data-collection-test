const collection = document.querySelectorAll('#valores span')
const arr = Array.from(collection)
const result = arr.map(res => res.innerText)
console.log(result)

document.querySelector('#valores').addEventListener('click', function(event){
  console.log(event.target.innerText)
  
  })