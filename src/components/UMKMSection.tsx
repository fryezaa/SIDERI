import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, PlusCircle, Star, MapPin, X, Check } from 'lucide-react';
import { VILLAGE_UMKM, UMKMItem, VILLAGE_INFO } from '../data/villageData';

export const UMKMSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [umkmList, setUmkmList] = useState<UMKMItem[]>(VILLAGE_UMKM);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [newBusiness, setNewBusiness] = useState({
    name: '',
    owner: '',
    category: 'Olahan Kemiri' as UMKMItem['category'],
    location: '',
    priceRange: '',
    description: '',
    phone: '',
    featuredProduct: '',
  });
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const categories = ['Semua', 'Olahan Kemiri', 'Kuliner', 'Kriya Bambu', 'Hasil Bumi', 'Jasa'];

  const filteredItems = selectedCategory === 'Semua'
    ? umkmList
    : umkmList.filter((item) => item.category === selectedCategory);

  const handleOrderClick = (item: UMKMItem) => {
    const text = encodeURIComponent(
      `Halo ${item.owner} (${item.name}), saya melihat usaha Anda di Website Sistem Informasi Desa Kemiri. Saya tertarik memesan/berkonsultasi mengenai produk: ${item.featuredProduct}. Terima kasih!`
    );
    window.open(`https://wa.me/${item.phone}?text=${text}`, '_blank');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBusiness.name || !newBusiness.owner) return;

    const newItem: UMKMItem = {
      id: `umkm-${Date.now()}`,
      name: newBusiness.name,
      owner: newBusiness.owner,
      category: newBusiness.category,
      location: newBusiness.location || 'Desa Kemiri, Kec. Kemiri',
      priceRange: newBusiness.priceRange || 'Sesuai pesanan',
      description: newBusiness.description || 'Produk lokal warga Desa Kemiri.',
      phone: newBusiness.phone ? newBusiness.phone.replace(/[^0-9]/g, '') : '6281288772001',
      featuredProduct: newBusiness.featuredProduct || newBusiness.name,
      rating: 5.0,
    };

    setUmkmList([newItem, ...umkmList]);
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setIsRegisterOpen(false);
      setNewBusiness({
        name: '',
        owner: '',
        category: 'Olahan Kemiri',
        location: '',
        priceRange: '',
        description: '',
        phone: '',
        featuredProduct: '',
      });
    }, 1500);
  };

  return (
    <section id="umkm" className="py-16 lg:py-24 bg-[#F3EBDD] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#2F4A2B] text-[#2F4A2B] rotate-[-1deg]">
                05 / SENTRA PRODUKSI RAKYAT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10]">
              Potensi Unggulan & Direktori UMKM Warga
            </h2>
          </div>

          <button
            onClick={() => setIsRegisterOpen(true)}
            className="px-4 py-2.5 bg-[#4A2F1D] hover:bg-[#2A1A10] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all shadow-paper-sm flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-[#C8642B]" />
            <span>Daftarkan Usaha Warga</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#2A1A10]/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C8642B] text-[#F3EBDD] shadow-paper-sm translate-x-[1px] translate-y-[1px]'
                  : 'bg-[#E8DCC6] text-[#4A2F1D] border border-[#2A1A10]/20 hover:bg-[#E8DCC6]/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* UMKM Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#E8DCC6] border-2 border-[#2A1A10] p-6 shadow-paper flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-3">
                  <span className="stamp-badge border-[#4A2F1D] text-[#4A2F1D] text-[10px] py-0 px-1 bg-[#F3EBDD]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono-archive text-[#2A1A10] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#D9A441] text-[#D9A441]" />
                    <span>{item.rating.toFixed(1)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-[#2A1A10] leading-snug">
                  {item.name}
                </h3>
                <p className="font-mono-archive text-xs font-bold text-[#C8642B] mt-1">
                  Pengrajin / Pemilik: {item.owner}
                </p>

                <p className="text-xs text-[#4A2F1D]/90 mt-3 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 p-3 bg-[#F3EBDD] border border-[#2A1A10]/20 font-mono-archive text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#4A2F1D]">
                    <MapPin className="w-3.5 h-3.5 text-[#C8642B] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="font-bold text-[#2A1A10] pt-1">
                    Kisaran Harga: {item.priceRange}
                  </div>
                </div>
              </div>

              {/* Action Button: WhatsApp Order */}
              <div className="pt-5 border-t border-[#2A1A10]/15 mt-5">
                <button
                  onClick={() => handleOrderClick(item)}
                  className="w-full py-2.5 bg-[#2F4A2B] hover:bg-[#253b22] text-[#F3EBDD] font-mono-archive text-xs uppercase tracking-wider font-bold transition-all shadow-paper-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Langsung via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Feature Spotlight: Hilirisasi Kemiri */}
        <div className="bg-[#4A2F1D] text-[#F3EBDD] p-8 sm:p-12 border-2 border-[#2A1A10] shadow-paper-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#D9A441] font-bold">
                KOLABORASI DANA DESA & KELOMPOK WANITA TANI
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight">
                Membangun Kemandirian dari Sebutir Biji Kemiri
              </h3>
              <p className="text-sm sm:text-base text-[#E8DCC6]/90 leading-relaxed">
                Pemerintah Desa Kemiri mendampingi kelompok ibu-ibu rumah tangga dan pemuda karang taruna dalam mengolah biji kemiri menjadi produk bernilai tambah tinggi: minyak kemiri sangrai dingin, sambal kemiri botolan, serta pakan organik dari limbah ampas kulit kemiri.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono-archive text-[#D9A441]">
                <span>✓ Kemurnian 99,4%</span>
                <span>·</span>
                <span>✓ Tanpa Pengawet Sintetis</span>
                <span>·</span>
                <span>✓ Berdayakan 3 Dusun</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F3EBDD] p-2 border-2 border-[#2A1A10] shadow-paper-sm rotate-1">
                <img
                  src="/src/assets/images/umkm_kemiri_product_1792546241129.jpg"
                  alt="Minyak Kemiri Asli Desa Kemiri"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Business Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A1A10]/70 backdrop-blur-xs select-none overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 sm:p-8 shadow-paper-lg my-8">
            <button
              onClick={() => setIsRegisterOpen(false)}
              aria-label="Tutup Pendaftaran"
              className="absolute top-4 right-4 p-2 text-[#2A1A10] hover:text-[#C8642B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b-2 border-[#2A1A10] pb-3 mb-5">
              <span className="font-mono-archive text-xs uppercase tracking-widest text-[#C8642B] font-bold block mb-1">
                FORMULIR SWADAYA WARGA
              </span>
              <h3 className="text-xl font-display font-bold text-[#2A1A10]">
                Daftarkan Usaha / Produk Lokal Anda
              </h3>
              <p className="text-xs font-mono-archive text-[#4A2F1D]/80 mt-1">
                Usaha warga akan dimasukkan ke katalog resmi desa untuk promosi cuma-cuma (Gratis).
              </p>
            </div>

            {registerSuccess ? (
              <div className="py-8 text-center space-y-3 font-mono-archive">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#2F4A2B] text-[#F3EBDD] flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#2A1A10]">Usaha Berhasil Terdaftar!</h4>
                <p className="text-xs text-[#4A2F1D]">Produk Anda kini telah tercantum di halaman ini.</p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs font-mono-archive">
                <div>
                  <label className="block font-bold text-[#2A1A10] mb-1">
                    Nama Usaha / Merk Dagang: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kripik Pisang Barokah"
                    value={newBusiness.name}
                    onChange={(e) => setNewBusiness({ ...newBusiness, name: e.target.value })}
                    className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#2A1A10] mb-1">
                      Nama Pemilik: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ibu Rohanah"
                      value={newBusiness.owner}
                      onChange={(e) => setNewBusiness({ ...newBusiness, owner: e.target.value })}
                      className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#2A1A10] mb-1">
                      Kategori Produk:
                    </label>
                    <select
                      value={newBusiness.category}
                      onChange={(e) => setNewBusiness({ ...newBusiness, category: e.target.value as any })}
                      className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                    >
                      <option value="Olahan Kemiri">Olahan Kemiri</option>
                      <option value="Kuliner">Kuliner</option>
                      <option value="Kriya Bambu">Kriya Bambu</option>
                      <option value="Hasil Bumi">Hasil Bumi</option>
                      <option value="Jasa">Jasa</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#2A1A10] mb-1">
                      Lokasi Dusun / RT:
                    </label>
                    <input
                      type="text"
                      placeholder="Kp. Santri RT 02"
                      value={newBusiness.location}
                      onChange={(e) => setNewBusiness({ ...newBusiness, location: e.target.value })}
                      className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#2A1A10] mb-1">
                      Nomor WhatsApp: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={newBusiness.phone}
                      onChange={(e) => setNewBusiness({ ...newBusiness, phone: e.target.value })}
                      className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#2A1A10] mb-1">
                    Deskripsi Singkat Produk:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ceritakan keistimewaan rasa atau bahan baku produk Anda..."
                    value={newBusiness.description}
                    onChange={(e) => setNewBusiness({ ...newBusiness, description: e.target.value })}
                    className="w-full p-2 bg-[#E8DCC6]/60 border border-[#2A1A10] text-[#2A1A10]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterOpen(false)}
                    className="px-4 py-2 border border-[#2A1A10] text-[#2A1A10] uppercase font-bold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#C8642B] text-[#F3EBDD] uppercase font-bold shadow-paper-sm"
                  >
                    Simpan Data Usaha
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
