
jQuery(document).ready(function() {

	'use strict';

	if( !jQuery('html').hasClass('ie8') ) {
		jQuery('.counter-value').countUp({
		  	'time': 2000,
		  	'delay': 10
		});
	}
});