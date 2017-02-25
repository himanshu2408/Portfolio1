/*;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery) */

;(function(){

// Menu settings

$('#menuToggle, .menu-close').on('click', function(){
$('#menuToggle').toggleClass('active');
$('body').toggleClass('body-push-toleft');
$('#theMenu').toggleClass('menu-open');
});
$('.smoothScroll').on('click',function(){
$('#menuToggle').removeClass('active');
$('body').removeClass('body-push-toleft');
$('#theMenu').removeClass('menu-open');
});

})(jQuery)