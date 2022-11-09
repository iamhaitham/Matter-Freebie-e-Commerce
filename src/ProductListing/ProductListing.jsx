import { useState } from 'react';
import featuredEntities from '../models/featuredEntities';
import CurrentListingSection from './CurrentListingSection/CurrentListingSection';
import ProductListingSortBySection from './ProductListingSortBySection/ProductListingSortBySection';
import ProductsListingRightSection from './ProductsListingRightSection/ProductsListingRightSection';

function ProductListing() {
    const optionsEntities = [
        { id: 0, optionName: 'CHOOSE' },
        { id: 1, optionName: 'PRICE' }
    ];
    const [selectedOption, setSelectedOption] =  useState(optionsEntities[0].optionName);
    const [sortedEntities, setSortedEntities] =  useState(featuredEntities);

    const handleSelectionChange = (e) => {
        setSelectedOption(e.target.value);
        
        if (e.target.value !== optionsEntities[0].optionName) {
            const sortedArray = sortedEntities.sort((a, b) => +b.price - +a.price);
            setSortedEntities(sortedArray);
        }
    }

    return (
        <>
            <CurrentListingSection currentListingTitle='Apparel'/>
            <ProductListingSortBySection optionsEntities={ optionsEntities }
                                         selectedOption={ selectedOption } 
                                         handleSelectionChange={ handleSelectionChange }/>
            <ProductsListingRightSection entities={ sortedEntities }/>
        </>
    );
}

export default ProductListing;