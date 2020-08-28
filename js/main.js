
$(document).ready(function () {

    $('.dateinput').datepicker({
    });

    $('.dateinput').change(function () {
        // console.log($(this).val());
        $(this).siblings(".prview").text($(this).val())
    });
    $('.timeselect').change(function () {
        // console.log($(this).val());
        $(this).siblings(".prview").text($(this).val())
    });




    /////////QTY/////////
    var minVal = 1, maxVal = 100; // Set Max and Min values
    // Increase product quantity on cart page
    $(".qty-increas").on('click', function () {
        var $parentElm = $(this).parents(".pro-qty");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qty-input").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qty-input").val(value);
    });
    // Decrease product quantity on cart page
    $(".qty-decreas").on('click', function () {
        var $parentElm = $(this).parents(".pro-qty");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qty-input").val();
        if (value >= 1) {
            value--;
        }
        $parentElm.find(".qty-input").val(value);
    });

    $('.order-desc-bill .edit').click(function () {
        $('.order-desc-coupon').slideDown(300)
    });
    $('.order-desc-bill .cancel').click(function () {
        $('.order-desc-coupon').slideUp(300)
    });

    ////////////meun

    $('.toggle-nav').click(function () {
        toggleNav();
    });
    $('.overlay').click(function () {
        toggleNav();
    });

    function toggleNav() {
        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav');
            $('body').removeClass('overflow');
            $('.overlay').fadeOut('300');
        } else {
            $('body').addClass('show-nav');
            $('body').addClass('overflow');
            $('.overlay').fadeIn('300');
        }
    }
});