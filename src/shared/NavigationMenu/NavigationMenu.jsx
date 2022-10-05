import Logo from '../Logo/Logo';
import styles from './NavigationMenu.module.css';
import LeftNavigationMenu from './LeftNavigationMenu/LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu/RightNavigationMenu';

function NavigationMenu() {
    const { navigationMenu } = styles;
    const navigationMenuCss = {
        navigationMenuWrapper: `${ navigationMenu } justify-content-space-around`,
        leftNavigationMenuWrapper: `flex align-items-center`
    };
    const { navigationMenuWrapper, leftNavigationMenuWrapper } = navigationMenuCss;

    return (
        <div className={ navigationMenuWrapper }>
            <div className={ leftNavigationMenuWrapper }>
                <Logo/>
                <LeftNavigationMenu/>
            </div>
            <RightNavigationMenu/>
        </div>
    );
}

export default NavigationMenu;