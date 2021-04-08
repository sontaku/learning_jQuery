<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="libs/jquery-1.9.1.min.js">
	
</script>
<script type="text/javascript">
	$(function() {
		var param = {cate : 'book', name : 'kim'}
		// ****** ajax(Asynchronous JavaScript and XML) 비동기
		// 표준 방식
		/*
		$.ajax({
			// type : 데이터 전송 방식
			// 		ajax 에서는 get방식을 권장한다
			//		IE : 기본 get
			//		Chrome : 기본 post
			//
			type : 'get',
			// data : 서버로 보낼 데이터
			data : param,
			// url : 서버에 요청 페이지
			url : '01_server.jsp',
			// 서버로부터 성공하면 호출되는 함수
			success : parseData,
			// 서버로부터 실패하면 호출되는 함수
			error : function() {
				alert('에러발생');
			}
		});
		*/
		
		// 축약형
		$.get('01_server.jsp', param, parseData);
		
		alert('시작')

		// 서버에서 보내주는 데이터
		function parseData(data) {
			//alert(data);
			let aryData = data.split('|');
			for (let i = 0; i < aryData.length; i++) {
				alert(aryData[i]);
				let keyValue = aryData[i].split('=');
				if (keyValue[0].trim() == 'cate') {
					$('#cate').val(keyValue[1]);
				}
				if (keyValue[0] == 'name') {
					$('#name').val(keyValue[1]);
				}
			}
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


