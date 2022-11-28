import { useNavigate } from 'react-router';
import MenuItems from '../MenuItems/MenuItems';
import RightNavigationMenuIcons from '../RightNavigationMenu/RightNavigationMenuIcons/RightNavigationMenuIcons';
import { rightMenuItemsEntities } from '../../../entities';
import useLocalStorageState from 'use-local-storage-state';

function RightNavigationMenu() {
    const rightNavigationMenuWrapper = `flex align-items-center`;
    const navigate = useNavigate();
    const [userToken, , { removeItem }] = useLocalStorageState('userToken');
    const rightMenuItems = userToken ? [rightMenuItemsEntities[1]] : [rightMenuItemsEntities[0]];

    const handleMenuItemClick = (_, id) => {
        const item = rightMenuItemsEntities.find(entity => entity.id === id);
        if (item.id === 1)
            navigate(`${item.name.toLowerCase()}`);
        else if (item.id === 2)
            removeItem();
    }

    return (
        <div className={ rightNavigationMenuWrapper }>
            <MenuItems entities={ rightMenuItems }
                       handleMenuItemClick={ handleMenuItemClick }/>
            <RightNavigationMenuIcons/>            
        </div>
    );
}

export default RightNavigationMenu;