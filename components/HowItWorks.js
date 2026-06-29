'use client';

import { motion } from 'framer-motion';
import {
  GitBranch,
  LayoutGrid,
  Maximize,
  MessageSquare,
  Radar,
  Rocket,
} from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function HowItWorks() {
  const cards = [
    {
      num: '01',
      icon: GitBranch,
      title: 'Connect your repo',
      desc: 'Drop your repo or start fresh. T4E maps your stack, dependencies and entry points automatically.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
      iconColor: 'text-[#07A7E1]',
      iconBg: 'bg-[#07A7E1]/10',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Define what to build',
      desc: 'Type, talk or paste a ticket. AI clarifies until the spec is unambiguous. No lost context between ticket and code.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
      iconColor: 'text-[#093cad]',
      iconBg: 'bg-[#093cad]/10',
    },
    {
      num: '03',
      icon: Maximize,
      title: 'Map your architecture',
      desc: 'Live system map. Every module, service and dependency. Clickable, navigable, always current.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
      iconColor: 'text-[#07A7E1]',
      iconBg: 'bg-[#07A7E1]/10',
    },
    {
      num: '04',
      icon: Radar,
      title: 'See dependencies',
      desc: 'Click any node. See every upstream and downstream impact before you write a line.',
      pill: 'EXISTING CODE',
      pillType: 'darkBlue',
      iconColor: 'text-[#093cad]',
      iconBg: 'bg-[#093cad]/10',
    },
    {
      num: '05',
      icon: LayoutGrid,
      title: 'Model your data',
      desc: 'Visual ERD synced across every stage. Change a schema — docs, code and tests update with it.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
      iconColor: 'text-[#07A7E1]',
      iconBg: 'bg-[#07A7E1]/10',
    },
    {
      num: '06',
      icon: Rocket,
      title: 'Ship to production',
      desc: 'Generate code, run tests, deploy. Docs auto-generated and versioned with every release.',
      pill: 'BOTH PATHS',
      pillType: 'blue',
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
            className="grid grid-cols-1 lg:grid-cols-3 relative z-10 max-w-5xl mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`group flex flex-col p-8 md:p-10 bg-white/40 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#093cad]/10 hover:bg-white/60 hover:z-20 relative origin-center border border-white/50 h-full
                  ${idx === 0 ? 'rounded-t-[24px] lg:rounded-none lg:rounded-tl-[24px]' : ''}
                  ${idx === 1 ? '-mt-[1px] lg:mt-0 lg:-ml-[1px]' : ''}
                  ${idx === 2 ? '-mt-[1px] lg:mt-0 lg:-ml-[1px] lg:rounded-tr-[24px]' : ''}
                  ${idx === 3 ? '-mt-[1px] lg:rounded-bl-[24px]' : ''}
                  ${idx === 4 ? '-mt-[1px] lg:-ml-[1px]' : ''}
                  ${idx === 5 ? 'rounded-b-[24px] lg:rounded-none lg:rounded-br-[24px] -mt-[1px] lg:-ml-[1px]' : ''}
                `}
              >
                {/* Number */}
                <div className="text-[13px] font-semibold text-[#89A4C4] mb-4">
                  {card.num}
                </div>

                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-[12px] ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-8`}
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
                <div className="mt-10">
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
          One model. Every stage. <GradientText>Always in sync.</GradientText>
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-[#353B3E] leading-[1.6] font-medium max-w-[500px]"
        >
          Change anything — requirements, code, or architecture — it propagates
          everywhere.
        </motion.p>
      </div>
    </SplitSection>
  );
}
