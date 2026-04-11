"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function HubView() {
  const [activeTab, setActiveTab] = useState('hub');
  const contentWidth = "w-[86%] max-w-[350px]";

  const tabs = [
    { id: 'hub', label: 'Hub' },
    { id: 'store', label: 'Store' },
    { id: 'socket', label: 'Socket' }
  ];

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center overflow-hidden">
      
      {/* Header - Опустили ниже (mt-16) */}
      <header className={`${contentWidth} flex justify-between items-center mt-16 mb-6`}>
        <div className="flex items-center gap-2">
          <Image src="/Icons/BoxLogo.png" alt="Logo" width={24} height={24} />
          <span className="text-xl font-bold tracking-tight text-white">PluginBox</span>
        </div>
        <div className="w-[28px] h-[28px] bg-zinc-800 rounded-lg border border-white/10 overflow-hidden">
          <div className="w-full h-full bg-zinc-700 opacity-50" />
        </div>
      </header>

      {/* Search Bar - Тонкая и круглая */}
      <div className={`${contentWidth} mb-8`}>
        <div className="w-full bg-[#19191b] rounded-full px-4 py-2 flex items-center gap-3 border border-white/5">
          <div className="w-4 h-4 opacity-30 invert">
            <Image src="/Icons/Search.json" alt="S" width={16} height={16} unoptimized />
          </div>
          <input 
            type="text" 
            placeholder="Search plugins, authors..." 
            className="bg-transparent border-none outline-none text-[14px] text-[#8e8e93] w-full placeholder:text-[#8e8e93]"
          />
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center pb-32">
        <div className="relative w-40 h-40 mb-6 opacity-80">
          <Image src="/Pics/None.png" alt="None" fill className="object-contain" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">No plugins yet</h3>
        <p className="text-[#8e8e93] text-center text-[14px] max-w-[250px] leading-relaxed">
          It&apos;s empty here. Time to download your first <span className="text-white">plugin</span>!
        </p>
      </div>

      {/* TabBar */}
      <div className="t-wrap">
        <div className="tbar">
          <div 
            className="slid" 
            style={{ 
              width: 'calc(33.33% - 8px)', 
              left: activeTab === 'hub' ? '4px' : activeTab === 'store' ? '33.33%' : '66.66%'
            }} 
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`t-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              <div className="w-5 h-5 bg-current opacity-20 rounded-sm" />
              <span className="t-txt">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
