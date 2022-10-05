import FooterColumnWithLinks from "./FooterColumnWithLinks/FooterColumnWithLinks";
import FooterAddress from "./FooterAddress/FooterAddress";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import styles from './Footer.module.css';
import ImageContainer from "../ImageContainer/ImageContainer";

function Footer() {
    const { columnTitleSpan, inputStyles, buttonStyles, formStyles, iconStyles } = styles;
    const columnsWithLinksCss = `flex bg-mid-grey justify-content-space-evenly ${ styles['padding-2rem'] } grey-text`;
    const formCss = `flex justify-content-space-between ${ formStyles }`;
    const inputCss = `${ inputStyles } grey-text bg-mid-grey`;
    const buttonCss = `mid-grey ${ buttonStyles }`;
    const iconCss = `${ iconStyles }`;
    
    const columnsWithLinksEntities = [
        { entityId: 1, columnTitle: 'Categories', columnItems: 
            [
                { id: 1, item: 'About us' },
                { id: 2, item: 'Testimonials' },
                { id: 3, item: 'Contact' },
                { id: 4, item: 'Journal' },
                { id: 5, item: 'Privacy Policy' }
            ] 
        },
        { entityId: 2, columnTitle: 'Partners', columnItems: 
            [
                { id: 1, item: 'Support' },
                { id: 2, item: 'Shipping & Returns' },
                { id: 3, item: 'Size Guide' },
                { id: 4, item: 'Product Care' }
            ] 
        }
    ];
    const columnsWithLinks = columnsWithLinksEntities.map(entity => {
        const { entityId, columnTitle, columnItems } = entity;

        return (
            <FooterColumnWithLinks key={ entityId } columnTitle={ columnTitle } columnItems={ columnItems }/>
        );
    });

    const iconsEntities = [
        { id: 1, src: '/images/facebook-icon.png', alt: 'Facebook Icon' },
        { id: 2, src: '/images/twitter-icon.png', alt: 'Twitter Icon' }
    ];
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