'use client';

import { motion } from 'framer-motion';
import { Blocks, Link2, Zap } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function WhatWeDo() {
  const cards = [
    {
      icon: <Blocks className="w-5 h-5 text-[#093cad]" strokeWidth={2.5} />,
      iconBg: 'bg-[#eaf0ff]',
      title: 'Start from scratch',
      text: 'Describe your idea in plain language — type it, voice it, or paste a ticket. T4E generates requirements, architecture, and working code end-to-end. No spec doc required.',
      bottomText: 'Build Motion',
      badgeBg: 'bg-[#eaf0ff]',
      badgeText: 'text-[#093cad]',
    },
    {
      icon: <Link2 className="w-5 h-5 text-[#07A7E1]" strokeWidth={2.5} />,
      iconBg: 'bg-[#e0f7ff]',
      title: 'Bring your own code',
      text: 'Drop your repo. T4E maps your entire stack — dependencies, architecture debt, undocumented relationships — in under 4 minutes. Zero config. 157+ tech stacks supported.',
      bottomText: 'Modernize Motion',
      badgeBg: 'bg-[#e0f7ff]',
      badgeText: 'text-[#07A7E1]',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#3b82f6]" strokeWidth={2.5} />,
      iconBg: 'bg-[#f0f4ff]',
      title: 'Always in sync',
      text: 'Change a requirement — the architecture and code update. Change the code — the docs and tests update. Bidirectional propagation across your entire SDLC. Always. Automatically.',
      bottomText: 'Zero Drift',
      badgeBg: 'bg-[#f0f4ff]',
      badgeText: 'text-[#3b82f6]',
    },
  ];

  return (
    <SplitSection
      id="starting-points"
      watermarkText="EXTEND"
      leftTitle="What We Do"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group flex bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-h-[320px] relative"
              >
                {/* Card Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex flex-col">
                    {/* Circle Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-bold text-[#09090D] leading-[1.3] mb-4">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal">
                      {card.text}
                    </p>
                  </div>

                  {/* Badge at the bottom */}
                  <div className="mt-8">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${card.badgeBg} ${card.badgeText}`}>
                      {card.bottomText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
        >
          You describe it. <GradientText>T4E builds it.</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          Most tools generate code then hand off. Think4ever holds your entire lifecycle — requirements, architecture, code, tests, and docs — as one living connected system. Change anything. Everything updates.
        </motion.p>
      </div>
    </SplitSection>
  );
}
