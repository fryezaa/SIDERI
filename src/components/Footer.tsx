import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSelfService: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSelfService }) => {
  return (
    <footer className="bg-[#4A2F1D] text-[#F3EBDD] relative overflow-hidden border-t-2 border-[#2A1A10]">
      {/* Topography Contour Line Watermark */}
      <svg
        className="absolute -left-10 -bottom-10 w-[550px] h-[550px] text-[#F3EBDD]/5 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M50,250 C120,180 200,320 350,220 C420,170 480,290 520,250" />
        <path d="M30,280 C110,210 180,350 330,250 C400,200 460,320 500,280" />
        <path d="M10,310 C90,240 160,380 310,280 C380,230 440,350 480,310" />
        <circle cx="200" cy="280" r="120" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#F3EBDD]/15">
          {/* Col 1: Big Village Brand & Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="stamp-badge border-[#D9A441] text-[#D9A441] text-[10px] py-0 px-1.5">
                KODE KEMENDAGRI 36.03.11.2001
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-[#F3EBDD]">
              Desa Kemiri
            </h2>

            <p className="text-sm text-[#E8DCC6]/85 font-mono-archive leading-relaxed max-w-md">
              Portal sistem informasi resmi, transparansi keuangan APBDes, sarana pengajuan dokumen mandiri, dan katalog potensi pengrajin Desa Kemiri, Kecamatan Kemiri, Kabupaten Tangerang, Banten.
            </p>

            <div className="pt-2 text-xs font-mono-archive text-[#D9A441]">
              <span>Semboyan: "{VILLAGE_INFO.motto}"</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono-archive text-xs">
            <span className="font-bold uppercase tracking-wider text-[#D9A441] block border-b border-[#F3EBDD]/15 pb-2">
              Menu Navigasi Halaman
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  01. Beranda Depan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('profil')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  02. Profil & Sejarah Desa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pelayanan')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  03. Pelayanan Surat Mandiri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transparansi')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  04. Transparansi APBDes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('umkm')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  05. Potensi & Produk UMKM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kabar')}
                  className="text-[#E8DCC6] hover:text-[#C8642B] transition-colors cursor-pointer"
                >
                  06. Kabar & Warta Desa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono-archive text-xs">
            <span className="font-bold uppercase tracking-wider text-[#D9A441] block border-b border-[#F3EBDD]/15 pb-2">
              Kontak Kantor & Darurat
            </span>
            <div className="space-y-2.5 text-[#E8DCC6]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8642B] shrink-0 mt-0.5" />
                <span>{VILLAGE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8FA67A] shrink-0" />
                <span>{VILLAGE_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8642B] shrink-0" />
                <span>Loket Pelayanan: {VILLAGE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8FA67A] shrink-0" />
                <span>Ambulans Siaga Desa: 24 Jam (Gratis)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span>{VILLAGE_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Colophon Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-archive text-[#E8DCC6]/70">
          <div>
            © {new Date().getFullYear()} Pemerintah Desa Kemiri, Kec. Kemiri, Kab. Tangerang.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSelfService}
              className="hover:text-[#C8642B] underline"
            >
              Urus Surat Warga
            </button>
            <span>·</span>
            <span>Konsep Visual: Arsip Kemiri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
