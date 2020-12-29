<?php
/**
 * Assets Manager Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Assets_Manager {

	/**
	 * Admin Assets
	 *
	 * Enqueue Admin Styles and Scripts
	 *
	 * @param string $hook Page slug.
	 */
	public function admin_assets( $hook ) {

		if ( 'toplevel_page_' . POWERFUL_BLOCKS_MENU_SLUG !== $hook || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		wp_enqueue_style( 'pb-admin', POWERFUL_BLOCKS_ASSETS . 'css/admin.min.css', '', POWERFUL_BLOCKS_VERSION );
		wp_enqueue_script( 'pb-admin', POWERFUL_BLOCKS_ASSETS . 'js/admin.min.js', array( 'jquery', 'wp-util' ), POWERFUL_BLOCKS_VERSION, false );

		wp_localize_script(
			'pb-admin',
			'PBAdmin',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'pb-save-ib-nonce' ),
			)
		);
	}

	/**
	 * Frontend Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function frontend_assets() {

		wp_enqueue_style( 'pb-frontend', POWERFUL_BLOCKS_ASSETS . 'css/frontend.min.css', '', POWERFUL_BLOCKS_VERSION );
		wp_enqueue_script( 'pb-frontend', POWERFUL_BLOCKS_ASSETS . 'js/frontend.min.js', array( 'jquery' ), POWERFUL_BLOCKS_VERSION, false );

	}

	/**
	 * Block Editor Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function block_editor_assets() {

		wp_enqueue_style( 'pb-block-editor', POWERFUL_BLOCKS_ASSETS . 'css/editor.min.css', array(), POWERFUL_BLOCKS_VERSION );
	}
}
