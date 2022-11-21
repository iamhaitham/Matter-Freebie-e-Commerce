import { useContext } from 'react';
import { FeaturedSectionContext } from '../../services/contexts';
import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import styles from './QuickViewMinis.module.css';

function QuickViewMinis({ defaultMiniImage }) {
    const { 
        miniImageStyles, 
        activeMiniImageStyles, 
        imageContainerStyles 
    } = styles;

    const { handleMiniImageClick, featuredEntity } = useContext(FeaturedSectionContext);

    function onMiniImageClick(e, miniImageId) {
        handleMiniImageClick(e, miniImageId, miniImageId);
    }

    function getImageCss(id) {
        return defaultMiniImage.id === id 
            ? `${ miniImageStyles } ${ activeMiniImageStyles }`
            : `${ miniImageStyles }`;
    }

    const miniImages = featuredEntity.miniImages.map(entity => {
        const { 
            id, 
            src, 
            alt 
        } = entity;

        return (
            <Image key={ id }
                   id={ id }
                   src={ src }
                   alt={ alt }
                   imageCss={ getImageCss(id) }
                   handleClick={ (e) => onMiniImageClick(e, id) }/>
        );
    });

    return (
        <ImageContainer customCss={ imageContainerStyles }>
            { miniImages }  
        </ImageContainer>
    );
}

export default QuickViewMinis;