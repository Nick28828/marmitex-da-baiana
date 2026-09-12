import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 -mt-4 relative z-20 max-w-lg mx-auto">
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-baiano-text-secondary/50" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar um prato delicioso..."
          className="w-full pl-12 pr-4 py-4 bg-transparent text-baiano-text placeholder:text-baiano-text-secondary/40 focus:outline-none text-[15px]"
        />
      </div>
    </div>
  );
}
