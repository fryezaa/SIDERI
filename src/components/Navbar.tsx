import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSelfService: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSelfService,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'pelayanan', label: 'Pelayanan' },
    { id: 'transparansi', label: 'Transparansi' },
    { id: 'umkm', label: 'Potensi UMKM' },
    { id: 'kabar', label: 'Kabar Desa' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F3EBDD]/95 backdrop-blur-xs border-b border-[#2A1A10]/15 transition-all">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('beranda');
            }}
            className="text-xl sm:text-2xl font-display font-bold tracking-tight text-[#2A1A10] whitespace-nowrap shrink-0 hover:text-[#C8642B] transition-colors"
          >
            Desa Kemiri
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A2F1D]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#C8642B] font-semibold'
                      : 'hover:text-[#2A1A10]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C8642B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSelfService}
              className="px-4 py-2 text-xs font-mono-archive uppercase tracking-wider text-[#F3EBDD] bg-[#C8642B] hover:bg-[#B35520] transition-transform active:translate-x-[2px] active:translate-y-[2px] shadow-paper-sm whitespace-nowrap shrink-0 font-bold"
            >
              Urus Surat Warga
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka Menu Navigasi"
              className="lg:hidden p-2 text-[#2A1A10] hover:text-[#C8642B] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay (Editorial style with numbered items 01-06) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F3EBDD] flex flex-col justify-between p-6 sm:p-10 select-none animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-4">
            <span className="text-xl font-display font-bold text-[#2A1A10]">
              Desa Kemiri
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup Menu"
              className="p-2 text-[#2A1A10] hover:text-[#C8642B] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Numbered Menu items */}
          <div className="flex flex-col gap-4 my-auto">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group flex items-baseline gap-4 text-left py-2 border-b border-[#2A1A10]/10 hover:border-[#C8642B] transition-all"
              >
                <span className="font-mono-archive text-xs text-[#C8642B] font-bold">
                  0{index + 1}
                </span>
                <span className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10] group-hover:text-[#C8642B] transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom details in mobile drawer */}
          <div className="border-t border-[#2A1A10]/15 pt-4 text-xs font-mono-archive text-[#4A2F1D]/80 flex flex-col sm:flex-row justify-between gap-2">
            <span>Kantor: 08.00 – 15.00 WIB</span>
            <span>Kec. Kemiri, Tangerang, Banten</span>
          </div>
        </div>
      )}
    </>
  );
};
