import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_KEY = '@marmitex-cart';

function loadCart(): CartItem[] {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  const updateItems = useCallback((newItems: CartItem[]) => {
    setItems(newItems);
    saveCart(newItems);
  }, []);

  const addToCart = useCallback(
    (product: Product) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        updateItems(
          items.map((i) =>
            i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        updateItems([...items, { product, quantity: 1 }]);
      }
    },
    [items, updateItems]
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      updateItems(items.filter((i) => i.product.id !== productId));
    },
    [items, updateItems]
  );

  const increaseQuantity = useCallback(
    (productId: string) => {
      updateItems(
        items.map((i) =>
          i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    },
    [items, updateItems]
  );

  const decreaseQuantity = useCallback(
    (productId: string) => {
      const existing = items.find((i) => i.product.id === productId);
      if (!existing) return;
      if (existing.quantity > 1) {
        updateItems(
          items.map((i) =>
            i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
          )
        );
      } else {
        updateItems(items.filter((i) => i.product.id !== productId));
      }
    },
    [items, updateItems]
  );

  const clearCart = useCallback(() => {
    updateItems([]);
  }, [updateItems]);

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
        totalItems,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
}
