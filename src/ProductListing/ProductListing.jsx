import { useState } from 'react';
import { featuredEntities } from '../entities';
import CurrentListingSection from './CurrentListingSection/CurrentListingSection';
import FiltersSection from './FiltersSection/FiltersSection';
import ProductListingSortBySection from './ProductListingSortBySection/ProductListingSortBySection';
import ProductsListingRightSection from './ProductsListingRightSection/ProductsListingRightSection';

function ProductListing() {
    const optionsEntities = [
        { id: 0, optionName: 'CHOOSE' },
        { id: 1, optionName: 'PRICE' }
    ];
    const [selectedOption, setSelectedOption] = useState(optionsEntities[0].optionName);
    const [sortedEntities, setSortedEntities] = useState(featuredEntities);

    const handleSelectionChange = (e) => {
        setSelectedOption(e.target.value);
        
        if (e.target.value !== optionsEntities[0].optionName) {
            const sortedArray = sortedEntities.sort((a, b) => +b.price - +a.price);
            setSortedEntities(sortedArray);
        }
        else {
            const unSortedArray = featuredEntities.sort((a, b) => +a.id - +b.id);
            setSortedEntities(unSortedArray);
        }
    }

    const handleSubFilter = (e, subFilterName) => {
        const filteredEntitiesBySubFilter = featuredEntities.filter(entity => entity.category === subFilterName);
        setSortedEntities(filteredEntitiesBySubFilter);
    }

    const resetFilters = () => {
        const unSortedArray = featuredEntities.sort((a, b) => +a.id - +b.id);
        setSelectedOption( optionsEntities[0].optionName);
        setSortedEntities(unSortedArray);
    }

    return (
        <>
            <CurrentListingSection currentListingTitle='Apparel'/>
            <ProductListingSortBySection optionsEntities={ optionsEntities }
                                         selectedOption={ selectedOption } 
                                         handleSelectionChange={ handleSelectionChange }/>
            <div className='flex'>
                <FiltersSection handleSubFilter={ handleSubFilter }
                                resetFilters={ resetFilters }/>
                <ProductsListingRightSection entities={ sortedEntities }/>
            </div>
        </>
    );
}

export default ProductListing;