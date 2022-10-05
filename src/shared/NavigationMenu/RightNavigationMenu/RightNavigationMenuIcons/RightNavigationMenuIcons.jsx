import Icon from '../../../Icon/Icon';
import styles from './RightNavigationMenuIcons.module.css';

function RightNavigationMenuIcons() {
    const { iconStyles } = styles;

    const iconsEntity = [
        { id: 1, src: 'icons/search-icon.png', alt: 'Search Icon' },
        { id: 2, src: 'icons/heart-icon.png', alt: 'Heart Icon' },
        { id: 3, src: 'icons/shopping-bag-icon.png', alt: 'Shopping Bag Icon' }
    ];
    const icons = iconsEntity.map(entity => {
        const { id, src, alt } = entity;
        
        return (
            <Icon key={ id } src={ src } alt={ alt } iconCss={ iconStyles }/>
        );
    });
    
    return (
        <div className='flex'>
            { icons }
        </div>
    );
}

export default RightNavigationMenuIcons;