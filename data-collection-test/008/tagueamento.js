jQuery("button").on("click", function(){
	check();
});

function check () {
	var a = jQuery("#mensagem div");
  if(a.text().length > 0){
  	if(a.change()){
  		console.log(a.text());
  	}else{
  		setTimeout(check, 50);
  	}
    	
  } else {
    setTimeout(check, 50);
  }
}