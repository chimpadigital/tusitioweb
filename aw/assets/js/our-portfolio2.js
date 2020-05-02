$(window).load(function(){

	'use strict';

	/**
     * Table Of Content
     * 
     *  1. [PORTFOLIO FILTER]	- Our Portfolio 2
     *
     */

    var $container = $('#section-ourportfolio3 .portfolioContainer .row');
    $container.isotope({
        filter: '*',
        itemSelector: '#section-ourportfolio3 .item',
		masonry: {
		    
		   isFitWidth: true
		}
    });
 
    $('#section-ourportfolio3 .portfolioFilter a').on('click', function(){
        $('#section-ourportfolio3 .portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            itemSelector: '#section-ourportfolio3 .item',
		    masonry: {
		    	
			    isFitWidth: true
		    }
         });
         return false;
    }); 

});