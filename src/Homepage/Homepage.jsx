import ClientsSection from "./ClientsSection/ClientsSection";
import ExploreSection from "./ExploreSection/ExploreSection";
import RecommendedVideosSection from "./RecommendedVideosSection/RecommendedVideosSection";
import ShopSection from "./ShopSection/ShopSection";
import AboutSection from './AboutSection/AboutSection';
import FeaturedSection from "./FeaturedSection/FeaturedSection";

function Homepage() {
    return (
        <>
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