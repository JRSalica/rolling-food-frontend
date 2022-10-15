/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [order, setOrder] = useState(null);
  const { user } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line no-shadow
  const loadOrderToStorage = (order) => {
    localStorage.setItem('order', JSON.stringify(order));
  };

  const loadOrderFromStorage = () => {
    setOrder(JSON.parse(localStorage.getItem('order')));
  };

  const createOrder = () => {
    if (user === null || order !== null) return;
    const newOrder = {
      products: [],
      // eslint-disable-next-line no-underscore-dangle
      user: user._id,
      amount: 0,
    };
    setOrder(newOrder);
    loadOrderToStorage(newOrder);
  };

  const deleteOrder = () => {
    const order = null;
    setOrder(order);
    localStorage.removeItem('order');
  };

  const addProduct = ({
    _id, name, description, price,
  }) => {
    let { products, amount } = order;
    const productToAdd = products.find(product => product._id === _id) || null;

    if (productToAdd === null) {
      const newProduct = {
        _id,
        name,
        description,
        price,
        quantity: 1,
        totalPrice: price,
      };
      products = [...products, newProduct];
      amount += price;
      setOrder({ products, amount });
      loadOrderToStorage({ products, amount });
      return;
    }

    const productIndex = products.indexOf(productToAdd);
    products[productIndex].quantity += 1;
    products[productIndex].totalPrice += price;
    amount = calcTotal(products);
    setOrder({ products, amount });
    loadOrderToStorage({ products, amount });
  };

  const removeProduct = ({ _id, price }) => {
    if (order === null) return;
    let { products, amount } = order;

    const productToRemove = products.find(product => product._id === _id) || null;
    if (productToRemove === null) return;
    const productIndex = products.indexOf(productToRemove);

    if (products[productIndex].quantity === 1) {
      products.splice(productIndex, 1);
      amount = calcTotal(products);
      setOrder({ products, amount });
      loadOrderToStorage({ products, amount });
      return;
    }

    products[productIndex].quantity -= 1;
    products[productIndex].totalPrice -= price;
    amount = calcTotal(products);
    setOrder({ products, amount });
    loadOrderToStorage({ products, amount });
  };

  const clearOrder = () => {
    let { products, amount } = order;
    products.length = 0;
    amount = 0;
    setOrder({ products, amount });
    loadOrderToStorage({ products, amount });
  };

  const calcTotal = products => {
    let total = 0;
    // eslint-disable-next-line no-return-assign
    products.forEach(product => total += product.totalPrice);
    return total;
  };

  useEffect(() => {
    createOrder();
  }, [user]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !localStorage.getItem('token') && deleteOrder();
    loadOrderFromStorage();
  }, [location]);

  const values = {
    order,
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
