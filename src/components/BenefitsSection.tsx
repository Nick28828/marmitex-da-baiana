const benefits = [
  { icon: '🍲', label: 'Comida de verdade', detail: 'Sabor caseiro' },
  { icon: '♥', label: 'Feito com carinho', detail: 'Todo dia' },
  { icon: '🛵', label: 'Entrega na região', detail: 'Rápida e prática' },
  { icon: '🌴', label: 'Sabor da Bahia', detail: 'Nossa identidade' },
];

export function BenefitsSection() {
  return (
    <section className="px-4 py-7 sm:px-5">
      <div className="rounded-[24px] border border-[#E7D7C4] bg-[#FFF0D6] p-3.5">
        <div className="grid grid-cols-2 gap-2.5">
          {benefits.map((item) => (
            <div key={item.label} className="flex min-w-0 items-center gap-2.5 rounded-[16px] bg-white/75 p-3 shadow-sm">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F7B733]/20 text-lg font-black text-[#A63F27]">{item.icon}</span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-black text-[#2A1B16]">{item.label}</p>
                <p className="truncate text-[9px] font-semibold text-[#8A7569]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
