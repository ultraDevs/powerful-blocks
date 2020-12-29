<?php
/**
 * Class for handling Ajax
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

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
			add_action( 'wp_ajax_pb_save_inactive_block', array( $this, 'pb_save_inactive_block' ) );
		}
	}

	/**
	 * Save Inactive Blocks
	 *
	 * @return void
	 */
	public function pb_save_inactive_block( ) {
		if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], 'pb-save-ib-nonce' ) ) {
			wp_send_json_error(
				array(
					'msg' => __( 'Invalid Nonce', 'powerful-blocks' ),
				),
			);
		}

		$block  = ! empty( $_POST['block'] ) ? sanitize_text_field( wp_unslash( $_POST['block'] ) ) : '';
		$status = ! empty( $_POST['status'] ) ? wp_unslash( $_POST['status'] ) : true;

		$blocks = Helper::pb_get_option( 'powerful_blocks_inactive_blocks', array() );

		$blocks[ $block ]['status'] = $status;

		Helper::pb_update_option( 'powerful_blocks_inactive_blocks', $blocks );

		wp_send_json_success(
			array(
				'success' => __( 'Success', 'powerful-blocks' ),
			),
		);
	}

}
