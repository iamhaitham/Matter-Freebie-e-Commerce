import styles from './MenuItem.module.css';

function MenuItem({ 
    id, 
    name, 
    isArrowIncluded, 
    handleMenuItemClick,
    activeMenuItemId,
    setActiveMenuItemId
}) {
    const listCss = {
        listItemWithArrow: `${ styles.listItemWithArrow }`,
        listItemWithoutArrow: `${ styles.listItemWithoutArrow }`,
        activeMenuItem: `${ styles.activeMenuItem }`
        
    };
    const { listItemWithArrow, listItemWithoutArrow, activeMenuItem } = listCss;

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

    function handleClick(e, id) {
        handleMenuItemClick(e, id);
        setActiveMenuItemId = setActiveMenuItemId ? setActiveMenuItemId(id) : undefined;
    }

    return (
        <li key={ id } 
            className={ chooseListItemStyle(isArrowIncluded, id) }
            onClick={ handleMenuItemClick ? (e) => handleClick(e, id) : undefined }>{ name }</li>
    );
}

export default MenuItem;