import useFetch from '../../hooks/useFetch';
import CategoryGroup from '../../components/Menu/CategoryGroup/CategoryGroup';

const Menu = () => {
  const categoriesFetch = useFetch('http://localhost:3400/api/category');
  const productsFetch = useFetch('http://localhost:3400/api/product');
  return (
    <main className='container p-4'>
      <section>
        {categoriesFetch.data?.categories.map(category => {
          return(
              <CategoryGroup key={category._id} category={category} products={productsFetch} />
          );
        })}
      </section>
    </main>
  );
};

export default Menu;