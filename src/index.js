import { registerBlockType } from '@wordpress/blocks';

import './js/editor';

import * as testimonial from './blocks/testimonial';
import * as alertBox from './blocks/alert-box';
import * as starRating from './blocks/star-rating';
import * as clickToTweet from './blocks/click-to-tweet';


const category = 'powerful-blocks';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;

    registerBlockType( name, {
        category: category,
        ...settings,
    } );

	
};

/**
 * Function to register blocks.
 */
const registerPowerfulBlocks = () => {
	[
		alertBox,
		clickToTweet,
		starRating,
		testimonial

	].forEach( registerBlock );
};

registerPowerfulBlocks();

let inactive_blocks = UDPB.inactive_blocks;

if ( undefined !== inactive_blocks && inactive_blocks.length ) {
	if ( typeof wp.blocks.unregisterBlockType !== "undefined" ) {
		const category = 'powerful-blocks';

		const inactiveBlock = ( block ) => {
			if ( ! block ) {
				return;
			}
			wp.blocks.unregisterBlockType( category +'/'+block );

		}
		const saveInactiveBlocks = () => {
			inactive_blocks.forEach( inactiveBlock );
		};
		
		saveInactiveBlocks();
		
	}
}