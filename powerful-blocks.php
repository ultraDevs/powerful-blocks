<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package PowerfulBlocks
 */

/**
 * Plugin Name:       Powerful Blocks for Gutenberg
 * Plugin URI:        https://ultradevs.com/plugins/powerful-blocks
 * Description:       Powerful Blocks for WordPress Gutenberg.
 * Version:           1.0.0
 * Author:            ultraDevs
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       powerful-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'POWERFUL_BLOCKS_VERSION', '1.0.0' );
define( 'POWERFUL_BLOCKS_NAME', plugin_basename( __FILE__ ) );
define( 'POWERFUL_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'POWERFUL_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'POWERFUL_BLOCKS_DIST_PATH', POWERFUL_BLOCKS_DIR_PATH . 'dist/' );
define( 'POWERFUL_BLOCKS_DIST_URL', POWERFUL_BLOCKS_DIR_URL . 'dist/' );
define( 'POWERFUL_BLOCKS_ASSETS', POWERFUL_BLOCKS_DIR_URL . 'assets/' );
define( 'POWERFUL_BLOCKS_MENU_SLUG', 'powerful-blocks' );

/**
 * Require Composer Autoload
 */
require_once POWERFUL_BLOCKS_DIR_PATH . 'vendor/autoload.php';

/**
 * Powerful Blocks class
 */
final class PowerfulBlocks {

	/**
	 * Constructor
	 */
	public function __construct() {

		add_action( 'plugins_loaded', array( $this, 'init' ) );

		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		add_action( 'block_categories', array( $this, 'register_block_category' ), 10, 2 );
		add_action( 'init', array( $this, 'load_text_domain' ) );

	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \PowerfulBlocks
	 */
	public static function run() {
		/**
		 * Instance
		 *
		 * @var boolean
		 */
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		return $instance;
	}

	/**
	 * Plugin Init
	 */
	public function init() {

		// Helper Class.
		$helper = new ultraDevs\PB\Helper();

		// Ajax Class.
		$ajax = new ultraDevs\PB\Ajax();

		// Assets Manager Class.
		$assets_manager = new ultraDevs\PB\Assets_Manager();

		// Activate.
		$activate = new ultraDevs\PB\Activate();

		// Blocks Manager.
		$blocks_manager = new ultraDevs\PB\Admin\Blocks_Manager();
		$blocks_manager->register_blocks();

		if ( is_admin() ) {

			// Activation_Redirect.
			add_action( 'admin_init', array( $activate, 'activation_redirect' ) );

			// Dashboard.
			$dashboard = new ultraDevs\PB\Admin\Dashboard();
			$dashboard->register();

			// Admin Assets.
			add_action( 'admin_enqueue_scripts', array( $assets_manager, 'admin_assets' ) );

			// Block Editor Assets.
			add_action( 'enqueue_block_editor_assets', array( $assets_manager, 'block_editor_assets' ) );

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

		} else {
			// Frontend Assets.
			add_action( 'wp_enqueue_scripts', array( $assets_manager, 'frontend_assets' ) );

		}

	}

	/**
	 * The code that runs during plugin activation.
	 */
	/**
	 * Plugin Activation.
	 *
	 * @return void
	 */
	public function activate() {
		$activate = new ultraDevs\PB\Activate();
		$activate->run();
	}

	/**
	 * Block Category
	 *
	 * @param array $categories Block Categories.
	 *
	 * @return array
	 */
	public function register_block_category( $categories ) {

		$categories = array_merge(
			$categories,
			array(
				array(
					'slug'  => 'powerful-blocks',
					'title' => __( 'Powerful Blocks', 'powerful-blocks' ),
				),
			)
		);

		return $categories;
	}

	/**
	 * Loads a plugin’s translated strings.
	 *
	 * @return void
	 */
	public function load_text_domain() {
		load_plugin_textdomain( 'powerful-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Plugin Action Links
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {

		$links[] = '<a href="' . admin_url( 'admin.php?page=' . POWERFUL_BLOCKS_MENU_SLUG ) . '">' . __( 'Settings', 'powerful-blocks' ) . '</a>';

		return $links;

	}
}
PowerfulBlocks::run();


/**
 * Blocks
 */

// require_once POWERFUL_BLOCKS_DIR_PATH . '/blocks/alert-box/alert-box.php';
require_once POWERFUL_BLOCKS_DIR_PATH . '/src/blocks/testimonial/testimonial.php';
require_once POWERFUL_BLOCKS_DIR_PATH . '/src/blocks/star-rating/star-rating.php';
require_once POWERFUL_BLOCKS_DIR_PATH . '/src/blocks/click-to-tweet/click-to-tweet.php';
require_once POWERFUL_BLOCKS_DIR_PATH . '/src/blocks/countdown/countdown.php';
require_once POWERFUL_BLOCKS_DIR_PATH . '/src/blocks/test-block/test-block.php';
