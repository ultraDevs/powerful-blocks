<?php
/**
 * Alert Box Init
 *
 * @package PowerfulBlocks
 */

// phpcs:disable
function powerful_blocks_alert_box_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "powerful-blocks/alert-box" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'powerful-blocks-alert-box-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'powerful-blocks-alert-box-block-editor', 'alert-box' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'powerful-blocks-alert-box-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'powerful-blocks-alert-box-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$frontend_js = 'src/frontend.js';
	wp_enqueue_script(
		'pb-alert-box-frontend',
		plugins_url( $frontend_js, __FILE__ ),
		array( "jquery" ),
		true
	);

	register_block_type( 'powerful-blocks/alert-box', array(
		'editor_script'   => 'powerful-blocks-alert-box-block-editor',
		'editor_style'    => 'powerful-blocks-alert-box-block-editor',
		'style'           => 'powerful-blocks-alert-box-block',
		'frontend_script' => 'pb-alert-box-frontend',
	) );
}
add_action( 'init', 'powerful_blocks_alert_box_block_init' );
