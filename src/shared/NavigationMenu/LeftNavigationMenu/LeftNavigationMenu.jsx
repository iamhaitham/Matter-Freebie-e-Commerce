import MenuItems from '../MenuItems/MenuItems';

function LeftNavigationMenu() {
    const leftMenuItemsEntity = [
        { id: 1, name: 'SHOP', isArrowIncluded: true },
        { id: 2, name: 'FABRIC', isArrowIncluded: true },
        { id: 3, name: 'JOURNAL', isArrowIncluded: true },
        { id: 4, name: 'ABOUT', isArrowIncluded: true }
    ];

    return (
        <MenuItems entities={ leftMenuItemsEntity }/>
    );
}

export default LeftNavigationMenu;