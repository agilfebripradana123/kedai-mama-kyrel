import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // =========================
  // TAMBAH KE KERANJANG
  // =========================
  const addToCart = (item) => {
    setCartItems((currentItems) => [
      ...currentItems,
      {
        ...item,
        cartId: Date.now() + Math.random(),
        quantity: item.quantity || 1,
      },
    ]);
  };

  // =========================
  // HAPUS ITEM
  // =========================
  const removeFromCart = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId),
    );
  };

  // =========================
  // TAMBAH JUMLAH
  // =========================
  const increaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // =========================
  // KURANGI JUMLAH
  // =========================
  const decreaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // =========================
  // KOSONGKAN
  // =========================
  const clearCart = () => {
    setCartItems([]);
  };

  // =========================
  // TOTAL ITEM
  // =========================
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // =========================
  // TOTAL HARGA
  // =========================
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}