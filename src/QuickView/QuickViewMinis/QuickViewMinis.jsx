import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import styles from './QuickViewMinis.module.css';

function QuickViewMinis({ minis, handleMiniImageClick, entityId, defaultMiniImage }) {
    const { miniImageStyles, activeMiniImageStyles, imageContainerStyles } = styles;

    function onMiniImageClick(e, miniImageId) {
        handleMiniImageClick(e, entityId, miniImageId);
    }

    function getImageCss(id) {
        return defaultMiniImage.id === id 
            ? `${ miniImageStyles } ${ activeMiniImageStyles }`
            : `${ miniImageStyles }`;
    }

    const miniImages = minis.map(entity => {
        const { id, src, alt } = entity;

        return (
            <Image key={ id }
                   id={ id }
                   src={ src }
                   alt={ alt }
                   imageCss={ getImageCss(id) }
                   handleClick={ (e) => onMiniImageClick(e, id) }/>
        );
    })
    return (
        <ImageContainer customCss={ imageContainerStyles }>
            { miniImages }  
        </ImageContainer>
    );
}

export default QuickViewMinis;