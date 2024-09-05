import React, { createContext, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartContextType {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: number) => void;
    getTotalPrice: () => number;
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);



export const CartProvider= ({ children }:CartProviderProps) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeFromCart = (itemId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};