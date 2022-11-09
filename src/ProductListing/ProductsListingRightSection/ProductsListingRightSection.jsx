import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import styles from './ProductsListingRightSection.module.css';

function ProductsListingRightSection({ entities }) {
    const { imageStyles } = styles;

    function isNewLabelVisible(isNew) {
        if (isNew) {
            return (
                <span>NEW</span>
            );
        };
    }

    function showDescriptionAndPrice(description, price) {
        return (
            <>
                <p>{ description }</p>
                <p>${ price }</p>
            </>
        );
    }

    const items = entities.map(entity => {
        const { id, src, alt, description, price, isNew } = entity;

        return (
            <div key={ id }>
                 <Image 
                    id={ id }
                    src={ src } 
                    alt={ alt }
                    imageCss={ imageStyles }>
                    { showDescriptionAndPrice(description, price) }
                    { isNewLabelVisible(isNew) }
                 </Image>
            </div>
        );
    });

    return (
        <ImageContainer>
            { items }
        </ImageContainer>
    )
}

export default ProductsListingRightSection;