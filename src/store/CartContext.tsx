import React, { createContext, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  cartItemsQuantity: number; // Добавлено поле для общего количества товаров
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  getTotalPrice: () => number;
  incQuantity: (itemId: number) => void;
  decQuantity: (itemId: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0); 

  const addToCart = (item: Product) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      incQuantity(item.id);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      setCartItemsQuantity((prevQuantity) => prevQuantity + 1); 
    }
  };

  const removeFromCart = (itemId: number) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);
    if (existingItem) {
      setCartItemsQuantity((prevQuantity) => prevQuantity - existingItem.quantity); 
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const incQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
    setCartItemsQuantity((prevQuantity) => prevQuantity + 1); 
  };

  const decQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
    setCartItemsQuantity((prevQuantity) => prevQuantity - 1); 
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsQuantity, 
        addToCart,
        removeFromCart,
        getTotalPrice,
        incQuantity,
        decQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
