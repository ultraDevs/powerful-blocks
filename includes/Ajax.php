<?php
/**
 * Class for handling Ajax
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

use ultraDevs\PB\Admin\Dashboard;
use ultraDevs\PB\Helper;

/**
 * Manage All Ajax Request
 *
 * This class is for managing Ajax
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Ajax {

	/**
	 * Constructor
	 */
	public function __construct() {
		if ( is_admin() ) {
			add_action( 'admin_post_pb_save_blocks_o', array( $this, 'pb_save_blocks_o_c' ) );
		}
	}

	/**
	 * Save Blocks Options.
	 *
	 * @return void
	 */
	public function pb_save_blocks_o_c() {

		if ( isset( $_POST['save-b'] ) ) {
			if ( ! isset( $_POST['pb_save_ib_nonce'] )
				|| ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['pb_save_ib_nonce'] ) ), 'pb_save_ib_action' ) 
			) {
				echo 'Sorry, your nonce did not verify.';
				return;
			}

			$blocks          = ! empty( $_POST['blocks'] ) ? Helper::sanitize_text_or_array_field( wp_unslash( $_POST['blocks'] ) ) : array();
			$inactive_blocks = array_diff( array_keys( Dashboard::all_blocks() ), $blocks );

			Dashboard::save_inactive_blocks( $inactive_blocks );

			wp_safe_redirect( admin_url( 'admin.php?page=powerful-blocks#blocks' ) );

			exit();
		}
	}
}
