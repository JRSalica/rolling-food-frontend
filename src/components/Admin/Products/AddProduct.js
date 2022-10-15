/* eslint-disable no-underscore-dangle */
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProduct = ({
  showAdd, hideAdd, addProduct, categoriesFetch,
}) => {
  const handleAdd = (ev) => {
    ev.preventDefault();
    const dataElements = ev.target.elements;
    const productData = {
      name: dataElements.productName.value,
      description: dataElements.productDescription.value,
      price: dataElements.productPrice.value,
      category: dataElements.productCategory.value,
      active: dataElements.productActive.value,
    };
    console.log(productData);
    addProduct(productData);
  };

  return (
    <Modal
      show={showAdd}
      onHide={hideAdd}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo producto.</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleAdd}>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='productName'>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese el nombre' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='productDescription'>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese la descripcion' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='productPrice'>
            <Form.Label>Precio:</Form.Label>
            <Form.Control type='number' placeholder='Ingrese el precio' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='productCategory'>
            <Form.Label>Categoria:</Form.Label>
            <Form.Select aria-label='Seleccione la categoria'>
              {categoriesFetch.data?.categories.map(category => <option key={category._id}
              value={category._id}>{category.name}</option>)}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='productActive'>
            <Form.Label>Estado:</Form.Label>
            <Form.Select aria-label='Seleccion el estado'>
              <option value={true}>Habilitado</option>
              <option value={false}>Deshabilitado</option>
            </Form.Select>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' type='submit'>Agregar</Button>
          <Button variant='outline-secondary' onClick={() => hideAdd()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddProduct;
