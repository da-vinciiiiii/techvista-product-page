import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
