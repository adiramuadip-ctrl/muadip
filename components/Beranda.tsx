
import React from 'react';
import { Logo } from '../constants';
import { TabType } from '../types';

interface BerandaProps {
  onNavigate: (tab: TabType) => void;
}

export const Beranda: React.FC<BerandaProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden mx-4 md:mx-0 mt-4">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Solusi Damai Untuk <span className="text-amber-500">Masa Depan</span> Anda.
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            MediaTerra menghubungkan Anda dengan mediator profesional bersertifikat untuk menyelesaikan sengketa dengan cara yang adil, efisien, dan kekeluargaan.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => onNavigate('mediator')}
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              Cari Mediator
            </button>
            <button 
              onClick={() => onNavigate('paket')}
              className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Lihat Paket
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block opacity-20">
          <Logo className="w-96 h-96" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
        {[
          { label: 'Mediator Aktif', value: '150+' },
          { label: 'Kasus Selesai', value: '2.500+' },
          { label: 'Kepuasan Client', value: '98%' },
          { label: 'Tahun Pengalaman', value: '10+' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Bagaimana Kami Bekerja?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Pilih Mediator', desc: 'Pilih mediator profesional yang sesuai dengan bidang masalah Anda.', icon: '🔍', action: () => onNavigate('mediator') },
            { title: 'Jadwalkan Sesi', desc: 'Atur waktu pertemuan baik secara tatap muka maupun daring.', icon: '📅', action: () => onNavigate('penjadwalan') },
            { title: 'Capai Kesepakatan', desc: 'Mediator akan membimbing proses diskusi hingga mufakat tercapai.', icon: '🤝', action: () => onNavigate('paket') }
          ].map((step, i) => (
            <div 
              key={i} 
              onClick={step.action}
              className="group p-8 bg-white rounded-2xl border border-transparent hover:border-amber-200 hover:shadow-lg transition-all text-center cursor-pointer"
            >
              <div className="text-4xl mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-50 transition-colors">{step.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
