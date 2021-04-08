# Ajax

> ajax(Asynchronous JavaScript and XML) 비동기 개발 기법



## 문법

### 표준형

```javascript
$.ajax({
	type : 'get',
	data : param,
	url : '01_server.jsp',
    dataType : 'xml', 
	success : parseData,
	error : function() {
	alert('에러발생');
	}
});
```

- type : 데이터 전송 방식
  - ajax 에서는 **get방식을 권장**한다
  - IE : 기본 get
  - Chrome : 기본 post
- data : 서버로 보낼 데이터
- dataType : 받을 데이터 타입
  - json : 라이브러리 필요
- url : 서버에 요청 페이지
- success : 서버로부터 성공하면 호출되는 함수
- error : 서버로부터 실패하면 호출되는 함수





### 축약형

```javascript
$.get('01_server.jsp', param, parseData);
```

표준형보다 간결하지만 최근에는 **표준형을 주로 사용**하는 편





## 확장자 별 데이터 불러오기

### xml

```javascript
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
```



### json

```javascript
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
```

- json 파일의 값을 불러올 때는 **json 라이브러리가 필요**하다.
- 임시로 text 타입의 내용에 json 형태의 값을 갖고 있을 경우 위와 같이 값을 불러온다.
- eval() 함수는 보안에 취약하기에 적재적소에 활용만 하도록 하자.









-----------

Same Origin Policy : 동일 출처 정책

HTML과 Ajax의 접근 주소는 같은 서버만 허용

프로토콜(http), 서버이름(localhost), 포트(8100) 중 하나만 달라도 다른 서버임

http://localhost:8100/form_jsp/





JSTL

- JSP 표준 태그 라이브러리
- Apache Tomcat 설치시 라이브러리가 포함되어 있다.
  - C:\apache-tomcat-8.5.64\webapps\examples\WEB-INF\lib
  - 또는 http://jstl.java.net/download.html



사용법

해당 라이브러리 파일(2개)를 WEB-INF/lib에 넣고, JSTL을 사용하고자 하는 JSP혹은 공통 JSP와 같은 common.jsp에 "커스텀 액션을 사용하겠다."라는 정의를 선언



```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```





proxy를 통한 연결



1. html파일 생성

   ```javascript
   window.onload = function() {
   	document.querySelector("#naver").onclick = naver_click
   	
   	function naver_click() {
   		let opt = {}
   		opt.url = "https://www.naver.com"
   		opt.success = function(data) {
   			alert("OK")
   		}
   		$.ajax( opt )
   	}
   }
   ```

   위 코드 실행시 접속이 불가하다.

   

   

2. proxy.jsp 생성

   ```jsp
   <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
   <c:import url="https://www.naver.com"></c:import>
   ```

   jsp 통해 접속시 프록시가 대신하여 불러 올 수 있게 된다.

3. html 코드 수정

   ```javascript
   window.onload = function() {
   	document.querySelector("#naver").onclick = naver_click
   	
   	function naver_click() {
   		let opt = {}
   		// opt.url = "https://www.naver.com"
   		opt.url = "proxy_naver.jsp"
   		opt.success = function(data) {
   			alert("OK")
   		}
   		$.ajax( opt )
   	}
   }
   ```



xml 데이터 jsp로 불러오기

```jsp
<%@ page language="java" contentType="text/xml; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <c:import url="https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4113565500"></c:import>

```

contentType = "text/html" -> contentType="text/xml"







상속받지 않고 구현하지 않는 일반 클래스

POJO(Plain Old Java Object)

