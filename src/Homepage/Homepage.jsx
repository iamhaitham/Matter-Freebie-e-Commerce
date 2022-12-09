import { lazy } from 'react';
import ClientsSection from './ClientsSection/ClientsSection';
import ExploreSection from './ExploreSection/ExploreSection';
import RecommendedVideosSection from './RecommendedVideosSection/RecommendedVideosSection';
import ShopSection from './ShopSection/ShopSection';
import AboutSection from './AboutSection/AboutSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import LazyLoad from '../shared/LazyLoad/LazyLoad';
const CarouselSection = lazy(() => import('./CarouselSection/CarouselSection'));
const LazyCarouselSection = LazyLoad(CarouselSection);

function Homepage() {
    return (
        <>
            <LazyCarouselSection/>
            <FeaturedSection/>
            <AboutSection/>
            <ExploreSection/>
            <ShopSection/>
            <RecommendedVideosSection/>
            <ClientsSection/>
        </>
    );
}

export default Homepage;