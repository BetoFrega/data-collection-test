$(document).ready(function() {
    $('#botao button').on('click', function() {
        var intervalo = setInterval(wait,1000);
            function wait(){
                if ($('#mensagem div').text() !== "") {
                    console.log($('#mensagem').text());
                    clearInterval(intervalo);
                }
            };
    });
}); 
