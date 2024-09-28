import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://api.example.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div className="App">
      <h1>TechVista.io</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
