import Table from 'react-bootstrap/Table';

const ProductsTable = ({ products, openDelete, openUpdate }) => {
  return (
    <>
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
          {products?.map(product => {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category.name}</td>
                <td>${product.price}</td>
                <td>{(product.active === true) ? 'Habilitado' : 'Deshabilitado'}</td>
                <td>
                  <div className='d-flex justify-content-evenly'>
                    <button className='btn p-0' onClick={() => openUpdate(product)}><i className='bi bi-pencil text-warning'></i></button>
                    <button className='btn p-0' onClick={() => openDelete(product)}><i className='bi bi-trash text-danger'></i></button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProductsTable;
