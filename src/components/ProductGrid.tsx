import type { Category } from '../types';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  category: Category;
  search: string;
}

const sectionTitles: Record<Category, { title: string; eyebrow: string }> = {
  marmitas: { title: 'Nossas Marmitas', eyebrow: 'Mais pedidos' },
  pratos: { title: 'Pratos do Dia', eyebrow: 'Feito na hora' },
  bebidas: { title: 'Bebidas', eyebrow: 'Pra acompanhar' },
};

export function ProductGrid({ category, search }: ProductGridProps) {
  const q = search.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const matchesCategory = p.category === category;
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0 && search) return null;

  const meta = sectionTitles[category];

  return (
    <section id={`section-${category}`} className="render-lazy scroll-mt-5 px-4 pt-6 sm:px-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[.18em] text-[#D9482B]">{meta.eyebrow}</p>
          <h2 className="mt-0.5 font-display text-[18px] font-black tracking-[-.02em] text-[#2A1B16]">{meta.title}</h2>
        </div>
        <button className="flex items-center gap-1 pb-0.5 text-[11px] font-extrabold text-[#198754]">
          Ver todos <span className="text-base leading-none">›</span>
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#D9C4AF] bg-white/55 px-5 py-8 text-center text-sm font-semibold text-[#73655D]">
          Nenhum item encontrado nesta categoria.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </section>
  );
}
