import './App.css';
import Header from './shared/Header/Header';
import NavigationMenu from './shared/NavigationMenu/NavigationMenu';
import Footer from './shared/Footer/Footer';
// import Homepage from './Homepage/Homepage';
import ProductListing from './ProductListing/ProductListing.jsx';

function App() {
  return (
    <>
      <Header/>
      <NavigationMenu/>
      {/* <Homepage/> */}
      <ProductListing/>
      <Footer/>
    </>
  );
}

export default App;
