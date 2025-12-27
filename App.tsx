
import React, { useState } from 'react';
import { TabType } from './types';
import { DesktopNav, MobileNav } from './components/Navigation';
import { Beranda } from './components/Beranda';
import { Paket } from './components/Paket';
import { MediatorList } from './components/Mediator';
import { Riwayat } from './components/Riwayat';
import { Profil } from './components/Profil';
import { Penjadwalan } from './components/Penjadwalan';
import { Logo } from './constants';

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
      
      {/* Footer yang telah diperbaiki agar lebih informatif dan profesional */}
      <footer className="hidden md:block bg-white border-t pt-16 pb-8 mt-12">
        <div className="container mx-auto max-w-6xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Kolom 1: Brand & Socials */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Logo className="w-10 h-10" />
                <span className="text-2xl font-black text-slate-900 tracking-tight">MediaTerra</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Platform mediasi digital pertama di Indonesia yang menghubungkan pencari keadilan dengan mediator bersertifikat secara transparan dan efisien.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm opacity-60"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Kolom 2: Navigasi */}
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Perusahaan</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-amber-600 text-sm font-medium transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-slate-600 hover:text-amber-600 text-sm font-medium transition-colors">Daftar Mediator</a></li>
                <li><a href="#" className="text-slate-600 hover:text-amber-600 text-sm font-medium transition-colors">Program Mitra</a></li>
                <li><a href="#" className="text-slate-600 hover:text-amber-600 text-sm font-medium transition-colors">Karir</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak Detail (Permintaan User) */}
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Hubungi Kami</h5>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-slate-600">
                  <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Menara Media, Lantai 12, Kav. 45<br/>Jl. HR Rasuna Said, Jakarta Selatan</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-slate-600">
                  <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+62 (21) 500-1234</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-slate-600">
                  <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>halo@mediaterra.id</span>
                </li>
              </ul>
            </div>

            {/* Kolom 4: Download App */}
            <div className="space-y-6">
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Dapatkan Aplikasi</h5>
              <div className="space-y-3">
                <a href="#" className="block bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-colors flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase opacity-60 leading-none">Download on the</p>
                    <p className="text-sm font-bold leading-none">App Store</p>
                  </div>
                </a>
                <a href="#" className="block bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-colors flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                     <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase opacity-60 leading-none">Get it on</p>
                    <p className="text-sm font-bold leading-none">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <p>© 2024 MediaTerra Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-slate-600">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-slate-600">Kebijakan Privasi</a>
              <a href="#" className="hover:text-slate-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
