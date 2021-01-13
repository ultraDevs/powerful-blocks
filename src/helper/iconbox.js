const IconBox = ({ icon, iconClass }) => (
    <span
        className={ icon + ' ' + iconClass }
        data-icon={icon}
    />
);
export default IconBox;