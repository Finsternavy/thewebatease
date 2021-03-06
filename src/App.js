import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Admin from './components/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStoreProvider from './context/globalStoreProvider';

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>

        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>

      </GlobalStoreProvider>
    </div>
  );
}

export default App;
