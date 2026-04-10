"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-between p-8 text-center overflow-hidden font-sans">
      {/* Эффект свечения на фоне */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-24 h-24 mb-8 bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 rounded-[24px] flex items-center justify-center shadow-2xl"
        >
          <span className="text-4xl font-bold text-white">P</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-white mb-3"
        >
          Добро пожаловать в <span className="text-blue-500">PluginBox</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-zinc-400 text-sm leading-relaxed max-w-[260px]"
        >
          Скачивайте, создавайте и используйте плагины прямо в чатах Telegram.
        </motion.p>
      </div>

      <div className="w-full max-w-xs z-10 pb-10">
        <button className="w-full bg-white text-black font-semibold py-4 rounded-2xl mb-4 active:scale-95 transition-transform">
          Продолжить
        </button>
        <p className="text-[10px] text-zinc-600">
          Продолжая, вы соглашаетесь с Политикой Конфиденциальности
        </p>
      </div>
    </div>
  );
}
