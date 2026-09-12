import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';
import { store } from '../config/store';

interface MobileCartBarProps {
  onCheckout: () => void;
}

export function MobileCartBar({ onCheckout }: MobileCartBarProps) {
  const { items, setIsOpen, subtotal, totalItems } = useCartContext();
  if (items.length === 0) return null;

  const total = subtotal + store.deliveryFee;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#EADFD2] bg-white/95 shadow-[0_-14px_38px_rgba(72,40,22,.18)] backdrop-blur-md md:hidden animate-slide-up">
      <div className="mx-auto max-w-[520px] px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3">
        <button onClick={() => setIsOpen(true)} className="mb-2.5 flex w-full items-center justify-between rounded-xl px-1 text-left">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF0DC] text-lg">🛒</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#8A7569]">Seu pedido</p>
              <p className="text-sm font-black text-[#2A1B16]">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#8A7569]">Total</p>
            <p className="text-[16px] font-black text-[#D9482B]">{formatCurrency(total)} <span className="text-xs text-[#73655D]">⌃</span></p>
          </div>
        </button>

        <button
          onClick={onCheckout}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#198754] px-4 text-[14px] font-black text-white shadow-[0_8px_22px_rgba(25,135,84,.24)] transition hover:bg-[#106B43] active:scale-[.985]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785a9.87 9.87 0 0 1-5.034-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C2.168 6.443 6.603 2.01 12.055 2.01c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884" />
          </svg>
          Finalizar no WhatsApp
        </button>
        <p className="mt-2 text-center text-[9px] font-semibold text-[#8A7569]">🔒 Seus dados ficam somente no seu pedido</p>
      </div>
    </div>
  );
}
