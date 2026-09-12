import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '../types';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext();

  const categoryEmoji: Record<string, string> = {
    marmitas: '🍲',
    pratos: '🍽️',
    bebidas: '🥤',
  };

  return (
    <div className="flex items-center gap-3 py-3 border-b border-baiano-border/50 last:border-0 animate-fade-in">
      {/* Emoji placeholder */}
      <div className="w-12 h-12 rounded-xl bg-baiano-cream flex items-center justify-center text-2xl flex-shrink-0">
        {categoryEmoji[item.product.category] || '🍽️'}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-baiano-text truncate">
          {item.product.name}
        </h4>
        <p className="text-sm font-bold text-baiano-green">
          {formatCurrency(item.product.price * item.quantity)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.product.id)}
          className="w-8 h-8 rounded-full border-2 border-baiano-green text-baiano-green flex items-center justify-center hover:bg-baiano-green hover:text-white transition-colors"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.product.id)}
          className="w-8 h-8 rounded-full border-2 border-baiano-green text-baiano-green flex items-center justify-center hover:bg-baiano-green hover:text-white transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="p-1.5 text-baiano-text-secondary/50 hover:text-baiano-red transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
