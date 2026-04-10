"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-between p-10 text-center overflow-hidden">
      
      <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full z-0" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[50%] bg-purple-600/10 blur-[140px] rounded-full z-0" />

      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full max-w-sm">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-40 h-40 mb-10"
        >
          <Image 
            src="/FacePic.png"
            alt="PluginBox Face"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold tracking-tight text-white mb-4"
        >
          Welcome to PluginBox
        </motion.h1>

        <motion.p 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-zinc-500 text-sm leading-relaxed max-w-[290px]"
        >
          Download, create and use plugins directly in Telegram chats, channels and private messages to simplify the messenger experience.
        </motion.p>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-full max-w-xs z-10 pb-12"
      >
        <button className="glass-button w-full text-white font-semibold py-4 rounded-full text-base">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
