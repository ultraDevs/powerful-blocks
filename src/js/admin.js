jQuery(function($) {

    $('.pb-tabs__content .pb-tabs__item').hide();
    $('.pb-tabs__content .pb-tabs__item:first').show();
    $('.pb-tabs__nav li:first').addClass('tabs__is-active');
    $('.pb-tabs__nav a').click(function(e) {
        window.location.hash = e.currentTarget.hash;
        var $hash = e.currentTarget;
        e.preventDefault();

        $('.pb-tabs__nav li').removeClass('tabs__is-active');
        $(this).parent().addClass('tabs__is-active');
        $('.pb-tabs__content .pb-tabs__item').hide();
        $($(this).attr('href')).show();

        $('#toplevel_page_powerful-blocks .wp-submenu').find('a').filter(function(i, a) {
            return $hash === a.hash;
        }).parent().addClass('current').siblings().removeClass('current');
    });

    //

    $('#toplevel_page_powerful-blocks > .wp-submenu a').on('click', function(e) {
        if (!e.currentTarget.hash) {
            return true;
        }
        e.preventDefault();
        window.location.hash = e.currentTarget.hash;
        var $hash = e.currentTarget;

        $('.pb-tabs__nav li').find('a[href="' + window.location.hash + '"]').click();
        $('#toplevel_page_powerful-blocks .wp-submenu').find('a').filter(function(i, a) {
            return window.location.hash === a.hash;
        }).parent().addClass('current').siblings().removeClass('current');
    });

    if (window.location.hash) {
        var $hash = window.location.hash;
        $('.pb-tabs__nav li').find('a[href="' + window.location.hash + '"]').click();
        $('#toplevel_page_powerful-blocks .wp-submenu').find('a').filter(function(i, a) {
            return window.location.hash === a.hash;
        }).parent().addClass('current').siblings().removeClass('current');
    }

});