import useCart from '../../../hooks/useCart';
import cardImage from '../../../assets/food-card-img.jpg';

const ProductCard = ({ product }) => {
  const { addProduct, removeProduct } = useCart();

  const handleAdd = () => {
    addProduct(product);
  };
  const handleRemove = () => {
    removeProduct(product);
  };

  return (
    <div className='col'>
      <div className='card h-100 mx-auto my-2'>
        <img src={cardImage} className='card-img-top' alt='food' />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.description}</p>
          <p className='card-text'>${product.price}</p>
        </div>
        <div className='card-footer d-flex justify-content-around'>
          <button className='btn btn-primary' onClick={handleAdd}>+</button>
          <button className='btn btn-primary' onClick={handleRemove}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
