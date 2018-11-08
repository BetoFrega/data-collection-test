var btnArray = [];
$(document).ready(function() {
    $('#valores span').each(function() {
        btnArray.push($(this).text());
    });
     console.log(btnArray);
    $('#botoes a').click(function() {
        // Primeiro encontro qual botao foi clicado e uso o indice dele para descobrir o correspondente em relacao ao elemento pai
        var index = $('#botoes a').index(this);
        console.log($('#valores').find('span').eq(index).text());
    })
});