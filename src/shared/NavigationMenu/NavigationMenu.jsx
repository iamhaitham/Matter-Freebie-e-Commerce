import Logo from '../Logo/Logo';
import styles from './NavigationMenu.module.css';
import LeftNavigationMenu from './LeftNavigationMenu/LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu/RightNavigationMenu';
import { Link, useNavigate } from 'react-router-dom';
import { leftMenuItemsEntities, rightMenuItemsEntities } from '../../entities';
import useLocalStorageState from 'use-local-storage-state';
import { NavigationMenuContext } from '../../services/contexts';

function NavigationMenu() {
    const { navigationMenu, routerLinkStyles } = styles;
    const navigationMenuCss = {
        navigationMenuWrapper: `${ navigationMenu } justify-content-space-around`,
        leftNavigationMenuWrapper: `flex align-items-center`
    };
    const { navigationMenuWrapper, leftNavigationMenuWrapper } = navigationMenuCss;

    const [userToken, , { removeItem }] = useLocalStorageState('userToken');
    const rightMenuItems = userToken ? [rightMenuItemsEntities[1]] : [rightMenuItemsEntities[0]];
    const navigate = useNavigate();
    const [, setMenuItemToken, { removeItem: removeMenuItemToken }] = useLocalStorageState('menuItemToken');

    const handleLeftMenuItemClick = (leftMenuItem) => {
        setMenuItemToken(leftMenuItem.id);
        navigate(`${leftMenuItem.name.toLowerCase()}`);
    }

    const handleRightMenuItemClick = (rightMenuItem) => {
        if (rightMenuItem.id === 5) {
            setMenuItemToken(rightMenuItem.id);
            navigate(`${rightMenuItem.name.toLowerCase()}`);
        }
        else if (rightMenuItem.id === 6)
            removeItem();
    }

    const handleMenuItemClick = (itemName) => {
        let rightMenuItem = rightMenuItemsEntities.find(entity => entity.name === itemName);
        let leftMenuItem = leftMenuItemsEntities.find(entity => entity.name === itemName);

        if (rightMenuItem)
            handleRightMenuItemClick(rightMenuItem);
        else if (leftMenuItem)
            handleLeftMenuItemClick(leftMenuItem);
    }

    return (
        <NavigationMenuContext.Provider value={ { handleMenuItemClick } }>
            <div className={ navigationMenuWrapper }>
                <div className={ leftNavigationMenuWrapper }>
                    <Link to='/' 
                          onClick={ removeMenuItemToken }
                          className={ routerLinkStyles }>
                        <Logo/>
                    </Link>

                    <LeftNavigationMenu leftMenuEntities={ leftMenuItemsEntities }/>
                </div>

                <RightNavigationMenu rightMenuEntities={ rightMenuItems }/>
            </div>
        </NavigationMenuContext.Provider>
    );
}

export default NavigationMenu;