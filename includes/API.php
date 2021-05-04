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
class API extends \WP_REST_Controller {

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

		register_rest_route(
			'powerful-blocks/v1',
			'/get_templates/',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'get_templates_callback' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			'powerful-blocks/v1',
			'/get_template_categories/',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'get_template_categories_callback' ),
				'permission_callback' => '__return_true',
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

	/**
	 * Get Templates
	 *
	 * @param array $req Request.
	 *
	 * @return array
	 */
	public function get_templates_callback( $req ) {

		$params = $req->get_params();

		$type     = sanitize_text_field( $params['type'] );
		$category = empty( $params['category'] ) ? ' ' : sanitize_text_field( $params['category'] );

		$url       = 'https://powerfulblocks.com/wp-json/powerful-blocks/v1/templates';
		$url_w_q   = add_query_arg(
			array(
				'category' => trim( $category ),
				'type'     => trim( $type ),
			),
			$url
		);
		$templates = get_transient( 'pb_templates', false );

		if ( ! $templates ) {

			$n_template_categories_b = wp_remote_get(
				$url_w_q
			);

			if ( ! is_wp_error( $n_template_categories_b ) ) {
				$template_categories_b = wp_remote_retrieve_body( $n_template_categories_b );
				$template_categories_b = json_decode( $template_categories_b, true );

				$templates = $template_categories_b;
				set_transient( 'pb_templates', $templates, HOUR_IN_SECONDS );
			}
		}
		return $templates;
	}

	/**
	 * Get Template Categories
	 *
	 * @param array $req Request.
	 *
	 * @return array
	 */
	public function get_template_categories_callback( $req ) {

		$params = $req->get_params();

		$type = sanitize_text_field( $params['type'] );

		$url       = 'https://powerfulblocks.com/wp-json/powerful-blocks/v1/template_categories';
		$url_w_q   = add_query_arg(
			array(
				'type'     => trim( $type ),
			),
			$url
		);
		$template_categories = get_transient( 'pb_template_categories', false );

		if ( ! $template_categories ) {

			$n_template_categories_b = wp_remote_get( $url_w_q );

			if ( ! is_wp_error( $n_template_categories_b ) ) {
				$template_categories_b = wp_remote_retrieve_body( $n_template_categories_b );
				$template_categories_b = json_decode( $template_categories_b, true );

				$template_categories = $template_categories_b;
				set_transient( 'pb_template_categories', $template_categories, DAY_IN_SECONDS );
			}
		}
		return $template_categories;
	}
}
