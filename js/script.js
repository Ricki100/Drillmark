$(document).ready(function () {
	//$('.bearing-tab').nextAll('.detail-wrapper').css('border', '2px solid red');

	$('.power').click(function () {
		$(this).nextAll().toggle(500).css('display', 'block');
	});

	$('.bearing').click(function () {
		$(this).next('.container').toggle(500).css('display', 'block');
	});

	$(function () {
		$('.tabs').tabs();
	});
});

/*$(document).ready(function () {
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});*/
