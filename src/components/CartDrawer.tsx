import { useCartContext } from '../contexts/CartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utils/currency';
import { store } from '../config/store';

interface CartDrawerProps {
  onCheckout: () => void;
}

export function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isOpen, setIsOpen, subtotal, totalItems } = useCartContext();
  if (!isOpen) return null;

  const deliveryFee = items.length > 0 ? store.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <button aria-label="Fechar carrinho" className="fixed inset-0 z-40 cursor-default bg-black/55 backdrop-blur-[2px] animate-fade-in" onClick={() => setIsOpen(false)} />
      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[430px] flex-col bg-[#FFF8ED] shadow-2xl animate-slide-up">
        <header className="relative overflow-hidden bg-[linear-gradient(135deg,#F7B733,#F28C28)] px-4 py-4">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/15" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[.16em] text-[#7B2F1F]/75">Marmitex da Baiana</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <h2 className="font-display text-xl font-black text-[#4D2117]">Seu Pedido</h2>
                {totalItems > 0 && <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-black text-[#A63F27]">{totalItems}</span>}
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-xl font-black text-[#5D271A] shadow-sm">×</button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#FFE7C2] text-4xl">🛒</div>
              <p className="mt-4 font-display text-xl font-black text-[#2A1B16]">Seu carrinho está vazio</p>
              <p className="mt-1 text-sm font-medium text-[#73655D]">Escolha uma marmita gostosa para começar.</p>
            </div>
          ) : (
            <>
              <div className="rounded-[20px] border border-[#E7D8C8] bg-white px-3 shadow-sm">
                {items.map((item) => <CartItem key={item.product.id} item={item} />)}
              </div>

              <div className="mt-4 rounded-[20px] border border-[#E7D8C8] bg-white p-4 shadow-sm">
                <div className="flex justify-between text-[12px] font-semibold text-[#73655D]"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
                <div className="mt-2 flex justify-between text-[12px] font-semibold text-[#73655D]"><span>Taxa de entrega</span><span>{formatCurrency(deliveryFee)}</span></div>
                <div className="mt-3 flex justify-between border-t border-[#EADFD2] pt-3 text-lg font-black"><span>Total</span><span className="text-[#D9482B]">{formatCurrency(total)}</span></div>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#EADFD2] bg-white p-4 pb-[max(env(safe-area-inset-bottom),14px)]">
            <button
              onClick={onCheckout}
              className="flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#198754] text-[15px] font-black text-white shadow-[0_8px_22px_rgba(25,135,84,.2)] transition hover:bg-[#106B43] active:scale-[.985]"
            >
              <span className="text-lg">◉</span>
              Finalizar no WhatsApp
            </button>
            <p className="mt-2 text-center text-[9px] font-semibold text-[#8A7569]">🔒 Pedido seguro e direto no WhatsApp</p>
          </div>
        )}
      </aside>
    </>
  );
}
