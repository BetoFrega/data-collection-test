var a = [];
var c = [];
jQuery("button").each(function(){
	a.push(this.innerHTML.replace(/\S{10}/,""));
})

jQuery("#botoes").on("mousedown","button",function(){
	var b = this.innerHTML.replace(/\S{10}/,"");
	console.log(b);
	eval('var d = /'+b+'/g');
	if(!d.test(c) || c.length == 0){
		c.push(b);
	}
	if(c.length == a.length){
		console.log(c.toString());
	}
});

// Retorna uma string com a ordem clicada e sem repetições após clicar em todos os botões