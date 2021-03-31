/**
 *	자바스크립트에서
 *		ex) document.getElementById()
 *
 *		window.href.location
 */
$(function() {
	$('p#intro').animate({
		'padding' : '20px',
		'fontSize' : '30px'
	}, 3000, 'linear')
	
	
	let sumList = $('#navigation li')
	sumList.hover(function() {
		$(this).animate({
			'fontSize': '15px'
		}, 100)
	}, function() {
		$(this).animate({
			'fontSize': '10px'
		}, 100)
	});
	
	// 퀵메뉴
	$(window).scroll(function() {
		$('#navigation').css('top', $(document).scrollTop())
	})
})