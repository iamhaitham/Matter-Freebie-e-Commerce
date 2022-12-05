import { Badge } from '@mui/material';
import Icon from '../../../Icon/Icon';
import styles from './RightNavigationMenuIcons.module.css';
import { 
    cartTableHeadEntities, 
    rightNavigationMenuIconsEntities ,
    getCartTableBodyEntities
} from '../../../../entities';
import useLocalStorageState from 'use-local-storage-state';
import Cart from '../../../../Cart/Cart';
import { useState } from 'react';

function RightNavigationMenuIcons() {
    const [cartItems] = useLocalStorageState('cartItems');
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { iconStyles, tableContainerStyles } = styles;

    const openCart = () => {
        setIsCartOpen(true);
    }

    const closeCart = () => {
        setIsCartOpen(false);
    }

    const icons = rightNavigationMenuIconsEntities.map(entity => {
        const { id, src, alt } = entity;
        
        if (id === 3 && cartItems && cartItems.length)
            return (
                <Badge key={ id } 
                       badgeContent={ cartItems.length } 
                       color='primary'>
                    <Icon src={ src } 
                          alt={ alt } 
                          iconCss={ iconStyles }
                          handleClick={ openCart }/>
                </Badge>
            );
        else 
            return (
                <Icon key={ id } src={ src } alt={ alt } iconCss={ iconStyles }/>
            );
    });
    
    return (
        <div className='flex'>
            { icons }
            <Cart open={ isCartOpen } 
                  handleClose={ closeCart } 
                  tableContainerStyles={ tableContainerStyles }
                  tableHead={ cartTableHeadEntities }
                  tableBody={ getCartTableBodyEntities(cartItems) }/>
        </div>
    );
}

export default RightNavigationMenuIcons;