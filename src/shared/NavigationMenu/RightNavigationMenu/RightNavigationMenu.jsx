import { useNavigate } from 'react-router';
import MenuItems from '../MenuItems/MenuItems';
import RightNavigationMenuIcons from '../RightNavigationMenu/RightNavigationMenuIcons/RightNavigationMenuIcons';

function RightNavigationMenu() {
    const rightNavigationMenuWrapper = `flex align-items-center`;
    const navigate = useNavigate();

    const rightMenuItemsEntity = [
        { id: 1, name: 'LOGIN', isArrowIncluded: false }
    ];

    const handleMenuItemClick = (_, id) => {
        const item = rightMenuItemsEntity.find(entity => entity.id === id);
        if (item.id === 1)
            navigate(`${item.name.toLowerCase()}`);
    }

    return (
        <div className={ rightNavigationMenuWrapper }>
            <MenuItems entities={ rightMenuItemsEntity }
                       handleMenuItemClick={ handleMenuItemClick }/>
            <RightNavigationMenuIcons/>            
        </div>
    );
}

export default RightNavigationMenu;