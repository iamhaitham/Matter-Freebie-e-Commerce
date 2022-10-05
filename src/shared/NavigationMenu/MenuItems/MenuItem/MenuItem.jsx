import styles from './MenuItem.module.css';

function MenuItem(props) {
    const listCss = {
        listItemWithArrow: `${ styles.listItemWithArrow }`,
        listItemWithoutArrow: `${ styles.listItemWithoutArrow }`
    };
    const { listItemWithArrow, listItemWithoutArrow } = listCss;

    const  { id, name, isArrowIncluded } = props;

    function chooseListItemStyle(isArrowIncluded) {
        return isArrowIncluded ? listItemWithArrow : listItemWithoutArrow;
    }

    return (
        <li key={ id } className={ chooseListItemStyle(isArrowIncluded) }>{ name }</li>
    );
}

export default MenuItem;