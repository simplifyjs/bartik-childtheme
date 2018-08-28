(function($){
	Drupal.behaviors.bartik_child = {
	  attach: function (context, settings) {
		  $('#menu-trigger').on('click', function(){
		    $('#main-menu', context).slideToggle('fast');
		  });
	  }
	};
  
  
})(jQuery);


