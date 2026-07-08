'use client';

import { motion } from 'framer-motion';
import { Boxes, GitBranch, Rocket, TerminalSquare } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function HowItWorks() {
  const cards = [
    {
      num: '01',
      icon: GitBranch,
      title: 'Connect your repo',
      desc: 'Paste a GitHub URL, drop a ZIP, or start from scratch. Sidekick reads your stack, maps your dependencies, and generates a structured architectural blueprint — in under 4 minutes. Zero config.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
      iconColor: 'text-[#07A7E1]',
      iconBg: 'bg-[#07A7E1]/10',
    },
    {
      num: '02',
      icon: Boxes,
      title: 'Blueprint your system',
      desc: 'Every dependency, data model, business flow, and role — live and connected before a line of code is written. Click any node. See upstream and downstream impact instantly. Fix it before it breaks.',
      pill: 'DESIGN PHASE',
      pillType: 'darkBlue',
      iconColor: 'text-[#093cad]',
      iconBg: 'bg-[#093cad]/10',
    },
    {
      num: '03',
      icon: TerminalSquare,
      title: 'Build in Dev Mode',
      desc: 'Build using Think coding agent or your favorite coding agent. Natural language commands. Live file tree builds in real time. Use Cursor, Claude Code, Codex, or Windsurf — every agent reads from the same blueprint.',
      pill: 'DEVELOPMENT',
      pillType: 'blue',
      iconColor: 'text-[#07A7E1]',
      iconBg: 'bg-[#07A7E1]/10',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Ship it',
      desc: 'Run tests, deploy, done. Docs auto-generated and versioned with every release. Post-deployment agents keep monitoring. Your blueprint stays in sync after you ship.',
      pill: 'DEPLOYMENT',
      pillType: 'darkBlue',
      iconColor: 'text-[#093cad]',
      iconBg: 'bg-[#093cad]/10',
    },
  ];

  return (
    <SplitSection
      id="how-it-works"
      watermarkText="IN SYNC"
      leftTitle="How It Works"
      bottomContent={
        <div className="w-full mt-8 md:mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 relative z-10 max-w-6xl mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`group flex flex-col p-6 md:p-8 bg-white transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-200 hover:z-20 relative origin-center border border-[#E0E0E0] h-full
                  ${idx === 0 ? 'rounded-t-[24px] md:rounded-tr-none md:rounded-tl-[24px]' : ''}
                  ${idx === 1 ? '-mt-[1px] md:mt-0 md:-ml-[1px] md:rounded-tr-[24px]' : ''}
                  ${idx === 2 ? '-mt-[1px] md:rounded-bl-[24px]' : ''}
                  ${idx === 3 ? '-mt-[1px] rounded-b-[24px] md:rounded-bl-none md:rounded-br-[24px] md:-ml-[1px]' : ''}
                `}
              >
                {/* Number */}
                <div className="text-[13px] font-semibold text-[#89A4C4] mb-4">
                  {card.num}
                </div>

                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-[12px] ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-6`}
                >
                  <card.icon strokeWidth={2} className="w-5 h-5" />
                </div>

                {/* Title */}
                <h4 className="text-[20px] font-bold text-[#09090D] mb-3 leading-snug tracking-tight">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="text-[15px] leading-relaxed text-[#5C6E85] font-medium flex-grow">
                  {card.desc}
                </p>

                {/* Pill */}
                <div className="mt-6">
                  <span
                    className={`inline-block px-3 py-[6px] rounded border text-[11px] font-bold uppercase tracking-wider leading-none ${
                      card.pillType === 'darkBlue'
                        ? 'border-[#093cad]/20 bg-[#093cad]/5 text-[#093cad]'
                        : 'border-[#07A7E1]/20 bg-[#07A7E1]/5 text-[#07A7E1]'
                    }`}
                  >
                    {card.pill}
                  </span>
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
          Idea to production. <GradientText>Four steps.</GradientText>
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-[#353B3E] leading-[1.6] font-medium max-w-[500px]"
        >
          No blank page. No drift. No rework. Change anything — requirements,
          code, or architecture — it propagates everywhere.
        </motion.p>
      </div>
    </SplitSection>
  );
}
