"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-between p-10 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-white/5 blur-[120px] rounded-full z-0" />

      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
        {/* FacePic Section - Increased Size */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 mb-10" // Increased from w-48 to w-64
        >
          <Image 
            src="/Pics/FacePic.PNG"
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
          className="text-[28px] font-bold tracking-tight text-white mb-4 text-center"
        >
          Welcome to PluginBox
        </motion.h1>

        {/* Description Section - Increased Size and Centered Formatting */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-[16px] leading-relaxed max-w-[320px] text-center px-2" // Increased font and max-width
        >
          Download, create and use plugins directly in Telegram chats and channels to enhance your messenger experience.
        </motion.p>
      </div>

      {/* Button and Legal Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-xs z-10 pb-8 flex flex-col items-center"
      >
        <button className="white-glass-button w-full text-black font-bold py-4 rounded-full text-[16px] mb-6">
          Get Started
        </button>

        {/* Legal Text - Small, Centered, White Links */}
        <p className="text-white/50 text-[11px] leading-normal text-center max-w-[270px]">
          By continuing, you accept the <span className="text-white">User Agreement</span> and <span className="text-white">Privacy Policy</span>.
        </p>
      </motion.div>
    </div>
  );
}
