<?php
/**
 * Blocks Helper Class
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
class Blocks_Helper {

	/**
	 * Block Render
	 *
	 * @param string $content Block Content.
	 * @param array  $block Block Info & Attributes.
	 * @return mixed
	 */
	public function block_render( $content, $block ) {

		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $block_content;
		}

		$attributes = $block['attrs'];

		$typo_blocks = array(
			'core/paragraph',
			'core/heading',
			'core/list',
			'core/quote',
			'core/code',
			'core/preformatted',
			'core/verse'
		);

		if ( false !== strpos( $block['blockName'], 'core/' ) ) {

			$u_content  = '<div class="powerful-blocks-s" id="pb-wrap-' . esc_attr( $attributes['blockId'] ) . '">';
			$u_content .= $content;
			$u_content .= '</div>';
		} else {
			$u_content .= $content;
		}
		return $u_content;
	}
}
