
import React, { useState } from 'react';
import { MOCK_HISTORY } from '../constants';
import { HistoryItem } from '../types';

export const Riwayat: React.FC = () => {
  const [selectedHistory, setSelectedHistory] = useState<HistoryItem | null>(null);

  return (
    <div className="px-4 md:px-0 py-8 space-y-8 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Riwayat Konsultasi</h1>
        <p className="text-slate-500">Pantau status penyelesaian masalah Anda di sini.</p>
      </div>

      <div className="space-y-4">
        {MOCK_HISTORY.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
            onClick={() => setSelectedHistory(item)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{item.type}</h4>
                <p className="text-sm text-slate-500">Mediator: {item.mediatorName}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-sm text-slate-400 font-medium">
                {item.date}
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                item.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                item.status === 'Berjalan' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {item.status}
              </span>
              <button className="text-amber-600 hover:text-amber-700 text-sm font-bold">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* History Detail Modal */}
      {selectedHistory && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">Detail Konsultasi</h3>
              <button onClick={() => setSelectedHistory(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{selectedHistory.type}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      selectedHistory.status === 'Selesai' ? 'bg-green-500 text-white' :
                      selectedHistory.status === 'Berjalan' ? 'bg-amber-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {selectedHistory.status}
                    </span>
                    <span className="text-slate-400 text-sm">• {selectedHistory.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID Transaksi</p>
                  <p className="text-sm font-mono text-slate-600">MT-{selectedHistory.id.toUpperCase()}-2024</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/${selectedHistory.mediatorName}/100/100`} alt="Mediator" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Mediator Bertugas</p>
                    <p className="text-sm font-bold text-slate-900">{selectedHistory.mediatorName}</p>
                  </div>
                </div>
                <div className="pt-4 border-t flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Metode</p>
                    <p className="text-sm font-bold text-slate-900">Virtual (Zoom)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-400 uppercase">Durasi</p>
                    <p className="text-sm font-bold text-slate-900">60 Menit</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-bold text-slate-900">Catatan & Hasil</h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
                    <p className="text-sm text-slate-600 leading-relaxed">Diskusi awal mengenai pokok permasalahan telah dilakukan dengan baik.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
                    <p className="text-sm text-slate-600 leading-relaxed">Kedua belah pihak menyetujui poin-poin dasar negosiasi.</p>
                  </div>
                  {selectedHistory.status === 'Selesai' && (
                    <div className="flex items-start space-x-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                      <p className="text-sm text-slate-600 leading-relaxed font-bold">Akta perdamaian telah ditandatangani dan diarsipkan.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setSelectedHistory(null)}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Tutup Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {MOCK_HISTORY.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <p className="text-slate-500 font-medium">Belum ada riwayat aktivitas.</p>
        </div>
      )}
    </div>
  );
};
