import React, { useState } from 'react';
import { Search, Clock, ArrowRight, Share2, X, BookOpen, Check } from 'lucide-react';
import { VILLAGE_NEWS, NewsItem } from '../data/villageData';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const categories = ['Semua', 'Warta Desa', 'Pembangunan', 'Pengumuman', 'Pertanian'];

  const filteredNews = VILLAGE_NEWS.filter((item) => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const leadItem = filteredNews.find((item) => item.isLead) || filteredNews[0];
  const regularItems = filteredNews.filter((item) => item.id !== leadItem?.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="kabar" className="py-16 lg:py-24 bg-[#E8DCC6] border-b border-[#2A1A10]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A1A10]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="stamp-badge border-[#C8642B] text-[#C8642B] rotate-[-1deg]">
                06 / LEMBARAN WARTA & EDARAN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2A1A10]">
              Kabar Desa & Arsip Publikasi
            </h2>
          </div>

          {/* Search Input (Typewriter paper line style) */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Cari warta desa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F3EBDD] border border-[#2A1A10] px-3 py-2 text-xs font-mono-archive text-[#2A1A10] placeholder:text-[#4A2F1D]/50 focus:outline-hidden focus:border-[#C8642B]"
            />
            <Search className="w-4 h-4 text-[#4A2F1D]/60 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#2A1A10]/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-mono-archive uppercase tracking-wider font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#4A2F1D] text-[#F3EBDD] shadow-paper-sm translate-x-[1px] translate-y-[1px]'
                  : 'bg-[#F3EBDD] text-[#4A2F1D] border border-[#2A1A10]/20 hover:bg-[#F3EBDD]/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Layout: 1 Dominant Lead Story + 3 Regular Cards */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-[#F3EBDD] border-2 border-[#2A1A10] p-8">
            <p className="font-mono-archive text-sm text-[#4A2F1D]">
              Tidak ada arsip berita yang sesuai dengan kata kunci pencarian Anda.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Lead Story (Broadsheet Layout) */}
            {leadItem && (
              <div
                onClick={() => setActiveArticle(leadItem)}
                className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-6 sm:p-8 shadow-paper hover:-translate-y-1 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="stamp-badge border-[#C8642B] text-[#C8642B] text-[10px] py-0.5 px-2">
                      BERITA UTAMA
                    </span>
                    <span className="font-mono-archive text-xs text-[#4A2F1D]/80">
                      {leadItem.category} · {leadItem.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#2A1A10] leading-tight hover:text-[#C8642B] transition-colors">
                    {leadItem.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4A2F1D]/90 leading-relaxed">
                    {leadItem.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono-archive text-[#4A2F1D]/80 border-t border-[#2A1A10]/15">
                    <span>Oleh: {leadItem.author}</span>
                    <span className="flex items-center gap-1 text-[#C8642B] font-bold">
                      <BookOpen className="w-3.5 h-3.5" />
                      {leadItem.readingTime} (Baca Selengkapnya →)
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="overflow-hidden border border-[#2A1A10]/30 aspect-[16/10] bg-[#2A1A10]/5">
                    <img
                      src={leadItem.image}
                      alt={leadItem.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Regular Archival News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveArticle(item)}
                  className="bg-[#F3EBDD] border-2 border-[#2A1A10] p-5 shadow-paper flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div>
                    <div className="overflow-hidden border border-[#2A1A10]/20 aspect-[16/10] mb-4 bg-[#2A1A10]/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-center justify-between border-b border-[#2A1A10]/15 pb-2 mb-2 text-xs font-mono-archive">
                      <span className="font-bold text-[#C8642B]">{item.category}</span>
                      <span className="text-[#4A2F1D]/70">{item.date}</span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-[#2A1A10] leading-snug line-clamp-2 hover:text-[#C8642B] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#4A2F1D]/80 mt-2 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A1A10]/15 mt-4 flex items-center justify-between text-xs font-mono-archive">
                    <span className="flex items-center gap-1 text-[#4A2F1D]/70">
                      <Clock className="w-3 h-3" />
                      {item.readingTime}
                    </span>
                    <span className="text-[#C8642B] font-bold">
                      Buka Warta →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reader Modal (Broadsheet Article View) */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A1A10]/75 backdrop-blur-xs select-none overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#F3EBDD] border-3 border-[#2A1A10] p-6 sm:p-10 shadow-paper-lg my-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              aria-label="Tutup Warta"
              className="absolute top-4 right-4 p-2 text-[#2A1A10] hover:text-[#C8642B]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Article Header */}
            <div className="border-b-2 border-[#2A1A10] pb-5 mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="stamp-badge border-[#C8642B] text-[#C8642B] text-xs">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono-archive text-[#4A2F1D]/80">
                  {activeArticle.date} · {activeArticle.readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#2A1A10] leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center justify-between text-xs font-mono-archive text-[#4A2F1D]/80 pt-2 border-t border-[#2A1A10]/10">
                <span>Penulis / Editor: {activeArticle.author}</span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-[#C8642B] hover:underline cursor-pointer"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2F4A2B]" />
                      <span className="text-[#2F4A2B]">Tautan Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Bagikan Warta</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Lead Image */}
            <div className="mb-6 border border-[#2A1A10]/30 aspect-[16/9] overflow-hidden bg-[#2A1A10]/10">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Prose Content with Drop Cap */}
            <div className="space-y-4 text-base sm:text-lg text-[#2A1A10] leading-relaxed max-w-2xl font-normal">
              {activeArticle.content.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'article-drop-cap' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom Citation & Close */}
            <div className="pt-8 border-t-2 border-[#2A1A10] mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono-archive text-[#4A2F1D]">
                Arsip Resmi Sekretariat Pemerintah Desa Kemiri, Kab. Tangerang
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 bg-[#4A2F1D] text-[#F3EBDD] font-mono-archive text-xs uppercase font-bold cursor-pointer"
              >
                Tutup Pembaca Warta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
