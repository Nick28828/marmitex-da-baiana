import { useCartContext } from '../contexts/CartContext';
import { useStoreStatus } from '../hooks/useStoreStatus';

export function Header() {
  const { totalItems, setIsOpen } = useCartContext();
  const { isOpen } = useStoreStatus();

  return (
    <header className="relative overflow-hidden bg-[linear-gradient(135deg,#F7B733_0%,#F28C28_58%,#D9482B_118%)] text-[#2A1B16]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-14 -top-14 h-44 w-44 rounded-full border-[28px] border-white/10" />
        <div className="absolute -right-20 top-4 h-52 w-52 rounded-full bg-white/8" />
        <svg className="absolute bottom-0 left-0 h-20 w-full text-[#8C3E24]/20" viewBox="0 0 600 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M0 84h42V58h12V41h10v17h11v26h37V68h17V51h12v17h20V84h42V63h12V45h10v18h8v21h47V55h9V35h11v20h12v29h47V65h15V48h10v17h20v19h41V57h10V40h12v17h16v27h53v16H0z" />
        </svg>
        <svg className="absolute right-5 top-12 h-24 w-24 text-[#106B43]/18" viewBox="0 0 100 100" fill="currentColor">
          <path d="M51 93h-6l3-51h5zM50 36C39 23 25 21 14 26c13 2 23 8 31 17-4-17 0-29 9-37 1 14 0 25-3 34 11-14 24-19 38-16-13 6-23 13-31 22 13-5 24-4 34 2-16 1-28 4-38 9z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[520px] px-4 pb-10 pt-5 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-[4px] border-white/85 bg-[#FFF4C8] shadow-[0_9px_25px_rgba(110,48,20,.22)]">
              <img src="/brand/logo-baiana.svg" alt="Logo Marmitex da Baiana" className="h-full w-full object-cover" />
            </div>

            <div className="min-w-0">
              <div className="font-display text-[1.65rem] font-black leading-[.91] tracking-[-.035em] drop-shadow-[0_1px_0_rgba(255,255,255,.3)] sm:text-[1.85rem]">
                <span className="block text-[#2A1B16]">Marmitex</span>
                <span className="block text-[#A72F1C]">da Baiana</span>
              </div>
              <p className="mt-2 max-w-[210px] text-[9px] font-extrabold uppercase tracking-[.15em] text-[#6D2B18]/85">
                Sabor caseiro com alma baiana
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir carrinho"
            className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/90 text-[#7B301B] shadow-md transition hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.55h7.8a2 2 0 0 0 1.95-1.57L21 7H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 grid min-h-[20px] min-w-[20px] place-items-center rounded-full bg-[#D9482B] px-1 text-[10px] font-black text-white shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <div className={`inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/85 px-3 py-1.5 text-[11px] font-extrabold shadow-sm ${isOpen ? 'text-[#106B43]' : 'text-[#A72F1C]'}`}>
            <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-[#23A55A] animate-pulse' : 'bg-[#D9482B]'}`} />
            {isOpen ? 'Aberto agora' : 'Fechado agora'}
          </div>
          <span className="rounded-full border border-white/35 bg-[#6F2A18]/12 px-3 py-1.5 text-[11px] font-bold text-[#6F2A18]">Entrega e retirada</span>
        </div>
      </div>
    </header>
  );
}
