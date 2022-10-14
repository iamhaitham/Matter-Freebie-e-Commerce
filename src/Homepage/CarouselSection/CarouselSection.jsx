import Carousel from '../../shared/Carousel/Carousel';

function CarouselSection() {
    const photosEntities = [
        { id: 1, src: '/images/carousel-1.jpg', alt: 'Carousel 1', title: 'Perfume Tips Tricks' },
        { id: 2, src: '/images/carousel-2.jpg', alt: 'Carousel 2', title: 'Lorem Ipsum' },
    ];

    return (
        <>
            <Carousel photos={ photosEntities }/>
        </>
    );
}

export default CarouselSection;