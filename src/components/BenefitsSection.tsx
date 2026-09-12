import { UtensilsCrossed, Heart, Bike, TreePalm } from 'lucide-react';

const benefits = [
  { icon: UtensilsCrossed, label: 'Atendimento rápido', color: 'text-baiano-orange' },
  { icon: Heart, label: 'Comida feita com amor', color: 'text-baiano-red' },
  { icon: Bike, label: 'Entrega na sua região', color: 'text-baiano-green' },
  { icon: TreePalm, label: 'Sabor da Bahia', color: 'text-baiano-yellow' },
];

export function BenefitsSection() {
  return (
    <section className="px-4 py-8 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-3">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.label}
              className="bg-white rounded-2xl p-4 text-center border border-baiano-border/40 shadow-sm"
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${b.color}`} />
              <p className="text-[12px] font-semibold text-baiano-text leading-tight">{b.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
