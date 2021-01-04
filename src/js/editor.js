const { updateCategory } = wp.blocks;
const { SVG, G, Path, Polygon, Rect, Circle } = wp.components;


jQuery( function($){
	
	wp.data.subscribe( function () {
		var isSavingPost = wp.data.select("core/editor").isSavingPost();
		var isAutosavingPost = wp.data.select("core/editor").isAutosavingPost();
	
		if (isSavingPost && !isAutosavingPost) {
			var ids = $("style[id^='pb']");
			var css = '';
			ids.each( function(){
				css += $(this).html();
			});
			wp.apiFetch({
				path: "/powerful-blocks/v1/save_block_css",
				method: "POST",
				data: {
					css: css,
					post_id: $('#post_ID').val(),
				},
			}).then(function (e) {
				return e;
			});
		}
	});

	updateCategory( 'powerful-blocks', { icon: (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<G>
				<Rect x="3" y="3" width="6" height="6"/>
				<Circle cx="18" cy="18" r="3"/>
				<Polygon points="12,8 8,14 16,14 	"/>
				<Path d="M19,12h2c0-5-4-9-9-9v2C15.9,5,19,8.1,19,12z"/>
				<Path d="M12,19c-3.9,0-7-3.1-7-7H3c0,5,4,9,9,9V19z"/>
			</G>
		</SVG>
	) });

});