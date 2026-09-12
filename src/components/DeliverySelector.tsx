import type { DeliveryType } from '../types';

interface DeliverySelectorProps {
  value: DeliveryType;
  onChange: (value: DeliveryType) => void;
}

export function DeliverySelector({ value, onChange }: DeliverySelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => onChange('entrega')}
        className={`p-4 rounded-xl border-2 text-center transition-all ${
          value === 'entrega'
            ? 'border-baiano-green bg-baiano-green/5 shadow-sm'
            : 'border-baiano-border bg-white hover:border-baiano-text-secondary/30'
        }`}
      >
        <span className="text-2xl block mb-1">🚚</span>
        <span
          className={`font-semibold text-sm ${
            value === 'entrega' ? 'text-baiano-green' : 'text-baiano-text'
          }`}
        >
          Entrega em casa
        </span>
      </button>
      <button
        onClick={() => onChange('retirada')}
        className={`p-4 rounded-xl border-2 text-center transition-all ${
          value === 'retirada'
            ? 'border-baiano-green bg-baiano-green/5 shadow-sm'
            : 'border-baiano-border bg-white hover:border-baiano-text-secondary/30'
        }`}
      >
        <span className="text-2xl block mb-1">🏪</span>
        <span
          className={`font-semibold text-sm ${
            value === 'retirada' ? 'text-baiano-green' : 'text-baiano-text'
          }`}
        >
          Retirar no local
        </span>
      </button>
    </div>
  );
}
