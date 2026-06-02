import React from 'react';
import { Search } from 'lucide-react';
import BreathingBlob from '@/components/ui/BreathingBlob';
import { motion } from 'framer-motion';

export const FAQHero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="bg-[#fcfdfe] pt-28 pb-16 sm:pt-36 sm:pb-20 text-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[160%] bg-[#07A7E1]/5 blur-3xl transform rotate-12 rounded-full" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-[#093cad]/5 blur-3xl transform -rotate-12 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-[40px] md:text-[54px] font-bold text-[#09090D] mb-4 tracking-tight leading-[1.1] inline-flex flex-wrap justify-center items-center gap-x-3"
        >
          <BreathingBlob /> Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07A7E1] to-[#093cad]">Questions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[#555B5E] text-[14px] sm:text-[15px] mb-10 font-medium tracking-wide"
        >
          Find answers to common questions about our platform, pricing, onboarding, and support.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto mt-4"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search FAQ — type a keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[52px] pl-12 pr-6 bg-white border border-[#e2e8f0] rounded-xl text-[#353B3E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07A7E1]/30 focus:border-[#07A7E1] transition-all text-[15px] shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};
