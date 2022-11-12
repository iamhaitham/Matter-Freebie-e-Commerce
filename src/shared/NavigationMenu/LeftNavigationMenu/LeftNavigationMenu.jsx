import MenuItems from '../MenuItems/MenuItems';

function LeftNavigationMenu({ 
    activeMenuItemId, 
    setActiveMenuItemId, 
    handleMenuItemClick,
    leftMenuEntities
}) {

    return (
        <MenuItems entities={ leftMenuEntities }
                   handleMenuItemClick={ handleMenuItemClick }
                   activeMenuItemId={ activeMenuItemId }
                   setActiveMenuItemId={ setActiveMenuItemId }/>
    );
}

export default LeftNavigationMenu;