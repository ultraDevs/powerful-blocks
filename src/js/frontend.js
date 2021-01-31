import '../blocks/alert-box/frontend';
import '../blocks/accordion/frontend';
import '../blocks/fun-factor/frontend';
import '../blocks/counter/frontend';
import '../blocks/animated-headlines/frontend';
import '../blocks/tabs/frontend';

jQuery( function($){

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