$(window).load(function(){

	'use strict';

	/**
     * Table Of Content
     * 
     *  1. [PORTFOLIO FILTER]	- Our Portfolio 2
     *
     */

    var $container = $('#section-ourportfolio2 .portfolioContainer .row');
    $container.isotope({
        filter: '*',
        itemSelector: '#section-ourportfolio2 .item',
		masonry: {
		    // use element for option
		    columnWidth: 10
		}
    });
 
    $('#section-ourportfolio2 .portfolioFilter a').on('click', function(){
        $('#section-ourportfolio2 .portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            itemSelector: '#section-ourportfolio2 .item',
		    masonry: {
			    // use element for option
			    columnWidth: 10
		    }
         });
         return false;
    }); 

});