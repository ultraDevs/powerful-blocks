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
			$u_content .= '<div class="' . classNames(
				'pb-block-c-wrapper',
				$attributes['hideOnDesktop'] ? 'pb-hide-d' : '',
				$attributes['hideOnTablet'] ? 'pb-hide-t' : '',
				$attributes['hideOnMobile'] ? 'pb-hide-m' : '',
				$attributes['blockWidth'] ? 'pb-b-e--width' : '',
				'image' === $attributes['backgroundType'] ? 'pb-ab-bg--image' : '',
				true === $attributes['enableCondition'] ? 'pb-block-conditions' : '',
				$attributes['inAnimation'] ? 'edit' === $type ? "pb-animation pb__animated pb__{$attributes['inAnimation']}" : 'pb-animation' : '',
				$attributes['outAnimation'] ? 'edit' === $type ? '' === $attributes['inAnimation'] ? "pb-animation pb__animated_out pb__out_{$attributes['outAnimation']}" : "pb-animation pb__animated_out pb__out_{$attributes['outAnimation']}" : 'pb-animation-out' : '',
				$attributes['inAnimationDuration'] ? "pb-anim-dur__{$attributes['inAnimationDuration']}" : '',
				$attributes['outAnimationDuration'] ? "pb-anim-out-dur__{$attributes['outAnimationDuration']}" : '',
				true === $attributes['CSSTransform'] ? 'pb-c-css-transform' : '',
				in_array( $block['blockName'], $typo_blocks ) ? 'pb-c-typo' : '',
				$attributes['customClass'],
			) . '" ' . esc_attr( $custom_attributes ) . '>';
			$u_content .= $content;
			$u_content .= '</div>';
			$u_content .= '</div>';
		} else {
			$u_content .= $content;
		}
		return $u_content;
	}
}
