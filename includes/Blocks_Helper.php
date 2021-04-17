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

		$custom_attributes = null;

		$pb_animations = wp_json_encode(
			array(
				'in'  => $attributes['inAnimation'] ? $attributes['inAnimation'] : '',
				'out' => $attributes['outAnimation'] ? $attributes['outAnimation'] : '',
			)
		);

		$custom_attr = array();

		if ( $attributes['customAttributes'] ) {

			$extract_attr = explode( ',', $attributes['customAttributes'] );

			foreach ( $extract_attr as $attr ) {
				$extract_s_attr     = explode( '|', $attr );
				$custom_attributes .= $extract_s_attr[0] . '=' . $extract_s_attr[1] . ' ';
			}
		}

		$wrapper_link = wp_json_encode(
			array(
				'id'         => $attributes['blockId'] ? $attributes['blockId'] : 'pb-wl-r',
				'addLink'    => $attributes['addWLink'] ? $attributes['addWLink'] : false,
				'url'        => $attributes['wrapperLink'] ? $attributes['wrapperLink'] : false,
				'new_window' => $attributes['pbWrapperLinkNewTab'] ? $attributes['pbWrapperLinkNewTab'] : false,
				'nofollow'   => $attributes['wrapperLinkNofollow'] ? $attributes['wrapperLinkNofollow'] : false,
			)
		);

		if ( $attributes['customID'] ) {
			$custom_attributes .= ' id=' . esc_attr( $attributes['customID'] ) . ' ';
		}

		if ( true === $attributes['addWLink'] ) {
			$custom_attributes .= 'data-pb-link=' . $wrapper_link . ' ';
		}

		if ( $pb_animations ) {
			$custom_attributes .= 'data-pb-animation=' . $pb_animations . '';
		}

		if ( 'core/heading' === $block['blockName'] ) {
			$custom_attributes .= ' class=pb-c-heading' . ' ';
		}

		$u_content  = '<div class="powerful-blocks-s" id="pb-wrap-' . esc_attr( $attributes['blockId'] ) . '">';
		$u_content .= '<div ' . esc_attr( $custom_attributes ) . '>';
		$u_content .= $content;
		$u_content .= '</div>';
		$u_content .= '</div>';
		return $u_content;
	}
}
