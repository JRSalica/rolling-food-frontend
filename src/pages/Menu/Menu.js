import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';
import CategoryGroup from '../../components/Menu/CategoryGroup/CategoryGroup';
import axios from 'axios';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { token } = useAuth();
  const AuthStr = 'Bearer '.concat(token);

  const getCategories = async () =>{
    let { data } = await axios('http://localhost:3400/api/category', {headers: {'Authorization': AuthStr}});
    setCategories(data.categories);
  }
  const getProducts = async () =>{
    let productsResponse = await axios('http://localhost:3400/api/product', {headers: {'Authorization': AuthStr}});
    setProducts(productsResponse.data.products);
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <main className='container p-4'>
      <section>
        {categories.map(category => {
          return(
              <CategoryGroup key={category._id} category={category} products={products} />
          );
        })}
      </section>
    </main>
  );
};

export default Menu;