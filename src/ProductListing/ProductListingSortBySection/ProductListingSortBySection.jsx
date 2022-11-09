import SelectOption from '../../shared/SelectOption/SelectOption';
import styles from './ProductListingSortBySection.module.css';

function ProductListingSortBySection({ 
    optionsEntities, 
    selectedOption, 
    handleSelectionChange
 }) {
    const { genderStyles, sortByStyles, sectionStyles } = styles;    

    return (
    <div className={ sectionStyles }>
        <p className={ genderStyles }>Women</p>
        <div className={ sortByStyles }>
            <h2>Sort By</h2>
            <SelectOption optionsEntities={ optionsEntities } 
                          selectedOption={ selectedOption } 
                          handleSelectionChange={ handleSelectionChange }/>
        </div>
    </div>
    )
}

export default ProductListingSortBySection;