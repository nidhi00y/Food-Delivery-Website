import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/HOME/Home';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Order/Order';
import { Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
