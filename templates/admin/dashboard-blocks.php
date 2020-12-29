<?php
/**
 * Dashboard - Blocks
 *
 * @package PowerfulBlocks
 */

defined( 'ABSPATH' ) || die();

$block_list = self::all_blocks();

?>
<div class="wrap">
	<div class="pb-blocks-list">
		<?php
		foreach ( $block_list as $key => $block ) {
			if ( 'active' === $block['status'] ) {
				$checked = 'checked="checked"';
			} else {
				$checked = '';
			}

			// if ( ultra_addons_fs()->is_not_paying() ) {
			//     if ( $block['is_pro'] == true ) {
			//         $checked = 'disabled="disabled"';
			//     }
			// }
			?>
		<div class="pb-w__item">
			<span class="pb-w-i__icon"><?php echo pb_get_block_icon( $key ); ?></span>
			<h3 class="pb-w-i__name"><?php echo esc_html( $block['title'] ); ?> <a href="<?php echo pb_get_demo_link( $key ); ?>" target="_blank"><i class="eicon-eye"></i></a></h3>
			<div class="pb-w-i__toggle switch_box">
				<input class="pb-toggle" <?php echo esc_html( $checked ); ?> id="pb-block-<?php echo esc_html( $key ); ?>" type="checkbox" name="<?php echo esc_html( $key ); ?>" value="<?php echo esc_html( $key ); ?>">
			</div>
		</div>
			<?php
		}
		?>
	</div>
</div>