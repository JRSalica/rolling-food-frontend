import React from 'react';
import cardImage from '../../assets/food-card-img.jpg'

const CartItem = ({ product, addProduct, removeProduct }) => {

  const handleAdd = () => {
    addProduct(product);
  }

  const handleRemove = () => {
    removeProduct(product);
  }

  return (
      <li className='cart-item border border-opacity-100 p-3 my-2'>
        <div className='d-flex'>
          <div className='col-1 text-center'>
            <img className='w-75 mt-2' src={cardImage} alt='cart item' />
          </div>
          <div className='d-flex flex-column col-11'>
            <div className='d-flex justify-content-between'>
              <h3 className='fs-5'>{product.name} x{product.quantity}</h3>
              <div className='d-flex'>
                <p className='px-3'>Subtotal: ${product.totalPrice}</p>
                <button className='btn btn-dark me-2' onClick={handleAdd}><i className="bi bi-bag-plus"></i></button>
                <button className='btn btn-danger' onClick={handleRemove}><i className="bi bi-bag-dash"></i></button>
              </div>
            </div>
            <p className='text-muted'>{product.description}</p>
          </div>

        </div>
      </li>
  );
};

export default CartItem;