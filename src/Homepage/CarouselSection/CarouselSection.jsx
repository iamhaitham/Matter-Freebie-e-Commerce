import Carousel from '../../shared/Carousel/Carousel';
import { carouselSectionPhotosEntities } from '../../entities';

function CarouselSection() {
    return (
        <>
            <Carousel photos={ carouselSectionPhotosEntities }/>
        </>
    );
}

export default CarouselSection;