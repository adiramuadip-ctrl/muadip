
import React, { useState } from 'react';
import { MOCK_PACKAGES } from '../constants';
import { Package } from '../types';

export const Paket: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  return (
    <div className="px-4 md:px-0 py-8 space-y-12 pb-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Pilih Paket Layanan</h1>
        <p className="text-slate-500">Pilih paket yang sesuai dengan kompleksitas masalah Anda.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {MOCK_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative p-8 rounded-3xl bg-white border flex flex-col h-full transition-all duration-300 ${
              pkg.recommended ? 'ring-2 ring-amber-500 shadow-xl scale-105 z-10' : 'shadow-sm hover:shadow-md'
            }`}
          >
            {pkg.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
                Paling Populer
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
            <div className="text-3xl font-black text-slate-900 mb-6">{pkg.price}</div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setSelectedPkg(pkg)}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
              pkg.recommended 
                ? 'bg-amber-500 text-slate-900 hover:bg-amber-400' 
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
            }`}>
              Pilih Paket
            </button>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Pembayaran</h3>
              <button onClick={() => setSelectedPkg(null)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-slate-50 p-4 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Paket Dipilih</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">{selectedPkg.title}</span>
                  <span className="text-amber-600 font-bold">{selectedPkg.price}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-900">Pilih Metode Pembayaran</p>
                {['Transfer Bank (VA)', 'E-Wallet (Gopay/OVO)', 'Kartu Kredit'].map((method) => (
                  <label key={method} className="flex items-center p-4 border rounded-2xl hover:bg-amber-50 cursor-pointer transition-colors group">
                    <input type="radio" name="payment" className="w-4 h-4 text-amber-500 focus:ring-amber-500" />
                    <span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-amber-900">{method}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button 
                onClick={() => { alert('Pembayaran Berhasil! Mengalihkan ke Penjadwalan...'); setSelectedPkg(null); }}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
