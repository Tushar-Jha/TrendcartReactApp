import React from 'react';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ShoppingCart from './pages/ShoppingCart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route exact path='/products/:categroy' element={<ProductList/>}/>
            <Route exact path='/product' element={<Product/>}/>
            <Route exact path='/cart' element={<ShoppingCart/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>

          </Routes>
        </Router> 
  );
}

export default App;
