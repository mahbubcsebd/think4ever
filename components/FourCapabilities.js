'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function FourCapabilities() {
  const cards = [
    {
      title: 'See the blast radius before you commit.',
      desc: 'Click any component. Every upstream and downstream dependency lights up. Know exactly what breaks before it does — not after CI fails.',
      highlight: 'Full dependency graph',
      subtext: 'BEFORE EVERY COMMIT',
      badgeBg: 'bg-slate-200/75',
      badgeText: 'text-slate-600',
    },
    {
      title: 'Your agents, one spec.',
      desc: "One MCP endpoint. Cursor, Claude Code, Windsurf all read from the same architectural spec. Switch tools mid-build. Context doesn't reset.",
      highlight: 'MCP-native',
      subtext: 'NO LOCK-IN. NO CONTEXT LOSS.',
      badgeBg: 'bg-[#e0f7ff]/70',
      badgeText: 'text-[#0284c7]',
    },
    {
      title: 'Architect first. Code second.',
      desc: 'A dedicated design workspace to define data models, business flows, roles, and dependencies before any files are created. Switch to Dev mode. The blueprint is already there.',
      highlight: '2 modes',
      subtext: 'ONE SHARED BLUEPRINT',
      badgeBg: 'bg-[#dbedff]',
      badgeText: 'text-[#2563eb]',
    },
    {
      title: 'Define the target. Watch it execute.',
      desc: 'Give Think an objective. It breaks it into steps, runs them sequentially against the live blueprint, and tracks progress. Not a prompt. A build plan.',
      highlight: 'Autonomous',
      subtext: 'GOAL-TO-DEPLOY EXECUTION',
      badgeBg: 'bg-slate-200/75',
      badgeText: 'text-slate-600',
    },
  ];

  return (
    <SplitSection
      id="four-capabilities"
      watermarkText="DIFFERENT"
      leftTitle="What makes think4ever different"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group flex bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full relative"
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-[20px] font-bold text-[#09090D] leading-[1.3] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal">
                      {card.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-1.5 pt-5 border-t border-zinc-200/60">
                    <span className="text-[18px] md:text-[20px] font-bold tracking-tight inline-block w-fit">
                      <GradientText>{card.highlight}</GradientText>
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {card.subtext}
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
          Four capabilities. <GradientText>One platform.</GradientText>
        </motion.h2>
      </div>
    </SplitSection>
  );
}
