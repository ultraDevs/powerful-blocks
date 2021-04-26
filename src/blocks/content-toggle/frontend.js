jQuery( function($){
    
    window['pbContentToggle'] = () => {
        if ( $('.pb-content-toggle-wrapper').length ) {
            $('.pb-content-toggle-wrapper').each( function() {
                let _this = $( this),
                    toggle = _this.attr('data-a-switch'),
                    toggleSwitchW = _this.find('.pb-content-toggle-switch'),
                    toggleSwitch = _this.find('.pb-toggle-switch'),
                    label = _this.find('.pb-toggle-label'),
                    primaryLabel = _this.find('.pb-toggle-primary-label'),
                    secondaryLabel = _this.find('.pb-toggle-secondary-label'),
                    contents = _this.find('.pb-content-toggle-contents'),
                    secondaryContent = _this.find('.pb-toggle-secondary-content');
                    

                contents.find("[data-toggle=\"" + toggle +"\"]").addClass('pb-toggle-active');
                
                toggleSwitch.on( 'click', function(e) {
                    e.preventDefault();

                    toggleSwitchW.toggleClass('pb-toggle-switch-on');

                    contents.find('[data-toggle]').removeClass( 'pb-toggle-active' );

                    if ( toggleSwitchW.hasClass( 'pb-toggle-switch-on' ) ) {
                        contents.find("[data-toggle='secondary']").addClass('pb-toggle-active');
                    } else {
                        contents.find("[data-toggle='primary']").addClass('pb-toggle-active');
                    }

                    if ( primaryLabel.hasClass( 'pb-toggle-active' ) ) {
                        primaryLabel.removeClass( 'pb-toggle-active' );
                        secondaryLabel.addClass( 'pb-toggle-active' );
                    } else {
                        primaryLabel.addClass( 'pb-toggle-active' );
                        secondaryLabel.removeClass( 'pb-toggle-active' );
                    }
                    
                });

                $( label ).on( 'click', function(){
                    $( '.pb-toggle-label' ).removeClass( 'pb-toggle-active' );


                    if ( $( this ).hasClass( 'pb-toggle-primary-label' ) ) {
                        currentToggle = 'primary';
                        toggleSwitch.prop( 'checked', false );
                        toggleSwitchW.removeClass( 'pb-toggle-switch-on' );
                    } else {
                        currentToggle = 'secondary';
                        toggleSwitch.prop( 'checked', true );
                        toggleSwitchW.addClass( 'pb-toggle-switch-on' );
                    }
                    
                    $( this ).addClass( 'pb-toggle-active' );

                    contents.find('[data-toggle]').removeClass( 'pb-toggle-active' );

                    contents.find(`[data-toggle=${currentToggle}]`).addClass('pb-toggle-active');
                });
                
            });
        }
    };
    pbContentToggle();
});