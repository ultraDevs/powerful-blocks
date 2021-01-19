const { __ } = wp.i18n;
const {
    BaseControl,
    Dashicon,
} = wp.components;

import './editor.scss';


import faIcons from '../../helper/faIcons';
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";


const IconPickerControl = ( props ) => {
    const label = props.label;
    const icon = props.icon;

    return (
        <>
            <BaseControl
                label={ label }
                className="pb-icon-picker"
            >
                <FontIconPicker
                    noSelectedPlaceholder = { <Dashicon icon="admin-tools" /> }
                    icons = { faIcons }
                    onChange = { (icon) => {
                        props.onChange(icon);
                    }}
                    value = { icon }
                    appendTo="body"
                    isMulti={false}
                />
            </BaseControl>
        </>
    );
}

export default IconPickerControl;