import { useState } from 'react';
import type { Category } from '../types';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { CategoryTabs } from '../components/CategoryTabs';
import { ProductGrid } from '../components/ProductGrid';
import { CartDrawer } from '../components/CartDrawer';
import { MobileCartBar } from '../components/MobileCartBar';
import { CheckoutModal } from '../components/CheckoutModal';
import { BenefitsSection } from '../components/BenefitsSection';
import { useCartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currency';
import { store } from '../config/store';

const categories: Category[] = ['marmitas', 'pratos', 'bebidas'];

export function Home() {
  const [category, setCategory] = useState<Category>('marmitas');
  const [search, setSearch] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const { totalItems, subtotal } = useCartContext();

  const total = subtotal + (totalItems > 0 ? store.deliveryFee : 0);

  const goToCategory = (next: Category) => {
    setCategory(next);
    document.getElementById(`section-${next}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#7A2E1D] xl:bg-[radial-gradient(circle_at_50%_20%,#ffc54f_0,#f28c28_24%,#a63f27_68%,#6f291c_100%)]">
      <div className="mx-auto min-h-screen w-full xl:grid xl:max-w-[1500px] xl:grid-cols-[minmax(250px,1fr)_minmax(440px,520px)_minmax(250px,1fr)] xl:items-start xl:gap-7 xl:px-8 xl:py-8">
        <aside className="hidden min-h-[820px] flex-col justify-between overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(160deg,#A63F27,#7A2E1D)] p-8 text-white shadow-2xl xl:flex">
          <div>
            <span className="inline-flex rounded-full bg-[#F7B733] px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-[#6C2819]">Sabor de verdade</span>
            <h2 className="mt-9 font-display text-[2.6rem] font-black leading-[1.02] tracking-[-.045em]">
              Comida boa<br />tem mais sabor<br /><span className="text-[#FFD86A]">quando vem da Bahia.</span>
            </h2>
            <p className="mt-5 max-w-[290px] text-sm leading-6 text-white/75">
              Comida caseira, bem servida e preparada com aquele tempero que lembra almoço de família.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ['⌂', 'Sabor caseiro todo dia'],
              ['✿', 'Ingredientes selecionados'],
              ['♥', 'Um pedacinho da Bahia na sua mesa'],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3.5 backdrop-blur-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F7B733] font-black text-[#7A2E1D]">{icon}</span>
                <span className="text-sm font-bold">{text}</span>
              </div>
            ))}
            <div className="relative mt-5 overflow-hidden rounded-[26px] bg-[#F7B733] p-5 text-[#672718]">
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/20" />
              <p className="relative font-display text-2xl font-black leading-tight">Da Bahia<br />para a sua mesa.</p>
              <p className="relative mt-2 text-xs font-bold uppercase tracking-[.12em] opacity-75">Feito com carinho ♥</p>
            </div>
          </div>
        </aside>

        <main className="relative min-h-screen overflow-hidden bg-baiano-cream xl:min-h-[900px] xl:rounded-[34px] xl:border-[7px] xl:border-[#33180f]/80 xl:shadow-[0_35px_90px_rgba(35,13,7,.42)]">
          <Header />
          <SearchBar value={search} onChange={setSearch} />
          <CategoryTabs selected={category} onSelect={goToCategory} />

          <div className="pb-5 pt-2">
            {categories.map((item) => (
              <ProductGrid key={item} category={item} search={search} />
            ))}
          </div>

          <BenefitsSection />

          <footer className="mx-4 mb-5 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#198754,#106B43)] px-5 py-6 text-center text-white shadow-lg">
            <p className="font-display text-xl font-black">Bahia é sabor.</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[.13em] text-white/80">Marmitex da Baiana é tradição ♥</p>
          </footer>

          <MobileCartBar onCheckout={() => setShowCheckout(true)} />
          <CartDrawer onCheckout={() => setShowCheckout(true)} />
          {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
          <div className="h-32 md:hidden" />
        </main>

        <aside className="hidden min-h-[820px] flex-col justify-between rounded-[34px] border border-white/15 bg-[linear-gradient(180deg,#FFF3D0,#F7C95A)] p-8 text-[#5B2619] shadow-2xl xl:flex">
          <div>
            <div className="flex justify-end">
              <span className="rounded-full border border-[#A63F27]/15 bg-white/65 px-4 py-2 text-[11px] font-black uppercase tracking-[.14em] text-[#A63F27]">Marmitex da Baiana</span>
            </div>
            <h2 className="mt-10 font-display text-[2.45rem] font-black leading-[1.02] tracking-[-.04em]">Da nossa cozinha<br /><span className="text-[#D9482B]">para a sua mesa.</span></h2>
            <div className="mt-7 rotate-[-2deg] rounded-[24px] border-2 border-dashed border-[#8C3A25]/30 bg-[#A63F27] p-6 text-center text-[#FFE48E] shadow-lg">
              <p className="text-xs font-black uppercase tracking-[.2em]">Aqui tem</p>
              <p className="font-display text-3xl font-black leading-none">SABOR<br />BAIANO</p>
            </div>
          </div>

          <div className="rounded-[26px] bg-white p-5 shadow-[0_18px_45px_rgba(103,39,20,.16)]">
            <div className="flex items-center justify-between border-b border-[#EADFD2] pb-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#73655D]">Seu pedido</p>
                <p className="mt-1 font-black">🛒 {totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
              </div>
              <strong className="text-lg text-[#D9482B]">{formatCurrency(total)}</strong>
            </div>
            <button
              onClick={() => totalItems > 0 && setShowCheckout(true)}
              disabled={totalItems === 0}
              className="mt-4 w-full rounded-xl bg-[#198754] px-4 py-3.5 text-sm font-black text-white shadow-md transition hover:bg-[#106B43] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Finalizar no WhatsApp
            </button>
            <p className="mt-3 text-center text-[10px] font-semibold text-[#73655D]">Pedido rápido, simples e direto no WhatsApp.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
