import styles from './FooterAddress.module.css'

function FooterAddress() {
    const { details, columnTitleSpan, addressParagraph } = styles;
    const address = `flex-column ${ details }`;

    return (
        <div>
            <span className={ columnTitleSpan }>Contact us</span>
            <div className={ address }>
                <p className={ addressParagraph }>
                    26A Pagoda St, TANGS, <br/>
                    Singapore, 058187
                </p>
            </div>
            <p className={ details }>+65 6221 5462</p>
        </div>
    );
}

export default FooterAddress;