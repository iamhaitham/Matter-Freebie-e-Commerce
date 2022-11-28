import { Badge } from '@mui/material';
import Icon from '../../../Icon/Icon';
import styles from './RightNavigationMenuIcons.module.css';
import { rightNavigationMenuIconsEntities } from '../../../../entities';
import useLocalStorageState from 'use-local-storage-state';

function RightNavigationMenuIcons() {
    const [cartItems] = useLocalStorageState('cartItems');

    const { iconStyles } = styles;

    const icons = rightNavigationMenuIconsEntities.map(entity => {
        const { id, src, alt } = entity;
        
        if (id === 3 && cartItems && cartItems.length)
            return (
                <Badge key={ id } 
                       badgeContent={ cartItems.length } 
                       color='primary'>
                    <Icon src={ src } alt={ alt } iconCss={ iconStyles }/>
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
        </div>
    );
}

export default RightNavigationMenuIcons;