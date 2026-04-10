"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-between p-10 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-white/5 blur-[120px] rounded-full z-0" />

      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
        {/* FacePic Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-48 h-48 mb-12"
        >
          <Image 
            src="/FacePic.png"
            alt="PluginBox Face"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Text Section */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[26px] font-bold tracking-tight text-white mb-3"
        >
          Welcome to PluginBox
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-[15px] leading-relaxed max-w-[280px] text-center"
        >
          Download, create and use plugins directly in Telegram chats and channels.
        </motion.p>
      </div>

      {/* Button Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-xs z-10 pb-10"
      >
        <button className="white-glass-button w-full text-black font-bold py-4 rounded-full text-[16px]">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
