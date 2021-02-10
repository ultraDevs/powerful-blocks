const {
	PanelBody,
    SelectControl,
    TextControl,
    __experimentalNumberControl,
	ToggleControl,
	RangeControl,
	Dropdown,
    Button,
    BaseControl,
    ButtonGroup,
    TabPanel,
    Dashicon,
    TreeSelect,
} = wp.components;
const { __ } = wp.i18n;
const { MediaUpload } = wp.blockEditor;

const { useState } = wp.element;
import classnames from 'classnames';

import { pType, UpgradePlanNotice } from './lic';


import { 
    ColorPickerControl,
    ShadowControl,
    ResponsiveRangeControl,
    ResponsiveBoxControl,
    GradientControl,
    BorderControl
} from '../components';

const Advanced = ( props ) => {

    const { attributes, setAttributes } = props;

    const {
        backgroundType,
        hoverBackgroundType,

		backgroundColor,
        hoverBackgroundColor,

        backgroundImg,
        backgroundImgPosition,
        backgroundImgSize,
        backgroundImgRepeat,
        backgroundImgAttachment,
        backgroundImgOverlayColor,
        backgroundOpacity,

        hoverBackgroundImg,
        hoverBackgroundImgPosition,
        hoverBackgroundImgSize,
        hoverBackgroundImgRepeat,
        hoverBackgroundImgAttachment,
        hoverBackgroundImgOverlayColor,
        hoverBackgroundOpacity,

        gradientValue,

        hoverGradientValue,
        
        padding,
        paddingTablet,
        paddingMobile,
        margin,
        marginTablet,
        marginMobile,

        shadowColor,
        shadowHOffset,
        shadowVOffset,
        shadowBlur,
        shadowSpread,
        shadowType,

        hoverShadowColor,
        hoverShadowHOffset,
        hoverShadowVOffset,
        hoverShadowBlur,
        hoverShadowSpread,
        hoverShadowType,

        borderStyle,
        borderSize,
        borderColor,
        hoverBorderStyle,
        hoverBorderSize,
        hoverBorderColor,
        borderRadius,
        borderRadiusTablet,
        borderRadiusMobile,

        inAnimation,
        outAnimation,
        inAnimationDuration,
        outAnimationDuration,
        inAnimationDurationCustom,
        outAnimationDurationCustom,

        animationDelay,
        animationEasing,
        animationEasingCustom,

        blockHeightType,
        blockHeight,
        blockHeightMobile,
        blockHeightTablet,

        CSSTransform,

        blockWidth,
        blockCustomWidthType,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,
        customClass,
        customID,
        customAttributes,

        enableCondition,

        addWLink,
        wrapperLink,
        wrapperLinkNewTab,
        wrapperLinkNofollow,
        
    } = attributes;
    
    
    let currentbgTab = backgroundType || 'color';
    const [ bgTab, setbgTab ] = useState( currentbgTab );

    let currentHbgTab = hoverBackgroundType || 'color';
    const [ hbgTab, sethbgTab ] = useState( currentHbgTab );

    const ANIMATIONS_IN = [
        {
            name: 'Back',
            id: 'back',
            children: [
                { name: 'Back In Down', id: 'backInDown' },
                { name: 'Back In Left', id: 'backInLeft' },
                { name: 'Back In Right', id: 'backInRight' },
                { name: 'Back In Up', id: 'backInUp' },
            ],
        },
        {
            name: 'Bouncing',
            id: 'bouncing',
            children: [
                { name: 'Bounce In', id: 'bounceIn' },
                { name: 'Bounce In Down', id: 'bounceInDown' },
                { name: 'Bounce In Left', id: 'bounceInLeft' },
                { name: 'Bounce In Right', id: 'bounceInRight' },
                { name: 'Bounce In Up', id: 'bounceInUp' },
            ],
        },
        {
            name: 'Fading',
            id: 'fading',
            children: [
                { name: 'Fade In', id: 'fadeIn' },
                { name: 'Fade In Down', id: 'fadeInDown' },
                { name: 'Fade In Down Big', id: 'fadeInDownBig' },
                { name: 'Fade In Left', id: 'fadeInDownBig' },
                { name: 'Fade In Left Big', id: 'fadeInLeftBig' },
                { name: 'Fade In Right', id: 'fadeInRight' },
                { name: 'Fade In Right Big', id: 'fadeInRightBig' },
                { name: 'Fade In Up', id: 'fadeInUp' },
                { name: 'Fade In Up Big', id: 'fadeInUpBig' },
    
                { name: 'Fade In Top Left', id: 'fadeInTopLeft' },
                { name: 'Fade In Top Right', id: 'fadeInTopRight' },
    
                { name: 'Fade In Bottom Left', id: 'fadeInBottomLeft' },
                { name: 'Fade In Bottom Right', id: 'fadeInBottomRight' },
            ],
        },
        {
            name: 'Flippers',
            id: 'flippers',
            children: [
                { name: 'Flip', id: 'flip' },
                { name: 'Flip In X', id: 'flipInX' },
                { name: 'Flip In Y', id: 'flipInY' },
            ],
        },
        {
            name: 'Lightspeed',
            id: 'lightspeed',
            children: [
                { name: 'Light Speed In Right', id: 'lightSpeedInRight' },
                { name: 'Light Speed In Left', id: 'lightSpeedInLeft' },
            ],
        },
        {
            name: 'Rotating',
            id: 'rotating',
            children: [
                { name: 'Rotate In', id: 'rotateIn' },
                { name: 'Rotate In Down Left', id: 'rotateInDownLeft' },
                { name: 'Rotate In Down Right', id: 'rotateInDownRight' },
                { name: 'Rotate In Up Left', id: 'rotateInUpLeft' },
                { name: 'Rotate In Up Right', id: 'rotateInUpRight' },
            ],
        },
    
        {
            name: 'Specials',
            id: 'specials',
            children: [
                { name: 'Hinge', id: 'hinge' },
                { name: 'Jack In The Box', id: 'jackInTheBox' },
                { name: 'Roll In', id: 'rollIn' },
            ],
        },
    
        {
            name: 'Zooming',
            id: 'zooming',
            children: [
                { name: 'Zoom In', id: 'zoomIn' },
                { name: 'Zoom In Down', id: 'zoomInDown' },
                { name: 'Zoom In Left', id: 'zoomInLeft' },
                { name: 'Zoom In Right', id: 'zoomInRight' },
                { name: 'Zoom In Up', id: 'zoomInUp' },
            ],
        },
        {
            name: 'Sliding',
            id: 'sliding',
            children: [
                { name: 'Slide In Down', id: 'slideInDown' },
                { name: 'Slide In Left', id: 'slideInLeft' },
                { name: 'Slide In Right', id: 'slideInRight' },
                { name: 'Slide In Up', id: 'slideInUp' },
            ],
        },
    ];

    const ANIMATIONS_OUT = [
        {
            name: 'Back',
            id: 'back',
            children: [
                { name: 'Back Out Down', id: 'backOutDown' },
                { name: 'Back Out Left', id: 'backOutLeft' },
                { name: 'Back Out Right', id: 'backOutRight' },
                { name: 'Back Out Up', id: 'backOutUp' },
            ],
        },
        {
            name: 'Bouncing',
            id: 'bouncing',
            children: [
                { name: 'Bounce Out', id: 'bounceOut' },
                { name: 'Bounce Out Down', id: 'bounceOutDown' },
                { name: 'Bounce Out Left', id: 'bounceOutLeft' },
                { name: 'Bounce Out Right', id: 'bounceOutRight' },
                { name: 'Bounce Out Up', id: 'bounceOutUp' },
            ],
        },
        {
            name: 'Fading',
            id: 'fading',
            children: [
                { name: 'Fade Out', id: 'fadeOut' },
                { name: 'Fade Out Down', id: 'fadeOutDown' },
                { name: 'Fade Out Down Big', id: 'fadeOutDownBig' },
                { name: 'Fade Out Left', id: 'fadeOutDownBig' },
                { name: 'Fade Out Left Big', id: 'fadeOutLeftBig' },
                { name: 'Fade Out Right', id: 'fadeOutRight' },
                { name: 'Fade Out Right Big', id: 'fadeOutRightBig' },
                { name: 'Fade Out Up', id: 'fadeOutUp' },
                { name: 'Fade Out Up Big', id: 'fadeOutUpBig' },
    
                { name: 'Fade Out Top Left', id: 'fadeOutTopLeft' },
                { name: 'Fade Out Top Right', id: 'fadeOutTopRight' },
    
                { name: 'Fade Out Bottom Left', id: 'fadeOutBottomLeft' },
                { name: 'Fade Out Bottom Right', id: 'fadeOutBottomRight' },
            ],
        },
        {
            name: 'Flippers',
            id: 'flippers',
            children: [
                { name: 'Flip', id: 'flip' },
                { name: 'Flip Out X', id: 'flipOutX' },
                { name: 'Flip Out Y', id: 'flipOutY' },
            ],
        },
        {
            name: 'Lightspeed',
            id: 'lightspeed',
            children: [
                { name: 'Light Speed Out Right', id: 'lightSpeedOutRight' },
                { name: 'Light Speed Out Left', id: 'lightSpeedOutLeft' },
            ],
        },
        {
            name: 'Rotating',
            id: 'rotating',
            children: [
                { name: 'Rotate Out', id: 'rotateOut' },
                { name: 'Rotate Out Down Left', id: 'rotateOutDownLeft' },
                { name: 'Rotate Out Down Right', id: 'rotateOutDownRight' },
                { name: 'Rotate Out Up Left', id: 'rotateOutUpLeft' },
                { name: 'Rotate Out Up Right', id: 'rotateOutUpRight' },
            ],
        },
    
        {
            name: 'Specials',
            id: 'specials',
            children: [
                { name: 'Hinge', id: 'hinge' },
                { name: 'Jack Out The Box', id: 'jackOutTheBox' },
                { name: 'Roll Out', id: 'rollOut' },
            ],
        },
    
        {
            name: 'Zooming',
            id: 'zooming',
            children: [
                { name: 'Zoom Out', id: 'zoomOut' },
                { name: 'Zoom Out Down', id: 'zoomOutDown' },
                { name: 'Zoom Out Left', id: 'zoomOutLeft' },
                { name: 'Zoom Out Right', id: 'zoomOutRight' },
                { name: 'Zoom Out Up', id: 'zoomOutUp' },
            ],
        },
        {
            name: 'Sliding',
            id: 'sliding',
            children: [
                { name: 'Slide Out Down', id: 'slideOutDown' },
                { name: 'Slide Out Left', id: 'slideOutLeft' },
                { name: 'Slide Out Right', id: 'slideOutRight' },
                { name: 'Slide Out Up', id: 'slideOutUp' },
            ],
        },
    ];

    return (
        <>
            <PanelBody title={ __( 'Background', 'powerful-blocks' ) }>
                <TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
					tabs={ [
						{
							name: "normal",
							title: __( 'Normal', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
						{
							name: "hover",
							title: __( 'Hover', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
					] }>
					{
						( tab ) => {
							let tabout;

							if ( "normal" === tab.name ) {
								tabout = (
									<>
                                        <div className="pb-panel-s--tabs">
                                            <div className="pb-panel-s--tabs__wrapper">
                                                <div className="pb-panel-s--tab__title">Background Type</div>
                                                <ButtonGroup>
                                                    <Button
                                                        onClick = { () => {
                                                            setbgTab('color');
                                                            setAttributes({ backgroundType: 'color' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'color' === bgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <Dashicon icon='admin-customizer' />
                                                    </Button>
                                                    <Button
                                                        onClick = { () => {
                                                            setbgTab('gradient');
                                                            setAttributes({ backgroundType: 'gradient' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'gradient' === bgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <svg class="dashicons" viewBox="0 0 18 15"><rect fill="#ddd" x=".5" y=".5" width="16.072" height="13.474" rx="1"></rect><path fill="#333" d="M.836.763l15.759 13.158h-15.759z"></path></svg>
                                                    </Button>
                                                    <Button
                                                        onClick = { () => {
                                                            setbgTab('image');
                                                            setAttributes({ backgroundType: 'image' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'image' === bgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <Dashicon icon='format-image' />
                                                    </Button>
                                                </ButtonGroup>
                                            </div>
                                            <div className="pb-panel-s--tabs__controls">
                                                { 'color' === bgTab && (
                                                <>
                                                    <ColorPickerControl
                                                        label={ __( 'Background Color', 'powerful-blocks' ) }
                                                        value={ backgroundColor }
                                                        onChange={ ( backgroundColor ) => {
                                                            setAttributes( { backgroundColor } );
                                                        } }
                                                    />
                                                </>
                                                ) }
                                                { 'gradient' === bgTab && (
                                                <>
                                                    <GradientControl
                                                        gradientValue = { gradientValue }
                                                        onChange={ ( gradientValue ) => {
                                                            setAttributes( { gradientValue: gradientValue.value } );
                                                        } }
                                                    />
                                                </>
                                                ) }
                                                { 'image' === bgTab && (
                                                <>
                                                    <BaseControl
                                                        className="pb-editor-bg-image-control"
                                                        label={ __( 'Background Image', 'powerful-blocks' ) }>
                                                        <MediaUpload
                                                            title={ __( 'Select Background Image', 'powerful-blocks' ) }
                                                            onSelect={ ( image ) => {
                                                                setAttributes( { backgroundImg: image.url } );
                                                            } }
                                                            allowedTypes={ [ "image" ] }
                                                            value={ backgroundImg }
                                                            render={ ( { open } ) => (
                                                                <Button isDefault onClick={ open }>
                                                                    { ! backgroundImg ? __( 'Select Image', 'powerful-blocks' ) : <Dashicon icon="edit" /> }
                                                                </Button>
                                                            ) }
                                                        />
                                                        { backgroundImg && ( 
                                                            <Button 
                                                                className="pb-editor-bg-image-control--remove" 
                                                                onClick={ (  ) => {
                                                                    setAttributes( { backgroundImg: null } );
                                                                } }
                                                                isLink 
                                                                isDestructive
                                                            >
                                                                <Dashicon icon="trash" />
                                                            </Button> )
                                                        }
                                                    </BaseControl>
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Image Position', 'powerful-blocks' ) }
                                                        value={ backgroundImgPosition }
                                                        onChange={ ( backgroundImgPosition ) => {
                                                            setAttributes( { backgroundImgPosition } ) }
                                                        }
                                                        options={ [
                                                            { value: "top left", label: __( "Top Left" ) },
                                                            { value: "top center", label: __( "Top Center" ) },
                                                            { value: "top right", label: __( "Top Right" ) },
                                                            { value: "center left", label: __( "Center Left" ) },
                                                            { value: "center center", label: __( "Center Center" ) },
                                                            { value: "center right", label: __( "Center Right" ) },
                                                            { value: "bottom left", label: __( "Bottom Left" ) },
                                                            { value: "bottom center", label: __( "Bottom Center" ) },
                                                            { value: "bottom right", label: __( "Bottom Right" ) },
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Attachment', 'powerful-blocks' ) }
                                                        value={ backgroundImgAttachment }
                                                        onChange={ ( backgroundImgAttachment ) => {
                                                            setAttributes( { backgroundImgAttachment } ) }
                                                        }
                                                        options={ [
                                                            { value: "fixed", label: __( "Fixed" ) },
                                                            { value: "scroll", label: __( "Scroll" ) }
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Repeat', 'powerful-blocks' ) }
                                                        value={ backgroundImgRepeat }
                                                        onChange={ ( backgroundImgRepeat ) => {
                                                            setAttributes( { backgroundImgRepeat } ) }
                                                        }
                                                        options={ [
                                                            { value: "no-repeat", label: __( "No Repeat" ) },
                                                            { value: "repeat", label: __( "Repeat" ) },
                                                            { value: "repeat-x", label: __( "Repeat-x" ) },
                                                            { value: "repeat-y", label: __( "Repeat-y" ) }
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Size', 'powerful-blocks' ) }
                                                        value={ backgroundImgSize }
                                                        onChange={ ( backgroundImgSize ) => {
                                                            setAttributes( { backgroundImgSize } ) }
                                                        }
                                                        options={ [
                                                            { value: "auto", label: __( "Auto" ) },
                                                            { value: "cover", label: __( "Cover" ) },
                                                            { value: "contain", label: __( "Contain" ) }
                                                        ] }
                                                    />
                                                    <ColorPickerControl
                                                        label={ __( 'Opacity Color', 'powerful-blocks' ) }
                                                        value={ backgroundImgOverlayColor }
                                                        onChange={ ( backgroundImgOverlayColor ) => {
                                                            setAttributes( { backgroundImgOverlayColor } );
                                                        } }
                                                    />
                                                    <RangeControl
                                                        label={ __(
                                                            'Opacity',
                                                            'powerful-blocks'
                                                        ) }
                                                        value={ backgroundOpacity }
                                                        onChange={ ( backgroundOpacity ) =>
                                                            setAttributes( { backgroundOpacity } )
                                                        }
                                                        min={ 0 }
                                                        step={ 1 }
                                                        max={ 100 }
                                                    />
                                                </>
                                                ) }
                                            </div>
                                        </div>
                                    </>
								)
							} else if ( "hover" === tab.name ) {
								tabout = (
									<>
                                    <div className="pb-panel-s--tabs">
                                            <div className="pb-panel-s--tabs__wrapper">
                                                <div className="pb-panel-s--tab__title">Background Type</div>
                                                <ButtonGroup>
                                                    <Button
                                                        onClick = { () => {
                                                            sethbgTab('color');
                                                            setAttributes({ hoverBackgroundType: 'color' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'color' === hbgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <Dashicon icon='admin-customizer' />
                                                    </Button>
                                                    <Button
                                                        onClick = { () => {
                                                            sethbgTab('gradient');
                                                            setAttributes({ hoverBackgroundType: 'gradient' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'gradient' === hbgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <svg class="dashicons" viewBox="0 0 18 15"><rect fill="#ddd" x=".5" y=".5" width="16.072" height="13.474" rx="1"></rect><path fill="#333" d="M.836.763l15.759 13.158h-15.759z"></path></svg>
                                                    </Button>
                                                    <Button
                                                        onClick = { () => {
                                                            sethbgTab('image');
                                                            setAttributes({ hoverBackgroundType: 'image' })
                                                        }}
                                                        className = {
                                                            classnames(
                                                                "pb-panel-s--tab",
                                                                'image' === hbgTab ? 'pb-ps-tab--active' : '',
                                                            )
                                                        }
                                                    >
                                                        <Dashicon icon='format-image' />
                                                    </Button>
                                                </ButtonGroup>
                                            </div>
                                            <div className="pb-panel-s--tabs__controls">
                                                { 'color' === hbgTab && (
                                                <>
                                                    <ColorPickerControl
                                                        label={ __( 'Background Color', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundColor }
                                                        onChange={ ( hoverBackgroundColor ) => {
                                                            setAttributes( { hoverBackgroundColor } );
                                                        } }
                                                    />
                                                </>
                                                ) }
                                                { 'gradient' === hbgTab && (
                                                <>
                                                    <GradientControl
                                                        gradientValue = { hoverGradientValue }
                                                        onChange={ ( hoverGradientValue ) => {
                                                            setAttributes( { hoverGradientValue: hoverGradientValue.value } );
                                                        } }
                                                    />
                                                </>
                                                ) }
                                                { 'image' === hbgTab && (
                                                <>
                                                <BaseControl
                                                        className="pb-editor-bg-image-control"
                                                        label={ __( 'Background Image', 'powerful-blocks' ) }>
                                                        <MediaUpload
                                                            title={ __( 'Select Background Image', 'powerful-blocks' ) }
                                                            onSelect={ ( image ) => {
                                                                setAttributes( { hoverBackgroundImg: image.url } );
                                                            } }
                                                            allowedTypes={ [ "image" ] }
                                                            value={ hoverBackgroundImg }
                                                            render={ ( { open } ) => (
                                                                <Button isDefault onClick={ open }>
                                                                    { ! hoverBackgroundImg ? __( 'Select Image', 'powerful-blocks' ) : <Dashicon icon="edit" /> }
                                                                </Button>
                                                            ) }
                                                        />
                                                        { hoverBackgroundImg && ( 
                                                            <Button 
                                                                className="pb-editor-bg-image-control--remove" 
                                                                onClick={ (  ) => {
                                                                    setAttributes( { hoverBackgroundImg: null } );
                                                                } }
                                                                isLink 
                                                                isDestructive
                                                            >
                                                                <Dashicon icon="trash" />
                                                            </Button> )
                                                        }
                                                    </BaseControl>
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Image Position', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundImgPosition }
                                                        onChange={ ( hoverBackgroundImgPosition ) => {
                                                            setAttributes( { hoverBackgroundImgPosition } ) }
                                                        }
                                                        options={ [
                                                            { value: "top left", label: __( "Top Left" ) },
                                                            { value: "top center", label: __( "Top Center" ) },
                                                            { value: "top right", label: __( "Top Right" ) },
                                                            { value: "center left", label: __( "Center Left" ) },
                                                            { value: "center center", label: __( "Center Center" ) },
                                                            { value: "center right", label: __( "Center Right" ) },
                                                            { value: "bottom left", label: __( "Bottom Left" ) },
                                                            { value: "bottom center", label: __( "Bottom Center" ) },
                                                            { value: "bottom right", label: __( "Bottom Right" ) },
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Attachment', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundImgAttachment }
                                                        onChange={ ( hoverBackgroundImgAttachment ) => {
                                                            setAttributes( { hoverBackgroundImgAttachment } ) }
                                                        }
                                                        options={ [
                                                            { value: "fixed", label: __( "Fixed" ) },
                                                            { value: "scroll", label: __( "Scroll" ) }
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Repeat', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundImgRepeat }
                                                        onChange={ ( hoverBackgroundImgRepeat ) => {
                                                            setAttributes( { hoverBackgroundImgRepeat } ) }
                                                        }
                                                        options={ [
                                                            { value: "no-repeat", label: __( "No Repeat" ) },
                                                            { value: "repeat", label: __( "Repeat" ) },
                                                            { value: "repeat-x", label: __( "Repeat-x" ) },
                                                            { value: "repeat-y", label: __( "Repeat-y" ) }
                                                        ] }
                                                    />
                                                    <SelectControl
                                                        className = "pb-custom-select-control"
                                                        label={ __( 'Size', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundImgSize }
                                                        onChange={ ( hoverBackgroundImgSize ) => {
                                                            setAttributes( { hoverBackgroundImgSize } ) }
                                                        }
                                                        options={ [
                                                            { value: "auto", label: __( "Auto" ) },
                                                            { value: "cover", label: __( "Cover" ) },
                                                            { value: "contain", label: __( "Contain" ) }
                                                        ] }
                                                    />
                                                    <ColorPickerControl
                                                        label={ __( 'Opacity Color', 'powerful-blocks' ) }
                                                        value={ hoverBackgroundImgOverlayColor }
                                                        onChange={ ( hoverBackgroundImgOverlayColor ) => {
                                                            setAttributes( { hoverBackgroundImgOverlayColor } );
                                                        } }
                                                    />
                                                    <RangeControl
                                                        label={ __(
                                                            'Opacity',
                                                            'powerful-blocks'
                                                        ) }
                                                        value={ hoverBackgroundOpacity }
                                                        onChange={ ( hoverBackgroundOpacity ) =>
                                                            setAttributes( { hoverBackgroundOpacity } )
                                                        }
                                                        min={ 0 }
                                                        step={ 1 }
                                                        max={ 100 }
                                                    />
                                                </>
                                                ) }
                                            </div>
                                        </div>
                                    </>
								)
							} else {
								tabout = (
									<>
                                        <p>...</p>
                                    </>
								)
							}

							return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
						}
					}
				</TabPanel>
                
            </PanelBody>
            <PanelBody title={ __( 'Spacing', 'powerful-blocks' ) } initialOpen={ false }>
                <ResponsiveBoxControl
                    label={ __( 'Padding', 'powerful-blocks' ) }
                    value={ {
                        desktop: padding,
                        tablet: paddingTablet,
                        mobile: paddingMobile,
                    } }
                    onChange={ ( value, device ) => {
                        if ( 'desktop' === device ) {
                            setAttributes( { padding: value } );
                        }
                        if ( 'tablet' === device ) {
                            setAttributes( { paddingTablet: value } );
                        }
                        if ( 'mobile' === device ) {
                            setAttributes( { paddingMobile: value } );
                        }
                    } }
                />
                <ResponsiveBoxControl
                    label={ __( 'Margin', 'powerful-blocks' ) }
                    value={ {
                        desktop: margin,
                        tablet: marginTablet,
                        mobile: marginMobile,
                    } }
                    onChange={ ( value, device ) => {
                        if ( 'desktop' === device ) {
                            setAttributes( { margin: value } );
                        }
                        if ( 'tablet' === device ) {
                            setAttributes( { marginTablet: value } );
                        }
                        if ( 'mobile' === device ) {
                            setAttributes( { marginMobile: value } );
                        }
                    } }
                />
            </PanelBody>

            <PanelBody title={ __( 'Border', 'powerful-blocks' ) } initialOpen={ false }>
                <TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
					tabs={ [
						{
							name: "normal",
							title: __( 'Normal', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
						{
							name: "hover",
							title: __( 'Hover', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
					] }>
					{
						( tab ) => {
							let tabout;

							if ( "normal" === tab.name ) {
								tabout = (
									<>
                                        <BorderControl
                                            label = ''
                                            borderStyle = { { value: borderStyle, name: 'borderStyle' } }
                                            borderSize = { { value: borderSize, name: 'borderSize' } }
                                            borderColor = { { value: borderColor, name: 'borderColor' } }
                                            setAttributes = { setAttributes }
                                        />
                                    </>
								)
							} else if ( "hover" === tab.name ) {
								tabout = (
									<>
                                        <BorderControl
                                            label = ''
                                            borderStyle = { { value: hoverBorderStyle, name: 'hoverBorderStyle' } }
                                            borderSize = { { value: hoverBorderSize, name: 'hoverBorderSize' } }
                                            borderColor = { { value: hoverBorderColor, name: 'hoverBorderColor' } }
                                            setAttributes = { setAttributes }
                                        />
                                    </>
								)
							} else {
								tabout = (
									<>
                                        <p>...</p>
                                    </>
								)
							}

							return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
						}
					}
				</TabPanel>
                
                <hr className="pb-hr" />
                <ResponsiveBoxControl
                    label={ __( 'Border Radius', 'powerful-blocks' ) }
                    value={ {
                        desktop: borderRadius,
                        tablet: borderRadiusTablet,
                        mobile: borderRadiusMobile,
                    } }
                    onChange={ ( value, device ) => {
                        if ( 'desktop' === device ) {
                            setAttributes( { borderRadius: value } );
                        }
                        if ( 'tablet' === device ) {
                            setAttributes( { borderRadiusTablet: value } );
                        }
                        if ( 'mobile' === device ) {
                            setAttributes( { borderRadiusMobile: value } );
                        }
                    } }
                />
                <hr className="pb-hr" />
                <TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
					tabs={ [
						{
							name: "normal",
							title: __( 'Normal', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
						{
							name: "hover",
							title: __( 'Hover', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
					] }>
					{
						( tab ) => {
							let tabout;

							if ( "normal" === tab.name ) {
								tabout = (
									<>
                                        <ShadowControl 
                                            label = { __( 'Box Shadow', 'powerful-blocks' ) }
                                            shadowColor = { { value: shadowColor, name: 'shadowColor' } }
                                            shadowHOffset = { { value: shadowHOffset, name: 'shadowHOffset' } }
                                            shadowVOffset = { { value: shadowVOffset, name: 'shadowVOffset' } }
                                            shadowBlur = { { value: shadowBlur, name: 'shadowBlur' } }
                                            shadowSpread = { { value: shadowSpread, name: 'shadowSpread' } }
                                            shadowType = { { value: shadowType, name: 'shadowType' } }
                                            setAttributes = { setAttributes }
                                        />
                                    </>
								)
							} else if ( "hover" === tab.name ) {
								tabout = (
									<>
                                        <ShadowControl 
                                            label = { __( 'Box Shadow', 'powerful-blocks' ) }
                                            shadowColor = { { value: hoverShadowColor, name: 'hoverShadowColor' } }
                                            shadowHOffset = { { value: hoverShadowHOffset, name: 'hoverShadowHOffset' } }
                                            shadowVOffset = { { value: hoverShadowVOffset, name: 'hoverShadowVOffset' } }
                                            shadowBlur = { { value: hoverShadowBlur, name: 'hoverShadowBlur' } }
                                            shadowSpread = { { value: hoverShadowSpread, name: 'hoverShadowSpread' } }
                                            shadowType = { { value: hoverShadowType, name: 'hoverShadowType' } }
                                            setAttributes = { setAttributes }
                                        />
                                    </>
								)
							} else {
								tabout = (
									<>
                                        <p>...</p>
                                    </>
								)
							}

							return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
						}
					}
				</TabPanel>
                
                
            </PanelBody>

            <PanelBody title={ __( 'Animation', 'powerful-blocks' ) } initialOpen={ false }>
                <TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
					tabs={ [
						{
							name: "in",
							title: __( 'In', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
						{
							name: "out",
							title: __( 'Out', 'powerful-blocks' ),
							className: "pb-panel-inspect--tab",
						},
					] }>
					{
						( tab ) => {
							let tabout;

							if ( "in" === tab.name ) {
								tabout = (
									<>
                                        <TreeSelect
                                            label={ __( 'Animation', 'powerful-blocks' ) }
                                            noOptionLabel={ __( 'No Animation', 'powerful-blocks' ) }
                                            onChange={ ( inAnimation ) => {
                                                setAttributes( { inAnimation } ) }
                                            }
                                            selectedId={ inAnimation }
                                            tree={ ANIMATIONS_IN }
                                        />

                                        <SelectControl
                                            className = "pb-custom-select-control"
                                            label={ __( 'Duration', 'powerful-blocks' ) }
                                            value={ inAnimationDuration }
                                            onChange={ ( inAnimationDuration ) => {
                                                setAttributes( { inAnimationDuration } ) }
                                            }
                                            options={ [
                                                { value: 'slow', label: __( 'Slow', 'powerful-blocks' ) },
                                                { value: 'slower', label: __( 'Slower', 'powerful-blocks' ) },
                                                { value: 'normal', label: __( 'Normal', 'powerful-blocks' ) },
                                                { value: 'fast', label: __( 'Fast', 'powerful-blocks' ) },
                                                { value: 'faster', label: __( 'Faster', 'powerful-blocks' ) },
                                                { value: 'custom', label: __( 'Custom', 'powerful-blocks' ) },
                                            ] }
                                        />
                                        { 
                                            'custom' === inAnimationDuration ? (
                                                'free' === pType ? (
                                                    <UpgradePlanNotice />
                                                ) : (
                                                    <RangeControl
                                                        label={ __(
                                                            'Custom Duration (s)',
                                                            'powerful-blocks'
                                                        ) }
                                                        value={ inAnimationDurationCustom }
                                                        onChange={ ( inAnimationDurationCustom ) =>
                                                            setAttributes( { inAnimationDurationCustom } )
                                                        }
                                                        min={ 0 }
                                                        step={ .1 }
                                                        max={ 20 }
                                                    />
                                                )
                                            ) : ''
                                        }
                                        
                                    </>
								)
							} else if ( "out" === tab.name ) {
								tabout = (
									<>
                                        { 
                                            'free' === pType ? (
                                                <UpgradePlanNotice />
                                            ) : (
                                                <>
                                                <TreeSelect
                                                    label={ __( 'Animation', 'powerful-blocks' ) }
                                                    noOptionLabel={ __( 'No Animation', 'powerful-blocks' ) }
                                                    onChange={ ( outAnimation ) => {
                                                        setAttributes( { outAnimation } ) }
                                                    }
                                                    selectedId={ outAnimation }
                                                    tree={ ANIMATIONS_OUT }
                                                />
                                                <SelectControl
                                                    className = "pb-custom-select-control"
                                                    label={ __( 'Duration', 'powerful-blocks' ) }
                                                    value={ outAnimationDuration }
                                                    onChange={ ( outAnimationDuration ) => {
                                                        setAttributes( { outAnimationDuration } ) }
                                                    }
                                                    options={ [
                                                        { value: 'slow', label: __( 'Slow', 'powerful-blocks' ) },
                                                        { value: 'slower', label: __( 'Slower', 'powerful-blocks' ) },
                                                        { value: 'normal', label: __( 'Normal', 'powerful-blocks' ) },
                                                        { value: 'fast', label: __( 'Fast', 'powerful-blocks' ) },
                                                        { value: 'faster', label: __( 'Faster', 'powerful-blocks' ) },
                                                        { value: 'custom', label: __( 'Custom', 'powerful-blocks' ) },
                                                    ] }
                                                />
                                                { 
                                                    'custom' === outAnimationDuration ? (
                                                        <RangeControl
                                                            label={ __(
                                                                'Custom Duration (s)',
                                                                'powerful-blocks'
                                                            ) }
                                                            value={ outAnimationDurationCustom }
                                                            onChange={ ( outAnimationDurationCustom ) =>
                                                                setAttributes( { outAnimationDurationCustom } )
                                                            }
                                                            min={ 0 }
                                                            step={ .1 }
                                                            max={ 20 }
                                                        />
                                                    ) : ''
                                                }
                                                
                                                </>
                                            )
                                        }
                                    </>
								)
							} else {
								tabout = (
									<>
                                        <p>Else</p>
                                    </>
								)
							}
							return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
						}
					}
				</TabPanel>
                <hr className="pb-hr" />
                <RangeControl
                    label={ __(
                        'Animation Delay (s)',
                        'powerful-blocks'
                    ) }
                    value={ animationDelay }
                    onChange={ ( animationDelay ) =>
                        setAttributes( { animationDelay } )
                    }
                    min={ 0 }
                    step={ .1 }
                    max={ 6 }
                />
                <SelectControl
                    className = "pb-custom-select-control"
                    label={ __( 'Easing', 'powerful-blocks' ) }
                    value={ animationEasing }
                    onChange={ ( animationEasing ) => {
                        setAttributes( { animationEasing } ) }
                    }
                    options={ [
                        { value: '', label: __( 'Default', 'powerful-blocks' ) },
                        { value: 'linear', label: __( 'Linear', 'powerful-blocks' ) },
                        { value: 'ease', label: __( 'Ease', 'powerful-blocks' ) },
                        { value: 'ease-in', label: __( 'Ease In', 'powerful-blocks' ) },
                        { value: 'ease-out', label: __( 'Ease Out', 'powerful-blocks' ) },
                        { value: 'ease-in-out', label: __( 'Ease In Out', 'powerful-blocks' ) },
                        { value: 'custom', label: __( 'Custom', 'powerful-blocks' ) },
                    ] }
                />
                { 
                    'custom' === animationEasing ? (
                        'free' === pType ? (
                            <UpgradePlanNotice />
                        ) : (
                            <TextControl
                                label={ __(
                                    'Custom Easing',
                                    'powerful-blocks'
                                ) }
                                value={ animationEasingCustom }
                                onChange={ ( animationEasingCustom ) => {
                                    setAttributes( { animationEasingCustom } );
                                } }
                            />
                        )
                    ) : ''
                }
            </PanelBody>
            <PanelBody title={ __( 'Positioning', 'powerful-blocks' ) } initialOpen={ false }>
                <SelectControl
                    className = "pb-custom-select-control"
                    label={ __( 'Width', 'powerful-blocks' ) }
                    value={ blockWidth }
                    onChange={ ( blockWidth ) => {
                        setAttributes( { blockWidth } );
                    } }
                    options={ [
                        { value: '', label: 'Default' },
                        { value: 'inline', label: 'Inline (auto)' },
                        { value: 'custom', label: 'Custom' },
                    ] }
                />
                { ( 'custom' === blockWidth ) && (
                    <ResponsiveRangeControl
                        label={ __( 'Size', 'powerful-blocks' ) }
                        sizeType = {
                            { value: blockCustomWidthType, name: 'blockCustomWidthType' }
                        }
                        sizeOnDesktop = { { value: blockCustomWidth, name: 'blockCustomWidth' } }
                        sizeOnTablet = { { value: blockCustomWidthTablet, name: 'blockCustomWidthTablet' } }
                        sizeOnMobile = { { value: blockCustomWidthMobile, name: 'blockCustomWidthMobile' } }
                        min={ 0 }
                        max={ 2000 }
                        setAttributes = { setAttributes }
                    />
                ) }
                <ResponsiveRangeControl
                        label={ __( 'Height', 'powerful-blocks' ) }
                        sizeType = {
                            { value: blockHeightType, name: 'blockHeightType' }
                        }
                        sizeOnDesktop = { { value: blockHeight, name: 'blockHeight' } }
                        sizeOnTablet = { { value: blockHeightTablet, name: 'blockHeightTablet' } }
                        sizeOnMobile = { { value: blockHeightMobile, name: 'blockHeightMobile' } }
                        min={ 0 }
                        max={ 1000 }
                        setAttributes = { setAttributes }
                    />
                <__experimentalNumberControl
                    className = "pb-custom-number-control"
                    label = { __( 'Z-Index', 'powerful-blocks' ) }
                    shi
                    value={ blockzIndex }
                    onChange={ ( blockzIndex ) => {
                        setAttributes( { blockzIndex } );
                    } }
                />
            </PanelBody>
            <PanelBody title={ __( 'Responsive', 'powerful-blocks' ) } initialOpen={ false }>
                <ToggleControl
                    label={ __( 'Hide on Desktop', 'powerful-blocks' ) }
                    checked={ hideOnDesktop }
                    onChange={ ( hideOnDesktop ) => {
                        setAttributes( { hideOnDesktop } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Hide on Tablet', 'powerful-blocks' ) }
                    checked={ hideOnTablet }
                    onChange={ ( hideOnTablet ) => {
                        setAttributes( { hideOnTablet } );
                    } }
                />
                <ToggleControl
                    label={ __( 'Hide on Mobile', 'powerful-blocks' ) }
                    checked={ hideOnMobile }
                    onChange={ ( hideOnMobile ) => {
                        setAttributes( { hideOnMobile } );
                    } }
                />
            </PanelBody>
            <PanelBody title={ __( 'Custom', 'powerful-blocks' ) } initialOpen={ false }>
                <TextControl
                    label={ __( 'Custom Class', 'powerful-blocks' ) }
                    value={ customClass }
                    onChange={ ( customClass ) => {
                        setAttributes( { customClass } );
                    } }
                />
                <TextControl
                    label={ __( 'Custom ID', 'powerful-blocks' ) }
                    value={ customID }
                    onChange={ ( customID ) => {
                        setAttributes( { customID } );
                    } }
                />
            </PanelBody>
            <PanelBody title={ __( 'Attributes', 'powerful-blocks' ) } initialOpen={ false }>
                <p className="pb-control--helper__txt">
                    { __( 'Example: name|value, name|value', 'powerful-blocks' ) }
                    { __( 'Note: Don\'t Add class and id attribute.', 'powerful-blocks' ) }
                </p>
                { 
                    'free' === pType ? (
                        <UpgradePlanNotice />
                    ) : (
                        <TextControl
                            label={ __( 'Attributes', 'powerful-blocks' ) }
                            value={ customAttributes }
                            onChange={ ( customAttributes ) => {
                                setAttributes( { customAttributes } );
                            } }
                        />
                    )
                }
                
            </PanelBody>
            <PanelBody title={ __( 'Wrapper Link', 'powerful-blocks' ) } initialOpen={ false }>
                { 
                    'free' === pType ? (
                        <UpgradePlanNotice />
                    ) : (
                        <>
                            <ToggleControl
                                label={ __( 'Add Link?', 'powerful-blocks' ) }
                                checked={ addWLink }
                                onChange={ ( addWLink ) => {
                                    setAttributes( { addWLink } );
                                } }
                            />
                            <TextControl
                                label={ __( 'Link', 'powerful-blocks' ) }
                                className = 'pb-custom-text-control'
                                value={ wrapperLink }
                                placeHolder = 'https://example.com'
                                onChange={ ( wrapperLink ) => {
                                    setAttributes( { wrapperLink } );
                                } }
                            />
                            <ToggleControl
                                label={ __( 'Open in new window', 'powerful-blocks' ) }
                                checked={ wrapperLinkNewTab }
                                onChange={ ( wrapperLinkNewTab ) => {
                                    setAttributes( { wrapperLinkNewTab } );
                                } }
                            />
                            <ToggleControl
                                label={ __( 'Add Nofollow?', 'powerful-blocks' ) }
                                checked={ wrapperLinkNofollow }
                                onChange={ ( wrapperLinkNofollow ) => {
                                    setAttributes( { wrapperLinkNofollow } );
                                } }
                            />
                        </>
                    )
                }
            </PanelBody>
        </>
    );
}

export default Advanced;