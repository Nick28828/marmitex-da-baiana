import { useState, useCallback } from 'react';
import type { CartItem, Product } from '../types';

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

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(loadCart);

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

  return {
    items,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
    totalItems,
  };
}
