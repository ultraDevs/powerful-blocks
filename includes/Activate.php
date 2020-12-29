<?php
/**
 * Activate
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

use ultraDevs\PB\Helper;

/**
 * Activate Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Activate {
	/**
	 * The code that runs during plugin activation.
	 *
	 * @return void
	 */
	public function run() {

		$blocks = Helper::block_list();
		Helper::pb_update_option( 'powerful_blocks_inactive_blocks', $blocks );
		Helper::pb_add_option( 'powerful_blocks_do_activation_redirect', true );

		$this->plugin_data();

	}

	/**
	 * Save Plugin's Data
	 */
	public function plugin_data() {
		Helper::pb_update_option( 'powerful_blocks_version', POWERFUL_BLOCKS_VERSION );

		$installed_time = Helper::pb_get_option( 'powerful_blocks_installed_time', false );
		if ( ! $installed_time ) {
			Helper::pb_update_option( 'powerful_blocks_installed_time', time() );
		}
	}

	/**
	 * Activation Redirect
	 */
	public function activation_redirect() {

		if ( get_option( 'powerful_blocks_do_activation_redirect', false ) ) {

			delete_option( 'powerful_blocks_do_activation_redirect' );
			wp_safe_redirect( admin_url( 'admin.php?page=' . POWERFUL_BLOCKS_MENU_SLUG ) );
			exit();
		}
	}
}
