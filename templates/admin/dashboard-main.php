<?php

defined('ABSPATH') || die();
?>
<div class="wrap">
	<h1 class="screen-reader-text"> <?php _e( 'Ultra Elementor Addons', 'ultra-addons' ); ?></h1>
	<form action="" class="pb-dashboard-form" method="POST">
		<div class="pb-db-tabs">
			<ul class="pb-tabs__nav">
				<?php
				$tabs = self::tabs();
				foreach ( $tabs as $key => $value ) {
					?>
					<li><a href="#<?php echo $key; ?>"><?php echo $value['title']; ?></a></li>
					<?php
				}
				?>
			</ul>
		</div>
		<!-- <div class="pb-w-s__btn">
			<input type="submit" name="save-b" id="pb-save-blocks" class="button submit" value="Save Changes"  />
		</div> -->
		<div class="pb-tabs__content">
			<?php
			$tabs = self::tabs();
			foreach ( $tabs as $key => $value) {
				if ( empty( $value['view'] ) || ! is_callable( $value['view'] ) ) {
					continue;
				}
				?>
			<div class="pb-tabs__item" id="<?php echo $key; ?>">
				<?php call_user_func( $value['view'], $key, $value ); ?>
			</div>
				<?php
			}
			?>
		</div>
	</form>
</div>