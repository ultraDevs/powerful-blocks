const {
	PanelBody,
    SelectControl,
    TextControl,
	ToggleControl,
	RangeControl,
	Dropdown,
    Button,
    BaseControl,
    ButtonGroup,
    TabPanel,
    Dashicon,
} = wp.components;
const { __ } = wp.i18n;
const { MediaUpload } = wp.blockEditor;

const { useState } = wp.element;
import classnames from 'classnames';

import { ColorPickerControl } from '../components';
import { ResponsiveRangeControl } from '../components';
import { ResponsiveBoxControl } from '../components';
import { GradientControl } from '../components';

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
		gradientAngle,
		gradientColor1,
		gradientColor2,
		gradientLoc1,
		gradientLoc2,
		gradientPosition,
        gradientType,

        hoverGradientValue,
        hoverGradientAngle,
        hoverGradientColor1,
        hoverGradientColor2,
        hoverGradientLoc1,
        hoverGradientLoc2,
        hoverGradientPosition,
        hoverGradientType,
        
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
        inAnimationDelay,
        outAnimationDuration,
        outAnimationDelay,
        blockWidth,
        blockCustomWidth,
        blockCustomWidthTablet,
        blockCustomWidthMobile,
        blockzIndex,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,
        customClass,
        customID,
        
    } = attributes;
    
    
    let currentbgTab = backgroundType || 'color';
    const [ bgTab, setbgTab ] = useState( currentbgTab );

    let currentHbgTab = hoverBackgroundType || 'color';
    const [ hbgTab, sethbgTab ] = useState( currentHbgTab );
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
                                                        gradientAngle = { gradientAngle }
                                                        gradientColor1 = { gradientColor1 }
                                                        gradientColor2 = { gradientColor2 }
                                                        gradientLoc1 = { gradientLoc1 }
                                                        gradientLoc2 = { gradientLoc2 }
                                                        gradientPosition = { gradientPosition }
                                                        gradientType = { gradientType }
                                                        setAttributes={ setAttributes }
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
                                                        gradientAngle = { hoverGradientAngle }
                                                        gradientColor1 = { hoverGradientColor1 }
                                                        gradientColor2 = { hoverGradientColor2 }
                                                        gradientLoc1 = { hoverGradientLoc1 }
                                                        gradientLoc2 = { hoverGradientLoc2 }
                                                        gradientPosition = { hoverGradientPosition }
                                                        gradientType = { hoverGradientType }
                                                        setAttributes={ setAttributes }
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
                                        <SelectControl
                                            label={ __(
                                                'Border Style',
                                                'powerful-blocks'
                                            ) }
                                            value={ borderStyle }
                                            onChange={ ( borderStyle ) => {
                                                setAttributes( { borderStyle } );
                                            } }
                                            options={ [
                                                { value: 'none', label: 'None' },
                                                { value: 'solid', label: 'Solid' },
                                                { value: 'dotted', label: 'Dotted' },
                                                { value: 'dashed', label: 'Dashed' },
                                                { value: 'double', label: 'Double' },
                                            ] }
                                        />
                                        <RangeControl
                                            label={ __(
                                                'Border Size',
                                                'powerful-blocks'
                                            ) }
                                            value={ borderSize }
                                            onChange={ ( borderSize ) =>
                                                setAttributes( { borderSize } )
                                            }
                                            min={ 0 }
                                            step={ 1 }
                                            max={ 10 }
                                        />
                                        <ColorPickerControl
                                            label={ __( 'Border Color', 'powerful-blocks' ) }
                                            value={ borderColor }
                                            onChange={ ( borderColor ) => {
                                                setAttributes( { borderColor } );
                                            } }
                                        />
                                    </>
								)
							} else if ( "hover" === tab.name ) {
								tabout = (
									<>
                                        <SelectControl
                                            label={ __(
                                                'Border Style',
                                                'powerful-blocks'
                                            ) }
                                            value={ hoverBorderStyle }
                                            onChange={ ( hoverBorderStyle ) => {
                                                setAttributes( { hoverBorderStyle } );
                                            } }
                                            options={ [
                                                { value: 'none', label: 'None' },
                                                { value: 'solid', label: 'Solid' },
                                                { value: 'dotted', label: 'Dotted' },
                                                { value: 'dashed', label: 'Dashed' },
                                                { value: 'double', label: 'Double' },
                                            ] }
                                        />
                                        <RangeControl
                                            label={ __(
                                                'Border Size',
                                                'powerful-blocks'
                                            ) }
                                            value={ hoverBorderSize }
                                            onChange={ ( hoverBorderSize ) =>
                                                setAttributes( { hoverBorderSize } )
                                            }
                                            min={ 0 }
                                            step={ 1 }
                                            max={ 10 }
                                        />
                                        <ColorPickerControl
                                            label={ __( 'Border Color', 'powerful-blocks' ) }
                                            value={ hoverBorderColor }
                                            onChange={ ( hoverBorderColor ) => {
                                                setAttributes( { hoverBorderColor } );
                                            } }
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
                <BaseControl
                    label={ __( 'Box Shadow', 'powerful-blocks' ) }
                    className="pb-shadow-control"
                >
                    <Dropdown
                        className="pb-shadow-control--dropdown"
                        contentClassName="my-popover-content-classname"
                        position="bottom right"
                        renderToggle={ ( { isOpen, onToggle } ) => (
                            <Button
                                isSmall
                                onClick={ onToggle }
                                aria-expanded={ isOpen }
                                icon="edit"
                            ></Button>
                        ) }
                        renderContent={ () => (
                            <div className="pb-shadow-control--content">
                                <p>
                                    <strong>Shadow</strong>
                                </p>
                                <ColorPickerControl
                                    label={ __( 'Color', 'powerful-blocks' ) }
                                    value={ shadowColor }
                                    onChange={ ( shadowColor ) => {
                                        setAttributes( { shadowColor } );
                                    } }
                                />
                                
                                <RangeControl
                                    label={ __(
                                        'Horizontal Offset',
                                        'powerful-blocks'
                                    ) }
                                    value={ shadowHOffset }
                                    onChange={ ( shadowHOffset ) =>
                                        setAttributes( { shadowHOffset } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={ __(
                                        'Vertical Offset',
                                        'powerful-blocks'
                                    ) }
                                    value={ shadowVOffset }
                                    onChange={ ( shadowVOffset ) =>
                                        setAttributes( { shadowVOffset } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={ __( 'Blur', 'powerful-blocks' ) }
                                    value={ shadowBlur }
                                    onChange={ ( shadowBlur ) =>
                                        setAttributes( { shadowBlur } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={ __( 'Spread', 'powerful-blocks' ) }
                                    value={ shadowSpread }
                                    onChange={ ( shadowSpread ) =>
                                        setAttributes( { shadowSpread } )
                                    }
                                    min={ 0 }
                                    step={ 1 }
                                    max={ 100 }
                                />
                                <SelectControl
                                    label={ __( 'Type', 'powerful-blocks' ) }
                                    value={ shadowType }
                                    onChange={ ( shadowType ) => {
                                        setAttributes( { shadowType } );
                                    } }
                                    options={ [
                                        { value: 'inset', label: 'Inset' },
                                        { value: '', label: 'Outset' },
                                    ] }
                                />
                            </div>
                        ) }
                    />
                </BaseControl>
                
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
                                        <SelectControl
                                            label={ __(
                                                'Border Style',
                                                'powerful-blocks'
                                            ) }
                                            value={ borderStyle }
                                            onChange={ ( borderStyle ) => {
                                                setAttributes( { borderStyle } );
                                            } }
                                            options={ [
                                                { value: 'none', label: 'None' },
                                                { value: 'solid', label: 'Solid' },
                                                { value: 'dotted', label: 'Dotted' },
                                                { value: 'dashed', label: 'Dashed' },
                                                { value: 'double', label: 'Double' },
                                            ] }
                                        />
                                        <RangeControl
                                            label={ __(
                                                'Border Size',
                                                'powerful-blocks'
                                            ) }
                                            value={ borderSize }
                                            onChange={ ( borderSize ) =>
                                                setAttributes( { borderSize } )
                                            }
                                            min={ 0 }
                                            step={ 1 }
                                            max={ 10 }
                                        />
                                    </>
								)
							} else if ( "out" === tab.name ) {
								tabout = (
									<>
                                        <p>Coming Soon..</p>
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
            </PanelBody>
            <PanelBody title={ __( 'Positioning', 'powerful-blocks' ) } initialOpen={ false }>
                <SelectControl
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
                        label={ __( 'Width', 'powerful-blocks' ) }
                        value={ {
                            desktop: blockCustomWidth,
                            tablet: blockCustomWidthTablet,
                            mobile: blockCustomWidthMobile,
                        } }
                        onChange={ ( value, device ) => {
                            if ( 'desktop' === device ) {
                                setAttributes( { blockCustomWidth: value } );
                            }
                            if ( 'tablet' === device ) {
                                setAttributes( { blockCustomWidthTablet: value } );
                            }
                            if ( 'mobile' === device ) {
                                setAttributes( { blockCustomWidthMobile: value } );
                            }
                        } }
                        min={ 0 }
                        max={ 2000 }
                    />
                ) }
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
        </>
    );
}

export default Advanced;