import Table from 'react-bootstrap/Table';
import useFetch from '../../../hooks/useFetch';

const Products = () => {
  const productsFetch = useFetch('http://localhost:3400/api/product');
  return (
    <section>
      <div className="d-flex justify-content-between py-4">
        <h2 className="fw-bold">Productos</h2>
        <button type="button" className="btn btn-dark fw-bold fs-5 rounded-0"><i className="bi bi-plus-lg" ></i> Agregar Producto</button>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between pb-2 py-3">
        {(productsFetch.data?.products.length === 0) ? <h3 className="fs-4 mb-3 mb-md-0 ps-1">No se encontraron productos.</h3> : <h3 className="fs-4 mb-3 mb-md-0 ps-1">{productsFetch.data?.products.length} Productos</h3>}
        <div>
          <form className="d-flex">
            <input className="form-control me-2 rounded-0" type="search" placeholder="Nombre del producto" />
            <button className="btn btn-dark text-white rounded-0"><i className="bi bi-search"></i></button>
          </form>
        </div>
      </div>   
      <Table responsive striped bordered hover>
        <thead className='table-dark'>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {productsFetch.data?.products.map(product => {
          return(
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td>${product.price}</td>
              <td>{(product.active === true) ? 'Habilitado' : 'Deshabilitado'}</td>
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

export default Products;