import Icon from "../../shared/Icon/Icon";
import styles from './QuickViewHeader.module.css';

function QuickViewHeader({ title, handleCloseClick }) {
    const { quickViewHeaderStyles, iconStyles, titleStyles } = styles;

    return (
        <div className={ quickViewHeaderStyles }>
            <p className={ titleStyles }>{ title }</p>
            <Icon src='/icons/close-icon.png' 
                  alt='Close icon' 
                  iconCss={ iconStyles }
                  handleClick={ handleCloseClick }/>
        </div>
    );
}

export default QuickViewHeader;