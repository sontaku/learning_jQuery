# jQuery

## JavaScript와의 차이점

JavaScript

- API 지원 수준 미흡
- 기능과 UI가 많아질수록 복잡도 증가
- 재사용될 수 있는 기능들의 라이브러리화 필요
- 브라우저 호환성(Cross-Browser) 대응
- 각각의 개발자 개별적으로 작성하여 협업 장애



jQuery

- write less, Do more
- 문법이 간결함
- 사용하기 쉬움
- 다양한 plug-in
- 브라우저 호환성 문제 해결
- UI, Mobile 확장 가능(반응형 웹)

### jQuery 최근 동향

> JavaScript 기반 라이브러리 중 jQuery의 점유율이 90%



## 설치

https://code.jquery.com/jquery-3.6.0.js

- 우클릭 후 다른 이름으로 저장

- 프로젝트 내 라이브러리에 설치

  ex) C:\Users\훈련생\git\WebUI\WebContent\5_jquery_class\lib



### jQuery 라이브러리

- http://jquery.com
  - jquery-x.x.x.js
  - jquery-x.x.x.min.js (공백, 줄바꿈, 주석 삭제 최소화)
- CND
  - http://ajax.googleapis.com/ajax/libs~~~
  - 213
  - 123



라이브러리를 파일로 다운 받는경우엔 인터넷 연결이 1회성 요구되고,

cnd는 지속적인 연결이 필요하다. 무엇을 이용할지는 취향





## Core

### 기본 문법

```html
$(어떤것).무언가하기();
$('selector').동작메소드();
```



#### 함수

```javascript
<script>
	$(function() {
		$('div#here').click(function(){
			$('#here').text('클릭하면 내용 변경')
		})
	})
</script>
```



##### DOM 연결 방식 3가지

```html
jQuery(function( $ ) {

});

$(document).ready( function() {

});

$(function() {

});
```



##### Event 축약형 vs 예전방식

```html
$('li').bind('click', function() {})
$('li').one('click', function() {})

$('li').click(function(){})
```

- .one() 메소드는 바인딩(binding)된 이벤트 핸들러가 한번만 실행되고 나서는, 더는 실행되지 않는다.





### 변수

```javascript
let h = $('#here');
	h.click(function(){
	h.text('클릭하면 내용 변경')
})
```



### this

'this'는 자바스크립트의 this.

'$(this)'는 제이쿼리의 this.





## Selectors



### CSS선택자

- *: 전부 선택
- #: ID
- .: class
- E: element
- E1, E2: 여러개 element 선택



### 속성 선택자



### 기본필터 선택자

- :first / :last 
  - 선택된 요소 중 처음/ 마지막 요소 선택
- :even / :odd
  - 짝수번째/ 홀수번째 요소 선택
- :eq(n)
  - n번째 요소 선택
- :lt(n) / :gt(n)
  - n보다 작거나 n보다 큰 요소 선택
- :not()
  - 선택자에 해당되지 않는 요소 선택





------

정리해야할 부분



```html
// 퀵메뉴
$(window).scroll(function() {
	navigation').css('top', $(document).scrollTop())
})
```



https://plugins.jquery.com/

유명한 플러그인

- popup plugin
- b 팝업





달력

https://jqueryui.com/datepicker/