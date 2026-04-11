"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  const [userData, setUserData] = useState({ firstName: 'User', photoUrl: '' });
  
  const hubRef = useRef<LottieRefCurrentProps>(null);
  const storeRef = useRef<LottieRefCurrentProps>(null);
  const socketRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      setUserData({
        firstName: tg.initDataUnsafe?.user?.first_name || 'User',
        photoUrl: tg.initDataUnsafe?.user?.photo_url || ''
      });
    }
  }, []);

  const handleTabClick = (tab: string, ref: React.RefObject<LottieRefCurrentProps>) => {
    setActiveTab(tab);
    ref.current?.stop();
    ref.current?.play();
    if ((window as any).Telegram?.WebApp?.HapticFeedback) {
      (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
  };

  const tabs = [
    { id: 'hub', label: 'Hub', ref: hubRef, icon: '/Icons/Hub.json' },
    { id: 'store', label: 'Store', ref: storeRef, icon: '/Icons/Store.json' },
    { id: 'socket', label: 'Socket', ref: socketRef, icon: '/Icons/Socket.json' }
  ];

  return (
    <div className="h-screen w-full flex flex-col pt-[calc(env(safe-area-inset-top)+10px)]">
      
      {/* Header */}
      <header className="px-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={28} height={28} />
          <span className="text-xl font-bold tracking-tight">PluginBox</span>
        </div>
        <div className="w-8 h-8 bg-zinc-800 rounded-lg overflow-hidden border border-white/10">
          {userData.photoUrl ? (
            <img src={userData.photoUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] font-bold">
              {userData.firstName[0]}
            </div>
          )}
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-6 mb-8 flex justify-center">
        <div className="w-full max-w-[350px] bg-zinc-900/80 rounded-2xl p-3 flex items-center gap-3 border border-white/5">
          <div className="w-5 h-5 opacity-50">
             <Image src="/Icons/Search.json" alt="Search" width={20} height={20} className="invert" />
          </div>
          <input 
            type="text" 
            placeholder="Search plugins, names, authors..." 
            className="bg-transparent border-none outline-none text-[15px] text-white/60 w-full"
            readOnly
          />
        </div>
      </div>

      {/* Empty State (Middle) */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-40 h-40 mb-6 opacity-80">
            <Image src="/Pics/None.png" alt="Empty" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">No plugins yet</h3>
          <p className="text-white/50 text-center text-[15px] max-w-[240px]">
            It's empty here. Time to download your first <span className="text-white">plugin</span>!
          </p>
        </motion.div>
      </div>

      {/* Navigation TabBar */}
      <div className="t-wrap">
        <div className="tbar">
          <div 
            className="slid" 
            style={{ 
              width: '33.33%', 
              left: activeTab === 'hub' ? '4px' : activeTab === 'store' ? '33.33%' : '63.33%',
              opacity: 1
            }} 
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.ref)}
              className={`t-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              <div className={`w-6 h-6 mb-1 transition-all ${activeTab === tab.id ? 'brightness-200' : 'grayscale brightness-75'}`}>
                {/* Здесь должен быть Lottie, но для примера ставим заглушку */}
                <div className="w-full h-full bg-current rounded-sm opacity-20" />
              </div>
              <span className="t-txt">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
