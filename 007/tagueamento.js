var allA = document.querySelectorAll("a");
var skus = [];
for(var i = 0; i < allA.length; i++) {
	skus.push({
		name: allA[i].childNodes[1].textContent,
		price: parseFloat(allA[i].childNodes[5].textContent),
		sku: allA[i].getAttribute("data-sku")
	})

	allA[i].addEventListener("click", function(){
		console.log({
			name: this.childNodes[1].textContent,
			price: parseFloat(this.childNodes[5].textContent),
			sku: this.getAttribute("data-sku")
		}
		);
	});
}
console.log(skus);