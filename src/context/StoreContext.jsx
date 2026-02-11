import { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOrderConfirmed(false);
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
    setIsOrderConfirmed(false);
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
    setIsOrderConfirmed(false);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setIsOrderConfirmed(false);
  };

  const login = (username) => setUser({ name: username || "Portal User" });
  const register = (name) => setUser({ name: name || "New User" });
  const logout = () => setUser(null);
  const confirmOrder = () => setIsOrderConfirmed(cartItems.length > 0);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const value = {
    user,
    cartItems,
    cartCount,
    isOrderConfirmed,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    login,
    register,
    logout,
    confirmOrder
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
