$(function () {

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

});

//Default active on home
$('#s1').addClass("active");

/*
Smooth scrolling
*/
$("#s1").click(function () {
	$('html, body').animate({
		scrollTop: $("#p1").offset().top - 62
	}, 1000);
	return false;
});

$("#s2").click(function () {
	$('html, body').animate({
		scrollTop: $("#p2").offset().top - 62
	}, 1000);
	return false;
});

$("#s3").click(function () {
	$('html, body').animate({
		scrollTop: $("#p3").offset().top - 62
	}, 1000);
	return false;
});

$("#s32").click(function () {
	$('html, body').animate({
		scrollTop: $("#p3").offset().top - 62
	}, 1000);
	return false;
});

$("#s4").click(function () {
	$('html, body').animate({
		scrollTop: $("#p4").offset().top - 62
	}, 1000);
	return false;
});

$("#s5").click(function () {
	$('html, body').animate({
		scrollTop: $("#p5").offset().top - 62
	}, 1000);
	return false;
});

$("#s6").click(function () {
	$('html, body').animate({
		scrollTop: $("#p6").offset().top - 62
	}, 1000);
	return false;
});

$("#s7").click(function () {
	$('html, body').animate({
		scrollTop: $("#p7").offset().top - 62
	}, 1000);
	return false;
});

$("#s8").click(function () {
	$('html, body').animate({
		scrollTop: $("#p8").offset().top - 62
	}, 1000);
	return false;
});

var clearCurrentActive = function () {
	$('.s1').removeClass("active");
	$('.s2').removeClass("active");
	$('.s3').removeClass("active");
	$('.s4').removeClass("active");
	$('.s5').removeClass("active");
	$('.s6').removeClass("active");
	$('.s7').removeClass("active");
	$('.s8').removeClass("active");
};

window.addEventListener("scroll", function () {
	var element1 = document.getElementById("p1");
	var element2 = document.getElementById("p2");
	var element3 = document.getElementById("p3");
	var element4 = document.getElementById("p4");
	var element5 = document.getElementById("p5");
	var element6 = document.getElementById("p6");
	var element7 = document.getElementById("p7");
	var element8 = document.getElementById("p8");

	var height1 = element1.offsetTop - 20;
	var height2 = element2.offsetTop - 63;
	var height3 = element3.offsetTop - 63;
	var height4 = element4.offsetTop - 63;
	var height5 = element5.offsetTop - 63;
	var height6 = element6.offsetTop - 63;
	var height7 = element7.offsetTop - 63;
	var height8 = element8.offsetTop - 300;


	var curr = window.scrollY;

	if (curr >= height8) {
		clearCurrentActive();
		$('.s8').addClass("active");
	} else if (curr >= height7) {
		clearCurrentActive();
		$('.s7').addClass("active");
	} else if (curr >= height6) {
		clearCurrentActive();
		$('.s6').addClass("active");
	} else if (curr >= height5) {
		clearCurrentActive();
		$('.s5').addClass("active");
	} else if (curr >= height4) {
		clearCurrentActive();
		$('.s4').addClass("active");
	} else if (curr >= height3) {
		clearCurrentActive();
		$('.s3').addClass("active");
	} else if (curr >= height2) {
		clearCurrentActive();
		$('.s2').addClass("active");
	} else {
		clearCurrentActive();
		$('.s1').addClass("active");
	}
});

// Remove the transition class
const mainlogo = document.querySelector('.mainlogo');
mainlogo.classList.remove('mainlogoTransition');

// Create the observer:
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			mainlogo.classList.add('mainlogoTransition');
			return;
		}

		mainlogo.classList.remove('mainlogoTransition');
	});
});

observer.observe(document.querySelector('.mainlogoWrapper'));

// Remove the transition class
const mainlogotext = document.querySelector('.mainlogotext');
mainlogotext.classList.remove('mainlogoTextTransition');

// Create the observer:
const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			mainlogotext.classList.add('mainlogoTextTransition');
			return;
		}

		mainlogotext.classList.remove('mainlogoTextTransition');
	});
});

observer2.observe(document.querySelector('.mainlogoTextWrapper'));



function ticketLink() {
	window.open("https://ticketing.pembrokemayball.co.uk/home");
}
