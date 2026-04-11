"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  const [userData, setUserData] = useState({ firstName: 'U', photoUrl: '' });

  // Фиксированная ширина для всех центральных блоков (как на референсе)
  const contentWidth = "w-[88%] max-w-[340px]";

  // Подтягиваем данные из Telegram
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand(); // Гарантируем fullscreen
      setUserData({
        firstName: tg.initDataUnsafe?.user?.first_name || 'U',
        photoUrl: tg.initDataUnsafe?.user?.photo_url || ''
      });
    }
  }, []);

  const tabs = [
    { id: 'hub', label: 'Hub', icon: '/Icons/Hub.json' },
    { id: 'store', label: 'Store', icon: '/Icons/Store.json' },
    { id: 'socket', label: 'Socket', icon: '/Icons/Socket.json' }
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-black text-white overflow-hidden items-center select-none touch-none">
      
      {/* 1. HEADER (Safe Area учтен жестким pt) */}
      <header className={`${contentWidth} flex justify-between items-center pt-[60px] mb-5`}>
        <div className="flex items-center gap-2.5">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={22} height={22} className="opacity-90" />
          <span className="text-[19px] font-semibold tracking-tight">PluginBox</span>
        </div>
        {/* Аватарка: Квадратная, компактная */}
        <div className="w-[28px] h-[28px] bg-zinc-800 rounded-[7px] border border-white/10 overflow-hidden shadow-inner">
          {userData.photoUrl ? (
            <img src={userData.photoUrl} alt="Av" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[12px] font-bold text-zinc-500">
              {userData.firstName[0]}
            </div>
          )}
        </div>
      </header>

      {/* 2. SEARCH BAR (Уменьшена высота, стиль под референс) */}
      <div className={`${contentWidth} mb-10`}>
        <div className="w-full bg-[#1c1c1e] rounded-full px-4 py-2.5 flex items-center gap-3 border border-white/[0.03]">
          <div className="w-4 h-4 flex items-center justify-center opacity-30 invert">
             <Image src="/Icons/Search.json" alt="S" width={16} height={16} unoptimized />
          </div>
          <input 
            type="text" 
            placeholder="Plugins, authors, names..." 
            className="bg-transparent border-none outline-none text-[14px] text-[#8e8e93] w-full placeholder:text-[#8e8e93]/70 caret-white"
            readOnly
          />
        </div>
      </div>

      {/* 3. EMPTY STATE (Центрирован в оставшемся пространстве) */}
      <div className="flex-1 flex flex-col items-center justify-center pb-[120px]">
        <div className="relative w-40 h-40 mb-5 opacity-70">
          <Image src="/Pics/None.png" alt="None" fill className="object-contain" />
        </div>
        <h3 className="text-[18px] font-semibold text-white/90 mb-1.5">No plugins yet</h3>
        <p className="text-[#8e8e93] text-center text-[14px] max-w-[250px] leading-relaxed">
          It's empty here. Time to download your first <span className="text-white/90 font-medium">plugin</span>!
        </p>
      </div>

      {/* 4. NAVIGATION TABBAR (Твой CSS + Правки по высоте и позиции) */}
      <div className="fixed bottom-[30px] width-full flex justify-center z-[1000] select-none">
        <div className="tbar-refined">
          {/* Слайдер-подложка (Pill) */}
          <div 
            className="slid-refined" 
            style={{ 
              width: 'calc(33.33% - 6px)', 
              left: activeTab === 'hub' ? '3px' : activeTab === 'store' ? '33.33%' : '66.66%',
            }} 
          />
          
          {/* Кнопки меню */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if ((window as any).Telegram?.WebApp?.HapticFeedback) {
                  (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('light');
                }
              }}
              className={`t-item-refined ${activeTab === tab.id ? 'active' : ''}`}
            >
              {/* Компактные иконки (Lottie placeholder) */}
              <div className="ic-refined flex items-center justify-center">
                <div className={`w-5 h-5 bg-current rounded-sm opacity-20`} />
              </div>
              <span className="t-txt-refined">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
