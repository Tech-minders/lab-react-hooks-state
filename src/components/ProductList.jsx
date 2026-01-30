import React from 'react';
import ProductCard from './ProductCard';

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true }
];

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filtered = sampleProducts.filter(p => 
    selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filtered.length === 0 ? (
        <p>No products available</p>
      ) : (
        filtered.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;

