import { useState } from "react";
import Image from "../../shared/Image/Image";
import ImageContainer from "../../shared/ImageContainer/ImageContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Section from '../../shared/Section/Section';
import Button from '../../shared/Button/Button';
import styles from './FeaturedSection.module.css';
import QuickView from "../../QuickView/QuickView";

function FeaturedSection() {
    const featuredEntities = [
        { 
            id: 1, 
            isNew: true, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 1', 
            src: '/images/featured-7.png', 
            alt: 'featured-1', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ]
        }, { 
            id: 2, 
            isNew: true, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 2', 
            src: '/images/featured-2.png', 
            alt: 'featured-2', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ]
        }, { 
            id: 3, 
            isNew: true, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 3', 
            src: '/images/featured-8.png', 
            alt: 'featured-3', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }, { 
            id: 4, 
            isNew: false, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 4', 
            src: '/images/featured-4.png', 
            alt: 'featured-4', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }, { 
            id: 5, 
            isNew: true, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 5', 
            src: '/images/featured-5.png', 
            alt: 'featured-5', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }, { 
            id: 6, 
            isNew: false, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 6', 
            src: '/images/featured-6.png', 
            alt: 'featured-6', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }, { 
            id: 7, 
            isNew: true, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 7', 
            src: '/images/featured-7.png', 
            alt: 'featured-7', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }, { 
            id: 8, 
            isNew: false, 
            description: 'Pueraria Mirifica And Study Phyto Estrogens 8', 
            src: '/images/featured-8.png', 
            alt: 'featured-8', 
            price: '599.00', 
            miniImages: [
                { 
                    id: 1, 
                    src: '/images/minis-1.png', 
                    alt: 'Mini 1' 
                }, { 
                    id: 2,
                    src: '/images/minis-2.png', 
                    alt: 'Mini 2' 
                }, { 
                    id: 3, 
                    src: '/images/minis-3.png', 
                    alt: 'Mini 3' 
                }, { 
                    id: 4, 
                    src: '/images/minis-4.png', 
                    alt: 'Mini 4' 
                }, { 
                    id: 5, 
                    src: '/images/minis-2.png',
                    alt: 'Mini 5' 
                }
            ] 
        }
    ];

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