<?php
/**
 * Dashboard
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB\Admin;

use ultraDevs\PB\Helper;

/**
 * Dashboard Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Dashboard {
	/**
	 * Menu
	 *
	 * @var string
	 */
	public static $menu = '';

	/**
	 * Menu Icon
	 *
	 * @var string
	 */
	public static $icon = POWERFUL_BLOCKS_ASSETS . 'images/pb.svg';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );
		add_action( 'admin_menu', array( __CLASS__, 'update_menu' ) );
	}


	/**
	 * Register Admin Menu
	 */
	public static function register_menu() {
		self::$menu = add_menu_page( __( 'Dashboard - Powerful Blocks', 'powerful-blocks' ), __( 'Powerful Blocks', 'powerful-blocks' ), 'manage_options', POWERFUL_BLOCKS_MENU_SLUG, array( __CLASS__, 'view_main' ), self::$icon, 56 );

		$tabs = self::tabs();
		foreach ( $tabs as $key => $value ) {
			if ( empty( $value['view'] ) || ! is_callable( $value['view'] ) ) {
				continue;
			}

			add_submenu_page( POWERFUL_BLOCKS_MENU_SLUG, sprintf( __( '%s - Powerful Blocks', 'powerful-blocks' ), $value['title'] ), $value['title'], 'manage_options', POWERFUL_BLOCKS_MENU_SLUG . '#' . $key, array( __CLASS__, 'view_main' ) );
		}
	}

	/**
	 * Update mene
	 */
	public static function update_menu() {
		global $submenu;
		$menu = $submenu[ POWERFUL_BLOCKS_MENU_SLUG ];
		array_shift( $menu );
		// phpcs:ignore
		$submenu[ POWERFUL_BLOCKS_MENU_SLUG ] = $menu;
	}

	/**
	 * UA Dashboard Tabs
	 */
	public static function tabs() {
		$tabs = array(
			'home' => array(
				'title' => 'Home',
				'view'  => array( __CLASS__, 'view_home' ),
			),
			'blocks' => array(
				'title' => 'Blocks',
				'view'  => array( __CLASS__, 'view_blocks' ),
			),
		);
		return $tabs;
	}

	/**
	 * All Block List
	 *
	 * @return array
	 */
	public static function all_blocks() {
		$blocks = Helper::block_list();
		return $blocks;
	}

	/**
	 * Inactive Block List
	 *
	 * @return array
	 */
	public static function inactive_blocks() {
		$inactive_blocks = Helper::pb_get_option( '__pb_inactive_blocks', array() );
		return $inactive_blocks;
	}


	/**
	 * Save Inactive Blcoks
	 *
	 * @param array $blocks list.
	 * @return void
	 */
	public static function save_inactive_blocks( $blocks ) {
		Helper::pb_update_option( '__pb_inactive_blocks', $blocks );
	}

	/**
	 * Main View
	 */
	public static function view_main() {
		self::load_template( 'main' );
	}

	/**
	 * Home View
	 */
	public static function view_home() {
		self::load_template( 'home' );
	}

	/**
	 * Blocks View
	 */
	public static function view_blocks() {
		self::load_template( 'blocks' );
	}

	/**
	 * Template Loading
	 *
	 * @param string $temp Template name.
	 */
	public static function load_template( $temp ) {

		$temp_file = POWERFUL_BLOCKS_DIR_PATH . 'templates/admin/dashboard-' . $temp . '.php';
		if ( is_readable( $temp_file ) ) {
			require $temp_file;
		}
	}

}
