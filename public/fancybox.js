$(document).ready(function(){
   $('a[rel="fancybox_default"]').fancybox({
         'titleShow'          : true,
         'title'              : $(this).attr('title'),
      	'titlePosition'      : 'outside',
         'padding'            : 10,
         'margin'             : 20,
         'opacity'            : false,
         'modal'              : false,
         'cyclic'             : false,
         'scrolling'          : 'auto',
         'width'              : 800,
         'height'             : 400,
         'autoScale'          : true,
         'autoDimensions'     : true,
         'centerOnScroll'     : false,
         'hideOnOverlayClick' : true,
         'hideOnContentClick' : true,
         'enableEscapeButton' : true,
         'overlayShow'        : true,
         'overlayOpacity'     : 0.4,
         'overlayColor'       : '#000',
         'transitionIn'       : 'elastic',
         'transitionOut'      : 'elastic',

	 /*
	  * UN-COMMENT THE TWO LINES BELOW TO ENABLE EASING
         */
         /* 'easingIn'           : 'easeInCirc', */
         /* 'easingOut'          : 'easeOutCirc',*/

         'speedIn'            : 600,
         'speedOut'           : 200,
         'ajax'               :
         {
         }
   });

   $('a[rel="fancybox_profile1"]').fancybox({
         'titleShow'          : true,
         'title'              : $(this).attr('title'),
      	'titlePosition'      : 'over',
         'margin'             : 20,
         'opacity'            : false,
         'modal'              : false,
         'cyclic'             : false,
         'scrolling'          : 'auto',
         'width'              : 300,
         'height'             : 350,
         'autoScale'          : true,
         'autoDimensions'     : true,
         'centerOnScroll'     : false,
         'hideOnOverlayClick' : true,
         'hideOnContentClick' : true,
         'enableEscapeButton' : true,
         'overlayShow'        : true,
         'overlayOpacity'     : 0.8,
         'overlayColor'       : '#000',
         'transitionIn'       : 'elastic',
         'transitionOut'      : 'elastic',
         'speedIn'            : 800,
         'speedOut'           : 200,
         'ajax'               :
         {
         }
   });

   $('a[rel="fancybox_profile2"]').fancybox({
         'titleShow'          : true,
         'title'              : $(this).attr('title'),
         'padding'            : 10,
         'margin'             : 20,
         'opacity'            : false,
         'modal'              : false,
         'cyclic'             : false,
         'scrolling'          : 'auto',
         'width'              : 800,
         'height'             : 400,
         'autoScale'          : true,
         'autoDimensions'     : true,
         'centerOnScroll'     : false,
         'hideOnOverlayClick' : true,
         'hideOnContentClick' : true,
         'enableEscapeButton' : true,
         'overlayShow'        : true,
         'overlayOpacity'     : 0.8,
         'overlayColor'       : '#00f',
         'transitionIn'       : 'elastic',
         'transitionOut'      : 'elastic',
         'speedIn'            : 1000,
         'speedOut'           : 1000,
         'ajax'               :
         {
         }
   });

   $('a[rel="fancybox_profile3"]').fancybox({
         'titleShow'          : true,
         'title'              : $(this).attr('title'),
         'padding'            : 10,
         'margin'             : 20,
         'opacity'            : false,
         'modal'              : false,
         'cyclic'             : false,
         'scrolling'          : 'auto',
         'width'              : 800,
         'height'             : 400,
         'autoScale'          : true,
         'autoDimensions'     : true,
         'centerOnScroll'     : false,
         'hideOnOverlayClick' : true,
         'hideOnContentClick' : true,
         'enableEscapeButton' : true,
         'overlayShow'        : true,
         'overlayOpacity'     : 0.8,
         'overlayColor'       : '#f00',
         'transitionIn'       : 'elastic',
         'transitionOut'      : 'elastic',
         'speedIn'            : 300,
         'speedOut'           : 300,
         'ajax'               :
         {
         }
   });

});
