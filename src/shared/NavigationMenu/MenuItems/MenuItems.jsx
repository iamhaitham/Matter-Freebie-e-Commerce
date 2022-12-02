import MenuItem from './MenuItem/MenuItem';
import styles from './MenuItems.module.css';

function MenuItems({ 
    entities, 
    activeMenuItemId,
    setActiveMenuItemId
}) {
    const listWrapper = `flex ${ styles.listWrapper }`;

    const items = entities.map(entity => {

        return (
            <MenuItem key={ entity.id } 
                      entity={ entity }
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