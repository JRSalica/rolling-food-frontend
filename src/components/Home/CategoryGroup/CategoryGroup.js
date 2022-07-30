import React from 'react';
import ProductCard from '../ProductCards/ProductCard';

const CategoryGroup = ({ category, products}) => {
  return (
    <section className='category-group-menu py-3'>
      <h2>{category.name}</h2>
      <div className='row row-cols-4 pb-md-4"'>
        {products.map(product => (product.category._id === category._id) && (<ProductCard key={product._id} product={product} />))}
      </div>
    </section>
  );
};

export default CategoryGroup;