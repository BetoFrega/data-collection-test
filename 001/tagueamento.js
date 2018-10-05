$().ready(function(){
  const name = $('#botoes button')
  const names = []
  name.each(function(){
    names.push($(this).text())
  })
  console.log(names)
  $('#botoes button').on('click',function(){
    console.log($(this).text())
  })
})