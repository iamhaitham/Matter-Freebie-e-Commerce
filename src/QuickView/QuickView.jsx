import Image from '../shared/Image/Image';
import QuickViewHeader from './QuickViewHeader/QuickViewHeader';
import QuickViewMinis from './QuickViewMinis/QuickViewMinis';
import QuickViewDetails from './QuickViewDetails/QuickViewDetails';
import styles from './QuickView.module.css';
import Button from '../shared/Button/Button';

function QuickView({ 
    defaultMiniImage, 
    customCss 
}) {
    const { 
        mainImageStyles, 
        quickViewWrapperStyles, 
        viewFullProductButtonStyles 
    } = styles;

    return (
        <div className={ quickViewWrapperStyles }>
            <div className={ customCss }>
                <QuickViewHeader/>
                <div className='flex'>
                    <QuickViewMinis defaultMiniImage={ defaultMiniImage }/>
                    <Image src={ defaultMiniImage.src } 
                           alt={ defaultMiniImage.alt } 
                           imageCss={ mainImageStyles }/>
                    <QuickViewDetails/>
                </div>
                <Button content='View Full product Details'
                        customButtonCss={ viewFullProductButtonStyles }/>
            </div>
        </div>
    );
}

export default QuickView;