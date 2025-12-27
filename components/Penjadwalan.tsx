
import React, { useState } from 'react';
import { TabType } from '../types';

interface PenjadwalanProps {
  onNavigate: (tab: TabType) => void;
}

export const Penjadwalan: React.FC<PenjadwalanProps> = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [method, setMethod] = useState<'zoom' | 'offline'>('zoom');
  const [error, setError] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const slots = ['09:00', '11:00', '14:00', '16:00', '19:00'];

  const handleConfirm = () => {
    if (selectedDate === null || selectedSlot === null) {
      setError('Mohon pilih tanggal dan waktu sesi Anda.');
      return;
    }
    
    setError(null);
    setIsConfirming(true);
    
    // Memberikan efek loading sebentar sebelum navigasi langsung ke paket
    setTimeout(() => {
      onNavigate('paket');
    }, 600);
  };

  return (
    <div className="px-4 md:px-0 py-8 space-y-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Penjadwalan Sesi</h1>
            <p className="text-slate-500">Pilih metode, waktu, dan tanggal pertemuan Anda.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Langkah 1 dari 2
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-8 shadow-sm space-y-10 relative overflow-hidden">
          {isConfirming && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold text-slate-900">Menyiapkan Penawaran Paket...</p>
            </div>
          )}

          {/* Method Selection */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mr-3 text-sm">1</span>
              Pilih Metode Pertemuan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setMethod('zoom')}
                className={`p-6 rounded-2xl border-2 flex items-center space-x-4 transition-all text-left ${
                  method === 'zoom' ? 'border-amber-500 bg-amber-50 ring-4 ring-amber-50' : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${method === 'zoom' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Virtual Meeting</p>
                  <p className="text-xs text-slate-500">Online via Zoom / Meet</p>
                </div>
              </button>

              <button 
                onClick={() => setMethod('offline')}
                className={`p-6 rounded-2xl border-2 flex items-center space-x-4 transition-all text-left ${
                  method === 'offline' ? 'border-amber-500 bg-amber-50 ring-4 ring-amber-50' : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${method === 'offline' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Bertemu Langsung</p>
                  <p className="text-xs text-slate-500">Kantor atau Lokasi Fisik</p>
                </div>
              </button>
            </div>
          </section>

          {/* Date Selection */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mr-3 text-sm">2</span>
              Pilih Tanggal
            </h3>
            <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
              {days.map((date, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedDate(i); setError(null); }}
                  className={`flex-shrink-0 w-20 h-24 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                    selectedDate === i ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white border-slate-50 hover:border-amber-200'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold mb-1 ${selectedDate === i ? 'text-white/80' : 'text-slate-400'}`}>
                    {date.toLocaleDateString('id', { weekday: 'short' })}
                  </span>
                  <span className="text-xl font-black">{date.getDate()}</span>
                  <span className={`text-[10px] uppercase font-bold mt-1 ${selectedDate === i ? 'text-white/80' : 'text-slate-400'}`}>
                    {date.toLocaleDateString('id', { month: 'short' })}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Time Selection */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mr-3 text-sm">3</span>
              Pilih Waktu
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {slots.map((slot) => (
                <button 
                  key={slot} 
                  onClick={() => { setSelectedSlot(slot); setError(null); }}
                  className={`py-4 border-2 rounded-2xl text-sm font-bold transition-all ${
                    selectedSlot === slot ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-50 hover:bg-slate-50 bg-white'
                  }`}
                >
                  {slot} WIB
                </button>
              ))}
            </div>
          </section>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium flex items-center animate-in slide-in-from-top-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {error}
            </div>
          )}

          <section className="pt-8 border-t">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-slate-500 text-sm max-w-sm text-center md:text-left">
                Setelah konfirmasi, Anda akan diarahkan langsung untuk memilih <span className="font-bold text-slate-700">Paket Layanan</span> yang sesuai.
              </div>
              <button 
                onClick={handleConfirm}
                className="w-full md:w-auto px-12 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
              >
                Konfirmasi & Pilih Paket
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
