import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import Button from '../../shared/Button/Button';
import styles from './ShopSection.module.css';
import { useState } from 'react';
import { shopEntities } from '../../entities';

function ShopSection() {
    const [showShopNowButton, setShowShopNowButton] = useState({ id: 0, show: false });
    const sectionTitleContent = `Shop`;
    const buttonContent = 'SHOP NOW';
    const { imageContainerStyles, imageStyles, buttonStyles, shopHoveredImagesStyles } = styles;
    const imageContainerCss = `${ imageContainerStyles } justify-content-space-between`;
    const imageCss = `${ imageStyles }`;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    function handleMouseOver(_, id) {
        setShowShopNowButton({ id, show: true });
    }

    function handleMouseOut(_, id) {
        setShowShopNowButton({ id, show: false });
    }

    function isButtonVisible(id) {
        return showShopNowButton.show && showShopNowButton.id === id;
    }

    const shopPictures = shopEntities.map(entity => {
        const { 
            id, 
            src, 
            alt, 
            description 
        } = entity;

        return (
            <div key={ id }
                 className={ shopHoveredImagesStyles } 
                 onMouseOver={ (e) => handleMouseOver(e, id) } 
                 onMouseOut={ (e) => handleMouseOut(e, id) }>
                <Image id={ id }
                       src={ src } 
                       alt={ alt } 
                       imageCss={ imageCss }>
                        <p>{ description }</p>
                </Image>
                { isButtonVisible(id) && 
                    <Button content={ buttonContent } customButtonCss={ buttonCss }/>
                }
            </div>
        );
    });

    return (
      <Section>
        <SectionTitle content={ sectionTitleContent }/>
        <ImageContainer customCss={ imageContainerCss }>
            { shopPictures }
        </ImageContainer>
      </Section>
    );
}

export default ShopSection;