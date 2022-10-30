import Table from 'react-bootstrap/Table';
import useFetch from '../../../hooks/useFetch';

const Users = () => {
  const usersFetch = useFetch('user');
  return (
    <section>
      <div className='d-flex justify-content-between py-4'>
        <h2 className='fw-bold'>Usuarios</h2>
        <button type='button' className='btn btn-dark fw-bold fs-5 rounded-0'><i className='bi bi-plus-lg' ></i> Agregar Usuario</button>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-between pb-2 py-3'>
        {(usersFetch.data?.users?.length === 0) ? <h3 className='fs-4 mb-3 mb-md-0 ps-1'>No se encontraron usuarios.</h3> : <h3 className='fs-4 mb-3 mb-md-0 ps-1'>{usersFetch.data?.users?.length} Usuarios</h3>}
        <div>
          <form className='d-flex'>
            <input className='form-control me-2 rounded-0' type='search' placeholder='Email del usuario' />
            <button className='btn btn-dark text-white rounded-0'><i className='bi bi-search'></i></button>
          </form>
        </div>
      </div>
      <Table responsive striped bordered hover>
        <thead className='table-dark'>
          <tr>
            <th>Nombre completo</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usersFetch.data?.users?.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.active.toString()}</td>
                <td>{user.role}</td>
                <td>
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

export default Users;
