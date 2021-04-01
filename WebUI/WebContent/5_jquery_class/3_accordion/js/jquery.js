/**
 * 
 */

$(function() {
	$('.accordion').each(function() {
		let allDt = $(this).find('dt');
		let allDd = $(this).find('dd');

		// 모든 dd 숨김
		allDd.hide();
		
		allDt.css('cursor', 'pointer');
		allDt.click(function() {
			
			// 새로운 dd 오픈 전 모든 dd 숨김
			allDd.hide();
			$(this).next().show();
			//$(this).next().toggle();

			// 이미 열린 dt의 커서 디폴트 값으로 변경
			$(this).css('cursor', 'default');
		})
	})
})