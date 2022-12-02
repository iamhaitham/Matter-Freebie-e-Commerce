import { useContext } from 'react';
import { NavigationMenuContext } from '../../../../services/contexts';
import styles from './MenuItem.module.css';

function MenuItem({ 
    id, 
    name, 
    isArrowIncluded, 
    activeMenuItemId,
    setActiveMenuItemId
}) {
    const listCss = {
        listItemWithArrow: `${ styles.listItemWithArrow }`,
        listItemWithoutArrow: `${ styles.listItemWithoutArrow }`,
        activeMenuItem: `${ styles.activeMenuItem }`
        
    };
    const { listItemWithArrow, listItemWithoutArrow, activeMenuItem } = listCss;
    const handleMenuItemClick = useContext(NavigationMenuContext);

    function chooseListItemStyle(isArrowIncluded, id) {
        let listItemStyle = ``;

        if (isArrowIncluded)
            listItemStyle = listItemStyle.concat(' ', listItemWithArrow);
        else
            listItemStyle = listItemStyle.concat(' ', listItemWithoutArrow);

        if (activeMenuItemId === id)
            listItemStyle = listItemStyle.concat(' ', activeMenuItem);

        return listItemStyle;
    }

    function handleClick(_, id, name) {
        handleMenuItemClick(name);
        setActiveMenuItemId = setActiveMenuItemId ? setActiveMenuItemId(id) : undefined;
    }

    return (
        <li key={ id } 
            className={ chooseListItemStyle(isArrowIncluded, id) }
            onClick={ handleMenuItemClick ? (e) => handleClick(e, id, name) : undefined }>{ name }</li>
    );
}

export default MenuItem;