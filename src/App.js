import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { OrderRecieved } from './components/OrderRecieved';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddItemsToCart = (item) => {
    setCart([...cart, item])
}
  return (
    <div className="App">
        <Router>
          <NavBar />
            <Routes>
              <Route path="/" exact element={<Home />}/>
              <Route path="/shop" element={<Shop addItem={handleAddItemsToCart}/>}>
                <Route path=":type" element={<Shop />}/>
              </Route>
              <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
              <Route path="/recieved" element={<OrderRecieved />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
