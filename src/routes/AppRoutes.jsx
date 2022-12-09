import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import LazyLoad from '../shared/LazyLoad/LazyLoad';
const Homepage = lazy(() => import('../Homepage/Homepage'));
const LazyHomePage = LazyLoad(Homepage);
const Login = lazy(() => import('../Login/Login'));
const LazyLogin = LazyLoad(Login);
const ProductListing = lazy(() => import('../ProductListing/ProductListing'));
const LazyProductListing = LazyLoad(ProductListing);

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route index element={ <LazyHomePage/> }/>
                    <Route path='shop' element={ <LazyProductListing/> }/>
                    <Route element={ <PrivateRoute/> }>
                        <Route path='login' element={ <LazyLogin/> }/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;