import Image from '../shared/Image/Image';
import QuickViewHeader from './QuickViewHeader/QuickViewHeader';
import QuickViewMinis from './QuickViewMinis/QuickViewMinis';
import QuickViewDetails from './QuickViewDetails/QuickViewDetails';
import styles from './QuickView.module.css';
import Button from '../shared/Button/Button';

function QuickView({ 
    entity, 
    onCloseClick, 
    onMiniImageClick, 
    defaultMiniImage, 
    customCss 
}) {
    const { mainImageStyles, quickViewWrapperStyles, viewFullProductButtonStyles } = styles;

    const { id, description, miniImages } = entity;

    return (
        <div className={ quickViewWrapperStyles }>
            <div className={ customCss }>
                <QuickViewHeader title={ description }
                                 handleCloseClick={ onCloseClick }/>
                <div className='flex'>
                    <QuickViewMinis entityId={ id }
                                    minis={ miniImages }
                                    handleMiniImageClick={ onMiniImageClick }
                                    defaultMiniImage={ defaultMiniImage }/>
                    <Image src={ defaultMiniImage.src } 
                           alt={ defaultMiniImage.alt } 
                           imageCss={ mainImageStyles }/>
                    <QuickViewDetails featuredEntity={ entity }/>
                </div>
                <Button content='View Full product Details'
                        customButtonCss={ viewFullProductButtonStyles }/>
            </div>
        </div>
    );
}

export default QuickView;