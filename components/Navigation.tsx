
import React from 'react';
import { TabType } from '../types';
import { Logo } from '../constants';

interface NavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const DesktopNav: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'paket', label: 'Paket' },
    { id: 'mediator', label: 'Mediator' },
    { id: 'penjadwalan', label: 'Penjadwalan' },
    { id: 'riwayat', label: 'Riwayat' },
    { id: 'profil', label: 'Profil' }
  ];

  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('beranda')}>
        <Logo className="w-10 h-10" />
        <span className="text-xl font-bold text-slate-900 tracking-tight">MediaTerra</span>
      </div>
      <div className="flex items-center space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button 
        onClick={() => setActiveTab('penjadwalan')}
        className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
      >
        Mulai Konsultasi
      </button>
    </nav>
  );
};

export const MobileNav: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'beranda', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'mediator', label: 'Mediator', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'penjadwalan', label: 'Jadwal', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'riwayat', label: 'Riwayat', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'profil', label: 'Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-2 flex justify-between items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center space-y-1 transition-colors ${
            activeTab === tab.id ? 'text-amber-600' : 'text-slate-400'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
          </svg>
          <span className="text-[9px] font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
