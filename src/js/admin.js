jQuery(function($) {
    
    // Icon Gradient Color.
    let powerfulBlocksGradient ='<div><svg xmlns="http://www.w3.org/2000/svg" class="pb-icon-gradient" height="0" width="0" style="opacity: 0"><defs><linearGradient id="powerfulblocks-gradient"><stop offset="20%" stop-color="#5820e5" stop-opacity="1"></stop><stop offset="90%" stop-color=" #f30d55" stop-opacity="1"></stop></linearGradient></defs></svg></div>';
    
    $(powerfulBlocksGradient).prependTo('body');

    $('#pb-save-blocks').hide();
    $('.pb-tabs__content .pb-tabs__item').hide();
    $('.pb-tabs__content .pb-tabs__item:first').show();
    $('.pb-tabs__nav li:first').addClass('tabs__is-active');
    
    let hash = window.location.hash;
    if ( hash ) {
        tab = hash.substring( hash.indexOf('#') );
        activateTab( tab );
    }

    function activateTab( tab ) {
        
        $('.pb-tabs__nav li').removeClass('tabs__is-active');
        $('.pb-tabs__nav li').find("a[href=\"" + tab +"\"").parent().addClass('tabs__is-active');

        $('.pb-tabs__content .pb-tabs__item').hide();
        $('.pb-tabs__content').find(tab).show();

        if ( '#blocks' === $('.tabs__is-active a').attr('href') ) {
            $('#pb-save-blocks').show();
        } else {
            $('#pb-save-blocks').hide();
        }


        $('#toplevel_page_powerful-blocks .wp-submenu').find('a').filter(function(i, a) {
            return tab === a.hash;
        }).parent().addClass('current').siblings().removeClass('current');
    }

    let _this = $( '.pb-tabs__nav' ),
    tabs = _this.find('a');

    tabs.on( 'click', function(e){
        e.preventDefault();
        let _this = $( this ),
        tab = $( this ).attr('href');

        activateTab( tab );
    });

    $('#toplevel_page_powerful-blocks > .wp-submenu a[href*=#]').on( 'click', function(e) {
        e.preventDefault();
        let _this = $( this ),
        url = $( this ).attr('href'),
        tab = url.substring(url.indexOf('#'));
        activateTab( tab );
    });

    $(window).on('hashchange', function(e) {
        e.preventDefault();
        let pHash = window.location.hash;
        activateTab( pHash );
    });

});