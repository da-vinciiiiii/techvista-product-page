import React, { useState, useEffect } from 'react';
 HEAD
import BlogList from './BlogList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
=======
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://api.example.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
>>>>>>> 2c9f898a79b5ba1b8ecf874a1cfa059c37188d5e
  }, []);
  
  return (
    <div className="App">
 HEAD
      <h1>My Blog</h1>
      <BlogList posts={posts} />

      <h1>TechVista.io</h1>
      <ProductList products={products} />
2c9f898a79b5ba1b8ecf874a1cfa059c37188d5e
    </div>
  );
}

export default App;
