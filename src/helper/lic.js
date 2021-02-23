
const pType = 'Pro';
// const pType = UDPB.type ? UDPB.type : 'Free';
const UpgradePlanNotice = ( props ) => {
    return (
        <>
            <div className="pb-upgrade-plan-notice">
                <span>PRO</span>
                <p>Please upgrade to our pro version for more stunning features, blocks and customization options.</p>
                <div className="pb-upn--btn">
                    <a href="https://powerfulblocks.com/pricing" target="_blank">Buy Now</a>
                    <a href="https://powerfulblocks.com/free-vs-pro" target="_blank">Free VS Pro</a>
                </div>
            </div>
        </>
    );
};

export { pType, UpgradePlanNotice };