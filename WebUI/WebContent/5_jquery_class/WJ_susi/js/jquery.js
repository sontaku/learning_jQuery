/**/
$(function() {
    $('.item').hover(function() {
        $('.item').css('cursor', 'pointer')
    }, function() {
        $('.item').css('cursor', '')
    })

    $('.item').click(function() {
        //alert($(this).find('.menu_name').text())
        //alert($(this).find('.menu_price').text())
    	let menu_name = $(this).find('.menu_name').text()
    	let menu_price = $(this).find('.menu_price').text()
    	let count = 1;
    	let td = $('#price_tbl td')

    	$('#price_tbl tr').each(function(menu_name) {
    		alert($('td:eq(0)').text())
    		if($('td:eq(1)').text() == menu_name) {
    			alert('중복')
    			td.eq(1).count += 1;
    			$('#price_tbl').append('<tr><td>' + menu_name + '</td><td>' + td.eq(1).count + '</td><td>' + menu_price + '</td></tr>')
    		} 
    	})


    	
    	
    	
    	
    	
    	
    	
    	$('#price_tbl').append('<tr><td>' + menu_name + '</td><td>' + count + '</td><td>' + menu_price + '</td></tr>')
    	
    	
    	
    })
})