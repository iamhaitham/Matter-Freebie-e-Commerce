import { useContext } from "react";
import { FeaturedSectionContext } from "../../services/contexts";
import Icon from "../../shared/Icon/Icon";
import styles from './QuickViewHeader.module.css';

function QuickViewHeader() {
    const { 
        quickViewHeaderStyles, 
        iconStyles, 
        titleStyles 
    } = styles;
    const { handleQuickViewCloseClick, featuredEntity } = useContext(FeaturedSectionContext);

    return (
        <div className={ quickViewHeaderStyles }>
            <p className={ titleStyles }>{ featuredEntity.description }</p>
            <Icon src='/icons/close-icon.png' 
                  alt='Close icon' 
                  iconCss={ iconStyles }
                  handleClick={ handleQuickViewCloseClick }/>
        </div>
    );
}

export default QuickViewHeader;