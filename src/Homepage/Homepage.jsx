import ClientsSection from "./ClientsSection/ClientsSection";
import RecommendedVideosSection from "./RecommendedVideosSection/RecommendedVideosSection";

function Homepage() {
    return (
        <>
            <RecommendedVideosSection/>
            <ClientsSection/>
        </>
    );
}

export default Homepage;