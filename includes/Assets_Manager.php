<?php
/**
 * Assets Manager Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

use ultraDevs\PB\Admin\Dashboard;

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
		global $post;

		if ( 'toplevel_page_' . POWERFUL_BLOCKS_MENU_SLUG !== $hook || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		wp_enqueue_style( 'pb-admin', POWERFUL_BLOCKS_ASSETS . 'css/pb-admin.css', '', POWERFUL_BLOCKS_VERSION );
		wp_enqueue_script( 'pb-admin', POWERFUL_BLOCKS_ASSETS . 'js/pb-admin.js', array( 'jquery', 'wp-util' ), POWERFUL_BLOCKS_VERSION, false );

		wp_localize_script(
			'pb-admin',
			'PBAdmin',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'pb-save-ib-nonce' ),
				'post_id' => $post->ID,
			)
		);
	}

	/**
	 * Frontend Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function frontend_assets() {

		wp_enqueue_style( 'pb-frontend', POWERFUL_BLOCKS_ASSETS . 'css/pb-styles.css', '', POWERFUL_BLOCKS_VERSION );
		wp_enqueue_script( 'pb-frontend', POWERFUL_BLOCKS_ASSETS . 'js/pb-frontend.js', array( 'jquery' ), POWERFUL_BLOCKS_VERSION, false );

	}

	/**
	 * Block Assets
	 *
	 * Enqueue Block Styles and Scripts
	 */
	public function block_assets() {

		wp_enqueue_style( 'pb-block-styles', POWERFUL_BLOCKS_ASSETS . 'css/pb-styles.css', array(), POWERFUL_BLOCKS_VERSION );

	}

	/**
	 * Block Editor Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function block_editor_assets() {

		wp_enqueue_style( 'pb-block-editor', POWERFUL_BLOCKS_ASSETS . 'css/pb-blocks-editor.css', array( 'wp-edit-blocks' ), POWERFUL_BLOCKS_VERSION );
		wp_enqueue_style( 'pb-block-editor-common', POWERFUL_BLOCKS_ASSETS . 'css/pb-editor-common.css', array( 'wp-edit-blocks' ), POWERFUL_BLOCKS_VERSION );
		wp_enqueue_script( 'pb-block-editor', POWERFUL_BLOCKS_ASSETS . 'js/pb-blocks-editor.js', array( 'wp-blocks', 'wp-components', 'wp-compose', 'wp-i18n', 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-polyfill', 'wp-editor', 'wp-api-fetch' ), POWERFUL_BLOCKS_VERSION, true );

		/**
		 * Block Slug Update
		 *
		 * @param string $txt Text.
		 * @return string
		 */
		function pb_block_name_u( $txt ) {
			if ( preg_match( '/-/', $txt, $matches ) ) {
				$n_txt = explode( '-', $txt );
				return $n_txt[0] . '-' . $n_txt[1];
			} else {
				return $txt;
			}
		}
		$inactive_blocks = array();
		foreach ( Dashboard::inactive_blocks() as $block ) {
			$inactive_blocks[] = pb_block_name_u( $block );
		}
		wp_localize_script(
			'pb-block-editor',
			'pb_blocks_data',
			array(
				'inactive_blocks' => $inactive_blocks,
			)
		);

	}
	/**
	 * Get Block CSS from Post Meta
	 *
	 * @param string $hook Page slug.
	 *
	 * @return void
	 */
	public function get_block_css( $hook ) {
		global $post;

		$post_id = $post->ID;

		$css = get_post_meta( $post_id, '_pb_css', true );

		echo '<style>' . $css . '</style>';
	}
}
