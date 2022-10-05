import MenuItem from './MenuItem/MenuItem';
import styles from './MenuItems.module.css';

function MenuItems(props) {
    const listWrapper = `flex ${ styles.listWrapper }`;

    const { entities } = props;
    const items = entities.map(entity => {
        const { id, name, isArrowIncluded } = entity;

        return (
            <MenuItem key={ id } name={ name } isArrowIncluded={ isArrowIncluded }/>
        );
    });

    return (
        <ul className={ listWrapper }>
            { items }
        </ul>
    );
}

export default MenuItems;