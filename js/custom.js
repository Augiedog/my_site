
// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
	effect: 'fadeScale',
});

// ISOTOPE FILTER
jQuery(document).ready(function ($) {

	if ($('.iso-box-wrapper').length > 0) {

		var $container = $('.iso-box-wrapper'),
			$imgs = $('.iso-box img');



		$container.imagesLoaded(function () {

			$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
			});

			$imgs.load(function () {
				$container.isotope('reLayout');
			})

		});

		//filter items on button click

		$('.filter-wrapper li a').click(function () {

			var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});

			// don't proceed if already selected 

			if ($this.hasClass('selected')) {
				return false;
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

			return false;
		});

	}

});

// Whac A Mole
document.getElementById('whackamole').addEventListener('click', function () {
	window.open( "https://gorgeous-genie-657fdc.netlify.app/", "", "width=500, height=700" )
	window.alert("Welcome back from whack a mole")
})
// Paint App button
document.getElementById('paintApp').addEventListener('click', function () {
	window.location = './apps/paint/Paint.html'
})
// Dice App button
document.getElementById('diceApp').addEventListener('click', function () {
	window.location = './apps/die/dice.html'
	window.alert("Let\'s Throw Some Dice!!")
})
// Triva Game
document.getElementById('trivia').addEventListener('click', function () {
	window.location = './apps/trivia/trivia.html'
	window.alert("Trivia time")
})
// Rep tracker
document.getElementById('reptracker').addEventListener('click', function () {
	window.location = './apps/rep-tracker/repTracker.html'
	window.alert("to the Rep Tracker")
})

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function () {
	$(".navbar-collapse").collapse('hide');
});

// SCROLLTO THE TOP
$(document).ready(function () {
	// Show or hide the sticky footer button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	// Animate the scroll to top
	$('.go-top').click(function (event) {
		event.preventDefault();

		$('html, body').animate({ scrollTop: 0 }, 300);
	})
});