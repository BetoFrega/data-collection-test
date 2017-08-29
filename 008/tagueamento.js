(function(){
	var target = document.querySelector('#mensagem');
	var observer = new MutationObserver(function(m) {
  		  if(!!target.querySelector('div'))
  		      console.log(target.querySelector('div').innerHTML);
	});
	var config = { characterData: true, childList: true, subtree: true};
	observer.observe(target, config);
})();