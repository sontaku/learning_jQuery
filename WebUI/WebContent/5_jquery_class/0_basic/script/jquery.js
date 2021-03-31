$(function() {
	
	
	// 1) 첫번째 요소
	//$('li:first').css({'border':'2px solid green'});

	// 2) 짝수 요소 찾기
	//$('li:nth-child(even)').css('border', '0.5px solid blue');
	
	// 3) 네번째 요소 찾기
	//$('li:eq(3)').css('border', '1px solid red')
	
	// 4) 세번째보다 작은 요소 찾기
	//$('li:lt(2)').css('border', '1px solid yellow')
	
	// 5) 첫번째를 제외한 요소 찾기
	//$('li:not(li:nth-child(1))').css('border', '1px solid black')
	
	// 6) '튀김'을 포함한 요소 찾기
	//$('li:contains("튀김")').css('border', '1px solid black');

	//-----------------------------------------
	// li 요소에 마우스 올라가면 bg 클래스 적용하고
	// 	마우스가 내려가면 bg 클래스 적용해지
	$('body > ul > li:not(li:has(ul))').hover(function() {
		$(this).addClass('bg');
	}, function() {
		$(this).removeClass('bg');
	});

	// 각각의 그룹에서 첫번쨰 li 요소를 찾아 클래스(border) 적용
	//$('body > ul > li:nth-child(1)').addClass('borderRed');
	//$('body > ul > li:first-of-type').addClass('borderRed');
	//$('body > ul > li:first-child').addClass('borderRed');
	$('body > ul').find('li:first').addClass('borderRed');
})

