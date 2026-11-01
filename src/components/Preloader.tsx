import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'cracking' | 'opening' | 'revealed'>('initial');

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasSeen = sessionStorage.getItem('kemiri_preloader_seen');
    if (hasSeen === 'true') {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage('cracking'), 400);
    const t2 = setTimeout(() => setStage('opening'), 1100);
    const t3 = setTimeout(() => setStage('revealed'), 1700);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('kemiri_preloader_seen', 'true');
      onComplete();
    }, 2400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sessionStorage.setItem('kemiri_preloader_seen', 'true');
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('kemiri_preloader_seen', 'true');
    onComplete();
  };

  return (
    <aside 
      aria-label="Animasi Pembuka Desa Kemiri"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F3EBDD] text-[#2A1A10] p-6 transition-opacity duration-700 select-none"
    >
      {/* Background paper texture & contour lines */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-md text-center">
        {/* Candlenut SVG Motif with cracking animation */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Candlenut left shell */}
            <path
              d="M 60 15 C 35 15, 18 38, 20 68 C 22 92, 42 105, 58 105 L 59 15 Z"
              fill="#4A2F1D"
              stroke="#2A1A10"
              strokeWidth="2.5"
              className={`transition-all duration-700 origin-bottom-left ${
                stage === 'opening' || stage === 'revealed'
                  ? '-translate-x-3 -rotate-12 opacity-90'
                  : ''
              }`}
            />
            {/* Candlenut right shell */}
            <path
              d="M 60 15 C 85 15, 102 38, 100 68 C 98 92, 78 105, 62 105 L 61 15 Z"
              fill="#4A2F1D"
              stroke="#2A1A10"
              strokeWidth="2.5"
              className={`transition-all duration-700 origin-bottom-right ${
                stage === 'opening' || stage === 'revealed'
                  ? 'translate-x-3 rotate-12 opacity-90'
                  : ''
              }`}
            />
            {/* Inner Seed / Kernel (Earthy cream kernel revealed from the dark husk) */}
            <path
              d="M 60 28 C 45 28, 38 46, 40 68 C 42 85, 52 94, 60 94 C 68 94, 78 85, 80 68 C 82 46, 75 28, 60 28 Z"
              fill="#E8DCC6"
              stroke="#C8642B"
              strokeWidth="2"
              className={`transition-all duration-700 ${
                stage === 'opening' || stage === 'revealed'
                  ? 'scale-110 opacity-100'
                  : 'scale-90 opacity-0'
              }`}
            />
            {/* Crack zigzag line */}
            <path
              d="M 60 16 L 57 38 L 63 55 L 58 72 L 62 88 L 60 104"
              fill="none"
              stroke="#E8DCC6"
              strokeWidth="2.5"
              strokeDasharray="95"
              strokeDashoffset={stage === 'initial' ? 95 : 0}
              className="transition-all duration-500 ease-out"
            />
          </svg>
        </div>

        {/* Text Reveal */}
        <div className="space-y-2">
          <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-semibold">
            Arsip & Sistem Informasi
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10] tracking-tight">
            Desa Kemiri
          </h1>
          <p className="text-xs sm:text-sm text-[#4A2F1D]/80 font-mono-archive tracking-wider">
            Kecamatan Kemiri · Kabupaten Tangerang
          </p>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="mt-10 px-4 py-1.5 text-xs font-mono-archive uppercase tracking-widest text-[#4A2F1D]/70 hover:text-[#C8642B] border border-[#2A1A10]/20 hover:border-[#C8642B] transition-colors rounded-none"
        >
          Lewati [ESC]
        </button>
      </div>
    </aside>
  );
};
