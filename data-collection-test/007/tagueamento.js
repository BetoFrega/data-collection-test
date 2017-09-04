var a = jQuery("a");
var b = [];
a.each(function(){
	b.push(jQuery(this).data("sku"));
});
console.log(b);
a.on('mousedown', function() {
	var c = [];
	var g = jQuery(this);
	var d = g.find(".name").text();
	var e = g.find(".price").text();
	var f = g.data("sku");
	c.push(d,e,f)
	console.log(c);
});