import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [order, setOrder] = useState(null);
  const { user } = useAuth();

  // const loadOrderToStorage = (order) =>{
  //   localStorage.setItem('order', JSON.stringify(order));
  // }
  
  const createOrder = () => {
    setOrder({
      products: [],
      user: user._id,
      amount: 0,
    });
  }

  const addProduct = ({ _id, name, description, price }) => {
    let newOrder = order;
    let productToAdd = newOrder.products.find(product => product._id === _id);

    if(productToAdd === undefined){
      newOrder.products.push({
        _id,
        name,
        description,
        price,
        quantity: 1,
        totalPrice: price,
      });
      newOrder.amount += price;
      setOrder(newOrder);
      return;
    }
    
    let productIndex = newOrder.products.indexOf(productToAdd);
    newOrder.products[productIndex].quantity += 1;
    newOrder.products[productIndex].totalPrice += price;

    let newTotal = 0;
    newOrder.products.forEach(product => newTotal += product.totalPrice);
    newOrder.amount = newTotal;
    setOrder(newOrder);
  }

  const removeProduct = ({ _id, price }) => {
    let newOrder = order;
    if(newOrder === null) return;

    let productToRemove = newOrder.products.find(product => product._id = _id);
    let productIndex = newOrder.products.indexOf(productToRemove);
    if(productToRemove === undefined) return;

    if(newOrder.products[productIndex].quantity === 1){
      newOrder.products.splice(productIndex, 1);
      newOrder.amount = calcTotal(newOrder.products);
      setOrder(newOrder);
      return;
    }

    newOrder.products[productIndex].quantity -= 1;
    newOrder.products[productIndex].totalPrice -= price;
    newOrder.amount = calcTotal(newOrder.products);
    setOrder(newOrder);
  }

  const clearOrder = () => {
    const order = null;
    setOrder(order);
  } 

  const calcTotal = products =>{
    let total = 0;
    products.forEach(product => total += product.totalPrice);
    return total;
  }

  useEffect(() => {
    user ? createOrder() : clearOrder();
  }, [user]);

  // useEffect(() => {
  //   loadOrderToStorage(order);
  // }, [order]);

  const values = {
    order,
    addProduct,
    removeProduct,
  };

  return (
    <CartContext.Provider value = {values}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;