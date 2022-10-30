import ProductCard from '../ProductCards/ProductCard';

const CategoryGroup = ({ category, products }) => {
  return (
    <section className='category-group-menu py-3 mb-3'>
      <div className='d-flex border-bottom border-dark mb-3'>
        <h2 className='fs-3 text-dark p-2 pb-0'>{category?.name}</h2>
      </div>
      <div className='row row-cols-4 pb-md-4'>
        {products?.length > 0
          ? (products.map(product => <ProductCard key={product.id} product={product} />))
          : (<p className='ms-2 mt-2'>No hay productos para esta categoria.</p>)}
      </div>
    </section>
  );
};

export default CategoryGroup;
