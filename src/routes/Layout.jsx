import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import NavigationMenu from "../shared/NavigationMenu/NavigationMenu";

function Layout() {
    return (
        <>
            <Header/>
            <NavigationMenu/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;