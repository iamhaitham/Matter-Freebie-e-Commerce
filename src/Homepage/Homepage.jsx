import ClientsSection from "./ClientsSection/ClientsSection";
import ExploreSection from "./ExploreSection/ExploreSection";
import RecommendedVideosSection from "./RecommendedVideosSection/RecommendedVideosSection";
import ShopSection from "./ShopSection/ShopSection";

function Homepage() {
    return (
        <>
            <ExploreSection/>
            <ShopSection/>
            <RecommendedVideosSection/>
            <ClientsSection/>
        </>
    );
}

export default Homepage;