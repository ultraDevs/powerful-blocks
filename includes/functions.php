<?php
/**
 * PB Functions here
 *
 * @package PowerfulBlocks
 */

/**
 * Generate Demo Link by block name
 *
 * @param string $block Block Name.
 */
function udpb_get_demo_link( $block ) {
	return 'https://powerfulblocks.com/blocks/' . $block;
}

/**
 * Generate Icon by block name
 *
 * @param string $block Block Name.
 */
function udpb_get_block_icon( $block ) {
	switch ( $block ) {
		case 'alert-box':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" class="pb-block-icon" viewBox="0 0 448 512"><path d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z" />
			</svg>';
			break;
		case 'icon-box':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="pb-block-icon">
			<path xmlns="http://www.w3.org/2000/svg" d="M638.3 239.8L586.8 137c-2.8-5.6-8.5-9-14.6-9-1 0 4.3-.7-56.3 7l26.2-71.8c6-16.6-2.5-35-19.1-41L467.3 1.9c-16.5-6-34.9 2.5-41 19.1l-42.8 117.7C380.7 61.7 317.7 0 240 0 164.7 0 103.7 58 97.3 131.6 67.8 127.8 69 128 67.8 128c-6.1 0-11.8 3.5-14.6 9L1.7 239.8c-4.6 9.2.3 20.2 10.1 23L64 277.7V425c0 14.7 10 27.5 24.2 31l216.2 54.1c13.6 3.4 25 1.5 31 0L551.8 456c14.2-3.6 24.2-16.4 24.2-31V277.7l52.1-14.9c9.9-2.8 14.7-13.8 10.2-23zM456.4 32L512 52.2l-31.8 87.3-66 8.4L456.4 32zM38.8 237.3l38-76 190.4 24.3-60.1 99.8-168.3-48.1zM304 477L96 425V286.9C219.3 322.1 211 320 214.3 320c5.6 0 11-2.9 14-7.9L304 186.5V477zm16-317c-95.7-12.2-154.6-19.7-191.1-24.4C133.2 77.8 181.1 32 240 32c61.8 0 112 50.2 112 112 0 4.1-.6 8.1-1.1 12.1L320 160zm224 265l-208 52V186.5L411.7 312c3 5 8.4 7.9 14 7.9 3.3 0-5.2 2.1 118.3-33.1V425zM432.9 285.3l-60.1-99.8 190.4-24.3 38 76-168.3 48.1z"/>
			</svg>';
			break;
		case 'info-box':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pb-block-icon">
			<path xmlns="http://www.w3.org/2000/svg" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"/>
			</svg>';
			break;
		case 'pb-spacer':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pb-block-icon">
			<path xmlns="http://www.w3.org/2000/svg" d="M480 32v448H32V32h448m32-32H0v512h512V0z"/>
			</svg>';
			break;
		case 'star-rating':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="pb-block-icon"><path
				d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
			/></svg>';
			break;
		case 'accordion':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="pb-block-icon">
			<path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"/>
			<path d="M0 0h16v3h-16v-3z"/>
			<path d="M0 13h16v3h-16v-3z"/>
		</svg>';
			break;
		case 'click-to-tweet':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pb-block-icon"><path
				d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
			/></svg>';
			break;
		case 'testimonial':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="pb-block-icon"><g><path
					d="M352 287.9H162.3L79.5 350a9.7 9.7 0 0 1-15.5-7.8V288a64.06 64.06 0 0 1-64-64V64A64.06 64.06 0 0 1 64 0h288a64.06 64.06 0 0 1 64 64v160a63.91 63.91 0 0 1-64 63.9z"
					opacity="0.4"
				/><path
					d="M576 224v160a64.06 64.06 0 0 1-64 64h-32v54.3a9.7 9.7 0 0 1-15.5 7.8L381.7 448H256a64.06 64.06 0 0 1-64-64v-64h160a96.15 96.15 0 0 0 96-96v-64h64a64.06 64.06 0 0 1 64 64z"
				/></g></svg>';
			break;
		case 'fun-factor':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74" class="pb-block-icon">
			<path d="m26 72a1 1 0 0 1 -1-1v-68a1 1 0 0 1 2 0v68a1 1 0 0 1 -1 1z"/><path d="m48 72a1 1 0 0 1 -1-1v-50.75a1 1 0 0 1 2 0v50.75a1 1 0 0 1 -1 1z"/><path d="m48 15.25a1 1 0 0 1 -1-1v-2.25a1 1 0 0 1 2 0v2.25a1 1 0 0 1 -1 1z"/><path d="m48 8a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z"/><path d="m71 49h-68a1 1 0 0 1 0-2h68a1 1 0 0 1 0 2z"/><path d="m71 27h-68a1 1 0 0 1 0-2h68a1 1 0 0 1 0 2z"/><path d="m14.5 20.667a6.167 6.167 0 1 1 6.167-6.167 6.175 6.175 0 0 1 -6.167 6.167zm0-10.334a4.167 4.167 0 1 0 4.167 4.167 4.173 4.173 0 0 0 -4.167-4.167z"/><path d="m14.5 42.167a6.167 6.167 0 1 1 6.167-6.167 6.175 6.175 0 0 1 -6.167 6.167zm0-10.334a4.167 4.167 0 1 0 4.167 4.167 4.173 4.173 0 0 0 -4.167-4.167z"/><path d="m37 66.167a6.167 6.167 0 1 1 6.167-6.167 6.175 6.175 0 0 1 -6.167 6.167zm0-10.334a4.167 4.167 0 1 0 4.167 4.167 4.173 4.173 0 0 0 -4.167-4.167z"/><path d="m41.688 42.688a1 1 0 0 1 -.708-.293l-9.375-9.375a1 1 0 1 1 1.415-1.415l9.38 9.375a1 1 0 0 1 -.707 1.708z"/><path d="m32.312 42.688a1 1 0 0 1 -.707-1.708l9.375-9.375a1 1 0 1 1 1.42 1.415l-9.38 9.38a1 1 0 0 1 -.708.288z"/><path d="m64.688 19.688a1 1 0 0 1 -.708-.293l-9.375-9.375a1 1 0 0 1 1.415-1.415l9.38 9.375a1 1 0 0 1 -.707 1.708z"/><path d="m55.312 19.688a1 1 0 0 1 -.707-1.708l9.375-9.375a1 1 0 1 1 1.42 1.415l-9.38 9.38a1 1 0 0 1 -.708.288z"/></svg>';
			break;
		case 'counter':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="pb-block-icon">
			<g xmlns="http://www.w3.org/2000/svg" ><path d="M224 96C109.12 96 16 189.12 16 304s93.12 208 208 208 208-93.12 208-208S338.88 96 224 96zm32 240a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V208.5a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16z" opacity="0.4"/><path d="M240 192.5h-32a16 16 0 0 0-16 16V336a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V208.5a16 16 0 0 0-16-16zm188.53-48.57l-28.3-28.3a12 12 0 0 0-17 0l-27.45 27.45a209.14 209.14 0 0 1 42.8 47.8l.55-.55 29.4-29.4a12 12 0 0 0 0-17zM280 0H168a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h24v34.45a210 210 0 0 1 64 0V64h24a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16z"/></g></svg>';
			break;
		case 'block-wrapper':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pb-block-icon" style="border: 1px solid #f30d55; padding: 1px; border-radius: 5px;">
			<path xmlns="http://www.w3.org/2000/svg" d="M0 32v448H32V32h448m32-32H0v512h512V0z"/>
			</svg>';
			break;
		case 'animated-headlines':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pb-block-icon"><g><g><path d="M450.783,207.165v14.042c-15.256-12.252-34.607-19.607-55.652-19.607c-49.099,0-89.043,39.945-89.043,89.043    s39.945,89.043,89.043,89.043c21.045,0,40.396-7.355,55.652-19.607v14.042h33.391V207.165H450.783z M395.13,346.295    c-30.687,0-55.652-24.966-55.652-55.652c0-30.688,24.966-55.652,55.652-55.652s55.652,24.966,55.652,55.652    C450.783,321.33,425.817,346.295,395.13,346.295z"/></g></g><g><g><rect y="413.074" width="512" height="33.391"/></g></g><g><g><path d="M166.957,65.534L31.18,374.121h36.479l46.526-105.739h105.543l46.526,105.739h36.479L166.957,65.534z M128.877,234.991    l38.079-86.545l38.079,86.545H128.877z"/></g></g>
			</svg>';
			break;
		case 'tabs':
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="pb-block-icon">
			<path xmlns="http://www.w3.org/2000/svg" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"/></svg>';
			break;
		case 'content-toggle':
			$icon = '<svg class="pb-block-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 576 512"><path xmlns="http://www.w3.org/2000/svg" d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"/></svg>';
			break;
		default:
			$icon = '';
			break;
	}
	return $icon;

}
/**
 * Check if Pro Version Installed
 */
function udpb_has_pro() {
	return defined( 'POWERFUL_BLOCKS_PRO_VERSION' );
}
/**
 * Classnames php
 *
 * @author Chris Stroud
 * @link https://github.com/cstro/classnames-php
 */
if ( !function_exists( 'classNames' ) ) {
	function classNames() {
		$args = func_get_args();

		$data = array_reduce($args, function ($carry, $arg) {
			if (is_array($arg)) {
				return array_merge($carry, $arg);
			}

			$carry[] = $arg;
			return $carry;
		}, []);

		$classes = array_map(function ($key, $value) {
			$condition = $value;
			$return = $key;

			if (is_int($key)) {
				$condition = null;
				$return = $value;
			}

			$isArray = is_array($return);
			$isObject = is_object($return);
			$isStringableType = !$isArray && !$isObject;

			$isStringableObject = $isObject && method_exists($return, '__toString');

			if (!$isStringableType && !$isStringableObject) {
				return null;
			}

			if ($condition === null) {
				return $return;
			}

			return $condition ? $return : null;

		}, array_keys($data), array_values($data));

		$classes = array_filter($classes);

		return implode(' ', $classes);
	}
}