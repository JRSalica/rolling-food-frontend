import Table from 'react-bootstrap/Table';
import useFetch from '../../../hooks/useFetch';

const Categories = () => {
  const categoriesFetch = useFetch('category');
  return (
    <section>
      <div className='d-flex justify-content-between py-4'>
        <h2 className='fw-bold'>Categorias</h2>
        <button type='button' className='btn btn-dark fw-bold fs-5 rounded-0'><i className='bi bi-plus-lg' ></i> Agregar Categoria</button>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-between pb-2 py-3'>
        {(categoriesFetch?.data?.categories.length === 0) ? <h3 className='fs-4 mb-3 mb-md-0 ps-1'>No se encontraron categorias.</h3> : <h3 className='fs-4 mb-3 mb-md-0 ps-1'>{categoriesFetch.data?.categories.length} Categorias</h3>}
        <div>
          <form className='d-flex'>
            <input className='form-control rounded-0 me-2' type='search' placeholder='Categoria' />
            <button className='btn btn-dark text-white rounded-0'><i className='bi bi-search'></i></button>
          </form>
        </div>
      </div>
      <Table responsive striped bordered hover>
        <thead className='table-dark'>
          <tr>
            <th>Categoria</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriesFetch.data?.categories?.map(category => {
            return (
              <tr key={category.id}>
                <td className='col-5'>{category.name}</td>
                <td className='col-5'>{category.active.toString()}</td>
                <td className='col-2'>
                  <div className='d-flex justify-content-evenly'>
                    <button className='btn p-0'><i className='bi bi-pencil text-warning'></i></button>
                    <button className='btn p-0'><i className='bi bi-trash text-danger'></i></button>
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

export default Categories;
