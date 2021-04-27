import { registerBlockType } from '@wordpress/blocks';

import './controls/index';
import './js/editor';
import './helper/icons';
import './templates/index';


import * as testimonial from './blocks/testimonial';
import * as alertBox from './blocks/alert-box';
import * as starRating from './blocks/star-rating';
import * as clickToTweet from './blocks/click-to-tweet';
import * as infoBox from './blocks/info-box';
import * as iconBox from './blocks/icon-box';
import * as pbSpacer from './blocks/spacer';
import * as accordion from './blocks/accordion';
import * as funFactor from './blocks/fun-factor';
import * as counter from './blocks/counter';
import * as blockWrapper from './blocks/block-wrapper';
import * as animatedHeadlines from './blocks/animated-headlines';
import * as tab from './blocks/tabs/tab';
import * as tabs from './blocks/tabs';
import * as templates from './blocks/templates';
import * as defaultBlock from './blocks/default';
import * as toggler from './blocks/content-toggle/toggler';
import * as contentToggle from './blocks/content-toggle';


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
		testimonial,
		infoBox,
		iconBox,
		pbSpacer,
		accordion,
		funFactor,
		counter,
		blockWrapper,
		animatedHeadlines,
		tab,
		tabs,
		templates,
		defaultBlock,
		// advancedTypography,
		toggler,
		contentToggle,
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