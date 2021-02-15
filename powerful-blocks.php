<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package PowerfulBlocks
 */

/**
 * Plugin Name:       Powerful Blocks
 * Plugin URI:        https://powerfulblocks.com
 * Description:       Powerful Blocks is a Gutenberg Block Plugin With Awesome Blocks and Advanced Controls.
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
		add_filter( 'block_categories', array( $this, 'register_block_category' ), 10, 2 );
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

		// Rest API Manager.
		$rest_api_manager = new ultraDevs\PB\API();

		// Post Meta Manager.
		// $post_meta = new ultraDevs\PB\Admin\Post_Meta();
		// $post_meta->register();

		// Templater.
		$templater = new ultraDevs\PB\Admin\Templater();
		$templater->register();

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

			// Block Assets.
			add_action( 'enqueue_block_assets', array( $assets_manager, 'block_assets' ) );

			add_action( 'admin_enqueue_scripts', array( $assets_manager, 'load_fonts' ) );

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

		} else {
			// Frontend Assets.
			add_action( 'wp_enqueue_scripts', array( $assets_manager, 'frontend_assets' ) );
			add_action( 'wp_head', array( $assets_manager, 'get_block_css' ) );

		}
		$this->appsero_init_tracker_powerful_blocks();

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


	/**
	 * Initialize the plugin tracker
	 *
	 * @return void
	 */
	public function appsero_init_tracker_powerful_blocks() {

		if ( ! class_exists( 'Appsero\Client' ) ) {
			require_once __DIR__ . '/vendor/appsero/src/Client.php';
		}

		$client = new Appsero\Client( '5f221920-4f40-4349-ae25-b49335675128', 'Powerful Blocks for Gutenberg', __FILE__ );

		// Active insights.
		$client->insights()->init();

		// Active automatic updater.
		$client->updater();

		// Active license page and checker.
		$args = array(
			'type'       => 'options',
			'menu_title' => 'Powerful Blocks for Gutenberg',
			'page_title' => 'Powerful Blocks for Gutenberg Settings',
			'menu_slug'  => 'powerful-blocks',
		);
		$client->license()->add_settings_page( $args );

	}
}
PowerfulBlocks::run();
