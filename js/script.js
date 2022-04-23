$(document).ready(function () {
	//$('.power').nextAll('.product-img').css('border', '2px solid red');

	$('.power').click(function () {
		$(this).nextAll().toggle(500).css('display', 'block');
	});
});
