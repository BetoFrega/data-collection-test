// Para captar apenas o primeiro click de cada botão eu utilizei a função one() do proprio jQuery,utilizei o length do botão pra validar o ultimo click.
// Com a função map() map o array dos resultados dos clicks e inseri cada valor dentro de um novo array com index e valor. O index serve para saber a ordem dos clicks.

$().ready(function(){
  const btn = $('#botoes button')
  const btns = []
  btn.one('click', function(){
    const cod = $(this).text().split('-')[2]
    console.log(cod)
    btns.push(cod)

    if(btns.length == 5){
      const str = []
      btns.map((el, index) => {
        const val = el
        const ind = index + 1
        str.push(`${ind}:${val}`)
        return str
      })
      console.log(str.join())
    }
  })
})