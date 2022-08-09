import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModifyProduct = ({ showUpdate, hideUpdate, selectedProduct, updateProduct, categoriesFetch }) => {
  const handleUpdate = (ev) =>{
    ev.preventDefault();
    let dataElements = ev.target.elements;
    const productData = {
      name: dataElements.productName.value,
      description: dataElements.productDescription.value,
      price: dataElements.productPrice.value,
      category: dataElements.productCategory.value,
      active: dataElements.productActive.value,
    }
    updateProduct(productData);
  }

  return (
    <Modal
    show={showUpdate}
    onHide={hideUpdate}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Modificar producto: {selectedProduct.name}</Modal.Title>
    </Modal.Header>
    <Form onSubmit={handleUpdate}>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" defaultValue={selectedProduct.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Descripcion:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la descripcion" defaultValue={selectedProduct.description} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Precio:</Form.Label>
          <Form.Control type="number" placeholder="Ingrese el precio" defaultValue={selectedProduct.price} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select aria-label="Seleccione la categoria">
            {categoriesFetch.data?.categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="productActive">
          <Form.Label>Estado:</Form.Label>
          <Form.Select aria-label="Seleccion el estado">
            <option value={true}>Habilitado</option>
            <option value={false}>Deshabilitado</option>
          </Form.Select>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" type='submit'>Modificar</Button>
        <Button variant="outline-secondary" onClick={() => hideUpdate()}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
  );
};

export default ModifyProduct;