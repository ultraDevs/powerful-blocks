<?php
/**
 * Helper Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB;

/**
 * Helper Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Helper {

	/**
	 * Block List var
	 *
	 * @var array
	 */
	public static $blocks = array();

	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Block List
	 *
	 * @return array
	 */
	public static function block_list() {
		self::$blocks = array(
			'alert-box'  => array(
				'title'  => __( 'Alert Box', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'click-to-tweet'  => array(
				'title'  => __( 'Click To Tweet', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'star-rating'  => array(
				'title'  => __( 'Star Rating', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'testimonial'  => array(
				'title'  => __( 'Testimonial', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'info-box'  => array(
				'title'  => __( 'Info Box', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'icon-box'  => array(
				'title'  => __( 'Icon Box', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'pb-spacer'  => array(
				'title'  => __( 'PB Spacer', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
		);

		uksort( self::$blocks, array( __CLASS__, 'pb_custom_sort' ) );

		return self::$blocks;
	}

	/**
	 * Binary safe case-insensitive string comparison
	 *
	 * @param string $a first string.
	 * @param string $b second string.
	 */
	public static function pb_custom_sort( $a, $b ) {
		return strcasecmp( $a, $b );
	}

	/**
	 * Add Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $value Option Value.
	 */
	public static function pb_add_option( $key, $value ) {
		// Get Option.
		add_option( $key, $value );
	}

	/**
	 * Get Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $default Option Default.
	 */
	public static function pb_get_option( $key, $default = false ) {
		// Get Option.
		$value = get_option( $key, $default );
		return $value;
	}

	/**
	 * Save Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $value Option Value.
	 */
	public static function pb_update_option( $key, $value ) {
		// Get Option.
		update_option( $key, $value );
	}
}
