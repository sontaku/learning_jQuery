/**/
$(function() {
	$('.item').hover(function() {
		$('.item').css('cursor', 'pointer')
	}, function() {
		$('.item').css('cursor', '')
	})

	// 메뉴 클릭시 event
	$('.item').click(function() {
		let menu_name = $(this).find('.menu_name').text()
		let menu_price = $(this).find('.menu_price').text()
		let total_price = $('#payment_area > p:nth-child(2)').text().slice(0, -1);
		let count = 1;
		let td = $('#price_tbl td')
		let tr = $('#price_tbl tr')
		let flag = false;
				
		// 중복 검사
		$.each(tr, function(index, item) {
			let menu_text = $('tr:eq(' + index + ') > td:eq(0)').text()
			if (menu_text == menu_name) {
				flag = true;
				let old_quantity = $('tr:eq(' + index + ') > td:eq(1)').text()
				let old_price = $('tr:eq(' + index + ') > td:eq(2)').text().slice(0, -1)
				
				old_quantity = parseInt(old_quantity) + 1
				$('tr:eq(' + index + ') > td:eq(1)').text(old_quantity)
				old_price = parseInt(old_price) + parseInt(menu_price.slice(0, -1)) + "원"
				$('tr:eq(' + index + ') > td:eq(2)').text(old_price)
			}
		});
				
		// 중복 아닐시 메뉴 추가
		if (flag == false) {
			$('#price_tbl').append('<tr><td>' + menu_name + '</td><td class="choice_menu_quantity">' + count + '</td><td class="choice_menu_price">' + menu_price + '</td></tr>')
		}
				
		// 합계 금액 계산
		$.each(tr, function(index, item) {
//			if(index != 0 ){
//				let old_total_price = total_price
//				//alert(total_price)
//				old_total_price += parseInt($('tr:eq(' + index + ') > td:eq(2)').text());
//				$('#payment_area > p:nth-child(2)').text(total_price + '원')
//			}
			alert(item.cells.item(1))
		});
	})
	
	$('#pay').click(function() {
		let total_price = $('#payment_area > p:nth-child(2)').text().slice(0, -1);
		alert(total_price + "원 결제되었습니다.");
		location.reload();
	});
})