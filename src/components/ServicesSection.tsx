import React, { useState } from 'react';
import { FileText, Clock, ShieldCheck, CheckSquare, Square, ArrowRight, MessageSquare } from 'lucide-react';
import { VILLAGE_SERVICES, ServiceRequirement, VILLAGE_INFO } from '../data/villageData';

interface ServicesSectionProps {
  onOpenSelfService: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenSelfService }) => {
  const [selectedService, setSelectedService] = useState<ServiceRequirement>(VILLAGE_SERVICES[0]);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDocCheck = (docIndex: number) => {
    const key = `${selectedService.id}-${docIndex}`;
    setCheckedDocs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const completedCount = selectedService.documents.filter(
    (_, idx) => !!checkedDocs[`${selectedService.id}-${idx}`]
  ).length;

  const handleWhatsAppDesk = (serviceName: string) => {
    const message = encodeURIComponent(
      `Halo Petugas Pelayanan Kantor Desa Kemiri, saya ingin berkonsultasi mengenai pengurusan ${serviceName}. Mohon info kelengkapannya. Terima kasih.`
    );
    window.open(`https://wa.me/${VILLAGE_INFO.phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="pelayanan" className="py-16 lg:py-24 bg-[#F3EBDD] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] rotate-[-1deg]">
                03 / MEJA PERSURATAN RESMI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10]">
              Pelayanan Publik & Dokumen Warga
            </h2>
          </div>
          <div className="text-xs font-mono-archive text-[#4A2F1D]/80">
            Standar Pelayanan Prima: Cepat, Transparan, Bebas Pungutan Liar (Rp 0)
          </div>
        </div>

        {/* Catalog of Services Grid (6 Numbered Big Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VILLAGE_SERVICES.map((service, index) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-6 border-2 border-[#2A1A10] cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#E8DCC6] shadow-paper translate-x-[2px] translate-y-[2px] border-[#C8642B]'
                    : 'bg-[#F3EBDD] hover:bg-[#E8DCC6]/60 shadow-paper-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-3">
                    <span className="font-mono-archive text-xs font-bold text-[#C8642B]">
                      0{index + 1} / {service.code}
                    </span>
                    <span className="font-mono-archive text-[11px] text-[#2F4A2B] font-bold">
                      {service.cost}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#2A1A10] leading-snug">
                    {service.name}
                  </h3>

                  <p className="font-mono-archive text-xs text-[#4A2F1D]/80 mt-1">
                    {service.alias}
                  </p>

                  <p className="text-xs text-[#4A2F1D]/90 mt-3 line-clamp-2 leading-relaxed">
                    {service.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A1A10]/15 mt-5 flex items-center justify-between text-xs font-mono-archive">
                  <span className="flex items-center gap-1.5 text-[#4A2F1D]">
                    <Clock className="w-3.5 h-3.5 text-[#C8642B]" />
                    {service.timeEstimate}
                  </span>
                  <span className="text-[#C8642B] font-bold">
                    {isSelected ? 'Sedang Ditinjau ↓' : 'Buka Syarat →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Dossier & Checklist (Editorial Canvas) */}
        <div className="bg-[#E8DCC6] border-2 border-[#2A1A10] p-6 sm:p-10 shadow-paper">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-[#2A1A10] pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold">
                  DOSSIER PERSYARATAN RESMI
                </span>
                <span>·</span>
                <span className="font-mono-archive text-xs text-[#4A2F1D]/80">
                  {selectedService.code}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#2A1A10]">
                {selectedService.name}
              </h3>
              <p className="text-sm text-[#4A2F1D]/90 max-w-2xl mt-1">
                {selectedService.purpose}
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3 py-1.5 bg-[#2F4A2B] text-[#F3EBDD] font-mono-archive text-xs font-bold uppercase tracking-wider">
                BIAYA: {selectedService.cost}
              </div>
              <div className="px-3 py-1.5 bg-[#4A2F1D] text-[#F3EBDD] font-mono-archive text-xs font-bold uppercase tracking-wider">
                ESTIMASI: {selectedService.timeEstimate}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Interactive Checklist (Warga can tick their ready documents) - 6 cols */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2">
                <span className="font-mono-archive text-xs uppercase font-bold text-[#2A1A10]">
                  Checklist Dokumen Persyaratan (Cek Mandiri):
                </span>
                <span className="font-mono-archive text-xs text-[#C8642B] font-bold">
                  {completedCount} / {selectedService.documents.length} Siap
                </span>
              </div>

              <div className="space-y-2.5">
                {selectedService.documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[`${selectedService.id}-${idx}`];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleDocCheck(idx)}
                      className={`w-full text-left p-3 border border-[#2A1A10]/30 transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-[#F3EBDD] border-[#2F4A2B] text-[#2A1A10]'
                          : 'bg-[#F3EBDD]/60 hover:bg-[#F3EBDD] text-[#4A2F1D]'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-[#2F4A2B]">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#2F4A2B]" />
                        ) : (
                          <Square className="w-5 h-5 text-[#4A2F1D]/50" />
                        )}
                      </div>
                      <span className={`text-sm ${isChecked ? 'line-through text-[#4A2F1D]/70' : 'font-medium'}`}>
                        {doc}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/15 text-xs font-mono-archive text-[#4A2F1D] flex items-center justify-between">
                <span>Centang dokumen di atas sebelum datang ke kantor balai.</span>
                <span className="font-bold text-[#2F4A2B]">Syarat Terpenuhi</span>
              </div>
            </div>

            {/* Right: Vertical Procedural Stepper - 6 cols */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border-b border-[#2A1A10]/15 pb-2">
                <span className="font-mono-archive text-xs uppercase font-bold text-[#2A1A10]">
                  Alur Prosedur Pelayanan (4 Langkah):
                </span>
              </div>

              <div className="space-y-3">
                {selectedService.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 flex items-start gap-3"
                  >
                    <span className="font-display font-bold text-lg text-[#C8642B] shrink-0 w-6">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-[#4A2F1D] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons for Citizen */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenSelfService(selectedService.id)}
                  className="px-5 py-3 bg-[#C8642B] hover:bg-[#B35520] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold shadow-paper-sm cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ajukan & Ambil No. Registrasi Online</span>
                </button>

                <button
                  onClick={() => handleWhatsAppDesk(selectedService.name)}
                  className="px-4 py-3 bg-[#2F4A2B] hover:bg-[#253b22] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold shadow-paper-sm cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Loket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
