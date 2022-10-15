/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsTable from './ProductsTable';
import DeleteProduct from './DeleteProduct';
import useFetch from '../../../hooks/useFetch';
import AddProduct from './AddProduct';
import ModifyProduct from './ModifyProduct';
import axiosConfig from '../../../config/axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const productsFetch = useFetch('product');
  const categoriesFetch = useFetch('category');

  const hideAdd = () => setShowAdd(false);
  const openAdd = () => setShowAdd(true);

  const hideUpdate = () => setShowUpdate(false);
  const openUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdate(true);
  };

  const hideDelete = () => setShowDelete(false);
  const openDelete = (product) => {
    setSelectedProduct(product);
    setShowDelete(true);
  };

  const addProduct = async (productData) => {
    const { data: { newProduct } } = await axiosConfig.post('product/', productData);
    let newProducts = products;
    newProducts = [...newProducts, newProduct];
    setProducts(newProducts);
    hideAdd();
  };

  const updateProduct = async (productData) => {
    const { data: { updatedProduct } } = await axios.put('http://localhost:3400/api/product/'
      .concat(selectedProduct._id), productData);
    const newProducts = products;
    const index = newProducts.findIndex(product => product._id === updatedProduct._id);
    newProducts[index] = updatedProduct;
    setProducts(newProducts);
    hideUpdate();
  };

  const deleteProduct = async () => {
    const { data: { deletedProduct } } = await axios.delete('http://localhost:3400/api/product/'.concat(selectedProduct._id));
    const newProducts = products.filter(product => product._id !== deletedProduct._id);
    setProducts(newProducts);
    hideDelete();
  };

  useEffect(() => {
    setProducts(productsFetch.data?.products);
  }, [productsFetch]);

  return (
    <section>
      <div className='d-flex justify-content-between py-4'>
        <h2 className='fw-bold'>Productos</h2>
        <button type='button' className='btn btn-dark fw-bold fs-5 rounded-0' onClick={openAdd}><i className='bi bi-plus-lg' ></i>Agregar Producto</button>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-between pb-2 py-3'>
        {(products?.length === 0) ? <h3 className='fs-4 mb-3 mb-md-0 ps-1'>No se encontraron productos.</h3> : <h3 className='fs-4 mb-3 mb-md-0 ps-1'>{products?.length} Productos</h3>}
        <div>
          <form className='d-flex'>
            <input className='form-control me-2 rounded-0' type='search' placeholder='Nombre del producto' />
            <button className='btn btn-dark text-white rounded-0'><i className='bi bi-search'></i></button>
          </form>
        </div>
      </div>
      <ProductsTable products={products} openUpdate={openUpdate}
        openDelete={openDelete} />
      <AddProduct showAdd={showAdd} hideAdd={hideAdd}
        selectedProduct={selectedProduct} addProduct={addProduct}
        categoriesFetch={categoriesFetch} />
      <ModifyProduct showUpdate={showUpdate} hideUpdate={hideUpdate}
        selectedProduct={selectedProduct} updateProduct={updateProduct}
        categoriesFetch={categoriesFetch} />
      <DeleteProduct showDelete={showDelete} hideDelete={hideDelete}
        selectedProduct={selectedProduct} deleteProduct={deleteProduct} />
    </section>
  );
};

export default Products;
