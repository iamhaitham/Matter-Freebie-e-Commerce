import MenuItems from '../MenuItems/MenuItems';

function LeftNavigationMenu({ 
    activeMenuItemId, 
    setActiveMenuItemId, 
    handleLeftMenuItemClick,
    leftMenuEntities
}) {

    return (
        <MenuItems entities={ leftMenuEntities }
                   handleMenuItemClick={ handleLeftMenuItemClick }
                   activeMenuItemId={ activeMenuItemId }
                   setActiveMenuItemId={ setActiveMenuItemId }/>
    );
}

export default LeftNavigationMenu;