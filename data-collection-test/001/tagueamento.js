var a = jQuery("button");
var b = [];

jQuery(a).each(function(i){
	b.push(this.innerHTML);
});
console.log(b);

jQuery(a).on("mousedown", function(){
	console.log(this.innerHTML);
});