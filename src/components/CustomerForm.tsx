import type { CustomerData, PaymentMethod, DeliveryType } from '../types';
import { DeliverySelector } from './DeliverySelector';
import { PaymentSelector } from './PaymentSelector';

interface CustomerFormProps {
  data: CustomerData;
  onChange: (data: CustomerData) => void;
}

export function CustomerForm({ data, onChange }: CustomerFormProps) {
  const update = (partial: Partial<CustomerData>) => {
    onChange({ ...data, ...partial });
  };

  const updateAddress = (partial: Record<string, string>) => {
    const addr = data.address || { cep: '', street: '', number: '', complement: '', neighborhood: '', city: '' };
    update({ address: { ...addr, ...partial } });
  };

  return (
    <div className="space-y-5">
      {/* Delivery type */}
      <div>
        <label className="block font-semibold text-sm mb-2">Entrega ou retirada</label>
        <DeliverySelector
          value={data.deliveryType}
          onChange={(v: DeliveryType) => update({ deliveryType: v })}
        />
      </div>

      {/* Address - only for delivery */}
      {data.deliveryType === 'entrega' && (
        <div className="space-y-3 animate-fade-in">
          <label className="block font-semibold text-sm">Endereço de entrega</label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="CEP"
              value={data.address?.cep || ''}
              onChange={(e) => updateAddress({ cep: e.target.value })}
              className="col-span-1 px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
            <input
              type="text"
              placeholder="Rua"
              value={data.address?.street || ''}
              onChange={(e) => updateAddress({ street: e.target.value })}
              className="col-span-2 px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
            <input
              type="text"
              placeholder="Número"
              value={data.address?.number || ''}
              onChange={(e) => updateAddress({ number: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
            <input
              type="text"
              placeholder="Complemento"
              value={data.address?.complement || ''}
              onChange={(e) => updateAddress({ complement: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
            <input
              type="text"
              placeholder="Bairro"
              value={data.address?.neighborhood || ''}
              onChange={(e) => updateAddress({ neighborhood: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
            <input
              type="text"
              placeholder="Cidade"
              value={data.address?.city || ''}
              onChange={(e) => updateAddress({ city: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
            />
          </div>
        </div>
      )}

      {/* Customer info */}
      <div className="space-y-3">
        <div>
          <label className="block font-semibold text-sm mb-1.5">Seus dados</label>
        </div>
        <input
          type="text"
          placeholder="Nome completo *"
          value={data.name}
          onChange={(e) => update({ name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
        />
        <input
          type="tel"
          placeholder="WhatsApp *"
          value={data.phone}
          onChange={(e) => update({ phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors"
        />
      </div>

      {/* Payment */}
      <div>
        <label className="block font-semibold text-sm mb-2">Forma de pagamento</label>
        <PaymentSelector
          value={data.payment}
          onChange={(v: PaymentMethod) => update({ payment: v })}
        />
        {data.payment === 'dinheiro' && (
          <input
            type="text"
            placeholder="Troco para (ex: R$ 50,00)"
            value={data.changeFor}
            onChange={(e) => update({ changeFor: e.target.value })}
            className="w-full mt-3 px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors animate-fade-in"
          />
        )}
      </div>

      {/* Observation */}
      <div>
        <label className="block font-semibold text-sm mb-1.5">Observação do pedido (opcional)</label>
        <textarea
          placeholder="Ex: sem cebola, mais molho, retirar salada..."
          value={data.observation}
          onChange={(e) => update({ observation: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border-2 border-baiano-border bg-white text-sm focus:outline-none focus:border-baiano-green transition-colors resize-none"
        />
      </div>
    </div>
  );
}
