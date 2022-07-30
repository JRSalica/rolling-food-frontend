import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;