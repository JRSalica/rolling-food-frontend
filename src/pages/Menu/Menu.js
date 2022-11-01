import { useEffect, useMemo, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import classNames from 'classnames';
import useFetch from '../../hooks/useFetch';
import { CategoryGroup, OptionsBar } from '../../components/Menu';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesFetch = useFetch('category');
  const productsFetch = useFetch('product');

  const filteredProducts = useMemo(() => {
    return productsFetch?.data?.products?.filter(product => product.name.toLowerCase()
      .includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  useEffect(() => {
    if (!productsFetch?.loading) {
      setProducts(productsFetch?.data?.products);
    }
  }, [productsFetch]);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <main className={classNames('container-fluid px-0 d-flex', {
      'align-items-start': !categoriesFetch?.loading,
      'align-items-center': categoriesFetch?.loading,
    })}>
      <section className='container p-4'>
        <SyncLoader
          className='text-center'
          color='#5e5e61'
          loading={categoriesFetch?.loading || productsFetch?.loading}
          size={30}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
        {(!categoriesFetch?.loading && !productsFetch?.loading)
          && <OptionsBar categories={categoriesFetch} products={productsFetch}
            setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} />}
        {!selectedCategory ? categoriesFetch?.data?.categories?.map(category => {
          return <CategoryGroup key={category?.id} category={category}
            products={products?.filter(p => p.category?.id === category?.id)} />;
        })
          : (<CategoryGroup key={selectedCategory.id}
            category={selectedCategory} products={products
              ?.filter(p => p.category?.id === selectedCategory?.id)} />)}
      </section>
    </main>
  );
};

export default Menu;
