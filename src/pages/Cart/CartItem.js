import React from 'react';
import cardImage from '../../assets/food-card-img.jpg';

const CartItem = ({ product, addProduct, removeProduct }) => {
  const handleAdd = () => {
    addProduct(product);
  };

  const handleRemove = () => {
    removeProduct(product);
  };

  return (
      <li className='cart-item border border-dark border-opacity-25 border-1 rounded-1 p-1 p-md-4 my-2'>
        <div className='d-flex'>
          <div className='col-1 text-center'>
            <img className='w-75 mt-F2' src={cardImage} alt='cart item' />
          </div>
          <div className='d-flex flex-column col-11'>
            <div className='d-flex justify-content-between'>
              <div>
                <h3 className='fs-5'>{product.name} x{product.quantity}</h3>
                <p className='text-muted pt-3 pt-md-0'>{product.description}</p>
              </div>
              <div className='d-lg-flex align-items-baseline'>
                <p className='px-3 text-center'>Subtotal: ${product.totalPrice}</p>
                <button className='btn btn-dark rounded-0 me-2 float-end ' onClick={handleAdd}><i className='bi bi-bag-plus'></i></button>
                <button className='btn btn-outline-danger rounded-0 me-2 me-md-0 float-end' onClick={handleRemove}><i className='bi bi-bag-dash'></i></button>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};

export default CartItem;
