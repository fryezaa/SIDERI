import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, HelpCircle } from 'lucide-react';
import { VILLAGE_INFO, VILLAGE_SERVICES, BUDGET_DATA, VILLAGE_UMKM } from '../data/villageData';

interface ChatMessage {
  id: string;
  sender: 'citizen' | 'assistant';
  text: string;
  timestamp: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: 'Sampurasun / Assalamu’alaikum warga Desa Kemiri! Saya Si Kemiri, asisten digital pelayanan dan informasi desa. Ada yang bisa saya bantu terkait syarat surat, jam pelayanan, atau data APBDes?',
      timestamp: '08:00',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Syarat bikin SKTM',
    'Berapa biaya pengurusan surat?',
    'Jam buka kantor desa',
    'Kontak darurat & ambulans',
    'Cara beli minyak kemiri asli',
    'Anggaran APBDes 2024',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Intelligent Context-based Response Generator
  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('sktm') || q.includes('tidak mampu')) {
      return 'Untuk pengurusan Surat Keterangan Tidak Mampu (SKTM) di Desa Kemiri:\n1. Bawa Surat Pengantar dari Ketua RT & RW setempat.\n2. Fotokopi KTP dan Kartu Keluarga (KK).\n3. Surat pernyataan tidak mampu bermaterai.\n\nBiaya: Rp 0 (GRATIS/Bebas Pungli). Waktu proses sekitar 15 menit di loket Kantor Desa.';
    }

    if (q.includes('sku') || q.includes('usaha')) {
      return 'Syarat Surat Keterangan Usaha (SKU):\n1. Pengantar RT/RW lingkungan usaha.\n2. Fotokopi KTP & KK pemilik usaha.\n3. Foto tempat usaha atau produk.\n\nBiaya Rp 0. Surat ini dapat digunakan untuk pengajuan KUR perbankan atau izin legalitas UMKM.';
    }

    if (q.includes('skck') || q.includes('polisi') || q.includes('kepolisian')) {
      return 'Untuk Surat Pengantar SKCK Desa Kemiri:\n1. Pengantar RT & RW.\n2. Fotokopi KTP & KK.\n3. Fotokopi Akta Lahir/Ijazah.\n4. Pasfoto 4x6 merah 2 lembar.\n\nSetelah surat pengantar dari Kepala Desa selesai, bawa berkas ke Polsek Kemiri untuk sidik jari dan penerbitan SKCK fisik.';
    }

    if (q.includes('biaya') || q.includes('bayar') || q.includes('tarif') || q.includes('pungli')) {
      return 'Seluruh pelayanan administrasi kependudukan dan persuratan di Kantor Desa Kemiri adalah RP 0 (GRATIS)! Pemerintah Desa berkomitmen teguh bebas dari pungutan liar.';
    }

    if (q.includes('jam') || q.includes('buka') || q.includes('jadwal') || q.includes('tutup')) {
      return 'Jam Pelayanan Kantor Desa Kemiri:\n• Senin s/d Jumat: Pukul 08.00 – 15.00 WIB.\n• Istirahat: 12.00 – 13.00 WIB.\n• Sabtu, Minggu & Hari Libur Nasional: Pelayanan kantor tutup, namun ambulans dan siaga darurat tetap aktif 24 jam.';
    }

    if (q.includes('darurat') || q.includes('ambulans') || q.includes('kontak') || q.includes('telepon')) {
      return 'Nomor Kontak Penting Desa Kemiri:\n• Loket Desa / WhatsApp: +62 812-8877-2001\n• Ambulans Siaga Desa Kemiri: +62 812-8877-2001 (24 Jam Bebas Biaya Antar Warga Sakit/Melahirkan)\n• Babinsa / Bhabinkamtibmas: Hubungi via kantor desa.';
    }

    if (q.includes('minyak kemiri') || q.includes('umkm') || q.includes('beli') || q.includes('produk')) {
      return 'Minyak Kemiri murni cold-pressed diproduksi oleh Kelompok Wanita Tani KWT Kemiri Jaya di Kp. Santri (Dusun IV). Anda bisa memesan langsung via tombol WhatsApp di bagian menu "Potensi UMKM" pada website ini dengan kisaran harga mulai Rp 35.000.';
    }

    if (q.includes('anggaran') || q.includes('apbdes') || q.includes('dana desa') || q.includes('uang')) {
      return 'APBDes Desa Kemiri Tahun 2024:\n• Total Pendapatan: Rp 2,14 Miliar (Dana Desa Rp 980 Juta, ADD Rp 720 Juta, Pajak & PADes Rp 445 Juta)\n• Belanja Pembangunan Fisik: Rp 1,04 Miliar (termasuk betonisasi jalan Kp. Santri, drainase Kemiri Kulon, dan 45 PJU Surya). Rincian lengkap dapat Anda lihat di tab Transparansi!';
    }

    if (q.includes('kades') || q.includes('kepala desa') || q.includes('lurah')) {
      return 'Kepala Desa Kemiri saat ini dijabat oleh Bapak Jamaludin, S.IP untuk masa bakti 2021 – 2027. Beliau berkantor di Balai Desa Kemiri.';
    }

    if (q.includes('sejarah') || q.includes('asal usul') || q.includes('kenapa dinamakan kemiri')) {
      return 'Nama Desa Kemiri diambil dari rimbunnya pohon kemiri purba di tepian percabangan Kali Cidurian pada awal abad ke-19, tempat para saudagar rempah Batavia beristirahat dan memetik biji kemiri untuk penerangan serta bumbu masak.';
    }

    return 'Terima kasih atas pertanyaannya. Terkait hal tersebut, Anda dapat langsung datang ke Loket Pelayanan Terpadu di Jl. Raya Kemiri – Kronjo No. 01 (Senin-Jumat 08.00-15.00 WIB) atau hubungi nomor pelayanan desa di +62 812-8877-2001.';
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const citizenMsg: ChatMessage = {
      id: `cit-${Date.now()}`,
      sender: 'citizen',
      text,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, citizenMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateResponse(text);
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Button with Candlenut Shape (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Buka Chatbot Si Kemiri"
            className="group relative flex items-center justify-center w-14 h-14 bg-[#4A2F1D] text-[#F3EBDD] border-2 border-[#2A1A10] shadow-paper hover:scale-105 active:scale-95 transition-all cursor-pointer rounded-full"
          >
            {/* Candlenut Seed Icon representation */}
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#E8DCC6]">
              <path
                d="M 20 6 C 10 6, 6 15, 7 24 C 8 32, 14 36, 20 36 C 26 36, 32 32, 33 24 C 34 15, 30 6, 20 6 Z"
                fill="#4A2F1D"
                stroke="#E8DCC6"
                strokeWidth="2"
              />
              <path
                d="M 20 10 L 19 18 L 21 24 L 20 32"
                fill="none"
                stroke="#C8642B"
                strokeWidth="1.8"
              />
            </svg>

            {/* Pulsing indicator tag */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8642B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C8642B]"></span>
            </span>

            {/* Hover Tooltip (Desktop) */}
            <span className="hidden sm:group-hover:block absolute right-16 bg-[#2A1A10] text-[#F3EBDD] font-mono-archive text-[11px] py-1 px-2.5 whitespace-nowrap shadow-paper-sm">
              Tanya Si Kemiri
            </span>
          </button>
        )}
      </div>

      {/* Papyrus Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] bg-[#F3EBDD] border-3 border-[#2A1A10] shadow-paper-lg flex flex-col justify-between overflow-hidden select-none animate-fadeIn"
          role="dialog"
          aria-label="Panel Obrolan Si Kemiri"
        >
          {/* Header */}
          <div className="bg-[#4A2F1D] text-[#F3EBDD] p-3.5 flex items-center justify-between border-b-2 border-[#2A1A10]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#2A1A10] border border-[#E8DCC6] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#D9A441]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-[#F3EBDD]">
                  Si Kemiri (Asisten Warga)
                </h4>
                <p className="font-mono-archive text-[10px] text-[#E8DCC6]/80">
                  Desa Kemiri · Panduan Administrasi
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Obrolan"
              className="p-1.5 text-[#F3EBDD] hover:text-[#C8642B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F3EBDD] text-xs font-mono-archive"
            aria-live="polite"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'citizen' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 whitespace-pre-line leading-relaxed ${
                    m.sender === 'citizen'
                      ? 'bg-[#E8DCC6] text-[#2A1A10] border border-[#2A1A10]/30 shadow-xs'
                      : 'bg-[#4A2F1D] text-[#F3EBDD] border border-[#2A1A10] shadow-paper-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#4A2F1D]/60 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {/* Bouncing Candlenut typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-2.5 bg-[#4A2F1D] text-[#F3EBDD] w-fit border border-[#2A1A10]">
                <span className="w-2 h-2 rounded-full bg-[#D9A441] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#C8642B] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#8FA67A] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="p-2.5 bg-[#E8DCC6] border-t border-[#2A1A10]/20 overflow-x-auto">
            <span className="text-[10px] uppercase font-bold text-[#4A2F1D]/70 block mb-1.5 font-mono-archive">
              Saran Pertanyaan:
            </span>
            <div className="flex gap-1.5 flex-nowrap pb-1">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 text-[11px] font-mono-archive whitespace-nowrap bg-[#F3EBDD] border border-[#2A1A10]/30 hover:border-[#C8642B] hover:text-[#C8642B] text-[#2A1A10] cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#F3EBDD] border-t-2 border-[#2A1A10] flex items-center gap-2">
            <input
              type="text"
              placeholder="Ketik pertanyaan untuk Si Kemiri..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              className="flex-1 p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-xs font-mono-archive text-[#2A1A10] focus:outline-hidden focus:border-[#C8642B]"
            />
            <button
              onClick={() => handleSendMessage()}
              aria-label="Kirim Pesan"
              className="p-2 bg-[#C8642B] hover:bg-[#B35520] text-[#F3EBDD] border border-[#2A1A10] cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Disclaimer */}
          <div className="px-3 py-1 bg-[#2A1A10] text-[9px] font-mono-archive text-[#E8DCC6]/70 text-center">
            Informasi otomatis berbasis arsip & regulasi desa resmi.
          </div>
        </div>
      )}
    </>
  );
};
