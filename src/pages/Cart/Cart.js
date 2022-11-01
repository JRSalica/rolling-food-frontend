import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
  const navigate = useNavigate();
  const {
    order, addProduct, removeProduct, clearOrder,
  } = useCart();
  return (
    <main className='container-fluid px-0 d-flex flex-column align-items-center'>
      <section className='cart-section container p-4'>
        {order?.products?.length !== 0 ? (
          <>
            <h2 className='fs-2 mb-3'>Tu orden: </h2>
            <div className='d-flex flex-column-reverse flex-lg-row justify-content-around'>
              <div className='col-12 col-lg-8 cart-list'>
                <ul className='list-unstyled'>
                  {order?.products.map(product => {
                    return <CartItem key={product?.id} product={product}
                      addProduct={addProduct} removeProduct={removeProduct} />;
                  })}
                </ul>
              </div>
              <div className='col-12 col-lg-3 cart-checkout mb-5 mb-lg-0'>
                <div className='card'>
                  <div className='card-header'>Resumen</div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Cantidad de productos: {order?.products?.length}</li>
                    <li className='list-group-item'>Envio: $100</li>
                    <li className='list-group-item'>Total a pagar: ${order?.amount}</li>
                  </ul>
                  <div className='card-footer d-flex justify-content-around'>
                    <button className='btn btn-dark rounded-0 me-2'>Pagar</button>
                    <button className='btn btn-outline-danger rounded-0' onClick={clearOrder}>Vaciar</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (<div className='d-flex flex-column justify-content-center align-items-center border border-dark border-opacity-50 border-1 rounded-1 shadow py-4 my-4'>
              <h2 className='text-center mt-5'>No tienes nada para comprar.</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-cart-x mt-5" viewBox="0 0 16 16">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <button className='btn btn-dark btn-lg rounded-0 shadow my-5' onClick={() => navigate('/menu')}>Ir al Menu</button>
            </div>)}
      </section>
    </main>
  );
};

export default Cart;
