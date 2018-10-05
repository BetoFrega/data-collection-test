

// Com a função map() map o array dos resultados dos clicks e inseri cada valor dentro de um novo array com index e valor. O index serve para saber a ordem dos clicks.

const btns = document.querySelector('#botoes')
const values = []
btns.addEventListener('click', function(event){
  const collection = document.querySelectorAll('#botoes button')
  const val = event.target.innerText
  const cod = val.split('-')[2]
  if(!values.includes(cod)){
    values.push(cod)
  }
  
  console.log(cod)
  
  if(values.length == 5) {
    const str = []
    values.map((el, index) => {
      const val = el
      const ind = index + 1
      str.push(`${ind}:${val}`)
      return str.join()
    })
    console.log(str)
  }
})

