$().ready(function(){
  $('#botao button').on('click', function(){
    const msg = $('#mensagem')
    setTimeout(() => console.log(msg.text()), 5000)
  })
})