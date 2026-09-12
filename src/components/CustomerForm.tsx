import type { CustomerData, PaymentMethod, DeliveryType } from '../types';
import { DeliverySelector } from './DeliverySelector';
import { PaymentSelector } from './PaymentSelector';

interface CustomerFormProps {
  data: CustomerData;
  onChange: (data: CustomerData) => void;
}

const inputClass = 'w-full rounded-[13px] border border-[#DDCDBD] bg-white px-4 py-3 text-sm font-medium text-[#2A1B16] outline-none transition placeholder:text-[#A08D82] focus:border-[#198754] focus:ring-2 focus:ring-[#198754]/10';

export function CustomerForm({ data, onChange }: CustomerFormProps) {
  const update = (partial: Partial<CustomerData>) => onChange({ ...data, ...partial });

  const updateAddress = (partial: Record<string, string>) => {
    const addr = data.address || { cep: '', street: '', number: '', complement: '', neighborhood: '', city: '' };
    update({ address: { ...addr, ...partial } });
  };

  return (
    <div className="space-y-5">
      <section className="rounded-[20px] border border-[#E8D9C8] bg-white p-4 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#D9482B]">Seus dados</p>
        <h3 className="mb-3 mt-0.5 font-display text-[16px] font-black">Quem vai receber?</h3>
        <div className="space-y-2.5">
          <input type="text" placeholder="Nome completo *" value={data.name} onChange={(e) => update({ name: e.target.value })} className={inputClass} />
          <input type="tel" placeholder="WhatsApp *" value={data.phone} onChange={(e) => update({ phone: e.target.value })} className={inputClass} />
        </div>
      </section>

      <section className="rounded-[20px] border border-[#E8D9C8] bg-white p-4 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#D9482B]">Recebimento</p>
        <h3 className="mb-3 mt-0.5 font-display text-[16px] font-black">Entrega ou retirada</h3>
        <DeliverySelector value={data.deliveryType} onChange={(v: DeliveryType) => update({ deliveryType: v })} />

        {data.deliveryType === 'entrega' && (
          <div className="mt-4 space-y-2.5 animate-fade-in">
            <p className="text-[11px] font-black text-[#4A2A1E]">Endereço de entrega</p>
            <div className="grid grid-cols-2 gap-2.5">
              <input type="text" placeholder="CEP" value={data.address?.cep || ''} onChange={(e) => updateAddress({ cep: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Número" value={data.address?.number || ''} onChange={(e) => updateAddress({ number: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Rua" value={data.address?.street || ''} onChange={(e) => updateAddress({ street: e.target.value })} className={`col-span-2 ${inputClass}`} />
              <input type="text" placeholder="Bairro" value={data.address?.neighborhood || ''} onChange={(e) => updateAddress({ neighborhood: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Cidade" value={data.address?.city || ''} onChange={(e) => updateAddress({ city: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Complemento (opcional)" value={data.address?.complement || ''} onChange={(e) => updateAddress({ complement: e.target.value })} className={`col-span-2 ${inputClass}`} />
            </div>
          </div>
        )}
      </section>

      <section className="rounded-[20px] border border-[#E8D9C8] bg-white p-4 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#D9482B]">Pagamento</p>
        <h3 className="mb-3 mt-0.5 font-display text-[16px] font-black">Como deseja pagar?</h3>
        <PaymentSelector value={data.payment} onChange={(v: PaymentMethod) => update({ payment: v })} />
        {data.payment === 'dinheiro' && (
          <input type="text" placeholder="Troco para (ex: R$ 50,00)" value={data.changeFor} onChange={(e) => update({ changeFor: e.target.value })} className={`mt-3 ${inputClass} animate-fade-in`} />
        )}
      </section>

      <section className="rounded-[20px] border border-[#E8D9C8] bg-white p-4 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#D9482B]">Observação</p>
        <textarea
          placeholder="Ex.: sem cebola, mais molho, retirar salada..."
          value={data.observation}
          onChange={(e) => update({ observation: e.target.value })}
          rows={3}
          className={`mt-2 resize-none ${inputClass}`}
        />
      </section>
    </div>
  );
}
