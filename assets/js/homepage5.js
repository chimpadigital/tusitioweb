 /**
 * Table Of Content
 * 
 *  1. FullpageJS    - Homepage 5
 *  2. [Section 3]   - Image By Tab
 *  
 *
 */

$(document).ready(function(){

	'use strict';

	// 1. FullpageJS    - Homepage 5
	var myFullpage = new fullpage('#fullpage', {
		anchors: ['01', '02', '03', '04', '05'],
		navigation: true,
		licenseKey: '1677A455-FB654DF5-84C89E6A-99874B08',
		css3: true,
		navigationTooltips: ['Inicio', 'Tipos', 'Características', 'Trabajos', 'Contacto'],
		responsiveWidth: 767,
    	showActiveTooltip: true
	});
	$(document).on('click', '.scroll-downs', function(){
	  	fullpage_api.moveSectionDown();
	});

	// 2. [Section 3]   - Image By Tab
    $("#section-homepage5 #section-3 .right .accordion a").on('click', function(e) {
        var liToShow = $(this).attr("href");
        $("#section-homepage5 #section-3 .left ul.list-image li").hide();
        $(liToShow).show();
        e.preventDefault();
    });

});
	

