import React, { useState, useEffect } from 'react';
import { VILLAGE_INFO } from '../data/villageData';

export const VillageStats: React.FC = () => {
  const [counts, setCounts] = useState({
    pop: 0,
    area: 0,
    hamlets: 0,
    umkm: 0,
  });

  useEffect(() => {
    const duration = 1400;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        pop: Math.floor(progress * VILLAGE_INFO.stats.population),
        area: +(progress * VILLAGE_INFO.stats.areaHa).toFixed(1),
        hamlets: Math.floor(progress * VILLAGE_INFO.stats.hamletsCount),
        umkm: Math.floor(progress * VILLAGE_INFO.stats.activeUMKM),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          pop: VILLAGE_INFO.stats.population,
          area: VILLAGE_INFO.stats.areaHa,
          hamlets: VILLAGE_INFO.stats.hamletsCount,
          umkm: VILLAGE_INFO.stats.activeUMKM,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#F3EBDD] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold block mb-1">
              Catatan Demografi & Wilayah
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#2A1A10]">
              Angka & Realitas Desa Kemiri
            </h2>
          </div>
          <div className="text-xs font-mono-archive text-[#4A2F1D]/80">
            Sumber Data: Pendataan Profil Desa & Registrasi Semester II 2026
          </div>
        </div>

        {/* 4 Large Archival KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1: Penduduk */}
          <div className="p-6 bg-[#E8DCC6] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <span className="font-mono-archive text-xs uppercase tracking-wider text-[#4A2F1D]/80 font-bold">
              01 / Kependudukan
            </span>
            <div className="my-5">
              <div className="text-4xl sm:text-5xl font-display font-semibold text-[#2A1A10] tabular-nums">
                {counts.pop.toLocaleString('id-ID')}
              </div>
              <div className="text-sm font-semibold text-[#4A2F1D] mt-1">
                Jiwa Penduduk Terdaftar
              </div>
            </div>
            <div className="text-xs text-[#4A2F1D]/80 font-mono-archive pt-3 border-t border-[#2A1A10]/15 flex items-center justify-between">
              <span>2.314 KK</span>
              <span>·</span>
              <span>4.280 L / 4.140 P</span>
            </div>
          </div>

          {/* Stat 2: Luas Wilayah */}
          <div className="p-6 bg-[#E8DCC6] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <span className="font-mono-archive text-xs uppercase tracking-wider text-[#4A2F1D]/80 font-bold">
              02 / Hamparan Wilayah
            </span>
            <div className="my-5">
              <div className="text-4xl sm:text-5xl font-display font-semibold text-[#2F4A2B] tabular-nums">
                {counts.area}
                <span className="text-2xl font-normal ml-1">Ha</span>
              </div>
              <div className="text-sm font-semibold text-[#4A2F1D] mt-1">
                Luas Wilayah Administrasi
              </div>
            </div>
            <div className="text-xs text-[#4A2F1D]/80 font-mono-archive pt-3 border-t border-[#2A1A10]/15 flex items-center justify-between">
              <span>218,4 Ha Lahan Tani</span>
              <span>·</span>
              <span>Pesisir Tangerang</span>
            </div>
          </div>

          {/* Stat 3: Dusun & Rukun Tetangga */}
          <div className="p-6 bg-[#E8DCC6] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <span className="font-mono-archive text-xs uppercase tracking-wider text-[#4A2F1D]/80 font-bold">
              03 / Lingkungan Warga
            </span>
            <div className="my-5">
              <div className="text-4xl sm:text-5xl font-display font-semibold text-[#C8642B] tabular-nums">
                {counts.hamlets}
                <span className="text-2xl font-normal ml-1">Dusun</span>
              </div>
              <div className="text-sm font-semibold text-[#4A2F1D] mt-1">
                Gugus Kampung Berakar
              </div>
            </div>
            <div className="text-xs text-[#4A2F1D]/80 font-mono-archive pt-3 border-t border-[#2A1A10]/15 flex items-center justify-between">
              <span>8 Rukun Warga (RW)</span>
              <span>·</span>
              <span>24 Rukun Tetangga (RT)</span>
            </div>
          </div>

          {/* Stat 4: UMKM & Pertanian */}
          <div className="p-6 bg-[#E8DCC6] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <span className="font-mono-archive text-xs uppercase tracking-wider text-[#4A2F1D]/80 font-bold">
              04 / Daya Ekonomi
            </span>
            <div className="my-5">
              <div className="text-4xl sm:text-5xl font-display font-semibold text-[#D9A441] tabular-nums">
                {counts.umkm}+
              </div>
              <div className="text-sm font-semibold text-[#4A2F1D] mt-1">
                UMKM & Kelompok Tani
              </div>
            </div>
            <div className="text-xs text-[#4A2F1D]/80 font-mono-archive pt-3 border-t border-[#2A1A10]/15 flex items-center justify-between">
              <span>Minyak Kemiri</span>
              <span>·</span>
              <span>Kriya Bambu & Kuliner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
