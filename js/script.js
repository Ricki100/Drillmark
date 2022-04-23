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
