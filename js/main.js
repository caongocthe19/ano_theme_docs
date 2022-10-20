(function ($) {
	"use strict";
	$(document).ready(function () {

		// Menu mobile
		$('.mobile-menu').on('click', function () {
			$(this).parents('.site-header').find('.main-menu').toggleClass('open');
			$('.main-menu').slideToggle();
			// if ($('.main-menu').hasClass('open')) {
			// 	// $('.main-menu').css('height', 'auto');

			// } else {
			// 	$('.main-menu').css('height', '0')
			// }

			$(this).parents('body').toggleClass('over-hidden');
		});

		// Back-to-top
		if ($('#back-top').length) {
			var scrollTrigger = 100, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-top').addClass('show');
					} else {
						$('#back-top').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#back-top').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}


		// Tab
		// $(".tab-control li:first-child").addClass("active");

		// var first_tab = $(".tab-control li:first-child a").attr("href");
		// $(first_tab).show();

		// $(".tab-control li a").click(function (event) {
		// 	event.preventDefault();
		// 	$(this).parents("ul").find("li").removeClass("active");
		// 	$(this).parent().addClass("active");
		// 	var id = $(this).attr("href");
		// 	$(".tab-content").hide();
		// 	$(id).show();
		// });
	});
})(jQuery);