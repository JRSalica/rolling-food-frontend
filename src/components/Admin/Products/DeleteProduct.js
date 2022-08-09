import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteProduct = ({ showDelete, hideDelete, selectedProduct, deleteProduct }) => {
  return (
    <Modal
        show={showDelete}
        onHide={hideDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Esta a punto de eliminar el siguiente producto seleccionado:</p>
          <p>Producto: {selectedProduct.name}</p>
          <p>Desea continuar?</p> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteProduct(selectedProduct)}>Eliminar</Button>
          <Button variant="outline-secondary" onClick={() => hideDelete()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default DeleteProduct;