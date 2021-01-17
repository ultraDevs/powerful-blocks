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
		/**
		 * Font Awesome
		 */
		wp_enqueue_style( 'pb-font-awesome', POWERFUL_BLOCKS_ASSETS . 'vendor/font-awesome/css/font-awesome5.css', '', POWERFUL_BLOCKS_VERSION );
		wp_enqueue_style( 'pb-animatecss', POWERFUL_BLOCKS_ASSETS . 'vendor/animatecss/animate.min.css', '', POWERFUL_BLOCKS_VERSION );

	}

	/**
	 * Block Assets
	 *
	 * Enqueue Block Styles and Scripts
	 */
	public function block_assets() {

		wp_enqueue_style( 'pb-block-styles', POWERFUL_BLOCKS_ASSETS . 'css/pb-styles.css', array(), POWERFUL_BLOCKS_VERSION );
		wp_enqueue_style( 'pb-animatecss', POWERFUL_BLOCKS_ASSETS . 'vendor/animatecss/animate.min.css', '', POWERFUL_BLOCKS_VERSION );
		/**
		 * Font Awesome
		 */
		wp_enqueue_style( 'pb-font-awesome', POWERFUL_BLOCKS_ASSETS . 'vendor/font-awesome/css/font-awesome5.css', '', POWERFUL_BLOCKS_VERSION );
		/**
		 * Font Icon Picker
		 */
		wp_enqueue_style( 'pb-font-icon-picker-base', POWERFUL_BLOCKS_ASSETS . 'vendor/font-awesome/css/fonticonpicker.base-theme.react.css', array(), POWERFUL_BLOCKS_VERSION );
		wp_enqueue_style( 'pb-font-icon-picker-material', POWERFUL_BLOCKS_ASSETS . 'vendor/font-awesome/css/fonticonpicker.material-theme.react.css', array(), POWERFUL_BLOCKS_VERSION );
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
			'UDPB',
			array(
				'inactive_blocks' => $inactive_blocks,
				'type'            => 'free',
			)
		);

	}
	/**
	 * Get Block CSS from Post Meta
	 *
	 * @return void
	 */
	public function get_block_css() {
		global $post;

		$post_id = $post->ID;

		$css = get_post_meta( $post_id, '_pb_css', true );

		echo '<style>' . $this->get_google_fonts( $css ) . '</style>';
	}

	/**
	 * Get Blocks Google fonts from CSS.
	 *
	 * @return void
	 */
	public function load_fonts() {
		global $post;

		$post_id = $post->ID;

		$css = get_post_meta( $post_id, '_pb_css', true );

		$fonts = $this->get_google_fonts( $css, false );

		$query_args = array(
			'family' => $fonts,
		);

		wp_enqueue_style(
			'pb-admin-block-fonts',
			add_query_arg( $query_args, '//fonts.googleapis.com/css' ),
			array(),
			POWERFUL_BLOCKS_VERSION
		);

	}

	/**
	 * Extract Fonts and use google fonts API.
	 *
	 * @param string $css CSS.
	 * @return string
	 */
	public function get_google_fonts( $css ) {

		preg_match_all( '/font-family: .*?;/', $css, $matches );

		$gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

		$fonts = '';
		foreach ( $matches[0] as $match ) {

			$extract = explode( ':', str_replace( array( '"', ';' ), array( '', ',' ), $match ) );
			$fonts .= trim( $extract[1] );
		}

		if ( ! empty( $fonts ) ) {

			$fonts = array_unique( explode( ',', $fonts ) );

			$system = array(
				'Arial',
				'Tahoma',
				'Verdana',
				'Helvetica',
				'Times New Roman',
				'Trebuchet MS',
				'Georgia',
			);

			$gfonts = '';

			$gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

			foreach ( $fonts as $font ) {
				if ( ! in_array( $font, $system, true ) && ! empty( $font ) ) {
					$gfonts .= str_replace( ' ', '+', trim( $font ) ) . $gfonts_attr . '|';
				}
			}


			if ( ! empty( $gfonts ) ) {
				$query_args = array(
					'family' => $gfonts,
				);

				wp_register_style(
					'pb-block-fonts',
					add_query_arg( $query_args, '//fonts.googleapis.com/css' ),
					array(),
					POWERFUL_BLOCKS_VERSION
				);

				wp_enqueue_style( 'pb-block-fonts' );

			}

			// Reset.
			$gfonts = '';
		}

		return $css;
	}
}
