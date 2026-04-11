"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  
  // Единый стандарт ширины для всего интерфейса
  const containerStyle = "w-[86%] max-width-[350px]";

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center overflow-hidden relative">
      
      {/* 1. ШАПКА: Опустили ниже, чтобы не мешала системной кнопке Telegram */}
      <header className={`${containerStyle} flex justify-between items-center mt-16 mb-6`}>
        <div className="flex items-center gap-2">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={24} height={24} />
          <span className="text-xl font-bold tracking-tight text-white">PluginBox</span>
        </div>
        
        {/* Аватарка: Квадратная, размер как у заголовка */}
        <div className="w-[30px] h-[30px] bg-zinc-800 rounded-lg border border-white/10 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-zinc-700 to-zinc-900" />
        </div>
      </header>

      {/* 2. ПОИСК: Тонкий, с круглыми углами */}
      <div className={`${containerStyle} mb-10`}>
        <div className="w-full bg-[#19191b] rounded-full px-4 py-2 flex items-center gap-3 border border-white/5">
          <div className="w-4 h-4 opacity-40">
            <Image src="/Icons/Search.json" alt="S" width={16} height={16} unoptimized className="invert" />
          </div>
          <input 
            type="text" 
            placeholder="Search plugins, names, authors..." 
            className="bg-transparent border-none outline-none text-[14px] text-[#8e8e93] w-full placeholder:text-[#8e8e93]"
          />
        </div>
      </div>

      {/* 3. КОНТЕНТ: "Плагинов нет" */}
      <div className="flex-1 flex flex-col items-center justify-center pb-32">
        <div className="relative w-40 h-40 mb-6">
          <Image src="/Pics/None.png" alt="None" fill className="object-contain opacity-80" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No plugins yet</h3>
        <p className="text-[#8e8e93] text-center text-[15px] max-w-[260px] leading-relaxed px-4">
          It's empty here. Time to download your first <span className="text-white">plugin</span>!
        </p>
      </div>

      {/* 4. ТВОЁ МЕНЮ (TabBar) */}
      <div className="t-wrap">
        <div className="tbar">
          <div 
            className="slid" 
            style={{ 
              width: 'calc(33.33% - 8px)', 
              left: activeTab === 'hub' ? '4px' : activeTab === 'store' ? '33.33%' : '66.66%'
            }} 
          />
          
          <button onClick={() => setActiveTab('hub')} className={`t-item ${activeTab === 'hub' ? 'active' : ''}`}>
             <div className="w-5 h-5 mb-1 bg-current opacity-20 rounded-sm" />
             <span className="t-txt">Hub</span>
          </button>

          <button onClick={() => setActiveTab('store')} className={`t-item ${activeTab === 'store' ? 'active' : ''}`}>
             <div className="w-5 h-5 mb-1 bg-current opacity-20 rounded-sm" />
             <span className="t-txt">Store</span>
          </button>

          <button onClick={() => setActiveTab('socket')} className={`t-item ${activeTab === 'socket' ? 'active' : ''}`}>
             <div className="w-5 h-5 mb-1 bg-current opacity-20 rounded-sm" />
             <span className="t-txt">Socket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
