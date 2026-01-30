import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (

    <div >
    <div style={{ background: isDarkMode ? '#030303' : '#dbd5d5', color: isDarkMode ? '#dbd5d5' : '#000' }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <label htmlFor="category-filter">Filter by Category: </label>

      <select id="category-filter" onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option> 
      </select>

      <ProductList selectedCategory={category} onAddToCart={addToCart} cartItems={Cart}  />
      <Cart cartItems={cart} />
    </div>

    </div>

  );
};

export default App;