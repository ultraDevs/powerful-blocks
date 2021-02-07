<?php
/**
 * Template Manager
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */

namespace ultraDevs\PB\Admin;

/**
 * Template Manager Class
 *
 * @package PowerfulBlocks
 * @since 1.0.0
 */
class Templater {

	/**
	 * Templates.
	 *
	 * @var array
	 */
	protected $templates;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->templates = array(
			'pb-header-transparent.php' => __( 'PB - Transparent Header', 'powerful-blocks' ),
		);
	}

	/**
	 * Register
	 */
	public function register() {
		add_filter( 'theme_page_templates', array( $this, 'add_template_to_dropdown' ) );
		add_filter( 'wp_insert_post_data', array( $this, 'register_project_templates' ) );
		add_filter( 'template_include', array( $this, 'view_project_template' ) );
	}


	/**
	 * Add Template to Dropdown
	 *
	 * @param array $templates Templates.
	 */
	public function add_template_to_dropdown( $templates ) {
		return array_merge( $templates, $this->templates );
	}

	/**
	 * Adds our template to the pages cache in order to trick WordPress
	 * into thinking the template file exists where it doens't really exist.
	 *
	 * @param   array $atts  The attributes for the page attributes dropdown.
	 * @return  array atts The attributes for the page attributes dropdown.
	 */
	public function register_project_templates( $atts ) {

		// Create the key used for the themes cache.
		$cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );

		// Retrieve the cache list. If it doesn't exist, or it's empty prepare an array.
		$templates = wp_cache_get( $cache_key, 'themes' );
		if ( empty( $templates ) ) {
			$templates = array();
		} // end if

		// Since we've updated the cache, we need to delete the old cache.
		wp_cache_delete( $cache_key, 'themes' );

		// Now add our template to the list of templates by merging our templates
		// with the existing templates array from the cache.
		$templates = array_merge( $templates, $this->templates );

		// Add the modified cache to allow WordPress to pick it up for listing
		// available templates.
		wp_cache_add( $cache_key, $templates, 'themes', 1800 );

		return $atts;

	}
	/**
	 * Checks if the template is assigned to the page.
	 *
	 * @param array $template Template.
	 */
	public function view_project_template( $template ) {

		global $post;

		// If no posts found, return to
		// avoid "Trying to get property of non-object" error.
		if ( ! isset( $post ) ) {
			return $template;
		}

		if ( ! isset( $this->templates[ get_post_meta( $post->ID, '_wp_page_template', true ) ] ) ) {
			return $template;
		}

		$path = POWERFUL_BLOCKS_DIR_PATH . 'templates/custom/';
		$file = $path . get_post_meta( $post->ID, '_wp_page_template', true );

		// Just to be safe, we check if the file exist first.
		if ( file_exists( $file ) ) {
			return $file;
		}

		return $template;

	}
}
