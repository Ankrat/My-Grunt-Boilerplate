(function () {
  'use strict';

  require.config({
      'shim': {
          underscore: {
              exports: '_'
          },
          owlcarousel: {
              deps: [
                  'jquery'
              ],
              exports: 'owlCarousel'
          },
      },
      'paths': {
					jquery     : 'js/libs/jquery',
					underscore : 'js/libs/underscore',
					owlcarousel: 'js/libs/owl.carousel'
      }
  });

  require([
    'jquery',
    'owlcarousel'
  ], function ($, owlCarousel) {

    // Declaration of the variables used
    // Only in THIS scope
    var myVar;

    // Remote file Load
    // get OutOf libs/, OutOf scripts/
    // $.getJSON('../../dataJSON/myData.json', function(json) {
    //   myFunction(json.items);
    // });

    // Manipulate the json data
    function myFunction( data ){
      // Sample use of my data
      _.each( data, function( val, key, list){
        //DO something with each entries of my data
      });

      return;
    }

    $("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

  });
  // End of function()

}());


