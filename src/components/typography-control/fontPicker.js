/**
 * Credit: EB / Tasnim
 */
/**
 * Internal dependencies
 */
import FONTS from "./fonts";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withInstanceId } = wp.compose;
const { BaseControl } = wp.components;

const FontFamilyPicker = ({
    label,
    value,
    help,
    instanceId,
    onChange,
    className,
    ...props
    }) => {
    const id = `inspector-pb-font-family-${instanceId}`;
    const fonts = [
        { value: "", label: __("Default") },
        { value: "Helvetica", label: "Helvetica" },
        { value: "Times New Roman", label: "Times New Roman" },
        { value: "Georgia", label: "Georgia" }
    ];

    //Add Google Fonts
    Object.keys(FONTS).map(font => {
        fonts.push({ value: font, label: font });
    });

    const onChangeValue = event => {
        const meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
        let ba = "";
        const googleFontsAttr =
        ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
        const link = document.createElement("link");
        link.rel = "stylesheet";

        if ( typeof meta !== "undefined" && typeof meta._pb_fonts_attr !== "undefined" ) {
            ba = meta._pb_fonts_attr;
        }

        if (ba.length > 0) {
            //Load fonts on the header
            if (!ba.includes(event.target.value)) {
                link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
                document.head.appendChild(link);
            }

            ba = ba.replace("," + event.target.value, "");
            ba = ba + "," + event.target.value;
        } else {
            link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
            document.head.appendChild(link);
            ba = event.target.value;

        }

        wp.data.dispatch("core/editor").editPost({
            meta: {
                _pb_fonts_attr: ba
            }
        });

        onChange(event.target.value);
    };

    return (
        <BaseControl label={label} id={id} help={help} className={className}>
            <select
                id={id}
                className="components-select-control__input"
                onChange={onChangeValue}
                {...props}
            >
                {fonts.map((option, index) => (
                <option
                    key={`${option.label}-${option.value}-${index}`}
                    value={option.value}
                    selected={ value === option.value ? "selected" : ""}
                >
                    {option.label}
                </option>
                ))}
            </select>
        </BaseControl>
    );
}

export default withInstanceId(FontFamilyPicker);
