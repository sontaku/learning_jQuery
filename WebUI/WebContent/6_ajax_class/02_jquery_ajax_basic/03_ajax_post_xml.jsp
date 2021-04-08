<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>

<script type="text/javascript" src="libs/jquery-1.9.1.min.js"></script>
<script type="text/javascript">
	$(function () {
		let param = {cate : 'book', name : 'kim'};
		
		$.ajax({
			type : 'get',
			data : param,
			url : '03_server.jsp',
			dataType : 'xml', 
			success : parseData
		});
		alert('시작');

		function parseData(result) {
			//alert(result)
			$('#cate').val( $(result).find('first').text() )
			$('#name').val( $(result).find('second').text() )
		}
	})

</script>

</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


