import { UtensilsCrossed, ChefHat, Coffee } from 'lucide-react';
import type { Category } from '../types';

const iconMap = {
  marmitas: UtensilsCrossed,
  pratos: ChefHat,
  bebidas: Coffee,
};

const labels: Record<Category, string> = {
  marmitas: 'Marmitas',
  pratos: 'Pratos',
  bebidas: 'Bebidas',
};

interface CategoryTabsProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryTabs({ selected, onSelect }: CategoryTabsProps) {
  const cats: Category[] = ['marmitas', 'pratos', 'bebidas'];

  return (
    <div className="mt-5 max-w-lg mx-auto">
      <div className="flex gap-2.5 px-4">
        {cats.map((cat) => {
          const Icon = iconMap[cat];
          const isActive = selected === cat;

          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex-1 justify-center ${
                isActive
                  ? 'bg-baiano-red text-white shadow-md'
                  : 'bg-white text-baiano-text border border-baiano-border'
              }`}
            >
              <Icon className="w-4 h-4" />
              {labels[cat]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
