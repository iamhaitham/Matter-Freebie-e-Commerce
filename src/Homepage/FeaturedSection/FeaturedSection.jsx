import { useReducer, lazy } from 'react';
import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Button from '../../shared/Button/Button';
import styles from './FeaturedSection.module.css';
import { featuredEntities } from '../../entities';
import { 
    featuredSectionReducer, 
    featuredSectionReducerInitialState,
    featuredSectionReducerTypes
 } from '../../services/reducers';
import { FeaturedSectionContext } from '../../services/contexts';
import LazyLoad from '../../shared/LazyLoad/LazyLoad';
const QuickView = lazy(() => import('../../QuickView/QuickView'));
const LazyQuickView= LazyLoad(QuickView);

function FeaturedSection() {
    const { 
        buttonStyles, 
        featuredHoveredImagesStyles, 
        featuredSecitonStyles, 
        quickViewStyles,
        imageStyles, 
        imageContainerStyles 
    } = styles;
    const featuredsectionTitle = 'Featured';
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;
    const [state, dispatch] = useReducer(featuredSectionReducer, featuredSectionReducerInitialState);
    const { 
        QuickView_Closed,
        QuickView_Button_MouseOver,
        QuickView_Button_MouseOut,
        QuickView_Item_Chosen,
        QuickView_MiniImage_Chosen
     } = featuredSectionReducerTypes;

    function handleMouseOver(_, id) {
        dispatch({ 
            type: QuickView_Button_MouseOver,
            id, 
            isQuickView: true 
        });
    }

    function handleMouseOut(_, id) {
        dispatch({ 
            type: QuickView_Button_MouseOut,
            id, 
            isQuickView: false 
        });
    }

    function handleQuickViewClick(_, id) {
        dispatch({ 
            type: QuickView_Item_Chosen,
            quickViewItem: featuredEntities[id - 1]
        });
    }

    function handleMiniImageClick(_, entityId, miniImageId) {
        dispatch({
            type: QuickView_MiniImage_Chosen,
            miniImage: featuredEntities[entityId - 1].miniImages[miniImageId - 1]
        });
    }

    function handleQuickViewCloseClick() {
        dispatch({
            type: QuickView_Closed
        });
    }

    function showDescriptionAndPrice(description, price) {
        return (
            <>
                <p>{ description }</p>
                <p>${ price }</p>
            </>
        );
    }

    function isButtonVisible(id) {
        if (state.quickViewButton.id === id && state.quickViewButton.isQuickView) {
            return (
                <Button id={ id }
                        content='QUICK VIEW' 
                        customButtonCss={ buttonCss }
                        handleClick={ handleQuickViewClick }/>
            );
        };
    }

    function isNewLabelVisible(isNew) {
        if (isNew) {
            return (
                <span>NEW</span>
            );
        };
    }

    const featuredItems = featuredEntities.map(entity => {
        const { 
            id, 
            src, 
            alt, 
            description, 
            price, 
            isNew 
        } = entity;

        return (
            <div key={ id }
                 onMouseOver={ (e) => handleMouseOver(e, id) } 
                 onMouseOut={ (e) => handleMouseOut(e, id) }
                 className={ featuredHoveredImagesStyles }>
                <Image 
                    id={ id }
                    src={ src } 
                    alt={ alt }
                    imageCss={ imageStyles }>
                    { showDescriptionAndPrice(description, price) }
                    { isNewLabelVisible(isNew) }
                </Image>
                { isButtonVisible(id) }
            </div>
        );
    });

    function shouldOpenQuickView() {
        if (!!state.quickViewItem.id) {
            return (
                <LazyQuickView customCss={ quickViewStyles } 
                               entity={ state.quickViewItem } 
                               defaultMiniImage={ state.miniImage }/>
            );
        } else {
            return (
                <Section customCss={ featuredSecitonStyles }>
                    <SectionTitle content={ featuredsectionTitle }/>
                    <ImageContainer customCss={ imageContainerStyles }>
                        { featuredItems }
                    </ImageContainer>
                </Section>
            );
        }
    }

    const featuredSectionContextProviderValue = {
        handleMiniImageClick: handleMiniImageClick,
        handleQuickViewCloseClick: handleQuickViewCloseClick,
        featuredEntity: state.quickViewItem
    };

    return (
        <FeaturedSectionContext.Provider value={ featuredSectionContextProviderValue }>
            { shouldOpenQuickView() }
        </FeaturedSectionContext.Provider>
    );
}

export default FeaturedSection;