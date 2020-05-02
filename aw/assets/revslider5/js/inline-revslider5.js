(function($){

	'use strict';

	var revapi17,
		tpj;
	(function () {
		if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
		else onLoad();

		function onLoad() {
			if (tpj === undefined) {
				tpj = jQuery;
				if ("off" == "on") tpj.noConflict();
			}
			if (tpj("#rev_slider_17_1").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev_slider_17_1");
			} else {
				revapi17 = tpj("#rev_slider_17_1").show().revolution({
					sliderType: "standard",
					//jsFileLocation: "//localhost/rev2/revslider/public/assets/js/",
					sliderLayout: "fullscreen",
					dottedOverlay: "none",
					delay: 5000,
					navigation: {
						onHoverStop: "off",
					},
					responsiveLevels: [1200, 1200, 1199, 991, 767, 480],
					visibilityLevels: [1200, 1200, 1199, 991, 767, 480],
					gridwidth: [1170, 1170, 940, 700, 520, 320],
					gridheight: [600, 600, 500, 400, 400, 400],
					lazyType: "none",
					shadow: 0,
					spinner: "spinner0",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenAutoWidth: "off",
					fullScreenAlignForce: "off",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",
					disableProgressBar: "on",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});
			}; /* END OF revapi call */
		}; /* END OF ON LOAD FUNCTION */
	}()); /* END OF WRAPPING FUNCTION */
	
})(jQuery);