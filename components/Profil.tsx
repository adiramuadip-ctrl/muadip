
import React, { useState } from 'react';

export const Profil: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rizky Ramadhan',
    email: 'rizky.ramadhan@example.com',
    phone: '+62 812-3456-7890',
    address: 'Jl. Sudirman No. 45, Jakarta Selatan',
    job: 'Wirausaha'
  });

  return (
    <div className="px-4 md:px-0 py-8 space-y-8 pb-24 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        {/* Header/Cover */}
        <div className="h-32 bg-slate-900 relative">
          <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-2xl shadow-lg">
            <img 
              src="https://picsum.photos/seed/user/200/200" 
              className="w-24 h-24 rounded-xl object-cover" 
              alt="Avatar"
            />
          </div>
        </div>
        
        <div className="pt-16 pb-8 px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
            <p className="text-slate-500">{profile.email}</p>
            <p className="text-xs text-slate-400 mt-1">Bergabung sejak Januari 2024</p>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-colors ${
              isEditing ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
            }`}
          >
            {isEditing ? 'Simpan Perubahan' : 'Edit Profil'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-8 pb-8 border-t pt-8">
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Informasi Pribadi</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Nama Lengkap</label>
                {isEditing ? (
                  <input 
                    className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" 
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                ) : (
                  <div className="text-slate-700 font-medium">{profile.name}</div>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Nomor Telepon</label>
                {isEditing ? (
                  <input 
                    className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" 
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                ) : (
                  <div className="text-slate-700 font-medium">{profile.phone}</div>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Alamat</label>
                {isEditing ? (
                  <textarea 
                    className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" 
                    value={profile.address}
                    onChange={(e) => setProfile({...profile, address: e.target.value})}
                  />
                ) : (
                  <div className="text-slate-700 font-medium">{profile.address}</div>
                )}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Pengaturan & Keamanan</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors group">
                <span className="text-sm font-semibold text-slate-700">Ganti Kata Sandi</span>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors group">
                <span className="text-sm font-semibold text-slate-700">Preferensi Notifikasi</span>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>
              </button>
              <button className="w-full text-left p-4 text-red-600 font-bold text-sm hover:bg-red-50 rounded-2xl transition-colors mt-4">
                Keluar dari Akun
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
