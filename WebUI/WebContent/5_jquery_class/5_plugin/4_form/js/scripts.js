/**
 * 
 */
$(function() {
    // $().validate();
    $('#signup > form').validate({
        rules: {
            name : {required:true,
                    maxlength : 3},
            email : {required:true,
                    email : true},
            website : {url : true},        
            password : {required:true,
                        minlength : 6},
            passconf : {equalTo:'#password',
                        minlength : 6}
        },
        success : function(label){
            label.addClass('valid');
            // 출력은 안되지만 없으면 화면에 뜨지 않음
            label.text('ok')
        }
    });

    //agree

    //check-all
    //let chk = $("input:checkbox[name='agree']");
    $('.check-all').click(function() {
        //$('.check-all').is(":checked") ? $('.agree').prop('checked', true) : $('.agree').prop('checked', false)
        $('.agree').prop('checked', $(this).prop('checked'))
    })

    $('.agree').click(function() {
        //$('.agree:checked').length == $('.agree').length ? $('.check-all').prop('checked', true) : $('.check-all').prop('checked', false)
        if($('.agree:checked').length == $('.agree').length) {
            $('.check-all').prop('checked', $(this).prop('checked'));
        } else {
            $('.check-all').prop('checked', false);
        }
    })
})