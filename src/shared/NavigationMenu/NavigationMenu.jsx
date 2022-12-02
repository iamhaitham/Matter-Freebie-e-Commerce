import Logo from '../Logo/Logo';
import styles from './NavigationMenu.module.css';
import LeftNavigationMenu from './LeftNavigationMenu/LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu/RightNavigationMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { leftMenuItemsEntities, rightMenuItemsEntities } from '../../entities';
import useLocalStorageState from 'use-local-storage-state';
import { NavigationMenuContext } from '../../services/contexts';
import { 
    navigationMenuReducer, 
    navigationMenuReducerInitialState, 
    navigationMenuReducerTypes 
} from '../../services/reducers';

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
    const [state, dispatch] = useReducer(navigationMenuReducer, navigationMenuReducerInitialState);
    const { NavigationMenu_SelectItem } = navigationMenuReducerTypes;

    const handleLeftMenuItemClick = (leftMenuItem) => {
        selectMenuItem(leftMenuItem.id);
        navigate(`${leftMenuItem.name.toLowerCase()}`);
    }

    const handleRightMenuItemClick = (rightMenuItem) => {
        if (rightMenuItem.id === 5) {
            selectMenuItem(rightMenuItem.id);
            navigate(`${rightMenuItem.name.toLowerCase()}`);
        }
        else if (rightMenuItem.id === 6)
            removeItem();
    }

    const selectMenuItem = (id = -1) => {
        dispatch({
            type: NavigationMenu_SelectItem,
            activeMenuItemId: id
        });
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
        <NavigationMenuContext.Provider value={ { handleMenuItemClick, navigationMenuState: state } }>
            <div className={ navigationMenuWrapper }>
                <div className={ leftNavigationMenuWrapper }>
                    <Link to='/' 
                          onClick={ selectMenuItem }
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