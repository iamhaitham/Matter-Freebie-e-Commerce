import MenuItem from './MenuItem/MenuItem';
import styles from './MenuItems.module.css';

function MenuItems({ 
    entities, 
    handleMenuItemClick,
    activeMenuItemId,
    setActiveMenuItemId
}) {
    const listWrapper = `flex ${ styles.listWrapper }`;

    const items = entities.map(entity => {
        const { id, name, isArrowIncluded } = entity;

        return (
            <MenuItem key={ id } 
                      id={ id }
                      name={ name } 
                      isArrowIncluded={ isArrowIncluded }
                      handleMenuItemClick={ handleMenuItemClick }
                      activeMenuItemId={ activeMenuItemId }
                      setActiveMenuItemId={ setActiveMenuItemId }/>
        );
    });

    return (
        <ul className={ listWrapper }>
            { items }
        </ul>
    );
}

export default MenuItems;