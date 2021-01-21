jQuery(function($) {

    // Icon Gradient Color.
    let powerfulBlocksGradient ='<div><svg xmlns="http://www.w3.org/2000/svg" class="pb-icon-gradient" height="0" width="0" style="opacity: 0"><defs><linearGradient id="powerfulblocks-gradient"><stop offset="20%" stop-color="#5820e5" stop-opacity="1"></stop><stop offset="90%" stop-color=" #f30d55" stop-opacity="1"></stop></linearGradient></defs></svg></div>';
    
    $(powerfulBlocksGradient).prependTo('body');

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