import type { Category } from '../types';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronRight } from 'lucide-react';

interface ProductGridProps {
  category: Category;
  search: string;
}

const sectionTitles: Record<Category, string> = {
  marmitas: 'Nossas Marmitas',
  pratos: 'Pratos do Dia',
  bebidas: 'Bebidas',
};

export function ProductGrid({ category, search }: ProductGridProps) {
  const filtered = products.filter((p) => {
    const matchesCategory = p.category === category;
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <span className="text-4xl mb-3 block">🔍</span>
        <p className="text-baiano-text-secondary text-sm">Nenhum item encontrado</p>
      </div>
    );
  }

  return (
    <div className="px-4 max-w-lg mx-auto">
      {/* Section header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-[15px] text-baiano-text">{sectionTitles[category]}</h2>
        <button className="flex items-center text-baiano-green text-xs font-semibold">
          Ver todos
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Products grid - 3 columns on mobile */}
      <div className="grid grid-cols-3 gap-2.5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
