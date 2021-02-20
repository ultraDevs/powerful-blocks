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
			viewBox="0 0 600 700"
			className="pb-block-icon"
		>
			<g xmlns="http://www.w3.org/2000/svg" ><path d="M210.23,0H36.36V55H210.23a106.59,106.59,0,0,1,0,213.18h-100v55h100c89.1,0,161.59-72.49,161.59-161.59S299.33,0,210.23,0Z"/><rect class="cls-1" x="109.5" y="171.59" width="52.27" height="159.09"/><rect class="cls-1" x="111.79" y="440.23" width="52.27" height="159.09"/><path class="cls-1" d="M374.11,437.73c0,89.11-72.49,161.59-161.59,161.59H164.06v-55h48.46a106.59,106.59,0,0,0,0-213.18h-100v-55h100A161.69,161.69,0,0,1,374.11,437.73Z"/><rect class="cls-1" width="55.01" height="693.45"/></g>
		</SVG>
	) });

	

});