import { Navigate, Outlet } from "react-router";
import useLocalStorageState from "use-local-storage-state";

const PrivateRoute = () => {
    const [userToken] = useLocalStorageState('userToken');

    return (
        userToken ? <Navigate to='/'/> : <Outlet/>
    );
}

export default PrivateRoute;