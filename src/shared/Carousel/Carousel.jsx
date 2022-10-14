import { useState } from 'react';
import Image from '../Image/Image';
import styles from './Carousel.module.css';

function Carousel({ photos }) {
    const { imageStyles, arrowStyles, carouselContainerStyles } = styles;
    const [carouselImage, setCarouselImage] = useState(photos[0]);

    function handleNext() {
        const currentPhotoId = carouselImage.id - 1;
        const nextPhotoId  = currentPhotoId + 1;
        nextPhotoId >= photos.length 
            ? setCarouselImage(photos[0])
            : setCarouselImage(photos[nextPhotoId]);
    }

    function handlePrevious() {
        const currentPhotoId = carouselImage.id - 1;
        const previousPhotoId  = currentPhotoId - 1;
        previousPhotoId < 0 
            ? setCarouselImage(photos[photos.length - 1])
            : setCarouselImage(photos[previousPhotoId]);
    }

    return (
        <>
            <div className={ carouselContainerStyles }>
                <Image key={ carouselImage.id } 
                       src={ carouselImage.src } 
                       alt={ carouselImage.alt }
                       imageCss={ imageStyles }/>
                <span className={ arrowStyles } onClick={ handleNext }>→</span>
                <span className={ arrowStyles } onClick={ handlePrevious }>←</span>
            </div>
        </>
    );
}

export default Carousel;