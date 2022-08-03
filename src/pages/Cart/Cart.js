import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
  const { order, addProduct, removeProduct } = useCart();
  return (
    <main className='container p-4'>
      <section className='cart-section'>
        {order.products.length !== 0 ? (
          <>
            <h2 className='fs-2 mb-3'>Tu orden: </h2>
            <div className='d-flex justify-content-around'>
              <div className='col-8 cart-list'>
                <ul className='list-unstyled'>
                  {order.products.map(product => {
                    return <CartItem key={product._id} product={product} addProduct={addProduct} removeProduct={removeProduct}/>
                  })}
                </ul>
              </div>
              <div className="col-3 cart-checkout">
                <div className='card'>
                  <div className="card-header">Resumen</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cantidad de productos: {order.products.length}</li>
                    <li className="list-group-item">Envio: $100</li>
                    <li className="list-group-item">Total a pagar: ${order.amount}</li>
                  </ul>
                  <div className='card-footer d-flex justify-content-around'>
                    <button className='btn btn-success me-2'>Pagar</button>
                    <button className='btn btn-danger'>Vaciar</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : <h2 className=''>No tienes nada para comprar</h2>}
      </section>
    </main>
  );
};

export default Cart;