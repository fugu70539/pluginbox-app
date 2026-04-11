"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import HubView from '@/components/HubView';

export default function Page() {
  // Состояние: false — показываем Welcome, true — показываем Hub
  const [showHub, setShowHub] = useState(false);

  return (
    <main className="h-screen w-full bg-black overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!showHub ? (
          /* ЭКРАН ПРИВЕТСТВИЯ */
          <motion.div 
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="h-full w-full flex flex-col items-center justify-between p-10 relative"
          >
            {/* Фоновое свечение */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-white/5 blur-[120px] rounded-full z-0" />
            
            <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
              {/* Логотип FacePic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-64 h-64 mb-10"
              >
                <Image 
                  src="/Pics/FacePic.PNG" 
                  alt="PluginBox Face" 
                  fill 
                  priority 
                  className="object-contain" 
                />
              </motion.div>

              {/* Заголовок */}
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[28px] font-bold tracking-tight text-white mb-4 text-center"
              >
                Welcome to PluginBox
              </motion.h1>

              {/* Описание */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/50 text-[16px] leading-relaxed max-w-[320px] text-center px-2"
              >
                Download, create and use plugins directly in Telegram chats and channels to enhance your messenger experience.
              </motion.p>
            </div>

            {/* Блок с кнопкой и юридическим текстом */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-xs z-10 pb-8 flex flex-col items-center"
            >
              <button 
                onClick={() => {
                  // Вибрация при нажатии (если мы в Telegram)
                  if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp?.HapticFeedback) {
                    (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('medium');
                  }
                  setShowHub(true);
                }}
                className="white-glass-button w-full text-black font-bold py-4 rounded-full text-[16px] mb-6"
              >
                Get Started
              </button>

              <p className="text-white/50 text-[11px] leading-normal text-center max-w-[270px]">
                By continuing, you accept the <span className="text-white font-medium">User Agreement</span> and <span className="text-white font-medium">Privacy Policy</span>.
              </p>
            </motion.div>
          </motion.div>
        ) : (
          /* ЭКРАН ХАБА */
          <motion.div
            key="hub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full"
          >
            <HubView />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
