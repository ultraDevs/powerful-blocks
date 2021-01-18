import { cloneElement, render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready'

export const colorizeIcon = SvgIcon => {
	return cloneElement( SvgIcon, {
		fill: 'url(#powerfulblocks-gradient)',
		className: `pb-icon-gradient ${ SvgIcon.props.className || '' }`,
	} )
}
domReady( () => {
	const powerfulBlocksGradient = document.createElement('div');
	document.querySelector('body').appendChild( powerfulBlocksGradient );
	render(
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="pb-icon-gradient"
			height="0"
			width="0"
			style={ { opacity: 0 } }
		>
			<defs>
				<linearGradient id="powerfulblocks-gradient">
                    <stop offset="20%" stop-color="#5820e5" stop-opacity="1"></stop>
					<stop offset="90%" stop-color=" #f30d55" stop-opacity="1"></stop>
				</linearGradient>
			</defs>
		</svg>,
		powerfulBlocksGradient
	);
} );