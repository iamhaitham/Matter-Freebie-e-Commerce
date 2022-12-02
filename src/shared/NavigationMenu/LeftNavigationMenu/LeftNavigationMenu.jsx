import MenuItems from '../MenuItems/MenuItems';

function LeftNavigationMenu({ 
    activeMenuItemId, 
    setActiveMenuItemId, 
    leftMenuEntities
}) {

    return (
        <MenuItems entities={ leftMenuEntities }
                   activeMenuItemId={ activeMenuItemId }
                   setActiveMenuItemId={ setActiveMenuItemId }/>
    );
}

export default LeftNavigationMenu;