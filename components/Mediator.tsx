
import React, { useState } from 'react';
import { MOCK_MEDIATORS } from '../constants';
import { Mediator, TabType } from '../types';

interface MediatorListProps {
  onNavigate: (tab: TabType) => void;
}

export const MediatorList: React.FC<MediatorListProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMediator, setSelectedMediator] = useState<Mediator | null>(null);

  const filteredMediators = MOCK_MEDIATORS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 md:px-0 py-8 space-y-8 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Temukan Mediator</h1>
          <p className="text-slate-500">Pakar hukum dan negosiasi yang siap membantu Anda.</p>
        </div>
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Cari nama atau spesialisasi..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMediators.map((mediator) => (
          <div key={mediator.id} className="bg-white rounded-3xl border shadow-sm overflow-hidden hover:shadow-xl transition-all group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={mediator.image} 
                alt={mediator.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {mediator.isVerified && (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider">VERIFIED</span>
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                ★ {mediator.rating}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight">{mediator.name}</h3>
              <p className="text-amber-600 text-xs font-bold mb-4 tracking-wide uppercase">{mediator.specialty}</p>
              
              <div className="flex flex-col space-y-2 mb-6">
                 <div className="flex items-center text-xs text-slate-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} /></svg>
                    {mediator.experience}
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setSelectedMediator(mediator)}
                  className="py-3 bg-slate-50 text-slate-700 border rounded-xl text-sm font-bold hover:bg-slate-100 transition-all"
                >
                  Lihat Detail
                </button>
                <button 
                  onClick={() => onNavigate('penjadwalan')}
                  className="py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
                >
                  Jadwalkan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedMediator && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={selectedMediator.image} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{selectedMediator.name}</h3>
                    <p className="text-amber-600 font-bold text-sm">{selectedMediator.specialty}</p>
                  </div>
                  <button onClick={() => setSelectedMediator(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Profil</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{selectedMediator.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Riwayat Kasus</h4>
                    <ul className="space-y-2">
                      {selectedMediator.history.map((h, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => onNavigate('penjadwalan')}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                  >
                    Jadwalkan Sesi Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
