Ajax jsp





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

