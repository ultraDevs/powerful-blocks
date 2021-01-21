jQuery( function($){
    $('.pb-accordion-wrapper').each( function(){
        let _this = $( this),
            item = _this.find('.pb-accordion-item'),
            header = item.find('.pb-accordion-header'),
            openIcon = item.find('.pb-accordion-toggle-icon--open'),
            closeIcon = item.find('.pb-accordion-toggle-icon--close'),
            data = _this.data('settings');
            closeIcon.hide();
        
        if ( 'accordion' === data.type ) {
            header.on('click', function(){
                openIcon.show(data.speed);
                closeIcon.hide(data.speed);
                if ( $(this).hasClass('pb-active') ) {
                    $(this).removeClass('pb-active');
                    $(this).next('.pb-accordion-content').removeClass('pb-active').slideUp( data.speed );
                    
                    $(this).find('.pb-accordion-toggle-icon--open').show(data.speed);
                    $(this).find('.pb-accordion-toggle-icon--close').hide(data.speed);
    
                } else {
                    header.removeClass('pb-active');
                    header.next('.pb-accordion-content').removeClass('pb-active').slideUp( data.speed );
                    $(this).find('.pb-accordion-toggle-icon--open').hide(data.speed);
                    $(this).find('.pb-accordion-toggle-icon--close').show(data.speed);
    
                    $(this).toggleClass('pb-active');
                    $(this).next('.pb-accordion-content').slideToggle(data.speed, function(){
                        $(this).toggleClass('pb-active');
                    } );
    
                }
            })
        } else {
            header.on('click', function(){
                
                if ( $(this).hasClass('pb-active') ) {
                    $(this).removeClass('pb-active');
                    $(this).next('.pb-accordion-content').removeClass('pb-active').slideUp( data.speed );
                    
                    $(this).find('.pb-accordion-toggle-icon--open').show(data.speed);
                    $(this).find('.pb-accordion-toggle-icon--close').hide(data.speed);
    
                } else {
                    
                    $(this).find('.pb-accordion-toggle-icon--open').hide(data.speed);
                    $(this).find('.pb-accordion-toggle-icon--close').show(data.speed);
    
                    $(this).toggleClass('pb-active');
                    $(this).next('.pb-accordion-content').slideToggle(data.speed, function(){
                        $(this).toggleClass('pb-active');
                    } );
    
                }
            })
        }
    });
    
});