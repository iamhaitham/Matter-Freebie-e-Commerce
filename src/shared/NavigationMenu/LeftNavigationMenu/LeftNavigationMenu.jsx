import { useState } from 'react';
import { useNavigate } from 'react-router';
import leftMenuItemsEntities from '../../../models/leftMenuItemsEntities';
import MenuItems from '../MenuItems/MenuItems';

function LeftNavigationMenu() {
    const navigate = useNavigate();
    const [activeMenuItemId, setActiveMenuItemId] = useState();

    const handleMenuItemClick = (e, id) => {
        const item = leftMenuItemsEntities.find(entity => entity.id === id);
        navigate(`${item.name.toLowerCase()}`);
    }

    return (
        <MenuItems entities={ leftMenuItemsEntities }
                   handleMenuItemClick={ handleMenuItemClick }
                   activeMenuItemId={ activeMenuItemId }
                   setActiveMenuItemId={ setActiveMenuItemId }/>
    );
}

export default LeftNavigationMenu;