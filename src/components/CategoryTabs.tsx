import type { Category } from '../types';

const labels: Record<Category, { label: string; icon: string }> = {
  marmitas: { label: 'Marmitas', icon: '🍱' },
  pratos: { label: 'Pratos', icon: '🍽️' },
  bebidas: { label: 'Bebidas', icon: '🥤' },
};

interface CategoryTabsProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryTabs({ selected, onSelect }: CategoryTabsProps) {
  const cats: Category[] = ['marmitas', 'pratos', 'bebidas'];

  return (
    <nav className="mx-auto mt-4 max-w-[520px] px-4 sm:px-5" aria-label="Categorias do cardápio">
      <div className="grid grid-cols-3 gap-2 rounded-[18px] bg-[#F2E7DB] p-1.5">
        {cats.map((cat) => {
          const item = labels[cat];
          const isActive = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`flex h-[48px] min-w-0 items-center justify-center gap-1.5 rounded-[13px] px-2 text-[12px] font-black transition-all duration-200 sm:text-[13px] ${
                isActive
                  ? 'bg-[#D9482B] text-white shadow-[0_7px_18px_rgba(217,72,43,.25)]'
                  : 'bg-white/75 text-[#4A2A1E] hover:bg-white'
              }`}
            >
              <span className="text-base" aria-hidden="true">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
