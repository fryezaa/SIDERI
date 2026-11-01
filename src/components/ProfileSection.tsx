import React, { useState } from 'react';
import { Compass, Users, ScrollText, Landmark, ShieldCheck } from 'lucide-react';
import { VILLAGE_INFO, VILLAGE_OFFICIALS } from '../data/villageData';

export const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visimisi' | 'wilayah' | 'pamong'>('sejarah');

  return (
    <section id="profil" className="py-16 lg:py-24 bg-[#E8DCC6] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#C8642B] text-[#C8642B] rotate-[-1deg]">
                02 / BUKU PROFIL & BABAD DESA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10]">
              Jejak Sejarah, Visi, & Pamong Kemiri
            </h2>
          </div>
          <p className="text-xs font-mono-archive text-[#4A2F1D]/80 max-w-sm">
            Arsip lengkap sejarah asal-usul tanah Kemiri, rumusan cita-cita bersama, serta jajaran aparatur pamong pengabdi warga.
          </p>
        </div>

        {/* Tab Controls (Clean segmented paper tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#2A1A10]/15">
          <button
            onClick={() => setActiveTab('sejarah')}
            className={`px-4 py-2 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'sejarah'
                ? 'bg-[#4A2F1D] text-[#F3EBDD] shadow-paper-sm'
                : 'bg-[#F3EBDD] text-[#4A2F1D] hover:bg-[#F3EBDD]/80'
            }`}
          >
            Sejarah Asal-Usul
          </button>
          <button
            onClick={() => setActiveTab('visimisi')}
            className={`px-4 py-2 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'visimisi'
                ? 'bg-[#4A2F1D] text-[#F3EBDD] shadow-paper-sm'
                : 'bg-[#F3EBDD] text-[#4A2F1D] hover:bg-[#F3EBDD]/80'
            }`}
          >
            Visi & Misi Resmi
          </button>
          <button
            onClick={() => setActiveTab('wilayah')}
            className={`px-4 py-2 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'wilayah'
                ? 'bg-[#4A2F1D] text-[#F3EBDD] shadow-paper-sm'
                : 'bg-[#F3EBDD] text-[#4A2F1D] hover:bg-[#F3EBDD]/80'
            }`}
          >
            Batas Wilayah & Warga
          </button>
          <button
            onClick={() => setActiveTab('pamong')}
            className={`px-4 py-2 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'pamong'
                ? 'bg-[#4A2F1D] text-[#F3EBDD] shadow-paper-sm'
                : 'bg-[#F3EBDD] text-[#4A2F1D] hover:bg-[#F3EBDD]/80'
            }`}
          >
            Struktur Pamong Desa
          </button>
        </div>

        {/* Content Panel: Sejarah Asal-Usul */}
        {activeTab === 'sejarah' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-fadeIn">
            {/* Left: Archival narrative */}
            <div className="lg:col-span-7 bg-[#F3EBDD] p-6 sm:p-10 border-2 border-[#2A1A10] shadow-paper space-y-6">
              <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-3">
                <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold">
                  BABAD TANAH KEMIRI · TANGERANG UTARA
                </span>
                <span className="font-mono-archive text-xs text-[#4A2F1D]/70">
                  Dihimpun dari Tetua Adat
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#2A1A10] leading-snug">
                Pohon Kemiri Keramat & Persinggahan Dagang Rempah Abad ke-19
              </h3>

              <div className="text-base text-[#4A2F1D]/90 leading-relaxed space-y-4">
                <p className="article-drop-cap">
                  Nama Desa Kemiri tidak lahir secara kebetulan dari meja birokrasi, melainkan berakar dari rimbunnya pohon kemiri raksasa purba yang tumbuh berjejer di bantaran tanggul kali purba penghubung pesisir Laut Jawa dengan pedalaman Tangerang. Pada paruh awal abad ke-19, lokasi ini menjadi tempat persinggahan kafilah pedagang, perahu getek, dan para petani pengangkut rempah bumbu dapur.
                </p>
                <p>
                  Para pedagang yang melintasi jalur Kronjo menuju Batavia kerap beristirahat di bawah keteduhan dahan pohon kemiri yang berbunga putih wangi. Biji-biji kemiri yang berjatuhan dikumpulkan oleh warga setempat untuk disangrai menjadi minyak penerang lentera malam dan bumbu masakan dapur yang harum menggugah selera.
                </p>
                <p>
                  Ketika tatanan desa mandiri pertama kali dibentuk secara formal pada era pasca kemerdekaan, para tetua dan pemuka agama sepakat mengabadikan pohon tersebut menjadi nama desa: <strong>Kemiri</strong>. Metafora ini melambangkan filosofi biji kemiri — memiliki kulit tempurung yang keras melindungi inti di dalamnya, namun ketika dibuka dan diolah dengan ketekunan, memancarkan minyak yang memberi kehangatan, cahaya, dan gurihnya penghidupan bagi seluruh masyarakat.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A1A10]/15 flex items-center justify-between text-xs font-mono-archive text-[#4A2F1D]/80">
                <span>Dokumen Arsip Sejarah Desa Kemiri</span>
                <span className="text-[#C8642B] font-bold">Terverifikasi Lembaga Adat</span>
              </div>
            </div>

            {/* Right: Archival photo of landscape and community */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F3EBDD] p-3 border-2 border-[#2A1A10] shadow-paper">
                <div className="aspect-[16/10] overflow-hidden border border-[#2A1A10]/20">
                  <img
                    src="/src/assets/images/sawah_kemiri_1792546240124.jpg"
                    alt="Lanskap Persawahan dan Pohon Kemiri di Tangerang"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-3 px-1 text-xs font-mono-archive text-[#4A2F1D]">
                  <span className="font-bold block text-[#2A1A10]">Hamparan Alam & Sawah Desa Kemiri</span>
                  <span className="text-[11px] text-[#4A2F1D]/70">Lahan subur aluvial yang terus dirawat secara turun temurun</span>
                </div>
              </div>

              <div className="bg-[#F3EBDD] p-5 border border-[#2A1A10]/20 space-y-3 font-mono-archive text-xs">
                <div className="flex items-center gap-2 text-[#C8642B] font-bold">
                  <ScrollText className="w-4 h-4" />
                  <span>3 NILAI UTAMA KEMIRI</span>
                </div>
                <ul className="space-y-2 text-[#4A2F1D] pl-2 border-l border-[#C8642B]/40">
                  <li><strong>Kukuh (Tempurung):</strong> Keteguhan menjaga kerukunan antarwarga dan adat istiadat luhur.</li>
                  <li><strong>Cahaya (Minyak):</strong> Keterbukaan informasi dan pelayanan jujur tanpa pungutan liar.</li>
                  <li><strong>Gurih (Inti Biji):</strong> Kesejahteraan ekonomi yang dirasakan merata hingga ke dusun terdalam.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Content Panel: Visi & Misi */}
        {activeTab === 'visimisi' && (
          <div className="max-w-4xl mx-auto bg-[#F3EBDD] p-8 sm:p-12 border-2 border-[#2A1A10] shadow-paper-lg space-y-8 animate-fadeIn">
            {/* Vintage charter header */}
            <div className="text-center border-b-2 border-[#2A1A10] pb-6 space-y-2">
              <span className="font-mono-archive text-xs uppercase tracking-[0.2em] text-[#C8642B] font-bold">
                LEMBARAN KETETAPAN RPJMDES TAHUN 2021 – 2027
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#2A1A10]">
                Visi & Misi Pemerintah Desa Kemiri
              </h3>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80">
                Kecamatan Kemiri · Kabupaten Tangerang · Provinsi Banten
              </p>
            </div>

            {/* Visi Statement */}
            <div className="bg-[#E8DCC6] p-6 border-l-4 border-[#C8642B] space-y-2">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold block">
                VISI PEMBANGUNAN
              </span>
              <p className="text-xl sm:text-2xl font-display italic font-medium text-[#2A1A10] leading-snug">
                “Terwujudnya Desa Kemiri yang Beriman, Maju Berbasis Ekonomi Kerakyatan dan Potensi Agraris, Menuju Tata Kelola Pemerintahan yang Bersih, Mandiri, dan Transparan.”
              </p>
            </div>

            {/* Misi List */}
            <div className="space-y-4">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#2F4A2B] font-bold block">
                5 MISI STRATEGIS
              </span>
              <div className="space-y-3 font-mono-archive text-sm text-[#4A2F1D]">
                <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3">
                  <span className="font-bold text-[#C8642B] text-base">01.</span>
                  <p>Meningkatkan kualitas pelayanan administrasi kependudukan yang cepat, santun, bebas pungutan liar (Rp 0), dan berbasis digital terpadu.</p>
                </div>
                <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3">
                  <span className="font-bold text-[#C8642B] text-base">02.</span>
                  <p>Membangun dan memelihara infrastruktur jalan lingkungan, jembatan tani, dan drainase antardusun secara adil dan merata.</p>
                </div>
                <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3">
                  <span className="font-bold text-[#C8642B] text-base">03.</span>
                  <p>Memperkuat hilirisasi produk unggulan kemiri lokal, kriya anyaman bambu, dan pertanian organik melalui pendampingan UMKM serta BUMDes.</p>
                </div>
                <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3">
                  <span className="font-bold text-[#C8642B] text-base">04.</span>
                  <p>Meningkatkan derajat kesehatan ibu-anak melalui revitalisasi posyandu balita terpadu dan pencegahan stunting sedini mungkin.</p>
                </div>
                <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3">
                  <span className="font-bold text-[#C8642B] text-base">05.</span>
                  <p>Menjaga kelestarian lingkungan hidup persawahan, kebersihan kali saluran air, dan memelihara semangat gotong royong warga desa.</p>
                </div>
              </div>
            </div>

            {/* Endorsement signature stamp */}
            <div className="pt-6 border-t border-[#2A1A10]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono-archive text-[#4A2F1D]">
                <p>Disahkan di Balai Desa Kemiri</p>
                <p className="font-bold text-[#2A1A10]">Jamaludin, S.IP — Kepala Desa</p>
              </div>
              <div className="stamp-badge border-[#C8642B] text-[#C8642B] rotate-1">
                KONSENSUS WARGA & BPD
              </div>
            </div>
          </div>
        )}

        {/* Content Panel: Wilayah & Demografi */}
        {activeTab === 'wilayah' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Left: Hamlets breakdown */}
            <div className="lg:col-span-6 bg-[#F3EBDD] p-6 sm:p-8 border-2 border-[#2A1A10] shadow-paper space-y-6">
              <div className="flex items-center gap-2 border-b border-[#2A1A10]/15 pb-3">
                <Compass className="w-5 h-5 text-[#C8642B]" />
                <h3 className="text-xl font-display font-bold text-[#2A1A10]">
                  Gugus 4 Dusun Desa Kemiri
                </h3>
              </div>

              <div className="space-y-4">
                {VILLAGE_INFO.hamlets.map((h, i) => (
                  <div key={i} className="p-4 bg-[#E8DCC6] border border-[#2A1A10]/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-[#2A1A10] text-lg">
                        {h.name}
                      </span>
                      <span className="font-mono-archive text-xs font-bold text-[#C8642B]">
                        {h.rw}
                      </span>
                    </div>
                    <div className="text-xs font-mono-archive text-[#4A2F1D] flex items-center justify-between pt-2 border-t border-[#2A1A10]/10">
                      <span>Kepala Dusun: {h.head}</span>
                      <span>{h.population.toLocaleString('id-ID')} Jiwa</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Boundaries list */}
              <div className="pt-4 border-t border-[#2A1A10]/15">
                <span className="text-xs font-mono-archive uppercase font-bold text-[#4A2F1D] block mb-2">
                  Batas Wilayah Administratif:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono-archive text-[#4A2F1D]">
                  <div className="p-2 bg-[#E8DCC6]/60 border border-[#2A1A10]/10">
                    <strong>Utara:</strong> {VILLAGE_INFO.boundaries.north}
                  </div>
                  <div className="p-2 bg-[#E8DCC6]/60 border border-[#2A1A10]/10">
                    <strong>Selatan:</strong> {VILLAGE_INFO.boundaries.south}
                  </div>
                  <div className="p-2 bg-[#E8DCC6]/60 border border-[#2A1A10]/10">
                    <strong>Timur:</strong> {VILLAGE_INFO.boundaries.east}
                  </div>
                  <div className="p-2 bg-[#E8DCC6]/60 border border-[#2A1A10]/10">
                    <strong>Barat:</strong> {VILLAGE_INFO.boundaries.west}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Occupational breakdown infographic */}
            <div className="lg:col-span-6 bg-[#F3EBDD] p-6 sm:p-8 border-2 border-[#2A1A10] shadow-paper space-y-6">
              <div className="flex items-center gap-2 border-b border-[#2A1A10]/15 pb-3">
                <Users className="w-5 h-5 text-[#2F4A2B]" />
                <h3 className="text-xl font-display font-bold text-[#2A1A10]">
                  Mata Pencaharian Utama Warga
                </h3>
              </div>

              <p className="text-sm text-[#4A2F1D]/90">
                Perekonomian Desa Kemiri bertumpu pada harmoni antara sektor agraris tradisional dengan denyut industri dan jasa modern di kawasan Tangerang.
              </p>

              {/* Progress Bars for Occupations */}
              <div className="space-y-4 font-mono-archive text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-[#2A1A10]">Petani Padi, Pekebun Kemiri, & Peternak</span>
                    <span className="font-bold text-[#2F4A2B]">38% (3.200 jiwa)</span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div className="h-full bg-[#2F4A2B]" style={{ width: '38%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-[#2A1A10]">Buruh & Karyawan Industri Tangerang</span>
                    <span className="font-bold text-[#4A2F1D]">27% (2.270 jiwa)</span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div className="h-full bg-[#4A2F1D]" style={{ width: '27%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-[#2A1A10]">Pedagang Pasar & Pengrajin UMKM</span>
                    <span className="font-bold text-[#C8642B]">21% (1.770 jiwa)</span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div className="h-full bg-[#C8642B]" style={{ width: '21%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-[#2A1A10]">Jasa, Konstruksi, & Pegawai Negeri</span>
                    <span className="font-bold text-[#D9A441]">14% (1.180 jiwa)</span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div className="h-full bg-[#D9A441]" style={{ width: '14%' }} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#E8DCC6] border border-[#2A1A10]/20 text-xs font-mono-archive text-[#4A2F1D] flex items-center justify-between">
                <span>Total Angkatan Kerja: 5.620 Jiwa</span>
                <span className="font-bold text-[#C8642B]">Indeks Desa Membangun: MAJU</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Panel: Pamong Desa (Grid Struktur Organisasi) */}
        {activeTab === 'pamong' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#F3EBDD] p-4 border border-[#2A1A10]/20 text-xs font-mono-archive text-[#4A2F1D] flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-[#2A1A10]">
                BAGAN STRUKTUR ORGANISASI & TATA KERJA (SOTK) PEMERINTAH DESA KEMIRI
              </span>
              <span>Periode Bakti 2021 – 2027</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VILLAGE_OFFICIALS.map((official) => (
                <div
                  key={official.id}
                  className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-5 shadow-paper flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-3">
                      <span className="font-mono-archive text-[10px] uppercase tracking-wider text-[#C8642B] font-bold">
                        {official.skNumber}
                      </span>
                      <span className="font-mono-archive text-[10px] text-[#4A2F1D]/70">
                        {official.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-[#2A1A10] leading-tight">
                      {official.name}
                    </h4>
                    <p className="font-mono-archive text-xs font-bold text-[#2F4A2B] mt-1">
                      {official.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2A1A10]/10 text-xs text-[#4A2F1D]/90 leading-relaxed">
                    <p>{official.duties}</p>
                  </div>

                  <div className="pt-2 border-t border-[#2A1A10]/15 flex items-center justify-between text-[11px] font-mono-archive text-[#4A2F1D]/70">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2F4A2B]" /> Terverifikasi
                    </span>
                    <span>Pelayanan Terpadu</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
