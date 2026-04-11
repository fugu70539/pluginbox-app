"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  
  // Ширина будет зафиксирована для всех элементов
  const contentWidth = "w-[90%] max-w-[360px]";

  const tabs = [
    { id: 'hub', label: 'Hub', icon: 'Hub' },
    { id: 'store', label: 'Store', icon: 'Store' },
    { id: 'socket', label: 'Socket', icon: 'Socket' }
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-black pt-[calc(env(safe-area-inset-top)+20px)] items-center">
      
      {/* Header: Выровнен по ширине контента */}
      <header className={`${contentWidth} flex justify-between items-center mb-6`}>
        <div className="flex items-center gap-2">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={26} height={26} />
          <span className="text-[22px] font-bold tracking-tight text-white">PluginBox</span>
        </div>
        {/* Аватарка в квадрате со скруглением, размер под стать заголовку */}
        <div className="w-[30px] h-[30px] bg-zinc-800 rounded-[8px] border border-white/10 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
        </div>
      </header>

      {/* Search Bar: Точь-в-точь по ширине и с круглыми углами */}
      <div className={`${contentWidth} mb-12`}>
        <div className="w-full bg-[#19191b] rounded-full px-4 py-3 flex items-center gap-3 border border-white/5">
          <div className="w-5 h-5 flex items-center justify-center opacity-40">
             <Image src="/Icons/Search.json" alt="Search" width={18} height={18} unoptimized className="invert" />
          </div>
          <input 
            type="text" 
            placeholder="Search plugins, names, authors..." 
            className="bg-transparent border-none outline-none text-[15px] text-[#8e8e93] w-full placeholder:text-[#8e8e93]"
          />
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center pb-32">
        <div className="relative w-44 h-44 mb-6">
          <Image src="/Pics/None.png" alt="None" fill className="object-contain" />
        </div>
        <h3 className="text-[20px] font-bold text-white mb-2">No plugins yet</h3>
        <p className="text-[#8e8e93] text-center text-[15px] max-w-[260px] leading-relaxed">
          It's empty here. Time to download your first <span className="text-white">plugin</span>!
        </p>
      </div>

      {/* Navigation: Твой CSS в действии */}
      <div className="t-wrap">
        <div className="tbar">
          <div 
            className="slid" 
            style={{ 
              width: 'calc(33.33% - 4px)', 
              left: activeTab === 'hub' ? '4px' : activeTab === 'store' ? '33.33%' : '66.66%',
              opacity: 1
            }} 
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`t-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              <div className="ic flex items-center justify-center">
                {/* Здесь будет твой Lottie. Пока держим цвет через фильтры как в твоем CSS */}
                <div className={`w-6 h-6 bg-current rounded-sm opacity-30`} />
              </div>
              <span className="t-txt">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
