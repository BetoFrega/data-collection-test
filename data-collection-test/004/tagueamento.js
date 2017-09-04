var a = document.getElementsByTagName("button");
var b = [];
for (var i=0; i<a.length; i++){
	b.push(a[i].innerHTML);
};
console.log(b);
var c = document.getElementById("botoes");
c.addEventListener('mousedown', function(e){
	var d = e.target;
	if(d.tagName === "BUTTON"){
		console.log(d.innerHTML);
	}
});
