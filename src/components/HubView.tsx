"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

// Импорты анимаций
import hubIcon from '../../public/Icons/Hub.json';
import storeIcon from '../../public/Icons/Store.json';
import socketIcon from '../../public/Icons/Socket.json';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  
  // Рефы для управления скоростью и проигрыванием
  const storeRef = useRef<LottieRefCurrentProps>(null);
  const hubRef = useRef<LottieRefCurrentProps>(null);
  const socketRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand(); // Расширяем на весь экран
      tg.headerColor = '#1a1a1a'; // Цвет статус-бара в тон фону
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    // Сбрасываем и играем один раз
    const refs: Record<string, any> = { hub: hubRef, store: storeRef, socket: socketRef };
    const currentRef = refs[tabId]?.current;
    
    if (currentRef) {
      currentRef.stop();
      if (tabId === 'store') {
        currentRef.setSpeed(15); // В 15 раз быстрее
      } else {
        currentRef.setSpeed(1.5); // Обычные чуть бодрее
      }
      currentRef.play();
    }

    if ((window as any).Telegram?.WebApp?.HapticFeedback) {
      (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
  };

  const contentWidth = "w-[88%] max-w-[350px]";

  return (
    <div className="h-screen w-full flex flex-col items-center overflow-hidden bg-hub-gradient">
      
      {/* Header с учетом Safe Area из Telegram API */}
      <header 
        className={`${contentWidth} flex justify-between items-center mb-10`}
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 20px)' }}
      >
        <div className="flex items-center gap-2">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={24} height={24} />
          <span className="text-xl font-bold tracking-tight text-white">PluginBox</span>
        </div>
        <div className="w-[32px] h-[32px] bg-zinc-800 rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <div className="w-full h-full bg-gradient-to-tr from-zinc-700 to-zinc-900" />
        </div>
      </header>

      {/* Пустое состояние (Поиск удален) */}
      <div className="flex-1 flex flex-col items-center justify-center pb-40">
        <div className="relative w-44 h-44 mb-6 grayscale opacity-60">
          <Image src="/Pics/None.png" alt="None" fill className="object-contain" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Плагинов нет</h3>
        <p className="text-[#8e8e93] text-center text-[15px] max-w-[280px] leading-relaxed">
          Сейчас здесь пусто. Самое время скачать свой первый <span className="text-white font-medium">плагин</span>!
        </p>
      </div>

      {/* TabBar с исправленным пузырем */}
      <div className="t-wrap">
        <div className="tbar">
          {/* Исправленный "Пузырь" — теперь ездит ровно */}
          <div 
            className="slid" 
            style={{ 
              width: 'calc(33.33% - 8px)', 
              left: activeTab === 'hub' ? '4px' : activeTab === 'store' ? 'calc(33.33% + 0px)' : 'calc(66.66% - 4px)'
            }} 
          />
          
          <button onClick={() => handleTabClick('hub')} className={`t-item ${activeTab === 'hub' ? 'active' : ''}`}>
             <div className="w-7 h-7">
                <Lottie lottieRef={hubRef} animationData={hubIcon} loop={false} autoplay={false} />
             </div>
             <span className="t-txt">Hub</span>
          </button>

          <button onClick={() => handleTabClick('store')} className={`t-item ${activeTab === 'store' ? 'active' : ''}`}>
             <div className="w-7 h-7">
                <Lottie lottieRef={storeRef} animationData={storeIcon} loop={false} autoplay={false} />
             </div>
             <span className="t-txt">Store</span>
          </button>

          <button onClick={() => handleTabClick('socket')} className={`t-item ${activeTab === 'socket' ? 'active' : ''}`}>
             <div className="w-7 h-7">
                <Lottie lottieRef={socketRef} animationData={socketIcon} loop={false} autoplay={false} />
             </div>
             <span className="t-txt">Socket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
