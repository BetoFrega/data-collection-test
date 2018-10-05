
  const collection = document.querySelectorAll('#botoes button')
  const arr = Array.from(collection)
  const result = arr.map(res => res.innerText)
  console.log(result)

  document.querySelector('#botoes').addEventListener('click', function(event){
    console.log(event.target.innerText)
  })