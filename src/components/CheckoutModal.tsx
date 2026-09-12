import { useState } from 'react';
import { ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';
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

  const canSubmit = customer.name.trim() && customer.phone.trim() && items.length > 0;

  const handleSubmit = () => {
    if (!canSubmit || sending) return;

    setSending(true);
    const url = generateWhatsAppUrl(items, customer);
    clearCart();
    window.open(url, '_blank');

    setTimeout(() => {
      setSending(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-baiano-cream flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-baiano-green to-baiano-green-dark px-4 py-4 safe-bottom">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg">Finalizar Pedido</h2>
            <p className="text-white/80 text-xs">
              Preencha os dados para enviar seu pedido no WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto p-4 pb-40">
          {/* Order summary */}
          <div className="bg-white rounded-2xl p-4 mb-5 border border-baiano-border/50">
            <h3 className="font-bold text-sm mb-3">Resumo do pedido</h3>
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between text-sm py-1.5 border-b border-baiano-border/30 last:border-0"
              >
                <span className="text-baiano-text-secondary">
                  {item.quantity}x {item.product.name}
                </span>
                <span className="font-semibold">
                  {formatCurrency(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-baiano-border">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-baiano-text-secondary">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-baiano-text-secondary">Entrega</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-baiano-green">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          <CustomerForm data={customer} onChange={setCustomer} />
        </div>
      </div>

      {/* Fixed submit button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-baiano-border p-4 safe-bottom z-50">
        <div className="max-w-lg mx-auto">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || sending}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
              canSubmit && !sending
                ? 'bg-baiano-green text-white hover:bg-baiano-green-dark active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
          >
            <MessageCircle className="w-6 h-6" />
            {sending ? 'Enviando...' : 'Enviar pedido no WhatsApp'}
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-baiano-text-secondary/60">
            <ShieldCheck className="w-3 h-3" />
            Seus dados estão seguros
          </div>
        </div>
      </div>
    </div>
  );
}
