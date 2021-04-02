$(function() {
    // 1. 날짜 수정
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    $('.year').text(year)
    $('.month').text(month)
    $('.date').text(date)

    // 2. 검색창에 사용자가 입력시 '검색어를 입력하세요'
    $("#keyword").on("propertychange change keyup paste input", function(){
        //$('#keyword').focus(function() {
        $('#keyword').css('background', 'none');
    })

    // 3. 공지사항~질문과답변~저자문의 click event
    // 활성화 이미지 1_over.gif
    // 비활성화 2_out.gif
    $('#tabmenu > dt img').click(function() {
        // 탭 클릭시 모든 dd 숨김
        $('#tabmenu  dd').hide();
        // 클릭한 노드의 dd만 show()
        $(this).parent().parent().next().show();
        if($(this).parent().parent().attr("class") == 'tab_btn1'){
            $('#tabmenu > dt img:eq(0)').attr('src', 'images/tab_btn_1_over.gif')
            $('#tabmenu > dt img:eq(1)').attr('src', 'images/tab_btn_2_out.gif')
            $('#tabmenu > dt img:eq(2)').attr('src', 'images/tab_btn_3_out.gif')
        }
        if($(this).parent().parent().attr("class") == 'tab_btn2'){
            $('#tabmenu > dt img:eq(0)').attr('src', 'images/tab_btn_1_out.gif')
            $('#tabmenu > dt img:eq(1)').attr('src', 'images/tab_btn_2_over.gif')
            $('#tabmenu > dt img:eq(2)').attr('src', 'images/tab_btn_3_out.gif')
        }
        if($(this).parent().parent().attr("class") == 'tab_btn3'){
            $('#tabmenu > dt img:eq(0)').attr('src', 'images/tab_btn_1_out.gif')
            $('#tabmenu > dt img:eq(1)').attr('src', 'images/tab_btn_2_out.gif')
            $('#tabmenu > dt img:eq(2)').attr('src', 'images/tab_btn_3_over.gif')
        }
    })

    // 4. 베스트 BOOK 슬라이드 - bxSlider (얘만 html 수정 가능, 플러그인 버전도 수정 가능)
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
     $('.bx-wrapper').css({'text-align':'center', 'margin':'0 auto'})
    // 5. 로그인 누르면 입력창 뜨게 + close 누르면 닫힘
    // #login_f
     $('#util_menu > dd:first > ul > li:first img').click(function() {
        $('#login_f').css({'top':'20px'})
     })

     $('.login_close_btn > a > img').click(function() {
        $('#login_f').css({'top':'-500px'})
     })

    // 6. 전체메뉴 누르면 메뉴 뜨게 + close 누르면 안보이게
    $('#total_btn > a > img').click(function() {
        $('#total_menu').css('display','inline');
        $('#total_btn > a > img').attr('src', 'images/allmenu_btn_over.gif')
    })
    $('#total_close img').click(function() {
        $('#total_menu').css('display','none')
        $('#total_btn > a > img').attr('src', 'images/allmenu_btn_out.gif')
    })
})