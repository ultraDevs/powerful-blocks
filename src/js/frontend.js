import '../blocks/alert-box/frontend';
import '../blocks/accordion/frontend';
import '../blocks/fun-factor/frontend';
import '../blocks/counter/frontend';
import '../blocks/animated-headlines/frontend';
import '../blocks/tabs/frontend';
import '../blocks/content-toggle/frontend';

jQuery( function($){

    // Animation
    const AnimationWayPoints = ( el, animation, animationOut ) => {
        el.waypoint( function( direction ) {
            if ( direction === 'down' && !el.hasClass( 'pb__animated' ) && animation ) {
                el.removeClass( 'pb-animation-out pb__animated_out pb__' + animationOut ).addClass( 'pb__animated' ).addClass( 'pb__' + animation )
            } else if ( direction === 'up' && !el.hasClass( 'pb__animated_out' ) && animationOut ) {
                el.removeClass('pb__animated pb__' + animation ).addClass( 'pb-animation-out pb__animated_out' ).addClass( 'pb__' + animationOut );
            }
        }, { offset: '80%' } );
    }

    const Animations = () => {
        $('.pb-animation').each( function() {
            let $this = $( this ),
                settings = $this.data('pb-animation');
            AnimationWayPoints( $this, settings.in, settings.out );
        })
    };
    
    if( $('.pb-animation').length ) {
        
        $( window ).load( Animations ),
        $( document.body ).on( 'post-load', function() {
            Animations();
        });
    }

    var linkData = $('[data-pb-link]');
    var lData = $( linkData[0]).data('pb-link');
    
    // if( '' !== lData.addLink ) {
    //     $( linkData[0]).css('cursor', 'pointer');
    // }

    $('[data-pb-link]').on( 'click', function(){
        var _this = $( this ),
            data = _this.data('pb-link'),
            id = data.id,
            addLink = data.addLink;

            if ( true === addLink ) {
                var a = document.createElement('a'),
                newA,
                t;
                a.id = 'pb-wl-r-' + id;
                a.href = data.url ? data.url : '';
                a.target = data.new_window ? '_blank' : '_self';
                a.rel = data.wrapperLinkNofollow ? 'nofollow noreferer' : '';
                a.style.display = 'none';

                document.body.appendChild(a);

                newA = document.getElementById( a.id );
                newA.click();

                t = setTimeout( function(){
                    document.body.removeChild( newA );
                    clearTimeout(t);
                });
            }
    });
});