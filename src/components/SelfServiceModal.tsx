import React, { useState } from 'react';
import { X, Printer, CheckCircle2, Download, ShieldCheck, ArrowRight } from 'lucide-react';
import { VILLAGE_SERVICES, ServiceRequirement, VILLAGE_INFO } from '../data/villageData';

interface SelfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const SelfServiceModal: React.FC<SelfServiceModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || VILLAGE_SERVICES[0].id);
  const [applicantName, setApplicantName] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [hamlet, setHamlet] = useState('Dusun I (Kemiri Kulon)');
  const [rtRw, setRtRw] = useState('RT 01 / RW 01');
  const [purpose, setPurpose] = useState('');
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    regNumber: string;
    date: string;
    serviceName: string;
    applicantName: string;
    nik: string;
    phone: string;
    hamlet: string;
    rtRw: string;
    purpose: string;
  } | null>(null);

  if (!isOpen) return null;

  const currentService = VILLAGE_SERVICES.find((s) => s.id === selectedServiceId) || VILLAGE_SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !nik) {
      return;
    }

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const receipt = {
      regNumber: `REG-KMR/2026/${currentService.code.replace('REG-', '')}/${randomCode}`,
      date: dateStr,
      serviceName: currentService.name,
      applicantName,
      nik,
      phone: phone || '-',
      hamlet,
      rtRw,
      purpose: purpose || 'Keperluan administrasi kependudukan resmi',
    };

    setSubmittedReceipt(receipt);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setApplicantName('');
    setNik('');
    setPhone('');
    setPurpose('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2A1A10]/70 backdrop-blur-xs select-none overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F3EBDD] border-3 border-[#2A1A10] shadow-paper-lg my-8 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Formulir"
          className="absolute top-4 right-4 p-2 text-[#2A1A10] hover:text-[#C8642B] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submittedReceipt ? (
          <div>
            {/* Modal Header */}
            <div className="border-b-2 border-[#2A1A10] pb-4 mb-6">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold block mb-1">
                LOKET PELAYANAN MANDIRI WARGA
              </span>
              <h3 id="modal-title" className="text-2xl font-display font-bold text-[#2A1A10]">
                Pengajuan Surat & Tanda Terima Berkas
              </h3>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80 mt-1">
                Isi data permohonan untuk mendapatkan Lembar Tanda Terima Registrasi Resmi Desa Kemiri (Biaya: Rp 0 / Bebas Pungli).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Service Type */}
              <div>
                <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1.5">
                  Jenis Layanan / Surat yang Dimohon:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#E8DCC6] border border-[#2A1A10] p-2.5 text-sm font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                >
                  {VILLAGE_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.timeEstimate})
                    </option>
                  ))}
                </select>
              </div>

              {/* Citizen Details Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                    Nama Lengkap Pemohon (Sesuai KTP): *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Sulaeman"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                    Nomor Induk Kependudukan (NIK 16 Digit): *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    placeholder="360311xxxxxxxxxx"
                    value={nik}
                    onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                    Wilayah Dusun Tempat Tinggal:
                  </label>
                  <select
                    value={hamlet}
                    onChange={(e) => setHamlet(e.target.value)}
                    className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                  >
                    <option value="Dusun I (Kemiri Kulon)">Dusun I (Kemiri Kulon)</option>
                    <option value="Dusun II (Kemiri Wetan)">Dusun II (Kemiri Wetan)</option>
                    <option value="Dusun III (Karang Kobar)">Dusun III (Karang Kobar)</option>
                    <option value="Dusun IV (Santri Klebet)">Dusun IV (Santri Klebet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                    RT / RW:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: RT 02 / RW 04"
                    value={rtRw}
                    onChange={(e) => setRtRw(e.target.value)}
                    className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                  Nomor Telepon / WhatsApp Aktif:
                </label>
                <input
                  type="tel"
                  placeholder="0812xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-archive uppercase font-bold text-[#2A1A10] mb-1">
                  Keperluan Permohonan Surat:
                </label>
                <textarea
                  rows={2}
                  placeholder="Jelaskan secara singkat tujuan pengurusan surat..."
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-[#E8DCC6]/60 border border-[#2A1A10] p-2.5 text-sm text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
                />
              </div>

              {/* Requirement reminder */}
              <div className="p-3 bg-[#E8DCC6] border border-[#2A1A10]/20 text-xs font-mono-archive text-[#4A2F1D]">
                <span className="font-bold text-[#2A1A10] block mb-1">
                  Catatan Dokumen Fisik yang Harus Dibawa ke Loket:
                </span>
                <ul className="list-disc list-inside space-y-0.5">
                  {currentService.documents.slice(0, 3).map((doc, idx) => (
                    <li key={idx} className="truncate">{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 border border-[#2A1A10] text-[#2A1A10] text-xs font-mono-archive uppercase font-bold hover:bg-[#E8DCC6]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#C8642B] hover:bg-[#B35520] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold shadow-paper-sm transition-all"
                >
                  Terbitkan Tanda Terima Registrasi
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Official Printable Receipt & Proof of Registration */
          <div id="printable-receipt" className="space-y-6">
            {/* Header of Receipt */}
            <div className="border-b-2 border-[#2A1A10] pb-4 text-center">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#2A1A10] font-bold block">
                PEMERINTAH KABUPATEN TANGERANG · KECAMATAN KEMIRI
              </span>
              <h2 className="text-2xl font-display font-bold text-[#2A1A10] uppercase tracking-wide">
                KANTOR DESA KEMIRI
              </h2>
              <p className="text-xs font-mono-archive text-[#4A2F1D]">
                Jl. Raya Kemiri – Kronjo No. 01 · Telp: +62 812-8877-2001 · Kode Pos 15530
              </p>
            </div>

            <div className="text-center py-2 bg-[#E8DCC6] border border-[#2A1A10]/20">
              <span className="font-mono-archive text-xs uppercase tracking-wider font-bold text-[#2A1A10]">
                LEMBAR TANDA TERIMA REGISTRASI PELAYANAN MANDIRI
              </span>
            </div>

            {/* Registration Code Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F3EBDD] border-2 border-[#2A1A10]">
              <div>
                <span className="text-[10px] font-mono-archive uppercase tracking-widest text-[#4A2F1D]/70 block">
                  NOMOR REGISTRASI ARSIP:
                </span>
                <span className="font-mono-archive font-bold text-lg text-[#C8642B]">
                  {submittedReceipt.regNumber}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono-archive uppercase tracking-widest text-[#4A2F1D]/70 block">
                  TANGGAL REGISTRASI:
                </span>
                <span className="font-mono-archive font-bold text-sm text-[#2A1A10]">
                  {submittedReceipt.date}
                </span>
              </div>
            </div>

            {/* Data Table */}
            <table className="w-full text-xs font-mono-archive border-collapse border border-[#2A1A10]/30">
              <tbody>
                <tr className="border-b border-[#2A1A10]/20">
                  <td className="p-2.5 font-bold bg-[#E8DCC6] w-1/3 text-[#2A1A10]">Jenis Dokumen</td>
                  <td className="p-2.5 text-[#2A1A10] font-bold">{submittedReceipt.serviceName}</td>
                </tr>
                <tr className="border-b border-[#2A1A10]/20">
                  <td className="p-2.5 font-bold bg-[#E8DCC6] text-[#2A1A10]">Nama Pemohon</td>
                  <td className="p-2.5 text-[#2A1A10]">{submittedReceipt.applicantName}</td>
                </tr>
                <tr className="border-b border-[#2A1A10]/20">
                  <td className="p-2.5 font-bold bg-[#E8DCC6] text-[#2A1A10]">NIK KTP</td>
                  <td className="p-2.5 text-[#2A1A10]">{submittedReceipt.nik}</td>
                </tr>
                <tr className="border-b border-[#2A1A10]/20">
                  <td className="p-2.5 font-bold bg-[#E8DCC6] text-[#2A1A10]">Alamat Dusun</td>
                  <td className="p-2.5 text-[#2A1A10]">{submittedReceipt.hamlet} ({submittedReceipt.rtRw})</td>
                </tr>
                <tr className="border-b border-[#2A1A10]/20">
                  <td className="p-2.5 font-bold bg-[#E8DCC6] text-[#2A1A10]">Nomor Kontak</td>
                  <td className="p-2.5 text-[#2A1A10]">{submittedReceipt.phone}</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold bg-[#E8DCC6] text-[#2A1A10]">Keperluan</td>
                  <td className="p-2.5 text-[#2A1A10]">{submittedReceipt.purpose}</td>
                </tr>
              </tbody>
            </table>

            {/* Official Seal and Officer Check-off section */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t-2 border-[#2A1A10]">
              <div className="text-center p-3 border border-[#2A1A10]/20">
                <span className="text-[11px] font-mono-archive text-[#4A2F1D] block mb-10">
                  Pemohon,
                </span>
                <span className="font-bold text-xs font-mono-archive text-[#2A1A10] underline block">
                  ( {submittedReceipt.applicantName} )
                </span>
              </div>

              <div className="text-center p-3 border border-[#2A1A10]/20 relative">
                <div className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] rotate-[-2deg] absolute top-2 right-4 text-[10px]">
                  TERCATAT SISTEM DESA
                </div>
                <span className="text-[11px] font-mono-archive text-[#4A2F1D] block mb-10">
                  Petugas Loket Pelayanan Terpadu,
                </span>
                <span className="font-bold text-xs font-mono-archive text-[#2A1A10] underline block">
                  ( Kasi Pelayanan Desa Kemiri )
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#2A1A10]/20">
              <button
                onClick={handleReset}
                className="text-xs font-mono-archive uppercase tracking-wider text-[#4A2F1D] hover:text-[#C8642B] underline"
              >
                ← Buat Permohonan Lain
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-[#4A2F1D] hover:bg-[#2A1A10] text-[#F3EBDD] font-mono-archive text-xs uppercase font-bold flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Tanda Terima</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-[#C8642B] text-[#F3EBDD] font-mono-archive text-xs uppercase font-bold cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
