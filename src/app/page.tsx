"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShoppingBag, Terminal, Settings } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'welcome' | 'main'>('welcome');
  const [activeTab, setActiveTab] = useState<'hub' | 'store' | 'socket'>('hub');

  // Компонент приветствия
  const WelcomeView = (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-between p-8 text-center overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-24 h-24 mb-8 bg-zinc-900 border border-white/10 rounded-[24px] flex items-center justify-center shadow-2xl text-4xl font-bold text-white">
          P
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl font-bold text-white mb-3">
          PluginBox
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-zinc-400 text-sm leading-relaxed max-w-[260px]">
          Скачивайте, создавайте и используйте плагины прямо в Telegram.
        </motion.p>
      </div>

      <div className="w-full max-w-xs z-10 pb-10">
        <button 
          onClick={() => setView('main')}
          className="w-full bg-white text-black font-semibold py-4 rounded-2xl mb-4 active:scale-95 transition-transform"
        >
          Продолжить
        </button>
      </div>
    </div>
  );

  // Компонент основного интерфейса
  const MainView = (
    <div className="min-h-screen bg-black text-white flex flex-col pb-24">
      {/* Шапка */}
      <header className="p-6 pt-12 flex justify-between items-center">
        <h1 className="text-3xl font-bold capitalize">{activeTab}</h1>
        <button className="p-2 bg-zinc-900 rounded-full border border-white/10 active:scale-90 transition-transform">
          <Settings size={20} className="text-zinc-400" />
        </button>
      </header>

      {/* Контент разделов */}
      <main className="flex-1 px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'hub' && (
            <motion.div key="hub" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[24px] text-center">
                <p className="text-zinc-500 text-sm">У вас пока нет активных плагинов. Загляните в Store!</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'store' && (
            <motion.div key="store" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <div className="grid grid-cols-1 gap-4">
                {['Bridge', 'Ghost', 'Lingo'].map((p) => (
                  <div key={p} className="bg-zinc-900/80 p-5 rounded-[24px] border border-white/10 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{p}</h3>
                      <p className="text-xs text-zinc-500">Утилита для текста</p>
                    </div>
                    <button className="bg-blue-600 px-4 py-1.5 rounded-full text-xs font-medium">Add</button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'socket' && (
            <motion.div key="socket" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-[24px]">
                <h3 className="text-blue-500 font-semibold mb-2 flex items-center gap-2">
                  <Terminal size={16} /> Socket Beta
                </h3>
                <p className="text-sm text-zinc-400">Среда для разработки плагинов. Скоро здесь появится редактор манифестов.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Навигация (Tab Bar) */}
      <nav className="fixed bottom-6 left-6 right-6 h-20 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] flex items-center justify-around px-2 z-50">
        <button onClick={() => setActiveTab('hub')} className={`flex flex-col items-center gap-1 ${activeTab === 'hub' ? 'text-blue-500' : 'text-zinc-500'}`}>
          <Home size={24} />
          <span className="text-[10px] font-medium">Hub</span>
        </button>
        <button onClick={() => setActiveTab('store')} className={`flex flex-col items-center gap-1 ${activeTab === 'store' ? 'text-blue-500' : 'text-zinc-500'}`}>
          <ShoppingBag size={24} />
          <span className="text-[10px] font-medium">Store</span>
        </button>
        <button onClick={() => setActiveTab('socket')} className={`flex flex-col items-center gap-1 ${activeTab === 'socket' ? 'text-blue-500' : 'text-zinc-500'}`}>
          <Terminal size={24} />
          <span className="text-[10px] font-medium">Socket</span>
        </button>
      </nav>
    </div>
  );

  return view === 'welcome' ? WelcomeView : MainView;
}
