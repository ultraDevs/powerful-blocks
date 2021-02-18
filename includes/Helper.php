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
			'accordion'  => array(
				'title'  => __( 'Accordion', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
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
			'fun-factor'  => array(
				'title'  => __( 'Fun Factor', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'counter'  => array(
				'title'  => __( 'Counter', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'block-wrapper'  => array(
				'title'  => __( 'PB Block Wrapper', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'animated-headlines'  => array(
				'title'  => __( 'Animated Headlines', 'powerful-blocks' ),
				'is_pro' => false,
				'status' => 'active',
			),
			'tabs'  => array(
				'title'  => __( 'Tabs', 'powerful-blocks' ),
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
		// Add Option.
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
	 * Update Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $value Option Value.
	 */
	public static function pb_update_option( $key, $value ) {
		// Update Option.
		update_option( $key, $value );
	}

	/**
	 * Delete Option
	 *
	 * @param string $key Option Key.
	 */
	public static function pb_delete_option( $key ) {
		// Delete Option.
		delete_option( $key );
	}

	/**
	 * Supported Themes
	 *
	 * @return array
	 */
	public function pb_supported_themes() {
		return array(
			'twentytwentyone',
			'page-builder-framework',
		);
	}

	/**
	 * Multiple in_array
	 *
	 * @param array $needles needles.
	 * @param array $haystack haystack.
	 * @return boolean
	 */
	public function multiple_in_array( $needles, $haystack ) {
		return (bool) array_intersect( $needles, $haystack );
	}

	/**
	 * Type
	 *
	 * @return boolean
	 */
	public static function pb_type() {
		return apply_filters( 'pb_type', 'free' );
	}
}
