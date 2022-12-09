import { Suspense } from "react";
import CircularLoader from "../CircularProgress/CircularLoader";

const LazyLoadedComponent = ({ Element }) => {
    return (
        <Suspense fallback={ <CircularLoader/> }>
            <Element/>
        </Suspense>
    );
}

export default LazyLoadedComponent;