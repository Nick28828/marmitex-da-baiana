import { ShoppingCart } from 'lucide-react';
import { useCartContext } from '../contexts/CartContext';
import { useStoreStatus } from '../hooks/useStoreStatus';

export function Header() {
  const { totalItems, setIsOpen } = useCartContext();
  const { isOpen } = useStoreStatus();

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#F7B733] via-[#F28C28] to-[#E67E22]">
      {/* Decorative silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -left-4 top-0 w-28 h-28 text-white/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 C55 5, 58 15, 55 25 C52 35, 48 35, 45 25 C42 15, 45 5, 50 5Z M40 25 C35 20, 30 25, 35 35 C40 45, 45 40, 40 25Z M60 25 C65 20, 70 25, 65 35 C60 45, 55 40, 60 25Z M50 30 L48 80 L52 80 Z"/>
        </svg>
        <svg className="absolute -right-2 top-2 w-20 h-20 text-white/10" viewBox="0 0 100 100" fill="currentColor">
          <rect x="45" y="10" width="10" height="70" rx="2"/>
          <rect x="20" y="30" width="60" height="4" rx="2"/>
          <circle cx="50" cy="10" r="8"/>
        </svg>
        <svg className="absolute right-12 -bottom-2 w-16 h-16 text-white/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 C55 10, 60 20, 55 30 C50 40, 45 35, 40 25 C35 15, 45 10, 50 10Z"/>
          <path d="M30 35 C25 30, 20 35, 25 45 C30 55, 35 50, 30 35Z"/>
          <path d="M70 35 C75 30, 80 35, 75 45 C70 55, 65 50, 70 35Z"/>
        </svg>
      </div>

      <div className="relative z-10 px-4 pt-4 pb-5 safe-bottom">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/95 shadow-lg flex items-center justify-center overflow-hidden border-3 border-white">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#FFF8ED"/>
                {/* Face */}
                <ellipse cx="50" cy="45" rx="22" ry="24" fill="#8B5E3C"/>
                {/* Turban */}
                <path d="M28 38 C28 20, 50 12, 72 20 C72 28, 65 32, 50 30 C35 28, 28 32, 28 38Z" fill="#F7B733"/>
                <path d="M30 35 C30 22, 48 16, 68 22 L72 20 C72 12, 50 8, 28 20 Z" fill="#D9482B"/>
                <path d="M32 32 C32 24, 46 18, 64 22 L68 22 C68 14, 48 10, 30 22 Z" fill="#F28C28"/>
                {/* Eyes */}
                <ellipse cx="42" cy="44" rx="3" ry="3.5" fill="#2A1B16"/>
                <ellipse cx="58" cy="44" rx="3" ry="3.5" fill="#2A1B16"/>
                <circle cx="43" cy="43" r="1" fill="white"/>
                <circle cx="59" cy="43" r="1" fill="white"/>
                {/* Smile */}
                <path d="M42 54 Q50 62, 58 54" fill="none" stroke="#2A1B16" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Earrings */}
                <circle cx="28" cy="48" r="3" fill="#F7B733"/>
                <circle cx="72" cy="48" r="3" fill="#F7B733"/>
                {/* Shoulders */}
                <path d="M20 72 C20 65, 35 60, 50 62 C65 60, 80 65, 80 72 L80 100 L20 100Z" fill="#D9482B"/>
                <path d="M30 72 C30 67, 40 64, 50 65 C60 64, 70 67, 70 72 L70 100 L30 100Z" fill="#F7B733"/>
              </svg>
            </div>

            <div>
              <h1 className="font-display text-[1.4rem] font-bold text-white leading-tight drop-shadow-sm">
                Marmitex
                <br />
                da Baiana
              </h1>
              <p className="text-[9px] text-white/80 font-semibold tracking-[0.15em] uppercase mt-0.5">
                Sabor caseiro com alma baiana
              </p>
            </div>
          </div>

          {/* Cart button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2.5 hover:bg-white/10 rounded-full transition-all"
          >
            <ShoppingCart className="w-6 h-6 text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-baiano-red text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center animate-bounce-in shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Store status */}
        <div className="mt-3 flex justify-center">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm ${
              isOpen
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpen ? 'bg-white animate-pulse' : 'bg-white/50'
              }`}
            />
            {isOpen ? 'Aberto agora' : 'Fechado agora'}
          </div>
        </div>
      </div>
    </header>
  );
}
