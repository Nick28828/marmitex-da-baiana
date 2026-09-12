import { ShieldCheck } from 'lucide-react';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';
import { store } from '../config/store';

interface MobileCartBarProps {
  onCheckout: () => void;
}

export function MobileCartBar({ onCheckout }: MobileCartBarProps) {
  const { items, setIsOpen, subtotal, totalItems } = useCartContext();

  if (items.length === 0) return null;

  const deliveryFee = store.deliveryFee;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-baiano-border shadow-[0_-8px_30px_rgba(0,0,0,0.12)] z-30 safe-bottom md:hidden animate-slide-up">
      <div className="px-4 py-3">
        {/* Cart info row */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between w-full mb-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-baiano-text">
              🛒 {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </span>
          </div>
          <span className="text-sm font-bold text-baiano-text">
            {formatCurrency(total)}
            <span className="ml-1">▾</span>
          </span>
        </button>

        {/* WhatsApp button */}
        <button
          onClick={onCheckout}
          className="w-full flex items-center justify-center gap-2 bg-[#198754] text-white font-bold text-[15px] py-3.5 rounded-2xl hover:bg-[#106B43] transition-all active:scale-[0.98] shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Finalizar no WhatsApp
        </button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <ShieldCheck className="w-3 h-3 text-baiano-text-secondary/40" />
          <span className="text-[10px] text-baiano-text-secondary/50">Seus dados estão seguros</span>
        </div>
      </div>
    </div>
  );
}
