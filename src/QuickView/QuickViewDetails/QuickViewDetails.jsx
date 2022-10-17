import { useState } from 'react';
import Size from '../../shared/Size/Size';
import styles from './QuickViewDetails.module.css';
import QuickViewDetailsRow from './QuickViewDetailsRow/QuickViewDetailsRow';
import Button from '../../shared/Button/Button';
import Counter from '../../shared/Counter/Counter';

function QuickViewDetails({ title, price }) {
    const [selectedSize, setSelectedSize] = useState({});
    const [counter, setCounter] = useState(1);
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

    const detailsRowsEntities = [
        { id: 1, rowTitle: 'Description', rowContent: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen' },
        { id: 2, rowTitle: 'Artisan Employment', rowContent: '54 jobs' },
        { id: 3, rowTitle: 'Partnership', rowContent: 'Randall Armstrong' },
        { id: 4, rowTitle: 'In Collab', rowContent: 'Augusta Mendoza' }
    ];

    const sizesEntities = [
        { id: 1, size: 1 },
        { id: 2, size: 2 },
        { id: 3, size: 3 },
        { id: 4, size: 4 }
    ];

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
        <h2 className={ titleStyles }>{ title }</h2>
        
        <div>
            <p className={ priceStyles }>SGD { price }</p>
            <p>RATING HERE</p>
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
                    customButtonCss={ addToCartStyles }/>
            <Button content='ADD TO WATCH LIST'
                    customButtonCss={ addToWatchListStyles }/>
        </div>
    </div>
  )
}

export default QuickViewDetails