<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>고객관리 프로그램</title>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript">
	$(function() {
		$('#btnInsert').click(function() {
			// 원래 통신(서버로 전송)
			//$('form[name="inForm"]').attr('action', 'DataInput.jsp');
			//$('form[name="inForm"]').submit();

			// ajax 통신(서버로 비동기 통신)

			let param = {
				name : $('#name').val(),
				age : $('#age').val(),
				tel : $('#tel').val(),
				addr : $('#addr').val()
			}

			$.ajax({
				type : 'post',
				data : param,
				url : 'DataInput.jsp',
				//dataType : 'xml',
				success : function(result) {
					//alert(result);
					if (result.trim() == '1') {
						alert('입력 성공');
						// 화면 갱신
						// 화면초기화 (나머지도)
						$('#name').val('');
						$('#age').val('');
						$('#tel').val('');
						$('#addr').val('');
					} else {
						alert('입력 실패');
					}
				},
				error : function() {
					alert('에러발생');
				}
			});

		})

		// 가져오기 버튼이 눌렸을 때
		$('#btnSelect').click(function() {
			//alert('ok')
			let param = {
				name : 'kim',
				age : 'kim',
				tel : 'kim',
				addr : 'kim'
			};

			$.ajax({
				url : 'DataSelect.jsp',
				dataType : 'xml',
				success : parseData
			});
			// alert('시작');

			function parseData(data) {
				//console.log(data);
				$('#tbd').empty();
				// ****** $('선택자', 찾는대상)
				let txt = $('person', data)
				txt.each(function() {
					let name = $('name', this).text();
					let age = $('age', this).text();
					let tel= $('tel', this).text();
					let addr = $('addr', this).text();
					// 나머지 요소들도 가지고 오기
					// 동적으로 <tr><td> 만들어서 tbody에 붙이기
					$('#tbd:last').append('<tr ><td>' + name + '</td><td>' + age + '</td><td>' + tel + '</td><td>' + addr + '</td></tr>');
				  });
				}
			})
		})

</script>

</head>


<!-- <body> -->
<body>

	<h2>고객정보 입력</h2>

	<form name="inForm" method="post">
		<table border=1>
			<tr>
				<td width="80" align="center">Name</td>
				<td width="50" align="center">Age</td>
				<td width="100" align="center">Tel</td>
				<td width="250" align="center">Addr</td>
			</tr>
			<tr>
				<td align="center"><input type="text" size="8" name="name"
					id="name"></td>
				<td align="center"><input type="text" size="4" name="age"
					id="age"></td>
				<td align="center"><input type="text" size="12" name="tel"
					id="tel"></td>
				<td align="center"><input type="text" size="30" name="addr"
					id="addr"></td>
			</tr>
			<tr>
				<td colspan="4" align="center"><input type="button"
					id='btnInsert' value="입력"></td>
			</tr>
		</table>

		<br>
		<hr>

		<h2>고객정보 목록보기</h2>
		<table border='0' width="510">
			<tr>
				<td align="right"><input type="button" id='btnSelect'
					value="가져오기"></td>
			</tr>
		</table>
		<table border=1 id="listTable">
			<tr>
				<td width="80" align="center">Name</td>
				<td width="50" align="center">Age</td>
				<td width="100" align="center">Tel</td>
				<td width="250" align="center">Addr</td>
			</tr>
			<tbody id='tbd'></tbody>
		</table>
		<div id="myDiv"></div>

	</form>
</body>
</html>