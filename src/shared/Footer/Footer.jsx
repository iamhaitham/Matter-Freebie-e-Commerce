import FooterColumnWithLinks from "./FooterColumnWithLinks/FooterColumnWithLinks";
import FooterAddress from "./FooterAddress/FooterAddress";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import styles from './Footer.module.css';
import ImageContainer from "../ImageContainer/ImageContainer";
import { columnsWithLinksEntities, iconsEntities } from '../../models';

function Footer() {
    const { columnTitleSpan, inputStyles, buttonStyles, formStyles, iconStyles } = styles;
    const columnsWithLinksCss = `flex bg-mid-grey justify-content-space-evenly ${ styles['padding-2rem'] } grey-text`;
    const formCss = `flex justify-content-space-between ${ formStyles }`;
    const inputCss = `${ inputStyles } grey-text bg-mid-grey`;
    const buttonCss = `mid-grey ${ buttonStyles }`;
    const iconCss = `${ iconStyles }`;
    
    const columnsWithLinks = columnsWithLinksEntities.map(entity => {
        const { entityId, columnTitle, columnItems } = entity;

        return (
            <FooterColumnWithLinks key={ entityId } columnTitle={ columnTitle } columnItems={ columnItems }/>
        );
    });

    const icons = iconsEntities.map(entity => {
        const { id, src, alt } = entity;

        return (
            <Icon key={ id } src={ src } alt={ alt } iconCss={ iconCss }/>
        );
    });

    return (
        <div className={ columnsWithLinksCss }>
            { columnsWithLinks }
            <FooterAddress/>
            <div>
                <span className={ columnTitleSpan }>Subscribe to newsletter</span>
                <div className={ formCss }>
                    <Input type='email' placeholder='ENTER YOUR EMAIL' cssClass={ inputCss }/>
                    <Button content='SUBSCRIBE' customButtonCss={ buttonCss }/>
                </div>
                <ImageContainer>
                    { icons }
                </ImageContainer>
            </div>
        </div>
    );
}

export default Footer;