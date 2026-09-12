import type { DeliveryType } from '../types';

interface DeliverySelectorProps {
  value: DeliveryType;
  onChange: (value: DeliveryType) => void;
}

const options = [
  { id: 'entrega' as const, icon: '🛵', label: 'Entrega em casa', detail: 'Receba no endereço' },
  { id: 'retirada' as const, icon: '🏪', label: 'Retirar no local', detail: 'Sem taxa de entrega' },
];

export function DeliverySelector({ value, onChange }: DeliverySelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {options.map((option) => {
        const active = value === option.id;
        return (
          <button
            type="button"
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`min-w-0 rounded-[14px] border p-3 text-left transition ${active ? 'border-[#198754] bg-[#ECF8F1] shadow-sm' : 'border-[#E2D4C7] bg-[#FFFDF9] hover:border-[#BCA99A]'}`}
          >
            <span className="text-xl" aria-hidden="true">{option.icon}</span>
            <span className={`mt-1 block text-[11px] font-black leading-tight ${active ? 'text-[#106B43]' : 'text-[#2A1B16]'}`}>{option.label}</span>
            <span className="mt-1 block text-[8.5px] font-semibold leading-tight text-[#8A7569]">{option.detail}</span>
          </button>
        );
      })}
    </div>
  );
}
