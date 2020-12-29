<?php
/**
 * Testimonial Init
 *
 * @package PowerfulBlocks
 */

// phpcs:disable
function powerful_blocks_testimonial_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "powerful-blocks/testimonial" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'powerful-blocks-testimonial-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'powerful-blocks-testimonial-block-editor', 'testimonial' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'powerful-blocks-testimonial-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'powerful-blocks-testimonial-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'powerful-blocks/testimonial', array(
		'editor_script' => 'powerful-blocks-testimonial-block-editor',
		'editor_style'  => 'powerful-blocks-testimonial-block-editor',
		'style'         => 'powerful-blocks-testimonial-block',
	) );
}
add_action( 'init', 'powerful_blocks_testimonial_block_init' );
