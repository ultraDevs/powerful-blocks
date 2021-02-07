<?php
/**
 * Template Name: PB - Transparent Header
 *
 * @package PowerfulBlocks
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
	<article id="dd post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="entry-content">
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;

get_footer();

