import MenuItems from '../MenuItems/MenuItems';
import RightNavigationMenuIcons from '../RightNavigationMenu/RightNavigationMenuIcons/RightNavigationMenuIcons';

function RightNavigationMenu({ rightMenuEntities }) {
    const rightNavigationMenuWrapper = `flex align-items-center`;    

    return (
        <div className={ rightNavigationMenuWrapper }>
            <MenuItems entities={ rightMenuEntities }/>
            <RightNavigationMenuIcons/>            
        </div>
    );
}

export default RightNavigationMenu;