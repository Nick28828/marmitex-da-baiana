import { useState } from 'react';
import type { CustomerData } from '../types';
import { useCartContext } from '../contexts/CartContext';
import { CustomerForm } from './CustomerForm';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { formatCurrency } from '../utils/currency';
import { store } from '../config/store';

interface CheckoutModalProps {
  onClose: () => void;
}

const defaultCustomer: CustomerData = {
  name: '',
  phone: '',
  deliveryType: 'entrega',
  address: null,
  payment: 'pix',
  changeFor: '',
  observation: '',
};

export function CheckoutModal({ onClose }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCartContext();
  const [customer, setCustomer] = useState<CustomerData>(defaultCustomer);
  const [sending, setSending] = useState(false);

  const deliveryFee = customer.deliveryType === 'entrega' ? store.deliveryFee : 0;
  const total = subtotal + deliveryFee;
  const canSubmit = Boolean(customer.name.trim() && customer.phone.trim() && items.length > 0);

  const handleSubmit = () => {
    if (!canSubmit || sending) return;
    setSending(true);
    const url = generateWhatsAppUrl(items, customer);
    window.open(url, '_blank');
    clearCart();
    window.setTimeout(() => {
      setSending(false);
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 md:items-center md:p-6 animate-fade-in">
      <div className="flex h-[96dvh] w-full max-w-[560px] flex-col overflow-hidden rounded-t-[26px] bg-[#FFF8ED] shadow-2xl md:h-[min(900px,94dvh)] md:rounded-[28px] animate-slide-up">
        <header className="relative overflow-hidden bg-[linear-gradient(135deg,#F7B733,#F28C28)] px-4 pb-5 pt-4">
          <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/15" />
          <div className="relative flex items-center gap-3">
            <button onClick={onClose} aria-label="Voltar" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/80 text-xl font-black text-[#6B2B1B] shadow-sm transition active:scale-95">←</button>
            <div>
              <h2 className="font-display text-xl font-black text-[#4D2117]">Finalizar Pedido</h2>
              <p className="mt-0.5 text-[11px] font-semibold text-[#6D2E1D]/80">Preencha os dados para enviar seu pedido no WhatsApp</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 pb-36 sm:p-5 sm:pb-36">
            <section className="mb-5 rounded-[20px] border border-[#E8D9C8] bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#D9482B]">Seu carrinho</p>
                  <h3 className="font-display text-[16px] font-black">Resumo do pedido</h3>
                </div>
                <span className="rounded-full bg-[#FFF0DC] px-2.5 py-1 text-[10px] font-black text-[#A63F27]">{items.length} produtos</span>
              </div>

              <div className="divide-y divide-[#F0E5D9]">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-3 py-2 text-[12px]">
                    <span className="min-w-0 truncate font-semibold text-[#625249]">{item.quantity}x {item.product.name}</span>
                    <span className="shrink-0 font-black text-[#2A1B16]">{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-[14px] bg-[#FFF8ED] p-3">
                <div className="flex justify-between text-[11px] font-semibold text-[#73655D]"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
                <div className="mt-1 flex justify-between text-[11px] font-semibold text-[#73655D]"><span>Entrega</span><span>{formatCurrency(deliveryFee)}</span></div>
                <div className="mt-2 flex justify-between border-t border-[#EADFD2] pt-2 text-[17px] font-black"><span>Total</span><span className="text-[#D9482B]">{formatCurrency(total)}</span></div>
              </div>
            </section>

            <CustomerForm data={customer} onChange={setCustomer} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#EADFD2] bg-white/96 p-4 pb-[max(env(safe-area-inset-bottom),14px)] backdrop-blur-md md:static">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || sending}
            className={`flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] text-[15px] font-black text-white shadow-lg transition active:scale-[.985] ${canSubmit && !sending ? 'bg-[#198754] hover:bg-[#106B43]' : 'cursor-not-allowed bg-[#B9B9B9]'}`}
          >
            <span className="text-xl">◉</span>
            {sending ? 'Abrindo WhatsApp...' : 'Enviar pedido no WhatsApp'}
          </button>
          <p className="mt-2 text-center text-[9px] font-semibold text-[#8A7569]">🔒 Seus dados são usados somente para este pedido</p>
        </div>
      </div>
    </div>
  );
}
