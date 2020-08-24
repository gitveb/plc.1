$(document).ready(function () {
	$('#offer-form').validate({
		rules: {
			username: "required",
			email: {
				required: true,
				email: true
			},
			message: "required"
		},
		messages: {
			username: "Укажите имя!",
			email: "Введите почтовый адрес!",
			message: "Укажите примерные параметры груза!"
		}
	});
});

$('.phone').mask('+7 (999) 999-99-99');

$(function () {
	$("a[href^='#header']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
	$("a[href^='#service']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
	$("a[href^='#track']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
	$("a[href^='#portfolio']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
	$("a[href^='#footer']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
});


$(document).ready(function () {
	/**
	 * При прокрутке страницы, показываем или срываем кнопку
	 */
	$(window).scroll(function () {
		// Если отступ сверху больше 50px то показываем кнопку "Наверх"
		if ($(this).scrollTop() > 50) {
			$('#arrow').fadeIn();
		} else {
			$('#arrow').fadeOut();
		}
	});

	/** При нажатии на кнопку мы перемещаемся к началу страницы */
	$('#arrow').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

});

/**фиксация меню */
jQuery("document").ready(function ($) {

	var nav = $('.header-menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("header-menu__fixed");
		} else {
			nav.removeClass("header-menu__fixed");
		}
	});

});



var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header-nav');
menuBtn.addEventListener('click', function () {
	menu.classList.toggle('header-nav-active');
	menuBtn.classList.toggle('menu-btn-active');
});