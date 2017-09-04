var c = [];
var a = jQuery("span").each(function(i){
	c.push(this.innerHTML);
});
console.log(c);
jQuery("#botoes").on("mousedown", "a", function(){
	var b = jQuery(this).index();
	console.log(a[b].innerHTML);
});