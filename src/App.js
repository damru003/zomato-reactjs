import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Homepage/Home';
import { Cart } from './components/Cartpage/Cart';
import { Order } from './components/Orderpage/Order';
import StoreContextProvider from './components/context/StoreContext';
import { Footer } from './components/Footer/Footer';
import { MenuPage } from './components/MenuPage/MenuPage';
import { AppDownloadpage  } from './components/AppDownloadpage/AppDownloadpage';

function App() {
  return (
    <>
      <BrowserRouter>
      <StoreContextProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='menu-page' element={<MenuPage/>}></Route>
          <Route path='app-download' element={<AppDownloadpage/>}></Route>
          <Route path='contact-us' element={<AppDownloadpage/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='order' element={<Order/>}></Route>
        </Routes>
      <Footer/>
      </StoreContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
