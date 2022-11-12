import styles from './MenuItem.module.css';

function MenuItem({ 
    id, 
    name, 
    isArrowIncluded, 
    handleMenuItemClick 
}) {
    const listCss = {
        listItemWithArrow: `${ styles.listItemWithArrow }`,
        listItemWithoutArrow: `${ styles.listItemWithoutArrow }`
    };
    const { listItemWithArrow, listItemWithoutArrow } = listCss;

    function chooseListItemStyle(isArrowIncluded) {
        return isArrowIncluded ? listItemWithArrow : listItemWithoutArrow;
    }

    return (
        <li key={ id } 
            className={ chooseListItemStyle(isArrowIncluded) }
            onClick={ handleMenuItemClick ? (e) => handleMenuItemClick(e, id) : undefined }>{ name }</li>
    );
}

export default MenuItem;