export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'Warta Desa' | 'Pembangunan' | 'Pengumuman' | 'Pertanian';
  excerpt: string;
  content: string;
  author: string;
  readingTime: string;
  image: string;
  isLead?: boolean;
}

export interface VillageOfficial {
  id: string;
  name: string;
  role: string;
  skNumber: string;
  period: string;
  duties: string;
  nip?: string;
  photoUrl?: string;
}

export interface ServiceRequirement {
  id: string;
  code: string;
  name: string;
  alias: string;
  purpose: string;
  timeEstimate: string;
  cost: string;
  documents: string[];
  steps: string[];
}

export interface UMKMItem {
  id: string;
  name: string;
  owner: string;
  category: 'Olahan Kemiri' | 'Kuliner' | 'Kriya Bambu' | 'Hasil Bumi' | 'Jasa';
  location: string;
  priceRange: string;
  description: string;
  phone: string;
  featuredProduct: string;
  rating: number;
}

export interface BudgetYear {
  year: number;
  totalRevenue: number;
  totalExpenditure: number;
  netFinancing: number;
  revenueBreakdown: {
    name: string;
    amount: number;
    sharePercent: number;
    description: string;
  }[];
  expenditureBreakdown: {
    sector: string;
    amount: number;
    sharePercent: number;
    color: string;
  }[];
  realizedProjects: {
    id: string;
    name: string;
    location: string;
    budget: number;
    progress: number;
    status: 'Selesai 100%' | 'Tahap Pemeliharaan' | 'Berjalan';
    beneficiaries: string;
  }[];
}

export const VILLAGE_INFO = {
  name: "Desa Kemiri",
  district: "Kecamatan Kemiri",
  regency: "Kabupaten Tangerang",
  province: "Banten",
  code: "36.03.11.2001",
  postalCode: "15530",
  address: "Jl. Raya Kemiri - Kronjo No. 01, Desa Kemiri, Kec. Kemiri, Tangerang, Banten 15530",
  phone: "+62 812-8877-2001",
  email: "pelayanan@kemiri-tangerang.desa.id",
  hours: "Senin – Jumat: 08.00 – 15.00 WIB",
  kadesName: "Jamaludin, S.IP",
  motto: "Mekar Ku Mandiri, Guyub Ku Gotong Royong",
  tagline: "Dari Kebun Kemiri Menuju Desa Mandiri Berdaya Saing",
  stats: {
    population: 8420,
    households: 2314,
    males: 4280,
    females: 4140,
    areaHa: 342.8,
    agriculturalAreaHa: 218.4,
    hamletsCount: 4,
    rwCount: 8,
    rtCount: 24,
    activeUMKM: 126,
  },
  boundaries: {
    north: "Desa Patramanggala",
    south: "Desa Sukatani & Kec. Rajeg",
    east: "Desa Rancalabuh",
    west: "Desa Lontar & Aliran Kali Cidurian",
  },
  hamlets: [
    { name: "Dusun I (Kemiri Kulon)", rw: "RW 01 & RW 02", head: "Sulaeman", population: 2190 },
    { name: "Dusun II (Kemiri Wetan)", rw: "RW 03 & RW 04", head: "TB. Syamsudin", population: 2340 },
    { name: "Dusun III (Karang Kobar)", rw: "RW 05 & RW 06", head: "Rohmatullah", population: 1910 },
    { name: "Dusun IV (Santri Klebet)", rw: "RW 07 & RW 08", head: "Ust. M. Solihin", population: 1980 },
  ],
};

export const VILLAGE_OFFICIALS: VillageOfficial[] = [
  {
    id: "off-1",
    name: "Jamaludin, S.IP",
    role: "Kepala Desa",
    skNumber: "SK.Bupati/141/2021",
    period: "2021 – 2027",
    duties: "Memimpin penyelenggaraan pemerintahan desa, pembinaan kemasyarakatan, dan pemberdayaan ekonomi warga.",
  },
  {
    id: "off-2",
    name: "H. Ahmad Fauzi, S.E.",
    role: "Sekretaris Desa",
    skNumber: "SK.Kades/02/2020",
    period: "2020 – Sekarang",
    duties: "Mengoordinasikan administrasi umum, keuangan desa, tata laksana persuratan, dan penyusunan regulasi desa.",
  },
  {
    id: "off-3",
    name: "Siti Munawaroh, A.Md.",
    role: "Kepala Urusan Keuangan (Kaur)",
    skNumber: "SK.Kades/05/2020",
    period: "2020 – Sekarang",
    duties: "Mengelola penatausahaan kas desa, pembukuan APBDes melalui Siskeudes, dan pelaporan pajak.",
  },
  {
    id: "off-4",
    name: "M. Irfan Maulana, S.T.",
    role: "Kaur Perencanaan & Pembangunan",
    skNumber: "SK.Kades/06/2020",
    period: "2020 – Sekarang",
    duties: "Menyusun RKPDes, RPJMDes, pengukuran teknis jalan desa, drainase, dan fasilitas umum.",
  },
  {
    id: "off-5",
    name: "Rahmat Hidayat",
    role: "Kaur Tata Usaha & Umum",
    skNumber: "SK.Kades/07/2020",
    period: "2020 – Sekarang",
    duties: "Pengarsipan dokumen desa, inventarisasi aset desa, dan pelayanan meja depan warga.",
  },
  {
    id: "off-6",
    name: "Hendra Gunawan",
    role: "Kasi Pemerintahan",
    skNumber: "SK.Kades/08/2020",
    period: "2020 – Sekarang",
    duties: "Mengelola administrasi kependudukan (KTP/KK), pertanahan, ketertiban umum, dan batas dusun.",
  },
  {
    id: "off-7",
    name: "Hj. Nurhasanah",
    role: "Kasi Kesejahteraan",
    skNumber: "SK.Kades/09/2020",
    period: "2020 – Sekarang",
    duties: "Mengawal program bantuan sosial, pengentasan stunting, kegiatan posyandu, dan pembinaan PKK.",
  },
  {
    id: "off-8",
    name: "Dedi Supriatna",
    role: "Kasi Pelayanan",
    skNumber: "SK.Kades/10/2020",
    period: "2020 – Sekarang",
    duties: "Penerbitan surat pengantar, perizinan usaha mikro, rekomendasi SKTM, dan layanan keliling dusun.",
  },
];

export const VILLAGE_SERVICES: ServiceRequirement[] = [
  {
    id: "sktm",
    code: "REG-SKTM-01",
    name: "Surat Keterangan Tidak Mampu (SKTM)",
    alias: "SKTM Sekolah / Berobat",
    purpose: "Persyaratan beasiswa pendidikan (KIP/PIP), keringanan biaya rawat inap rumah sakit, atau permohonan bantuan sosial pemerintah.",
    timeEstimate: "15 Menit di Loket (Cepat)",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar Asli dari Ketua RT dan RW setempat",
      "Fotokopi Kartu Tanda Penduduk (KTP-el) pemohon/orang tua",
      "Fotokopi Kartu Keluarga (KK) yang masih berlaku",
      "Foto rumah tampak depan (untuk permohonan beasiswa perguruan tinggi)",
      "Surat pernyataan tidak mampu bermaterai Rp 10.000",
    ],
    steps: [
      "Minta surat pengantar ke Ketua RT dan RW sesuai alamat KTP Anda.",
      "Bawa berkas lengkap ke Loket Pelayanan Terpadu Kantor Desa Kemiri (atau ajukan online lewat web ini).",
      "Petugas melakukan verifikasi silang data kependudukan (DTKS / P3KE).",
      "Kepala Desa atau Sekdes menandatangani & membubuhkan stempel resmi basah.",
    ],
  },
  {
    id: "sku",
    code: "REG-SKU-02",
    name: "Surat Keterangan Usaha (SKU)",
    alias: "Legitimasi Usaha Mikro / UMKM",
    purpose: "Kelengkapan pengajuan pinjaman modal usaha (KUR BRI/BJB), pembuatan rekening bank atas nama usaha, dan perizinan NIB.",
    timeEstimate: "20 Menit",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar Usaha dari Ketua RT & RW setempat",
      "Fotokopi KTP pemilik usaha dan Kartu Keluarga (KK)",
      "Foto aktivitas tempat usaha atau produk olahan",
      "Bukti tempat usaha (PBB atau surat perjanjian sewa jika mengontrak)",
    ],
    steps: [
      "Siapkan data nama usaha, jenis dagangan/jasa, dan lama berdiri usaha.",
      "Verifikasi berkas oleh Kasi Pelayanan Desa Kemiri.",
      "Pemeriksaan lapangan singkat oleh Kepala Dusun setempat bila diperlukan.",
      "Penerbitan SKU sah dengan nomor registrasi buku induk desa.",
    ],
  },
  {
    id: "skck",
    code: "REG-SKCK-03",
    name: "Surat Pengantar SKCK (Catatan Kepolisian)",
    alias: "Pengantar Sidik Jari & Polsek",
    purpose: "Pengantar resmi dari desa untuk membuat SKCK di Polsek Kemiri / Polres Tangerang guna melamar pekerjaan atau CPNS/PPPK.",
    timeEstimate: "15 Menit",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar dari Ketua RT dan RW",
      "Fotokopi KTP-el dan Kartu Keluarga (KK)",
      "Fotokopi Akta Kelahiran atau Ijazah terakhir",
      "Pasfoto berwarna 4x6 latar belakang merah (2 lembar)",
    ],
    steps: [
      "Mengisi formulir pengantar di meja pelayanan umum desa.",
      "Pengecekan rekam jejak kependudukan oleh Kasi Pemerintahan.",
      "Pencetakan surat pengantar bertanda tangan Kepala Desa.",
      "Warga melanjutkan berkas ke Polsek Kemiri untuk penerbitan SKCK fisik.",
    ],
  },
  {
    id: "domisili",
    code: "REG-DOM-04",
    name: "Surat Keterangan Domisili Warga / Lembaga",
    alias: "Keterangan Tempat Tinggal",
    purpose: "Keterangan resmi menetap sementara bagi warga pendatang, persyaratan kerja pabrik di Tangerang, atau domisili yayasan/organisasi.",
    timeEstimate: "20 Menit",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar RT/RW lingkungan tinggal saat ini",
      "Fotokopi KTP daerah asal dan Kartu Keluarga",
      "Surat jaminan dari pemilik kontrakan/rumah yang ditinggali",
      "Pasfoto ukuran 3x4 (1 lembar)",
    ],
    steps: [
      "Lapor diri ke Ketua RT setempat minimal 1x24 jam sejak tiba di desa.",
      "Membawa surat pengantar RT ke kantor desa.",
      "Pencatatan dalam Buku Registrasi Penduduk Non-Permanen Desa Kemiri.",
      "Surat Domisili berlaku 6 bulan dan dapat diperpanjang.",
    ],
  },
  {
    id: "kelahiran-kematian",
    code: "REG-KLA-05",
    name: "Surat Keterangan Kelahiran / Kematian",
    alias: "Pengantar Akta Disdukcapil",
    purpose: "Dasar penerbitan Akta Kelahiran baru atau Akta Kematian dari Disdukcapil Kabupaten Tangerang, serta pembaruan Kartu Keluarga.",
    timeEstimate: "1 Hari Kerja",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar RT/RW",
      "Surat Keterangan Lahir/Kematian dari Bidan, Dokter, atau Rumah Sakit",
      "Buku Nikah orang tua (untuk akta lahir)",
      "Kartu Keluarga (KK) asli dan fotokopi KTP pelapor",
    ],
    steps: [
      "Melaporkan peristiwa kelahiran/kematian maksimal 30 hari sejak kejadian.",
      "Petugas mengisi blanko F-2.01 (Kependudukan Capil).",
      "Validasi data kependudukan oleh Kasi Pemerintahan.",
      "Penerbitan surat pengantar resmi beserta rekomendasi ke Kecamatan.",
    ],
  },
  {
    id: "pindah",
    code: "REG-PND-06",
    name: "Surat Pengantar Pindah Penduduk (SKP)",
    alias: "Mutasi Kependudukan Antar Desa/Kota",
    purpose: "Pengantar kepindahan warga keluar desa (antar kecamatan, kabupaten, atau provinsi) untuk diteruskan ke Dinas Kependudukan.",
    timeEstimate: "1 Hari Kerja",
    cost: "Rp 0 (GRATIS)",
    documents: [
      "Surat Pengantar Pindah dari RT dan RW",
      "Kartu Keluarga asli dan fotokopi KTP semua anggota keluarga yang pindah",
      "Pasfoto 3x4 (2 lembar kepala keluarga)",
      "Alamat tujuan pindah yang jelas dan lengkap hingga nomor RT/RW",
    ],
    steps: [
      "Penyelesaian administrasi lingkungan di tingkat RT/RW.",
      "Penyerahan berkas ke seksi kependudukan kantor desa.",
      "Penerbitan Formulir Permohonan Pindah WNI (F-1.08).",
      "Pengesahan oleh Kepala Desa untuk dibawa ke Kantor Camat Kemiri.",
    ],
  },
];

export const BUDGET_DATA: BudgetYear[] = [
  {
    year: 2024,
    totalRevenue: 2145850000,
    totalExpenditure: 2088420000,
    netFinancing: 57430000,
    revenueBreakdown: [
      { name: "Dana Desa (APBN / DDS)", amount: 980500000, sharePercent: 45.7, description: "Fokus pada ketahanan pangan, BLT Desa, dan penanganan stunting" },
      { name: "Alokasi Dana Desa (ADD Pemkab Tangerang)", amount: 720350000, sharePercent: 33.6, description: "Penghasilan tetap & operasional aparatur pemerintah desa, BPD, dan RT/RW" },
      { name: "Bagi Hasil Pajak & Retribusi Daerah (PBH)", amount: 310000000, sharePercent: 14.4, description: "Bagi hasil pajak bumi bangunan dan retribusi perizinan daerah" },
      { name: "Pendapatan Asli Desa (PADes)", amount: 135000000, sharePercent: 6.3, description: "Hasil pengelolaan tanah kas desa, pasar desa, dan bagi hasil BUMDes" },
    ],
    expenditureBreakdown: [
      { sector: "Pelaksanaan Pembangunan Desa (Fisik & Sarpras)", amount: 1045000000, sharePercent: 50.0, color: "#2F4A2B" },
      { sector: "Penyelenggaraan Pemerintahan Desa", amount: 580420000, sharePercent: 27.8, color: "#4A2F1D" },
      { sector: "Pembinaan Kemasyarakatan & Kelembagaan", amount: 218000000, sharePercent: 10.4, color: "#C8642B" },
      { sector: "Pemberdayaan Warga & Penguatan UMKM", amount: 195000000, sharePercent: 9.3, color: "#D9A441" },
      { sector: "Penanggulangan Bencana & Keadaan Mendesak", amount: 50000000, sharePercent: 2.5, color: "#8FA67A" },
    ],
    realizedProjects: [
      {
        id: "proj-1",
        name: "Betonisasi Jalan Lingkungan & Usaha Tani Kp. Santri",
        location: "Dusun IV / RW 04",
        budget: 185000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "350 Kepala Keluarga dan 45 Petani Padi",
      },
      {
        id: "proj-2",
        name: "Pembangunan Saluran Drainase U-Ditch Kp. Kemiri Kulon",
        location: "Dusun I / RT 02 RW 01",
        budget: 142500000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Mencegah genangan air hujan untuk 180 rumah warga",
      },
      {
        id: "proj-3",
        name: "Penerangan Jalan Umum (PJU) Tenaga Surya 45 Titik",
        location: "Tersebar di 4 Dusun (Kemiri Kulon s/d Santri)",
        budget: 112500000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Seluruh pengguna jalan penghubung antardusun di malam hari",
      },
      {
        id: "proj-4",
        name: "Rehabilitasi Fasilitas Gedung Posyandu Melati & Sarana Stunting",
        location: "Dusun II / RW 03 Kp. Kemiri Wetan",
        budget: 88000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "140 balita & 35 ibu hamil di lingkungan RW 03",
      },
      {
        id: "proj-5",
        name: "Pembangunan Sumur Bor Air Bersih Pertanian Kp. Karang Kobar",
        location: "Dusun III / Blok Sawah Karang Kobar",
        budget: 65000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Irigasi 28 Hektar sawah pada musim kemarau",
      },
      {
        id: "proj-6",
        name: "Bantuan Sarana Mesin Pemeras & Kemasan Minyak Kemiri KWT",
        location: "Sentra Olahan Kemiri Kp. Santri",
        budget: 45000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "3 Kelompok Wanita Tani (KWT) produsen minyak kemiri",
      },
    ],
  },
  {
    year: 2023,
    totalRevenue: 1984200000,
    totalExpenditure: 1952100000,
    netFinancing: 32100000,
    revenueBreakdown: [
      { name: "Dana Desa (DDS)", amount: 932000000, sharePercent: 47.0, description: "Infrastruktur dasar dan penanganan kemiskinan ekstrem" },
      { name: "Alokasi Dana Desa (ADD)", amount: 685000000, sharePercent: 34.5, description: "Gaji aparatur desa dan tunjangan operasional RT/RW" },
      { name: "Bagi Hasil Pajak & Retribusi", amount: 265000000, sharePercent: 13.3, description: "Bagi hasil dari penerimaan daerah Kabupaten Tangerang" },
      { name: "Pendapatan Asli Desa", amount: 102200000, sharePercent: 5.2, description: "Sewa aset desa dan retribusi stan pasar" },
    ],
    expenditureBreakdown: [
      { sector: "Pelaksanaan Pembangunan Desa", amount: 980000000, sharePercent: 50.2, color: "#2F4A2B" },
      { sector: "Penyelenggaraan Pemerintahan Desa", amount: 535000000, sharePercent: 27.4, color: "#4A2F1D" },
      { sector: "Pembinaan Kemasyarakatan", amount: 220000000, sharePercent: 11.3, color: "#C8642B" },
      { sector: "Pemberdayaan Masyarakat", amount: 167100000, sharePercent: 8.6, color: "#D9A441" },
      { sector: "Keadaan Mendesak", amount: 50000000, sharePercent: 2.5, color: "#8FA67A" },
    ],
    realizedProjects: [
      {
        id: "proj-23-1",
        name: "Pengaspalan Hotmix Jalan Poros Desa Kemiri - Rancalabuh",
        location: "Poros Utama Desa",
        budget: 240000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Akses mobilitas harian 8.000 warga dan pedagang",
      },
      {
        id: "proj-23-2",
        name: "Pembangunan Pagar & Halaman Ramah Anak Kantor Desa",
        location: "Kompleks Kantor Desa Kemiri",
        budget: 75000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Kenyamanan warga pengurus administrasi dan anak-anak",
      },
    ],
  },
  {
    year: 2022,
    totalRevenue: 1820500000,
    totalExpenditure: 1795000000,
    netFinancing: 25500000,
    revenueBreakdown: [
      { name: "Dana Desa (DDS)", amount: 890000000, sharePercent: 48.9, description: "Pemulihan ekonomi pasca pandemi dan BLT desa" },
      { name: "Alokasi Dana Desa (ADD)", amount: 640500000, sharePercent: 35.2, description: "Operasional perangkat desa dan BPD" },
      { name: "Bagi Hasil Pajak", amount: 210000000, sharePercent: 11.5, description: "Bagi hasil pajak dan retribusi daerah" },
      { name: "Pendapatan Asli Desa", amount: 80000000, sharePercent: 4.4, description: "Penerimaan kas desa" },
    ],
    expenditureBreakdown: [
      { sector: "Pelaksanaan Pembangunan Desa", amount: 890000000, sharePercent: 49.6, color: "#2F4A2B" },
      { sector: "Penyelenggaraan Pemerintahan Desa", amount: 505000000, sharePercent: 28.1, color: "#4A2F1D" },
      { sector: "Pembinaan Kemasyarakatan", amount: 190000000, sharePercent: 10.6, color: "#C8642B" },
      { sector: "Pemberdayaan Masyarakat", amount: 150000000, sharePercent: 8.4, color: "#D9A441" },
      { sector: "Keadaan Darurat", amount: 60000000, sharePercent: 3.3, color: "#8FA67A" },
    ],
    realizedProjects: [
      {
        id: "proj-22-1",
        name: "Normalisasi Saluran Irigasi Tersier Blok Kemiri Kulon",
        location: "Dusun I Kemiri Kulon",
        budget: 110000000,
        progress: 100,
        status: "Selesai 100%",
        beneficiaries: "Pengairan sawah produktif seluas 35 Ha",
      },
    ],
  },
];

export const VILLAGE_UMKM: UMKMItem[] = [
  {
    id: "umkm-1",
    name: "Sari Kemiri Murni Tangerang",
    owner: "H. Supriadi & KWT Kemiri Jaya",
    category: "Olahan Kemiri",
    location: "Kp. Santri RT 03 RW 07, Dusun IV",
    priceRange: "Rp 35.000 – Rp 120.000",
    description: "Minyak kemiri 100% murni hasil perasan dingin (cold-pressed) biji kemiri pilihan pohon lokal tanpa bahan kimia. Cocok untuk perawatan rambut alami, penumbuh rambut bayi, serta menjaga kesehatan kulit kepala.",
    phone: "6281298761001",
    featuredProduct: "Minyak Kemiri Ekstraksi Dingin Botol 100ml & 250ml",
    rating: 4.9,
  },
  {
    id: "umkm-2",
    name: "Sambal Kemiri Roasting Bu Hj. Mariam",
    owner: "Hj. Mariam",
    category: "Kuliner",
    location: "Kp. Kemiri Kulon RT 01 RW 01, Dusun I",
    priceRange: "Rp 25.000 – Rp 45.000",
    description: "Sambal ulek khas Desa Kemiri yang memadukan cabai rawit pedas segar dengan biji kemiri sangrai beraroma wangi kacang gurih. Dibuat dengan minyak kelapa asli tanpa bahan pengawet sintesis.",
    phone: "6281311223344",
    featuredProduct: "Sambal Kemiri Botol Kaca Segel 180gr (Tahan 3 Bulan)",
    rating: 4.8,
  },
  {
    id: "umkm-3",
    name: "Anyaman Bambu Tradisional Kang Deden",
    owner: "Kang Deden Kurniawan",
    category: "Kriya Bambu",
    location: "Kp. Karang Kobar RT 04 RW 05, Dusun III",
    priceRange: "Rp 15.000 – Rp 150.000",
    description: "Kerajinan anyaman bambu tali khas pedesaan Banten: tampah penampi beras, besek hantaran syukuran ramah lingkungan, bakul nasi, dan sangkar bambu halus buatan tangan pengrajin turun-temurun.",
    phone: "6285788990011",
    featuredProduct: "Tampah Bambu Halus Ø 50cm & Besek Bambu Natural",
    rating: 4.9,
  },
  {
    id: "umkm-4",
    name: "Keripik Singkong & Pisang Renyah Bu Titi",
    owner: "Ibu Titi Hartati",
    category: "Kuliner",
    location: "Kp. Kemiri Wetan RT 02 RW 03, Dusun II",
    priceRange: "Rp 12.000 – Rp 50.000",
    description: "Keripik singkong mentega dan pisang kepok renyah yang dibumbui dengan racikan bawang putih, garam laut, dan bubuk kemiri panggang yang gurih khas aroma dapur desa.",
    phone: "6282133445566",
    featuredProduct: "Keripik Singkong Gurih Bumbu Kemiri 250gr",
    rating: 4.7,
  },
  {
    id: "umkm-5",
    name: "Beras Alami Kelompok Tani Subur Makmur",
    owner: "Pak Dulhadi (Ketua Gapoktan)",
    category: "Hasil Bumi",
    location: "Blok Sawah Ilir, Dusun I",
    priceRange: "Rp 70.000 – Rp 135.000 / Karung 5kg",
    description: "Beras pandan wangi dan ciherang berkualitas panen petani asli Desa Kemiri. Diolah dengan penggilingan lokal tanpa zat pemutih, tanpa pewangi tambahan, pulen alami dan tahan simpan.",
    phone: "6281277665544",
    featuredProduct: "Beras Pandan Wangi Kemiri Kemasan 5kg & 10kg",
    rating: 4.9,
  },
  {
    id: "umkm-6",
    name: "Pandai Besi & Teralis Mas Hendro",
    owner: "Mas Hendro Utomo",
    category: "Jasa",
    location: "Jl. Raya Kemiri Dekat Pasar, Dusun II",
    priceRange: "Rp 50.000 – Rp 750.000",
    description: "Jasa pembuatan dan penempaan alat pertanian tajam tahan lama (cangkul, arit, golok kebun) serta pengerjaan pagar besi dan kanopi rumah warga dengan ketahanan prima.",
    phone: "6289655443322",
    featuredProduct: "Golok Tani Baja Tempa & Cangkul Standar SNI",
    rating: 4.8,
  },
];

export const VILLAGE_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Revitalisasi Sentra Minyak Kemiri: Kelompok Tani Dusun III Raih Sertifikasi Mutu Alami",
    slug: "revitalisasi-sentra-minyak-kemiri",
    date: "18 Oktober 2026",
    category: "Pertanian",
    excerpt: "Program pembinaan pemanfaatan komoditas kemiri lokal yang didukung Dana Desa kini resmi menghasilkan produk minyak kemiri perasan dingin berkualitas tinggi yang siap tembus pasar retail Tangerang Raya.",
    content: `Desa Kemiri, Kabupaten Tangerang — Sejarah pohon kemiri yang telah lama melekat pada nama desa kembali menemukan momentum kejayaannya. Melalui alokasi Dana Desa bidang pemberdayaan masyarakat tahun anggaran 2024, Kelompok Wanita Tani (KWT) Kemiri Jaya bersama Gapoktan Subur Makmur berhasil merampungkan instalasi mesin pemeras hidrolik dingin (cold-press extractor).

Kepala Desa Kemiri, Jamaludin, S.IP, dalam kunjungan ke rumah produksi di Dusun III menyampaikan bahwa langkah ini merupakan tekad desa untuk mengubah paradigma dari sekadar menjual biji kemiri mentah menjadi produk hilir yang bernilai ekonomis tinggi.

"Dulu warga menjual biji kemiri kering hanya Rp 18.000 per kilogram kepada tengkulak luar. Dengan diolah menjadi minyak kemiri murni berkemasan higienis, nilai tambah yang dinikmati kelompok warga melonjak hingga empat kali lipat," jelas Kades Jamaludin di hadapan para pengrajin.

Uji laboratorium independen membuktikan minyak kemiri produksi Desa Kemiri memiliki kemurnian 99,4% dengan kandungan asam lemak esensial dan antioksidan yang optimal untuk kesehatan rambut serta perawatan kulit. Ke depan, Pemerintah Desa Kemiri tengah merampungkan perizinan PIRT dan sertifikasi halal MUI agar produk ini dapat merambah toko modern di kawasan BSD, Gading Serpong, hingga platform belanja digital resmi.`,
    author: "Sekretariat Desa Kemiri",
    readingTime: "4 menit baca",
    image: "/src/assets/images/umkm_kemiri_product_1792546241129.jpg",
    isLead: true,
  },
  {
    id: "news-2",
    title: "Musrenbangdes 2025: Warga Sepakati Prioritas Drainase Pertanian dan Insentif Kader Posyandu",
    slug: "musrenbangdes-2025-prioritas-drainase",
    date: "12 Oktober 2026",
    category: "Pembangunan",
    excerpt: "Musyawarah Perencanaan Pembangunan Desa dihadiri 80 perwakilan RT/RW, BPD, tokoh agama, dan tokoh pemuda guna menyelaraskan usulan prioritas anggaran tahun depan.",
    content: `Gedung Serbaguna Kantor Desa Kemiri dipadati perwakilan warga dari empat dusun dalam forum Musyawarah Rencana Pembangunan Desa (Musrenbangdes) penetapan Rencana Kerja Pemerintah Desa (RKPDes) 2025.

Fasilitator musyawarah, Kaur Perencanaan M. Irfan Maulana, memaparkan dari total 38 usulan yang dihimpun dalam Musdus (Musyawarah Dusun), terdapat tiga isu utama yang menjadi kesepakatan bulat para perwakilan warga:

1. Normalisasi dan pemasangan dinding penahan tanah (TPT) saluran drainase sepanjang 800 meter di Blok Sawah Karang Kobar guna mengantisipasi banjir musiman.
2. Peningkatan alokasi makanan tambahan (PMT) bergizi balita serta penambahan insentif operasional bagi 20 kader Posyandu yang tersebar di 5 pos lingkungan.
3. Pelatihan literasi digital dan pemasaran online bagi pengrajin anyaman bambu dan kuliner rumahan Desa Kemiri.

Ketua BPD Desa Kemiri mengapresiasi keterbukaan pemerintah desa dalam membeberkan estimasi pagu indikatif keuangan desa sehingga warga dapat memilah usulan yang paling mendesak dan berdaya guna tinggi.`,
    author: "Tim Perencanaan Pembangunan",
    readingTime: "3 menit baca",
    image: "/src/assets/images/kegiatan_gotong_royong_1792546241286.jpg",
  },
  {
    id: "news-3",
    title: "Jadwal Pelayanan Keliling Adminduk 'Jemput Bola' di Dusun II dan IV Pekan Ini",
    slug: "jadwal-pelayanan-keliling-adminduk",
    date: "05 Oktober 2026",
    category: "Pengumuman",
    excerpt: "Pemerintah Desa Kemiri kembali menggelar program loket keliling untuk perekaman KTP-el pemula, pembaruan Kartu Keluarga ber-barcode, dan pengurusan akta kematian lansia tanpa harus antre di kantor desa.",
    content: `Guna memastikan seluruh warga desa mendapatkan hak identitas kependudukan yang lengkap, Seksi Pelayanan Desa Kemiri mengumumkan pembukaan pos keliling pelayanan administrasi kependudukan (Adminduk) yang akan berlangsung pada hari Kamis dan Sabtu pekan ini.

Jadwal Pelaksanaan:
- Pos 1: Balai Warga RW 03 (Dusun II Kemiri Wetan) — Kamis, 22 Oktober 2026, Pukul 09.00 - 13.00 WIB.
- Pos 2: Halaman Masjid Kp. Santri (Dusun IV) — Sabtu, 24 Oktober 2026, Pukul 08.30 - 12.30 WIB.

Layanan yang dilayani di tempat mencakup:
- Perekaman foto & sidik jari KTP-el bagi remaja genap berusia 17 tahun.
- Pembaruan KK lama (blangko merah/biru) menjadi Kartu Keluarga terbaru ber-barcode digital TTE Disdukcapil.
- Pengurusan surat pengantar pembuatan akta kelahiran anak dan akta kematian sanak keluarga.
- Layanan pengesahan formulir SKTM untuk pengajuan program bantuan sosial.

Seluruh layanan ini tidak dipungut biaya apapun (Rp 0 / Bebas Pungli). Warga cukup membawa dokumen asli dan fotokopi pendukung sesuai jenis layanan.`,
    author: "Seksi Pelayanan & Pemerintahan",
    readingTime: "2 menit baca",
    image: "/src/assets/images/hero_kantor_desa_1792546239618.jpg",
  },
  {
    id: "news-4",
    title: "Guyub Gotong Royong: Warga 4 Dusun Bersihkan Saluran Irigasi Tersier Jelang Musim Tanam",
    slug: "gotong-royong-saluran-irigasi",
    date: "28 September 2026",
    category: "Warta Desa",
    excerpt: "Lebih dari 200 warga turun bersama membawa cangkul dan parang membersihkan sedimentasi kali sepanjang 1,2 kilometer demi kelancaran pasokan air 120 hektar sawah.",
    content: `Pagi berkabut di Desa Kemiri dihangatkan oleh gelak tawa dan semangat gotong royong ratusan warga yang berkumpul sejak pukul 06.30 WIB di tepi saluran irigasi tersier Blok Ilir.

Kegiatan rutin menjelang musim tanam (MT) rendeng ini dipimpin langsung oleh para Kepala Dusun dan ketua kelompok tani. Saluran irigasi yang mengalirkan air dari percabangan saluran sekunder Cidurian sempat mengalami pendangkalan akibat endapan lumpur dan eceng gondok liar selama musim kemarau.

"Kalau tidak kita bersihkan bersama, sawah di bagian hilir Dusun I dan Dusun III sering kekurangan air saat pembibitan. Dengan dikeruk bersama seperti ini, aliran air kembali deras dan tanah siap dibajak secara serempak," tutur Pak Dulhadi, ketua Gapoktan.

Ibu-ibu warga sekitar turut menyemarakkan tradisi dengan menyajikan hidangan gotong royong khas: nasi liwet daun pisang, sambal kemiri panggang, sayur asem pedesaan, serta kopi tubruk hangat. Kebersamaan ini menjadi bukti bahwa nilai luhur swadaya desa tetap hidup subur di tengah laju modernitas Kabupaten Tangerang.`,
    author: "Warta Humas Desa",
    readingTime: "3 menit baca",
    image: "/src/assets/images/sawah_kemiri_1792546240124.jpg",
  },
];

export const MAP_LOCATIONS = [
  {
    id: "loc-kantor",
    name: "Kantor Desa Kemiri",
    category: "Pusat Pelayanan",
    description: "Pusat administrasi pemerintahan desa, loket pelayanan persuratan mandiri, ruang pertemuan warga, dan posko informasi publik.",
    coords: { x: 52, y: 48 },
    address: "Jl. Raya Kemiri - Kronjo No. 01",
    hours: "08.00 - 15.00 WIB",
  },
  {
    id: "loc-puskesmas",
    name: "Puskesmas Pembantu Kemiri",
    category: "Layanan Kesehatan",
    description: "Fasilitas kesehatan dasar masyarakat, pos imunisasi anak, pemeriksaan ibu hamil, dan rujukan Puskesmas Kecamatan.",
    coords: { x: 58, y: 43 },
    address: "Jl. Lapangan Sepak Bola Kemiri",
    hours: "08.00 - 12.00 WIB (Senin - Sabtu)",
  },
  {
    id: "loc-sentra-kemiri",
    name: "Sentra Olahan Kemiri Kp. Santri",
    category: "Sentra UMKM",
    description: "Pusat penjemuran, pengupasan, dan perasan mesin dingin minyak kemiri alami yang dikelola KWT Kemiri Jaya.",
    coords: { x: 74, y: 68 },
    address: "Kp. Santri Klebet RT 03 RW 07",
    hours: "07.30 - 16.30 WIB",
  },
  {
    id: "loc-pasar",
    name: "Pasar Tradisional Kemiri",
    category: "Pusat Ekonomi",
    description: "Pasar rakyat tempat bertemunya hasil kebun kemiri, sayur mayur lokal, ikan air tawar, dan sandang kebutuhan harian warga.",
    coords: { x: 44, y: 55 },
    address: "Jl. Simpang Tiga Pasar Kemiri",
    hours: "04.30 - 11.30 WIB (Tiap Hari)",
  },
  {
    id: "loc-masjid",
    name: "Masjid Jami' Baiturrahim (Didirikan 1928)",
    category: "Situs Sejarah & Religi",
    description: "Masjid bersejarah pusat kegiatan keagamaan dan pengajian akbar warga yang menjadi simbol kerukunan sejak masa kolonial.",
    coords: { x: 48, y: 38 },
    address: "Kp. Kemiri Wetan RW 03",
    hours: "Terbuka 24 Jam",
  },
  {
    id: "loc-sawah",
    name: "Persawahan & Irigasi Blok Ilir",
    category: "Kawasan Agraris",
    description: "Lahan sawah tadah irigasi seluas 85 hektar dengan jalur tanggul ramah jalan kaki dan pemandangan hijau asri.",
    coords: { x: 28, y: 65 },
    address: "Blok Sawah Ilir Dusun I",
    hours: "Akses terbuka",
  },
];
