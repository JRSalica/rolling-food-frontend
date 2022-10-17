import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState(null);
  const { user } = useAuth();
  const location = useLocation();

  const calcTotal = products => {
    let total = 0;
    products.forEach(product => { total += product.totalPrice; });
    return total;
  };

  const loadOrderToStorage = (actualOrder) => {
    localStorage.setItem('order', JSON.stringify(actualOrder));
  };

  const loadOrderFromStorage = () => {
    setCurrentOrder(JSON.parse(localStorage.getItem('order')));
  };

  const createOrder = () => {
    if (user === null || currentOrder !== null) return;
    const newOrder = {
      products: [],
      user: user.id,
      amount: 0,
    };
    setCurrentOrder(newOrder);
    loadOrderToStorage(newOrder);
  };

  const deleteOrder = () => {
    const emptyOrder = null;
    setCurrentOrder(emptyOrder);
    localStorage.removeItem('order');
  };

  const addProduct = ({
    id, name, description, price,
  }) => {
    let { products: actualProducts, amount: actualAmount } = currentOrder;
    const productToAdd = actualProducts.find(p => p.id === id) || null;

    if (productToAdd === null) {
      const newProduct = {
        id,
        name,
        description,
        price,
        quantity: 1,
        totalPrice: price,
      };
      actualProducts = [...actualProducts, newProduct];
      actualAmount += price;
      const updatedOrder = { ...currentOrder, products: actualProducts, amount: actualAmount };
      setCurrentOrder(updatedOrder);
      loadOrderToStorage(updatedOrder);
      return;
    }

    const productIndex = actualProducts.indexOf(productToAdd);
    actualProducts[productIndex].quantity += 1;
    actualProducts[productIndex].totalPrice += price;
    actualAmount = calcTotal(actualProducts);
    const updatedOrder = { ...currentOrder, products: actualProducts, amount: actualAmount };
    setCurrentOrder(updatedOrder);
    loadOrderToStorage(updatedOrder);
  };

  const removeProduct = ({ id, price }) => {
    if (currentOrder === null) return;

    const actualProducts = currentOrder.products;
    const productToRemove = actualProducts.find(p => p.id === id) || null;

    if (productToRemove === null) return;

    const productIndex = actualProducts.indexOf(productToRemove);
    let actualAmount = currentOrder.amount;

    if (actualProducts[productIndex].quantity === 1) {
      actualProducts.splice(productIndex, 1);
      actualAmount = calcTotal(actualProducts);
      const updatedOrder = { ...currentOrder, products: actualProducts, amount: actualAmount };
      setCurrentOrder(updatedOrder);
      loadOrderToStorage(updatedOrder);
      return;
    }

    actualProducts[productIndex].quantity -= 1;
    actualProducts[productIndex].totalPrice -= price;
    actualAmount = calcTotal(actualProducts);
    const updatedOrder = { ...currentOrder, products: actualProducts, amount: actualAmount };
    setCurrentOrder(updatedOrder);
    loadOrderToStorage(updatedOrder);
  };

  const clearOrder = () => {
    const actualProducts = currentOrder.products;
    let actualAmount = currentOrder.amount;
    actualProducts.length = 0;
    actualAmount = 0;
    const updatedOrder = { ...currentOrder, products: actualProducts, amount: actualAmount };
    setCurrentOrder(updatedOrder);
    loadOrderToStorage(updatedOrder);
  };

  useEffect(() => {
    createOrder();
  }, [user]);

  useEffect(() => {
    if (!localStorage.getItem('token')) deleteOrder();
    loadOrderFromStorage();
  }, [location]);

  const values = {
    order: currentOrder,
    addProduct,
    removeProduct,
    clearOrder,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
