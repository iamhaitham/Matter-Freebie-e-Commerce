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
import ModalDialog from '../../../../shared/ModalDialog/ModalDialog';
import { useState } from 'react';

function RightNavigationMenuIcons() {
    const [cartItems, setCartItems] = useLocalStorageState('cartItems');
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { iconStyles, unclickableIconStyles, clickableIcomStyles } = styles;
    const clickableIconsCss = `${ iconStyles } ${ clickableIcomStyles }`;
    const unclickableIconsCss = `${ iconStyles } ${ unclickableIconStyles }`;

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
                          iconCss={ clickableIconsCss }
                          handleClick={ openCart }/>
                </Badge>
            );
        else if (id === 3 && (!cartItems || ( cartItems && !cartItems.length )))
            return (
                <Icon key={ id } 
                      src={ src } 
                      alt={ alt } 
                      iconCss={ unclickableIconsCss }/>
            );
        else 
            return (
                <Icon key={ id } 
                      src={ src } 
                      alt={ alt } 
                      iconCss={ clickableIconsCss }/>
            );
    });
    
    return (
        <div className='flex'>
            { icons }
            <ModalDialog open={ isCartOpen } handleClose={ closeCart }>
                <Cart tableHead={ cartTableHeadEntities } tableBody={ getCartTableBodyEntities(cartItems, setCartItems) }/>
            </ModalDialog>
        </div>
    );
}

export default RightNavigationMenuIcons;