$(function() {
    // 1. 날짜 수정
    let now = new Date();
    $('.year').text(now.getFullYear())
    $('.month').text(now.getMonth() + 1)
    $('.date').text(now.getDate())

    // 2. 검색창에 사용자가 입력시 '검색어를 입력하세요' 숨김
    $("#keyword").on("propertychange change keyup paste input", function(){
        // 이미지 삭제
        $('#keyword').css('background', 'none');
    })
    // 2-1. 검색창에서 벗어나고, 
    $('#keyword').focusout(function() {
        // 2-2. 입력값이 없을 때 
        // 다시 이미지 생성
        if($('#keyword').val() == '')
            $('#keyword').css('background', 'url("../z_doit_project_class/images/sch_guide.gif") no-repeat');
    })

    // 3. 공지사항~질문과답변~저자문의 click event
    // 활성화 이미지 over.gif
    // 비활성화 out.gif

    // 활성화 된 tab
    let curr_tabmenu = $('#tabmenu > .tab_btn1 > a > img')
    $('#tabmenu > dt img').click(function() {
        curr_tabmenu.attr('src', curr_tabmenu.attr('src').replace("over", "out"))
        $(this).attr('src', $(this).attr('src').replace("out", "over"))
        
        // 탭 클릭시 모든 dd 숨김
        $('#tabmenu  dd').hide();
        // 클릭한 노드의 dd만 show()
        $(this).parent().parent().next().show();

        // tab 초기화
        curr_tabmenu = $(this)
    })

    // 4. 베스트 BOOK 슬라이드 - bxSlider (html 수정 가능, 플러그인 버전도 수정 가능)
    $('#best_bg_div').bxSlider({
        minSlides : 5,
        maxSlides : 5,
        auto: true,
        autoHover: true,
        pager: true,
        slideWidth: 122,
        slideMargin:10,
        speed: 100, pause: 1000,
        moveSlides:1
    });
     // bxSlider 이미지 수정
    $('.bx-wrapper').css({'text-align':'center', 'margin':'0 auto'})
    // 5. 로그인 누르면 입력창 뜨게 + close 누르면 닫힘
    $('#util_menu > dd:first > ul > li:first img').click(function() {
        $('#login_f').css({'top':'20px'})
    })
    $('.login_close_btn > a > img').click(function() {
         // 원위치
        $('#login_f').css({'top':'-500px'})
    })

    // 6. 전체메뉴 누르면 메뉴 뜨게 + close 누르면 안보이게
    $('#total_btn > a > img').click(function() {
        $('#total_menu').css('display','inline');
        $('#total_btn > a > img').attr('src', 'images/allmenu_btn_over.gif')
    })
    // 전체메뉴 누른 후 다시 전체메뉴를 통해 out 가능
    $('#total_close img').click(function() {
        $('#total_menu').css('display','none')
        $('#total_btn > a > img').attr('src', 'images/allmenu_btn_out.gif')
    })
})