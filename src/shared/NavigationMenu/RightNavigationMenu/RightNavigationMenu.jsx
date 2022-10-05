import MenuItems from '../MenuItems/MenuItems';
import RightNavigationMenuIcons from '../RightNavigationMenu/RightNavigationMenuIcons/RightNavigationMenuIcons';

function RightNavigationMenu() {
    const rightNavigationMenuWrapper = `flex align-items-center`;

    const rightMenuItemsEntity = [
        { id: 1, name: 'LOGIN', isArrowIncluded: false }
    ];

    return (
        <div className={ rightNavigationMenuWrapper }>
            <MenuItems entities={ rightMenuItemsEntity }/>
            <RightNavigationMenuIcons/>            
        </div>
    );
}

export default RightNavigationMenu;