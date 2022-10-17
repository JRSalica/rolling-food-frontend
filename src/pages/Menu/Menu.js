import useFetch from '../../hooks/useFetch';
import CategoryGroup from '../../components/Menu/CategoryGroup/CategoryGroup';

const Menu = () => {
  const categoriesFetch = useFetch('category');
  const productsFetch = useFetch('product');
  return (
    <section className='container p-4'>
      {categoriesFetch?.data?.categories?.map(category => {
        return (
          <CategoryGroup key={category?.id} category={category} products={productsFetch} />
        );
      })}
    </section>
  );
};

export default Menu;
