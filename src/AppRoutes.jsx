import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Layout from './Layout';
import ProductListing from './ProductListing/ProductListing.jsx';
import Login from './Login/Login';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route index element={ <Homepage/> }/>
                    <Route path='shop' element={ <ProductListing/> }/>
                    <Route path='login' element={ <Login/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;