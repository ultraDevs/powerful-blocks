jQuery( function($){
    window['pbTabs'] = () => {
        $('.pb-tabs-wrapper').each( function(){
            // $('.pb-tabs-content > div').hide();
            // $('.pb-tabs-content > div:first-of-type').show();
            let _this = $( this),
            activeTab = _this.attr('data-a-tab'),
            tabs = _this.find('.pb-tabs--tabs'),
            tabsItem = tabs.find('.pb-tabs--item'),
            contents = _this.find('.pb-tabs-content');
            contents.find("[data-tab=\"" + activeTab +"\"").addClass('pb-tab-active');

            tabsItem.on( 'click', function(e) {
                let $this = $( this ),
                    tab = $this.attr('data-tab');

                tabsItem.removeClass('pb-tab-active');
                contents.find('div').removeClass('pb-tab-active');
                $this.addClass('pb-tab-active');
                
                contents.find("[data-tab=\"" + tab +"\"").addClass('pb-tab-active');
            });
        });
    };
    function activateTab( tab ) {
        
        $('.pb-tabs--item').removeClass('pb-tab-active');

        $('.pb-tabs-content [data-tab]').hide();
        $('.pb-tabs--tabs, .pb-tabs--pills').find("[data-tab=\"" + tab +"\"").addClass('pb-tab-active');

        $('.pb-tabs-content').find("[data-tab=\"" + tab +"\"").show();
    }
    $(window).on('hashchange', function() {
        let pHash = window.location.hash;
        activateTab( pHash.replace( /^#/, '' ) );
    });

    pbTabs();
});