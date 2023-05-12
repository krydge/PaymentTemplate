import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Success from './pages/Succcess';
import Store from './pages/Store';
import CartProvider from './CartContext';


function App() {
  return (
    <CartProvider>
      <Container>
        <NavBarComponent></NavBarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />}></Route>
            <Route path="success" element={<Success />}></Route>
            <Route path="cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
