
export type TabType = 'beranda' | 'paket' | 'mediator' | 'riwayat' | 'profil' | 'penjadwalan';

export interface Mediator {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  experience: string;
  isVerified: boolean;
  bio: string;
  history: string[];
}

export interface Package {
  id: string;
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface HistoryItem {
  id: string;
  mediatorName: string;
  date: string;
  status: 'Selesai' | 'Berjalan' | 'Dibatalkan';
  type: string;
}
