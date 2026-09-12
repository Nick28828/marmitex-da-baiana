import type { PaymentMethod } from '../types';
import { Banknote, CreditCard, QrCode } from 'lucide-react';

interface PaymentSelectorProps {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

const methods = [
  { id: 'pix' as const, label: 'Pix', icon: QrCode },
  { id: 'dinheiro' as const, label: 'Dinheiro', icon: Banknote },
  { id: 'cartao' as const, label: 'Cartão', icon: CreditCard },
];

export function PaymentSelector({ value, onChange }: PaymentSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {methods.map((m) => {
        const Icon = m.icon;
        const isActive = value === m.id;

        return (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            className={`p-3 rounded-xl border-2 text-center transition-all ${
              isActive
                ? 'border-baiano-green bg-baiano-green/5 shadow-sm'
                : 'border-baiano-border bg-white hover:border-baiano-text-secondary/30'
            }`}
          >
            <Icon
              className={`w-5 h-5 mx-auto mb-1 ${
                isActive ? 'text-baiano-green' : 'text-baiano-text-secondary'
              }`}
            />
            <span
              className={`font-semibold text-xs ${
                isActive ? 'text-baiano-green' : 'text-baiano-text'
              }`}
            >
              {m.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
