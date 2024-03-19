import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/website/Home';
import Footer from './components/Footer';
import Cart from './pages/website/Cart';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Menu from './pages/website/Menu';
import About from './pages/website/About';
import Contact from './pages/website/Contact';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
