/**
 * 
 */

$(function() {
	// $('.rollover:nth-child(1)').click(function(){
	// $('.rollover:nth-child(1)').attr('<img src="./imgs/menu01_on.png"
	// alt="Home">')
	// })
	// $('.rollover:nth-child(2)').click(function(){
	// $('.rollover:nth-child(3)').attr('<img src="./imgs/menu02_on.png"
	// alt="Home">')
	// })
	// $('.rollover:nth-child(3)').click(function(){
	// $('.rollover:nth-child(3)').attr('<img src="./imgs/menu03_on.png"
	// alt="Home">')
	// })

	// rollover 클래스 아래 전체 img
	var img = $('.rollover > img');
		img.hover(function() {
			// 마우스 올라간 태그만 변경
			var src = $(this).attr('src').replace('_off', '_on');
			$(this).attr('src', src);
			$(this).css('border','2px black groove');
		}, function() {
			// 마우스 빠져나간 태그만 변경
			var src = $(this).attr('src').replace('_on', '_off');
			$(this).attr('src', src);
			$(this).css('border','');
		})

})