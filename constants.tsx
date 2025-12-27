
import React from 'react';
import { Mediator, Package, HistoryItem } from './types';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 85L50 30" stroke="#002147" strokeWidth="4" strokeLinecap="round"/>
    <path d="M25 35C25 35 35 25 50 25C65 25 75 35 75 35" stroke="#002147" strokeWidth="3" strokeLinecap="round"/>
    <path d="M15 85H85" stroke="#002147" strokeWidth="4" strokeLinecap="round"/>
    <path d="M40 85L42 75H58L60 85" fill="#002147"/>
    <path d="M25 35L15 65M25 35L35 65" stroke="#002147" strokeWidth="1"/>
    <path d="M10 65C10 65 15 75 25 75C35 75 40 65 40 65H10Z" fill="#002147"/>
    <rect x="20" y="55" width="10" height="4" transform="rotate(-30 20 55)" fill="#F59E0B"/>
    <rect x="26" y="52" width="3" height="12" transform="rotate(-30 26 52)" fill="#002147"/>
    <path d="M75 35L65 65M75 35L85 65" stroke="#002147" strokeWidth="1"/>
    <path d="M60 65C60 65 65 75 75 75C85 75 90 65 90 65H60Z" fill="#002147"/>
    <path d="M75 55L77 60L82 62L77 64L75 69L73 64L68 62L73 60L75 55Z" fill="#F59E0B"/>
  </svg>
);

export const MOCK_MEDIATORS: Mediator[] = [
  {
    id: '1',
    name: 'Dr. Sarah Amalia, S.H., M.H.',
    specialty: 'Sengketa Perdata & Waris',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '12 Tahun Pengalaman',
    isVerified: true,
    bio: 'Ahli dalam penyelesaian sengketa keluarga dan warisan dengan pendekatan psikologi hukum yang humanis.',
    history: ['Sengketa Tanah Jakarta Selatan (2022)', 'Mediasi Perceraian Keluarga (2023)', 'Pembagian Waris Kompleks']
  },
  {
    id: '2',
    name: 'Budi Santoso, S.H., C.M.',
    specialty: 'Mediasi Bisnis & Industrial',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '8 Tahun Pengalaman',
    isVerified: true,
    bio: 'Berfokus pada negosiasi kontrak korporasi, sengketa antar vendor, dan perselisihan hubungan industrial.',
    history: ['Restrukturisasi PT Maju Jaya', 'Konflik Vendor Logistik Nasional', 'Sengketa Saham Startup']
  },
  {
    id: '3',
    name: 'Linda Kusuma, LL.M.',
    specialty: 'Keluarga & Perceraian',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '15 Tahun Pengalaman',
    isVerified: true,
    bio: 'Mediator internasional dengan spesialisasi hak asuh anak antar negara dan perjanjian pra-nikah.',
    history: ['Mediasi Hak Asuh Lintas Negara', 'Penyelesaian Harta Gono Gini', 'Konsiliasi Konflik Domestik']
  },
  {
    id: '4',
    name: 'Reza Fahlevi, S.H.',
    specialty: 'Sengketa Properti & Tanah',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '6 Tahun Pengalaman',
    isVerified: true,
    bio: 'Spesialis dalam sengketa kepemilikan tanah, pembebasan lahan, dan konflik perumahan.',
    history: ['Sengketa Apartemen Mewah', 'Konflik Lahan Industri Bekasi']
  },
  {
    id: '5',
    name: 'Amanda Putri, S.H., LL.M.',
    specialty: 'Kekayaan Intelektual',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '9 Tahun Pengalaman',
    isVerified: true,
    bio: 'Membantu penyelesaian sengketa hak cipta, merek dagang, dan paten bagi industri kreatif.',
    history: ['Sengketa Merek Dagang Fashion', 'Pelanggaran Hak Cipta Fotografi']
  },
  {
    id: '6',
    name: 'Andi Wijaya, S.E., M.H.',
    specialty: 'Sengketa Perbankan & Syariah',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    experience: '10 Tahun Pengalaman',
    isVerified: true,
    bio: 'Kombinasi latar belakang ekonomi dan hukum untuk mediasi sengketa kredit dan ekonomi syariah.',
    history: ['Mediasi Kredit Macet Korporasi', 'Sengketa Bagi Hasil Syariah']
  }
];

export const MOCK_PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'Konsultasi Dasar',
    price: 'Rp 500.000',
    features: ['1 Sesi Mediasi (60 Menit)', 'Chat dengan Mediator', 'Ringkasan Hasil'],
    recommended: false
  },
  {
    id: 'p2',
    title: 'Paket Profesional',
    price: 'Rp 1.500.000',
    features: ['3 Sesi Mediasi', 'Prioritas Penjadwalan', 'Legal Draft Outline', 'Bantuan 24/7'],
    recommended: true
  },
  {
    id: 'p3',
    title: 'Paket Korporasi',
    price: 'Hubungi Kami',
    features: ['Sesi Unlimited', 'Mediator Senior', 'Dokumentasi Legal Lengkap', 'Dedicated Account Manager'],
    recommended: false
  }
];

export const MOCK_HISTORY: HistoryItem[] = [
  {
    id: 'h1',
    mediatorName: 'Dr. Sarah Amalia',
    date: '12 Okt 2023',
    status: 'Selesai',
    type: 'Sengketa Tanah'
  },
  {
    id: 'h2',
    mediatorName: 'Budi Santoso',
    date: '05 Jan 2024',
    status: 'Berjalan',
    type: 'Wanprestasi Vendor'
  },
  {
    id: 'h3',
    mediatorName: 'Linda Kusuma',
    date: '15 Feb 2024',
    status: 'Dibatalkan',
    type: 'Hak Asuh Anak'
  }
];
