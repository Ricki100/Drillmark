$(document).ready(function () {
	$('.power').click(function () {
		$(this).siblings().toggle(500).css('display', 'block');
	});
});
