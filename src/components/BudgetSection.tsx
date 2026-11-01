import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp, CheckCircle, HardHat, FileSpreadsheet } from 'lucide-react';
import { BUDGET_DATA, BudgetYear } from '../data/villageData';

export const BudgetSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [expandedSection, setExpandedSection] = useState<'pendapatan' | 'belanja' | 'proyek'>('proyek');
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const budget = BUDGET_DATA.find((b) => b.year === selectedYear) || BUDGET_DATA[0];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="transparansi" className="py-16 lg:py-24 bg-[#E8DCC6] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#C8642B] text-[#C8642B] rotate-[-1deg]">
                04 / KAS & AKUNTABILITAS PUBLIK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10]">
              Transparansi APBDes & Realisasi Fisik
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-4 py-2 border-1.5 border-[#2A1A10] bg-[#F3EBDD] hover:bg-[#2A1A10] hover:text-[#F3EBDD] text-[#2A1A10] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all shadow-paper-sm flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Rekap APBDes PDF</span>
            </button>
          </div>
        </div>

        {/* Year Selector Tabs (Stamp tab style) */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-mono-archive uppercase font-bold text-[#4A2F1D] mr-2">
            PILIH TAHUN ANGGARAN:
          </span>
          {BUDGET_DATA.map((item) => (
            <button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              className={`px-4 py-2 font-mono-archive text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                selectedYear === item.year
                  ? 'bg-[#C8642B] text-[#F3EBDD] shadow-paper-sm translate-x-[1px] translate-y-[1px]'
                  : 'bg-[#F3EBDD] text-[#2A1A10] border border-[#2A1A10]/30 hover:bg-[#F3EBDD]/80'
              }`}
            >
              TAHUN {item.year}
            </button>
          ))}
        </div>

        {/* Big 3 KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Pendapatan Card */}
          <div className="p-6 bg-[#F3EBDD] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-4">
              <span className="font-mono-archive text-xs uppercase font-bold text-[#2F4A2B]">
                Total Pendapatan Desa
              </span>
              <span className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] text-[10px] py-0 px-1">
                MASUK
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#2F4A2B] tabular-nums">
                {formatRupiah(budget.totalRevenue)}
              </div>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80 mt-2">
                Dana Desa, ADD, Bagi Hasil Pajak, & PADes
              </p>
            </div>
          </div>

          {/* Belanja Card */}
          <div className="p-6 bg-[#F3EBDD] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-4">
              <span className="font-mono-archive text-xs uppercase font-bold text-[#C8642B]">
                Total Belanja Desa
              </span>
              <span className="stamp-badge border-[#C8642B] text-[#C8642B] text-[10px] py-0 px-1">
                KELUAR
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#C8642B] tabular-nums">
                {formatRupiah(budget.totalExpenditure)}
              </div>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80 mt-2">
                Pembangunan Fisik, Tata Praja, & Pemberdayaan
              </p>
            </div>
          </div>

          {/* Pembiayaan / Surplus Card */}
          <div className="p-6 bg-[#F3EBDD] border-2 border-[#2A1A10] shadow-paper flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-4">
              <span className="font-mono-archive text-xs uppercase font-bold text-[#4A2F1D]">
                Pembiayaan Neto (SILPA)
              </span>
              <span className="stamp-badge border-[#4A2F1D] text-[#4A2F1D] text-[10px] py-0 px-1">
                CADANGAN
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#4A2F1D] tabular-nums">
                {formatRupiah(budget.netFinancing)}
              </div>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80 mt-2">
                Sisa Lebih Perhitungan Anggaran Tahun Lalu
              </p>
            </div>
          </div>
        </div>

        {/* Visual Charts: Pendapatan vs Belanja Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Revenue Breakdown */}
          <div className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 shadow-paper">
            <div className="border-b border-[#2A1A10]/15 pb-3 mb-4">
              <span className="font-mono-archive text-xs uppercase tracking-wider font-bold text-[#2F4A2B] block">
                STRUKTUR SUMBER PENDAPATAN ({budget.year})
              </span>
            </div>
            <div className="space-y-4">
              {budget.revenueBreakdown.map((rev, idx) => (
                <div key={idx} className="space-y-1 text-xs font-mono-archive">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[#2A1A10]">{rev.name}</span>
                    <span className="font-bold text-[#2F4A2B] tabular-nums">
                      {formatRupiah(rev.amount)} ({rev.sharePercent}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div
                      className="h-full bg-[#2F4A2B]"
                      style={{ width: `${rev.sharePercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-[#4A2F1D]/75">{rev.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expenditure Breakdown */}
          <div className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 shadow-paper">
            <div className="border-b border-[#2A1A10]/15 pb-3 mb-4">
              <span className="font-mono-archive text-xs uppercase tracking-wider font-bold text-[#C8642B] block">
                ALOKASI BIDANG BELANJA ({budget.year})
              </span>
            </div>
            <div className="space-y-4">
              {budget.expenditureBreakdown.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs font-mono-archive">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[#2A1A10]">{exp.sector}</span>
                    <span className="font-bold text-[#C8642B] tabular-nums">
                      {formatRupiah(exp.amount)} ({exp.sharePercent}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#E8DCC6] border border-[#2A1A10]/20 overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${exp.sharePercent}%`,
                        backgroundColor: exp.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Realized Physical Projects in Field */}
        <div className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 sm:p-8 shadow-paper">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#2A1A10] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <HardHat className="w-5 h-5 text-[#C8642B]" />
              <h3 className="text-xl font-display font-bold text-[#2A1A10]">
                Realisasi Kegiatan Pembangunan Fisik ({budget.year})
              </h3>
            </div>
            <span className="font-mono-archive text-xs text-[#2F4A2B] font-bold">
              {budget.realizedProjects.length} Titik Kegiatan Terlaksana
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budget.realizedProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-5 bg-[#E8DCC6] border border-[#2A1A10]/30 shadow-paper-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-3">
                    <span className="font-mono-archive text-[10px] uppercase font-bold text-[#4A2F1D]">
                      {proj.location}
                    </span>
                    <span className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] text-[9px] py-0 px-1 bg-[#F3EBDD]">
                      {proj.status}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#2A1A10] leading-snug">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-[#4A2F1D]/80 mt-2 font-mono-archive">
                    Manfaat: {proj.beneficiaries}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A1A10]/15 mt-4 text-xs font-mono-archive flex items-center justify-between">
                  <span className="text-[#4A2F1D]">Nilai Anggaran:</span>
                  <span className="font-bold text-[#2A1A10]">
                    {formatRupiah(proj.budget)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download / Print Modal for APBDes Document */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A1A10]/70 backdrop-blur-xs select-none">
          <div className="relative w-full max-w-lg bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 sm:p-8 shadow-paper-lg">
            <div className="border-b-2 border-[#2A1A10] pb-3 mb-4 text-center">
              <span className="font-mono-archive text-xs uppercase font-bold text-[#C8642B] block">
                LEMBAR CETAK RESMI
              </span>
              <h3 className="text-xl font-display font-bold text-[#2A1A10]">
                Infografis APBDes {budget.year}
              </h3>
              <p className="text-xs font-mono-archive text-[#4A2F1D]">
                Pemerintah Desa Kemiri, Kecamatan Kemiri, Kabupaten Tangerang
              </p>
            </div>

            <div className="space-y-3 font-mono-archive text-xs text-[#4A2F1D] my-4 p-4 bg-[#E8DCC6] border border-[#2A1A10]/20">
              <div className="flex justify-between">
                <span>Pendapatan:</span>
                <span className="font-bold text-[#2F4A2B]">{formatRupiah(budget.totalRevenue)}</span>
              </div>
              <div className="flex justify-between">
                <span>Belanja:</span>
                <span className="font-bold text-[#C8642B]">{formatRupiah(budget.totalExpenditure)}</span>
              </div>
              <div className="flex justify-between border-t border-[#2A1A10]/20 pt-2">
                <span>Pembiayaan Neto:</span>
                <span className="font-bold">{formatRupiah(budget.netFinancing)}</span>
              </div>
            </div>

            <p className="text-xs text-[#4A2F1D]/80 leading-relaxed mb-6 font-mono-archive">
              Dokumen ini dapat dicetak sebagai arsip transparansi publik sesuai UU No. 6 Tahun 2014 tentang Desa.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="px-4 py-2 border border-[#2A1A10] text-xs font-mono-archive uppercase font-bold"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  window.print();
                  setShowDownloadModal(false);
                }}
                className="px-4 py-2 bg-[#C8642B] text-[#F3EBDD] text-xs font-mono-archive uppercase font-bold flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Cetak Lembar Rekap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
