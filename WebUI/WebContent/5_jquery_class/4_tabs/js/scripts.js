$(function() {
	// 구조 .tabSet > .tabs > li > a
	// .panels > panel
	let topDiv = $('.tabSet');
	let anchors = topDiv.find('ul.tabs a')
	let panelDivs = topDiv.find('div.panel')
	


	anchors.show();
	panelDivs.hide();
	
	// on 속성 탐색
	let lastAnchor = anchors.filter('.on');
	
	// '#panel1-1'
	let lastPanel = $(lastAnchor.attr('href'));
	lastPanel.show();

	anchors.click(function() {
		// 이전 on class 제거
		lastAnchor.removeClass('on')
		
		// 클릭한 a태그
		let currAnchor = $(this);
		// 현재 선택한 anchor에 'on'클래스 추가
		currAnchor.addClass('on')
		
		// 선택한 anchor가 갖고 있는 href 속성 값
		let currPanel = $(currAnchor.attr('href'));
		
		lastPanel.hide();
		currPanel.show();

		lastAnchor = currAnchor;
		lastPanel = currPanel;
	})
})