/*====================Custom Code==================*/

$(".custom_code_dots_block button").click(function () {
    $(".custom_code_dots_block button.custom_active").removeClass("custom_active");
    $(this).addClass("custom_active");
    let custom_code_dots = $(this).data('value');
    $(".custom_code_table.custom_code_table_active").removeClass('custom_code_table_active');
    $(".custom_code_table_content_block .custom_code_table:nth-child(" + custom_code_dots + ")").addClass('custom_code_table_active');
});

/*====================Search Input======================*/

let captchaText = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
let userText = $('#search_inp');
let submitButton = $('#search_btn');
userText.on('keyup', function (e) {
    e.preventDefault();
    if (userText.val() == 0) {
        $('.wrong_domain_block').addClass('d_none');
    }
    if (e.keyCode === 13) {
        if (userText.val() === captchaText) {
            $('.wrong_domain_block').addClass('d_none');
            window.location.replace('thank_yoy.html');
        }
        else if (userText.val() !== captchaText) {
            $('.wrong_domain_block.d_none').removeClass('d_none');
        }
    }
});

submitButton.on('click', function (e) {
    e.preventDefault();
    if (userText.val() === captchaText) {
        $('.wrong_domain_block').addClass('d_none');
        window.location.replace('thank_you.html');
    }
    else if (userText.val() !== captchaText) {
        $('.wrong_domain_block.d_none').removeClass('d_none');
    }
});

/*===================Popup==================*/

$('.popup_btn').on('click', function () {
    $('.popup_main_block').addClass('popup_active');
    if ($('.popup_main_block').hasClass('popup_active')) {
        $('body').css({ "overflow": "hidden", });
    }
})

$('.close_popup').on("click", function () {
    $('.popup_main_block.popup_active').removeClass('popup_active');
    $('body').css({ "overflow": "auto", });
})