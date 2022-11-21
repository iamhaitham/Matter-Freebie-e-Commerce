import Logo from '../Logo/Logo';
import styles from './NavigationMenu.module.css';
import LeftNavigationMenu from './LeftNavigationMenu/LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu/RightNavigationMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { leftMenuItemsEntities } from '../../entities';

function NavigationMenu() {
    const { navigationMenu, routerLinkStyles } = styles;
    const navigationMenuCss = {
        navigationMenuWrapper: `${ navigationMenu } justify-content-space-around`,
        leftNavigationMenuWrapper: `flex align-items-center`
    };
    const { navigationMenuWrapper, leftNavigationMenuWrapper } = navigationMenuCss;

    const [activeMenuItemId, setActiveMenuItemId] = useState();
    const navigate = useNavigate();

    const handleMenuItemClick = (e, id) => {
        const item = leftMenuItemsEntities.find(entity => entity.id === id);
        navigate(`${item.name.toLowerCase()}`);
    }

    return (
        <div className={ navigationMenuWrapper }>
            <div className={ leftNavigationMenuWrapper }>
                <Link to='/' 
                      onClick={ () => setActiveMenuItemId(-1) }
                      className={ routerLinkStyles }><Logo/></Link>
                <LeftNavigationMenu activeMenuItemId={ activeMenuItemId }
                                    setActiveMenuItemId={ setActiveMenuItemId }
                                    handleMenuItemClick={ handleMenuItemClick }
                                    leftMenuEntities={ leftMenuItemsEntities }/>
            </div>
            <RightNavigationMenu/>
        </div>
    );
}

export default NavigationMenu;