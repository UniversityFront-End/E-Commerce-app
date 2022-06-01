import React from 'react';
import Header from './assets/header/Header';
import Products from './assets/products/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './assets/products/DataProvider'
import Details from './assets/products/Details'
import Cart from './assets/products/Cart';
import About from './assets/pages/About';
import Index from './assets/pages/Index';
import Contact from './assets/pages/Contact';
import Footer from './assets/footer/Footer';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="index" element={ <Index /> } />
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="about" element={ <About /> } />
              <Route path="contact" element={ <Contact /> } />
              <Route path="cart" element={ <Cart /> } />
            </Routes>
          </section>

          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
