import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Footer from './components/footer';
import Catalog from './components/catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
