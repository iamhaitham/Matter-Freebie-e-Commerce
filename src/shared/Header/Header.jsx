import styles from './Header.module.css';
import '../../index.css';

function Header() {
    const headerCss = {
        headerWrapper: `flex bg-mid-grey ${styles.header} align-items-center`,
        headerText: `white ${styles['margin-left-35%']}`
    };
    const { headerWrapper, headerText } = headerCss;

    return (
        <div className={ headerWrapper }>
            <p className={ headerText }>Free shipping for orders above USD 150</p>
        </div>
    );
}

export default Header;