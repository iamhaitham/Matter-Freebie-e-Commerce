import MenuItems from '../MenuItems/MenuItems';
import RightNavigationMenuIcons from '../RightNavigationMenu/RightNavigationMenuIcons/RightNavigationMenuIcons';

function RightNavigationMenu({ rightMenuEntities, handleRightMenuItemClick }) {
    const rightNavigationMenuWrapper = `flex align-items-center`;    

    return (
        <div className={ rightNavigationMenuWrapper }>
            <MenuItems entities={ rightMenuEntities }
                       handleMenuItemClick={ handleRightMenuItemClick }/>
            <RightNavigationMenuIcons/>            
        </div>
    );
}

export default RightNavigationMenu;