import { useState } from 'react';
import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Button from '../../shared/Button/Button';
import styles from './FeaturedSection.module.css';
import QuickView from '../../QuickView/QuickView';
import featuredEntities from '../../models/featuredEntities';

function FeaturedSection() {
    const { buttonStyles, featuredHoveredImagesStyles, featuredSecitonStyles, quickViewStyles } = styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;
    const [quickViewButton, setQuickViewButton] = useState({ id: 0, isQuickView: false });
    const [quickViewItem, setQuickViewItem] = useState({});
    const [miniImage, setMiniImage] = useState(featuredEntities[0].miniImages[0]);

    const featuredsectionTitle = 'Featured';
    const { imageStyles, imageContainerStyles } = styles;

    function handleMouseOver(e, id) {
        setQuickViewButton({ id, isQuickView: true });
    }

    function handleMouseOut(e, id) {
        setQuickViewButton({ id, isQuickView: false });
    }

    function handleMiniImageClick(e, entityId, miniImageId) {
        setMiniImage(featuredEntities[entityId - 1].miniImages[miniImageId - 1]);
    }

    function showDescriptionAndPrice(description, price) {
        return (
            <>
                <p>{ description }</p>
                <p>${ price }</p>
            </>
        );
    }

    function onQuickView(e, id) {
        setQuickViewItem(featuredEntities[id - 1]);
    }

    function shouldOpenQuickView() {
        if (!!quickViewItem.id) {
            return (
                <QuickView customCss={ quickViewStyles }
                           entity={ quickViewItem } 
                           onCloseClick={ handleCloseClick }
                           onMiniImageClick={ handleMiniImageClick }
                           defaultMiniImage={ miniImage }/>
            );
        } else {
            return (
                <Section customCss={ featuredSecitonStyles }>
                    <SectionTitle content={ featuredsectionTitle }/>
                    <ImageContainer customCss={ imageContainerStyles }>
                        { featuredItems }
                    </ImageContainer>
                </Section>
            );
        }
    }

    function handleCloseClick() {
        setQuickViewItem({});
    }

    function isButtonVisible(id) {
        if (quickViewButton.id === id && quickViewButton.isQuickView) {
            return (
                <Button id={ id }
                        content='QUICK VIEW' 
                        customButtonCss={ buttonCss }
                        handleClick={ onQuickView }/>
            );
        };
    }

    function isNewLabelVisible(isNew) {
        if (isNew) {
            return (
                <span>NEW</span>
            );
        };
    }

    const featuredItems = featuredEntities.map(entity => {
        const { id, src, alt, description, price, isNew } = entity;

        return (
            <div key={ id }
                 onMouseOver={ (e) => handleMouseOver(e, id) } 
                 onMouseOut={ (e) => handleMouseOut(e, id) }
                 className={ featuredHoveredImagesStyles }>
                <Image 
                    id={ id }
                    src={ src } 
                    alt={ alt }
                    imageCss={ imageStyles }>
                    { showDescriptionAndPrice(description, price) }
                    { isNewLabelVisible(isNew) }
                </Image>
                { isButtonVisible(id) }
            </div>
        );
    });

    return (
        <>
            { shouldOpenQuickView() }
        </>
    );
}

export default FeaturedSection;