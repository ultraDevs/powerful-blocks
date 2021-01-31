jQuery( function($){
    function activateTab( tab ) {
        
        $('.pb-tabs--item').removeClass('pb-tab-active');

        $('.pb-tabs-content [data-tab]').hide();
        $('.pb-tabs--tabs, .pb-tabs--pills').find("[data-tab=\"" + tab +"\"").addClass('pb-tab-active');

        $('.pb-tabs-content').find("[data-tab=\"" + tab +"\"").show();
    }

    window['pbTabs'] = () => {
        $('.pb-tabs-wrapper').each( function(){
            let _this = $( this ),
                aTab = $( this ).attr('data-a-tab'),
            tabs = _this.find('.pb-tabs--item');

            $('.pb-tabs-content').find("[data-tab=\"" + aTab +"\"").show();
            
            tabs.on( 'click', function(e){
                e.preventDefault();
                let _this = $( this ),
                tab = $( this ).attr('data-tab');

                activateTab( tab );
            });
        });
        

    };
    $(window).on('hashchange', function() {
        let pHash = window.location.hash;
        activateTab( pHash.replace( /^#/, '' ) );
    });

    pbTabs();
});