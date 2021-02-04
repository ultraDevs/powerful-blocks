<?php
/**
 * Class for Rest API.
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

use ultraDevs\PB\Helper;

/**
 * Manage Rest API.
 *
 * This class is for managing Rest API.
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class API {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_rest_api' ) );
	}

	/**
	 * Register Rest API
	 */
	public function register_rest_api() {

		register_rest_route(
			'powerful-blocks/v1',
			'/save_block_css/',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'save_block_css' ),
					'permission_callback' => function ( $request ) {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);

		register_rest_route(
			'powerful-blocks/v1',
			'/block_status',
			array(
				array(
					'methods'  => 'POST',
					'callback' => array( $this, 'block_status' ),
				),
			)
		);
	}

	/**
	 * Save Block CSS API Callback
	 *
	 * @param array $req Request.
	 *
	 * @return array
	 */
	public function save_block_css( $req ) {

		$params = $req->get_params();

		$post_id = sanitize_text_field( $params['post_id'] );

		$css = $params['css'];

		update_post_meta( $post_id, '_pb_css', $css );
		update_post_meta( $post_id, '_pb_css_t', time() );

		return wp_send_json_success(
			array(
				'msg' => 'Success',
			)
		);
	}

	/**
	 * Block Status
	 *
	 * @param array $req Request.
	 * 
	 * @return array
	 */
	public function block_status( $req ) {

		$params = $req->get_params();

		$block_name = sanitize_text_field( $params['block_name'] );

		$block_name = explode( '/', $block_name );

		$block_name = $block_name[1];

		if ( preg_replace( '/(?<!\ )[A-Z]/', '-$0', $block_name ) ) {
			$block_name = strtolower( preg_replace( '/(?<!\ )[A-Z]/', '-$0', $block_name ) );
		}

		$block_list = Helper::pb_get_option( '__pb_blocks', array() );

		if ( $block_name ) {

			if ( array_key_exists( $block_name, $block_list ) ) {

				$block_status = $block_list[ $block_name ]['status'];
				return wp_send_json_success(
					array(
						'status' => $block_status,
					)
				);
			} else {
				return wp_send_json_error(
					array(
						'msg' => 'No Block Found',
					)
				);
			}
		}
	}
}
