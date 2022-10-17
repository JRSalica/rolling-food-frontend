import ProductCard from '../ProductCards/ProductCard';

const CategoryGroup = ({ category, products }) => {
  return (
    <section className='category-group-menu py-3'>
      <h2>{category?.name}</h2>
      <div className='row row-cols-4 pb-md-4"'>
        {products?.data?.products?.map(product => (product?.category?.id === category?.id)
          && (<ProductCard key={product?.id} product={product} />))}
      </div>
    </section>
  );
};

export default CategoryGroup;
