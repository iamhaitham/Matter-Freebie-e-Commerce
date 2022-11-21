import { useState } from 'react';
import Size from '../../shared/Size/Size';
import styles from './QuickViewDetails.module.css';
import QuickViewDetailsRow from './QuickViewDetailsRow/QuickViewDetailsRow';
import Button from '../../shared/Button/Button';
import Counter from '../../shared/Counter/Counter';
import StarContainer from '../../shared/Star/StarContainer/StarContainer';
import { detailsRowsEntities, sizesEntities } from '../../entities';
import useLocalStorageState from 'use-local-storage-state'

function QuickViewDetails({ featuredEntity }) {
    const [selectedSize, setSelectedSize] = useState({});
    const [counter, setCounter] = useState(1);
    const [cartItems, setCartItems] = useLocalStorageState('cartItems', {
        defaultValue: []
    });

    const { quickViewDetailsStyles, 
            titleStyles, 
            priceStyles, 
            rowStyles, 
            sizeStyles, 
            selectedSizeStyles, 
            sizesWrapperStyles, 
            noteStyles, 
            addToWatchListStyles, 
            addToCartStyles, 
        } = styles;

    function getRowStyles(id) {
        return id === 1
            ? `flex-column ${ rowStyles }`
            : `flex ${ rowStyles }`;
    }

    function handleSizeClick(e, id) {
        setSelectedSize(sizesEntities[id - 1]);
    }

    function handleIncreaseClick() {
        setCounter(counter + 1);
    }

    function handleDecreaseClick() {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    function addToCart() {
        const cartItem = cartItems.find(item => item.itemId === featuredEntity.id);

        if (cartItem)
            setCartItems([...cartItems.filter(item => item.itemId !== cartItem.itemId), {
                itemId: featuredEntity.id,
                quantity: counter
            }]);
        else
            setCartItems([...cartItems, {
                itemId: featuredEntity.id,
                quantity: counter
            }]);
    }

    const detailsRows = detailsRowsEntities.map(entity => {
        const { id, rowTitle, rowContent } = entity;

        return (
            <QuickViewDetailsRow key={ id } 
                                 rowTitle={ rowTitle } 
                                 rowContent={ rowContent }
                                 rowStyles={ getRowStyles(id) }/>
        );
    });

    const sizes = sizesEntities.map(entity => {
        const { id, size } = entity;
        
        return (
            <Size key={ id }
                  id={ id } 
                  sizeCustomCss={ id === selectedSize.id ? selectedSizeStyles : sizeStyles }
                  size={ size }
                  handleClick={ handleSizeClick }/>
        );
    });

    return (
    <div className={ quickViewDetailsStyles }>
        <h2 className={ titleStyles }>{ featuredEntity.description }</h2>
        
        <div className='flex align-items-center justify-content-space-between'>
            <p className={ priceStyles }>SGD { featuredEntity.price }</p>
            <StarContainer numberOfStars='5'/>
        </div>
        
        { detailsRows }
        
        <p>SIZE</p>
        <div className='flex align-items-center justify-content-space-between'>
            <div className={ sizesWrapperStyles }>
                { sizes }
            </div>
            <p>SIZE GUIDELINES</p>
        </div>
        <span className={ noteStyles }>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</span>

        <p>QUANTITY</p>
        <div className='flex align-items-center justify-content-space-between'>
            <Counter handleIncreaseClick={ handleIncreaseClick }
                     handleDecreaseClick={ handleDecreaseClick }
                     count={ counter }/>
            <Button content='ADD TO CART'
                    customButtonCss={ addToCartStyles }
                    handleClick={ addToCart }/>
            <Button content='ADD TO WATCH LIST'
                    customButtonCss={ addToWatchListStyles }/>
        </div>
    </div>
  )
}

export default QuickViewDetails;