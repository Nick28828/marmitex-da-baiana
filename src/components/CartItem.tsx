import type { CartItem as CartItemType } from '../types';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext();

  return (
    <div className="flex items-center gap-3 border-b border-[#F0E5D9] py-3 last:border-0 animate-fade-in">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[13px] bg-[#FFF0DC]">
        <img src={item.product.image} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[12px] font-black text-[#2A1B16]">{item.product.name}</h4>
        <p className="mt-0.5 text-[12px] font-black text-[#D9482B]">{formatCurrency(item.product.price * item.quantity)}</p>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => decreaseQuantity(item.product.id)} className="grid h-7 w-7 place-items-center rounded-full border border-[#198754] text-sm font-black text-[#198754] transition hover:bg-[#198754] hover:text-white">−</button>
          <span className="min-w-4 text-center text-[12px] font-black">{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.product.id)} className="grid h-7 w-7 place-items-center rounded-full border border-[#198754] text-sm font-black text-[#198754] transition hover:bg-[#198754] hover:text-white">+</button>
        </div>
      </div>

      <button onClick={() => removeFromCart(item.product.id)} aria-label={`Remover ${item.product.name}`} className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-base font-black text-[#B59E90] transition hover:bg-[#FFF0EB] hover:text-[#D9482B]">×</button>
    </div>
  );
}
