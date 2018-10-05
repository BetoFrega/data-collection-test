$().ready(function(){
  const value = $('#valores span')
  const btn = $('#botoes a')
  const values = []
  value.each(function(){
    values.push($(this).text())
  })
  console.log(values)

  value.one('click', function(){
    $('#valores').css('height', '115px')
    $(this).prepend(`<p>${$(this).text()}</p>`)
  })
  btn.one('click', function(){
    $('#botoes').css('height', '115px')
    $(this).prepend(`<p>${$(this).text()}</p>`)
  })
})