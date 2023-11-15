// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/home/layout'; 
import HomePage from './components/home/index'; 
import Sec2 from './components/home/section2'; 
import Sec3 from './components/home/section3'; 
import CartBtn from './components/home/cartIcon/cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <Sec2 />
            </Layout>
          }
        />
		<Route path="/cart" element={<CartBtn />}/>
		<Route
          path="/products"
          element={
            <Layout>
              <Sec3 />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
