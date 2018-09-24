(function(document, window, $) {
   'use strict';

   var products = $('#produtos').find('a'),
       skusValues = [];

   products.each(function() {
     skusValues.push($(this).attr('data-sku'));
   });
   console.log(skusValues);

   products.on('click', function() {
     var product = {};
     product.name  = $(this).find('p.name').text();
     product.price = $(this).find('p.price').text();
     product.sku   = $(this).attr('data-sku');
     console.log(product);
   });
})(document, window, jQuery);