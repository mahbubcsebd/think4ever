'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';

export default function ProofBar({ className = "px-4 md:px-12 pt-12 md:pt-16 bg-white" }) {
  return (
    <div className={`relative z-30 w-full flex justify-center ${className}`}>
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="bg-white/2 backdrop-blur-[3px] border border-zinc-200/60 shadow-2xl shadow-zinc-200/40 rounded-[20px] md:rounded-[24px] flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 overflow-hidden"
        >
          <div className="flex-1 py-8 px-4 text-center hover:bg-zinc-50/50 transition-colors">
            <div className="text-[36px] md:text-[44px] font-extrabold mb-2 tracking-tight leading-none">
              <GradientText>{'<'}4 min</GradientText>
            </div>
            <div className="text-[14px] md:text-[15px] text-zinc-600 font-medium leading-snug max-w-[180px] mx-auto">
              Any repo mapped,
              <br />
              zero config
            </div>
          </div>
          <div className="flex-1 py-8 px-4 text-center hover:bg-zinc-50/50 transition-colors">
            <div className="text-[36px] md:text-[44px] font-extrabold mb-2 tracking-tight leading-none">
              <GradientText>157+</GradientText>
            </div>
            <div className="text-[14px] md:text-[15px] text-zinc-600 font-medium leading-snug max-w-[200px] mx-auto">
              Tech stacks supported
              <br />
              out of the box
            </div>
          </div>
          <div className="flex-1 py-8 px-4 text-center hover:bg-zinc-50/50 transition-colors">
            <div className="text-[36px] md:text-[44px] font-extrabold mb-2 tracking-tight leading-none">
              <GradientText>Zero drift</GradientText>
            </div>
            <div className="text-[14px] md:text-[15px] text-zinc-600 font-medium leading-snug max-w-[200px] mx-auto">
              Code, docs and architecture
              <br />
              always in sync
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
