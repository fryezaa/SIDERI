/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { KadesGreeting } from './components/KadesGreeting';
import { VillageStats } from './components/VillageStats';
import { ProfileSection } from './components/ProfileSection';
import { ServicesSection } from './components/ServicesSection';
import { BudgetSection } from './components/BudgetSection';
import { UMKMSection } from './components/UMKMSection';
import { NewsSection } from './components/NewsSection';
import { VillageMap } from './components/VillageMap';
import { ChatbotWidget } from './components/ChatbotWidget';
import { SelfServiceModal } from './components/SelfServiceModal';
import { Footer } from './components/Footer';
import { FileText, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState('beranda');
  const [selfServiceModalOpen, setSelfServiceModalOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>(undefined);

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'pelayanan', 'transparansi', 'umkm', 'kabar'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenSelfService = (serviceId?: string) => {
    setInitialServiceId(serviceId);
    setSelfServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3EBDD] text-[#2A1A10] flex flex-col font-sans relative selection:bg-[#C8642B] selection:text-[#F3EBDD]">
      {/* Preloader Animation */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSelfService={() => handleOpenSelfService()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero Section */}
        <div id="beranda">
          <Hero
            onExploreServices={() => handleNavigate('pelayanan')}
            onOpenChatbot={() => {
              // Scroll to chatbot or let user click floating button
              const el = document.getElementById('pelayanan');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreProfile={() => handleNavigate('profil')}
          />
        </div>

        {/* 02. Marquee Banner */}
        <Marquee />

        {/* 03. Sambutan Kepala Desa */}
        <KadesGreeting />

        {/* 04. Angka & Statistik Kependudukan */}
        <VillageStats />

        {/* 05. Profil & Sejarah Desa */}
        <ProfileSection />

        {/* 06. Pelayanan Publik & Dokumen Warga */}
        <ServicesSection onOpenSelfService={handleOpenSelfService} />

        {/* 07. Peta Digital & Titik Arsip Desa */}
        <VillageMap />

        {/* 08. Transparansi APBDes & Realisasi Fisik */}
        <BudgetSection />

        {/* 09. Potensi & Direktori UMKM Desa */}
        <UMKMSection />

        {/* 10. Kabar Desa & Lembaran Warta */}
        <NewsSection />

        {/* 11. Dark CTA Section (Gaya Cap Kertas Candlenut) */}
        <section className="py-16 lg:py-20 bg-[#4A2F1D] text-[#F3EBDD] border-t-2 border-[#2A1A10] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <span className="stamp-badge border-[#D9A441] text-[#D9A441] text-xs">
              LAYANAN CEPAT & BEBAS PUNGLI
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F3EBDD] leading-tight">
              Butuh Surat Pengantar Hari Ini?
            </h2>
            <p className="text-sm sm:text-base text-[#E8DCC6]/90 font-mono-archive max-w-2xl mx-auto leading-relaxed">
              Cek kelengkapan berkas Anda secara mandiri dari rumah, unduh tanda terima registrasi ber-barcode, dan bawa ke Loket Kantor Desa Kemiri.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenSelfService()}
                className="px-6 py-3.5 bg-[#C8642B] hover:bg-[#B35520] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all shadow-paper active:translate-x-1 active:translate-y-1 cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Buat Formulir Mandiri Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Citizen Self-Service Online Modal */}
      <SelfServiceModal
        isOpen={selfServiceModalOpen}
        onClose={() => setSelfServiceModalOpen(false)}
        initialServiceId={initialServiceId}
      />

      {/* Interactive Chatbot Widget ("Si Kemiri") */}
      <ChatbotWidget />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSelfService={() => handleOpenSelfService()}
      />
    </div>
  );
}
