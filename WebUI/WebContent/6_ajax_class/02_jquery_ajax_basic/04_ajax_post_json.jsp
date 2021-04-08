<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ajax json</title>
<script type="text/javascript" src="libs/jquery-1.9.1.min.js"></script>
<script type="text/javascript">
	$(function() {
		let param = {
			cate : 'book',
			name : 'kim'
		};

		$.ajax({
			type : 'get',
			data : param,
			url : '04_server.jsp',
			dataType : 'text',
			// json : 라이브러리 필요
			success : parseData
		});
		alert('시작');

		function parseData(result) {
			//alert(result);
			let obj = {};
			// 강제로 객체 생성하기
			obj = eval("(" + result + ")");
			$('#cate').val( obj.first );
			$('#name').val( obj.second );
			
		}
	})
</script>
</head>

<body>
	서버로부터 넘겨받은 데이터
	<br /> 첫번째 데이터 :
	<input type="text" name="" id="cate" />
	<br /> 두번째 데이터 :
	<input type="text" name="" id="name" />
	<br />
</body>
</html>


