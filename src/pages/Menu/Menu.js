import { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import useFetch from '../../hooks/useFetch';
import CategoryGroup from '../../components/Menu/CategoryGroup/CategoryGroup';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoriesFetch = useFetch('category');
  const productsFetch = useFetch('product');

  return (
    <section className='container p-4'>
      <SyncLoader
        className='text-center'
        color='#5e5e61'
        loading={categoriesFetch?.loading}
        size={15}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
      {!categoriesFetch?.loading && <div className='d-flex flex-row justify-content-between'>
        <div className='btn-group shadow-sm mb-3' role='group'>
          {!categoriesFetch?.loading && <button className='btn btn-sm btn-outline-dark' type='button' onClick={() => setSelectedCategory(null)}>Todo</button>}
          {categoriesFetch?.data?.categories?.map(category => {
            return (
              <button key={category?.id} className='btn btn-sm btn-outline-dark rounded-0' type='button'
                onClick={() => setSelectedCategory(category)}>{category?.name}</button>
            );
          })}
        </div>
        <div>
          <form className='d-flex' role='search'>
            <input className='form-control shadow me-2' type='search' placeholder='Producto' aria-label='Search' />
              <button className='btn btn-outline-dark shadow' type='submit'>Buscar</button>
          </form>
        </div>
        <div>
          <button className='btn btn-dark shadow'><i className='bi bi-sort-alpha-down' /></button>
        </div>
      </div>}
      {!selectedCategory ? categoriesFetch?.data?.categories?.map(category => {
        return <CategoryGroup key={category?.id} category={category}
          products={productsFetch?.data?.products.filter(p => p.category?.id === category?.id)} />;
      })
        : <CategoryGroup key={selectedCategory.id}
          category={selectedCategory} products={productsFetch} />
      }
    </section>
  );
};

export default Menu;
