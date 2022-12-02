import { useContext } from 'react';
import { NavigationMenuContext } from '../../../../services/contexts';
import styles from './MenuItem.module.css';

function MenuItem({ entity }) {
    const listCss = {
        listItemWithArrow: `${ styles.listItemWithArrow }`,
        listItemWithoutArrow: `${ styles.listItemWithoutArrow }`,
        activeMenuItem: `${ styles.activeMenuItem }`
        
    };
    const { listItemWithArrow, listItemWithoutArrow, activeMenuItem } = listCss;
    const { id, name, isArrowIncluded } = entity;
    const { handleMenuItemClick, navigationMenuState } = useContext(NavigationMenuContext);

    function chooseListItemStyle(isArrowIncluded, id) {
        let listItemStyle = ``;

        if (isArrowIncluded)
            listItemStyle = listItemStyle.concat(' ', listItemWithArrow);
        else
            listItemStyle = listItemStyle.concat(' ', listItemWithoutArrow);

        if (navigationMenuState.activeMenuItemId === id)
            listItemStyle = listItemStyle.concat(' ', activeMenuItem);

        return listItemStyle;
    }

    function handleClick(_, name) {
        handleMenuItemClick(name);
    }

    return (
        <li key={ id } 
            className={ chooseListItemStyle(isArrowIncluded, id) }
            onClick={ handleMenuItemClick ? (e) => handleClick(e, name) : undefined }>{ name }</li>
    );
}

export default MenuItem;