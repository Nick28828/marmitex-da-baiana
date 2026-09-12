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

export function Home() {
  const [category, setCategory] = useState<Category>('marmitas');
  const [search, setSearch] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen bg-baiano-cream">
      <Header />
      <SearchBar value={search} onChange={setSearch} />
      <CategoryTabs selected={category} onSelect={setCategory} />

      <div className="mt-5 mb-8">
        <ProductGrid category={category} search={search} />
      </div>

      <BenefitsSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#198754] to-[#106B43] text-white text-center py-6 px-4">
        <p className="text-sm font-medium">
          Bahia é sabor. Marmitex da Baiana é tradição! ❤️
        </p>
      </footer>

      <MobileCartBar onCheckout={() => setShowCheckout(true)} />
      <CartDrawer onCheckout={() => setShowCheckout(true)} />

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}

      {/* Bottom spacing for mobile cart bar */}
      <div className="h-32 md:hidden" />
    </div>
  );
}
