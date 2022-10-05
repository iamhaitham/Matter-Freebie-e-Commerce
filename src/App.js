import './App.css';
import Header from './shared/Header/Header';
import NavigationMenu from './shared/NavigationMenu/NavigationMenu';
import Footer from './shared/Footer/Footer';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <>
      <Header/>
      <NavigationMenu/>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
