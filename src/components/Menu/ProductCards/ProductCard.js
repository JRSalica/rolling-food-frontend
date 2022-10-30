import Tippy from '@tippyjs/react';
import useCart from '../../../hooks/useCart';
import cardImage from '../../../assets/food-card-img.jpg';

const ProductCard = ({ product }) => {
  const { order, addProduct, removeProduct } = useCart();

  return (
    <div className='col'>
      <div className='card shadow h-100 mx-auto my-2'>
        <img src={cardImage} className='card-img-top' alt='food' />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.description}</p>
        </div>
        <div className='card-footer d-flex justify-content-between align-items-center'>
          <p className='card-text fw-bold mb-0'>$ {product.price}</p>
          {(order.products.find(p => p.id === product.id)) ? <Tippy content='Quitar del carrito'><button className='btn btn-light border-1 border-dark rounded-0' onClick={() => removeProduct(product)}><i className='bi bi-bag-dash' /></button></Tippy>
            : <Tippy content='Agregar al carrito'><button className='btn btn-dark rounded-0 shadow' onClick={() => addProduct(product)}><i className='bi bi-bag-plus' /></button></Tippy>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
