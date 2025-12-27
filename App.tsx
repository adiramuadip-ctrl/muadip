
import React, { useState } from 'react';
import { TabType } from './types';
import { DesktopNav, MobileNav } from './components/Navigation';
import { Beranda } from './components/Beranda';
import { Paket } from './components/Paket';
import { MediatorList } from './components/Mediator';
import { Riwayat } from './components/Riwayat';
import { Profil } from './components/Profil';
import { Penjadwalan } from './components/Penjadwalan';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('beranda');

  const renderContent = () => {
    switch (activeTab) {
      case 'beranda':
        return <Beranda onNavigate={setActiveTab} />;
      case 'paket':
        return <Paket />;
      case 'mediator':
        return <MediatorList onNavigate={setActiveTab} />;
      case 'penjadwalan':
        return <Penjadwalan onNavigate={setActiveTab} />;
      case 'riwayat':
        return <Riwayat />;
      case 'profil':
        return <Profil />;
      default:
        return <Beranda onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <DesktopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow container mx-auto max-w-6xl py-4">
        {renderContent()}
      </main>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <footer className="hidden md:block bg-white border-t py-12 mt-12">
        <div className="container mx-auto max-w-6xl px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-xs">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">MediaTerra</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Platform mediasi terpercaya untuk segala jenis sengketa hukum dan bisnis. Membangun keadilan dengan cara kekeluargaan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-widest text-slate-400">Perusahaan</h5>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">Tentang Kami</a>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">Mediator</a>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">Karir</a>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-widest text-slate-400">Bantuan</h5>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">FAQ</a>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">Kontak</a>
              <a href="#" className="block text-slate-600 hover:text-amber-600 font-medium transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl px-8 mt-12 pt-8 border-t flex justify-between items-center text-xs text-slate-400">
          <p>© 2024 MediaTerra. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 font-bold text-slate-500">
            <span className="hover:text-amber-600 cursor-pointer">Instagram</span>
            <span className="hover:text-amber-600 cursor-pointer">LinkedIn</span>
            <span className="hover:text-amber-600 cursor-pointer">Twitter</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
