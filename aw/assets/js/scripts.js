(function($){

	'use strict';

    /**
     * Table Of Content
     * 
     *  1.  [Navigation Menu]    					- Slide
     *  2.  [Navigation Menu]	 					- Search
     *  3.  [Swiper Slider]      					- Slide
     *  4.  [SCROLL]             					- Smooth Scroll
     *  5. [CSS Animate, Waypoint, EZ Animate]		- Animate
     *  6.  [Navigation Menu]    					- Add Background on Scroll
     *  7.  [OWL Carousel]       					- Testimonial 1
     *  8.  [OWL Carousel]       					- Testimonial 2
     *  9.  [OWL Carousel]       					- Testimonial v2
     *  10.  [OWL Carousel]       					- Testimonial v3
     *  11. [Preloader]          					- Loading Page
     *  12. [Image Switcher]     					- Portfolio Detail 1
    
     *
     */
    
   
	$(document).ready(function () {
		// 1. [Navigation Menu] - Slide
		
		// Navbar Collapse 1
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #main-content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');

            // Change icon collapse
            $(this).toggleClass('active');
        });
        // Navbar Collapse 2
        $('#sidebarCollapse2').on('click', function () {
            // Change icon collapse
            $(this).toggleClass('active');
            // Add Sticky Menu for Background
            $( '#section-navbar2' ).toggleClass( 'bg-navbar' );
            $( '#sidebarCollapse.v3' ).toggle();
        });

        // Fix Issue overlap sidemenu dropdown
		$('#sidebar').on( 'click','a[aria-expanded=false]', function(){
        	$('#sidebar a[aria-expanded=true]').attr('aria-expanded', 'false').addClass('collapsed');
        	$('#sidebar .cmz-sidebarmenu').removeClass('show');
        });

        $('#section-navbar1 .navbar-btn, #section-navbar2 .v3.navbar-btn').on('click', function(){
        	$('#sidebar .cmz-sidebarmenu').removeClass('show');
        });

        // 2. [Navigation Menu] - Search
        $('#section-search').on('click','.navigation-search .ns-close .close', function () {
            $('#section-search').addClass('close-search');
        });
        $('.search-btn').on('click', function () {
            $('#section-search').removeClass('close-search');
        });

        // 3. [Swiper Slider] - Slide
	    var swiper = new Swiper('.swiper-container', {
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
	    });

	    // 4. [SCROLL] - Smooth Scroll
		if( $(window).width() >= 768 ){
			$('a.scroll-down').on('click',function() {
			    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			        var target = $(this.hash);
			        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			        if (target.length) {
				        $('html, body').animate({
				            scrollTop: target.offset().top-105
				        }, 500);
				        return false;
			        }
			    }
		    });
		}else{
			$('a.scroll-down').on('click',function() {
			    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			        var target = $(this.hash);
			        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			        if (target.length) {
				        $('html, body').animate({
				            scrollTop: target.offset().top-70
				        }, 500);
				        return false;
			        }
			    }
		    });
		}

		//5. [CSS Animate, Waypoint, EZ Animate]		- Animate
		InitWaypointAnimations({
	        animateClass: "ez-animate"
	    });

    });
    

	// 6. [Navigation Menu] - Add Background on SCroll
	$(document).on( 'scroll', function(){
		if( $(this).scrollTop() > 10 ){
				
			$( '#section-navbar1, #section-navbar2' ).addClass( 'sticky-menu' );
			
		}else{

			$( '#section-navbar1, #section-navbar2' ).removeClass( 'sticky-menu' );
			
		}
	});

	// 7. [OWL Carousel] - Testimonial 1
	$('#section-testimonial1 .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"],
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	});


	// 8. [OWL Carousel] - Testimonial 2
	$('#section-testimonial2.v1 .owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
        	0:{
	        	stagePadding: 0,
	            items:1
	        },
        	768:{
        		center:true,
	        	stagePadding: 0,
	            items:2
	        },
        	1366:{
        		center:false,
	        	stagePadding: 90,
	            items:2
	        },
	        1905:{
	        	center:false,
	        	stagePadding: 360,
	            items:2
	        }
	    }
	});

	// 9. [OWL Carousel]       - Testimonial v2
	$('#section-testimonial2.v2 .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsive:{
        	0:{
	            items:1
	        },
        	768:{
	            items:2
	        },
        	1200:{
	            items:2
	        }
	    }
	});

	// 10. [OWL Carousel]       - Testimonial v3
	$('#section-testimonial2.v3 .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsive:{
        	0:{
	            items:1
	        },
        	768:{
	            items:2
	        },
        	1200:{
	            items:2
	        }
	    }
	});

	//11. [Preloader]          - Loading Page
	$(window).on('load', function() {
        // Animate loader off screen
        $("#section-preloader").fadeOut("slow");;
    });

    //12. [Image Switcher]     - Portfolio Detail 1
    $("#section-portfoliodetails1").on('click','.list-thumbnail .item a', function(e) {
        var liToShow = $(this).attr("href");
        $("#section-portfoliodetails1 .contents .main-image-detail ul li").hide();
        $(liToShow).show();
        e.preventDefault();
	});
	

	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 50 - Math.random() * 5;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

})(jQuery);
        
   