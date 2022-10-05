import styles from './Logo.module.css';

function Logo() {
    const { logo } = styles;

    return (
        <p className={ logo }>matter</p>
    );
}

export default Logo;