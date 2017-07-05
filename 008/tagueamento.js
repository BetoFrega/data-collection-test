var cron;
var msg = "";

function cronStart(){
	cron = setInterval(function(){
		if($("#mensagem").text() != msg){
			console.log($("#mensagem").text());
			stopCron();
		}
	}, 500);
}


function stopCron() {
    clearInterval(cron);
}

$("#botao button").click(function(){
	msg = $("#mensagem").text();
	cronStart();
})