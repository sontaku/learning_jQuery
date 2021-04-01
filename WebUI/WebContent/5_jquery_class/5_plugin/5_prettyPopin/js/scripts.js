/**
 * 
 */

$(function() {
    $('a:eq(0)').prettyPopin({
        'width' : '550px',
        callback:function() {
            alert('팝업이 닫힙니다')
        }
    });

    $('a:eq(1)').prettyPopin({
        'width' : '550px',
        callback:function() {
            alert('팝업이 닫힙니다')
        }
    });
})