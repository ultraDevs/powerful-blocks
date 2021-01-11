<?php
/**
 * Post Meta Manager
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB\Admin;

/**
 * Post Meta Manager Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Post_Meta {

	/**
	 * Register
	 */
	public function register() {
		add_filter( 'init', array( $this, 'register_post_meta' ) );
	}


	/**
	 * Register Post Meta.
	 */
	public function register_post_meta() {
		register_meta(
			'post',
			'_pb_fonts_attr',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => array( $this, 'pb_auth_callback' ),
			)
		);
	}

	/**
	 * Auth Callback
	 */
	public function pb_auth_callback() {
		return current_user_can( 'edit_posts' );
	}
}
