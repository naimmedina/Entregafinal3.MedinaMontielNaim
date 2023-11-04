import { createContext, useState } from "react";

export const cartContext = createContext({
  cart: [],
  total: 0, 
  totalQuantity: 0, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); 
  const [totalQuantity, setTotalQuantity] = useState(0); 

  const calculateTotal = (cart) => {
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    return { total: totalPrice, totalQuantity };
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity, img: item.img }]);
    } else {
      console.error("El producto ya fue agregado");
    }
    const { total, totalQuantity } = calculateTotal([...cart, { ...item, quantity }]);
    setTotal(total);
    setTotalQuantity(totalQuantity);
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    const { total, totalQuantity } = calculateTotal(cartUpdated);
    setTotal(total);
    setTotalQuantity(totalQuantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <cartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
};
