import type { PaymentMethod } from '../types';

interface PaymentSelectorProps {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

const methods = [
  { id: 'pix' as const, label: 'Pix', icon: '◆' },
  { id: 'dinheiro' as const, label: 'Dinheiro', icon: 'R$' },
  { id: 'cartao' as const, label: 'Cartão', icon: '▣' },
];

export function PaymentSelector({ value, onChange }: PaymentSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {methods.map((method) => {
        const active = value === method.id;
        return (
          <button
            type="button"
            key={method.id}
            onClick={() => onChange(method.id)}
            className={`rounded-[14px] border p-3 text-center transition ${active ? 'border-[#198754] bg-[#ECF8F1] shadow-sm' : 'border-[#E2D4C7] bg-[#FFFDF9] hover:border-[#BCA99A]'}`}
          >
            <span className={`mx-auto grid h-8 w-8 place-items-center rounded-full text-[11px] font-black ${active ? 'bg-[#198754] text-white' : 'bg-[#F3E8DC] text-[#6A5145]'}`}>{method.icon}</span>
            <span className={`mt-1.5 block text-[11px] font-black ${active ? 'text-[#106B43]' : 'text-[#4A2A1E]'}`}>{method.label}</span>
          </button>
        );
      })}
    </div>
  );
}
