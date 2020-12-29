<?php
/**
 * Blocks Manager Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB\Admin;

use ultraDevs\PB\Helper;

/**
 * Manage All Blocks
 *
 * This class is for managing blocks
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Blocks_Manager {

	/**
	 * Inactive Block Key
	 */
	const PB_IB_KEY = 'powerful_blocks_inactive_blocks';

	/**
	 * Register Blocks
	 */
	public function register_blocks() {
		$blocks = Helper::pb_get_option( 'powerful_blocks_inactive_blocks', array() );
		foreach ( $blocks as $block_key => $block ) {
			// if ( 'not_pro' === true ) {
			// 	if ( true === $block['is_pro'] ) {
			// 		continue;
			// 	}
			// }

			if ( 'active' === $block['status'] ) {
				$this->require_block( $block_key );
			}
		}
	}

	/**
	 * Require Block Files
	 *
	 * @param string $block Block Name.
	 */
	public function require_block( $block ) {
		require_once POWERFUL_BLOCKS_DIR_PATH . '/blocks/' . $block . '/' . $block . '.php';
	}
}
