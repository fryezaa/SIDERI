import React from 'react';
import { FileText, Sparkles, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';

interface HeroProps {
  onExploreServices: () => void;
  onOpenChatbot: () => void;
  onExploreProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onOpenChatbot,
  onExploreProfile,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#2A1A10]/15">
      {/* Background paper noise */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Topography Contour Line Watermark SVG Accent (very light, authentic) */}
      <svg
        className="absolute -right-20 -top-20 w-[600px] h-[600px] text-[#4A2F1D]/5 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M50,250 C120,180 200,320 350,220 C420,170 480,290 520,250" />
        <path d="M30,280 C110,210 180,350 330,250 C400,200 460,320 500,280" />
        <path d="M10,310 C90,240 160,380 310,280 C380,230 440,350 480,310" />
        <circle cx="280" cy="220" r="140" strokeDasharray="4 4" />
        <circle cx="280" cy="220" r="190" strokeDasharray="2 4" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Operational Utility Ribbon */}
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono-archive text-[#4A2F1D]/80 border-b border-[#2A1A10]/10 pb-3">
          <div className="flex items-center gap-1.5 text-[#2F4A2B] font-bold">
            <span className="w-2 h-2 rounded-none bg-[#2F4A2B]" />
            <span>KANTOR PELAYANAN BUKA</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8642B]" />
            <span>08.00 – 15.00 WIB</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2F4A2B]" />
            <span>Biaya Dokumen: Rp 0 (Bebas Pungli)</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C8642B]" />
            <span>Kecamatan Kemiri, Kabupaten Tangerang</span>
          </div>
        </div>

        {/* Asymmetrical Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Display Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Archival Stamp Imprint */}
            <div className="flex items-center gap-3">
              <span className="stamp-badge border-[#C8642B] text-[#C8642B] rotate-[-1.5deg] shadow-xs">
                ARSIP RESMI DESA · NO. 36.03.11.2001
              </span>
              <span className="text-xs font-mono-archive text-[#4A2F1D]/70 tracking-wider">
                PROVINSI BANTEN
              </span>
            </div>

            {/* Display XL Headline with Fraunces roman + italic harmony */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#2A1A10] leading-[1.08] tracking-tight">
              Dari Tanah Subur Tangerang,{' '}
              <span className="italic font-normal text-[#C8642B]">
                Membuka Ruang Terbuka
              </span>{' '}
              Bagi Seluruh Warga.
            </h1>

            {/* Sub-essay text with relaxed leading */}
            <p className="text-base sm:text-lg text-[#4A2F1D]/90 leading-relaxed max-w-2xl">
              Selamat membaca lembaran kabar, data APBDes yang transparan, dan akses kilat persuratan administrasi kependudukan Desa Kemiri. Kami hadir melayani dengan martabat, kehangatan agraris, dan keterbukaan tanpa perantara.
            </p>

            {/* Primary Action Buttons (Hard shadow, no rounded pills) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="group px-6 py-3.5 bg-[#C8642B] hover:bg-[#B35520] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all shadow-paper active:translate-x-1 active:translate-y-1 cursor-pointer flex items-center gap-2.5"
              >
                <FileText className="w-4 h-4" />
                <span>Pelayanan Surat Mandiri</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenChatbot}
                className="px-5 py-3.5 bg-transparent border-1.5 border-[#2A1A10] text-[#2A1A10] hover:bg-[#2A1A10] hover:text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D9A441]" />
                <span>Tanya Si Kemiri (Asisten Warga)</span>
              </button>

              <button
                onClick={onExploreProfile}
                className="text-xs font-mono-archive uppercase tracking-wider text-[#4A2F1D] underline underline-offset-4 decoration-[#C8642B] hover:text-[#C8642B] transition-colors py-2"
              >
                Baca Sejarah Desa →
              </button>
            </div>
          </div>

          {/* Right Column: Tilted Cut Photo of Kantor Desa (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Tilted frame backdrop */}
            <div className="absolute inset-0 bg-[#E8DCC6] border border-[#2A1A10]/20 translate-x-3 translate-y-3 shadow-paper pointer-events-none" />

            {/* Photo Card with tilted cut and documentary caption */}
            <div className="relative bg-[#F3EBDD] p-3 border border-[#2A1A10]/30 z-10">
              <div className="overflow-hidden border border-[#2A1A10]/20 bg-[#2A1A10]/5 aspect-[16/10]">
                <img
                  src="/src/assets/images/hero_kantor_desa_1792546239618.jpg"
                  alt="Kantor Pelayanan Terpadu Desa Kemiri Kabupaten Tangerang"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Archival Caption */}
              <div className="pt-3 pb-1 px-1 flex items-start justify-between gap-3 text-xs font-mono-archive text-[#4A2F1D]/80">
                <div>
                  <span className="font-bold text-[#2A1A10] block">
                    Gedung Balai & Kantor Desa Kemiri
                  </span>
                  <span className="text-[11px] text-[#4A2F1D]/70">
                    Jl. Raya Kemiri – Kronjo No. 01 · Kec. Kemiri
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] uppercase border border-[#2A1A10]/30 px-1.5 py-0.5 bg-[#E8DCC6]">
                    DOK. ARSIP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
