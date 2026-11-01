import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Info, CheckCircle2 } from 'lucide-react';
import { MAP_LOCATIONS } from '../data/villageData';

export const VillageMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(MAP_LOCATIONS[0]);

  return (
    <section className="py-16 lg:py-24 bg-[#F3EBDD] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] rotate-[-1deg]">
                PETA TOPOGRAFI & TITIK ARSIP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#2A1A10]">
              Peta Ruang & Titik Vital Desa Kemiri
            </h2>
          </div>
          <p className="text-xs font-mono-archive text-[#4A2F1D]/80 max-w-sm">
            Klik penanda pada peta untuk meninjau fungsi gedung, alamat, dan jam operasional pelayanan masyarakat.
          </p>
        </div>

        {/* Map Frame + Interactive Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Sepia Archival Cartography Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-[#E8DCC6] p-4 sm:p-6 border-2 border-[#2A1A10] shadow-paper relative select-none">
            {/* Vintage Map Header */}
            <div className="flex items-center justify-between border-b border-[#2A1A10]/20 pb-3 mb-4 text-xs font-mono-archive text-[#4A2F1D]">
              <span className="font-bold tracking-wider uppercase text-[#2A1A10]">
                SKALA 1:15.000 · ATLAS ARSIP DESA KEMIRI
              </span>
              <span className="text-[11px] text-[#4A2F1D]/70 hidden sm:inline">
                KOORDINAT 6°05'22"S 106°27'48"E
              </span>
            </div>

            {/* Interactive SVG Canvas */}
            <div className="relative aspect-[16/10] bg-[#F7F2E7] border border-[#2A1A10]/30 overflow-hidden shadow-inner">
              {/* Paper grain in map */}
              <div className="absolute inset-0 paper-grain pointer-events-none" />

              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Grid coordinate lines */}
                <defs>
                  <pattern
                    id="grid-pattern"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="#2A1A10"
                      strokeWidth="0.1"
                      strokeOpacity="0.15"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-pattern)" />

                {/* River (Aliran Percabangan Kali Cidurian) */}
                <path
                  d="M 10,0 Q 15,35 12,50 T 22,85 T 18,100"
                  fill="none"
                  stroke="#8FA67A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <text
                  x="14"
                  y="45"
                  fontSize="2"
                  fill="#2F4A2B"
                  fontFamily="Space Mono"
                  className="rotate-75 origin-[14px_45px] opacity-70"
                >
                  KALI CIDURIAN
                </text>

                {/* Agricultural Rice Terrace Patches (Persawahan) */}
                <polygon
                  points="20,15 40,10 38,35 22,40"
                  fill="#8FA67A"
                  fillOpacity="0.18"
                  stroke="#8FA67A"
                  strokeWidth="0.4"
                  strokeDasharray="1 1"
                />
                <polygon
                  points="25,55 45,52 42,85 24,80"
                  fill="#8FA67A"
                  fillOpacity="0.22"
                  stroke="#8FA67A"
                  strokeWidth="0.4"
                  strokeDasharray="1 1"
                />
                <polygon
                  points="65,15 90,12 88,40 68,38"
                  fill="#8FA67A"
                  fillOpacity="0.18"
                  stroke="#8FA67A"
                  strokeWidth="0.4"
                  strokeDasharray="1 1"
                />

                {/* Main Arterial Road (Jl. Raya Kemiri - Kronjo) */}
                <path
                  d="M 0,65 Q 40,58 55,48 T 100,32"
                  fill="none"
                  stroke="#C8642B"
                  strokeWidth="2.2"
                />
                <path
                  d="M 0,65 Q 40,58 55,48 T 100,32"
                  fill="none"
                  stroke="#F3EBDD"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />

                {/* Secondary Village Roads */}
                <path
                  d="M 52,48 L 52,10"
                  fill="none"
                  stroke="#4A2F1D"
                  strokeWidth="1.2"
                  strokeDasharray="1 1"
                />
                <path
                  d="M 52,48 L 74,68"
                  fill="none"
                  stroke="#4A2F1D"
                  strokeWidth="1.2"
                  strokeDasharray="1 1"
                />
                <path
                  d="M 44,55 L 48,38"
                  fill="none"
                  stroke="#4A2F1D"
                  strokeWidth="1"
                  strokeDasharray="1 1"
                />

                {/* Hamlet Names in Canvas */}
                <text x="30" y="28" fontSize="2.8" fill="#4A2F1D" fontFamily="Fraunces" fontWeight="bold" opacity="0.65">
                  DUSUN I (Kemiri Kulon)
                </text>
                <text x="56" y="25" fontSize="2.8" fill="#4A2F1D" fontFamily="Fraunces" fontWeight="bold" opacity="0.65">
                  DUSUN II (Kemiri Wetan)
                </text>
                <text x="68" y="85" fontSize="2.8" fill="#4A2F1D" fontFamily="Fraunces" fontWeight="bold" opacity="0.65">
                  DUSUN IV (Santri Klebet)
                </text>
                <text x="35" y="88" fontSize="2.8" fill="#4A2F1D" fontFamily="Fraunces" fontWeight="bold" opacity="0.65">
                  DUSUN III (Karang Kobar)
                </text>

                {/* North Compass Rose */}
                <g transform="translate(90, 12)">
                  <circle cx="0" cy="0" r="4" fill="none" stroke="#2A1A10" strokeWidth="0.3" />
                  <path d="M 0,-4 L 1,0 L 0,-1 L -1,0 Z" fill="#C8642B" />
                  <path d="M 0,4 L 1,0 L 0,1 L -1,0 Z" fill="#2A1A10" />
                  <text x="0" y="-4.6" fontSize="2" textAnchor="middle" fill="#C8642B" fontFamily="Space Mono" fontWeight="bold">U</text>
                </g>
              </svg>

              {/* Interactive POI Pin Markers */}
              {MAP_LOCATIONS.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-hidden"
                    title={loc.name}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Active ping ring */}
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full border-2 border-[#C8642B] animate-ping opacity-60" />
                      )}
                      {/* Pin button */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 border-2 border-[#2A1A10] flex items-center justify-center text-xs font-bold transition-all shadow-paper-sm ${
                          isSelected
                            ? 'bg-[#C8642B] text-[#F3EBDD] scale-125 z-30'
                            : 'bg-[#F3EBDD] text-[#4A2F1D] hover:bg-[#E8DCC6]'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom quick legend */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-archive text-[#4A2F1D]/80">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-[#C8642B]" /> Jl. Raya Utama
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-[#8FA67A]" /> Aliran Kali Cidurian
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-2 bg-[#8FA67A]/30 border border-[#8FA67A]" /> Hamparan Sawah
                </span>
              </div>
              <span className="font-semibold text-[#C8642B]">
                {MAP_LOCATIONS.length} Titik Arsip Terdata
              </span>
            </div>
          </div>

          {/* Right: Selected Location Dossier Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 shadow-paper">
            <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-3 mb-4">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold">
                LEMBAR INFORMASI TITIK
              </span>
              <span className="font-mono-archive text-xs text-[#4A2F1D]/70">
                {selectedLocation.category}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-[#2A1A10] mb-3 leading-snug">
              {selectedLocation.name}
            </h3>

            <p className="text-sm text-[#4A2F1D]/90 leading-relaxed mb-6">
              {selectedLocation.description}
            </p>

            <div className="space-y-3 border-t border-[#2A1A10]/15 pt-4 text-xs font-mono-archive">
              <div className="flex items-start gap-2.5">
                <Navigation className="w-4 h-4 text-[#C8642B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2A1A10] block">Alamat / Lokasi:</span>
                  <span className="text-[#4A2F1D]">{selectedLocation.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2F4A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2A1A10] block">Jam Pelayanan / Akses:</span>
                  <span className="text-[#4A2F1D]">{selectedLocation.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick list of other spots */}
            <div className="mt-6 pt-4 border-t border-[#2A1A10]/15">
              <span className="text-[11px] font-mono-archive uppercase tracking-wider text-[#4A2F1D]/70 block mb-2 font-bold">
                Pilih Titik Lainnya:
              </span>
              <div className="flex flex-col gap-1.5 max-h-40 overflow-y-auto pr-1">
                {MAP_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`text-left text-xs py-1.5 px-2 transition-colors flex items-center justify-between ${
                      loc.id === selectedLocation.id
                        ? 'bg-[#E8DCC6] font-bold text-[#C8642B] border-l-2 border-[#C8642B]'
                        : 'text-[#4A2F1D] hover:bg-[#E8DCC6]/60'
                    }`}
                  >
                    <span className="truncate">{loc.name}</span>
                    {loc.id === selectedLocation.id && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8642B] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
