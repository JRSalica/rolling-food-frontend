import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import CategoryGroup from '../../components/Home/CategoryGroup/CategoryGroup';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const { token } = useAuth();
  const URLC = 'http://localhost:3400/api/category'
  const URLP = 'http://localhost:3400/api/product'
  const AuthStr = 'Bearer '.concat(token);

  const getCategories = async () =>{
    const { data } = await axios.get(URLC, { headers: { Authorization: AuthStr } });
    setCategories(data.categories);
  };

  const getProducts = async () =>{
    const { data } = await axios.get(URLP, { headers: { Authorization: AuthStr } });
    setProducts(data.products);
  };

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

export default Home;