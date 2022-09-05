import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavbarComponent';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
        <Route path='/:category_id' element={<Products />}></Route>
        <Route path='/product/:product_id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;