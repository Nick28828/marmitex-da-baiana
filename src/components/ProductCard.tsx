import { useState } from 'react';
import { Plus, ImageOff } from 'lucide-react';
import type { Product } from '../types';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

const categoryImages: Record<string, string> = {
  'marmita-pequena': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
  'marmita-media': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
  'marmita-grande': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
  'feijoada': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
  'bife-acebolado': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
  'frango-grelhado': 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
  'coca-cola': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
  'suco-natural': 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
  'agua': 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop',
};

const categoryEmoji: Record<string, string> = {
  marmitas: '🍲',
  pratos: '🍽️',
  bebidas: '🥤',
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext();
  const [imgError, setImgError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const imageUrl = categoryImages[product.id];
  const showImage = imageUrl && !imgError;

  const handleAdd = () => {
    addToCart(product);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-baiano-border/40 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#FFF8ED] to-[#F5E6D0] flex items-center justify-center overflow-hidden">
        {showImage ? (
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-1 text-baiano-text-secondary/40">
            <span className="text-4xl">{categoryEmoji[product.category] || '🍽️'}</span>
            <ImageOff className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-baiano-text text-[13px] leading-tight mb-0.5">{product.name}</h3>
        <p className="text-[11px] text-baiano-text-secondary leading-snug mb-2 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-bold text-baiano-red">
            {formatCurrency(product.price)}
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-[11px] transition-all duration-200 ${
              isAdding
                ? 'bg-baiano-green text-white scale-95'
                : 'bg-baiano-green text-white hover:bg-baiano-green-dark active:scale-95'
            }`}
          >
            <Plus className="w-3 h-3" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
