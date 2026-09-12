import { useState } from 'react';
import type { Product } from '../types';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext();
  const [imgError, setImgError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdding(true);
    window.setTimeout(() => setIsAdding(false), 280);
  };

  return (
    <article className="group min-w-0 overflow-hidden rounded-[15px] border border-[#E9DCCF] bg-white shadow-[0_7px_20px_rgba(72,42,25,.075)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(72,42,25,.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(145deg,#FFF1D2,#F2D6B0)]">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-2 text-center">
            <div className="relative h-16 w-16 rounded-full bg-white/75 shadow-inner">
              <div className="absolute inset-[10px] rounded-full bg-[conic-gradient(#6D3D23_0_24%,#F6E0A4_24%_46%,#4D7A39_46%_63%,#D98233_63%_80%,#F5F1E8_80%)]" />
              <div className="absolute inset-[24px] rounded-full bg-white/85" />
            </div>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-1 text-[8px] font-black uppercase tracking-[.08em] text-white backdrop-blur-sm">
          Caseiro
        </span>
      </div>

      <div className="flex min-h-[154px] flex-col p-2.5 sm:p-3">
        <h3 className="min-h-[32px] text-[12px] font-black leading-[1.18] text-[#2A1B16] sm:text-[13px]">{product.name}</h3>
        <p className="mt-1 line-clamp-3 flex-1 text-[9.5px] font-medium leading-[1.35] text-[#73655D] sm:text-[10.5px]">{product.description}</p>
        <div className="mt-2 text-[15px] font-black tracking-[-.02em] text-[#D9482B] sm:text-[17px]">{formatCurrency(product.price)}</div>
        <button
          onClick={handleAdd}
          className={`mt-2 flex h-[34px] w-full items-center justify-center gap-1 rounded-[9px] text-[10px] font-black text-white shadow-sm transition sm:text-[11px] ${
            isAdding ? 'scale-[.97] bg-[#106B43]' : 'bg-[#198754] hover:bg-[#106B43] active:scale-[.97]'
          }`}
        >
          <span className="text-sm leading-none">+</span>
          {isAdding ? 'Adicionado!' : 'Adicionar'}
        </button>
      </div>
    </article>
  );
}
