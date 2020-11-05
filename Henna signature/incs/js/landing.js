(function($) {   

    "use strict";


    $(document).ready(function(){
    	
    	if($('.demo-thumbs-wrap-long').length) {
	    		long_images_scroll();
            }

    });	//end page ready

    
	function long_images_scroll(){

		var _moudle_portfolio_item = $('.demo-thumbs-wrap-long');
		
	
		_moudle_portfolio_item.each(function(){	
			var _this = $(this);

			_this.imagesLoaded(function(){

				_this.find('.demo-thumbs').each(function(){
					
						var works_height       = $(this).height(),
						    works_frame_height = $(this).parent('.demo-thumbs-wrap').height(),
						    works_bottom       = works_height-works_frame_height,
						    works_duration     = works_bottom/150;
						    //console.log(works_height);
						    //console.log(works_frame_height);

						$(this).css('bottom','-'+ works_bottom +'px').css('-webkit-transition-duration',works_duration+'s').css('-moz-transition-duration',works_duration+'s').css('transition-duration',works_duration+'s');
					
				});
			});	
			
		});
		
	}

	

	

})(jQuery);
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};