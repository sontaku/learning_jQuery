/**
 * 
 */
$(function(){
	// (1) '감추기' 버튼을 클릭하면 위 그림을 감추기(사라지게)
	$('#hideButton').click(function() {
		console.log("숨기기")
		//$('#pic').hide();
		//$('#pic').animate({'width':0, 'height':0, 'opacity' : 0}, 1000, 'linear');
		$('#pic').animate({'opacity' : 0}, 1000, 'linear');
		
	})
	
	// (2) '보이기' 버튼을 클릭하면 위 그림을 보이게
	$('#showButton').click(function() {
		console.log("보이기")
		//$('#pic').css('display', '');
		//$('#pic').animate({'width':500, 'height':269, 'opacity' : 1}, 1000, 'linear');
		$('#pic').animate({'opacity' : 1}, 1000, 'linear');
	})
	
	//---------------------------------------------------------
	// (3) - 선택 (hint : toggle )
	//		한 번 클릭하면 감추기 다시 클릭하면 보이게
	// 만든거
//	$('#toggleButton').click(function() {
//		console.log("감추기보이기")
//		//$('#pic').toggle();
//		//if($('#pic').css('opacity') == 1) $('#pic').animate({'opacity' : 0}, 1000, 'linear');
//		//if($('#pic').css('opacity') == 0) $('#pic').animate({'opacity' : 1}, 1000, 'linear');
//		$('#pic').css('opacity') == 1 ? $('#pic').animate({'opacity' : 0}, 1000, 'linear') : $('#pic').animate({'opacity' : 1}, 1000, 'linear')
//	})
	
	// 강사님 버전
	$('#toggleButton').click(function() {
		let img = $('p#intro > img');
		img.is(':visible') ? img.fadeOut(1000) : img.fadeIn(1000);
	});
	
	// 테이블의 홀수행의 배경색 지정
//	$('tr').css({'background' : '#AA34CC'})
	
	// 테이블 내용 중에서 짝수행의 배경색과 글자색을 지정
//	$('tr:odd').css({'background' : 'black'})
//	$('tr:even').css({'background' : 'white'})
//	$('td:odd').css({'color' : 'blue'})
//	$('td:even').css({'color' : 'black'})
	
//	$('tr:nth-child(even)').css({'background' : 'black', 'color' : 'white'})
	
//	$('tr:even').css({'background' : 'black', 'color' : 'white'})
//	$('tr:eq(even)').css({'background' : 'green', 'color' : 'orange'})
//	$('td:nth-child(odd)').css({'background' : 'orange', 'color' : 'green'})
	
//	$('tbody tr:odd').addClass('table_striping')
	
//	let tbe = $('td');
//		tbe.mouseenter(function() {
//			$(this).css('background', 'black')
//		}).mouseleave(function() {
//			$(this).css('background', 'white')
//	})
	
	let tbe = $('td');
		tbe.mouseenter(function() {
			$(this).addClass('table_striping')
		}).mouseleave(function() {
			$(this).removeClass('table_striping')
	})
})



