import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Layout from './Layout';
import ProductListing from './ProductListing/ProductListing.jsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route index element={ <Homepage/> }/>
                    <Route path='productslisting' element={ <ProductListing/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;