import React from 'react';

export const Marquee: React.FC = () => {
  const phrase = [
    "DUSUN I KEMIRI KULON",
    "DUSUN II KEMIRI WETAN",
    "DUSUN III KARANG KOBAR",
    "DUSUN IV SANTRI KLEBET",
    "SILIH ASIH SILIH ASUH",
    "GUYUB KU GOTONG ROYONG",
    "MEKAR KU MANDIRI",
    "KABUPATEN TANGERANG",
    "ARUMING KEMIRI SUMRAMBAH WANGI",
  ];

  return (
    <div 
      className="bg-[#4A2F1D] text-[#F3EBDD] py-3 overflow-hidden border-y border-[#2A1A10] select-none"
      aria-label="Daftar Dusun dan Semboyan Desa Kemiri"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {phrase.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span className="font-mono-archive text-xs tracking-[0.2em] font-semibold text-[#E8DCC6]">
                {item}
              </span>
              <span className="text-[#C8642B] font-mono-archive text-xs">◆</span>
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {phrase.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span className="font-mono-archive text-xs tracking-[0.2em] font-semibold text-[#E8DCC6]">
                {item}
              </span>
              <span className="text-[#C8642B] font-mono-archive text-xs">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
