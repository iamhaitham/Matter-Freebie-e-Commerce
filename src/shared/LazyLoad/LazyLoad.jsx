import { Suspense } from "react";
import CircularLoader from "../CircularProgress/CircularLoader";

const LazyLoad = (Component) => ({ ...props }) => {
    return (
        <Suspense fallback={ <CircularLoader/> }>
            <Component { ...props }/>
        </Suspense>
    );
}

export default LazyLoad;