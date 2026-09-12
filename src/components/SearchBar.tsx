interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative z-20 mx-auto -mt-5 max-w-[520px] px-4 sm:px-5">
      <label className="relative block overflow-hidden rounded-[16px] border border-[#E8D7C4] bg-white shadow-[0_12px_30px_rgba(74,42,20,.14)]">
        <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A7569]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar um prato delicioso..."
          className="h-[52px] w-full bg-transparent pl-12 pr-4 text-[14px] font-semibold text-baiano-text outline-none placeholder:font-medium placeholder:text-[#9A877C]"
        />
      </label>
    </div>
  );
}
