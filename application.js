$(document).ready(function() {
	$('.box1').hover(function() {
		$('#core').toggleClass('hide');
		$('#base').toggleClass('hide');
		$('#barrow').toggleClass('hide');
	});

	$('.box2').hover(function() {
		$('#core').toggleClass('hide');
		$('#high').toggleClass('hide');
		$('#harrow').toggleClass('hide');
	});

	$('.box3').hover(function() {
		$('#core').toggleClass('hide');
		$('#camp').toggleClass('hide');
		$('#carrow').toggleClass('hide');
	});
});
