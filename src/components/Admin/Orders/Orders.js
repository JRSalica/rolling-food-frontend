import Table from 'react-bootstrap/Table';
import useFetch from '../../../hooks/useFetch';

const Orders = () => {
  const ordersFetch = useFetch('order');
  return (
    <section>
      <div className="d-flex justify-content-between py-4">
        <h2 className="fw-bold">Ordenes</h2>
      </div>
      <Table responsive striped bordered hover>
        <thead className='table-dark'>
          <tr>
            <th>Creada</th>
            <th>Usuario</th>
            <th>Cantidad de productos</th>
            <th>Precio total</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {ordersFetch.data?.orders.map(order => {
          return(
            <tr key={order._id}>
              <td>{order.createdAt}</td>
              <td>{order.user.fullName}</td>
              <td>{order.products.length}</td>
              <td>${order.amount}</td>
              <td>{order.amount}</td>
              <td>
                <div className="d-flex justify-content-evenly">
                  <button className="btn p-0"><i className="bi bi-pencil text-warning"></i></button>
                  <button className="btn p-0"><i className="bi bi-trash text-danger"></i></button>
                </div>
              </td>
            </tr>
          );
        })}
        </tbody>
      </Table>
    </section>
  );
};

export default Orders;