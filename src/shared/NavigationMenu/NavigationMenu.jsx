import Logo from '../Logo/Logo';
import styles from './NavigationMenu.module.css';
import LeftNavigationMenu from './LeftNavigationMenu/LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu/RightNavigationMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { leftMenuItemsEntities, rightMenuItemsEntities } from '../../entities';
import useLocalStorageState from 'use-local-storage-state';

function NavigationMenu() {
    const { navigationMenu, routerLinkStyles } = styles;
    const navigationMenuCss = {
        navigationMenuWrapper: `${ navigationMenu } justify-content-space-around`,
        leftNavigationMenuWrapper: `flex align-items-center`
    };
    const { navigationMenuWrapper, leftNavigationMenuWrapper } = navigationMenuCss;

    const [activeMenuItemId, setActiveMenuItemId] = useState();
    const [userToken, , { removeItem }] = useLocalStorageState('userToken');
    const rightMenuItems = userToken ? [rightMenuItemsEntities[1]] : [rightMenuItemsEntities[0]];
    const navigate = useNavigate();

    const handleLeftMenuItemClick = (_, id) => {
        const item = leftMenuItemsEntities.find(entity => entity.id === id);
        navigate(`${item.name.toLowerCase()}`);
    }

    const handleRightMenuItemClick = (_, id) => {
        const item = rightMenuItemsEntities.find(entity => entity.id === id);
        if (item.id === 1)
            navigate(`${item.name.toLowerCase()}`);
        else if (item.id === 2)
            removeItem();
    }

    return (
        <div className={ navigationMenuWrapper }>
            <div className={ leftNavigationMenuWrapper }>
                <Link to='/' 
                      onClick={ () => setActiveMenuItemId(-1) }
                      className={ routerLinkStyles }>
                    <Logo/>
                </Link>

                <LeftNavigationMenu activeMenuItemId={ activeMenuItemId }
                                    setActiveMenuItemId={ setActiveMenuItemId }
                                    handleLeftMenuItemClick={ handleLeftMenuItemClick }
                                    leftMenuEntities={ leftMenuItemsEntities }/>
            </div>

            <RightNavigationMenu handleRightMenuItemClick={ handleRightMenuItemClick }
                                 rightMenuEntities={ rightMenuItems }/>
        </div>
    );
}

export default NavigationMenu;