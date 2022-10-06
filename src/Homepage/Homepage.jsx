import ClientsSection from "./ClientsSection/ClientsSection";
import RecommendedVideosSection from "./RecommendedVideosSection/RecommendedVideosSection";
import ShopSection from "./ShopSection/ShopSection";

function Homepage() {
    return (
        <>
            <ShopSection/>
            <RecommendedVideosSection/>
            <ClientsSection/>
        </>
    );
}

export default Homepage;