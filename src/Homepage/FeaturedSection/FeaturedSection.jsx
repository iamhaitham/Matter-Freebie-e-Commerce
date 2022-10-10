import { useState } from "react";
import Image from "../../shared/Image/Image";
import ImageContainer from "../../shared/ImageContainer/ImageContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Section from "../Section/Sections";
import Button from '../../shared/Button/Button';
import styles from './FeaturedSection.module.css';

function FeaturedSection() {
    const { buttonStyles, featuredHoveredImagesStyles } = styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;
    const [quickView, setQuickView] = useState({ id: 0, isQuickView: false });

    const featuredsectionTitle = 'Featured';
    const { imageStyles, imageContainerStyles } = styles;

    const featuredEntities = [
        { id: 1, isNew: true, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-7.png', alt: 'featured-1', price: '599.00' },
        { id: 2, isNew: true, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-2.png', alt: 'featured-2', price: '599.00' },
        { id: 3, isNew: true, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-8.png', alt: 'featured-3', price: '599.00' },
        { id: 4, isNew: false, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-4.png', alt: 'featured-4', price: '599.00' },
        { id: 5, isNew: true, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-5.png', alt: 'featured-5', price: '599.00' },
        { id: 6, isNew: false, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-6.png', alt: 'featured-6', price: '599.00' },
        { id: 7, isNew: true, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-7.png', alt: 'featured-7', price: '599.00' },
        { id: 8, isNew: false, description: 'Pueraria Mirifica And Study Phyto Estrogens', src: '/images/featured-8.png', alt: 'featured-8', price: '599.00' }
    ];

    function handleMouseOver(e, id) {
        setQuickView({ id, isQuickView: true });
    }

    function handleMouseOut(e, id) {
        setQuickView({ id, isQuickView: false });
    }

    function showDescriptionAndPrice(description, price) {
        return (
            <>
                <p>{ description }</p>
                <p>${ price }</p>
            </>
        );
    }

    function isButtonVisible(id) {
        if (quickView.id === id && quickView.isQuickView) {
            return (
                <Button content='QUICK VIEW' customButtonCss={ buttonCss }/>
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
                    imageCss={ imageStyles }/>
                { showDescriptionAndPrice(description, price) }
                { isNewLabelVisible(isNew) }
                { isButtonVisible(id) }
            </div>
        );
    });

    return (
        <Section>
            <SectionTitle content={ featuredsectionTitle }/>
            <ImageContainer customCss={ imageContainerStyles }>
                { featuredItems }
            </ImageContainer>
        </Section>
    );
}

export default FeaturedSection;