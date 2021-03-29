/**
 * 
 */
$(function(){
	// (1) '감추기' 버튼을 클릭하면 위 그림을 감추기(사라지게)
	$('#hideButton').click(function() {
		console.log("숨기기")
		//$('#pic').hide();
		$('#pic').animate({'width':0, 'height':0}, 1000, 'linear');
		
	})
	
	// (2) '보이기' 버튼을 클릭하면 위 그림을 보이게
	$('#showButton').click(function() {
		console.log("보이기")
		//$('#pic').css('display', '');
		$('#pic').animate({'width':500, 'height':269}, 1000, 'linear');
	})
	
	//---------------------------------------------------------
	// (3) - 선택 (hint : toggle )
	//		한 번 클릭하면 감추기 다시 클릭하면 보이게
	$('#toggleButton').click(function() {
		console.log("감추기보이기")
		$('#pic').toggle();
	})
})