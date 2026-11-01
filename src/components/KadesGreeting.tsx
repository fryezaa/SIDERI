import React from 'react';
import { Quote } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';

export const KadesGreeting: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#E8DCC6] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Duotone Portrait of Kepala Desa with archival framing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Offset shadow card */}
              <div className="absolute inset-0 bg-[#4A2F1D] translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative bg-[#F3EBDD] p-3 border-2 border-[#2A1A10]">
                <div className="overflow-hidden aspect-[3/4] border border-[#2A1A10]/20 bg-[#2A1A10]/10">
                  <img
                    src="/src/assets/images/kades_portrait_1792546240115.jpg"
                    alt="Kepala Desa Kemiri Jamaludin, S.IP"
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="pt-3 pb-1 text-center font-mono-archive">
                  <h4 className="font-bold text-[#2A1A10] text-sm">
                    {VILLAGE_INFO.kadesName}
                  </h4>
                  <p className="text-xs text-[#C8642B] font-semibold">
                    Kepala Desa Kemiri (Periode 2021 – 2027)
                  </p>
                  <p className="text-[11px] text-[#4A2F1D]/70 mt-0.5">
                    Surat Keputusan Bupati Tangerang No. 141/2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Big Serif Pull Quote & Message */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold">
                Kata Pengantar Pamong Desa
              </span>
              <span className="text-[#2A1A10]/30">/</span>
              <span className="font-mono-archive text-xs text-[#4A2F1D]/70">
                Edisi Buka Layanan 2026
              </span>
            </div>

            <div className="relative">
              <Quote className="w-12 h-12 text-[#C8642B]/20 absolute -top-4 -left-4 -z-10" />
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#2A1A10] leading-snug">
                “Pintu balai desa selalu terbuka, namun keterbukaan yang sejati adalah ketika hak, anggaran, dan syarat layanan warga dapat dibaca secara gamblang tanpa sekat birokrasi.”
              </blockquote>
            </div>

            <p className="text-[#4A2F1D]/90 leading-relaxed text-base sm:text-lg">
              Desa Kemiri bukan sekadar titik geografis di pesisir Tangerang Utara. Ini adalah rumah bagi ribuan jiwa petani, pedagang pasar, pengrajin anyaman bambu, dan pengolah kemiri yang pantang menyerah. Melalui portal arsip ini, setiap sen rupiah Dana Desa, setiap jengkal betonisasi jalan lingkungan, dan setiap syarat administrasi kependudukan kami bentangkan secara terbuka.
            </p>

            <div className="pt-4 border-t border-[#2A1A10]/15 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-display font-bold text-lg text-[#2A1A10]">
                  Jamaludin, S.IP
                </p>
                <p className="text-xs font-mono-archive text-[#4A2F1D]/80">
                  Kepala Desa Kemiri · Kec. Kemiri, Kab. Tangerang
                </p>
              </div>

              {/* Rubber Stamp Imprint */}
              <div className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] rotate-2 bg-[#F3EBDD]/50 px-3 py-1">
                KAPALA DESA KEMIRI · SAH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
