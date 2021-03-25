// document.addEventListener("DOMContentLoaded", function(event) {
// 	let toggles = document.querySelectorAll('.pb-content-toggle-wrapper');
//     if ( ! toggles ) return;

//     for (let i = 0; i < toggles.length; i++) {
//         let toggle = toggles[i];
//         let toggleSwitchW = toggle.querySelector('.pb-content-toggle-switch'),
//             toggleSwitch = toggle.querySelector('.pb-toggle-switch'),
//             primaryLabel = toggle.querySelector('.pb-toggle-primary-label'),
//             secondaryLabel = toggle.querySelector('.pb-toggle-secondary-label'),
//             primaryContent = toggle.querySelector('.pb-toggle-primary-content'),
//             secondaryContent = toggle.querySelector('.pb-toggle-secondary-content');
        
//             primaryContent.addEventListener( 'click', (e) => {
//             console.log(e);
//         });
//     }
// });


jQuery( function($){
    
    window['pbContentToggle'] = () => {
        if ( $('.pb-content-toggle-wrapper').length ) {
            $('.pb-content-toggle-wrapper').each( function() {
                console.log('rrr');
                let _this = $( this),
                    toggle = _this.attr('data-a-switch'),
                    toggleSwitchW = _this.find('.pb-content-toggle-switch'),
                    toggleSwitch = _this.find('.pb-toggle-switch'),
                    label = _this.find('.pb-toggle-label'),
                    primaryLabel = _this.find('.pb-toggle-primary-label'),
                    secondaryLabel = _this.find('.pb-toggle-secondary-label'),
                    // primaryContent = _this.find("[data-toggle=\"" + toggle +"\""),
                    contents = _this.find('.pb-content-toggle-contents'),
                    secondaryContent = _this.find('.pb-toggle-secondary-content');
                    
                // contents.find('div').removeClass( 'pb-toggle-active' );

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